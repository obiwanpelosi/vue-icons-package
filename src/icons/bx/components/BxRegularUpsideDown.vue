<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'BxRegularUpsideDown',
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
        <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/><path d="M14.829 9.172c.181.181.346.38.488.592l1.658-1.119a6.063 6.063 0 0 0-1.621-1.62 5.963 5.963 0 0 0-2.148-.903 5.985 5.985 0 0 0-5.448 1.634 5.993 5.993 0 0 0-.733.889l1.657 1.119a4.017 4.017 0 0 1 2.51-1.683 3.989 3.989 0 0 1 3.637 1.091z"/><circle cx="15.5" cy="13.5" r="1.5"/><circle cx="8.507" cy="13.507" r="1.493"/>
      </BaseIcon>
    </template>