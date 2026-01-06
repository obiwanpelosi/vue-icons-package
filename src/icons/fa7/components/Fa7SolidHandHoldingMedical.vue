<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7SolidHandHoldingMedical',
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
        <path fill="currentColor" d="M240 24c0-13.3 10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 56 56 0c13.3 0 24 10.7 24 24l0 48c0 13.3-10.7 24-24 24l-56 0 0 56c0 13.3-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24l0-56-56 0c-13.3 0-24-10.7-24-24l0-48c0-13.3 10.7-24 24-24l56 0 0-56zM66.7 384l42.5-42.5c24-24 56.6-37.5 90.5-37.5L352 304c17.7 0 32 14.3 32 32s-14.3 32-32 32l-72 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l112.6 0 119.7-88.2c17.8-13.1 42.8-9.3 55.9 8.5s9.3 42.8-8.5 55.9L433.1 485.5c-23.4 17.2-51.6 26.5-80.7 26.5L32 512c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l34.7 0z"/>
      </BaseIcon>
    </template>