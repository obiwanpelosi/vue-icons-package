<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'BxLogoPaypal',
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
        <path d="M19.554 9.488c.121.563.106 1.246-.04 2.051-.582 2.978-2.477 4.466-5.683 4.466h-.442a.666.666 0 0 0-.444.166.72.72 0 0 0-.239.427l-.041.189-.553 3.479-.021.151a.706.706 0 0 1-.247.426.666.666 0 0 1-.447.166H8.874a.395.395 0 0 1-.331-.15.457.457 0 0 1-.09-.363c.061-.373.148-.938.267-1.689.117-.75.206-1.314.267-1.689s.15-.938.272-1.685c.121-.748.212-1.31.271-1.685.033-.248.179-.371.433-.371h1.316c.893.013 1.682-.057 2.375-.211 1.172-.262 2.134-.744 2.886-1.449.685-.637 1.203-1.462 1.56-2.473.162-.47.277-.917.352-1.338.006-.041.014-.066.025-.074.008-.011.022-.014.035-.011a.378.378 0 0 1 .062.035c.524.398.854.941.98 1.632zm-1.728-2.836c0 .717-.154 1.508-.465 2.374-.537 1.562-1.547 2.618-3.037 3.168-.758.269-1.602.408-2.535.425 0 .006-.301.007-.904.007l-.903-.007c-.672 0-1.067.32-1.187.964-.013.053-.298 1.83-.855 5.329-.008.066-.048.102-.121.102H4.854a.473.473 0 0 1-.369-.165.469.469 0 0 1-.115-.39L6.702 3.664a.784.784 0 0 1 .276-.483.785.785 0 0 1 .519-.19h6.014c.228 0 .555.044.979.131.428.084.801.194 1.123.321.718.274 1.266.688 1.645 1.237.379.552.568 1.207.568 1.972z"/>
      </BaseIcon>
    </template>