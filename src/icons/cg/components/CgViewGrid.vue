<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CgViewGrid',
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
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M5 5C3.34315 5 2 6.34315 2 8V16C2 17.6569 3.34315 19 5 19H19C20.6569 19 22 17.6569 22 16V8C22 6.34315 20.6569 5 19 5H5ZM8 7H5C4.44772 7 4 7.44772 4 8V9H8V7ZM10 7V9H14V7H10ZM16 7V9H20V8C20 7.44771 19.5523 7 19 7H16ZM14 11H10V13H14V11ZM16 13V11H20V13H16ZM14 15H10V17H14V15ZM16 17V15H20V16C20 16.5523 19.5523 17 19 17H16ZM8 17V15H4V16C4 16.5523 4.44772 17 5 17H8ZM8 13V11H4V13H8Z"
    fill="currentColor"
  />
      </BaseIcon>
    </template>