<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'BxLogoHeroku',
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
        <path d="M19.17 2H4.83A1.79 1.79 0 0 0 3 3.8v16.4A1.79 1.79 0 0 0 4.83 22h14.34A1.8 1.8 0 0 0 21 20.2V3.8A1.8 1.8 0 0 0 19.17 2zM20 20.2a.8.8 0 0 1-.81.8H4.83a.79.79 0 0 1-.8-.8V3.8a.79.79 0 0 1 .8-.8h14.34a.8.8 0 0 1 .81.8z"/><path d="m7.53 19 2.25-2-2.25-2v4zm5.69-9a12 12 0 0 0-3.75.7V5h-2v8.65L8.88 13a12.3 12.3 0 0 1 4.29-1c1 0 1.25.55 1.25 1.05v6h2V13a2.68 2.68 0 0 0-.8-2.1 3.27 3.27 0 0 0-2.4-.9zM13 8.25h2A5.89 5.89 0 0 0 16.47 5h-2A7.17 7.17 0 0 1 13 8.25z"/>
      </BaseIcon>
    </template>