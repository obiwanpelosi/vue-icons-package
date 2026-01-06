<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7SolidChessBoard',
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
          default: '0 0 448 512'
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
        <path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm64 64l0 64 64 0 0-64 64 0 0 64 64 0 0-64 64 0 0 64-64 0 0 64 64 0 0 64-64 0 0 64 64 0 0 64-64 0 0-64-64 0 0 64-64 0 0-64-64 0 0 64-64 0 0-64 64 0 0-64-64 0 0-64 64 0 0-64-64 0 0-64 64 0zm64 128l64 0 0-64-64 0 0 64zm0 64l0-64-64 0 0 64 64 0zm64 0l-64 0 0 64 64 0 0-64zm0 0l64 0 0-64-64 0 0 64z"/>
      </BaseIcon>
    </template>