# Builds GEA page/component/media maps from the 2026-10-28 browser capture.
import json, os, re
R = os.path.expanduser('~/mnt/xmcloud-starter-js-1')
DS = os.path.join(R, 'design-screenshots/gea-com')
DOCS = os.path.join(R, 'docs/gea')
MM = os.path.join(R, 'authoring/items/gea/scripts/media-maps')
NOW = '2026-10-28T16:30:00Z'
CDN = 'https://cdn.gea.com'
SITE = {"displayName": "gea", "systemName": "gea", "collection": "gea", "path": "/sitecore/content/gea/gea",
        "editingHost": "gea", "appPath": "examples/gea", "module": "authoring/items/gea/gea.module.json", "namespace": "gea-scs",
        "mediaRoot": "/sitecore/media library/Project/gea/gea", "mediaRootId": "4378179a-0ac5-4725-bae2-0a9d8977eb8a"}
TENANT = {"portal": "https://app.sitecorecloud.io/strategy/overview?organization=org_Yr0e8LadQ1bxB05s&tenantName=sitecoresaa2551-mvmdemo93ad-mvmdemoauthadc2",
          "organization": "org_Yr0e8LadQ1bxB05s", "tenantName": "sitecoresaa2551-mvmdemo93ad-mvmdemoauthadc2",
          "cmHostGuess": "https://xmc-sitecoresaa2551-mvmdemo93ad-mvmdemoauthadc2.sitecorecloud.io",
          "notes": "CM host follows the usual xmc-{tenantName} pattern; confirm in the Deploy portal before ser login."}

def P(slug, label, url, route, kind, comp, story, hero=None):
    sc = SITE['path'] + '/Home' + ('' if route == '/' else route.rstrip('/'))
    return {"slug": slug, "label": label, "url": url, "routePath": route, "sitecorePath": sc,
            "yamlRelativePath": 'Home.yml' if route == '/' else 'Home' + route.rstrip('/') + '.yml',
            "kind": kind, "status": "captured", "tier": 1, "storyActs": story, "heroImage": hero, "composition": comp}
