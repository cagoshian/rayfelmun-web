module.exports = {
  plugins: {
    "postcss-import": {},        // ← optional: handles other @imports (like fonts)
    "@tailwindcss/postcss": {},  // ← v4’s dedicated PostCSS plugin
    autoprefixer: {},            // ← if you still need vendor prefixes
  },
}
