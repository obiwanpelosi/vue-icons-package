<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CiCreditCard2',
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
          default: '0 0 24 24'
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
        <g id="Credit_Card_2" data-name="Credit Card 2">
    <g>
      <path d="M19.437,18.859H4.563a2.5,2.5,0,0,1-2.5-2.5V7.641a2.5,2.5,0,0,1,2.5-2.5H19.437a2.5,2.5,0,0,1,2.5,2.5v8.718A2.5,2.5,0,0,1,19.437,18.859ZM4.563,6.141a1.5,1.5,0,0,0-1.5,1.5v8.718a1.5,1.5,0,0,0,1.5,1.5H19.437a1.5,1.5,0,0,0,1.5-1.5V7.641a1.5,1.5,0,0,0-1.5-1.5Z" />
      <path d="M8.063,14.247h-3a.5.5,0,1,1,0-1h3a.5.5,0,1,1,0,1Z" />
      <path d="M18.934,14.249h-6.5a.5.5,0,0,1,0-1h6.5a.5.5,0,0,1,0,1Z" />
      <rect x="16.434" y="7.14" width="2" height="4" rx="0.5" transform="translate(8.293 26.574) rotate(-90)" />
    </g>
  </g>
      </BaseIcon>
    </template>