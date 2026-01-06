<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'FcNews',
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
        <path fill="#FF5722" d="M32,15v28H10c-2.2,0-4-1.8-4-4V15H32z"/>
    <path fill="#FFCCBC" d="M14,5v34c0,2.2-1.8,4-4,4h29c2.2,0,4-1.8,4-4V5H14z"/>
    <g fill="#FF5722">
        <rect x="20" y="10" width="18" height="4"/>
        <rect x="20" y="17" width="8" height="2"/>
        <rect x="30" y="17" width="8" height="2"/>
        <rect x="20" y="21" width="8" height="2"/>
        <rect x="30" y="21" width="8" height="2"/>
        <rect x="20" y="25" width="8" height="2"/>
        <rect x="30" y="25" width="8" height="2"/>
        <rect x="20" y="29" width="8" height="2"/>
        <rect x="30" y="29" width="8" height="2"/>
        <rect x="20" y="33" width="8" height="2"/>
        <rect x="30" y="33" width="8" height="2"/>
        <rect x="20" y="37" width="8" height="2"/>
        <rect x="30" y="37" width="8" height="2"/>
    </g>
      </BaseIcon>
    </template>