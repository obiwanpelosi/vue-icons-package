<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CgFormatText',
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
        <path d="M6.5 3H3V6.5H4V4H6.5V3Z" fill="currentColor" />
  <path d="M8.5 4V3H11V4H8.5Z" fill="currentColor" />
  <path d="M13 4H15.5V3H13V4Z" fill="currentColor" />
  <path d="M17.5 3V4H20V6.5H21V3H17.5Z" fill="currentColor" />
  <path d="M21 8.5H20V11H21V8.5Z" fill="currentColor" />
  <path d="M21 13H20V15.5H21V13Z" fill="currentColor" />
  <path d="M21 17.5H20V20H17.5V21H21V17.5Z" fill="currentColor" />
  <path d="M15.5 21V20H13V21H15.5Z" fill="currentColor" />
  <path d="M11 21V20H8.5V21H11Z" fill="currentColor" />
  <path d="M6.5 21V20H4V17.5H3V21H6.5Z" fill="currentColor" />
  <path d="M3 15.5H4V13H3V15.5Z" fill="currentColor" />
  <path d="M3 11H4V8.5H3V11Z" fill="currentColor" />
  <path d="M11 9.5H7V7.5H17V9.5H13V16.5H11V9.5Z" fill="currentColor" />
      </BaseIcon>
    </template>