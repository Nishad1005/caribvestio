export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Brand (constant across themes)
        "on-primary-fixed": "#131b2e",
        "primary": "#131b2e",
        "primary-container": "#131b2e",
        "on-primary": "#ffffff",
        "primary-fixed": "#dae2fd",
        "primary-fixed-dim": "#bec6e0",
        "on-primary-fixed-variant": "#3f465c",
        "on-primary-container": "#7c839b",
        "inverse-primary": "#bec6e0",
        "surface-tint": "#565e74",
        // Secondary / tertiary (constant)
        "secondary": "#665d4e",
        "secondary-fixed": "#ede1cd",
        "secondary-fixed-dim": "#d1c5b2",
        "secondary-container": "#eadeca",
        "on-secondary": "#ffffff",
        "on-secondary-fixed": "#211b0f",
        "on-secondary-fixed-variant": "#4d4637",
        "on-secondary-container": "#6a6252",
        "tertiary": "#131b2e",
        "tertiary-container": "#001f23",
        "tertiary-fixed": "#acedf7",
        "tertiary-fixed-dim": "#90d1db",
        "on-tertiary": "#ffffff",
        "on-tertiary-container": "#4d8d96",
        "on-tertiary-fixed": "#001f23",
        "on-tertiary-fixed-variant": "#004f57",
        // Status (constant)
        "error": "#ba1a1a",
        "error-container": "#ffdad6",
        "on-error": "#ffffff",
        "on-error-container": "#93000a",
        "destructive": "#ba1a1a",
        "destructive-foreground": "#ffffff",
        "outline": "#76777d",
        // Theme-aware surfaces & text (flip via CSS variables in dark mode)
        "background": "rgb(var(--c-background) / <alpha-value>)",
        "surface": "rgb(var(--c-surface) / <alpha-value>)",
        "surface-bright": "rgb(var(--c-surface-bright) / <alpha-value>)",
        "surface-dim": "rgb(var(--c-surface-dim) / <alpha-value>)",
        "surface-variant": "rgb(var(--c-surface-variant) / <alpha-value>)",
        "surface-container-lowest": "rgb(var(--c-surface-container-lowest) / <alpha-value>)",
        "surface-container-low": "rgb(var(--c-surface-container-low) / <alpha-value>)",
        "surface-container": "rgb(var(--c-surface-container) / <alpha-value>)",
        "surface-container-high": "rgb(var(--c-surface-container-high) / <alpha-value>)",
        "surface-container-highest": "rgb(var(--c-surface-container-highest) / <alpha-value>)",
        "on-surface": "rgb(var(--c-on-surface) / <alpha-value>)",
        "on-surface-variant": "rgb(var(--c-on-surface-variant) / <alpha-value>)",
        "on-background": "rgb(var(--c-on-surface) / <alpha-value>)",
        "inverse-surface": "rgb(var(--c-inverse-surface) / <alpha-value>)",
        "inverse-on-surface": "rgb(var(--c-inverse-on-surface) / <alpha-value>)",
        "outline-variant": "rgb(var(--c-outline-variant) / <alpha-value>)",
        // shadcn aliases (theme-aware)
        "foreground": "rgb(var(--c-on-surface) / <alpha-value>)",
        "muted-foreground": "rgb(var(--c-on-surface-variant) / <alpha-value>)",
        "border": "rgb(var(--c-outline-variant) / <alpha-value>)",
        "input": "rgb(var(--c-outline-variant) / <alpha-value>)",
        "ring": "#131b2e",
        "accent": "rgb(var(--c-surface-container-high) / <alpha-value>)",
        "accent-foreground": "rgb(var(--c-on-surface) / <alpha-value>)",
        "primary-foreground": "#ffffff",
        "secondary-foreground": "#211b0f"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        "full": "9999px"
      },
      boxShadow: {
        "card": "0px 8px 24px rgba(15, 23, 42, 0.06)",
        "raised": "0px 16px 32px rgba(15, 23, 42, 0.08)",
        "overlay": "0px 24px 48px rgba(15, 23, 42, 0.12)"
      },
      spacing: {
        "grid-margin": "24px",
        "container-max": "1280px",
        "section-gap-mobile": "64px",
        "base": "8px",
        "grid-gutter": "24px",
        "section-gap-desktop": "120px"
      },
      fontFamily: {
        "body-md": ["Hanken Grotesk", "sans-serif"],
        "body-sm": ["Hanken Grotesk", "sans-serif"],
        "headline-xl-mobile": ["Playfair Display", "serif"],
        "display-lg-mobile": ["Playfair Display", "serif"],
        "headline-xl": ["Playfair Display", "serif"],
        "headline-lg": ["Playfair Display", "serif"],
        "body-lg": ["Hanken Grotesk", "sans-serif"],
        "display-lg": ["Playfair Display", "serif"],
        "display-md": ["Playfair Display", "serif"],
        "headline-md": ["Playfair Display", "serif"],
        "label-md": ["Hanken Grotesk", "sans-serif"],
        "label-lg": ["Hanken Grotesk", "sans-serif"]
      },
      fontSize: {
        "body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        "body-sm": ["14px", { lineHeight: "1.5", fontWeight: "400" }],
        "headline-xl-mobile": ["32px", { lineHeight: "1.2", fontWeight: "600" }],
        "display-lg-mobile": ["40px", { lineHeight: "1.2", fontWeight: "700" }],
        "headline-xl": ["48px", { lineHeight: "1.2", fontWeight: "600" }],
        "headline-lg": ["40px", { lineHeight: "1.2", fontWeight: "600" }],
        "body-lg": ["20px", { lineHeight: "1.6", fontWeight: "400" }],
        "display-lg": ["64px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        "display-md": ["45px", { lineHeight: "1.15", letterSpacing: "-0.01em", fontWeight: "700" }],
        "headline-md": ["32px", { lineHeight: "1.3", fontWeight: "600" }],
        "label-md": ["14px", { lineHeight: "1.2", letterSpacing: "0.05em", fontWeight: "600" }],
        "label-lg": ["16px", { lineHeight: "1.2", letterSpacing: "0.03em", fontWeight: "600" }]
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
}
