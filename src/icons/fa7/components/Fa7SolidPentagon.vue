<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7SolidPentagon',
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
          default: '0 0 576 512'
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
        <path fill="currentColor" d="M316.4-3.1c-16.8-12.2-39.6-12.2-56.4 0L35.3 160.2c-16.8 12.2-23.9 33.9-17.4 53.7l85.8 264.1c6.4 19.8 24.9 33.2 45.7 33.2l277.7 0c20.8 0 39.2-13.4 45.7-33.2l85.8-264.1c6.4-19.8-.6-41.4-17.4-53.7L316.4-3.1z"/>
      </BaseIcon>
    </template>