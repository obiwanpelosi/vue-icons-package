<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CgBattery',
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
    d="M6 15C5.44772 15 5 14.5523 5 14V10C5 9.44772 5.44772 9 6 9H12V15H6Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M18 6H5C3.34315 6 2 7.34315 2 9V15C2 16.6569 3.34315 18 5 18H18C19.6569 18 21 16.6569 21 15C21.5523 15 22 14.5523 22 14V10C22 9.44772 21.5523 9 21 9C21 7.34315 19.6569 6 18 6ZM18 8H5C4.44772 8 4 8.44772 4 9V15C4 15.5523 4.44772 16 5 16H18C18.5523 16 19 15.5523 19 15V9C19 8.44772 18.5523 8 18 8Z"
    fill="currentColor"
  />
      </BaseIcon>
    </template>