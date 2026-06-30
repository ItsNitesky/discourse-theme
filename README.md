# First Response — Discourse Theme

A custom dark theme for [forum.firstresponsegame.com](https://forum.firstresponsegame.com/), matching the dispatch aesthetic of [firstresponsegame.com](https://firstresponsegame.com/).

## Features

- **First Response Dark** color palette (near-black background, blue/red emergency accents)
- Inter + Oswald typography
- Static emergency lightbar on the header
- Glass-style topic/category cards
- Tiered staff username styling for Admins, LeadDeveloper, and Developers groups

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
| **fr_staff_label_enabled** | Show a small "STAFF" label next to admin usernames |

You can also upload a logo via **Admin → Settings → Branding → Logo** and clear `fr_logo_url` to use that instead.

### 6. Copy logo asset (optional)

Copy `logo.png` from your main site into `assets/logo.png` for bundled theme assets:

```
main-site/public/logo.png  →  discourse-theme/assets/logo.png
```

## Staff username styling

The theme styles usernames differently by role:

| Group | Appearance |
|-------|------------|
| **Admins** | Red-to-white gradient text with subtle glow |
| **LeadDeveloper** | Blue-to-white gradient with blue/red underline |
| **Developers** | Solid blue (`#3b82f6`) |

### Prerequisites

- **Admins** are styled automatically via Discourse's built-in `.admin` class.
- **Developers** and **LeadDeveloper** require each user to have that group set as their **Primary Group**:
  1. Go to **Admin → Users → [username]**
  2. Under Groups, set **Primary Group** to `Developers` or `LeadDeveloper`

Verify the exact CSS class names in browser DevTools on a test post. Discourse lowercases group names (e.g. `LeadDeveloper` → `group--leaddeveloper`).

### Optional: group flair

For extra visibility, configure avatar flair on each group under **Admin → Groups → [group] → Flair**.

## Local development

Use the [Discourse Theme Creator](https://theme-creator.discourse.org/) or the [discourse_theme CLI](https://meta.discourse.org/t/discourse-theme-cli-console/8294) to preview SCSS changes against a staging instance.

## File structure

```
discourse-theme/
├── about.json              # Theme metadata and color scheme
├── settings.yml            # Theme settings
├── assets/                 # Logo and other static assets
├── common/
│   ├── common.scss         # Global styles
│   └── head_tag.html       # Google Fonts (Inter, Oswald)
├── desktop/
│   └── desktop.scss        # Header lightbar, desktop layout
├── mobile/
│   └── mobile.scss         # Mobile header tweaks
└── scss/
    ├── _variables.scss     # Design tokens
    ├── _lightbar.scss      # Static emergency lightbar
    ├── _background.scss    # Atmospheric gradient
    ├── _header.scss        # Glass header
    ├── _components.scss    # Buttons, cards, nav
    └── _staff_usernames.scss
```

## References

- [Beginner's guide to Discourse themes](https://meta.discourse.org/t/beginners-guide-to-using-discourse-themes/91966)
- [Discourse theme structure](https://meta.discourse.org/t/structure-of-themes-and-theme-components/60848)
