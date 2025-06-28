/** @format */

// packages/icons-lib/src/types.d.ts

declare module "vue-icons-lib" {
  import { DefineComponent } from "vue";

  export const BaseIcon: DefineComponent;

  // Re-export all icons
  export * from "./icons/ant-icons";
  export * from "./icons/box-icons";
  export * from "./icons/circum-icons";
  export * from "./icons/css-gg-icons";
  export * from "./icons/dev-icons";
  export * from "./icons/feather-icons";
}
