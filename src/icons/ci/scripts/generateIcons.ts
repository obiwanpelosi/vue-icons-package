import { fileURLToPath } from "url";
import { dirname, join } from "path";
import {
  readFileSync,
  readdirSync,
  writeFileSync,
  mkdirSync,
  existsSync,
} from "fs";

// In ES modules, __filename and __dirname are not available like in CommonJS
// So we need to recreate them using the import.meta.url which gives the URL of the current module
// fileURLToPath converts the URL to a file path that we can use
const __filename = fileURLToPath(import.meta.url);
// dirname extracts the directory path from the file path
const __dirname = dirname(__filename);

// This line sets the path to the ant-icons directory
// Since __dirname is the directory of the current script (scripts folder),
// we go up one level (..) to reach the ant-icons root directory
// This will be used as the base path for finding icon SVG files and
// for creating the output directory for the generated components
const circumIconsDir = join(__dirname, "..");
const svgDir = join(circumIconsDir, "icons");
const outputDir = join(circumIconsDir, "components");
const metadataPath = join(__dirname, "../../../metadata/icons.json");

// Read existing metadata
let iconMetadata = [];
if (existsSync(metadataPath)) {
  const metadataContent = readFileSync(metadataPath, "utf-8");
  iconMetadata = JSON.parse(metadataContent);
}

// Function to add metadata entry
function addIconMetadata(componentName: string) {
  const componentPath = `./icons/circum-icons/components/${componentName}.vue`;
  const metadata = {
    name: componentName,
    group: "circum-icons",
    groupShortName: "ci",
    componentPath: componentPath,
  };
  iconMetadata.push(metadata);
}

// Ensure output directory exists
if (!existsSync(outputDir)) {
  mkdirSync(outputDir, { recursive: true });
}

// Clean SVG content and extract viewBox
function cleanSvgContent(content: string): {
  content: string;
  viewBox: string;
} {
  // Extract viewBox
  const viewBoxMatch = content.match(/viewBox="([^"]+)"/);
  const viewBox = viewBoxMatch ? viewBoxMatch[1] : "0 0 24 24";

  const cleanedContent = content
    // Remove XML declaration
    .replace(/<\?xml.*?\?>/, "")
    // Remove DOCTYPE
    .replace(/<!DOCTYPE.*?>/, "")
    // Remove comments
    .replace(/<!--.*?-->/g, "")
    // Remove viewBox attribute
    .replace(/viewBox="[^"]+"/, "")
    // Extract the content inside the svg tag
    .replace(/<svg[^>]*>([^]*?)<\/svg>/, "$1")
    // Remove newlines and extra spaces
    .trim();

  return { content: cleanedContent, viewBox };
}

// Generate components from SVG files
function generateComponents(svgDir: string, lib: string) {
  const svgFiles = readdirSync(svgDir).filter((file: string) =>
    file.endsWith(".svg")
  );

  svgFiles.forEach((svgFile: string) => {
    const svgContent = readFileSync(join(svgDir, svgFile), "utf-8");
    const { content: cleanedSvgContent, viewBox } = cleanSvgContent(svgContent);
    const componentName = svgFile
      .replace(".svg", "")
      .split(/[_&-]/)
      .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("");
    const componentFullName = lib + componentName;

    const vueContent = `<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: '${componentFullName}',
      components: {
        BaseIcon,
      },
      props: {
        size: {
          type: String,
          default: '1em'
        },
        color: {
          type: String,
          default: 'currentColor'
        },
        strokeColor: {
          type: String,
          default: "",
        },
        class: {
          type: String,
          default: ''
        },
        style: {
          type: Object as PropType<Record<string, string | number>>,
          default: () => ({})
        },
        viewBox: {
          type: String,
          default: '${viewBox}'
        }
      },
      computed: {
        cssClass() {
          return this.class ? this.class : "";
        },
      },
    })
    </script>
    
    <template>
      <BaseIcon 
        :size="size"
        :color="color"
        :strokeColor="strokeColor"
        :class="cssClass"
        :style="style" 
        :viewBox="viewBox"
      >
        ${cleanedSvgContent}
      </BaseIcon>
    </template>`;

    writeFileSync(join(outputDir, `${componentFullName}.vue`), vueContent);
    // Add metadata entry for this component
    addIconMetadata(componentFullName);
  });

  return svgFiles;
}

// Generate components for both variants
const iconFiles = generateComponents(svgDir, "Ci");

// Generate index file
const indexContent = [
  ...iconFiles.map((svgFile: string) => {
    const componentName = svgFile
      .replace(".svg", "")
      .split(/[_&-]/)
      .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("");
    return `export { default as Ci${componentName} } from './components/Ci${componentName}.vue'`;
  }),
].join("\n");

writeFileSync(join(circumIconsDir, "index.ts"), indexContent);
// Write updated metadata
writeFileSync(metadataPath, JSON.stringify(iconMetadata, null, 2));
