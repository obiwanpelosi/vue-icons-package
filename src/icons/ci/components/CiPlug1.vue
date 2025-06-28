<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CiPlug1',
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
        <g id="Plug_1" data-name="Plug 1">
    <path d="M17.305,5.755H15.5V2.545a.5.5,0,0,0-1,0v3.21h-5V2.545a.5.5,0,0,0-1,0v3.21H6.7a1.566,1.566,0,0,0-1.57,1.57v4.28a7.046,7.046,0,0,0,6.37,7.11v2.72a.5.5,0,0,0,1,0v-2.7a6.874,6.874,0,0,0,6.38-6.86V7.325A1.573,1.573,0,0,0,17.305,5.755Zm.57,6.12a5.875,5.875,0,0,1-6.06,5.87,6.054,6.054,0,0,1-5.69-6.14V7.325a.563.563,0,0,1,.57-.57h10.61a.57.57,0,0,1,.57.57Z" />
  </g>
      </BaseIcon>
    </template>