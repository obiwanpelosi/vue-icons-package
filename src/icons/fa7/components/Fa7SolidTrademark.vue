<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7SolidTrademark',
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
          default: '0 0 640 512'
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
        <path fill="currentColor" d="M346.6 110.2c-7.8-11.7-22.4-17-35.9-12.9S288 113.9 288 128l0 256c0 17.7 14.3 32 32 32s32-14.3 32-32l0-150.3 69.4 104.1c5.9 8.9 15.9 14.2 26.6 14.2s20.7-5.3 26.6-14.2L544 233.7 544 384c0 17.7 14.3 32 32 32s32-14.3 32-32l0-256c0-14.1-9.2-26.5-22.7-30.6s-28.1 1.1-35.9 12.9L448 262.3 346.6 110.2zM32 96C14.3 96 0 110.3 0 128s14.3 32 32 32l64 0 0 224c0 17.7 14.3 32 32 32s32-14.3 32-32l0-224 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 96z"/>
      </BaseIcon>
    </template>