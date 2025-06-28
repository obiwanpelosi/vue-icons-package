<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CiSliderHorizontal',
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
        <g id="Slider_Horizontal" data-name="Slider Horizontal">
    <g>
      <path d="M21.45,7.5H9.99A2,2,0,0,0,8.06,6h-1A2,2,0,0,0,5.13,7.5H2.55a.5.5,0,0,0-.5.5.508.508,0,0,0,.5.5H5.13A2,2,0,0,0,7.06,10h1A2,2,0,0,0,9.99,8.5H21.45A.5.5,0,0,0,21.45,7.5ZM8.06,9h-1a1.006,1.006,0,0,1-1-.98V8a1,1,0,0,1,1-1h1a1,1,0,1,1,0,2Z" />
      <path d="M21.45,15.5H18.87A2,2,0,0,0,16.94,14h-1a2,2,0,0,0-1.93,1.5H2.55a.5.5,0,0,0,0,1H14.01A2,2,0,0,0,15.94,18h1a2,2,0,0,0,1.93-1.5h2.58a.5.5,0,0,0,.5-.5A.508.508,0,0,0,21.45,15.5Zm-3.51.5a1,1,0,0,1-1,1h-1a1,1,0,1,1,0-2h1a1.006,1.006,0,0,1,1,.98Z" />
    </g>
  </g>
      </BaseIcon>
    </template>