<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'BxRegularBrush',
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
        <path d="M13.707 2.293a.999.999 0 0 0-1.414 0l-5.84 5.84c-.015-.001-.029-.009-.044-.009a.997.997 0 0 0-.707.293L4.288 9.831a2.985 2.985 0 0 0-.878 2.122c0 .802.313 1.556.879 2.121l.707.707-2.122 2.122A2.92 2.92 0 0 0 2 19.012a2.968 2.968 0 0 0 1.063 2.308c.519.439 1.188.68 1.885.68.834 0 1.654-.341 2.25-.937l2.04-2.039.707.706c1.134 1.133 3.109 1.134 4.242.001l1.415-1.414a.997.997 0 0 0 .293-.707c0-.026-.013-.05-.015-.076l5.827-5.827a.999.999 0 0 0 0-1.414l-8-8zm-.935 16.024a1.023 1.023 0 0 1-1.414-.001l-1.414-1.413a.999.999 0 0 0-1.414 0l-2.746 2.745a1.19 1.19 0 0 1-.836.352.91.91 0 0 1-.594-.208A.978.978 0 0 1 4 19.01a.959.959 0 0 1 .287-.692l2.829-2.829a.999.999 0 0 0 0-1.414L5.701 12.66a.99.99 0 0 1-.292-.706c0-.268.104-.519.293-.708l.707-.707 7.071 7.072-.708.706zm1.889-2.392L8.075 9.339 13 4.414 19.586 11l-4.925 4.925z"/>
      </BaseIcon>
    </template>