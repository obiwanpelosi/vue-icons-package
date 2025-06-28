import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url); // this current filepath
const __dirname = path.dirname(__filename); //current file directory(packages/icons-lib/src/scripts)

const ICONS_DIR = path.join(__dirname, "../icons"); // packages/icons-lib/src/icons
const BUILD_DIR = path.join(__dirname, "../../build"); // packages/icons-lib/src

// Ensure build directory exists
if (!fs.existsSync(BUILD_DIR)) {
  fs.mkdirSync(BUILD_DIR);
}

// Helper function to create directory if it doesn't exist
function ensureDirectoryExists(dir: string) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// Generate entry points for each icon group
function generateEntryPoints() {
  // Read all icon groups
  const iconGroups = fs.readdirSync(ICONS_DIR);

  for (const group of iconGroups) {
    if (
      group === "utils" ||
      !fs.statSync(path.join(ICONS_DIR, group)).isDirectory()
    ) {
      continue;
    }

    const componentsDir = path.join(ICONS_DIR, group, "components");
    if (!fs.existsSync(componentsDir)) {
      continue;
    }

    // Create directory for this icon group in dist
    const groupDistDir = path.join(BUILD_DIR, group);
    ensureDirectoryExists(groupDistDir);

    // Read all icon components
    const icons = fs
      .readdirSync(componentsDir)
      .filter((file) => file.endsWith(".vue"));

    // Generate an entry point for each icon
    for (const icon of icons) {
      const iconName = path.basename(icon, ".vue");
      const entryContent = `export { default } from '../../src/icons/${group}/components/${icon}';\n`;
      fs.writeFileSync(path.join(groupDistDir, `${iconName}.ts`), entryContent);
    }

    // Generate an index.ts file for the group that exports all icons
    const indexContent =
      icons
        .map((icon) => {
          const iconName = path.basename(icon, ".vue");
          return `export { default as ${iconName} } from '../../src/icons/${group}/components/${icon}';`;
        })
        .join("\n") + "\n";

    fs.writeFileSync(path.join(groupDistDir, "index.ts"), indexContent);
  }

  // Generate main index.ts that exports BaseIcon and re-exports all icon groups
  const mainIndexContent = `export { default as BaseIcon } from '../src/BaseIcon.vue';\n\n`;

  fs.writeFileSync(path.join(BUILD_DIR, "index.ts"), mainIndexContent);
}

generateEntryPoints();
