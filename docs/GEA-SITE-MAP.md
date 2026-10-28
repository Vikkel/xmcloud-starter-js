# GEA site map — pages, components, media

Generated from the 28 Oct 2026 capture of the Tier 1 pages in [GEA.md](./GEA.md). Machine-readable versions: [docs/gea/](./gea/) (`page-map.json`, `component-map.json`, `component-review.json`, `media-map.json`); the agent's working copies are in `design-screenshots/gea-com/` (gitignored).

**Status: Tier 1 pages are published to Edge.** React components are in `examples/gea` locally. Redeploy the `gea` editing host after this code is on the branch the host builds, or Pages will not render them. Images are grey placeholders.

## Target

| | |
|--|--|
| Organization | org_Yr0e8LadQ1bxB05s |
| Tenant | sitecoresaa2551-mvmdemo93ad-mvmdemoauthadc2 |
| Portal | [Sitecore Cloud Portal](https://app.sitecorecloud.io/strategy/overview?organization=org_Yr0e8LadQ1bxB05s&tenantName=sitecoresaa2551-mvmdemo93ad-mvmdemoauthadc2) |
| CM host (to confirm) | https://xmc-sitecoresaa2551-mvmdemo93ad-mvmdemoauthadc2.sitecorecloud.io |
| Site | /sitecore/content/gea/gea |
| Rendering host | `examples/gea` (key `gea`) |
| Module | `authoring/items/gea/gea.module.json` (`gea-scs`) |
| Media root | `/sitecore/media library/Project/gea/gea` |

## Page map

| # | Page | Kind | Sitecore item (under `/sitecore/content/gea/gea`) | Story acts | Source |
|--|--|--|--|--|--|
| 1 | Home | home | `/Home` | 1.1 | [link](https://www.gea.com/en/) |
| 2 | Dairy (industry landing) | industry | `/Home/dairy-processing` | 3.2, 5.1 | [link](https://www.gea.com/en/dairy-processing/) |
| 3 | Milk powders (market page) | market | `/Home/dairy-processing/milk-powders` | 1.1, 2.1, 2.2, 2.3, 3.1 | [link](https://www.gea.com/en/dairy-processing/milk-powders/) |
| 4 | MSD Spray Dryer (product) | product | `/Home/products/dryers-particle-processing/spray-dryers/msd-spray-dryer` | 2.1 | [link](https://www.gea.com/en/products/dryers-particle-processing/spray-dryers/msd-spray-dryer/) |
| 5 | GEA AddCool (product) | product | `/Home/products/dryers-particle-processing/spray-dryers/gea-add-cool` | 2.1, 6.1 | [link](https://www.gea.com/en/products/dryers-particle-processing/spray-dryers/gea-add-cool/) |
| 6 | Arla AddCool (customer case) | case | `/Home/customer-cases/arla-addcool` | 1.1, 2.1, 4.1, 7.2 | [link](https://www.gea.com/en/customer-cases/arla-addcool/) |
| 7 | Drying Test Center (product / service) | product | `/Home/products/dryers-particle-processing/spray-dryers/drying-test-center` | 5.1, 8.1 | [link](https://www.gea.com/en/products/dryers-particle-processing/spray-dryers/drying-test-center/) |
| 8 | Contact / Get a quote | contact | `/Home/contact` | 7.1, 8.1 | [link](https://www.gea.com/en/contact/?cu=contact-us-get-a-quote) |

Folder pages to create so routes resolve: `/Home/products`, `/Home/products/dryers-particle-processing`, `/Home/products/dryers-particle-processing/spray-dryers`, `/Home/customer-cases`.

### Page composition

**Home** — `/`

- headless-header: Header
- headless-main: HeroCarousel (3 HeroSlide)
- headless-main: Promo ImageLeft - About us
- headless-main: IndustryTiles Blue (12 IndustryTile)
- headless-main: LinkList Plus - products overview, GEA Service
- headless-main: Promo Compact - quarterly statement
- headless-main: Promo ImageRight - Sustainability
- headless-main: CardGrid Insights (5 Card)
- headless-main: Promo ImageLeft - Careers
- headless-main: CardGrid News (3 Card)
- headless-footer: NewsletterContactBand
- headless-footer: Footer

**Dairy (industry landing)** — `/dairy-processing/`

- headless-main: PageNav (Markets, Products, Downloads, Videos + Contact/Get a quote)
- headless-main: HeroBanner Split - Specialists in processing white gold
- headless-main: LinkList Inline - Explore our products (9 categories)
- headless-main: IndustryTiles Outline - 8 markets
- headless-main: RichText - 3 intro blocks
- headless-main: CardGrid Carousel - 15 customer cases
- headless-main: RichText - test centers intro
- headless-main: CardGrid Promo - 3 test centers
- headless-main: Promo ImageLeft - GEA Dairy LinkedIn
- headless-main: ProductCardList Grid with filters (61 products, shows 4)
- headless-main: Promo - milk lactoferrin
- headless-main: CardGrid - 2 dairy cases
- headless-main: CardGrid Insights - 3 stories

**Milk powders (market page)** — `/dairy-processing/milk-powders/`

- headless-main: PageNav (Products, Downloads, Videos + Contact/Get a quote)
- headless-main: Breadcrumb
- headless-main: HeroBanner Split - Supplying global milk powder plants
- headless-main: RichText Lead - intro + image + Show more
- headless-main: ProcessLine (12 ProcessStep with product links)
- headless-main: Promo ImageLeft - OptiPartner Spray drying, optimized
- headless-main: CardGrid Promo - Danone case, MMPA case, LinkedIn
- headless-main: ProductCardList Grid with filters (40 products)
- headless-main: CardGrid Insights - 3 stories

**MSD Spray Dryer (product)** — `/products/dryers-particle-processing/spray-dryers/msd-spray-dryer/`

- headless-main: PageNav (Videos + Contact/Get a quote)
- headless-main: Breadcrumb
- headless-main: HeroBanner Split - eyebrow, H1, lede, Contact/Get a quote
- headless-main: RichText - 5 sections + benefits list
- headless-main: RichText - upgrades, hygiene, efficiency, sustainability, testing
- headless-main: Promo ImageLeft - OptiPartner
- headless-main: ProductCardList Row - Related products (4)
- headless-main: ProductCardList Row - Service products (2)
- headless-main: CardGrid Insights - 3 stories

**GEA AddCool (product)** — `/products/dryers-particle-processing/spray-dryers/gea-add-cool/`

- headless-main: PageNav
- headless-main: Breadcrumb
- headless-main: HeroBanner Split
- headless-main: RichText
- headless-main: CardGrid Feature - 3 pillars
- headless-main: Promo ImageLeft - Add Better label
- headless-main: Promo - savings calculator (CTA only, no form)
- headless-main: CardGrid Promo - Arla case, energy audit case
- headless-main: RichText - how it works, matching, benefits
- headless-main: CtaBanner - Want to know more? Contact us
- headless-main: ProductCardList Row - Related (4)
- headless-main: ProductCardList Row - Service (2)
- headless-main: CardGrid Insights

**Arla AddCool (customer case)** — `/customer-cases/arla-addcool/`

- headless-main: HeroBanner Case - eyebrow Customer story, H1, Contact us, image
- headless-main: RichText Lead
- headless-main: RichText - challenge
- headless-main: Quote (Line Brandt Pedersen)
- headless-main: RichText - solution
- headless-main: Quote (Jens Lokke Ganderup)
- headless-main: ImageGallery (3)
- headless-main: RichText - results list
- headless-main: Image - impact graphs
- headless-main: Quote
- headless-main: RichText - the future
- headless-main: Promo ImageLeft - GEA AddCool / Add Better

**Drying Test Center (product / service)** — `/products/dryers-particle-processing/spray-dryers/drying-test-center/`

- headless-main: HeroBanner Split - Test. Perfect. Scale. + Contact us
- headless-main: PageNav
- headless-main: RichText - 2 blocks
- headless-main: CardGrid Feature - 3 services
- headless-main: RichText + Image - Virtual spray dryer testing
- headless-main: RichText - Drynetics, powder testing
- headless-main: CardGrid Feature - 9 applications
- headless-main: ProductCardList Row - Related (4)
- headless-main: ProductCardList Row - Service (2)
- headless-main: CardGrid Insights

**Contact / Get a quote** — `/contact/`

- headless-main: ContactForm - area of interest (2 selects), message, first/last name, company, email, phone, zip, city, country, Submit

Header, NewsletterContactBand and Footer sit on the site's partial designs and appear on every page.

## Component map (for approval)

Design tokens: fontBody: Inter, sans-serif 16px #111111; fontDisplay: GEA Head (fallback Inter 600), H1 55px uppercase on heroes; h2: Inter 500 32px #0303B8; primary: #0303B8; accentCta: #1AFF80 (green pill, dark text); greyPanel: #F5F5F5; footerBg: #F4F4F4; pillRadius: 24px; contactButton: #0303B8 bg, white text, 24px radius.

| ID | Component | Action | Scope | Variants | Fields | Children | Used on |
|--|--|--|--|--|--|--|--|
| C01 | **Header** | create | site | — | logo, searchPlaceholder, loginLink, languageLabel, contactLink, primaryLinks[], productsMenuLabel | — | all |
| C02 | **Footer** | create | site | — | logo, aboutText, legalText, copyright, socialLinks[] | FooterLinkColumn | all |
| C03 | **NewsletterContactBand** | create | site | — | newsTitle, newsText, newsLink, contactTitle, contactText, contactLink | — | all |
| C04 | **Breadcrumb** | create | page | — | — | — | milk-powders, msd-spray-dryer, gea-add-cool |
| C05 | **PageNav** | create | page | — | title, contactLink, quoteLink | — | dairy-processing, milk-powders, msd-spray-dryer, gea-add-cool, drying-test-center |
| C06 | **HeroCarousel** | create | page | — | — | HeroSlide | home |
| C07 | **HeroSlide** | create | page | — | image, eyebrow, title, link | — | home |
| C08 | **HeroBanner** | create | page | Split, Case, Story | eyebrow, title, lede, image, primaryLink, secondaryLink | — | dairy-processing, milk-powders, msd-spray-dryer, gea-add-cool, drying-test-center, arla-addcool |
| C09 | **RichText** | create | page | Default, Lead | heading, text | — | dairy-processing, milk-powders, msd-spray-dryer, gea-add-cool, drying-test-center, arla-addcool |
| C10 | **Promo** | create | page | ImageLeft, ImageRight, Compact | image, eyebrow, title, text, link | — | home, dairy-processing, milk-powders, msd-spray-dryer, gea-add-cool, arla-addcool |
| C11 | **IndustryTiles** | create | page | Blue, Outline | title | IndustryTile | home, dairy-processing |
| C12 | **IndustryTile** | create | page | — | icon, label, link | — | home, dairy-processing |
| C13 | **LinkList** | create | page | Inline, Plus | title, links[] | — | home, dairy-processing |
| C14 | **CardGrid** | create | page | Insights, News, Carousel, Promo, Feature | title, link | Card | home, dairy-processing, milk-powders, msd-spray-dryer, gea-add-cool, drying-test-center |
| C15 | **Card** | create | page | — | image, eyebrow, title, text, link | — | home, dairy-processing, milk-powders, msd-spray-dryer, gea-add-cool, drying-test-center |
| C16 | **ProcessLine** | create | page | — | title, overviewImage | ProcessStep | milk-powders |
| C17 | **ProcessStep** | create | page | — | title, text, image, links[] | — | milk-powders |
| C18 | **ProductCardList** | create | page | Grid, Row | title, link, filterLabels[] | ProductCard | dairy-processing, milk-powders, msd-spray-dryer, gea-add-cool, drying-test-center |
| C19 | **ProductCard** | create | page | — | image, title, text, category, link | — | dairy-processing, milk-powders, msd-spray-dryer, gea-add-cool, drying-test-center |
| C20 | **Quote** | create | page | — | quote, name, role, image | — | arla-addcool |
| C21 | **ImageGallery** | create | page | — | images[] (image + caption) | — | arla-addcool |
| C22 | **Image** | create | page | — | image, caption | — | arla-addcool, drying-test-center |
| C23 | **CtaBanner** | create | page | — | title, link | — | gea-add-cool |
| C24 | **ContactForm** | unclear | page | — | title, intro, areaLabel, messageLabel, contactInfoLabel, submitLabel, thankYouText | — | contact |
| C25 | **PartialDesignDynamicPlaceholder** | reuse | site | — | — | — | all |

Notes per component:

- **Header** — Two rows: utility bar (search, Log in, language, blue pill Contact) and nav row (Products & Services mega-menu trigger left; About us, Sustainability, Investors, Media, Careers right). Mega-menu from a LinkList datasource. Pattern: header-navigation skill.
- **Footer** — Light grey #F4F4F4. Columns: Products & services (12 industries), Company, Quick links. Legal row: Imprint, Data Protection Notice, Cookie settings, Sitemap.
- **NewsletterContactBand** — Receive news from GEA + Contact us blocks above the footer on every page. Lives on the footer partial design.
- **Breadcrumb** — Reads ancestors from layout; pattern vendored in header-navigation skill.
- **PageNav** — Sticky in-page bar: page title + anchor links built from components with an anchorId rendering parameter + Contact us / Get a quote buttons.
- **HeroCarousel** — Full-bleed image slides; eyebrow link, uppercase H1 (GEA Head), green #1AFF80 Read more pill, numbered progress + prev/next.
- **HeroBanner** — Split: blue #0303B8 panel left (eyebrow, uppercase H1, lede, green pill CTA) + image right. Case: Customer story eyebrow, H1, Contact us, image. Story: date + H1 + lede (Tier 2).
- **RichText** — Lead = larger intro with optional Show more. Rendering parameter anchorId feeds PageNav.
- **Promo** — Image + text + link. Grey #F5F5F5 panel on home About/Careers.
- **IndustryTiles** — Blue: white icon on #0303B8 tile (home). Outline: blue icon + label (dairy markets).
- **LinkList** — Inline comma list (Explore our products); Plus = + Overview of our products headline links.
- **CardGrid** — One grid for stories, news, customer cases (Carousel), test centres (Promo) and pillars/applications (Feature).
- **Card** — Title is the link; separate CTA text. Do not wrap the whole card in one anchor.
- **ProcessLine** — Numbered stepper/accordion: 12 steps from cream separation to automation. Key component for the Page Builder edit and translation demo.
- **ProcessStep** — Number from position. links = product pages.
- **ProductCardList** — Grid = Products & Technologies with category filter chips + View more. Row = Related Products / Service Products.
- **Quote** — Large pull quote with optional portrait.
- **ImageGallery** — 3-image slider with captions.
- **CtaBanner** — Want to know more? Get in touch with our experts today + Contact us.
- **ContactForm** — Decide: (a) custom React form, demo only, no real submission, or (b) SitecoreAI Forms via the built-in Form component (authorable; needs Forms in the tenant).
- **PartialDesignDynamicPlaceholder** — Already in examples/gea.

Not built (skipped):

- Downloads list (dairy, milk powders, products) — Client-side document search, empty in capture.
- Related Videos (dairy, milk powders, products) — video.gea.com player; optional VideoEmbed later.
- AddCool savings calculator form (gea-add-cool) — Lead form; rendered as Promo with contact CTA.
- Language/country selector (header) — Static label; SitecoreAI language switch is shown in Page Builder instead.
- Login (portal.gea.com) (header) — Link only.

## Media map

119 unique images (66 priority 1). Each becomes a media item under `/sitecore/media library/Project/gea/gea/<gea.com media path>`; image fields reference the item GUID (`<image mediaid="{MEDIA-ITEM-GUID}" />`), never `cdn.gea.com`.

Download on your machine (both of Claude's shells are blocked from cdn.gea.com):

```powershell
pwsh -File authoring/items/gea/scripts/media-maps/download-gea-media.ps1 -Priority 1   # essentials (66)
pwsh -File authoring/items/gea/scripts/media-maps/download-gea-media.ps1               # everything (119)
```

### site (2)

| Use | P | Media item (under media root) | Also on | Source |
|--|--|--|--|--|
| logo | 1 | `common/logos/footer` | — | [img](https://cdn.gea.com/-/jssmedia/common/logos/footer.png) |
| logo | 1 | `common/logos/gea-logo` | — | [img](https://cdn.gea.com/-/jssmedia/common/logos/gea-logo.svg) |

### home (26)

| Use | P | Media item (under media root) | Also on | Source |
|--|--|--|--|--|
| content | 1 | `careers/home-careers` | — | [img](https://cdn.gea.com/-/jssmedia/careers/home-careers.jpg) |
| content | 1 | `company/about-us/home-about` | — | [img](https://cdn.gea.com/-/jssmedia/company/about-us/home-about.jpg) |
| content | 1 | `gea/arrows/arrow-up1` | — | [img](https://cdn.gea.com/-/jssmedia/gea/arrows/arrow-up1.jpg) |
| content | 1 | `gea/globes/full/globe1` | — | [img](https://cdn.gea.com/-/jssmedia/gea/globes/full/globe1.jpg) |
| icon | 1 | `icons/white-icons/products-and-services/cell-based-food_srgb_white` | — | [img](https://cdn.gea.com/-/media/icons/white-icons/products-and-services/cell-based-food_srgb_white.svg) |
| icon | 1 | `icons/white-icons/products-and-services/chemicals_srgb_white` | — | [img](https://cdn.gea.com/-/media/icons/white-icons/products-and-services/chemicals_srgb_white.svg) |
| icon | 1 | `icons/white-icons/products-and-services/dairy-farming_srgb_white` | — | [img](https://cdn.gea.com/-/media/icons/white-icons/products-and-services/dairy-farming_srgb_white.svg) |
| icon | 1 | `icons/white-icons/products-and-services/dairy-processing_srgb_white` | — | [img](https://cdn.gea.com/-/media/icons/white-icons/products-and-services/dairy-processing_srgb_white.svg) |
| icon | 1 | `icons/white-icons/products-and-services/environment_srgb_white` | — | [img](https://cdn.gea.com/-/media/icons/white-icons/products-and-services/environment_srgb_white.svg) |
| icon | 1 | `icons/white-icons/products-and-services/food_srgb_white` | — | [img](https://cdn.gea.com/-/media/icons/white-icons/products-and-services/food_srgb_white.svg) |
| icon | 1 | `icons/white-icons/products-and-services/home-personal-care_srgb_white` | — | [img](https://cdn.gea.com/-/media/icons/white-icons/products-and-services/home-personal-care_srgb_white.svg) |
| icon | 1 | `icons/white-icons/products-and-services/marine_srgb_white` | — | [img](https://cdn.gea.com/-/media/icons/white-icons/products-and-services/marine_srgb_white.svg) |
| icon | 1 | `icons/white-icons/products-and-services/oil-gas-energy_srgb_white` | — | [img](https://cdn.gea.com/-/media/icons/white-icons/products-and-services/oil-gas-energy_srgb_white.svg) |
| icon | 1 | `icons/white-icons/products-and-services/pharma_srgb_white` | — | [img](https://cdn.gea.com/-/media/icons/white-icons/products-and-services/pharma_srgb_white.svg) |
| icon | 1 | `icons/white-icons/products-and-services/refrigeration-heating_srgb_white` | — | [img](https://cdn.gea.com/-/media/icons/white-icons/products-and-services/refrigeration-heating_srgb_white.svg) |
| content | 1 | `investors/events-and-releases/quarterly-reports/2025/q2_half-year/gea-quarterly-figures-announcement` | — | [img](https://cdn.gea.com/-/jssmedia/investors/events-and-releases/quarterly-reports/2025/q2_half-year/gea-quarterly-figures-announcement.jpg) |
| content | 1 | `news/corporate-press/2026/gea-top-employer-asia-pacific/top-employer-asia-pacific-2026_g` | — | [img](https://cdn.gea.com/-/jssmedia/news/corporate-press/2026/gea-top-employer-asia-pacific/top-employer-asia-pacific-2026_g.png) |
| content | 1 | `stories/better-plant-performance/gea-the-better-journey_home` | — | [img](https://cdn.gea.com/-/jssmedia/stories/better-plant-performance/gea-the-better-journey_home.jpg) |
| content | 1 | `stories/building-resilience-into-the-olive-oil-industry/gea-center-of-excellence-olive-oil` | — | [img](https://cdn.gea.com/-/media/stories/building-resilience-into-the-olive-oil-industry/gea-center-of-excellence-olive-oil.jpg) |
| content | 1 | `stories/functional-beverages/gea-functional-beverages` | — | [img](https://cdn.gea.com/-/media/stories/functional-beverages/gea-functional-beverages.jpg) |
| content | 1 | `stories/gea-business-china/gea-multi-purpose-site-tianjin-china_teaser` | — | [img](https://cdn.gea.com/-/media/stories/gea-business-china/gea-multi-purpose-site-tianjin-china_teaser.jpg) |
| content | 1 | `stories/mastering-industrial-cooking-complexity-control/tech-inspects-homestyle-chicken-gea-cookstar` | — | [img](https://cdn.gea.com/-/media/stories/mastering-industrial-cooking-complexity-control/tech-inspects-homestyle-chicken-gea-cookstar.jpg) |
| content | 1 | `stories/stopping-energy-loss-in-breweries/warka-brewhouse-gea-carousel` | — | [img](https://cdn.gea.com/-/jssmedia/stories/stopping-energy-loss-in-breweries/warka-brewhouse-gea-carousel.jpg) |
| content | 1 | `stories/the-breakthrough-that-changed-spray-drying/arla-spray-dryer-msd` | — | [img](https://cdn.gea.com/-/jssmedia/stories/the-breakthrough-that-changed-spray-drying/arla-spray-dryer-msd.jpg) |
| content | 1 | `stories/water-equation/gea-water-efficiency-industry_teaser` | — | [img](https://cdn.gea.com/-/media/stories/water-equation/gea-water-efficiency-industry_teaser.jpg) |
| content | 1 | `sustainability/images---various/sustainability-forest` | — | [img](https://cdn.gea.com/-/jssmedia/sustainability/images---various/sustainability-forest.jpg) |

### dairy-processing (33)

| Use | P | Media item (under media root) | Also on | Source |
|--|--|--|--|--|
| icon | 1 | `icons/36493__milk-powders` | — | [img](https://cdn.gea.com/-/media/icons/36493__milk-powders.svg) |
| icon | 1 | `icons/36494__nutritional-formula` | — | [img](https://cdn.gea.com/-/media/icons/36494__nutritional-formula.svg) |
| icon | 1 | `icons/51653__ice-cream` | — | [img](https://cdn.gea.com/-/media/icons/51653__ice-cream.svg) |
| icon | 1 | `icons/51702desserts--fermented-products` | — | [img](https://cdn.gea.com/-/media/icons/51702desserts--fermented-products.svg) |
| icon | 1 | `icons/52491milk--cream` | — | [img](https://cdn.gea.com/-/media/icons/52491milk--cream.svg) |
| icon | 1 | `icons/52502__milk-fat-products` | — | [img](https://cdn.gea.com/-/media/icons/52502__milk-fat-products.svg) |
| icon | 1 | `icons/942__cheese` | — | [img](https://cdn.gea.com/-/media/icons/942__cheese.svg) |
| icon | 1 | `icons/948__dairy-ingredients` | — | [img](https://cdn.gea.com/-/media/icons/948__dairy-ingredients.svg) |
| hero | 1 | `industries/dairy-processing/gea-dairy-proccessing-industry` | — | [img](https://cdn.gea.com/-/media/industries/dairy-processing/gea-dairy-proccessing-industry.jpg) |
| hero | 1 | `products/dryers-and-particle-processing-plants/spray-dryers/gea-drying-test-facility` | drying-test-center | [img](https://cdn.gea.com/-/jssmedia/products/dryers-and-particle-processing-plants/spray-dryers/gea-drying-test-facility.jpg) |
| content | 2 | `campaigns/milk-lactoferin/gea-lactoferrin-powder-test-facilities` | — | [img](https://cdn.gea.com/-/jssmedia/campaigns/milk-lactoferin/gea-lactoferrin-powder-test-facilities.jpg) |
| content | 2 | `customer-cases/2025-arla-addcool/add-cool-heat-pump-arla-foods` | arla-addcool | [img](https://cdn.gea.com/-/jssmedia/customer-cases/2025-arla-addcool/add-cool-heat-pump-arla-foods.jpg) |
| content | 2 | `customer-cases/aurivo-reduces-fossil-fuel-consumption/hero-photo-for-aurivo-story-66578` | — | [img](https://cdn.gea.com/-/jssmedia/customer-cases/aurivo-reduces-fossil-fuel-consumption/hero-photo-for-aurivo-story-66578.jpg) |
| content | 2 | `customer-cases/mmpa-optipartner/gaspar-calandrino-director-mmpa` | — | [img](https://cdn.gea.com/-/jssmedia/customer-cases/mmpa-optipartner/gaspar-calandrino-director-mmpa.jpg) |
| content | 2 | `customer-cases/strategic-partnership-between-mokate-group-and-gea/mokate-group-poland` | — | [img](https://cdn.gea.com/-/jssmedia/customer-cases/strategic-partnership-between-mokate-group-and-gea/mokate-group-poland.jpg) |
| content | 2 | `customer-cases/yili-gea-partnership/yili-site` | — | [img](https://cdn.gea.com/-/jssmedia/customer-cases/yili-gea-partnership/yili-site.jpg) |
| content | 2 | `industries/dairy-processing/danone-dairy-plant` | — | [img](https://cdn.gea.com/-/jssmedia/industries/dairy-processing/danone-dairy-plant.jpg) |
| content | 2 | `industries/migrated-from-tridion/gea-dairy-linkedin-2930` | — | [img](https://cdn.gea.com/-/jssmedia/industries/migrated-from-tridion/gea-dairy-linkedin-2930.jpg) |
| content | 2 | `migratedfromtridion/articles/optipartner-facility-105496` | — | [img](https://cdn.gea.com/-/jssmedia/migratedfromtridion/articles/optipartner-facility-105496.jpg) |
| content | 2 | `migratedfromtridion/articles/test-center-aseptic-processing-and-filling-ahaus-109076` | — | [img](https://cdn.gea.com/-/jssmedia/migratedfromtridion/articles/test-center-aseptic-processing-and-filling-ahaus-109076.jpg) |
| content | 2 | `migratedfromtridion/customer-cases/amul-ghee-products-89166` | — | [img](https://cdn.gea.com/-/jssmedia/migratedfromtridion/customer-cases/amul-ghee-products-89166.jpg) |
| content | 2 | `migratedfromtridion/customer-cases/customer-story-arla-gea2-51677` | — | [img](https://cdn.gea.com/-/jssmedia/migratedfromtridion/customer-cases/customer-story-arla-gea2-51677.jpg) |
| content | 2 | `migratedfromtridion/customer-cases/euromilk-promo-107437` | — | [img](https://cdn.gea.com/-/jssmedia/migratedfromtridion/customer-cases/euromilk-promo-107437.jpg) |
| content | 2 | `migratedfromtridion/customer-cases/valfoo-cremo-lactoferrin-powder-product-110132` | — | [img](https://cdn.gea.com/-/jssmedia/migratedfromtridion/customer-cases/valfoo-cremo-lactoferrin-powder-product-110132.jpg) |
| content | 2 | `migratedfromtridion/news/aurivo-killygordon-66683` | — | [img](https://cdn.gea.com/-/jssmedia/migratedfromtridion/news/aurivo-killygordon-66683.jpg) |
| content | 2 | `migratedfromtridion/news/milchwerk-crailsheim-107397` | — | [img](https://cdn.gea.com/-/jssmedia/migratedfromtridion/news/milchwerk-crailsheim-107397.jpg) |
| content | 2 | `migratedfromtridion/productgroup/analytics-web-12528` | — | [img](https://cdn.gea.com/-/media/migratedfromtridion/productgroup/analytics-web-12528.jpg) |
| content | 2 | `migratedfromtridion/productgroup/gea-centrifuge-water-saving-unit-add-better-107871` | — | [img](https://cdn.gea.com/-/media/migratedfromtridion/productgroup/gea-centrifuge-water-saving-unit-add-better-107871.jpg) |
| content | 2 | `products/centrifuges-and-separation-equipment/others/ptc_oelde_laboratory` | — | [img](https://cdn.gea.com/-/jssmedia/products/centrifuges-and-separation-equipment/others/ptc_oelde_laboratory.jpg) |
| content | 2 | `products/liquid-processing/aseptic-systems/aseptic-systems-images-used-new/aseptic-tank_1` | — | [img](https://cdn.gea.com/-/media/products/liquid-processing/aseptic-systems/aseptic-systems-images-used-new/aseptic-tank_1.jpg) |
| content | 2 | `products/pumps-valves-flow-components/valves-components-aseptic-liquid-processing/aseptic-valves-components` | — | [img](https://cdn.gea.com/-/media/products/pumps-valves-flow-components/valves-components-aseptic-liquid-processing/aseptic-valves-components.jpg) |
| content | 2 | `sustainability/impact-stories/enabling-customers/amulfed-dairy-plant` | — | [img](https://cdn.gea.com/-/jssmedia/sustainability/impact-stories/enabling-customers/amulfed-dairy-plant.jpg) |
| content | 2 | `sustainability/impact-stories/enabling-customers/gea-dairy-separator-naarmann` | — | [img](https://cdn.gea.com/-/jssmedia/sustainability/impact-stories/enabling-customers/gea-dairy-separator-naarmann.jpg) |

### milk-powders (21)

| Use | P | Media item (under media root) | Also on | Source |
|--|--|--|--|--|
| content | 1 | `company/media/media-homepage/linkedin-logo-white-36354-1200x675` | — | [img](https://cdn.gea.com/-/jssmedia/company/media/media-homepage/linkedin-logo-white-36354-1200x675.png) |
| hero | 1 | `industries/dairy-processing/milk-powders/milk-powder` | — | [img](https://cdn.gea.com/-/media/industries/dairy-processing/milk-powders/milk-powder.jpg) |
| content | 1 | `migratedfromtridion/articles/optipartner-digital-solution-86303` | — | [img](https://cdn.gea.com/-/jssmedia/migratedfromtridion/articles/optipartner-digital-solution-86303.jpg) |
| content | 1 | `migratedfromtridion/customer-cases/danone-plant-haps-netherlands-63991` | — | [img](https://cdn.gea.com/-/jssmedia/migratedfromtridion/customer-cases/danone-plant-haps-netherlands-63991.jpg) |
| content | 1 | `migratedfromtridion/market/ariete-homogenizer-5400-36506` | — | [img](https://cdn.gea.com/-/jssmedia/migratedfromtridion/market/ariete-homogenizer-5400-36506.jpg) |
| content | 1 | `migratedfromtridion/market/automation-36506` | — | [img](https://cdn.gea.com/-/jssmedia/migratedfromtridion/market/automation-36506.jpg) |
| content | 1 | `migratedfromtridion/market/centrifuge-separator-msi-milk-whey-36506` | — | [img](https://cdn.gea.com/-/jssmedia/migratedfromtridion/market/centrifuge-separator-msi-milk-whey-36506.jpg) |
| content | 1 | `migratedfromtridion/market/dairy-evaporation-milk-powder-36506` | — | [img](https://cdn.gea.com/-/jssmedia/migratedfromtridion/market/dairy-evaporation-milk-powder-36506.jpg) |
| content | 1 | `migratedfromtridion/market/gea-filling-rbf800-new-36506` | — | [img](https://cdn.gea.com/-/jssmedia/migratedfromtridion/market/gea-filling-rbf800-new-36506.jpg) |
| content | 1 | `migratedfromtridion/market/gea-hygitip-1-36506` | — | [img](https://cdn.gea.com/-/jssmedia/migratedfromtridion/market/gea-hygitip-1-36506.jpg) |
| content | 1 | `migratedfromtridion/market/gea-inline-formula-sol-high-shear-mixer-1000l_1-36506` | — | [img](https://cdn.gea.com/-/jssmedia/migratedfromtridion/market/gea-inline-formula-sol-high-shear-mixer-1000l_1-36506.jpg) |
| content | 1 | `migratedfromtridion/market/gea-refrigeration-36506` | — | [img](https://cdn.gea.com/-/jssmedia/migratedfromtridion/market/gea-refrigeration-36506.jpg) |
| content | 1 | `migratedfromtridion/market/membrane-filtration-plants-1-36506` | — | [img](https://cdn.gea.com/-/jssmedia/migratedfromtridion/market/membrane-filtration-plants-1-36506.jpg) |
| content | 1 | `migratedfromtridion/market/milk-powder-pile-36506` | — | [img](https://cdn.gea.com/-/jssmedia/migratedfromtridion/market/milk-powder-pile-36506.jpg) |
| content | 1 | `migratedfromtridion/market/milk-powder-plant-36506` | — | [img](https://cdn.gea.com/-/media/migratedfromtridion/market/milk-powder-plant-36506.jpg) |
| hero | 1 | `migratedfromtridion/market/msd-spray-dryer-36506` | msd-spray-dryer | [img](https://cdn.gea.com/-/jssmedia/migratedfromtridion/market/msd-spray-dryer-36506.jpg) |
| content | 1 | `migratedfromtridion/market/pasteurizer-skid-separator-36506` | — | [img](https://cdn.gea.com/-/jssmedia/migratedfromtridion/market/pasteurizer-skid-separator-36506.jpg) |
| content | 1 | `migratedfromtridion/market/vibrating-sifter-36506` | — | [img](https://cdn.gea.com/-/jssmedia/migratedfromtridion/market/vibrating-sifter-36506.jpg) |
| content | 1 | `migratedfromtridion/productgroup/gea-automated-packing-line-4594` | — | [img](https://cdn.gea.com/-/media/migratedfromtridion/productgroup/gea-automated-packing-line-4594.jpg) |
| content | 1 | `migratedfromtridion/productgroup/gea-bag-sealing-4598` | — | [img](https://cdn.gea.com/-/media/migratedfromtridion/productgroup/gea-bag-sealing-4598.jpg) |
| content | 1 | `migratedfromtridion/products/gea-automated-packing-line-7800` | — | [img](https://cdn.gea.com/-/media/migratedfromtridion/products/gea-automated-packing-line-7800.jpg) |

### msd-spray-dryer (6)

| Use | P | Media item (under media root) | Also on | Source |
|--|--|--|--|--|
| content | 2 | `migratedfromtridion/customer-cases/gea-spray-dryer-mother-murphys-flavor-ingredients-79435` | — | [img](https://cdn.gea.com/-/media/migratedfromtridion/customer-cases/gea-spray-dryer-mother-murphys-flavor-ingredients-79435.jpg) |
| content | 2 | `migratedfromtridion/products/fsd-spray-dryer-food-ingredients-14377` | — | [img](https://cdn.gea.com/-/media/migratedfromtridion/products/fsd-spray-dryer-food-ingredients-14377.jpg) |
| content | 2 | `migratedfromtridion/products/safexpert-45546` | — | [img](https://cdn.gea.com/-/media/migratedfromtridion/products/safexpert-45546.jpg) |
| content | 2 | `migratedfromtridion/products/spraydryer_gea-comaptact-dryer-cdi1200x675_final-14412` | — | [img](https://cdn.gea.com/-/media/migratedfromtridion/products/spraydryer_gea-comaptact-dryer-cdi1200x675_final-14412.jpg) |
| content | 2 | `products/dryers-and-particle-processing-plants/spray-dryers/filtermat/gea-filtermat-spray-dryer` | — | [img](https://cdn.gea.com/-/media/products/dryers-and-particle-processing-plants/spray-dryers/filtermat/gea-filtermat-spray-dryer.jpg) |
| content | 2 | `products/dryers-and-particle-processing-plants/spray-dryers/health-check-spray-dryer/health-check-spray-dryer-maintenance` | — | [img](https://cdn.gea.com/-/media/products/dryers-and-particle-processing-plants/spray-dryers/health-check-spray-dryer/health-check-spray-dryer-maintenance.jpg) |

### gea-add-cool (8)

| Use | P | Media item (under media root) | Also on | Source |
|--|--|--|--|--|
| hero | 1 | `products/dryers-and-particle-processing-plants/addcool/gea-addcool-heat-pump-solution-spray-dryers` | — | [img](https://cdn.gea.com/-/media/products/dryers-and-particle-processing-plants/addcool/gea-addcool-heat-pump-solution-spray-dryers.jpg) |
| content | 2 | `campaigns/add-cool-sustainable-spray-drying-process/add-better` | — | [img](https://cdn.gea.com/-/jssmedia/campaigns/add-cool-sustainable-spray-drying-process/add-better.jpg) |
| content | 2 | `customer-cases/2025-arla-addcool/jens-lkke-ganderup-arla` | — | [img](https://cdn.gea.com/-/jssmedia/customer-cases/2025-arla-addcool/jens-lkke-ganderup-arla.jpg) |
| content | 2 | `migratedfromtridion/articles/gea-addcool-solution-117582` | — | [img](https://cdn.gea.com/-/jssmedia/migratedfromtridion/articles/gea-addcool-solution-117582.gif) |
| content | 2 | `migratedfromtridion/articles/gea-circularity-in-manufacturing-addcool-117582` | — | [img](https://cdn.gea.com/-/jssmedia/migratedfromtridion/articles/gea-circularity-in-manufacturing-addcool-117582.jpg) |
| content | 2 | `migratedfromtridion/articles/gea-spray-drying-solutions-117582` | — | [img](https://cdn.gea.com/-/jssmedia/migratedfromtridion/articles/gea-spray-drying-solutions-117582.jpg) |
| content | 2 | `migratedfromtridion/articles/sustainability-spray-drying-117582` | — | [img](https://cdn.gea.com/-/jssmedia/migratedfromtridion/articles/sustainability-spray-drying-117582.jpg) |
| content | 2 | `products/dryers-and-particle-processing-plants/add-cool-calculator` | — | [img](https://cdn.gea.com/-/media/products/dryers-and-particle-processing-plants/add-cool-calculator.jpg) |

### arla-addcool (6)

| Use | P | Media item (under media root) | Also on | Source |
|--|--|--|--|--|
| content | 1 | `customer-cases/2025-arla-addcool/add-better-solution-arla` | — | [img](https://cdn.gea.com/-/jssmedia/customer-cases/2025-arla-addcool/add-better-solution-arla.jpg) |
| content | 1 | `customer-cases/2025-arla-addcool/addcool-impact-graphs` | — | [img](https://cdn.gea.com/-/jssmedia/customer-cases/2025-arla-addcool/addcool-impact-graphs.jpg) |
| hero | 1 | `customer-cases/2025-arla-addcool/arla-site-svenstrup` | — | [img](https://cdn.gea.com/-/media/customer-cases/2025-arla-addcool/arla-site-svenstrup.jpg) |
| content | 1 | `customer-cases/2025-arla-addcool/arla-spray-dried-milk-powder` | — | [img](https://cdn.gea.com/-/media/customer-cases/2025-arla-addcool/arla-spray-dried-milk-powder.jpg) |
| content | 1 | `customer-cases/2025-arla-addcool/arla-spray-dryer` | — | [img](https://cdn.gea.com/-/media/customer-cases/2025-arla-addcool/arla-spray-dryer.jpg) |
| content | 1 | `customer-cases/2025-arla-addcool/line-brandt-pedersen-arla` | — | [img](https://cdn.gea.com/-/jssmedia/customer-cases/2025-arla-addcool/line-brandt-pedersen-arla.jpg) |

### drying-test-center (14)

| Use | P | Media item (under media root) | Also on | Source |
|--|--|--|--|--|
| content | 2 | `industries/beverage/gea-instant-coffee-process-lines` | — | [img](https://cdn.gea.com/-/jssmedia/industries/beverage/gea-instant-coffee-process-lines.jpg) |
| content | 2 | `industries/dairy-processing/nutritional-formula/infant-formula` | — | [img](https://cdn.gea.com/-/jssmedia/industries/dairy-processing/nutritional-formula/infant-formula.jpg) |
| content | 2 | `industries/food/food-ingredients/fermentation-derived-ingredients` | — | [img](https://cdn.gea.com/-/jssmedia/industries/food/food-ingredients/fermentation-derived-ingredients.jpg) |
| content | 2 | `industries/food/food-ingredients/orange-flavor-powder` | — | [img](https://cdn.gea.com/-/jssmedia/industries/food/food-ingredients/orange-flavor-powder.jpg) |
| content | 2 | `industries/food/food-ingredients/plant-based-proteins` | — | [img](https://cdn.gea.com/-/jssmedia/industries/food/food-ingredients/plant-based-proteins.jpg) |
| content | 2 | `products/dryers-and-particle-processing-plants/freeze-dryers/freeze-dried-pineapples` | — | [img](https://cdn.gea.com/-/jssmedia/products/dryers-and-particle-processing-plants/freeze-dryers/freeze-dried-pineapples.jpg) |
| content | 2 | `products/dryers-and-particle-processing-plants/spray-dryers/aseptic-spray-dryer/aseptic-spray-drying-gea-test-center` | — | [img](https://cdn.gea.com/-/jssmedia/products/dryers-and-particle-processing-plants/spray-dryers/aseptic-spray-dryer/aseptic-spray-drying-gea-test-center.jpg) |
| content | 2 | `products/dryers-and-particle-processing-plants/spray-dryers/aseptic-spray-dryer/gea-aseptic-spray-drying-solution` | — | [img](https://cdn.gea.com/-/jssmedia/products/dryers-and-particle-processing-plants/spray-dryers/aseptic-spray-dryer/gea-aseptic-spray-drying-solution.jpg) |
| content | 2 | `products/dryers-and-particle-processing-plants/spray-dryers/feasability-studies` | — | [img](https://cdn.gea.com/-/jssmedia/products/dryers-and-particle-processing-plants/spray-dryers/feasability-studies.jpg) |
| content | 2 | `products/dryers-and-particle-processing-plants/spray-dryers/fsd-spray-dryer/spray-dried-plant-based-protein` | — | [img](https://cdn.gea.com/-/jssmedia/products/dryers-and-particle-processing-plants/spray-dryers/fsd-spray-dryer/spray-dried-plant-based-protein.jpeg) |
| content | 2 | `products/dryers-and-particle-processing-plants/spray-dryers/pharma-sd/aseptic-plants` | — | [img](https://cdn.gea.com/-/media/products/dryers-and-particle-processing-plants/spray-dryers/pharma-sd/aseptic-plants.jpg) |
| content | 2 | `products/dryers-and-particle-processing-plants/spray-dryers/powder-test-center-spray-drying` | — | [img](https://cdn.gea.com/-/jssmedia/products/dryers-and-particle-processing-plants/spray-dryers/powder-test-center-spray-drying.jpg) |
| content | 2 | `products/dryers-and-particle-processing-plants/spray-dryers/spray-dried-chemical-powder` | — | [img](https://cdn.gea.com/-/jssmedia/products/dryers-and-particle-processing-plants/spray-dryers/spray-dried-chemical-powder.jpg) |
| content | 2 | `products/dryers-and-particle-processing-plants/spray-dryers/virtual-spray-dryer-testing` | — | [img](https://cdn.gea.com/-/jssmedia/products/dryers-and-particle-processing-plants/spray-dryers/virtual-spray-dryer-testing.jpg) |

### shared-insights (3)

| Use | P | Media item (under media root) | Also on | Source |
|--|--|--|--|--|
| content | 2 | `stories/better-plant-performance/gea-the-better-journey_teaser` | — | [img](https://cdn.gea.com/-/jssmedia/stories/better-plant-performance/gea-the-better-journey_teaser.jpg) |
| content | 2 | `stories/the-breakthrough-that-changed-spray-drying/niro-spray-dryer-model` | — | [img](https://cdn.gea.com/-/jssmedia/stories/the-breakthrough-that-changed-spray-drying/niro-spray-dryer-model.png) |
| content | 2 | `stories/water-hydraulic-hydract-valves/hydract-actuation-technology_teaser` | — | [img](https://cdn.gea.com/-/jssmedia/stories/water-hydraulic-hydract-valves/hydract-actuation-technology_teaser.jpg) |

## Capture evidence

Captured in the built-in browser (DOM sections, headings, CTAs, image sources, computed styles). For PNG screenshots and section crops, run locally:

```powershell
npm --prefix .cursor install
npm --prefix .cursor run setup:playwright
node .cursor/skills/capture-website/scripts/capture.mjs --file design-screenshots/gea-com/urls.txt --out design-screenshots/gea-com
```

## Next steps after approval

1. Build components (TSX in `examples/gea/src/components/`, renderings + templates in `authoring/items/gea/`), Header/Footer partial designs, Allowed Controls.
2. Compose the 8 pages + 4 folder pages in YAML with paraphrased copy (product names and ® marks kept exact).
3. Run the media script, then wire image fields to the media item GUIDs.
4. `dotnet sitecore cloud login` → `dotnet sitecore ser push -i gea-scs` against the tenant above, publish, set `.env.local` from Deploy portal.
5. `new-site-inventory`: registry → present, docs/COMPONENTS.md, AGENTS.md.
