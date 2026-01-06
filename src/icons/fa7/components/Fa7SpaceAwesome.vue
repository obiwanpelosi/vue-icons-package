<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7SpaceAwesome',
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
        <path fill="currentColor" d="M96 256l32 0 0 256-128 0 0-160 32 0 0-32 32 0 0-32 32 0 0-32zm416 96l0 160-128 0 0-256 32 0 0 32 32 0 0 32 32 0 0 32 32 0zM320 64l32 0 0 384-32 0 0-32-128 0 0 32-32 0 0-384 32 0 0-32 32 0 0-32 64 0 0 32 32 0 0 32zm-32 64l-64 0 0 64 64 0 0-64z"/>
      </BaseIcon>
    </template>