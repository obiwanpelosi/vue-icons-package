<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7Mizuni',
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
        <path fill="currentColor" d="M256 8a248 248 0 1 0 0 496 248 248 0 1 0 0-496zM176 359.9c-31.4 10.6-58.8 27.3-80 48.2L96 136c0-22.1 17.9-40 40-40s40 17.9 40 40l0 223.9zM296 350c-12.9-2-26.2-3.1-39.8-3.1-13.8 0-27.2 1.1-40.2 3.1l0-214c0-22.1 17.9-40 40-40s40 17.9 40 40l0 214zm120 57.7c-21.2-20.8-48.6-37.4-80-48L336 136c0-22.1 17.9-40 40-40s40 17.9 40 40l0 271.7z"/>
      </BaseIcon>
    </template>