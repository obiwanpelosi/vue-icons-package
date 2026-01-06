<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7TimesRectangle',
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
        <path fill="currentColor" d="M64 112c-8.8 0-16 7.2-16 16l0 256c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-256c0-8.8-7.2-16-16-16L64 112zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128zm334.1 49.9c9.4 9.4 9.4 24.6 0 33.9l-44.1 44.1 44.1 44.1c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-44.1-44.1-44.1 44.1c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l44.1-44.1-44.1-44.1c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l44.1 44.1 44.1-44.1c9.4-9.4 24.6-9.4 33.9 0z"/>
      </BaseIcon>
    </template>