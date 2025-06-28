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

// Ensure types directory exists
if (!existsSync(typesDir)) {
  mkdirSync(typesDir, { recursive: true });
}

// Get all icon groups from dist
const iconGroups = readdirSync(distDir).filter((dir) => {
  const fullPath = join(distDir, dir);
  return (
    existsSync(fullPath) &&
    statSync(fullPath).isDirectory() &&
    readdirSync(fullPath).some((file) => file.endsWith(".js")) &&
    dir !== "types" &&
    dir !== "chunks"
  );
});

// Generate types for each icon group
iconGroups.forEach((group) => {
  const groupIndexPath = join(distDir, group, "index.js");
  if (!existsSync(groupIndexPath)) return;

  const content = readFileSync(groupIndexPath, "utf-8");

  // Extract exports from the bundled file
  const exportMatches = content.match(/export\s*{\s*([^}]+)\s*}/g);
  if (!exportMatches) return;

  const exports = [];

  exportMatches.forEach((match) => {
    const exportContent = match.match(/export\s*{\s*([^}]+)\s*}/)?.[1];
    if (exportContent) {
      const lines = exportContent.split(",").map((line) => line.trim());
      lines.forEach((line) => {
        const exportMatch = line.match(/(\w+)\s+as\s+(\w+)/);
        if (exportMatch) {
          const [, alias, componentName] = exportMatch;
          exports.push(
            `export { ${alias} as ${componentName} } from '../../${group}/index.js';`
          );
        }
      });
    }
  });

  // Create the types directory structure
  const groupTypesDir = join(typesDir, group);
  if (!existsSync(groupTypesDir)) {
    mkdirSync(groupTypesDir, { recursive: true });
  }

  // Write the index.d.ts file with individual exports
  const indexContent =
    exports.length > 0
      ? exports.join("\n")
      : `// No exports found for ${group}`;
  writeFileSync(join(groupTypesDir, "index.d.ts"), indexContent);
});

// Generate main index.d.ts
const mainIndexContent = `// Main entry point
export { BaseIcon } from './BaseIcon.js';

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
