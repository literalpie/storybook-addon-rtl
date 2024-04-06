import eslint from "@eslint/js";
import tsEslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";

export default tsEslint.config(
  eslint.configs.recommended,
  eslintConfigPrettier,
  ...tsEslint.configs.recommended,
  { ignores: ["**/dist/**"] },
);
