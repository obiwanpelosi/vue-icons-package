<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7Jira',
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
        <path fill="currentColor" d="M498.5 241.7c-72.9-72.7-169.4-169.9-241.5-241.7-165.5 164.9-242.5 241.7-242.5 241.7-7.9 7.9-7.9 20.7 0 28.7 132.8 132.3 61.8 61.5 242.5 241.6 379.4-378 15.7-16.7 241.5-241.7 8-7.9 8-20.7 0-28.6zM257 331.7l-76-75.7 76-75.7 76 75.7-76 75.7z"/>
      </BaseIcon>
    </template>