# GEA demo

Demo for **GEA** (https://www.gea.com/en/) with Peter Berg (Sitecore) and Actum. The story follows one piece of dairy content through the work GEA's teams do every week — create → govern → translate → review → publish → discover → measure → improve — not a SitecoreAI feature tour.

| | Value |
|--|--|
| Rendering host | `examples/gea` (scaffolded 28 Oct 2026 from basic-nextjs) |
| `renderingHosts` key | `gea` |
| Site item | `/sitecore/content/gea/gea` |
| Collection / module | `authoring/items/gea/gea.module.json` (namespace `gea-scs`) |
| Industry skill | [industry-industrial](../.cursor/skills/industry-industrial/SKILL.md) |
| Demo-scenario brand | `gea` (stage: draft) — Storyboard "GEA — from weekly editing to owning the AI answer" |
| Brand | Primary `#0303B8`, logo `https://cdn.gea.com/-/jssmedia/common/logos/gea-logo.svg` (reference only — import into media/DAM, do not hotlink) |
| Captures | `design-screenshots/gea-com/` (gitignored) |
| Page / component / media maps | [GEA-SITE-MAP.md](./GEA-SITE-MAP.md) (JSON in [gea/](./gea/)) |
| Sitecore tenant | `sitecoresaa2551-mvmdemo93ad-mvmdemoauthadc2` (org `org_Yr0e8LadQ1bxB05s`) |

## Story and personas

| Persona | Role in the demo |
|---|---|
| **Emma Chen** — Process Engineering Manager, mid-size dairy co-op | Customer. Asks ChatGPT how to cut gas/CO₂ in milk-powder spray drying → lands on Milk powders → MSD® / AddCool® → Arla case → LinkedIn → personalised return → abandons Get a quote → nurture email → returns known and books a Drying Test Center trial. |
| **Rachel Hale** — Digital Content Lead, GEA Dairy | Operator. Page Builder edit, AI copy with Brand Kit, campaign, Scrunch. |
| **Michael Okonkwo** — Market Marketing Manager, GEA DACH | Partner/market. German translation with GEA terminology. |
| **David Reid** — Digital Platform Architect (with Actum) | Admin. Marketer MCP / Agentic Studio review agent, XP → SitecoreAI migration. |

Demo order (from the meeting notes): Peter context → everyday editing → AI-assisted content → **translation with GEA terms (WOW #1)** → governance/content checking → **agent via Marketer MCP (WOW #2)** → **Scrunch on GEA's own prompts (WOW #3)** → Peter closes on value + next step.

## Pages to mimic

Capture and build these so every story step has a page in the demo site. Tier 1 is the minimum for the demo; Tier 2 makes the site feel complete; Tier 3 supports the translation and corporate-audience parts.

### Tier 1 — story-critical (build first)

| # | Page kind | Story step | URL |
|---|-----------|------------|-----|
| 1 | Home | Chrome, hero carousel, industry tiles | https://www.gea.com/en/ |
| 2 | Industry landing | Personalised hero (Act 5), return (Act 8) | https://www.gea.com/en/dairy-processing/ |
| 3 | Market / application (process line) | Emma lands; **Page Builder edit + AI copy + translation** page (Acts 2–3) | https://www.gea.com/en/dairy-processing/milk-powders/ |
| 4 | Product detail | Emma browses | https://www.gea.com/en/products/dryers-particle-processing/spray-dryers/msd-spray-dryer/ |
| 5 | Product detail (sustainability) | Campaign anchor (Act 6) | https://www.gea.com/en/products/dryers-particle-processing/spray-dryers/gea-add-cool/ |
| 6 | Customer case | Cited in ChatGPT, LinkedIn, email (Acts 1, 4, 7) | https://www.gea.com/en/customer-cases/arla-addcool/ |
| 7 | Product detail (test centre) | Personalised CTA + known return (Acts 5, 8) | https://www.gea.com/en/products/dryers-particle-processing/spray-dryers/drying-test-center/ |
| 8 | Contact / Get a quote | Abandon + submit (Acts 7–8) | https://www.gea.com/en/contact/?cu=contact-us-get-a-quote |

### Tier 2 — supporting pages

| # | Page kind | Use | URL |
|---|-----------|-----|-----|
| 9 | Story (long-form article) | Insights / AEO content | https://www.gea.com/en/stories/the-breakthrough-that-changed-spray-drying/ |
| 10 | Customer case (digital) | Nurture email | https://www.gea.com/en/customer-cases/michigan-milk-producers-association/ |
| 11 | Product detail (digital) | Nurture email | https://www.gea.com/en/products/digital-solutions/optipartner/optipartner-powder-plants/ |
| 12 | Product category | Navigation / listing | https://www.gea.com/en/products/dryers-particle-processing/ |
| 13 | Products overview | Mega-menu target | https://www.gea.com/en/products/ |
| 14 | Insights hub (listing) | Story/case listing | https://www.gea.com/en/insights/ |
| 15 | Service landing | Lifecycle / Performance Partnership | https://www.gea.com/en/service/ |
| 16 | Product category (heat pumps) | Campaign link | https://www.gea.com/en/products/heat-pumps/ |

### Tier 3 — optional

| Page | URL | Why |
|------|-----|-----|
| Add Better (sustainability label) | https://www.gea.com/en/sustainability/add-better-overview | Approved-claims source for AI copy |
| Story | https://www.gea.com/en/stories/better-plant-performance/ | Extra Insights card |
| German page (style reference) | https://www.gea.com/de/products/freezers | Compare GEA's own German wording when demoing translation |
| GEA Dairy LinkedIn | https://www.linkedin.com/showcase/gea-dairy/ | Social step (storyboard mock only) |

Only `en` is captured; the German version is produced live in the demo through SitecoreAI translation with Brand Kit terms.

## Prompts

**Full bootstrap (run once):**

```txt
Use mimic-url for GEA. Site path /sitecore/content/gea/gea, editing host gea, folder examples/gea, project folder gea.
Reference URLs: the Tier 1 list in docs/GEA.md (pages 1–8).
Scaffold the host, generate collection + site YAML, capture screenshots, write the component manifest using the GEA page kinds in industry-industrial, and wait for my approval.
After approval build the pages, download images into the media library (no cdn.gea.com links in YAML), push, then run new-site-inventory.
```

**Add more pages later:**

```txt
Use website-to-sitecore on examples/gea for these URLs: <Tier 2 URLs>. Reuse existing GEA components first; wait for my approval on any new component.
```

**Environment:**

```txt
Use sitecore-env-local to configure .env.local for examples/gea.
```

## Translation terminology (Brand Kit)

Keep untranslated: GEA, MSD®, NIRO, AddCool®, OptiPartner®, InsightPartner®, Add Better, Mission 30. Use GEA's German process vocabulary from gea.com/de (e.g. *Sprühtrockner* for spray dryer). Load 5–10 such rules into the Brand Kit before the demo — the full GEA translation memory is not plugged in.

## Demo-scenario app

Brand `gea` holds the storyboard (objectives, agenda for Peter/Martin, 8 acts with talk tracks and live links, channel mocks for Google/ChatGPT, LinkedIn, email, campaign). It is in **draft**; edit it with the `sitecore-ai-demo-scenario` tools (`get_brand_story` → suggest → `apply_brand_story`). Once `examples/gea` is deployed, add the hosted personalised page URL as a `demoLinks` entry on Act 8.
