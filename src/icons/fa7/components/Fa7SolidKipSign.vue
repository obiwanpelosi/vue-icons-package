<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7SolidKipSign',
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
        <path fill="currentColor" d="M340.8 88.3c13.4-11.5 15-31.7 3.5-45.1s-31.7-15-45.1-3.5L128 186.4 128 64c0-17.7-14.3-32-32-32S64 46.3 64 64l0 168-32 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l32 0 0 168c0 17.7 14.3 32 32 32s32-14.3 32-32l0-122.4 171.2 146.7c13.4 11.5 33.6 9.9 45.1-3.5s9.9-33.6-3.5-45.1L173.2 280 352 280c13.3 0 24-10.7 24-24s-10.7-24-24-24L173.2 232 340.8 88.3z"/>
      </BaseIcon>
    </template>