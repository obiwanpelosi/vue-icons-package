<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CiCreditCardOff',
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
        <g id="Credit_Card_Off" data-name="Credit Card Off">
    <g>
      <path d="M21.94,7.64v9.3a.5.5,0,0,1-.5.5.5.5,0,0,1-.5-.5V9.64H13.49a.75.75,0,0,1,0-1.5h7.45v-.5a1.5,1.5,0,0,0-1.5-1.5H9.89a.5.5,0,0,1,0-1h9.55A2.5,2.5,0,0,1,21.94,7.64Z" />
      <path d="M8.064,14.246h-3a.5.5,0,0,1,0-1h3a.5.5,0,0,1,0,1Z" />
      <path d="M18.935,14.248h-.944a.5.5,0,0,1,0-1h.944a.5.5,0,0,1,0,1Z" />
      <path d="M18.76,18.05,4.01,3.3c-.46-.46-1.17.25-.71.7L4.44,5.14a2.5,2.5,0,0,0-2.38,2.5v8.72a2.5,2.5,0,0,0,2.5,2.5h13.6L20,20.7c.45.46,1.16-.25.7-.71ZM3.06,7.64a1.5,1.5,0,0,1,1.5-1.5h.88c.66.67,1.33,1.34,2,2H3.06Zm9.49,5.61h-.12a.5.5,0,0,0-.5.5.508.508,0,0,0,.5.5h1.12l3.61,3.61H4.56a1.5,1.5,0,0,1-1.5-1.5V9.64H8.94Z" />
    </g>
  </g>
      </BaseIcon>
    </template>