M='headless-main'
pages = [
 P('home','Home','https://www.gea.com/en/','/','home',
   [("headless-header","Header"),(M,"HeroCarousel (3 HeroSlide)"),(M,"Promo ImageLeft - About us"),
    (M,"IndustryTiles Blue (12 IndustryTile)"),(M,"LinkList Plus - products overview, GEA Service"),
    (M,"Promo Compact - quarterly statement"),(M,"Promo ImageRight - Sustainability"),
    (M,"CardGrid Insights (5 Card)"),(M,"Promo ImageLeft - Careers"),(M,"CardGrid News (3 Card)"),
    ("headless-footer","NewsletterContactBand"),("headless-footer","Footer")],['1.1'],None),
 P('dairy-processing','Dairy (industry landing)','https://www.gea.com/en/dairy-processing/','/dairy-processing/','industry',
   [(M,"PageNav (Markets, Products, Downloads, Videos + Contact/Get a quote)"),(M,"HeroBanner Split - Specialists in processing white gold"),
    (M,"LinkList Inline - Explore our products (9 categories)"),(M,"IndustryTiles Outline - 8 markets"),
    (M,"RichText - 3 intro blocks"),(M,"CardGrid Carousel - 15 customer cases"),(M,"RichText - test centers intro"),
    (M,"CardGrid Promo - 3 test centers"),(M,"Promo ImageLeft - GEA Dairy LinkedIn"),
    (M,"ProductCardList Grid with filters (61 products, shows 4)"),(M,"Promo - milk lactoferrin"),
    (M,"CardGrid - 2 dairy cases"),(M,"CardGrid Insights - 3 stories")],['3.2','5.1'],'/-/media/industries/dairy-processing/gea-dairy-proccessing-industry.jpg'),
 P('milk-powders','Milk powders (market page)','https://www.gea.com/en/dairy-processing/milk-powders/','/dairy-processing/milk-powders/','market',
   [(M,"PageNav (Products, Downloads, Videos + Contact/Get a quote)"),(M,"Breadcrumb"),(M,"HeroBanner Split - Supplying global milk powder plants"),
    (M,"RichText Lead - intro + image + Show more"),(M,"ProcessLine (12 ProcessStep with product links)"),
    (M,"Promo ImageLeft - OptiPartner Spray drying, optimized"),(M,"CardGrid Promo - Danone case, MMPA case, LinkedIn"),
    (M,"ProductCardList Grid with filters (40 products)"),(M,"CardGrid Insights - 3 stories")],['1.1','2.1','2.2','2.3','3.1'],'/-/media/industries/dairy-processing/milk-powders/milk-powder.jpg'),
 P('msd-spray-dryer','MSD Spray Dryer (product)','https://www.gea.com/en/products/dryers-particle-processing/spray-dryers/msd-spray-dryer/','/products/dryers-particle-processing/spray-dryers/msd-spray-dryer/','product',
   [(M,"PageNav (Videos + Contact/Get a quote)"),(M,"Breadcrumb"),(M,"HeroBanner Split - eyebrow, H1, lede, Contact/Get a quote"),
    (M,"RichText - 5 sections + benefits list"),(M,"RichText - upgrades, hygiene, efficiency, sustainability, testing"),
    (M,"Promo ImageLeft - OptiPartner"),(M,"ProductCardList Row - Related products (4)"),
    (M,"ProductCardList Row - Service products (2)"),(M,"CardGrid Insights - 3 stories")],['2.1'],'/-/media/migratedfromtridion/market/msd-spray-dryer-36506.jpg'),
 P('gea-add-cool','GEA AddCool (product)','https://www.gea.com/en/products/dryers-particle-processing/spray-dryers/gea-add-cool/','/products/dryers-particle-processing/spray-dryers/gea-add-cool/','product',
   [(M,"PageNav"),(M,"Breadcrumb"),(M,"HeroBanner Split"),(M,"RichText"),
    (M,"CardGrid Feature - 3 pillars"),(M,"Promo ImageLeft - Add Better label"),
    (M,"Promo - savings calculator (CTA only, no form)"),(M,"CardGrid Promo - Arla case, energy audit case"),
    (M,"RichText - how it works, matching, benefits"),(M,"CtaBanner - Want to know more? Contact us"),
    (M,"ProductCardList Row - Related (4)"),(M,"ProductCardList Row - Service (2)"),(M,"CardGrid Insights")],['2.1','6.1'],'/-/media/products/dryers-and-particle-processing-plants/addcool/gea-addcool-heat-pump-solution-spray-dryers.jpg'),
 P('arla-addcool','Arla AddCool (customer case)','https://www.gea.com/en/customer-cases/arla-addcool/','/customer-cases/arla-addcool/','case',
   [(M,"HeroBanner Case - eyebrow Customer story, H1, Contact us, image"),(M,"RichText Lead"),
    (M,"RichText - challenge"),(M,"Quote (Line Brandt Pedersen)"),(M,"RichText - solution"),
    (M,"Quote (Jens Lokke Ganderup)"),(M,"ImageGallery (3)"),(M,"RichText - results list"),
    (M,"Image - impact graphs"),(M,"Quote"),(M,"RichText - the future"),(M,"Promo ImageLeft - GEA AddCool / Add Better")],['1.1','2.1','4.1','7.2'],'/-/media/customer-cases/2025-arla-addcool/arla-site-svenstrup.jpg'),
 P('drying-test-center','Drying Test Center (product / service)','https://www.gea.com/en/products/dryers-particle-processing/spray-dryers/drying-test-center/','/products/dryers-particle-processing/spray-dryers/drying-test-center/','product',
   [(M,"HeroBanner Split - Test. Perfect. Scale. + Contact us"),(M,"PageNav"),(M,"RichText - 2 blocks"),
    (M,"CardGrid Feature - 3 services"),(M,"RichText + Image - Virtual spray dryer testing"),(M,"RichText - Drynetics, powder testing"),
    (M,"CardGrid Feature - 9 applications"),(M,"ProductCardList Row - Related (4)"),(M,"ProductCardList Row - Service (2)"),(M,"CardGrid Insights")],['5.1','8.1'],'/-/media/products/dryers-and-particle-processing-plants/spray-dryers/gea-drying-test-facility.jpg'),
 P('contact','Contact / Get a quote','https://www.gea.com/en/contact/?cu=contact-us-get-a-quote','/contact/','contact',
   [(M,"ContactForm - area of interest (2 selects), message, first/last name, company, email, phone, zip, city, country, Submit")],['7.1','8.1'],None),
]
ALLP=['dairy-processing','milk-powders','msd-spray-dryer','gea-add-cool','drying-test-center']
components = [
 dict(id='C01',cmsName='Header',scope='site',action='create',pages=['all'],fields=['logo','searchPlaceholder','loginLink','languageLabel','contactLink','primaryLinks[]','productsMenuLabel'],placeholders=[],notes='Two rows: utility bar (search, Log in, language, blue pill Contact) and nav row (Products & Services mega-menu trigger left; About us, Sustainability, Investors, Media, Careers right). Mega-menu from a LinkList datasource. Pattern: header-navigation skill.'),
 dict(id='C02',cmsName='Footer',scope='site',action='create',pages=['all'],fields=['logo','aboutText','legalText','copyright','socialLinks[]'],placeholders=[{'name':'footer-columns','allows':['FooterLinkColumn']}],placeholderFor='FooterLinkColumn',notes='Light grey #F4F4F4. Columns: Products & services (12 industries), Company, Quick links. Legal row: Imprint, Data Protection Notice, Cookie settings, Sitemap.'),
 dict(id='C03',cmsName='NewsletterContactBand',scope='site',action='create',pages=['all'],fields=['newsTitle','newsText','newsLink','contactTitle','contactText','contactLink'],placeholders=[],notes='Receive news from GEA + Contact us blocks above the footer on every page. Lives on the footer partial design.'),
 dict(id='C04',cmsName='Breadcrumb',scope='page',action='create',pages=['milk-powders','msd-spray-dryer','gea-add-cool'],fields=[],placeholders=[],notes='Reads ancestors from layout; pattern vendored in header-navigation skill.'),
 dict(id='C05',cmsName='PageNav',scope='page',action='create',pages=ALLP,fields=['title','contactLink','quoteLink'],placeholders=[],notes='Sticky in-page bar: page title + anchor links built from components with an anchorId rendering parameter + Contact us / Get a quote buttons.'),
 dict(id='C06',cmsName='HeroCarousel',scope='page',action='create',pages=['home'],fields=[],placeholders=[{'name':'hero-slides','allows':['HeroSlide']}],placeholderFor='HeroSlide',notes='Full-bleed image slides; eyebrow link, uppercase H1 (GEA Head), green #1AFF80 Read more pill, numbered progress + prev/next.'),
 dict(id='C07',cmsName='HeroSlide',scope='page',action='create',pages=['home'],fields=['image','eyebrow','title','link'],placeholders=[],parentSection='HeroCarousel'),
 dict(id='C08',cmsName='HeroBanner',scope='page',action='create',variants=['Split','Case','Story'],pages=ALLP+['arla-addcool'],fields=['eyebrow','title','lede','image','primaryLink','secondaryLink'],placeholders=[],notes='Split: blue #0303B8 panel left (eyebrow, uppercase H1, lede, green pill CTA) + image right. Case: Customer story eyebrow, H1, Contact us, image. Story: date + H1 + lede (Tier 2).'),
 dict(id='C09',cmsName='RichText',scope='page',action='create',variants=['Default','Lead'],pages=ALLP+['arla-addcool'],fields=['heading','text'],placeholders=[],notes='Lead = larger intro with optional Show more. Rendering parameter anchorId feeds PageNav.'),
 dict(id='C10',cmsName='Promo',scope='page',action='create',variants=['ImageLeft','ImageRight','Compact'],pages=['home','dairy-processing','milk-powders','msd-spray-dryer','gea-add-cool','arla-addcool'],fields=['image','eyebrow','title','text','link'],placeholders=[],notes='Image + text + link. Grey #F5F5F5 panel on home About/Careers.'),
 dict(id='C11',cmsName='IndustryTiles',scope='page',action='create',variants=['Blue','Outline'],pages=['home','dairy-processing'],fields=['title'],placeholders=[{'name':'industry-tiles','allows':['IndustryTile']}],placeholderFor='IndustryTile',notes='Blue: white icon on #0303B8 tile (home). Outline: blue icon + label (dairy markets).'),
 dict(id='C12',cmsName='IndustryTile',scope='page',action='create',pages=['home','dairy-processing'],fields=['icon','label','link'],placeholders=[],parentSection='IndustryTiles'),
 dict(id='C13',cmsName='LinkList',scope='page',action='create',variants=['Inline','Plus'],pages=['home','dairy-processing'],fields=['title','links[]'],placeholders=[],notes='Inline comma list (Explore our products); Plus = + Overview of our products headline links.'),
 dict(id='C14',cmsName='CardGrid',scope='page',action='create',variants=['Insights','News','Carousel','Promo','Feature'],pages=['home']+ALLP,fields=['title','link'],placeholders=[{'name':'cards','allows':['Card']}],placeholderFor='Card',notes='One grid for stories, news, customer cases (Carousel), test centres (Promo) and pillars/applications (Feature).'),
 dict(id='C15',cmsName='Card',scope='page',action='create',pages=['home']+ALLP,fields=['image','eyebrow','title','text','link'],placeholders=[],parentSection='CardGrid',notes='Title is the link; separate CTA text. Do not wrap the whole card in one anchor.'),
 dict(id='C16',cmsName='ProcessLine',scope='page',action='create',pages=['milk-powders'],fields=['title','overviewImage'],placeholders=[{'name':'process-steps','allows':['ProcessStep']}],placeholderFor='ProcessStep',notes='Numbered stepper/accordion: 12 steps from cream separation to automation. Key component for the Page Builder edit and translation demo.'),
 dict(id='C17',cmsName='ProcessStep',scope='page',action='create',pages=['milk-powders'],fields=['title','text','image','links[]'],placeholders=[],parentSection='ProcessLine',notes='Number from position. links = product pages.'),
 dict(id='C18',cmsName='ProductCardList',scope='page',action='create',variants=['Grid','Row'],pages=ALLP,fields=['title','link','filterLabels[]'],placeholders=[{'name':'product-cards','allows':['ProductCard']}],placeholderFor='ProductCard',notes='Grid = Products & Technologies with category filter chips + View more. Row = Related Products / Service Products.'),
 dict(id='C19',cmsName='ProductCard',scope='page',action='create',pages=ALLP,fields=['image','title','text','category','link'],placeholders=[],parentSection='ProductCardList'),
 dict(id='C20',cmsName='Quote',scope='page',action='create',pages=['arla-addcool'],fields=['quote','name','role','image'],placeholders=[],notes='Large pull quote with optional portrait.'),
 dict(id='C21',cmsName='ImageGallery',scope='page',action='create',pages=['arla-addcool'],fields=['images[] (image + caption)'],placeholders=[],notes='3-image slider with captions.'),
 dict(id='C22',cmsName='Image',scope='page',action='create',pages=['arla-addcool','drying-test-center'],fields=['image','caption'],placeholders=[]),
 dict(id='C23',cmsName='CtaBanner',scope='page',action='create',pages=['gea-add-cool'],fields=['title','link'],placeholders=[],notes='Want to know more? Get in touch with our experts today + Contact us.'),
 dict(id='C24',cmsName='ContactForm',scope='page',action='unclear',pages=['contact'],fields=['title','intro','areaLabel','messageLabel','contactInfoLabel','submitLabel','thankYouText'],placeholders=[],notes='Decide: (a) custom React form, demo only, no real submission, or (b) SitecoreAI Forms via the built-in Form component (authorable; needs Forms in the tenant).'),
 dict(id='C25',cmsName='PartialDesignDynamicPlaceholder',scope='site',action='reuse',pages=['all'],fields=[],placeholders=[],notes='Already in examples/gea.'),
]
skips = [('Downloads list','dairy, milk powders, products','Client-side document search, empty in capture.'),
 ('Related Videos','dairy, milk powders, products','video.gea.com player; optional VideoEmbed later.'),
 ('AddCool savings calculator form','gea-add-cool','Lead form; rendered as Promo with contact CTA.'),
 ('Language/country selector','header','Static label; SitecoreAI language switch is shown in Page Builder instead.'),
 ('Login (portal.gea.com)','header','Link only.')]
