<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CiSignpostL1',
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
        <g id="Signpost_L_1" data-name="Signpost L 1">
    <path d="M20.437,16H6.536a2.489,2.489,0,0,1-1.744-.709L2.542,13.1a1.5,1.5,0,0,1,.007-2.2L4.792,8.709A2.483,2.483,0,0,1,6.536,8h13.9a1.5,1.5,0,0,1,1.5,1.5v5A1.5,1.5,0,0,1,20.437,16ZM6.536,9a1.491,1.491,0,0,0-1.046.425l-2.255,2.2A.5.5,0,0,0,3.063,12a.494.494,0,0,0,.162.369l.01.01,2.254,2.2A1.492,1.492,0,0,0,6.536,15h13.9a.5.5,0,0,0,.5-.5v-5a.5.5,0,0,0-.5-.5Z" />
  </g>
      </BaseIcon>
    </template>