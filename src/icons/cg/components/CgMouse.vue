<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CgMouse',
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
    d="M12 5C11.4477 5 11 5.44772 11 6V10C11 10.5523 11.4477 11 12 11C12.5523 11 13 10.5523 13 10V6C13 5.44772 12.5523 5 12 5Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M4 8C4 3.58172 7.58172 0 12 0C16.4183 0 20 3.58172 20 8V16C20 20.4183 16.4183 24 12 24C7.58172 24 4 20.4183 4 16V8ZM18 8V16C18 19.3137 15.3137 22 12 22C8.68629 22 6 19.3137 6 16V8C6 4.68629 8.68629 2 12 2C15.3137 2 18 4.68629 18 8Z"
    fill="currentColor"
  />
      </BaseIcon>
    </template>