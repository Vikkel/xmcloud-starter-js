# AI agent guidance for this repo (Cursor, Claude Code, Codex, Copilot)

This fork of Sitecore `xmcloud-starter-js` is used to build **SitecoreAI demo sites** that mimic a prospect's website. It contains:

- **Rules** in `rules/*.mdc` — always-on or file-scoped coding constraints (the upstream rules, plus `linting-formatting.mdc` and `new-site-inventory.mdc`).
- **Skills** in `skills/**/SKILL.md` — on-demand workflows ported from `spd-csdk-verticals`: capture a website, map it to CMS components, generate collection/site/rendering YAML, scaffold a host, build TSX, import media, push.
- **Runtime** for capture scripts (Playwright) — installed into `.cursor/node_modules/`, see [RUNTIME-DEPENDENCIES.md](./RUNTIME-DEPENDENCIES.md).

The full reference is [AGENTS.md](./AGENTS.md). Sites in this clone are in [SITE-REGISTRY.md](./SITE-REGISTRY.md). The same skills are mirrored to `../.agents/skills/` for non-Cursor agents.

## One-time setup

```powershell
node .cursor/skills/capture-website/scripts/setup-cursor-runtime.mjs
npm --prefix .cursor install
npm --prefix .cursor run setup:playwright
```

## Typical flow (new demo site)

1. `mimic-url` — scaffold `examples/{folder}`, generate collection + site YAML, capture the reference URLs, propose a component manifest.
2. Review `design-screenshots/{project}/component-review.json` and approve.
3. `sitecore-from-capture` / `sitecore-page-from-design` — TSX, renderings, page wiring, media.
4. `sitecore-yaml` — validate, then `dotnet sitecore ser push`.
5. `sitecore-env-local` — `.env.local` from the Deploy portal (values pasted by you, never committed).
6. `new-site-inventory` — registry, docs and skills updated in the same change.

Current demo: **GEA** — see [docs/GEA.md](../docs/GEA.md).

## Rules overview

Always applied: `general.mdc`, `code-style.mdc`, `project-context.mdc`, `safety.mdc`, `new-site-inventory.mdc`.
Scoped: `javascript.mdc`, `sitecore.mdc`, `nextjs.mdc`, `testing.mdc`, `linting-formatting.mdc`.

Keep rules under 500 lines; when you change a skill, edit `.cursor/skills/` first and re-sync `.agents/skills/`.
