<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CiGrid31',
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
        <g id="Grid_3-1">
    <g>
      <g>
        <path d="M11.434,20.936H5.563a2.5,2.5,0,0,1-2.5-2.5V15.5a2.5,2.5,0,0,1,2.5-2.5h5.871a2.5,2.5,0,0,1,2.5,2.5v2.933A2.5,2.5,0,0,1,11.434,20.936ZM5.563,14a1.5,1.5,0,0,0-1.5,1.5v2.933a1.5,1.5,0,0,0,1.5,1.5h5.871a1.5,1.5,0,0,0,1.5-1.5V15.5a1.5,1.5,0,0,0-1.5-1.5Z" />
        <path d="M18.435,20.936a2.5,2.5,0,0,1-2.5-2.5V15.5a2.5,2.5,0,0,1,5,0v2.934A2.5,2.5,0,0,1,18.435,20.936Zm0-6.934a1.5,1.5,0,0,0-1.5,1.5v2.934a1.5,1.5,0,0,0,3,0V15.5A1.5,1.5,0,0,0,18.435,14Z" />
      </g>
      <path d="M18.435,11H5.563a2.5,2.5,0,0,1-2.5-2.5V5.564a2.5,2.5,0,0,1,2.5-2.5H18.435a2.5,2.5,0,0,1,2.5,2.5V8.5A2.5,2.5,0,0,1,18.435,11ZM5.563,4.064a1.5,1.5,0,0,0-1.5,1.5V8.5a1.5,1.5,0,0,0,1.5,1.5H18.435a1.5,1.5,0,0,0,1.5-1.5V5.564a1.5,1.5,0,0,0-1.5-1.5Z" />
    </g>
  </g>
      </BaseIcon>
    </template>