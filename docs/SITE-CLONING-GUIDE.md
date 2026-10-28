# New demo site (collection + site + host)

How to add a prospect demo to this fork. The agent skills do all of this; this page is the human checklist. Worked example: GEA.

## 1. Decide names

| Item | Rule | GEA |
|------|------|-----|
| Collection | lowercase slug, one per demo | `gea` |
| Site | lowercase slug | `gea` |
| Site path | `/sitecore/content/{collection}/{site}` | `/sitecore/content/gea/gea` |
| Host folder | `examples/{folder}` | `examples/gea` |
| `renderingHosts` key | usually = folder | `gea` |

## 2. Rendering host

```powershell
npx create-content-sdk-app@latest nextjs --destination=./examples/gea --prerender=SSG --yes
```

Add `PartialDesignDynamicPlaceholder` (see `scaffold-rendering-host` skill) and register in `xmcloud.build.json`:

```json
"gea": {
  "path": "./examples/gea",
  "nodeVersion": "24.22.1",
  "packageManager": "npm",
  "jssDeploymentSecret": "<same as other entries>",
  "enabled": true,
  "type": "sxa",
  "buildCommand": "build",
  "runCommand": "next:start"
}
```

## 3. Collection and site YAML (from repo root)

```powershell
node .cursor/skills/sitecore-yaml/generators/sitecore-new-collection-yaml/scripts/Generate-SitecoreCollection.mjs "gea" --dry-run
node .cursor/skills/sitecore-yaml/generators/sitecore-new-collection-yaml/scripts/Generate-SitecoreCollection.mjs "gea"
node .cursor/skills/sitecore-yaml/generators/sitecore-new-site-yaml/scripts/Generate-SitecoreSite.mjs "gea" --collection "gea"
```

This writes `authoring/items/gea/` with fresh GUIDs and `gea.module.json`. `sitecore.json` already includes `authoring/items/**/*.module.json`. Push with `dotnet sitecore ser push` (or `ser push -i gea-scs`).

## 4. Capture, map, build

Run `mimic-url` (or `website-to-sitecore` on an existing host) with the URLs from the demo guide. Approve the component manifest before any TSX. Images go to the media library (or Content Hub); never hotlink the reference site.

## 5. Environment

`sitecore-env-local` writes `examples/gea/.env.local` from values you paste from the Deploy portal. Never commit it.

## 6. Inventory

Run `new-site-inventory`: `.cursor/SITE-REGISTRY.md`, `.cursor/rules/project-context.mdc`, `docs/README.md`, `docs/{SITE}.md`, `docs/COMPONENTS.md`, the industry skill.
