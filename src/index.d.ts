import type { Component } from "svelte";
export type RailItem = { id: string; icon: string; label: string };
export declare const AppRail: Component<{ items: RailItem[]; active: string; theme: "dark" | "light"; onSelect: (id: string) => void; onToggleTheme: () => void; logo?: string }>;
export declare const Icon: Component<{ name: string; size?: number }>;
