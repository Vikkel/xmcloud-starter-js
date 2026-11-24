# GN Nordic Figma

Editing host for the existing **GN Nordic Figma** site on the MVM demo project, environment **SE7**. This repo holds the Next.js host only. The Sitecore site was created in the portal, so this change does not add a collection or site module under `authoring/items/`.

| | Value |
|--|--|
| Rendering host | `examples/gn-nordic-figma` |
| `renderingHosts` key | `gn-nordic-figma` |
| Display name | GN Nordic Figma |
| Sitecore project | MVM demo (`sitecoresaa2551-mvmdemo93ad-mvmdemoauthadc2`, org `org_Yr0e8LadQ1bxB05s`) |
| Environment | SE7 |
| Site item name | `gn-nordic-figma` (`NEXT_PUBLIC_DEFAULT_SITE_NAME`) |
| Serialization | None. Do not generate a second site on top of the SE7 site. |
| Industry | Not classified |

## Deploy

In Deploy, add an editing host named `gn-nordic-figma` and link it to authoring environment **SE7**. The name must match the `renderingHosts` key. Point the site grouping **Predefined application editing host** at `gn-nordic-figma`.

## Local connection

`.env.local` is gitignored and holds the SE7 Developer settings (Edge Context ID, editing secret, site name `gn-nordic-figma`, rendering host `gn-nordic-figma`). Required keys:

- `SITECORE_EDGE_CONTEXT_ID` and `NEXT_PUBLIC_SITECORE_EDGE_CONTEXT_ID` (same Edge Context ID)
- `SITECORE_EDITING_SECRET`
- `NEXT_PUBLIC_DEFAULT_SITE_NAME` (Sitecore site item name)
- `SITECORE_RENDERINGHOST_NAME=gn-nordic-figma`

```powershell
cd examples/gn-nordic-figma
npm install
npm run dev
```
