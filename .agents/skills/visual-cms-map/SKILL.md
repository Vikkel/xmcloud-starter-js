---
name: visual-cms-map
description: Analyze website screenshots and section crops to identify the page type, CMS-authorable components, parent/child patterns, component names, scope, fields, placeholders, and reuse candidates. Use after capture-website and before Sitecore TSX/YAML generation. Reuse an existing variant before creating a component.
paths:
  - "**/design-screenshots/**/sections/manifest.json"
  - "**/design-screenshots/**/*.png"
---

# Visual CMS Map

Start from screenshots, not DOM. HTML may validate boundaries and extract copy, but visual evidence decides component structure.

## Inputs

- Full-page `desktop-clean.png`, `tablet-clean.png`, `mobile-clean.png`
- Section crops under `sections/{section}/`
- `sections/manifest.json`
- Optional `section.html` and `page.html`

## Output

Write a component inventory to:

```txt
design-screenshots/{project}/component-review.json
```

Use the schema in `references/output-contract.md`.

## Detection process

1. Read the full-page screenshot top to bottom.
2. Classify the page before naming components. Use the type table in [mimic-lessons.md](../website-to-sitecore/references/mimic-lessons.md): article, FAQ, hub, landing, card, features, or newsletter.
3. Identify site chrome: TopBar, Header, Navigation, Breadcrumb, CookieBanner, Footer.
4. Identify large content sections before child components.
5. Detect repeated patterns: card grids, link grids, stats, carousels, teasers, icon lists, tag clouds, accordions.
6. For repeating patterns, create a parent section and one child card/item component.
7. Include the section title/intro inside the parent component, not as a separate card.
8. Assign `scope`: `site`, `page`, or `shared`.
9. Assign `action`: `create`, `reuse`, `skip`, or `unclear`. Prefer `reuse` when Promo `Spotlight`, Promo `Default`, `Features`, `Faq`, `TagCloud`, `Subscribe`, `RichText`, `HeroBanner`, or `ColumnSplitter` already matches. Record `variant` on reuse rows.
10. Mark low-confidence splits as `unclear` instead of inventing components.

## Naming rules

Use `references/taxonomy.md`.

Reject names such as `DivContainer`, `BlueBox`, `RichTextImageBlock2`, `Section2`, `ContentBlock`, or names based only on color.

## Parent/child rules

```txt
VerticalTeaserGrid      -> placeholderFor: VerticalTeaserCard
StatsBar                -> placeholderFor: StatsItem
LogoGrid                -> placeholderFor: LogoItem
LinkListSection         -> placeholderFor: LinkListItem
HeroCarousel            -> placeholderFor: HeroSlide
Footer                  -> placeholderFor: FooterLinkColumn or FooterLinkItem
Header                  -> placeholderFor: Navigation
```

## Done gate

Before passing to `sitecore-from-capture`, every `create` row must have:

- a `cmsName`;
- evidence screenshot path;
- scope;
- fields list;
- placeholders list, even if empty;
- parent/child relationship when repeated content exists.