J='/-/jssmedia/'; D='/-/media/'
media_raw = {
 'site':[J+'common/logos/gea-logo.svg',J+'common/logos/footer.png'],
 'home':[J+'stories/stopping-energy-loss-in-breweries/warka-brewhouse-gea-carousel.jpg',J+'stories/the-breakthrough-that-changed-spray-drying/arla-spray-dryer-msd.jpg',J+'stories/better-plant-performance/gea-the-better-journey_home.jpg',J+'company/about-us/home-about.jpg']
   +[D+'icons/white-icons/products-and-services/%s_srgb_white.svg'%x for x in ['chemicals','dairy-processing','dairy-farming','environment','food','refrigeration-heating','home-personal-care','marine','cell-based-food','oil-gas-energy','pharma']]
   +[J+'investors/events-and-releases/quarterly-reports/2025/q2_half-year/gea-quarterly-figures-announcement.jpg',J+'sustainability/images---various/sustainability-forest.jpg']
   +[D+'stories/'+x for x in ['gea-business-china/gea-multi-purpose-site-tianjin-china_teaser.jpg','building-resilience-into-the-olive-oil-industry/gea-center-of-excellence-olive-oil.jpg','functional-beverages/gea-functional-beverages.jpg','mastering-industrial-cooking-complexity-control/tech-inspects-homestyle-chicken-gea-cookstar.jpg','water-equation/gea-water-efficiency-industry_teaser.jpg']]
   +[J+'careers/home-careers.jpg',J+'news/corporate-press/2026/gea-top-employer-asia-pacific/top-employer-asia-pacific-2026_g.png',J+'gea/arrows/arrow-up1.jpg',J+'gea/globes/full/globe1.jpg'],
 'dairy-processing':[D+'industries/dairy-processing/gea-dairy-proccessing-industry.jpg']
   +[D+'icons/'+x for x in ['942__cheese.svg','948__dairy-ingredients.svg','51702desserts--fermented-products.svg','51653__ice-cream.svg','52491milk--cream.svg','52502__milk-fat-products.svg','36493__milk-powders.svg','36494__nutritional-formula.svg']]
   +[J+x for x in ['customer-cases/2025-arla-addcool/add-cool-heat-pump-arla-foods.jpg','customer-cases/yili-gea-partnership/yili-site.jpg','customer-cases/mmpa-optipartner/gaspar-calandrino-director-mmpa.jpg','migratedfromtridion/news/milchwerk-crailsheim-107397.jpg','sustainability/impact-stories/enabling-customers/amulfed-dairy-plant.jpg','sustainability/impact-stories/enabling-customers/gea-dairy-separator-naarmann.jpg','migratedfromtridion/customer-cases/valfoo-cremo-lactoferrin-powder-product-110132.jpg','migratedfromtridion/customer-cases/euromilk-promo-107437.jpg','customer-cases/strategic-partnership-between-mokate-group-and-gea/mokate-group-poland.jpg','migratedfromtridion/customer-cases/amul-ghee-products-89166.jpg','industries/dairy-processing/danone-dairy-plant.jpg','migratedfromtridion/customer-cases/customer-story-arla-gea2-51677.jpg','migratedfromtridion/articles/optipartner-facility-105496.jpg','migratedfromtridion/news/aurivo-killygordon-66683.jpg','migratedfromtridion/articles/test-center-aseptic-processing-and-filling-ahaus-109076.jpg','products/centrifuges-and-separation-equipment/others/ptc_oelde_laboratory.jpg','products/dryers-and-particle-processing-plants/spray-dryers/gea-drying-test-facility.jpg','industries/migrated-from-tridion/gea-dairy-linkedin-2930.jpg','campaigns/milk-lactoferin/gea-lactoferrin-powder-test-facilities.jpg','customer-cases/aurivo-reduces-fossil-fuel-consumption/hero-photo-for-aurivo-story-66578.jpg']]
   +[D+x for x in ['migratedfromtridion/productgroup/analytics-web-12528.jpg','migratedfromtridion/productgroup/gea-centrifuge-water-saving-unit-add-better-107871.jpg','products/liquid-processing/aseptic-systems/aseptic-systems-images-used-new/aseptic-tank_1.jpg','products/pumps-valves-flow-components/valves-components-aseptic-liquid-processing/aseptic-valves-components.jpg']],
 'milk-powders':[D+'industries/dairy-processing/milk-powders/milk-powder.jpg',J+'migratedfromtridion/market/milk-powder-pile-36506.jpg',D+'migratedfromtridion/market/milk-powder-plant-36506.jpg']
   +[J+'migratedfromtridion/market/'+x for x in ['centrifuge-separator-msi-milk-whey-36506.jpg','pasteurizer-skid-separator-36506.jpg','gea-hygitip-1-36506.jpg','gea-inline-formula-sol-high-shear-mixer-1000l_1-36506.jpg','membrane-filtration-plants-1-36506.jpg','dairy-evaporation-milk-powder-36506.jpg','ariete-homogenizer-5400-36506.jpg','msd-spray-dryer-36506.jpg','vibrating-sifter-36506.jpg','gea-filling-rbf800-new-36506.jpg','gea-refrigeration-36506.jpg','automation-36506.jpg']]
   +[J+'migratedfromtridion/articles/optipartner-digital-solution-86303.jpg',J+'migratedfromtridion/customer-cases/danone-plant-haps-netherlands-63991.jpg',J+'company/media/media-homepage/linkedin-logo-white-36354-1200x675.png',D+'migratedfromtridion/products/gea-automated-packing-line-7800.jpg',D+'migratedfromtridion/productgroup/gea-bag-sealing-4598.jpg',D+'migratedfromtridion/productgroup/gea-automated-packing-line-4594.jpg'],
 'msd-spray-dryer':[D+x for x in ['migratedfromtridion/market/msd-spray-dryer-36506.jpg','migratedfromtridion/products/spraydryer_gea-comaptact-dryer-cdi1200x675_final-14412.jpg','migratedfromtridion/customer-cases/gea-spray-dryer-mother-murphys-flavor-ingredients-79435.jpg','products/dryers-and-particle-processing-plants/spray-dryers/filtermat/gea-filtermat-spray-dryer.jpg','migratedfromtridion/products/fsd-spray-dryer-food-ingredients-14377.jpg','migratedfromtridion/products/safexpert-45546.jpg','products/dryers-and-particle-processing-plants/spray-dryers/health-check-spray-dryer/health-check-spray-dryer-maintenance.jpg']],
 'gea-add-cool':[D+'products/dryers-and-particle-processing-plants/addcool/gea-addcool-heat-pump-solution-spray-dryers.jpg']+[J+x for x in ['migratedfromtridion/articles/sustainability-spray-drying-117582.jpg','migratedfromtridion/articles/gea-spray-drying-solutions-117582.jpg','migratedfromtridion/articles/gea-circularity-in-manufacturing-addcool-117582.jpg','campaigns/add-cool-sustainable-spray-drying-process/add-better.jpg','migratedfromtridion/articles/gea-addcool-solution-117582.gif','customer-cases/2025-arla-addcool/jens-lkke-ganderup-arla.jpg']]+[D+'products/dryers-and-particle-processing-plants/add-cool-calculator.jpg'],
 'arla-addcool':[D+'customer-cases/2025-arla-addcool/'+x for x in ['arla-site-svenstrup.jpg','add-cool-heat-pump-arla-foods.jpg','arla-spray-dried-milk-powder.jpg','arla-spray-dryer.jpg']]+[J+'customer-cases/2025-arla-addcool/'+x for x in ['line-brandt-pedersen-arla.jpg','addcool-impact-graphs.jpg','add-better-solution-arla.jpg']],
 'drying-test-center':[D+'products/dryers-and-particle-processing-plants/spray-dryers/gea-drying-test-facility.jpg']+[J+'products/dryers-and-particle-processing-plants/spray-dryers/'+x for x in ['feasability-studies.jpg','aseptic-spray-dryer/aseptic-spray-drying-gea-test-center.jpg','powder-test-center-spray-drying.jpg','virtual-spray-dryer-testing.jpg','aseptic-spray-dryer/gea-aseptic-spray-drying-solution.jpg','spray-dried-chemical-powder.jpg','fsd-spray-dryer/spray-dried-plant-based-protein.jpeg']]
   +[J+x for x in ['industries/dairy-processing/nutritional-formula/infant-formula.jpg','products/dryers-and-particle-processing-plants/freeze-dryers/freeze-dried-pineapples.jpg','industries/beverage/gea-instant-coffee-process-lines.jpg','industries/food/food-ingredients/orange-flavor-powder.jpg','industries/food/food-ingredients/plant-based-proteins.jpg','industries/food/food-ingredients/fermentation-derived-ingredients.jpg']]+[D+'products/dryers-and-particle-processing-plants/spray-dryers/pharma-sd/aseptic-plants.jpg'],
 'shared-insights':[J+'stories/'+x for x in ['the-breakthrough-that-changed-spray-drying/niro-spray-dryer-model.png','better-plant-performance/gea-the-better-journey_teaser.jpg','water-hydraulic-hydract-valves/hydract-actuation-technology_teaser.jpg']],
}
def key(p): return re.sub(r'^/-/(jss)?media/','',p).lower()
heroes = {key(p['heroImage']):p['slug'] for p in pages if p.get('heroImage')}
assets = {}
for pg, lst in media_raw.items():
    for p in lst:
        k = key(p)
        a = assets.setdefault(k, {"sourceUrl": CDN+p, "libraryPath": k, "pages": [], "status": "pending-download"})
        if pg not in a['pages']: a['pages'].append(pg)
