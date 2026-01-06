<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7SolidRug',
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
        <path fill="currentColor" d="M24 64l56 0 0 384-56 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l8 0 0-40-8 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l8 0 0-32-8 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l8 0 0-32-8 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l8 0 0-40-8 0C10.7 112 0 101.3 0 88S10.7 64 24 64zm104 0l320 0 0 384-320 0 0-384zM576 88c0 13.3-10.7 24-24 24l-8 0 0 40 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-8 0 0 32 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-8 0 0 32 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-8 0 0 40 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-56 0 0-384 56 0c13.3 0 24 10.7 24 24z"/>
      </BaseIcon>
    </template>