<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CgSmartphoneRam',
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
    d="M5 4C5 4.55228 4.55228 5 4 5C3.44772 5 3 4.55228 3 4C3 3.44772 3.44772 3 4 3C4.55228 3 5 3.44772 5 4Z"
    fill="currentColor"
  />
  <path
    d="M9 4C9 4.55228 8.55228 5 8 5C7.44772 5 7 4.55228 7 4C7 3.44772 7.44772 3 8 3C8.55228 3 9 3.44772 9 4Z"
    fill="currentColor"
  />
  <path
    d="M12 5C12.5523 5 13 4.55228 13 4C13 3.44772 12.5523 3 12 3C11.4477 3 11 3.44772 11 4C11 4.55228 11.4477 5 12 5Z"
    fill="currentColor"
  />
  <path
    d="M17 4C17 4.55228 16.5523 5 16 5C15.4477 5 15 4.55228 15 4C15 3.44772 15.4477 3 16 3C16.5523 3 17 3.44772 17 4Z"
    fill="currentColor"
  />
  <path
    d="M20 5C20.5523 5 21 4.55228 21 4C21 3.44772 20.5523 3 20 3C19.4477 3 19 3.44772 19 4C19 4.55228 19.4477 5 20 5Z"
    fill="currentColor"
  />
  <path
    d="M5 20C5 20.5523 4.55228 21 4 21C3.44772 21 3 20.5523 3 20C3 19.4477 3.44772 19 4 19C4.55228 19 5 19.4477 5 20Z"
    fill="currentColor"
  />
  <path
    d="M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20Z"
    fill="currentColor"
  />
  <path
    d="M12 21C12.5523 21 13 20.5523 13 20C13 19.4477 12.5523 19 12 19C11.4477 19 11 19.4477 11 20C11 20.5523 11.4477 21 12 21Z"
    fill="currentColor"
  />
  <path
    d="M17 20C17 20.5523 16.5523 21 16 21C15.4477 21 15 20.5523 15 20C15 19.4477 15.4477 19 16 19C16.5523 19 17 19.4477 17 20Z"
    fill="currentColor"
  />
  <path
    d="M20 21C20.5523 21 21 20.5523 21 20C21 19.4477 20.5523 19 20 19C19.4477 19 19 19.4477 19 20C19 20.5523 19.4477 21 20 21Z"
    fill="currentColor"
  />
  <path
    d="M5 12C5.55228 12 6 11.5523 6 11C6 10.4477 5.55228 10 5 10C4.44772 10 4 10.4477 4 11C4 11.5523 4.44772 12 5 12Z"
    fill="currentColor"
  />
  <path
    d="M20 13C20 13.5523 19.5523 14 19 14C18.4477 14 18 13.5523 18 13C18 12.4477 18.4477 12 19 12C19.5523 12 20 12.4477 20 13Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M0 9C0 7.34315 1.34315 6 3 6H21C22.6569 6 24 7.34315 24 9V15C24 16.6569 22.6569 18 21 18H3C1.34315 18 0 16.6569 0 15V9ZM3 8H21C21.5523 8 22 8.44772 22 9V15C22 15.5523 21.5523 16 21 16H3C2.44772 16 2 15.5523 2 15V9C2 8.44772 2.44772 8 3 8Z"
    fill="currentColor"
  />
      </BaseIcon>
    </template>