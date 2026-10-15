# Neutron UI

Shared look for the Neutron apps: Neutron Mail, Neutron Meeting and Neutron Drive.

- `src/theme.css` is the theme (base variables, reset, form controls, `.btn`, `.icon-btn`; app-specific variables stay in each app): a violet accent (`#6d4aff`), dark and light palettes chosen with `data-theme` on `<html>`, a 10px radius, and Inter or Cantarell type.
- `AppRail.svelte` is the left app rail.
- `Icon.svelte` is the shared icon set.

## Use

```sh
npm install github:mkd47/neutron-ui
```

```ts
import "@neutron/ui/theme.css";
import { AppRail } from "@neutron/ui";
```

```svelte
<AppRail items={[{ id: "files", icon: "folder", label: "Files" }]} active={view} {theme}
  onSelect={(id) => (view = id)} onToggleTheme={() => (theme = theme === "dark" ? "light" : "dark")} />
```

Layout convention: rail (76px), sidebar, list, detail pane, and an optional collapsible side panel.

GPL-3.0-or-later. Uses no Proton names, logos or assets.
