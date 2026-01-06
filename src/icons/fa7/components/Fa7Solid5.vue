<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7Solid5',
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
          default: '0 0 320 512'
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
        <path fill="currentColor" d="M0 64C0 46.3 14.3 32 32 32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-192 0 0 112 120 0c75.1 0 136 60.9 136 136S259.1 480 184 480L32 480c-17.7 0-32-14.3-32-32s14.3-32 32-32l152 0c39.8 0 72-32.2 72-72s-32.2-72-72-72L32 272c-17.7 0-32-14.3-32-32L0 64z"/>
      </BaseIcon>
    </template>