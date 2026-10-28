# Media from captured pages (mandatory)

When the user asks to **mimic a page or site**, every component image goes to **Content Hub DAM**. Image fields use DAM `src` + `dam-id`. Do not hotlink the reference CDN. Do not leave `mediaid` on a site that has a Content Hub brand.

## Choose delivery

| Preference | Skill | Image field shape |
|------------|-------|-------------------|
| **1 — Content Hub** (required when a brand exists) | [`sitecore-content-hub-images`](../../sitecore-serialization-skills/sitecore-content-hub-images/SKILL.md) | `<Image src="…" dam-id="…" … />` |
| **2 — Media library** | [`sitecore-media-from-url-yaml`](../../sitecore-serialization-skills/sitecore-media-from-url-yaml/SKILL.md) | `<image mediaid="{MediaId}" />` only when the site has no Content Hub brand |

The OAuth host must match the brand URL. Industrial B2B brand `121895` is on `https://spd-verticals.sitecoresandbox.cloud`, not `starter-verticals-2`. Point fields at the image file, not a media folder. Update `content-hub-asset-registry.json` and `media-map.json`.

## Harvest

From `design-screenshots/{project}/**/section.html` and `page.html`:

- `<img src>` / `srcset`
- `<picture>` sources
- CSS `background-image: url(...)`
- SVG `<image href>`

Resolve relative / root-relative / protocol-relative URLs with capture `source-url.txt` (or the mimic URL) as `-BaseUrl`. Deduplicate by canonical URL.

## Path 1 — Content Hub

Follow [`sitecore-content-hub-images`](../../sitecore-serialization-skills/sitecore-content-hub-images/SKILL.md): stage locally → upload + public links → metadata → patch DAM XML → sync map → validate/push.

Reference scripts: `authoring/items/brother/scripts/` (adapt per collection).

## Path 2 — Media library YAML

Use [`sitecore-media-from-url-yaml`](../../sitecore-serialization-skills/sitecore-media-from-url-yaml/SKILL.md) (`create-media-from-urls.ps1`):

```txt
.cursor/skills/sitecore-serialization-skills/sitecore-media-from-url-yaml/scripts/create-media-from-urls.ps1
```

Wire each Image field as `<image mediaid="{MediaId}" />`. Never leave `{MEDIA:…}` placeholders or external `src` URLs in serialized YAML.

## Upload to Sitecore

```bash
dotnet sitecore serialization validate --fix -i {namespace}
dotnet sitecore serialization push -n {environment} -i {namespace}
```

Do **not** mark mimic complete if:

- images still point at the reference website;
- a site with a Content Hub brand still has Image fields on `mediaid` or a media-folder id;
- a site with no Content Hub brand has Image fields with neither DAM XML nor `mediaid`;
- push was skipped.
