import {CodegenConfig} from "@graphql-codegen/cli";

import {API_URL} from "./src/config";

const config: CodegenConfig = {
  schema: API_URL,
  documents: ["src/api/fragments/*.{ts,tsx}", "src/api/*.{ts,tsx}"],
  generates: {
    "./src/api/generated/": {
      preset: "client",
      plugins: [],
      presetConfig: {
        gqlTagName: "gql",
        fragmentMasking: false,
      },
      config: {
        withComponent: true,
        dedupeFragments: true,
        skipTypename: true,
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
