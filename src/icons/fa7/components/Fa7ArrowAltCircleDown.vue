<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7ArrowAltCircleDown',
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
        <path fill="currentColor" d="M256 464a208 208 0 1 1 0-416 208 208 0 1 1 0 416zM256 0a256 256 0 1 0 0 512 256 256 0 1 0 0-512zM244.7 387.3c6.2 6.2 16.4 6.2 22.6 0l104-104c4.6-4.6 5.9-11.5 3.5-17.4S366.5 256 360 256l-72 0 0-104c0-13.3-10.7-24-24-24l-16 0c-13.3 0-24 10.7-24 24l0 104-72 0c-6.5 0-12.3 3.9-14.8 9.9s-1.1 12.9 3.5 17.4l104 104z"/>
      </BaseIcon>
    </template>