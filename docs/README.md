# Documentation

This clone (`xmcloud-starter-js-1`) is a fork of Sitecore `xmcloud-starter-js` used to build **SitecoreAI demo sites** that mimic a prospect's website. Upstream docs ([AI_CRAWLER_ACCESS](./AI_CRAWLER_ACCESS.md), [AI_ENDPOINTS](./AI_ENDPOINTS.md), [GEO_COMPLIANCE](./GEO_COMPLIANCE.MD), [Skills](./Skills.md)) are unchanged.

Agent rules and skills: [.cursor/AGENTS.md](../.cursor/AGENTS.md). Live host list: [.cursor/SITE-REGISTRY.md](../.cursor/SITE-REGISTRY.md). Update that registry and this page together.

## Demo sites

| Industry | Folder | Site | Deploy key | Guide | Status |
| -------- | ------ | ---- | ---------- | ----- | ------ |
| Industrial B2B (food, dairy, pharma process technology) | `examples/gea` | GEA | `gea` | [GEA.md](./GEA.md), [site map](./GEA-SITE-MAP.md) | Scaffolded, awaiting component approval |

## Start here

| Doc | Use it when |
| --- | ----------- |
| [Site cloning guide](./SITE-CLONING-GUIDE.md) | You need a new demo collection, site and host in this repo |
| [GEA](./GEA.md) | You are building or presenting the GEA demo (story, personas, pages to mimic, prompts) |
| [Components](./COMPONENTS.md) | You need the components built for demo hosts |
| [Site shell](./SITECORE-SITE-SHELL.md) | You need the site shell templates, Page Designs tokens, generator checklist |
| [Datasource fields](./SITECORE-DATASOURCE-FIELDS.md) | A link renders `[object Object]` or an image is empty |
| [Routing](./ROUTING.md) | You need how a URL becomes a Sitecore page or a `*` wildcard item |
| [SitecoreAI MCP setup](./SITECORE-AI-MCP-SETUP.md) | You want agents to call SitecoreAI (Marketer MCP) |
| [Authoring API](./SITECORE-AUTHORING-API.md) | You need to script content changes against CM |

## Keeping agents in sync

`.cursor/skills/` is the source. After editing a skill, mirror it for Claude Code / Codex:

```powershell
robocopy .cursor\skills .agents\skills /E /XD node_modules
```

## Run a demo host locally

```powershell
cd examples/gea
npm install
npm run dev
```
