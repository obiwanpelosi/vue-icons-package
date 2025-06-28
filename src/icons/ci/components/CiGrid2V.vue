<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CiGrid2V',
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
        <g id="Grid_2-V">
    <g>
      <path d="M18.436,20.937H15.5a2.5,2.5,0,0,1-2.5-2.5V5.565a2.5,2.5,0,0,1,2.5-2.5h2.933a2.5,2.5,0,0,1,2.5,2.5V18.437A2.5,2.5,0,0,1,18.436,20.937ZM15.5,4.065a1.5,1.5,0,0,0-1.5,1.5V18.437a1.5,1.5,0,0,0,1.5,1.5h2.933a1.5,1.5,0,0,0,1.5-1.5V5.565a1.5,1.5,0,0,0-1.5-1.5Z" />
      <path d="M8.5,20.937H5.564a2.5,2.5,0,0,1-2.5-2.5V5.565a2.5,2.5,0,0,1,2.5-2.5H8.5a2.5,2.5,0,0,1,2.5,2.5V18.437A2.5,2.5,0,0,1,8.5,20.937ZM5.564,4.065a1.5,1.5,0,0,0-1.5,1.5V18.437a1.5,1.5,0,0,0,1.5,1.5H8.5a1.5,1.5,0,0,0,1.5-1.5V5.565a1.5,1.5,0,0,0-1.5-1.5Z" />
    </g>
  </g>
      </BaseIcon>
    </template>