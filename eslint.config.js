import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import reactUseEffect from "eslint-plugin-react-useeffect";
import tseslint from "typescript-eslint";
import { globalIgnores } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier/flat";

export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    plugins: {
      "react-useeffect": reactUseEffect,
    },
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs["recommended-latest"],
      reactRefresh.configs.vite,
      eslintConfigPrettier,
    ],
    rules: {
      "react-useeffect/no-non-function-return": "error",
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
]);
