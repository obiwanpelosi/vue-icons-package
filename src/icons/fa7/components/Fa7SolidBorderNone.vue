<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7SolidBorderNone',
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
        <path fill="currentColor" d="M32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zM160 32a32 32 0 1 0 0 64 32 32 0 1 0 0-64zM288 416c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zM160 480c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zM288 32a32 32 0 1 0 0 64 32 32 0 1 0 0-64zM416 480c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm0-384a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM32 32a32 32 0 1 0 0 64 32 32 0 1 0 0-64zM416 352a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM32 160a32 32 0 1 0 0 64 32 32 0 1 0 0-64zm0 192a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM416 160a32 32 0 1 0 0 64 32 32 0 1 0 0-64z"/>
      </BaseIcon>
    </template>