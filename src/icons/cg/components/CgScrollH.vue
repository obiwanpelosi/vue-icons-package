<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CgScrollH',
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
    d="M7.18188 9.17154L5.76766 7.75732L1.52502 12L5.76766 16.2426L7.18188 14.8284L4.35345 12L7.18188 9.17154Z"
    fill="currentColor"
  />
  <path
    d="M16.8181 14.8284L18.2323 16.2426L22.4749 12L18.2323 7.75733L16.8181 9.17155L19.6465 12L16.8181 14.8284Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M14.9999 12C14.9999 13.6569 13.6567 15 11.9999 15C10.343 15 8.99988 13.6569 8.99988 12C8.99988 10.3431 10.343 9 11.9999 9C13.6567 9 14.9999 10.3431 14.9999 12ZM12.9999 12C12.9999 12.5523 12.5522 13 11.9999 13C11.4476 13 10.9999 12.5523 10.9999 12C10.9999 11.4477 11.4476 11 11.9999 11C12.5522 11 12.9999 11.4477 12.9999 12Z"
    fill="currentColor"
  />
      </BaseIcon>
    </template>