import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { readdirSync, renameSync } from "fs";

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
const boxIconsDir = join(__dirname, "..");
const logoDir = join(boxIconsDir, "logos");
const regularDir = join(boxIconsDir, "regular");
const solidDir = join(boxIconsDir, "solid");

function renameIcons() {
  const logoFiles = readdirSync(logoDir).filter((file: string) =>
    file.endsWith(".svg")
  );
  const regularFiles = readdirSync(regularDir).filter((file: string) =>
    file.endsWith(".svg")
  );
  const solidFiles = readdirSync(solidDir).filter((file: string) =>
    file.endsWith(".svg")
  );

  logoFiles.forEach((file) => {
    const newName = file.replace("bxl-", "");
    renameSync(join(logoDir, file), join(logoDir, newName));
  });

  regularFiles.forEach((file) => {
    const newName = file.replace("bx-", "");
    renameSync(join(regularDir, file), join(regularDir, newName));
  });

  solidFiles.forEach((file) => {
    const newName = file.replace("bxs-", "");
    renameSync(join(solidDir, file), join(solidDir, newName));
  });
}

renameIcons();
