<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CgStark',
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
        <path
    d="M7.17222 18.0249C5.81662 17.2862 4.69522 16.1661 3.95526 14.791C3.01664 13.0467 2.75847 11.0163 3.23071 9.0927C3.70295 7.16908 4.87201 5.48904 6.51164 4.37775C8.15127 3.26646 10.1449 2.80295 12.1066 3.07692L11.67 6.20259C10.4822 6.03669 9.2751 6.31735 8.28231 6.99024C7.28951 7.66312 6.58164 8.68039 6.2957 9.84514C6.00976 11.0099 6.16608 12.2393 6.73442 13.2954C7.18247 14.1281 7.86148 14.8063 8.6823 15.2536L14.8278 3.97537L17.4621 5.4108C18.8177 6.14946 19.9391 7.26961 20.679 8.64469C21.6177 10.3889 21.8758 12.4193 21.4036 14.343C20.9314 16.2666 19.7623 17.9466 18.1227 19.0579C16.483 20.1692 14.4894 20.6327 12.5277 20.3587L12.9643 17.2331C14.1521 17.399 15.3592 17.1183 16.352 16.4454C17.3448 15.7725 18.0527 14.7553 18.3386 13.5905C18.6245 12.4258 18.4682 11.1964 17.8999 10.1402C17.4518 9.30761 16.7728 8.62938 15.952 8.18212L9.80647 19.4604L7.17222 18.0249Z"
    fill="currentColor"
  />
      </BaseIcon>
    </template>