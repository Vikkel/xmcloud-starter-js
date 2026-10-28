# Mimic lessons (Spirax / industrial B2B)

Read this before composing a page or creating a component. These are the failures from mimicking https://www.spiraxsarco.com/ on `industry-verticals/industrialb2b`.

## Do this first

1. Classify the page (table below). Do not compose from the URL title.
2. Reuse a component and variant that already exists. Create one only when none fits.
3. Capture the page and put every image in Content Hub DAM. Image fields use DAM `src` + `dam-id`. Do not leave them on media-library `mediaid`, and do not hotlink the reference site.
4. Do not re-run a full site generator after datasources exist. Do not overwrite `__Final Renderings` an author already edited in Pages.
5. Do not copy GUID prefixes already used by another site (`a1e9`, `b40e`, `b803`, `0e0a`, `c4c0`, `a50c`, `4ec1`). On industrial B2B, `f7c3` and `f7c4` are already taken.

Copy rule: public headings are allowed. Do not paste long copyrighted body text. Write a short original summary.

## Page type → composition

| What you see | Type | Compose with |
|--------------|------|----------------|
| One title, body headings, figures | Article | `Breadcrumb`, article-styled `HeroBanner`, `RichText`, `Image` |
| Expandable topic list | FAQ | `Faq` folder of question + answer. Not a card grid |
| “What are you looking for?” plus resource types | Hub | `TagCloud` of taxonomy tags, then a section for each tag. Include Infographics when the page has that type |
| Campaign bands (sustainability, energy) | Landing | Full-width `Promo` Default for stages. `Spotlight` cards inside a 3-column splitter |
| Image, title, description; the title is the link | Card | `Promo` variant `Spotlight`. No separate button |
| Repeating image + title + description under one heading | Features | One `Features` folder. Not three separate promos |
| Magenta signup bar | Newsletter | `Subscribe`: title, helper text, pill button. Match the screenshot. Do not add an email field the reference does not show |
| Product or industry index | Index | `HeroBanner`, then `Spotlight` or `Card` rows |

## Component mapping

These four names must be the same string:

| Piece | Rule |
|-------|------|
| File | `src/components/{kebab}/{PascalName}.tsx` with `export const Default` |
| Rendering | `componentName` = `{PascalName}` (`Faq`, `TagCloud`, `Subscribe`, `Features`) |
| Variant item | Item **name** = React export (`Default`, `Spotlight`). `FieldNames` is that item’s GUID, URL-encoded (`%7B...%7D`) |
| GraphQL | `... on {TemplateItemName}` with no spaces. Name the field item exactly as the query reads it (`featureTitle`). Sitecore lowercases the first letter of the field item name |

Component map: if the host generates `.sitecore/component-map` (`sitecore-tools:generate-map`), do not hand-edit that gitignored file. A new `export const Default` is picked up at build. Run generate-map, then `npm run build`, before treating the component as registered.

Also add the rendering GUID to Available Renderings so authors can insert it. Layout XML alone renders it; it does not put it in the toolbox.

## Images — Content Hub DAM

Image fields use Content Hub public DAM XML, including Shared image fields (`Shared=1` still belongs in `SharedFields`):

```xml
<Image src="https://{ch-host}/api/public/content/{publicId}" dam-id="{assetIdentifier}" alt="{slug}" dam-content-type="Image" />
```

- Confirm the OAuth host is the host in the brand URL. Spirax brand `121895` (name Spirax) is on `https://spd-verticals.sitecoresandbox.cloud`. Credentials for `starter-verticals-2` do not see that brand. Client id for this tenant is `SPD_DAM_Connection`. Load the secret from local env. Never commit it.
- Stamp `PCMBrandToAsset` to the brand entity and `AssetTypeToAsset` to `M.AssetType.SocialMediaAsset`. Write `authoring/items/{module}/scripts/media-maps/content-hub-asset-registry.json` and update `design-screenshots/{project}/media-map.json`.
- Point the field at the image file, not a media-library folder. A folder id renders nothing. Spirax folder ids `3a1032aa`, `bc87351c`, `3a60fc10`, `d6072260`, and `adef1969` are folders; the DAM asset is the child file.
- `dam-id` is the asset identifier, not the numeric entity id. Create a public link and use its `/api/public/content/{relative}` URL as `src`.
- Reject downloads whose bytes are HTML or `octet-stream`. Do not hotlink spiraxsarco.com.

## Fields that silently render empty

- Internal links need the full General Link XML: `class`, `querystring`, `id`, `anchor`, `target`, `title`, `linktype`, `text`, `url`. `href` alone becomes `jsonValue: null` on Edge.
- A variant GUID in `FieldNames` does nothing until that variant item is pushed.

## Layout traps

- Do not use Bootstrap `.row` / `.col-*` for a column splitter. `tailwind-bootstrap-grid` makes `.row` flex and `.row > * { width: 100% }`, which beats `.col-4` and stacks every card in one narrow column.
- `DynamicPlaceholderId` is the placeholder suffix (`column-1-7`), not the number of columns.
- `container-align-right` (`lg:ml-[calc(...)]`) shoves a band to the right. Reset it inside `#content`.
- Default (full-width) promos sit on `headless-main`. Spotlight and Card sit in the splitter.
- If the header has a logo image, do not also print the site title beside it.

## What “done” means

- Push (`dotnet sitecore serialization push`) updates master. It does not publish to Edge.
- TSX and CSS show on the editing host and Vercel only after that app rebuilds. An old Pages screenshot is not proof the YAML is wrong.
