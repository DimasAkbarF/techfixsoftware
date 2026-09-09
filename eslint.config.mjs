import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = [
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
      "design-system/**",
      "ui-ux-pro-max-skill/**",
      "*.prd",
    ],
  },
  ...nextVitals,
  ...nextTs,
];

export default eslintConfig;