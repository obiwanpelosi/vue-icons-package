<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7SolidJpy',
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
          default: '0 0 384 512'
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
        <path fill="currentColor" d="M74.9 46.7c-9.6-14.9-29.4-19.2-44.2-9.6S11.5 66.4 21.1 81.3L143.7 272 88 272c-13.3 0-24 10.7-24 24s10.7 24 24 24l72 0 0 32-72 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l72 0 0 48c0 17.7 14.3 32 32 32s32-14.3 32-32l0-48 72 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-72 0 0-32 72 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-55.7 0 122.6-190.7c9.6-14.9 5.3-34.7-9.6-44.2s-34.7-5.3-44.2 9.6L192 228.8 74.9 46.7z"/>
      </BaseIcon>
    </template>