<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7SolidXRay',
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
        <path fill="currentColor" d="M0 64C0 46.3 14.3 32 32 32l448 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l0 320c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 480c-17.7 0-32-14.3-32-32s14.3-32 32-32L32 96C14.3 96 0 81.7 0 64zm280 56c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 16-64 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l64 0 0 48-80 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l80 0 0 48-64 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l64 0 0 16c0 13.3 10.7 24 24 24s24-10.7 24-24l0-16 64 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-64 0 0-48 80 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-80 0 0-48 64 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-64 0 0-16z"/>
      </BaseIcon>
    </template>