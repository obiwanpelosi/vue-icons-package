<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7Elementor',
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
          default: '0 0 512 512'
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
        <path fill="currentColor" d="M.5 256c0 141 113.6 255 254.6 255 142 0 256-114 256-255 0-140-114-253.9-256-253.9-141 0-254.6 113.9-254.6 253.9zM192.1 150l0 213-43 0 0-213 43 0zm42 0l128 0 0 43-128 0 0-43zm128 85l0 43-128 0 0-43 128 0zm-128 85l128 0 0 43-128 0 0-43z"/>
      </BaseIcon>
    </template>