import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const locales = ["pt", "en", "es"];
const filesToScan = [
  path.join(root, "src", "app", "[locale]"),
  path.join(root, "src", "components")
];

const ignoredFiles = new Set([
  path.join(root, "src", "components", "FullscreenMenuModal.tsx"),
  path.join(root, "src", "components", "home", "clients.tsx"),
  path.join(root, "src", "components", "home", "logo-cloud.tsx"),
  path.join(root, "src", "components", "sections", "PricingFooter.tsx"),
  path.join(root, "src", "components", "solucoes", "SolutionCTA.tsx"),
  path.join(root, "src", "components", "solucoes", "SolutionHeroWithImage.tsx"),
  path.join(root, "src", "components", "ui", "Breadcrumb.tsx"),
  path.join(root, "src", "components", "ui", "SolutionCard.tsx")
]);

const requiredKeys = [
  "Header.openMenu",
  "LanguageSwitcher.portuguese",
  "LanguageSwitcher.english",
  "LanguageSwitcher.spanish",
  "LanguageSwitcher.active",
  "Newsletter.title",
  "Newsletter.description",
  "Newsletter.inputLabel",
  "Newsletter.inputPlaceholder",
  "Newsletter.button",
  "Newsletter.success",
  "Contact.form.whatsapp",
  "Contact.form.messagePlaceholder",
  "Contact.form.consent",
  "Contact.form.sending",
  "Contact.form.error",
  "Contact.form.success",
  "Contact.form.subjectOptions.sites",
  "Contact.form.subjectOptions.platforms",
  "Contact.form.subjectOptions.integrations",
  "Contact.form.subjectOptions.whiteLabel",
  "Contact.form.subjectOptions.consulting",
  "Blog.readArticle",
  "Cases.loadMore",
  "Menu.close",
  "Menu.viewSolution",
  "Menu.signature",
  "Menu.companyScope",
  "Menu.solutionsImageAlt"
];

const expectedFiles = [
  path.join(root, "src", "app", "[locale]", "not-found.tsx"),
  path.join(root, "src", "app", "[locale]", "blog", "page.tsx"),
  path.join(root, "src", "app", "[locale]", "blog", "[slug]", "page.tsx"),
  path.join(root, "src", "app", "[locale]", "cases", "page.tsx"),
  path.join(root, "src", "app", "[locale]", "cases", "[slug]", "page.tsx"),
  path.join(root, "src", "data", "posts.ts"),
  path.join(root, "src", "data", "cases.ts")
];

const forbiddenPatterns = [
  { label: "next/link import", regex: /from\s+["']next\/link["']/g },
  { label: "window.location.href", regex: /window\.location\.href/g }
];

function getAllFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  return entries.flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      return getAllFiles(fullPath);
    }
    return /\.(ts|tsx|js|jsx|json)$/i.test(entry.name) ? [fullPath] : [];
  });
}

function getPath(object, keyPath) {
  return keyPath.split(".").reduce((value, key) => (value == null ? undefined : value[key]), object);
}

const failures = [];

for (const file of expectedFiles) {
  if (!fs.existsSync(file)) {
    failures.push(`Missing expected file: ${path.relative(root, file)}`);
  }
}

for (const locale of locales) {
  const file = path.join(root, "src", "messages", `${locale}.json`);
  const content = JSON.parse(fs.readFileSync(file, "utf8"));

  for (const key of requiredKeys) {
    if (getPath(content, key) == null) {
      failures.push(`Missing translation key ${key} in src/messages/${locale}.json`);
    }
  }
}

for (const dir of filesToScan) {
  for (const file of getAllFiles(dir)) {
    if (ignoredFiles.has(file)) {
      continue;
    }

    const source = fs.readFileSync(file, "utf8");

    for (const pattern of forbiddenPatterns) {
      if (pattern.regex.test(source)) {
        failures.push(`Forbidden ${pattern.label} found in ${path.relative(root, file)}`);
      }
    }
  }
}

if (failures.length) {
  console.error("i18n audit failed:\n");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log("i18n audit passed");
console.log(`Locales checked: ${locales.join(", ")}`);
console.log(`Required keys checked: ${requiredKeys.length}`);
console.log(`Ignored legacy files: ${ignoredFiles.size}`);
console.log(`Directories scanned: ${filesToScan.map((dir) => path.relative(root, dir)).join(", ")}`);
