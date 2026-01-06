<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7Monero',
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
        <path fill="currentColor" d="M360 384l108.4 0C425 455.9 346.1 504 256 504S87 455.9 43.6 384l108.4 0 0-127.8 104 104.8 104-105 0 128zM96 336l0-208 159.4 159.4 160.6-159.4 0 208 74.8 0c8.5-25.1 13.2-52 13.2-80 0-137-111-248-248-248S8 119 8 256c0 28 4.6 54.9 13.2 80L96 336z"/>
      </BaseIcon>
    </template>