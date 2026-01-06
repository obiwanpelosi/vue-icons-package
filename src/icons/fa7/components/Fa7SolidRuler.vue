<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7SolidRuler',
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
        <path fill="currentColor" d="M209.1 516.2c-18.7 18.7-49.1 18.7-67.9 0L28.1 403.1c-18.7-18.7-18.7-49.1 0-67.9l17-17 73.5 73.5c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-73.5-73.5 33.9-33.9 50.9 50.9c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-50.9-50.9 33.9-33.9 73.5 73.5c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-73.5-73.5 33.9-33.9 50.9 50.9c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-50.9-50.9 33.9-33.9 73.5 73.5c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-73.5-73.5 17-17c18.7-18.7 49.1-18.7 67.9 0L548.5 108.9c18.7 18.7 18.7 49.1 0 67.9L209.1 516.2z"/>
      </BaseIcon>
    </template>