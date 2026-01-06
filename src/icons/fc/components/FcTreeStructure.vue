<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'FcTreeStructure',
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
        <polygon fill="#90CAF9" points="36.9,13.8 35.1,10.2 7.5,24 35.1,37.8 36.9,34.2 16.5,24"/>
    <rect x="6" y="18" fill="#D81B60" width="12" height="12"/>
    <g fill="#2196F3">
        <rect x="30" y="6" width="12" height="12"/>
        <rect x="30" y="30" width="12" height="12"/>
    </g>
      </BaseIcon>
    </template>