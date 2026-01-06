<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7Firstdraft',
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
          default: '0 0 384 512'
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
        <path fill="currentColor" d="M384 192l-64 0 0 128-128 0 0 128-192 0 0-25.6 166.4 0 0-128 128 0 0-128 89.6 0 0 25.6zm-25.6 38.4l0 128-128 0 0 128-166.4 0 0 25.6 192 0 0-128 128 0 0-153.6-25.6 0zm25.6 192l-89.6 0 0 89.6 25.6 0 0-64 64 0 0-25.6zM0 0l0 384 128 0 0-128 128 0 0-128 128 0 0-128-384 0z"/>
      </BaseIcon>
    </template>