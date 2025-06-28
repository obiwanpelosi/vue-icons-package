<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CiGrid42',
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
        <g id="Grid_4-2">
    <g>
      <g>
        <path d="M8.5,13.933H5.563a2.5,2.5,0,0,1-2.5-2.5V5.563a2.5,2.5,0,0,1,2.5-2.5H8.5a2.5,2.5,0,0,1,2.5,2.5v5.87A2.5,2.5,0,0,1,8.5,13.933ZM5.563,4.063a1.5,1.5,0,0,0-1.5,1.5v5.87a1.5,1.5,0,0,0,1.5,1.5H8.5a1.5,1.5,0,0,0,1.5-1.5V5.563a1.5,1.5,0,0,0-1.5-1.5Z" />
        <path d="M8.5,20.935H5.564a2.5,2.5,0,0,1,0-5H8.5a2.5,2.5,0,1,1,0,5Zm-2.934-4a1.5,1.5,0,0,0,0,3H8.5a1.5,1.5,0,1,0,0-3Z" />
      </g>
      <g>
        <path d="M18.436,20.935H15.5a2.5,2.5,0,0,1-2.5-2.5v-5.87a2.5,2.5,0,0,1,2.5-2.5h2.934a2.5,2.5,0,0,1,2.5,2.5v5.87A2.5,2.5,0,0,1,18.436,20.935ZM15.5,11.065a1.5,1.5,0,0,0-1.5,1.5v5.87a1.5,1.5,0,0,0,1.5,1.5h2.934a1.5,1.5,0,0,0,1.5-1.5v-5.87a1.5,1.5,0,0,0-1.5-1.5Z" />
        <path d="M18.436,8.063H15.5a2.5,2.5,0,0,1,0-5h2.934a2.5,2.5,0,0,1,0,5Zm-2.934-4a1.5,1.5,0,0,0,0,3h2.934a1.5,1.5,0,0,0,0-3Z" />
      </g>
    </g>
  </g>
      </BaseIcon>
    </template>