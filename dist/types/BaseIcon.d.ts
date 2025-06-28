import { DefineComponent } from 'vue';

export interface BaseIconProps {
  size?: string | number;
  color?: string;
  class?: string;
  style?: Record<string, string | number>;
  viewBox?: string;
}

declare const BaseIcon: DefineComponent<BaseIconProps>;
export default BaseIcon;
