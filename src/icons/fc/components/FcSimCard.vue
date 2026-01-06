<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'FcSimCard',
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
        <path fill="#009688" d="M36,45H12c-2.2,0-4-1.8-4-4V7c0-2.2,1.8-4,4-4h16.3c1.1,0,2.1,0.4,2.8,1.2l7.7,7.7c0.8,0.8,1.2,1.8,1.2,2.8 V41C40,43.2,38.2,45,36,45z"/>
    <path fill="#FF9800" d="M32,38H16c-1.1,0-2-0.9-2-2V24c0-1.1,0.9-2,2-2h16c1.1,0,2,0.9,2,2v12C34,37.1,33.1,38,32,38z"/>
    <path fill="#FFD54F" d="M29,30v3h5v2h-5v3h-2V22h2v6h5v2H29z M14,29v2h5v2h-5v2h5v3h2v-9H14z"/>
      </BaseIcon>
    </template>