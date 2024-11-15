// @ts-check
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    ignores: ["node_modules", "dist", "coverage"],
  },
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  pluginJs.configs.recommended,
  {
    rules: {
      "array-bracket-spacing": [2, "never"],
      "block-scoped-var": 2,
      "brace-style": [2, "1tbs", {"allowSingleLine": true}],
      "comma-dangle": [2, "always-multiline"],
      "computed-property-spacing": [2, "never"],
      "curly": 2,
      "eol-last": 2,
      "eqeqeq": [2, "smart"],
      "max-len": [1, 125],
      "new-cap": 1,
      "no-extend-native": 2,
      "no-mixed-spaces-and-tabs": 2,
      "no-trailing-spaces": 2,
      "no-undef": 2,
      "no-unused-vars": 1,
      "no-use-before-define": [2, "nofunc"],
      "object-curly-spacing": [2, "never"],
      "quotes": [2, "single", "avoid-escape"],
      "semi": [2, "always"],
      "keyword-spacing": 2,
      "space-unary-ops": 2
    },
  },
);
