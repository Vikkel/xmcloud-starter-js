---
name: industry-verticals
description: >-
  Shared rules for demo sites in this repo (xmcloud-starter-js) and which
  reference host to follow for retail, healthcare, travel, energy, industrial
  B2B or medical. Use when building a demo/client site under examples/, choosing
  a vertical, or when a request names a brand demo such as GEA, Spirax, ASOS or
  Smith+Nephew.
---

# Industry verticals (xmcloud-starter-js)

Start here, then open the industry skill for the type you are building. Sites that exist in **this** clone are listed in [SITE-REGISTRY.md](../../SITE-REGISTRY.md).

## Where things live in this repo

| | This repo (`xmcloud-starter-js-1`) | Reference repo (`spd-csdk-verticals`) |
|--|--|--|
| Rendering hosts | `examples/{folder}/` (next to the upstream starters) | `industry-verticals/{folder}/` |
| Serialization | `authoring/items/{collection}/` + `{collection}.module.json` (isolated collection per demo) | `authoring/items/industry-verticals/` and isolated collections |
| Deploy | `xmcloud.build.json` → `renderingHosts.{key}` with `path: ./examples/{folder}` | same file, `./industry-verticals/{folder}` |

The upstream starters (`kit-nextjs-skate-park`, `kit-nextjs-article-starter`, `kit-nextjs-product-listing`, `kit-nextjs-location-finder`, `basic-nextjs`) are **reference implementations only**. Do not edit them for a demo; scaffold a new host instead.

Full vertical hosts (FormaLux, Nova Medical, Skywings, Gridwell, Spirax `industrialb2b`, Smith+Nephew, ASOS, Camping Club) live in the sibling repo `C:\code\sitecore\spd-csdk-verticals`. Read their components there as patterns. **Never copy their GUIDs, YAML IDs, `.env*` values or Content Hub asset ids.**

## Which industry

| Type | Reference pattern | Skill | Content shape |
|------|-------------------|-------|----------------|
| Industrial B2B / process equipment (GEA, Spirax) | `spd-csdk-verticals/industry-verticals/industrialb2b`; in-repo GEA host `examples/gea` once scaffolded | [industry-industrial](../industry-industrial/SKILL.md) | Industry landing → market/application → product category → product detail → customer case / story → contact |
| Product catalogue (B2C) | `examples/kit-nextjs-product-listing` (SYNC) | (generic) | Product listing + detail |
| Editorial / articles | `examples/kit-nextjs-article-starter` (Solterra) | (generic) | Article listing + detail |
| Locations / dealers | `examples/kit-nextjs-location-finder` (Alaris) | (generic) | Location finder |
| Retail, healthcare, travel, energy, medical | sibling repo verticals | add an `industry-{type}` skill here when the first demo of that type lands | — |

## Common patterns

| Pattern | Notes |
|---------|-------|
| Listing + detail | One rendering pair reused for products, cases and stories (card grid + detail page). |
| Promo band / CTA band | "Get a quote", "Contact us", newsletter sign-up — a single `Promo`/`CtaBanner` with variants. |
| Process line | Numbered steps with image + text + product links (GEA milk powder line). Use one `ProcessLine` component with child items, not 12 promos. |
| Search | `sitecore-search-experience` (App Router only). |
| Chrome | `Header`, `Footer`, `Navigation`, `Breadcrumb` on partial designs — see [header-navigation](../sitecore-rendering-host-skills/header-navigation/SKILL.md). |

## Rules for every demo site

- Header and footer live on partial designs. Page bands live on the page `__Renderings` in `headless-main`.
- Authors can add components only when `headless-main` Allowed Controls exist on **both** the site Presentation tree and the project placeholder-settings tree.
- Page device XML includes the JSS layout: `l="{96E5F4BA-A2CF-4A4C-A4E7-64DA88226362}"`.
- Helpers stay in `src/lib/`. A `.tsx` under `src/components/` is registered by `npm run sitecore-tools:generate-map`.
- Do not invent people, products, figures or quotes. Content comes from the captured reference page (paraphrased where long) and serialized items.
- Image fields use Content Hub DAM `src` + `dam-id`, or this tenant's media library. **Do not hotlink the reference site** (e.g. `cdn.gea.com`).
- Do not commit `.env`, `.env.local`, or Content Hub credentials. Local deploy values stay in `.local/` (gitignored).
- Generators create fresh GUIDs. Do not re-run a full site generator after datasources or images have been edited.
- On a card, the product link and the action button are separate. Do not wrap the whole card in one anchor.

## After a new component

1. Add `src/components/{kebab}/` in the demo host.
2. Run `npm run sitecore-tools:generate-map` in that host.
3. Add rendering YAML and Allowed Controls when authors should insert it.
4. Update `docs/COMPONENTS.md` and run [new-site-inventory](../new-site-inventory/SKILL.md) if the host is new.
