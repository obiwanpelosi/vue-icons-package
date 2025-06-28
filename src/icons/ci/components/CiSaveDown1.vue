<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CiSaveDown1',
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
        <g id="Save_Down_1" data-name="Save Down 1">
    <g>
      <path d="M17.617,6.383a7.944,7.944,0,0,1-1.748,12.568A8.028,8.028,0,0,1,4.283,13.908,8.028,8.028,0,0,1,6.378,6.391c.451-.46-.256-1.168-.707-.707A8.946,8.946,0,0,0,15.427,20.27a8.946,8.946,0,0,0,2.9-14.594c-.451-.461-1.158.247-.707.707Z" />
      <path d="M15.355,10.6l-3,3a.5.5,0,0,1-.35.15.508.508,0,0,1-.36-.15l-3-3a.5.5,0,0,1,.71-.71l2.14,2.14V3.555a.508.508,0,0,1,.5-.5.5.5,0,0,1,.5.5v8.49l2.15-2.16a.5.5,0,0,1,.71.71Z" />
    </g>
  </g>
      </BaseIcon>
    </template>