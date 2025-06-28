<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'BxLogoMarkdown',
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
        <path d="M20.553 18.15H3.447a1.443 1.443 0 0 1-1.442-1.441V7.291c0-.795.647-1.441 1.442-1.441h17.105c.795 0 1.442.646 1.442 1.441v9.418a1.441 1.441 0 0 1-1.441 1.441zM6.811 15.268V11.52l1.922 2.402 1.922-2.402v3.748h1.922V8.732h-1.922l-1.922 2.403-1.922-2.403H4.889v6.535h1.922zM19.688 12h-1.922V8.732h-1.923V12h-1.922l2.884 3.364L19.688 12z"/>
      </BaseIcon>
    </template>