for rel,a in assets.items():
    a['targetItemPath'] = SITE['mediaRoot'] + '/' + rel.rsplit('.',1)[0]
    a['type'] = 'icon' if rel.endswith('.svg') else ('animation' if rel.endswith('.gif') else 'image')
    a['alt'] = re.sub(r'[-_]+',' ', os.path.splitext(os.path.basename(rel))[0]).strip()
    a['use'] = 'hero' if rel in heroes else ('logo' if 'logos/' in rel else ('icon' if a['type']=='icon' else 'content'))
    a['priority'] = 1 if (a['use'] in ('hero','logo','icon') or a['pages'][0] in ('site','home','milk-powders','arla-addcool')) else 2
alist = sorted(assets.values(), key=lambda a:(a['priority'], a['pages'][0], a['libraryPath']))

page_map = {"version":1,"project":"gea-com","brand":"GEA","site":SITE,"tenant":TENANT,"baseUrl":"https://www.gea.com/en","capturedAt":NOW,
  "captureMethod":"Built-in browser DOM capture (sections, headings, CTAs, images, computed styles) + text fetch. PNGs: run capture.mjs locally (docs/GEA-SITE-MAP.md).",
  "statusValues":{"captured":"Structure captured; page YAML not composed.","composed":"Layout + datasources in local YAML.","pushed":"Serialized to CM.","published":"On Edge."},
  "pages":[{**{k:v for k,v in p.items() if k!='composition'},"composition":[f"{ph}: {c}" for ph,c in p['composition']]} for p in pages],
  "intermediatePages":[{"sitecorePath":SITE['path']+'/Home/'+x,"note":"Folder page so routes resolve; simple page until Tier 2 is captured."} for x in ['products','products/dryers-particle-processing','products/dryers-particle-processing/spray-dryers','customer-cases']]}
