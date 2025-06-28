After running pnpm generate:all,
Check for vue files that still have fill assigned to a color (like fill="#333")
Also check for rgb cases (fill="rgb(0, 0, 0)" -- DiSpark.vue)
Replace all those with :fill="color"

AiFillX special case editing. (add default stroke color #fff)

After running pnpm run build
Remove the un-needed imports of each icon group in dist/chunks/....vendor file

cssgg icons (BorderAll, Editfade... todo)
