<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7Wpbeginner',
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
          default: '0 0 512 512'
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
        <path fill="currentColor" d="M463.2 322.4c56.2 64.3 4.2 157.6-91.9 157.6-39.6 0-78.8-17.7-100.1-50-6.9 .4-22.7 .4-29.6 0-21.4 32.4-60.6 50-100.1 50-95.5 0-148.3-93-91.9-157.6-79.1-131.9 31.3-290.4 206.8-290.4 175.6 0 285.9 158.6 206.8 290.4zm-339.6-83l41.5 0 0-58.1-41.5 0 0 58.1zm217.2 86.1l0-23.8c-60.5 20.9-132.4 9.2-187.6-34l.2 24.9c51.1 46.4 131.7 57.9 187.3 32.9zM190 239.4l166.1 0 0-58.1-166.1 0 0 58.1z"/>
      </BaseIcon>
    </template>