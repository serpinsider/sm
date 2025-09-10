import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "off", // Turn off unused vars warning
      "@next/next/no-img-element": "off", // Turn off img element warning
      "react-hooks/exhaustive-deps": "warn", // Keep as warning but won't fail build
    },
    files: ["**/*.js", "**/*.ts", "**/*.tsx"],
    ignores: ["*.config.js", "*.config.mjs", "build/*", "dist/*"]
  },
];

export default eslintConfig;