<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'BxRegularAngry',
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
        <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/><path d="M12 14c-3 0-4 3-4 3h8s-1-3-4-3zm-2.439-2.439c.014-.014.023-.03.037-.044l1.031.413.742-1.857-5-2-.742 1.856 1.373.549L7 10.5a1.499 1.499 0 0 0 2.561 1.061zm3.068-1.49.742 1.857 1.037-.415c.011.011.019.024.029.035a1.488 1.488 0 0 0 2.112 0c.271-.271.438-.644.438-1.056l-.001-.01 1.386-.554-.742-1.857-5.001 2z"/>
      </BaseIcon>
    </template>