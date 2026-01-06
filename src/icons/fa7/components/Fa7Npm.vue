<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7Npm',
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
        <path fill="currentColor" d="M288 288l-32 0 0-64 32 0 0 64zM576 160l0 192-288 0 0 32-128 0 0-32-160 0 0-192 576 0zM160 192l-128 0 0 128 64 0 0-96 32 0 0 96 32 0 0-128zm160 0l-128 0 0 160 64 0 0-32 64 0 0-128zm224 0l-192 0 0 128 64 0 0-96 32 0 0 96 32 0 0-96 32 0 0 96 32 0 0-128z"/>
      </BaseIcon>
    </template>