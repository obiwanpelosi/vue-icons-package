<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'BxRegularBugAlt',
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
        <path d="M9 9h6v2H9zm0 4h6v2H9z"/><path d="m18 5.414 1.707-1.707-1.414-1.414-1.563 1.562C15.483 2.708 13.824 2 12 2s-3.483.708-4.73 1.855L5.707 2.293 4.293 3.707 6 5.414A6.937 6.937 0 0 0 5 9H3v2h2v2H3v2h2c0 3.86 3.141 7 7 7s7-3.14 7-7h2v-2h-2v-2h2V9h-2a6.937 6.937 0 0 0-1-3.586zM17 13v2c0 2.757-2.243 5-5 5s-5-2.243-5-5V9c0-2.757 2.243-5 5-5s5 2.243 5 5v4z"/>
      </BaseIcon>
    </template>