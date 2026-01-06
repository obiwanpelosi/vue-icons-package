<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7Megaport',
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
        <path fill="currentColor" d="M222.5 209.6l0 66.2 33.5 33.5 33.3-33.3 0-66.4-33.4-33.4-33.4 33.4zM256 8a248 248 0 1 0 0 496 248 248 0 1 0 0-496zM401.1 422.4l-26.1 19.2-26-19.2 0-65.5-33.4-33.4-33.4 33.4 0 65.5-26.2 19.2-26.1-19.2 0-65.5-33.4-33.4-33.5 33.4 0 65.5-26.1 19.2-26.1-19.2 0-87 59.5-59.5 0-87.9 59.5-59.5 0-75.6 26.1-19.2 26.1 19.2 0 75.6 59.5 59.5 0 87.6 59.7 59.7 0 87.1-.1 0z"/>
      </BaseIcon>
    </template>