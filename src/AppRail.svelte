<script lang="ts">
  // Shared Neutron app rail. Each app passes its own sections.
  // SPDX-License-Identifier: GPL-3.0-or-later
  import Icon from "./Icon.svelte";
  type Item = { id: string; icon: string; label: string };
  let { items, active, theme, onSelect, onToggleTheme, logo = "N" }:
    { items: Item[]; active: string; theme: "dark" | "light"; onSelect: (id: string) => void; onToggleTheme: () => void; logo?: string } = $props();
</script>

<nav class="rail" aria-label="Apps">
  <span class="logo">{logo}</span>
  {#each items as it (it.id)}
    <button class="rbtn" class:active={active === it.id} aria-current={active === it.id ? "page" : undefined} onclick={() => onSelect(it.id)}>
      <Icon name={it.icon} size={20} /><span>{it.label}</span>
    </button>
  {/each}
  <span class="spacer"></span>
  <button class="rbtn" title="Toggle theme" aria-label="Toggle theme" onclick={onToggleTheme}><Icon name={theme === "dark" ? "sun" : "moon"} size={18} /></button>
</nav>

<style>
  .rail { background: var(--panel); border-right: 1px solid var(--border); display: flex; flex-direction: column; align-items: center; gap: 6px; padding: 14px 6px; height: 100%; }
  .logo { margin-bottom: 10px; width: 34px; height: 34px; border-radius: 10px; background: var(--accent); color: #fff; display: grid; place-items: center; font-weight: 700; }
  .rbtn { width: 62px; border: 0; background: transparent; border-radius: 10px; padding: 8px 2px; display: flex; flex-direction: column; align-items: center; gap: 4px; font-size: 11.5px; color: var(--muted); }
  .rbtn:hover { background: var(--hover); color: var(--text); }
  .rbtn.active { background: var(--selected); color: var(--text); }
  .rbtn.active :global(svg) { color: var(--accent); }
  .spacer { flex: 1; }
</style>
