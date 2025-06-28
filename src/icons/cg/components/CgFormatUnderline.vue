<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CgFormatUnderline',
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
    d="M6 10V4H8V10C8 12.2091 9.79086 14 12 14C14.2091 14 16 12.2091 16 10V4H18V10C18 13.3137 15.3137 16 12 16C8.68629 16 6 13.3137 6 10Z"
    fill="currentColor"
  />
  <path
    d="M7 18C6.44772 18 6 18.4477 6 19C6 19.5523 6.44771 20 7 20H17C17.5523 20 18 19.5523 18 19C18 18.4477 17.5523 18 17 18H7Z"
    fill="currentColor"
  />
      </BaseIcon>
    </template>