<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'AiOutlineProduct',
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
        <path d="M320 30.02c8.837 0 16 7.163 16 16v304c0 8.836-7.163 16-16 16H16c-8.837 0-16-7.164-16-16v-304c0-8.837 7.163-16 16-16zm-52 68H68v200h200zm493.333 87.686c6.248 6.248 6.248 16.379 0 22.627l-181.02 181.02c-6.248 6.248-16.378 6.248-22.627 0l-181.019-181.02c-6.248-6.248-6.248-16.379 0-22.627l181.02-181.02c6.248-6.248 16.378-6.248 22.627 0zm-84.853 11.313L569 89.54 461.52 197.02 569 304.5zM320 430.02c8.837 0 16 7.164 16 16v304c0 8.837-7.163 16-16 16H16c-8.837 0-16-7.163-16-16v-304c0-8.836 7.163-16 16-16zm-52 68H68v200h200zm452-68c8.837 0 16 7.164 16 16v304c0 8.837-7.163 16-16 16H416c-8.837 0-16-7.163-16-16v-304c0-8.836 7.163-16 16-16zm-52 68H468v200h200z" transform="translate(144 113.98)"/>
      </BaseIcon>
    </template>