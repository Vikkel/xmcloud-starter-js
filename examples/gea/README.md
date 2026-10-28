# GEA demo rendering host

Content SDK (Next.js App Router) host for the GEA SitecoreAI demo. Cloned from `examples/basic-nextjs` (Content SDK 2.4.1).

| | |
|--|--|
| Site | `/sitecore/content/gea/gea` (`NEXT_PUBLIC_DEFAULT_SITE_NAME=gea`) |
| `renderingHosts` key | `gea` |
| Serialization | `authoring/items/gea/` |
| Guide | [docs/GEA.md](../../docs/GEA.md), maps in [docs/GEA-SITE-MAP.md](../../docs/GEA-SITE-MAP.md) |

```powershell
cd examples/gea
copy .env.remote.example .env.local   # then fill SITECORE_EDGE_CONTEXT_ID, SITECORE_EDITING_SECRET, NEXT_PUBLIC_DEFAULT_SITE_NAME=gea
npm install
npm run dev
```
