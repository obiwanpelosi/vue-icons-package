<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'FcNeutralTrading',
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
        <g fill="#1565C0">
        <polygon points="43.4,13 35,20 35,6"/>
        <rect x="4" y="11" width="34" height="4"/>
    </g>
    <g fill="#2196F3">
        <rect x="40" y="23" width="4" height="19"/>
        <rect x="34" y="23" width="4" height="19"/>
        <rect x="28" y="23" width="4" height="19"/>
        <rect x="22" y="23" width="4" height="19"/>
        <rect x="16" y="23" width="4" height="19"/>
        <rect x="10" y="23" width="4" height="19"/>
        <rect x="4" y="23" width="4" height="19"/>
    </g>
      </BaseIcon>
    </template>