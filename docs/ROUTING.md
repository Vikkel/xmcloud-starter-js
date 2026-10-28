# Routing and wildcards

> Ported from `spd-csdk-verticals`. Examples that mention `industry-verticals/...`, FormaLux, Skywings or Smith+Nephew refer to that repo. In this repo demo hosts are `examples/{folder}/` and each demo has its own collection under `authoring/items/{collection}/`.

How a public URL becomes a Sitecore page in these rendering hosts, and how one Sitecore item can serve many URLs.

Every host under `industry-verticals/` is a Next.js Pages Router app. Sitecore chooses the page. Next.js does not have a file per content page.

## From URL to page

1. The browser requests a path such as `/products/wound-care/foam-dressing`.
2. Next.js matches `src/pages/[[...path]].tsx`. That file is the only page route for Sitecore content. `getStaticProps` calls `extractPath` and then `client.getPage(path, { locale })`.
3. The layout service resolves that path on the site named by `NEXT_PUBLIC_DEFAULT_SITE_NAME`. The site start item is Home, so Home is omitted from the public URL. `/sitecore/content/{collection}/{site}/Home/Products/Wound-Care/Foam-Dressing` is `/products/wound-care/foam-dressing`.
4. Sitecore returns that item's layout: device, placeholders, and renderings. The default page design still injects header and footer partials.
5. `client.getComponentData` runs `getComponentServerProps` on any rendering that exports it. The React tree renders from `.sitecore/component-map`.

`next.config.js` sets `i18n.locales`. The default locale is `en` and is not prefixed, so the public path has no `/en` segment. Item resolution is case-insensitive. These hosts publish lowercase paths.

A request that matches no item returns `notFound` from `getStaticProps`, and Next.js renders `src/pages/404.tsx`.

These files are Next.js routes. Sitecore does not resolve them:

| Path | Role |
|------|------|
| `src/pages/api/**` | Server endpoints |
| `src/pages/404.tsx`, `500.tsx`, `_error.tsx` | Error pages |
| `src/pages/feaas/render.tsx` | FEaaS editing render |
| `src/pages/_app.tsx` | App shell |

A file such as `src/pages/products/[id].tsx` would take `/products/{id}` away from the catch-all. Keep dynamic content on a Sitecore item, not on a second Next.js page file.

## Build and first request

`getStaticPaths` asks Sitecore for known page paths when `generateStaticPaths` is on and the app is not in development. That list is real items. It does not include every value a wildcard might accept.

`fallback` is `blocking`, and `revalidate` is 5 seconds. The first request for an unknown path, including a wildcard URL, renders on the server and is then cached. Development leaves the path list empty and uses the same fallback.

## Wildcard item

A wildcard is a Sitecore page whose item name is `*`. It matches one URL segment at that level when no real child has that name.

| Request | Resolves to |
|---------|-------------|
| `/products/advanced-wound-management` | The real child `Advanced-Wound-Management` |
| `/products/db.smith-and-nephew.product.acticoat` | `Home/Products/*`, when no item has that name |
| `/products/db.smith-and-nephew.product.acticoat/extra` | No match. `*` covers one segment. A second segment needs its own item or another `*` under the first wildcard. |
| The `*` item opened in Pages | The wildcard item itself. The URL has no external id. |

Real children win. Add the authored pages as siblings of `*`, and leave the wildcard for everything else at that level.

The layout service returns the `*` item's renderings. The item name is `*`, so the component must read the requested segment from the URL. In `getComponentServerProps` that value is `context.params.path` (the catch-all segments). In the browser it is the router path. Ignore the Sitecore item name.

Serialization cannot use `*` as a file name. The item path stays `/Home/Products/*`. The file is `Home/Products/#.yml`. `dotnet sitecore serialization validate --fix` renames a file that does not follow that rule.

## What the component should do

1. Take the last segment when this wildcard is the only dynamic part of the path.
2. Accept only the characters the source system uses. Reject anything else before calling that system.
3. Load the record on the server in `getComponentServerProps`. When Pages has no segment, or the server result is empty, a same-origin API route under `src/pages/api/` can load it again. Keep credentials in server environment variables.
4. Render an empty state on the bare `*` item so an author can open a real URL.
5. Leave the page design in place. Header and footer come from partials. The wildcard layout holds the detail rendering on `headless-main`.

One wildcard item is the page for every matching URL. Do not create a Sitecore item per external record.

The worked example is Smith+Nephew `/products/{id}`, which loads a Content Hub `M.PCM.Product`. The publishing concept and architecture diagram are in [SMITHNEPHEW.md](./SMITHNEPHEW.md#product-concept). Field list, environment variables, and sample URLs are in [SMITHNEPHEW.md](./SMITHNEPHEW.md#product-wildcard).
