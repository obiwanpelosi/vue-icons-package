<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'FcLandscape',
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
          default: '0 0 48 48'
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
        <g fill="#FF9800">
        <rect x="36.1" y="8.1" transform="matrix(.707 .707 -.707 .707 21.201 -25.184)" width="9.9" height="9.9"/>
        <rect x="36" y="8" width="10" height="10"/>
    </g>
    <circle fill="#FFEB3B" cx="41" cy="13" r="3"/>
    <polygon fill="#2E7D32" points="16.5,18 0,42 33,42"/>
    <polygon fill="#4CAF50" points="33.6,24 19.2,42 48,42"/>
      </BaseIcon>
    </template>