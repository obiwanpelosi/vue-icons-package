<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'AiFillOpenAI',
      components: {
        BaseIcon,
      },
      props: {
        size: {
          type: String,
          default: '1em'
        },
        color: {
          type: String,
          default: 'currentColor'
        },
        strokeColor: {
          type: String,
          default: "",
        },
        class: {
          type: String,
          default: ''
        },
        style: {
          type: Object as PropType<Record<string, string | number>>,
          default: () => ({})
        },
        viewBox: {
          type: String,
          default: '0 0 1024 1024'
        }
      },
      computed: {
        cssClass() {
          return this.class ? this.class : "";
        },
      },
    })
    </script>
    
    <template>
      <BaseIcon 
        :size="size"
        :color="color"
        :strokeColor="strokeColor"
        :class="cssClass"
        :style="style" 
        :viewBox="viewBox"
      >
        <path d="M366.609 0C292.567 0 226.882 42.382 193.68 104.575v237.284l92.265 56.484 3.386-235.699 188.997-127.45C446.12 12.695 407.577 0 366.608 0M569.51 62.248c-13.17 0-26.054 1.758-38.8 4.359L344.2 192.363l-1.37 96.146 186.584-125.253 231.22 137.284c3.08-13.888 4.863-28.051 4.863-42.327 0-108.044-87.93-195.965-195.986-195.965m-431.168 91.75C58.343 178.696 0 253.216 0 341.21c0 27.924 5.906 54.829 16.788 79.36l245.487 139.769 90.571-56.124-214.503-131.376zm392.872 74.676-72.702 48.848 203.984 128.062 25.795 235.41C758.422 611.115 807 541.971 807 461.095c0-27.555-5.855-54.129-16.572-78.53zM408.22 311.275l-66.362 44.56-1.045 76.117 64.704 39.662 69.532-43.048-1.837-76.477zm121.194 76.117 5.872 248.343-201.282 119.164C368.72 783.635 412.631 800 458.837 800c79.224 0 147.798-46.522 178.621-114.986L610.402 438.22zm-52.852 105.295L263.428 624.676 60.56 509.15c-3.357 14.46-5.224 29.262-5.224 44.164 0 102.935 79.847 187.408 180.819 195.173l243.036-143.876z" transform="translate(109 112)"/>
      </BaseIcon>
    </template>