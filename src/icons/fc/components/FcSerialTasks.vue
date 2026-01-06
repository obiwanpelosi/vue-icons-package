<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'FcSerialTasks',
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
        <path fill="#90CAF9" d="M33,9H11v4h22c1.1,0,2,0.9,2,2v20H23v4h16V15C39,11.7,36.3,9,33,9z"/>
    <rect x="6" y="6" fill="#D81B60" width="10" height="10"/>
    <g fill="#2196F3">
        <rect x="32" y="17" width="10" height="10"/>
        <rect x="16" y="32" width="10" height="10"/>
        <circle cx="26" cy="11" r="5"/>
        <circle cx="37" cy="37" r="5"/>
    </g>
      </BaseIcon>
    </template>