<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CgOverflow',
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
    opacity="0.2"
    d="M22 11C22 13.6522 20.9464 16.1957 19.0711 18.0711C17.1957 19.9464 14.6522 21 12 21C9.34784 21 6.8043 19.9464 4.92893 18.0711C3.05357 16.1957 2 13.6522 2 11L22 11Z"
    fill="currentColor"
  />
  <path
    opacity="0.3"
    d="M20 11C20 13.1217 19.1571 15.1566 17.6569 16.6569C16.1566 18.1571 14.1217 19 12 19C9.87827 19 7.84344 18.1571 6.34315 16.6569C4.84286 15.1566 4 13.1217 4 11L20 11Z"
    fill="currentColor"
  />
  <path
    d="M20 11C20 8.87827 19.1571 6.84344 17.6569 5.34315C16.1566 3.84285 14.1217 3 12 3C9.87827 3 7.84344 3.84285 6.34315 5.34315C4.84286 6.84344 4 8.87827 4 11L20 11Z"
    fill="currentColor"
  />
      </BaseIcon>
    </template>