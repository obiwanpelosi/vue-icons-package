<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7Fulcrum',
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
          default: '0 0 256 512'
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
        <path fill="currentColor" d="M63.8 164.1L28.4 207.7-7 164.1 28.4 120.6 63.8 164.1zM112.2 0l-20.5 198.2-51 57.8 51 57.8 20.5 198.2 0-211.1-41.1-44.9 41.1-44.9 0-211.1zm79.7 164.1l35.4 43.6 35.4-43.6-35.4-43.5-35.4 43.5zm-48.5 47l41.1 44.9-41.1 44.9 0 211.1 20.6-198.2 51-57.8-51-57.8-20.6-198.2 0 211.1z"/>
      </BaseIcon>
    </template>