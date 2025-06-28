<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CiMaximize2',
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
        <g id="Maximize_2" data-name="Maximize 2">
    <g>
      <path d="M10.513,3.066H4.93a2.058,2.058,0,0,0-1.15.22,1.6,1.6,0,0,0-.717,1.437v5.793a.5.5,0,0,0,1,0V5.107a2.521,2.521,0,0,1,.022-.689c.115-.373.469-.352.777-.352h5.651a.5.5,0,0,0,0-1Z" />
      <path d="M3.063,13.488v5.583a2.057,2.057,0,0,0,.221,1.15,1.6,1.6,0,0,0,1.436.717h5.793a.5.5,0,0,0,0-1H5.1a2.483,2.483,0,0,1-.689-.022c-.372-.115-.352-.469-.352-.777V13.488a.5.5,0,0,0-1,0Z" />
      <path d="M13.487,20.934H19.07a2.058,2.058,0,0,0,1.15-.22,1.6,1.6,0,0,0,.717-1.437V13.484a.5.5,0,0,0-1,0v5.409a2.521,2.521,0,0,1-.022.689c-.115.373-.469.352-.777.352H13.487a.5.5,0,0,0,0,1Z" />
      <path d="M20.937,10.512V4.929a2.057,2.057,0,0,0-.221-1.15,1.6,1.6,0,0,0-1.436-.717H13.487a.5.5,0,0,0,0,1H18.9a2.483,2.483,0,0,1,.689.022c.372.115.352.469.352.777v5.651a.5.5,0,0,0,1,0Z" />
    </g>
  </g>
      </BaseIcon>
    </template>