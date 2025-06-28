<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CgDialpad',
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
        <path d="M5.5 3H8.5V6H5.5V3Z" fill="currentColor" />
  <path d="M5.5 8H8.5V11H5.5V8Z" fill="currentColor" />
  <path d="M5.5 13V16H8.5V13H5.5Z" fill="currentColor" />
  <path d="M10.5 3H13.5V6H10.5V3Z" fill="currentColor" />
  <path d="M10.5 8V11H13.5V8H10.5Z" fill="currentColor" />
  <path d="M10.5 13H13.5V16H10.5V13Z" fill="currentColor" />
  <path d="M10.5 18V21H13.5V18H10.5Z" fill="currentColor" />
  <path d="M15.5 3H18.5V6H15.5V3Z" fill="currentColor" />
  <path d="M15.5 8V11H18.5V8H15.5Z" fill="currentColor" />
  <path d="M15.5 13H18.5V16H15.5V13Z" fill="currentColor" />
      </BaseIcon>
    </template>