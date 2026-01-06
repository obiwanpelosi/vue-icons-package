<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7GetPocket',
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
        <path fill="currentColor" d="M407.6 64l-367 0C18.5 64 0 82.5 0 104.6L0 239.8C0 364.5 99.7 464 224.2 464 348.2 464 448 364.5 448 239.8l0-135.2C448 82.2 430.3 64 407.6 64zm-162 268.5c-12.4 11.8-31.4 11.1-42.4 0-113.7-108.9-114.9-105.1-114.9-123.2 0-16.9 13.8-30.7 30.7-30.7 17 0 16.1 3.8 105.2 89.3 90.6-86.9 88.6-89.3 105.5-89.3s30.7 13.8 30.7 30.7c0 17.8-2.9 15.7-114.8 123.2z"/>
      </BaseIcon>
    </template>