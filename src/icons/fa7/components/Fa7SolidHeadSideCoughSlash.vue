<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7SolidHeadSideCoughSlash',
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
        <path fill="currentColor" d="M535-24.9c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L41 537.1c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l25-25 0-447.2c0-15 10.5-28.3 25.4-29.8 7.4-.7 14.9-1.1 22.6-1.1 112.7 0 206 83.3 221.7 191.7 .4 3 1.7 5.9 3.6 8.3l2.2 2.6 227.5-227.5zM133.8 512L288 357.8 288 416c0 53-43 96-96 96l-58.2 0zM176 224a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm336 40a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm-88 72a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm-64 48a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm128 0a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm24 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm-88-24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"/>
      </BaseIcon>
    </template>