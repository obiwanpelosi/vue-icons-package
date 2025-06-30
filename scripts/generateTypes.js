import {
  writeFileSync,
  readdirSync,
  existsSync,
  mkdirSync,
  statSync,
  readFileSync,
} from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const distDir = join(__dirname, "../dist");
const typesDir = join(__dirname, "../dist/types");
const srcDir = join(__dirname, "../src");

// Ensure types directory exists
if (!existsSync(typesDir)) {
  mkdirSync(typesDir, { recursive: true });
}

// Get all icon groups from src
const iconGroups = readdirSync(join(srcDir, "icons")).filter((dir) => {
  const fullPath = join(srcDir, "icons", dir);
  return (
    existsSync(fullPath) && statSync(fullPath).isDirectory() && dir !== "utils"
  );
});

// Generate types for each icon group
iconGroups.forEach((group) => {
  const groupComponentsDir = join(srcDir, "icons", group, "components");
  if (!existsSync(groupComponentsDir)) return;

  const components = readdirSync(groupComponentsDir)
    .filter((file) => file.endsWith(".vue"))
    .map((file) => file.replace(".vue", ""));

  if (components.length === 0) return;

  // Create the types directory structure
  const groupTypesDir = join(typesDir, group);
  if (!existsSync(groupTypesDir)) {
    mkdirSync(groupTypesDir, { recursive: true });
  }

  // Generate individual component exports
  const componentExports = components.map((component) => {
    return `export { default as ${component} } from '../../${group}/index.js';`;
  });

  // Write the index.d.ts file
  const indexContent = componentExports.join("\n");
  writeFileSync(join(groupTypesDir, "index.d.ts"), indexContent);
});

// Generate main index.d.ts
const mainIndexContent = `// Main entry point
export { default as BaseIcon } from './BaseIcon.js';

// Icon group exports
${iconGroups.map((group) => `export * from './${group}/index.js';`).join("\n")}
`;

writeFileSync(join(typesDir, "index.d.ts"), mainIndexContent);

// Generate BaseIcon.d.ts
const baseIconContent = `import { DefineComponent } from 'vue';

export interface BaseIconProps {
  size?: string | number;
  color?: string;
  class?: string;
  style?: Record<string, string | number>;
  viewBox?: string;
}

declare const BaseIcon: DefineComponent<BaseIconProps>;
export default BaseIcon;
`;

writeFileSync(join(typesDir, "BaseIcon.d.ts"), baseIconContent);

console.log("TypeScript declarations generated successfully!");