component_map = {"version":2,"project":"gea-com","site":"gea","status":"proposed - awaiting approval","generatedAt":NOW,
  "designTokens":{"fontBody":"Inter, sans-serif 16px #111111","fontDisplay":"GEA Head (fallback Inter 600), H1 55px uppercase on heroes","h2":"Inter 500 32px #0303B8","primary":"#0303B8","accentCta":"#1AFF80 (green pill, dark text)","greyPanel":"#F5F5F5","footerBg":"#F4F4F4","pillRadius":"24px","contactButton":"#0303B8 bg, white text, 24px radius"},
  "notes":"examples/gea starts with only PartialDesignDynamicPlaceholder, so every visual component is create. componentName = TSX file base name with export const Default plus named variant exports.",
  "components":components,"skipped":[{"block":b,"pages":p,"reason":r} for b,p,r in skips]}
review = {"project":"gea-com","sourceUrls":[p['url'] for p in pages],"generatedAt":NOW,"approval":"PENDING","components":[
  {"id":c['id'],"cmsName":c['cmsName'],"visualRole":c.get('notes',''),"scope":c['scope'],"action":c['action'],"variants":c.get('variants',[]),"pageSlugs":c['pages'],
   "evidence":["design-screenshots/gea-com/page-map.json#"+c['pages'][0]],"fields":c['fields'],"placeholders":c['placeholders'],
   "parentSection":c.get('parentSection'),"placeholderFor":c.get('placeholderFor'),"confidence":"medium" if c['action']=='unclear' else "high"} for c in components]}
