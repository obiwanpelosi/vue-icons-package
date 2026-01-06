<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7SolidMarsStrokeH',
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
          default: '0 0 640 512'
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
        <path fill="currentColor" d="M320.5 256a112 112 0 1 0 -224 0 112 112 0 1 0 224 0zM208.5 80c86.3 0 158.1 62.1 173.1 144.1 1-.1 1.9-.1 2.9-.1l16 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 61.4 0-22.4-28c-11-13.8-8.8-33.9 5-45s33.9-8.8 45 5l64 80c9.3 11.7 9.3 28.3 0 40l-64 80c-11 13.8-31.2 16-45 5s-16-31.2-5-45l22.4-28-61.4 0 0 32c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-32-16 0c-1 0-1.9 0-2.9-.1-15 82-86.8 144.1-173.1 144.1-97.2 0-176-78.8-176-176s78.8-176 176-176z"/>
      </BaseIcon>
    </template>