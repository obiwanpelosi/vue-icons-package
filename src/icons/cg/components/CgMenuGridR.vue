<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CgMenuGridR',
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
        <path d="M4 4H8V8H4V4Z" fill="currentColor" />
  <path d="M4 10H8V14H4V10Z" fill="currentColor" />
  <path d="M8 16H4V20H8V16Z" fill="currentColor" />
  <path d="M10 4H14V8H10V4Z" fill="currentColor" />
  <path d="M14 10H10V14H14V10Z" fill="currentColor" />
  <path d="M10 16H14V20H10V16Z" fill="currentColor" />
  <path d="M20 4H16V8H20V4Z" fill="currentColor" />
  <path d="M16 10H20V14H16V10Z" fill="currentColor" />
  <path d="M20 16H16V20H20V16Z" fill="currentColor" />
      </BaseIcon>
    </template>