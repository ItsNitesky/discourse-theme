# First Response — Discourse Theme

A custom dark theme for [forum.firstresponsegame.com](https://forum.firstresponsegame.com/), matching the dispatch aesthetic of [firstresponsegame.com](https://firstresponsegame.com/).

## Features

- **First Response Dark** color palette (near-black background, blue/red emergency accents)
- Inter + Oswald typography
- Static emergency lightbar on the header
- Glass-style topic/category cards
- Tiered dev team username styling for **LeadDeveloper** and **Developers** groups
- Staff avatar rings on topic lists, posts, profiles, and user cards

## Installation

### 1. Push theme to GitHub

```bash
cd discourse-theme
git init
git add .
git commit -m "Add First Response Discourse theme"
git remote add origin https://github.com/YOUR_ORG/discourse-theme.git
git push -u origin main
```

### 2. Install on Discourse

1. Go to **Admin → Customize → Themes**
2. Click **Install → From a git repository**
3. Paste your repository URL
4. Click **Install**

### 3. Activate color scheme

1. Go to **Admin → Customize → Colors**
2. Select **First Response Dark** from the color scheme dropdown
3. Save

Alternatively, after installing the theme, open the theme settings and ensure the color scheme is linked to the theme.

### 4. Set as default theme

1. Go to **Admin → Customize → Themes**
2. Click the theme menu (⋮) on **First Response**
3. Select **Set as default**

### 5. Configure theme settings

Under **Admin → Customize → Themes → First Response → Settings**:

| Setting | Description |
|---------|-------------|
| **fr_logo_url** | Header logo URL (defaults to `https://firstresponsegame.com/logo.png`) |
| **fr_enable_atmospheric_bg** | Toggle the subtle blue/red gradient background |

You can also upload a logo via **Admin → Settings → Branding → Logo** and clear `fr_logo_url` to use that instead.

### 6. Copy logo asset (optional)

Copy `logo.png` from your main site into `assets/logo.png` for bundled theme assets:

```
main-site/public/logo.png  →  discourse-theme/assets/logo.png
```

## Dev team styling

The theme styles **LeadDeveloper** and **Developers** primary group members across the forum:

| Group | Username | Avatar ring |
|-------|----------|-------------|
| **LeadDeveloper** | Blue-to-white gradient + underline | Blue + red double ring |
| **Developers** | Solid blue (`#3b82f6`) | Blue ring |

Styling applies in posts, topic lists, the user directory, user cards, group About pages, and user profiles.

On user profiles, a **Lead Developer** or **Development Team** badge appears next to the username, and the profile header gets a blue/red accent border.

### Prerequisites

**Developers** and **LeadDeveloper** must be set as each user's **Primary Group**:

1. Go to **Admin → Users → [username]**
2. Under Groups, set **Primary Group** to `Developers` or `LeadDeveloper`

Verify CSS class names in DevTools on a test post. Discourse lowercases group names (e.g. `LeadDeveloper` → `group--leaddeveloper`).

## Local development

Use the [Discourse Theme Creator](https://theme-creator.discourse.org/) or the [discourse_theme CLI](https://meta.discourse.org/t/discourse-theme-cli-console/8294) to preview SCSS changes against a staging instance.

## File structure

```
discourse-theme/
├── about.json              # Theme metadata and color scheme
├── settings.yml            # Theme settings
├── assets/                 # Logo and other static assets
├── common/
│   ├── common.scss         # All global styles (single entrypoint)
│   └── head_tag.html       # Google Fonts (Inter, Oswald)
├── javascripts/
│   └── discourse/api-initializers/fr-staff.js  # Staff avatar ring classes
├── desktop/
│   └── desktop.scss        # Desktop layout tweaks
└── mobile/
    └── mobile.scss         # Mobile header tweaks
```

## References

- [Beginner's guide to Discourse themes](https://meta.discourse.org/t/beginners-guide-to-using-discourse-themes/91966)
- [Discourse theme structure](https://meta.discourse.org/t/structure-of-themes-and-theme-components/60848)
