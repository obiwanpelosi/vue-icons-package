<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CiTurnL1',
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
        <g id="Turn_L_1" data-name="Turn L 1">
    <path d="M20.939,9.509v10.93a.508.508,0,0,1-.5.5.5.5,0,0,1-.5-.5V9.509a3.5,3.5,0,0,0-3.5-3.5h-9.9l-.01,1.44a.5.5,0,0,1-.81.4l-2.47-1.96a.5.5,0,0,1,0-.78l2.49-1.94a.5.5,0,0,1,.81.4l-.01,1.44h9.9A4.507,4.507,0,0,1,20.939,9.509Z" />
  </g>
      </BaseIcon>
    </template>