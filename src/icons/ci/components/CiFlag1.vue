<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CiFlag1',
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
        <g id="Flag_1" data-name="Flag 1">
    <path d="M20.565,3.18a.809.809,0,0,0-.81-.02l-1.13.56c-1.63.87-3.82.83-6.5-.13a9.141,9.141,0,0,0-7.3.52l-.76.41V3.56a.5.5,0,0,0-1,0V20.44a.5.5,0,0,0,1,0V15.9a.836.836,0,0,0,.2-.08l1.03-.55a8.163,8.163,0,0,1,6.5-.46c2.95,1.06,5.41,1.08,7.3.07l1.44-.72a.759.759,0,0,0,.4-.66V3.82A.751.751,0,0,0,20.565,3.18Zm-.63,10.16-1.31.66c-1.63.87-3.82.83-6.5-.13a9.141,9.141,0,0,0-7.3.52l-.76.4V5.65L5.3,4.99a8.122,8.122,0,0,1,6.5-.46c2.95,1.06,5.41,1.08,7.29.08l.85-.43Z" />
  </g>
      </BaseIcon>
    </template>