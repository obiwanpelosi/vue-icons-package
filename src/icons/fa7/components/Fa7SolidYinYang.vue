<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7SolidYinYang',
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
        <path fill="currentColor" d="M224 160a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32 352a256 256 0 1 0 0-512 256 256 0 1 0 0 512zm0-448c53 0 96 43 96 96s-43 96-96 96-96 43-96 96 43 96 96 96C150 448 64 362 64 256S150 64 256 64zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/>
      </BaseIcon>
    </template>