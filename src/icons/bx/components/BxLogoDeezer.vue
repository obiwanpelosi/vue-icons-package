<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'BxLogoDeezer',
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
          default: '0 0 24 24'
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
        <path d="M17.68 5.47H22V8h-4.32zm0 3.51H22v2.53h-4.32zm0 3.51H22v2.53h-4.32zM2 16h4.32v2.53H2zm5.22 0h4.32v2.53H7.22zm5.23 0h4.32v2.53h-4.32zm5.23 0H22v2.53h-4.32zm-5.23-3.51h4.32v2.53h-4.32zm-5.23 0h4.32v2.53H7.22zm0-3.51h4.32v2.53H7.22z"/>
      </BaseIcon>
    </template>