---
name: website-to-sitecore
description: Compact end-to-end workflow for reference URL or screenshots → page type → captured design evidence → CMS component manifest → Sitecore Content SDK TSX → Sitecore YAML including Content Hub DAM images (preferred) or media-library items pushed to CM. Use only as the orchestrator when mimicking a website or page. Classify and reuse components before creating them. Delegate capture, visual analysis, TSX, YAML, and media import to the focused skills.
paths:
  - "**/design-screenshots/**/page-manifest.json"
  - "**/design-screenshots/**/sections/manifest.json"
---

# Website to Sitecore

Use this skill when the user wants to mimic a website/page and produce Sitecore Content SDK components plus serialization YAML.

## Outcome

Produce:

```txt
design-screenshots/{project}/...
src/components/{namespace}/{Component}.tsx
.sitecore/component-map*.ts
authoring/items/{module}/...   (including media-library YAML, then push to CM)
```

## Workflow

Read [mimic-lessons.md](references/mimic-lessons.md) before step 1. It records the Spirax failures: skipped capture and media, pages composed from the URL title, Bootstrap `.row` stacking cards, variant and GraphQL names that did not match, and shared image / General Link fields that rendered empty.

1. **Capture** — run `capture-website` for URL inputs. Skip capture when screenshots already exist. Do not skip it because a web search already returned headings.
2. **Classify the page** — article, FAQ, hub, landing, card, features, or newsletter. Use the table in [mimic-lessons.md](references/mimic-lessons.md). Reuse the matching component before creating one.
3. **Analyze visually** — run `visual-cms-map` on full-page screenshots + section crops.
4. **Create review manifest** — list components with action: `create`, `reuse`, `skip`, or `unclear`. Name the existing variant when `reuse` (`Spotlight`, `Default`).
5. **Stop for user approval** before writing TSX/YAML, unless the user explicitly asked for a no-review batch.
6. **Build approved items** — run `sitecore-from-capture`. Match `componentName`, the TSX export, the variant item name, and the GraphQL template name. See [mimic-lessons.md](references/mimic-lessons.md).
7. **Generate serialization** — run `sitecore-yaml` (templates, renderings, datasources, page wiring). Do not replace `__Final Renderings` the author edited in Pages.
8. **Media (mandatory)** — run [`sitecore-content-hub-images`](../sitecore-serialization-skills/sitecore-content-hub-images/SKILL.md). Upload images to the site’s Content Hub brand and patch Image fields with DAM `src` + `dam-id`. The OAuth host must be the host in the brand URL. See [mimic-lessons.md](references/mimic-lessons.md). Do not leave fields on `mediaid`. Do not hotlink the reference site.
9. **Validate and push** — `npm run build`, then `dotnet sitecore serialization validate --fix` and **push** so Image fields and (if used) `media-library` items exist in Sitecore CM. Push updates master. Publish the page to Edge separately. TSX and CSS appear only after the editing host or Vercel rebuilds.

## Non-negotiable rules

- Do not build components from URL memory. Use screenshots/HTML/manifests as evidence.
- Do not create one component per `div`; create CMS-authorable renderings.
- Do not duplicate components already marked `reuse` in `new-sections-manifest.json`.
- Do not copy GUIDs from another project.
- Do not hardcode marketing content in TSX; make content editable fields.
- **Put every component image in Content Hub DAM** and patch Image fields with `src` + `dam-id`. Do not hotlink the reference site and do not leave fields on media-library `mediaid` when the site has a Content Hub brand. See [mimic-lessons.md](references/mimic-lessons.md).
- Keep all generated files inside the current rendering host and current serialization module.

## Review manifest shape

```json
{
  "project": "example-com",
  "pages": ["home"],
  "components": [
    {
      "id": "S1",
      "cmsName": "HeroBanner",
      "scope": "page",
      "action": "create",
      "evidence": ["design-screenshots/example-com/sections/hero-banner/hero-banner-desktop.png"],
      "fields": ["title", "body", "primaryLink", "image"],
      "placeholders": []
    }
  ]
}
```

Write this manifest to:

```txt
design-screenshots/{project}/component-review.json
```

## Reference in this repo (xmcloud-starter-js)

Demo hosts live in `examples/{folder}/` beside the upstream starters. Pick the industry type in [industry-verticals](../industry-verticals/SKILL.md). Full vertical hosts (FormaLux, Spirax, ASOS, ...) are in the sibling repo `spd-csdk-verticals` and are patterns only.

| Artifact | Path |
|----------|------|
| Rendering host | `examples/{folder}/` (e.g. `examples/gea/`) |
| Deploy key | `xmcloud.build.json` → `renderingHosts.{key}` (e.g. `gea`) |
| Serialization | `authoring/items/{collection}/` + `{collection}.module.json` |
| Site item | `/sitecore/content/{collection}/{site}` (e.g. `/sitecore/content/gea/gea`) |
| Captures | `design-screenshots/{project}/` (gitignored) |
| Component list | [docs/COMPONENTS.md](../../../docs/COMPONENTS.md) |
| Active demo | GEA — [docs/GEA.md](../../../docs/GEA.md) |

**Datasource pitfalls:** see [datasource-field-values.md](../sitecore-serialization-skills/sitecore-new-rendering-yaml/references/datasource-field-values.md) and [docs/SITECORE-DATASOURCE-FIELDS.md](../../../docs/SITECORE-DATASOURCE-FIELDS.md):

- **General Link** — full internal link XML with target item `id`; minimal XML → Edge `jsonValue: null` → `[object Object]` in `<Link>`
- **Images** — prefer Content Hub DAM XML ([`sitecore-content-hub-images`](../sitecore-serialization-skills/sitecore-content-hub-images/SKILL.md)); else tenant media library YAML (`sitecore-media-from-url-yaml`). Never hotlink the reference-site CDN (`.ashx`) in serialized YAML.
- **Publish** — push + publish datasource and page to Edge before debugging React

When adding a new site:

1. Change collection/site/module names consistently (`{project}.module.json`, `xmcloud.build.json` key).
2. Scaffold the host under `examples/{folder}/`. Clone the nearest vertical, add missing components, apply captured design tokens.
3. Run `sitecore-yaml` generators and a page-wiring script.
4. Register in `xmcloud.build.json` (`renderingHosts` and, when needed, `deployItems` / `postActions`).
5. Write `docs/{SITE}.md` and update [docs/README.md](../../../docs/README.md) and [docs/COMPONENTS.md](../../../docs/COMPONENTS.md). Isolated collections: [`isolated-collection-site`](../sitecore-serialization-skills/isolated-collection-site/SKILL.md).
6. Run [`new-site-inventory`](../new-site-inventory/SKILL.md) so [SITE-REGISTRY.md](../../SITE-REGISTRY.md), project context, and `AGENTS.md` match.
