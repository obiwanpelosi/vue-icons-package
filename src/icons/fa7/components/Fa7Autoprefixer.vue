<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7Autoprefixer',
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
          default: '0 0 640 512'
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
        <path fill="currentColor" d="M318.4 16l-161 480 77.5 0 25.4-81.4 119.5 0 25.2 81.4 77.5 0-164.1-480zM278.1 357.9l41.2-130.4 1.5 0 40.9 130.4-83.6 0zM640 405L630 373.6 462.1 358 481.5 414.5 640 405zM177.9 358L10 373.7 0 405 158.5 414.4 177.9 358z"/>
      </BaseIcon>
    </template>