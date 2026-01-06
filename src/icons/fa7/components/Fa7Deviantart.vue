<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7Deviantart',
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
          default: '0 0 320 512'
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
        <path fill="currentColor" d="M320 93.2l-98.2 179.1 7.4 9.5 90.8 0 0 127.7-160.9 0-13.5 9.2-43.7 84c-.3 0-8.6 8.6-9.2 9.2l-92.7 0 0-93.2 93.2-179.4-7.4-9.2-85.8 0 0-127.6 156 0 13.5-9.2 43.7-84c.3 0 8.6-8.6 9.2-9.2l97.6 0 0 93.1z"/>
      </BaseIcon>
    </template>