<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'FcRules',
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
        <path fill="#42A5F5" d="M39,45H9c0,0-3-0.1-3-8h36C42,44.9,39,45,39,45z"/>
    <rect x="8" y="3" fill="#90CAF9" width="32" height="34"/>
    <g fill="#1976D2">
        <rect x="18" y="15" width="16" height="2"/>
        <rect x="18" y="19" width="16" height="2"/>
        <rect x="18" y="23" width="16" height="2"/>
        <rect x="18" y="27" width="16" height="2"/>
        <rect x="18" y="31" width="16" height="2"/>
    </g>
    <g fill="#1976D2">
        <rect x="14" y="15" width="2" height="2"/>
        <rect x="14" y="19" width="2" height="2"/>
        <rect x="14" y="23" width="2" height="2"/>
        <rect x="14" y="27" width="2" height="2"/>
        <rect x="14" y="31" width="2" height="2"/>
    </g>
      </BaseIcon>
    </template>