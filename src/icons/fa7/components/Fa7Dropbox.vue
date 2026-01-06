<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7Dropbox',
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
          default: '0 0 576 512'
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
        <path fill="currentColor" d="M288.4 116.3l-132 84.3 132 84.3-132 84.3-132.4-85.1 132.3-84.3-132.3-83.5 132.3-84.3 132.1 84.3zM155.6 395.7l132-84.3 132 84.3-132 84.3-132-84.3zM288.4 284.1l132-84.3-132-83.6 131.3-84.2 132.3 84.3-132.3 84.3 132.3 84.2-132.3 84.3-131.3-85z"/>
      </BaseIcon>
    </template>