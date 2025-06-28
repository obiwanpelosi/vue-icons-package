<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CiSquareChevLeft',
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
        <g id="Square_Chev_Left" data-name="Square Chev Left">
    <g>
      <path d="M11.21,12l2.64,2.65a.495.495,0,0,1-.7.7c-.13-.12-.25-.24-.38-.37-.87-.87-1.75-1.75-2.62-2.63a.492.492,0,0,1,0-.7l3-3a.495.495,0,0,1,.7.7Z" />
      <path d="M18.437,20.939H5.562a2.5,2.5,0,0,1-2.5-2.5V5.566a2.5,2.5,0,0,1,2.5-2.5H18.437a2.5,2.5,0,0,1,2.5,2.5V18.439A2.5,2.5,0,0,1,18.437,20.939ZM5.562,4.066a1.5,1.5,0,0,0-1.5,1.5V18.439a1.5,1.5,0,0,0,1.5,1.5H18.437a1.5,1.5,0,0,0,1.5-1.5V5.566a1.5,1.5,0,0,0-1.5-1.5Z" />
    </g>
  </g>
      </BaseIcon>
    </template>