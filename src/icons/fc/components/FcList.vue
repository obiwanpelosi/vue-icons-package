<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'FcList',
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
        <g fill="#2196F3">
        <rect x="6" y="22" width="4" height="4"/>
        <rect x="6" y="14" width="4" height="4"/>
        <rect x="6" y="30" width="4" height="4"/>
        <rect x="6" y="6" width="4" height="4"/>
        <rect x="6" y="38" width="4" height="4"/>
    </g>
    <g fill="#2196F3">
        <rect x="14" y="22" width="28" height="4"/>
        <rect x="14" y="14" width="28" height="4"/>
        <rect x="14" y="30" width="28" height="4"/>
        <rect x="14" y="6" width="28" height="4"/>
        <rect x="14" y="38" width="28" height="4"/>
    </g>
      </BaseIcon>
    </template>