<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'AiFillSketchSquare',
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
          default: '0 0 1024 1024'
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
        <path d="M608.2 423.3L512 326.1l-96.2 97.2zm-25.9 202.3l147.9-166.3h-63.4zm90-202.3h62.5l-92.1-115.1zM880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-81.3 332.2L515.8 762.3c-1 1.1-2.4 1.7-3.8 1.7s-2.8-.6-3.8-1.7L225.3 444.2a5.14 5.14 0 0 1-.2-6.6L365.6 262c1-1.2 2.4-1.9 4-1.9h284.6c1.6 0 3 .7 4 1.9l140.5 175.6a4.9 4.9 0 0 1 0 6.6zm-401.1 15.1L512 684.5l114.4-225.2zm-16.3-151.1l-92.1 115.1h62.5zm-87.5 151.1l147.9 166.3-84.5-166.3zm126.5-158.2l-23.1 89.8 88.8-89.8zm183.4 0H538l88.8 89.8z"/>
      </BaseIcon>
    </template>