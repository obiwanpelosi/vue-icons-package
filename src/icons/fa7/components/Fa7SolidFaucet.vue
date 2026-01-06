<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7SolidFaucet',
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
        <path fill="currentColor" d="M192 64c0-17.7 14.3-32 32-32s32 14.3 32 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-96 0 0 64 18.7 0c8.5 0 16.6 3.4 22.6 9.4l22.6 22.6 32 0c88.4 0 160 71.6 160 160 0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32s-14.3-32-32-32l-36.1 0c-20.2 29-53.9 48-91.9 48s-71.7-19-91.9-48L32 352c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l96 0 22.6-22.6c6-6 14.1-9.4 22.6-9.4l18.7 0 0-64-96 0c-17.7 0-32-14.3-32-32S78.3 64 96 64l96 0z"/>
      </BaseIcon>
    </template>