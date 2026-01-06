<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7SolidHelicopter',
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
        <path fill="currentColor" d="M176 32c-13.3 0-24 10.7-24 24s10.7 24 24 24l152 0 0 48-220.8 0-32.8-39.4C69.9 83.2 63.1 80 56 80L24 80C15.7 80 8 84.3 3.6 91.4s-4.8 15.9-1.1 23.4l48 96C54.6 218.9 62.9 224 72 224l107.8 0 104 143.1c15.1 20.7 39.1 32.9 64.7 32.9l75.5 0c75.1 0 136-60.9 136-136S499.1 128 424 128l-48 0 0-48 152 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L176 32zM376 192l48 0c39.8 0 72 32.2 72 72s-32.2 72-72 72l-48 0 0-144zM552 416c-13.3 0-24 10.7-24 24 0 4.4-3.6 8-8 8l-272 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l272 0c30.9 0 56-25.1 56-56 0-13.3-10.7-24-24-24z"/>
      </BaseIcon>
    </template>