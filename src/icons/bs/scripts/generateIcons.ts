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
const bsMainDir = join(__dirname, "..");
const iconsDir = join(bsMainDir, "icons");
const outputDir = join(bsMainDir, "components");

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
      .split("-")
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
        :class="cssClass"
        :style="style" 
        :viewBox="viewBox"
      >
        ${cleanedSvgContent}
      </BaseIcon>
    </template>`;

    writeFileSync(join(outputDir, `${componentFullName}.vue`), vueContent);
  });

  return svgFiles;
}

// Generate components for both variants
const iconFiles = generateComponents(iconsDir, "Bs");

// Generate index file
const indexContent = [
  ...iconFiles.map((svgFile: string) => {
    const componentName = svgFile
      .replace(".svg", "")
      .split("-")
      .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("");
    return `export { default as Bs${componentName} } from './components/Bs${componentName}.vue'`;
  }),
].join("\n");

writeFileSync(join(bsMainDir, "index.ts"), indexContent);