media_map = {"version":1,"project":"gea-com","site":"gea","status":"pending-download","generatedAt":NOW,
  "library":{"root":SITE['mediaRoot'],"rootId":SITE['mediaRootId'],"diskRoot":"authoring/items/gea/serialized-content/media-library/gea/gea",
   "fieldShape":'<image mediaid="{MEDIA-ITEM-GUID}" />',"generator":".cursor/skills/sitecore-yaml/generators/sitecore-media-from-url-yaml/scripts/create-media-from-urls.ps1",
   "runner":"authoring/items/gea/scripts/media-maps/download-gea-media.ps1"},
  "contentHub":{"status":"not-configured","notes":"Optional: upload to a GEA brand in Content Hub and switch fields to DAM src + dam-id."},
  "rules":["Never put cdn.gea.com URLs in serialized fields; fields reference media items by GUID.","Library path mirrors the gea.com /-/media path under the site media root (dedupes -/media and -/jssmedia).","Priority 1 = logo, icons, heroes, home, milk powders, Arla case; priority 2 = product-grid thumbnails and test-centre application images."],
  "assetCount":len(alist),"priority1":sum(1 for a in alist if a['priority']==1),"assets":alist}
for name,obj in [('page-map.json',page_map),('component-map.json',component_map),('component-review.json',review),('media-map.json',media_map)]:
    for d in (DS,DOCS):
        json.dump(obj,open(os.path.join(d,name),'w',encoding='utf-8'),indent=2,ensure_ascii=False)
