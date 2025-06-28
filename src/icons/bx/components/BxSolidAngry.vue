<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'BxSolidAngry',
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
        <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-5 8.5.002-.022-1.373-.549.742-1.857 5 2-.742 1.857-1.031-.413c-.014.014-.023.031-.037.044A1.499 1.499 0 0 1 7 10.5zM8 17s1-3 4-3 4 3 4 3H8zm8.986-6.507c0 .412-.167.785-.438 1.056a1.488 1.488 0 0 1-2.112 0c-.011-.011-.019-.024-.029-.035l-1.037.415-.742-1.857 5-2 .742 1.857-1.386.554a.036.036 0 0 1 .002.01z"/>
      </BaseIcon>
    </template>