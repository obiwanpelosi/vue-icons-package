<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CgFormatIndentIncrease',
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
        <path d="M20 7H4V5H20V7Z" fill="currentColor" />
  <path d="M20 11H12V9H20V11Z" fill="currentColor" />
  <path d="M12 15H20V13H12V15Z" fill="currentColor" />
  <path d="M4 15L9 12L4 9V15Z" fill="currentColor" />
  <path d="M4 17V19H20V17H4Z" fill="currentColor" />
      </BaseIcon>
    </template>