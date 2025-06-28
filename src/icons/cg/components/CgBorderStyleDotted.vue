<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CgBorderStyleDotted',
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
        <path d="M3 11H1V13H3V11Z" fill="currentColor" />
  <path d="M7 11H5V13H7V11Z" fill="currentColor" />
  <path d="M9 11H11V13H9V11Z" fill="currentColor" />
  <path d="M15 11H13V13H15V11Z" fill="currentColor" />
  <path d="M17 11H19V13H17V11Z" fill="currentColor" />
  <path d="M23 11H21V13H23V11Z" fill="currentColor" />
      </BaseIcon>
    </template>