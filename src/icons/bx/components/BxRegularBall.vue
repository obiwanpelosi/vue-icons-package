<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'BxRegularBall',
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
          default: '0 0 24 24'
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
        <path d="M3.76 21a17.68 17.68 0 0 0 4 .43 13.89 13.89 0 0 0 9.93-3.69C23 12.37 21.06 4.11 21 3.76a1 1 0 0 0-.76-.76 17.91 17.91 0 0 0-4-.43 13.82 13.82 0 0 0-9.96 3.71C.94 11.63 2.94 19.89 3 20.24a1 1 0 0 0 .76.76zM7.7 7.7a11.86 11.86 0 0 1 8.49-3.1 17.57 17.57 0 0 1 3 .25c.31 1.87.91 7.67-2.86 11.44a11.91 11.91 0 0 1-8.55 3.11 17.16 17.16 0 0 1-2.93-.25c-.32-1.88-.92-7.67 2.85-11.45z"/><path d="m7.29 15.29 1.42 1.42 1.79-1.79 1.79 1.79 1.42-1.42-1.8-1.79 1.59-1.59 1.79 1.8 1.42-1.42-1.8-1.79 1.8-1.79-1.42-1.42-1.79 1.8-1.79-1.8-1.42 1.42 1.8 1.79-1.59 1.59-1.79-1.8-1.42 1.42 1.8 1.79z"/>
      </BaseIcon>
    </template>