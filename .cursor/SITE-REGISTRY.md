# Site registry

Source of truth for sites in **this** clone (`xmcloud-starter-js-1`). When a site is created, cloned, or renamed, update this file in the same change as the host and authoring. Procedure: [skills/new-site-inventory/SKILL.md](./skills/new-site-inventory/SKILL.md).

Last verified: 2026-10-28 against `examples/*/package.json`, `xmcloud.build.json` and `authoring/items/`.

Demo hosts go under `examples/{folder}/`, next to the upstream starters. Each demo gets its **own isolated collection** under `authoring/items/{collection}/` (generated with the `sitecore-yaml` collection + site generators).

## Upstream starters (do not modify for demos)

| Folder | Brand | `renderingHosts` key | Enabled |
|--------|-------|----------------------|---------|
| `kit-nextjs-skate-park` | Skate Park | `nextjsstarter` | yes |
| `kit-nextjs-article-starter` | Solterra & Co. | `kit-nextjs-article-starter` | yes |
| `kit-nextjs-location-finder` | Alaris | `kit-nextjs-location-starter` | yes |
| `kit-nextjs-product-listing` | SYNC | `kit-nextjs-product-starter` | yes |
| `basic-nextjs` | basic | `basic-nextjs` | yes |
| `basic-nextjs-pages-router` | basic (Pages Router) | `basic-nextjs-pages-router` | no |
| `kit-angular-skate-park` | Skate Park (Angular) | `angularstarter` | no |

## Demo sites

| Folder | Brand | `renderingHosts` key | Sitecore site | Serialization | Status |
|--------|-------|----------------------|---------------|---------------|--------|
| `gea` | GEA | `gea` | `/sitecore/content/gea/gea` | `authoring/items/gea/gea.module.json` (`gea-scs`) | **Scaffolded** — host + collection/site YAML on disk, not pushed; component manifest awaiting approval ([docs/GEA-SITE-MAP.md](../docs/GEA-SITE-MAP.md)) |

## Industry skills

| Type | Skill | Hosts |
|------|-------|-------|
| Industrial B2B / process equipment | [industry-industrial](./skills/industry-industrial/SKILL.md) | `gea` (this repo); `industrialb2b` Spirax (sibling repo, pattern only) |

Other verticals (retail, healthcare, travel, energy, medical) live in `C:\code\sitecore\spd-csdk-verticals`. Add an `industry-{type}` skill here when the first demo of that type is created in this repo.

## Same-change updates

1. This file (move or add the row; refresh **Last verified**).
2. [.cursor/rules/project-context.mdc](./rules/project-context.mdc) — Demo sites.
3. [.cursor/AGENTS.md](./AGENTS.md) — industry skill row when the type is new.
4. [docs/README.md](../docs/README.md) — demo sites table.
5. `docs/{SITE}.md` and, when components land, a section in [docs/COMPONENTS.md](../docs/COMPONENTS.md).
6. The industry skill for that type.
7. `xmcloud.build.json` `renderingHosts` (path `./examples/{folder}`, `nodeVersion` `24.22.1`, `packageManager` `npm`).