open(os.path.join(DS,'urls.txt'),'w').write('# GEA Tier 1 (docs/GEA.md)\n'+'\n'.join(p['url'] for p in pages)+'\n')
L=["# Downloads GEA Tier 1 images into Sitecore media-library YAML.","# Run from the repo root on a machine that can reach cdn.gea.com:","#   pwsh -File authoring/items/gea/scripts/media-maps/download-gea-media.ps1   (add -Priority 1 for the essentials only)",
 "param([int]$Priority = 2)","$ErrorActionPreference = 'Stop'","$repo = (Resolve-Path (Join-Path $PSScriptRoot '../../../../..')).Path","Set-Location $repo","$all = @("]
for a in alist:
    L.append("  @{ Url = '%s'; Alt = '%s'; P = %d }" % (a['sourceUrl'], a['alt'].replace("'","''"), a['priority']))
L += [")","$assets = @($all | Where-Object { $_.P -le $Priority } | ForEach-Object { @{ Url = $_.Url; Alt = $_.Alt } })","Write-Host \"Downloading $($assets.Count) assets...\"",
 "& (Join-Path $repo '.cursor/skills/sitecore-yaml/generators/sitecore-media-from-url-yaml/scripts/create-media-from-urls.ps1') `",
 "  -MediaRoot (Join-Path $repo 'authoring/items/gea/serialized-content/media-library/gea/gea') `",
 "  -SiteMediaPath '%s' -SiteRootItemId '%s' -BaseUrl 'https://www.gea.com' -Assets $assets |" % (SITE['mediaRoot'], SITE['mediaRootId']),
 "  Set-Content -Path (Join-Path $PSScriptRoot 'gea-media-results.json') -Encoding utf8",
 "Write-Host 'Done. Media item IDs are in gea-media-results.json.'"]
open(os.path.join(MM,'download-gea-media.ps1'),'w',encoding='utf-8').write('\n'.join(L)+'\n')
print('pages',len(pages),'components',len(components),'assets',len(alist),'p1',media_map['priority1'])
