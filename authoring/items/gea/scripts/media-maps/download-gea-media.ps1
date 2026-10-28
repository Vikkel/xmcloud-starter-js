# Downloads GEA Tier 1 images into Sitecore media-library YAML.
# Run from the repo root on a machine that can reach cdn.gea.com:
#   pwsh -File authoring/items/gea/scripts/media-maps/download-gea-media.ps1   (add -Priority 1 for the essentials only)
param([int]$Priority = 2)
$ErrorActionPreference = 'Stop'
$repo = (Resolve-Path (Join-Path $PSScriptRoot '../../../../..')).Path
Set-Location $repo
$all = @(
  @{ Url = 'https://cdn.gea.com/-/jssmedia/customer-cases/2025-arla-addcool/add-better-solution-arla.jpg'; Alt = 'add better solution arla'; P = 1 }
  @{ Url = 'https://cdn.gea.com/-/jssmedia/customer-cases/2025-arla-addcool/addcool-impact-graphs.jpg'; Alt = 'addcool impact graphs'; P = 1 }
  @{ Url = 'https://cdn.gea.com/-/media/customer-cases/2025-arla-addcool/arla-site-svenstrup.jpg'; Alt = 'arla site svenstrup'; P = 1 }
  @{ Url = 'https://cdn.gea.com/-/media/customer-cases/2025-arla-addcool/arla-spray-dried-milk-powder.jpg'; Alt = 'arla spray dried milk powder'; P = 1 }
  @{ Url = 'https://cdn.gea.com/-/media/customer-cases/2025-arla-addcool/arla-spray-dryer.jpg'; Alt = 'arla spray dryer'; P = 1 }
  @{ Url = 'https://cdn.gea.com/-/jssmedia/customer-cases/2025-arla-addcool/line-brandt-pedersen-arla.jpg'; Alt = 'line brandt pedersen arla'; P = 1 }
  @{ Url = 'https://cdn.gea.com/-/media/icons/36493__milk-powders.svg'; Alt = '36493 milk powders'; P = 1 }
  @{ Url = 'https://cdn.gea.com/-/media/icons/36494__nutritional-formula.svg'; Alt = '36494 nutritional formula'; P = 1 }
  @{ Url = 'https://cdn.gea.com/-/media/icons/51653__ice-cream.svg'; Alt = '51653 ice cream'; P = 1 }
  @{ Url = 'https://cdn.gea.com/-/media/icons/51702desserts--fermented-products.svg'; Alt = '51702desserts fermented products'; P = 1 }
  @{ Url = 'https://cdn.gea.com/-/media/icons/52491milk--cream.svg'; Alt = '52491milk cream'; P = 1 }
  @{ Url = 'https://cdn.gea.com/-/media/icons/52502__milk-fat-products.svg'; Alt = '52502 milk fat products'; P = 1 }
  @{ Url = 'https://cdn.gea.com/-/media/icons/942__cheese.svg'; Alt = '942 cheese'; P = 1 }
  @{ Url = 'https://cdn.gea.com/-/media/icons/948__dairy-ingredients.svg'; Alt = '948 dairy ingredients'; P = 1 }
  @{ Url = 'https://cdn.gea.com/-/media/industries/dairy-processing/gea-dairy-proccessing-industry.jpg'; Alt = 'gea dairy proccessing industry'; P = 1 }
  @{ Url = 'https://cdn.gea.com/-/jssmedia/products/dryers-and-particle-processing-plants/spray-dryers/gea-drying-test-facility.jpg'; Alt = 'gea drying test facility'; P = 1 }
  @{ Url = 'https://cdn.gea.com/-/media/products/dryers-and-particle-processing-plants/addcool/gea-addcool-heat-pump-solution-spray-dryers.jpg'; Alt = 'gea addcool heat pump solution spray dryers'; P = 1 }
  @{ Url = 'https://cdn.gea.com/-/jssmedia/careers/home-careers.jpg'; Alt = 'home careers'; P = 1 }
  @{ Url = 'https://cdn.gea.com/-/jssmedia/company/about-us/home-about.jpg'; Alt = 'home about'; P = 1 }
  @{ Url = 'https://cdn.gea.com/-/jssmedia/gea/arrows/arrow-up1.jpg'; Alt = 'arrow up1'; P = 1 }
  @{ Url = 'https://cdn.gea.com/-/jssmedia/gea/globes/full/globe1.jpg'; Alt = 'globe1'; P = 1 }
  @{ Url = 'https://cdn.gea.com/-/media/icons/white-icons/products-and-services/cell-based-food_srgb_white.svg'; Alt = 'cell based food srgb white'; P = 1 }
  @{ Url = 'https://cdn.gea.com/-/media/icons/white-icons/products-and-services/chemicals_srgb_white.svg'; Alt = 'chemicals srgb white'; P = 1 }
  @{ Url = 'https://cdn.gea.com/-/media/icons/white-icons/products-and-services/dairy-farming_srgb_white.svg'; Alt = 'dairy farming srgb white'; P = 1 }
  @{ Url = 'https://cdn.gea.com/-/media/icons/white-icons/products-and-services/dairy-processing_srgb_white.svg'; Alt = 'dairy processing srgb white'; P = 1 }
  @{ Url = 'https://cdn.gea.com/-/media/icons/white-icons/products-and-services/environment_srgb_white.svg'; Alt = 'environment srgb white'; P = 1 }
  @{ Url = 'https://cdn.gea.com/-/media/icons/white-icons/products-and-services/food_srgb_white.svg'; Alt = 'food srgb white'; P = 1 }
  @{ Url = 'https://cdn.gea.com/-/media/icons/white-icons/products-and-services/home-personal-care_srgb_white.svg'; Alt = 'home personal care srgb white'; P = 1 }
  @{ Url = 'https://cdn.gea.com/-/media/icons/white-icons/products-and-services/marine_srgb_white.svg'; Alt = 'marine srgb white'; P = 1 }
  @{ Url = 'https://cdn.gea.com/-/media/icons/white-icons/products-and-services/oil-gas-energy_srgb_white.svg'; Alt = 'oil gas energy srgb white'; P = 1 }
  @{ Url = 'https://cdn.gea.com/-/media/icons/white-icons/products-and-services/pharma_srgb_white.svg'; Alt = 'pharma srgb white'; P = 1 }
  @{ Url = 'https://cdn.gea.com/-/media/icons/white-icons/products-and-services/refrigeration-heating_srgb_white.svg'; Alt = 'refrigeration heating srgb white'; P = 1 }
  @{ Url = 'https://cdn.gea.com/-/jssmedia/investors/events-and-releases/quarterly-reports/2025/q2_half-year/gea-quarterly-figures-announcement.jpg'; Alt = 'gea quarterly figures announcement'; P = 1 }
  @{ Url = 'https://cdn.gea.com/-/jssmedia/news/corporate-press/2026/gea-top-employer-asia-pacific/top-employer-asia-pacific-2026_g.png'; Alt = 'top employer asia pacific 2026 g'; P = 1 }
  @{ Url = 'https://cdn.gea.com/-/jssmedia/stories/better-plant-performance/gea-the-better-journey_home.jpg'; Alt = 'gea the better journey home'; P = 1 }
  @{ Url = 'https://cdn.gea.com/-/media/stories/building-resilience-into-the-olive-oil-industry/gea-center-of-excellence-olive-oil.jpg'; Alt = 'gea center of excellence olive oil'; P = 1 }
  @{ Url = 'https://cdn.gea.com/-/media/stories/functional-beverages/gea-functional-beverages.jpg'; Alt = 'gea functional beverages'; P = 1 }
  @{ Url = 'https://cdn.gea.com/-/media/stories/gea-business-china/gea-multi-purpose-site-tianjin-china_teaser.jpg'; Alt = 'gea multi purpose site tianjin china teaser'; P = 1 }
  @{ Url = 'https://cdn.gea.com/-/media/stories/mastering-industrial-cooking-complexity-control/tech-inspects-homestyle-chicken-gea-cookstar.jpg'; Alt = 'tech inspects homestyle chicken gea cookstar'; P = 1 }
  @{ Url = 'https://cdn.gea.com/-/jssmedia/stories/stopping-energy-loss-in-breweries/warka-brewhouse-gea-carousel.jpg'; Alt = 'warka brewhouse gea carousel'; P = 1 }
  @{ Url = 'https://cdn.gea.com/-/jssmedia/stories/the-breakthrough-that-changed-spray-drying/arla-spray-dryer-msd.jpg'; Alt = 'arla spray dryer msd'; P = 1 }
  @{ Url = 'https://cdn.gea.com/-/media/stories/water-equation/gea-water-efficiency-industry_teaser.jpg'; Alt = 'gea water efficiency industry teaser'; P = 1 }
  @{ Url = 'https://cdn.gea.com/-/jssmedia/sustainability/images---various/sustainability-forest.jpg'; Alt = 'sustainability forest'; P = 1 }
  @{ Url = 'https://cdn.gea.com/-/jssmedia/company/media/media-homepage/linkedin-logo-white-36354-1200x675.png'; Alt = 'linkedin logo white 36354 1200x675'; P = 1 }
  @{ Url = 'https://cdn.gea.com/-/media/industries/dairy-processing/milk-powders/milk-powder.jpg'; Alt = 'milk powder'; P = 1 }
  @{ Url = 'https://cdn.gea.com/-/jssmedia/migratedfromtridion/articles/optipartner-digital-solution-86303.jpg'; Alt = 'optipartner digital solution 86303'; P = 1 }
  @{ Url = 'https://cdn.gea.com/-/jssmedia/migratedfromtridion/customer-cases/danone-plant-haps-netherlands-63991.jpg'; Alt = 'danone plant haps netherlands 63991'; P = 1 }
  @{ Url = 'https://cdn.gea.com/-/jssmedia/migratedfromtridion/market/ariete-homogenizer-5400-36506.jpg'; Alt = 'ariete homogenizer 5400 36506'; P = 1 }
  @{ Url = 'https://cdn.gea.com/-/jssmedia/migratedfromtridion/market/automation-36506.jpg'; Alt = 'automation 36506'; P = 1 }
  @{ Url = 'https://cdn.gea.com/-/jssmedia/migratedfromtridion/market/centrifuge-separator-msi-milk-whey-36506.jpg'; Alt = 'centrifuge separator msi milk whey 36506'; P = 1 }
  @{ Url = 'https://cdn.gea.com/-/jssmedia/migratedfromtridion/market/dairy-evaporation-milk-powder-36506.jpg'; Alt = 'dairy evaporation milk powder 36506'; P = 1 }
  @{ Url = 'https://cdn.gea.com/-/jssmedia/migratedfromtridion/market/gea-filling-rbf800-new-36506.jpg'; Alt = 'gea filling rbf800 new 36506'; P = 1 }
  @{ Url = 'https://cdn.gea.com/-/jssmedia/migratedfromtridion/market/gea-hygitip-1-36506.jpg'; Alt = 'gea hygitip 1 36506'; P = 1 }
  @{ Url = 'https://cdn.gea.com/-/jssmedia/migratedfromtridion/market/gea-inline-formula-sol-high-shear-mixer-1000l_1-36506.jpg'; Alt = 'gea inline formula sol high shear mixer 1000l 1 36506'; P = 1 }
  @{ Url = 'https://cdn.gea.com/-/jssmedia/migratedfromtridion/market/gea-refrigeration-36506.jpg'; Alt = 'gea refrigeration 36506'; P = 1 }
  @{ Url = 'https://cdn.gea.com/-/jssmedia/migratedfromtridion/market/membrane-filtration-plants-1-36506.jpg'; Alt = 'membrane filtration plants 1 36506'; P = 1 }
  @{ Url = 'https://cdn.gea.com/-/jssmedia/migratedfromtridion/market/milk-powder-pile-36506.jpg'; Alt = 'milk powder pile 36506'; P = 1 }
  @{ Url = 'https://cdn.gea.com/-/media/migratedfromtridion/market/milk-powder-plant-36506.jpg'; Alt = 'milk powder plant 36506'; P = 1 }
  @{ Url = 'https://cdn.gea.com/-/jssmedia/migratedfromtridion/market/msd-spray-dryer-36506.jpg'; Alt = 'msd spray dryer 36506'; P = 1 }
  @{ Url = 'https://cdn.gea.com/-/jssmedia/migratedfromtridion/market/pasteurizer-skid-separator-36506.jpg'; Alt = 'pasteurizer skid separator 36506'; P = 1 }
  @{ Url = 'https://cdn.gea.com/-/jssmedia/migratedfromtridion/market/vibrating-sifter-36506.jpg'; Alt = 'vibrating sifter 36506'; P = 1 }
  @{ Url = 'https://cdn.gea.com/-/media/migratedfromtridion/productgroup/gea-automated-packing-line-4594.jpg'; Alt = 'gea automated packing line 4594'; P = 1 }
  @{ Url = 'https://cdn.gea.com/-/media/migratedfromtridion/productgroup/gea-bag-sealing-4598.jpg'; Alt = 'gea bag sealing 4598'; P = 1 }
  @{ Url = 'https://cdn.gea.com/-/media/migratedfromtridion/products/gea-automated-packing-line-7800.jpg'; Alt = 'gea automated packing line 7800'; P = 1 }
  @{ Url = 'https://cdn.gea.com/-/jssmedia/common/logos/footer.png'; Alt = 'footer'; P = 1 }
  @{ Url = 'https://cdn.gea.com/-/jssmedia/common/logos/gea-logo.svg'; Alt = 'gea logo'; P = 1 }
  @{ Url = 'https://cdn.gea.com/-/jssmedia/campaigns/milk-lactoferin/gea-lactoferrin-powder-test-facilities.jpg'; Alt = 'gea lactoferrin powder test facilities'; P = 2 }
  @{ Url = 'https://cdn.gea.com/-/jssmedia/customer-cases/2025-arla-addcool/add-cool-heat-pump-arla-foods.jpg'; Alt = 'add cool heat pump arla foods'; P = 2 }
  @{ Url = 'https://cdn.gea.com/-/jssmedia/customer-cases/aurivo-reduces-fossil-fuel-consumption/hero-photo-for-aurivo-story-66578.jpg'; Alt = 'hero photo for aurivo story 66578'; P = 2 }
  @{ Url = 'https://cdn.gea.com/-/jssmedia/customer-cases/mmpa-optipartner/gaspar-calandrino-director-mmpa.jpg'; Alt = 'gaspar calandrino director mmpa'; P = 2 }
  @{ Url = 'https://cdn.gea.com/-/jssmedia/customer-cases/strategic-partnership-between-mokate-group-and-gea/mokate-group-poland.jpg'; Alt = 'mokate group poland'; P = 2 }
  @{ Url = 'https://cdn.gea.com/-/jssmedia/customer-cases/yili-gea-partnership/yili-site.jpg'; Alt = 'yili site'; P = 2 }
  @{ Url = 'https://cdn.gea.com/-/jssmedia/industries/dairy-processing/danone-dairy-plant.jpg'; Alt = 'danone dairy plant'; P = 2 }
  @{ Url = 'https://cdn.gea.com/-/jssmedia/industries/migrated-from-tridion/gea-dairy-linkedin-2930.jpg'; Alt = 'gea dairy linkedin 2930'; P = 2 }
  @{ Url = 'https://cdn.gea.com/-/jssmedia/migratedfromtridion/articles/optipartner-facility-105496.jpg'; Alt = 'optipartner facility 105496'; P = 2 }
  @{ Url = 'https://cdn.gea.com/-/jssmedia/migratedfromtridion/articles/test-center-aseptic-processing-and-filling-ahaus-109076.jpg'; Alt = 'test center aseptic processing and filling ahaus 109076'; P = 2 }
  @{ Url = 'https://cdn.gea.com/-/jssmedia/migratedfromtridion/customer-cases/amul-ghee-products-89166.jpg'; Alt = 'amul ghee products 89166'; P = 2 }
  @{ Url = 'https://cdn.gea.com/-/jssmedia/migratedfromtridion/customer-cases/customer-story-arla-gea2-51677.jpg'; Alt = 'customer story arla gea2 51677'; P = 2 }
  @{ Url = 'https://cdn.gea.com/-/jssmedia/migratedfromtridion/customer-cases/euromilk-promo-107437.jpg'; Alt = 'euromilk promo 107437'; P = 2 }
  @{ Url = 'https://cdn.gea.com/-/jssmedia/migratedfromtridion/customer-cases/valfoo-cremo-lactoferrin-powder-product-110132.jpg'; Alt = 'valfoo cremo lactoferrin powder product 110132'; P = 2 }
  @{ Url = 'https://cdn.gea.com/-/jssmedia/migratedfromtridion/news/aurivo-killygordon-66683.jpg'; Alt = 'aurivo killygordon 66683'; P = 2 }
  @{ Url = 'https://cdn.gea.com/-/jssmedia/migratedfromtridion/news/milchwerk-crailsheim-107397.jpg'; Alt = 'milchwerk crailsheim 107397'; P = 2 }
  @{ Url = 'https://cdn.gea.com/-/media/migratedfromtridion/productgroup/analytics-web-12528.jpg'; Alt = 'analytics web 12528'; P = 2 }
  @{ Url = 'https://cdn.gea.com/-/media/migratedfromtridion/productgroup/gea-centrifuge-water-saving-unit-add-better-107871.jpg'; Alt = 'gea centrifuge water saving unit add better 107871'; P = 2 }
  @{ Url = 'https://cdn.gea.com/-/jssmedia/products/centrifuges-and-separation-equipment/others/ptc_oelde_laboratory.jpg'; Alt = 'ptc oelde laboratory'; P = 2 }
  @{ Url = 'https://cdn.gea.com/-/media/products/liquid-processing/aseptic-systems/aseptic-systems-images-used-new/aseptic-tank_1.jpg'; Alt = 'aseptic tank 1'; P = 2 }
  @{ Url = 'https://cdn.gea.com/-/media/products/pumps-valves-flow-components/valves-components-aseptic-liquid-processing/aseptic-valves-components.jpg'; Alt = 'aseptic valves components'; P = 2 }
  @{ Url = 'https://cdn.gea.com/-/jssmedia/sustainability/impact-stories/enabling-customers/amulfed-dairy-plant.jpg'; Alt = 'amulfed dairy plant'; P = 2 }
  @{ Url = 'https://cdn.gea.com/-/jssmedia/sustainability/impact-stories/enabling-customers/gea-dairy-separator-naarmann.jpg'; Alt = 'gea dairy separator naarmann'; P = 2 }
  @{ Url = 'https://cdn.gea.com/-/jssmedia/industries/beverage/gea-instant-coffee-process-lines.jpg'; Alt = 'gea instant coffee process lines'; P = 2 }
  @{ Url = 'https://cdn.gea.com/-/jssmedia/industries/dairy-processing/nutritional-formula/infant-formula.jpg'; Alt = 'infant formula'; P = 2 }
  @{ Url = 'https://cdn.gea.com/-/jssmedia/industries/food/food-ingredients/fermentation-derived-ingredients.jpg'; Alt = 'fermentation derived ingredients'; P = 2 }
  @{ Url = 'https://cdn.gea.com/-/jssmedia/industries/food/food-ingredients/orange-flavor-powder.jpg'; Alt = 'orange flavor powder'; P = 2 }
  @{ Url = 'https://cdn.gea.com/-/jssmedia/industries/food/food-ingredients/plant-based-proteins.jpg'; Alt = 'plant based proteins'; P = 2 }
  @{ Url = 'https://cdn.gea.com/-/jssmedia/products/dryers-and-particle-processing-plants/freeze-dryers/freeze-dried-pineapples.jpg'; Alt = 'freeze dried pineapples'; P = 2 }
  @{ Url = 'https://cdn.gea.com/-/jssmedia/products/dryers-and-particle-processing-plants/spray-dryers/aseptic-spray-dryer/aseptic-spray-drying-gea-test-center.jpg'; Alt = 'aseptic spray drying gea test center'; P = 2 }
  @{ Url = 'https://cdn.gea.com/-/jssmedia/products/dryers-and-particle-processing-plants/spray-dryers/aseptic-spray-dryer/gea-aseptic-spray-drying-solution.jpg'; Alt = 'gea aseptic spray drying solution'; P = 2 }
  @{ Url = 'https://cdn.gea.com/-/jssmedia/products/dryers-and-particle-processing-plants/spray-dryers/feasability-studies.jpg'; Alt = 'feasability studies'; P = 2 }
  @{ Url = 'https://cdn.gea.com/-/jssmedia/products/dryers-and-particle-processing-plants/spray-dryers/fsd-spray-dryer/spray-dried-plant-based-protein.jpeg'; Alt = 'spray dried plant based protein'; P = 2 }
  @{ Url = 'https://cdn.gea.com/-/media/products/dryers-and-particle-processing-plants/spray-dryers/pharma-sd/aseptic-plants.jpg'; Alt = 'aseptic plants'; P = 2 }
  @{ Url = 'https://cdn.gea.com/-/jssmedia/products/dryers-and-particle-processing-plants/spray-dryers/powder-test-center-spray-drying.jpg'; Alt = 'powder test center spray drying'; P = 2 }
  @{ Url = 'https://cdn.gea.com/-/jssmedia/products/dryers-and-particle-processing-plants/spray-dryers/spray-dried-chemical-powder.jpg'; Alt = 'spray dried chemical powder'; P = 2 }
  @{ Url = 'https://cdn.gea.com/-/jssmedia/products/dryers-and-particle-processing-plants/spray-dryers/virtual-spray-dryer-testing.jpg'; Alt = 'virtual spray dryer testing'; P = 2 }
  @{ Url = 'https://cdn.gea.com/-/jssmedia/campaigns/add-cool-sustainable-spray-drying-process/add-better.jpg'; Alt = 'add better'; P = 2 }
  @{ Url = 'https://cdn.gea.com/-/jssmedia/customer-cases/2025-arla-addcool/jens-lkke-ganderup-arla.jpg'; Alt = 'jens lkke ganderup arla'; P = 2 }
  @{ Url = 'https://cdn.gea.com/-/jssmedia/migratedfromtridion/articles/gea-addcool-solution-117582.gif'; Alt = 'gea addcool solution 117582'; P = 2 }
  @{ Url = 'https://cdn.gea.com/-/jssmedia/migratedfromtridion/articles/gea-circularity-in-manufacturing-addcool-117582.jpg'; Alt = 'gea circularity in manufacturing addcool 117582'; P = 2 }
  @{ Url = 'https://cdn.gea.com/-/jssmedia/migratedfromtridion/articles/gea-spray-drying-solutions-117582.jpg'; Alt = 'gea spray drying solutions 117582'; P = 2 }
  @{ Url = 'https://cdn.gea.com/-/jssmedia/migratedfromtridion/articles/sustainability-spray-drying-117582.jpg'; Alt = 'sustainability spray drying 117582'; P = 2 }
  @{ Url = 'https://cdn.gea.com/-/media/products/dryers-and-particle-processing-plants/add-cool-calculator.jpg'; Alt = 'add cool calculator'; P = 2 }
  @{ Url = 'https://cdn.gea.com/-/media/migratedfromtridion/customer-cases/gea-spray-dryer-mother-murphys-flavor-ingredients-79435.jpg'; Alt = 'gea spray dryer mother murphys flavor ingredients 79435'; P = 2 }
  @{ Url = 'https://cdn.gea.com/-/media/migratedfromtridion/products/fsd-spray-dryer-food-ingredients-14377.jpg'; Alt = 'fsd spray dryer food ingredients 14377'; P = 2 }
  @{ Url = 'https://cdn.gea.com/-/media/migratedfromtridion/products/safexpert-45546.jpg'; Alt = 'safexpert 45546'; P = 2 }
  @{ Url = 'https://cdn.gea.com/-/media/migratedfromtridion/products/spraydryer_gea-comaptact-dryer-cdi1200x675_final-14412.jpg'; Alt = 'spraydryer gea comaptact dryer cdi1200x675 final 14412'; P = 2 }
  @{ Url = 'https://cdn.gea.com/-/media/products/dryers-and-particle-processing-plants/spray-dryers/filtermat/gea-filtermat-spray-dryer.jpg'; Alt = 'gea filtermat spray dryer'; P = 2 }
  @{ Url = 'https://cdn.gea.com/-/media/products/dryers-and-particle-processing-plants/spray-dryers/health-check-spray-dryer/health-check-spray-dryer-maintenance.jpg'; Alt = 'health check spray dryer maintenance'; P = 2 }
  @{ Url = 'https://cdn.gea.com/-/jssmedia/stories/better-plant-performance/gea-the-better-journey_teaser.jpg'; Alt = 'gea the better journey teaser'; P = 2 }
  @{ Url = 'https://cdn.gea.com/-/jssmedia/stories/the-breakthrough-that-changed-spray-drying/niro-spray-dryer-model.png'; Alt = 'niro spray dryer model'; P = 2 }
  @{ Url = 'https://cdn.gea.com/-/jssmedia/stories/water-hydraulic-hydract-valves/hydract-actuation-technology_teaser.jpg'; Alt = 'hydract actuation technology teaser'; P = 2 }
)
$assets = @($all | Where-Object { $_.P -le $Priority } | ForEach-Object { @{ Url = $_.Url; Alt = $_.Alt } })
Write-Host "Downloading $($assets.Count) assets..."
& (Join-Path $repo '.cursor/skills/sitecore-yaml/generators/sitecore-media-from-url-yaml/scripts/create-media-from-urls.ps1') `
  -MediaRoot (Join-Path $repo 'authoring/items/gea/serialized-content/media-library/gea/gea') `
  -SiteMediaPath '/sitecore/media library/Project/gea/gea' -SiteRootItemId '4378179a-0ac5-4725-bae2-0a9d8977eb8a' -BaseUrl 'https://www.gea.com' -Assets $assets |
  Set-Content -Path (Join-Path $PSScriptRoot 'gea-media-results.json') -Encoding utf8
Write-Host 'Done. Media item IDs are in gea-media-results.json.'
