After running pnpm generate:all,
Check for vue files that still have fill assigned to a color (like fill="#333")
Also check for rgb cases (fill="rgb(0, 0, 0)" -- DiSpark.vue)
Replace all those with :fill="color"

AiFillX special case editing. (add default stroke color #fff)

After running pnpm run build
Remove the un-needed imports of each icon group in dist/chunks/....vendor file

cssgg icons (BorderAll, Editfade... todo)


To add new icon groups: 
-- Add the folder named by the prefix 
-- Inside that : add the svg icons in a icons folder (depends on icon grouping), add the components folder, add the scripts folder with a generateIcon.ts file, this dictates how to extract the svg files and convert them into vue components. Some icon groups may have the same extraction logic, for some it may differ.
-- In the package.json, add the command to generate icons for the new group
-- Also add a exports entry for the icon group
-- Now you can run pnpm build (this will generate entry points for each icon group, build the project and add the types to the dist output)