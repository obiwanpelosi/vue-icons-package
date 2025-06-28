<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CgSmartHomeRefrigerator',
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
        <path
    d="M9 6C9 5.44772 9.44772 5 10 5C10.5523 5 11 5.44772 11 6V8C11 8.55228 10.5523 9 10 9C9.44772 9 9 8.55228 9 8V6Z"
    fill="currentColor"
  />
  <path
    d="M10 13C9.44772 13 9 13.4477 9 14V16C9 16.5523 9.44772 17 10 17C10.5523 17 11 16.5523 11 16V14C11 13.4477 10.5523 13 10 13Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M5 4C5 2.34315 6.34315 1 8 1H16C17.6569 1 19 2.34315 19 4V20C19 21.6569 17.6569 23 16 23H8C6.34315 23 5 21.6569 5 20V4ZM8 3H16C16.5523 3 17 3.44772 17 4V10H7V4C7 3.44772 7.44772 3 8 3ZM7 12H17V20C17 20.5523 16.5523 21 16 21H8C7.44772 21 7 20.5523 7 20V12Z"
    fill="currentColor"
  />
      </BaseIcon>
    </template>