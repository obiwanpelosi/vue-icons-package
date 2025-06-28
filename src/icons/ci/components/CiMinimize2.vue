<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CiMinimize2',
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
        <g id="Minimize_2" data-name="Minimize 2">
    <g>
      <path d="M3.563,11.016H9.146A2.057,2.057,0,0,0,10.3,10.8a1.6,1.6,0,0,0,.717-1.436V3.566a.5.5,0,0,0-1,0V8.974a2.481,2.481,0,0,1-.022.689c-.115.373-.468.353-.777.353H3.563a.5.5,0,0,0,0,1Z" />
      <path d="M11.013,20.438V14.855a2.065,2.065,0,0,0-.22-1.15,1.6,1.6,0,0,0-1.437-.717H3.563a.5.5,0,0,0,0,1H8.972a2.482,2.482,0,0,1,.689.022c.373.115.352.469.352.777v5.651a.5.5,0,0,0,1,0Z" />
      <path d="M20.437,12.984H14.854a2.057,2.057,0,0,0-1.15.221,1.6,1.6,0,0,0-.717,1.436v5.793a.5.5,0,0,0,1,0V15.026a2.481,2.481,0,0,1,.022-.689c.115-.373.468-.353.777-.353h5.651a.5.5,0,0,0,0-1Z" />
      <path d="M12.987,3.562V9.145a2.065,2.065,0,0,0,.22,1.15,1.6,1.6,0,0,0,1.437.717h5.793a.5.5,0,0,0,0-1H15.028a2.482,2.482,0,0,1-.689-.022c-.373-.115-.352-.469-.352-.777V3.562a.5.5,0,0,0-1,0Z" />
    </g>
  </g>
      </BaseIcon>
    </template>