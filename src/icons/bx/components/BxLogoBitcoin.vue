<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'BxLogoBitcoin',
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
        <path d="m11.953 8.819-.547 2.19c.619.154 2.529.784 2.838-.456.322-1.291-1.673-1.579-2.291-1.734zm-.822 3.296-.603 2.415c.743.185 3.037.921 3.376-.441.355-1.422-2.029-1.789-2.773-1.974z"/><path d="M14.421 2.299C9.064.964 3.641 4.224 2.306 9.581.97 14.936 4.23 20.361 9.583 21.697c5.357 1.335 10.783-1.924 12.117-7.281 1.336-5.356-1.924-10.781-7.279-12.117zm1.991 8.275c-.145.974-.686 1.445-1.402 1.611.985.512 1.485 1.298 1.009 2.661-.592 1.691-1.998 1.834-3.87 1.48l-.454 1.82-1.096-.273.447-1.794a44.624 44.624 0 0 1-.875-.228l-.449 1.804-1.095-.275.454-1.823c-.257-.066-.517-.136-.782-.202L6.87 15l.546-1.256s.808.215.797.199c.311.077.448-.125.502-.261l.719-2.875.115.029a.864.864 0 0 0-.114-.037l.512-2.053c.013-.234-.066-.528-.511-.639.018-.011-.797-.198-.797-.198l.291-1.172 1.514.378-.001.005c.227.057.461.111.7.165l.449-1.802 1.097.273-.44 1.766c.294.067.591.135.879.207l.438-1.755 1.097.273-.449 1.802c1.384.479 2.396 1.195 2.198 2.525z"/>
      </BaseIcon>
    </template>