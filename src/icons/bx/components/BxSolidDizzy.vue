<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'BxSolidDizzy',
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
        <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zM8 12.414l-1.293 1.293-1.414-1.414L6.586 11 5.293 9.707l1.414-1.414L8 9.586l1.293-1.293 1.414 1.414L9.414 11l1.293 1.293-1.414 1.414L8 12.414zM14 18h-4v-2h4v2zm4.707-5.707-1.414 1.414L16 12.414l-1.293 1.293-1.414-1.414L14.586 11l-1.293-1.293 1.414-1.414L16 9.586l1.293-1.293 1.414 1.414L17.414 11l1.293 1.293z"/>
      </BaseIcon>
    </template>