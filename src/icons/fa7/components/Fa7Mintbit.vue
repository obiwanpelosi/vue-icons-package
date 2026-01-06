<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7Mintbit',
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
        <path fill="currentColor" d="M73.2 512l0-73.1 292.5 0 0-73.2 73.2 0 0-146.3 73.1 0 0-219.4-219.4 0 0 73.1-146.3 0 0 73.2-73.1 0 0 292.6-73.2 0 0 73.1 73.2 0zm73.1-219.4l73.2 0 0 73.1-73.2 0 0-73.1zm73.2-73.1l73.1 0 0 73.1-73.2 0 0-73.2 .1 .1zm73.1 0l0-73.2 73.2 0 0 73.1-73.2 0 0 .1zM365.7 73.1l73.2 0 0 73.2-73.2 0 0-73.2z"/>
      </BaseIcon>
    </template>