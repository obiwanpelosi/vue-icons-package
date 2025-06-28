<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CiSquareChevUp',
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
        <g id="Square_Chev_Up" data-name="Square Chev Up">
    <g>
      <path d="M15.35,13.15a.495.495,0,0,1-.7.7L12,11.21,9.35,13.85a.495.495,0,0,1-.7-.7l3-3a.492.492,0,0,1,.7,0Z" />
      <path d="M20.937,5.563V18.437a2.5,2.5,0,0,1-2.5,2.5H5.563a2.5,2.5,0,0,1-2.5-2.5V5.563a2.5,2.5,0,0,1,2.5-2.5H18.437A2.5,2.5,0,0,1,20.937,5.563ZM4.063,18.437a1.5,1.5,0,0,0,1.5,1.5H18.437a1.5,1.5,0,0,0,1.5-1.5V5.563a1.5,1.5,0,0,0-1.5-1.5H5.563a1.5,1.5,0,0,0-1.5,1.5Z" />
    </g>
  </g>
      </BaseIcon>
    </template>