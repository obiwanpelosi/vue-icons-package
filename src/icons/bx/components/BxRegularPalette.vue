<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'BxRegularPalette',
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
        <path d="M13.4 2.096a10.08 10.08 0 0 0-8.937 3.331A10.054 10.054 0 0 0 2.096 13.4c.53 3.894 3.458 7.207 7.285 8.246a9.982 9.982 0 0 0 2.618.354l.142-.001a3.001 3.001 0 0 0 2.516-1.426 2.989 2.989 0 0 0 .153-2.879l-.199-.416a1.919 1.919 0 0 1 .094-1.912 2.004 2.004 0 0 1 2.576-.755l.412.197c.412.198.85.299 1.301.299A3.022 3.022 0 0 0 22 12.14a9.935 9.935 0 0 0-.353-2.76c-1.04-3.826-4.353-6.754-8.247-7.284zm5.158 10.909-.412-.197c-1.828-.878-4.07-.198-5.135 1.494-.738 1.176-.813 2.576-.204 3.842l.199.416a.983.983 0 0 1-.051.961.992.992 0 0 1-.844.479h-.112a8.061 8.061 0 0 1-2.095-.283c-3.063-.831-5.403-3.479-5.826-6.586-.321-2.355.352-4.623 1.893-6.389a8.002 8.002 0 0 1 7.16-2.664c3.107.423 5.755 2.764 6.586 5.826.198.73.293 1.474.282 2.207-.012.807-.845 1.183-1.441.894z"/><circle cx="7.5" cy="14.5" r="1.5"/><circle cx="7.5" cy="10.5" r="1.5"/><circle cx="10.5" cy="7.5" r="1.5"/><circle cx="14.5" cy="7.5" r="1.5"/>
      </BaseIcon>
    </template>