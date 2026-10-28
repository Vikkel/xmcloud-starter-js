---
name: industry-industrial
description: >-
  Industrial B2B / process-equipment vertical — industry landings, market
  (application) pages with process lines, product categories and detail,
  customer cases, stories, service and contact/quote. Use for the GEA demo
  (examples/gea, https://www.gea.com/) or any manufacturing site with products,
  services and technical content (Spirax pattern in spd-csdk-verticals).
---

# Industrial B2B

Read [industry-verticals](../industry-verticals/SKILL.md) first.

## GEA (this repo)

| | Value |
|--|--------|
| Folder | `examples/gea` (scaffold with `mimic-url` / `scaffold-rendering-host`) |
| Site path | `/sitecore/content/gea/gea` |
| Collection | `gea` (isolated collection; generator default namespace `gea-scs`) |
| Editing host / `renderingHosts` key | `gea` |
| Content | `authoring/items/gea/` + `authoring/items/gea/gea.module.json` |
| Reference | https://www.gea.com/en/ |
| Brand | Primary blue `#0303B8`, white backgrounds, tagline "Engineering for a better world" |
| Demo story | Demo-scenario app brand id `gea` (Emma Chen: milk-powder spray-drying decarbonisation) |
| Guide + page list | [docs/GEA.md](../../../docs/GEA.md) |

### GEA content shape

Classify each captured page before composing. The component names below are a **starting proposal**; `visual-cms-map` writes the real `component-review.json` and the user approves it before any TSX. Component-name contract: [mimic-lessons.md](../website-to-sitecore/references/mimic-lessons.md).

| Kind | Example URL | Sitecore path under Home | Components |
|------|-------------|--------------------------|------------|
| Home | `/en/` | `Home` | `HeroCarousel` (stories), `Promo` (About), industry icon grid (`IndustryTiles`), `QuarterlyTeaser`, `Promo` (Sustainability), `CardGrid` (Insights), `Promo` (Careers), news cards, `Newsletter` + `ContactCta` |
| Industry landing | `/en/dairy-processing/` | `dairy-processing` | `PageNav` (anchor tabs + Contact/Get a quote), `HeroBanner`, product-category link list, market tiles (`IndustryTiles`), `RichText`, customer-case `CardCarousel`, test-centre `Promo` cards, product finder `ProductGrid`, `CardGrid` (Insights) |
| Market / application | `/en/dairy-processing/milk-powders/` | `dairy-processing/milk-powders` | `Breadcrumb`, `HeroBanner`, `RichText`, **`ProcessLine`** (numbered steps with product links), `Promo` (OptiPartner), customer-case `Promo` x2, `ProductGrid`, `CardGrid` |
| Product category | `/en/products/dryers-particle-processing/` | `products/dryers-particle-processing` | `HeroBanner`, sub-category `LinkList`, filterable `ProductGrid`, `VideoList`, `CardGrid` |
| Product detail | `/en/products/.../msd-spray-dryer/` | `products/.../msd-spray-dryer` | `Breadcrumb`, `ProductHero` (eyebrow, H1, lede, Contact/Get a quote), `RichText` sections + benefit list, `Promo` (OptiPartner), `RelatedProducts`, `ServiceProducts`, `CardGrid` |
| Customer case | `/en/customer-cases/arla-addcool/` | `customer-cases/arla-addcool` | `CaseHero`, `RichText`, `Quote` (pull quote + person), `ImageGallery`, results list, `Promo` (product) |
| Story | `/en/stories/the-breakthrough-that-changed-spray-drying/` | `stories/...` | `StoryHero` (date, H1, lede), `RichText` + inline `Image`, `Timeline`, newsletter |
| Insights hub | `/en/insights/` | `insights` | `HeroBanner`, `LinkList`, story `CardGrid` (listing), press cards |
| Service | `/en/service/` | `service` | `HeroBanner` + 2 CTAs, value-promise `Promo`, pillar `CardGrid` x3, benefits grid, featured case/solution `Promo` x3 |
| Contact / quote | `/en/contact/?cu=contact-us-get-a-quote` | `contact` | `ContactForm` (inquiry-type selector) — build as a simple form component; no real submission |

Shared chrome: `Header` (logo, Products & Services mega-menu, About/Sustainability/Investors/Media/Careers, Log in, language, Contact) and `Footer` (industry links, company links, quick links, social, legal).

Images: download with `sitecore-media-from-url-yaml` (or Content Hub when a DAM brand is set up) — never reference `cdn.gea.com` in serialized fields. Paraphrase long copy; keep product names and ® marks exactly (MSD®, AddCool®, OptiPartner®, SANICIP®).

### Terminology rules for translation demos (Brand Kit)

Keep untranslated: `GEA`, `MSD®`, `NIRO`, `AddCool®`, `OptiPartner®`, `InsightPartner®`, `Add Better`, `Mission 30`. Prefer GEA's own German process terms from https://www.gea.com/de/ when localising (e.g. spray dryer → Sprühtrockner). Put the agreed list (5–10 terms) into the SitecoreAI Brand Kit before the demo.

## Spirax Sarco (reference only, other repo)

Host `spd-csdk-verticals/industry-verticals/industrialb2b`, collection `industrialb2b`, module `industrialb2b-scs`, reference https://www.spiraxsarco.com/. Use its product index, industry landing, knowledge article and resource-hub components as patterns; do not copy GUIDs, DAM ids or brand `121895`.
