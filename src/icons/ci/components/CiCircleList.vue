<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CiCircleList',
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
        <g id="Circle_List" data-name="Circle List">
    <g>
      <path d="M20.438,6.062h-9a.5.5,0,0,1,0-1h9a.5.5,0,0,1,0,1Z" />
      <path d="M20.438,12.5h-9a.5.5,0,0,1,0-1h9a.5.5,0,0,1,0,1Z" />
      <path d="M20.438,18.935h-9a.5.5,0,1,1,0-1h9a.5.5,0,0,1,0,1Z" />
      <path d="M5.562,8.062a2.5,2.5,0,1,1,2.5-2.5A2.5,2.5,0,0,1,5.562,8.062Zm0-4a1.5,1.5,0,1,0,1.5,1.5A1.5,1.5,0,0,0,5.562,4.062Z" />
      <path d="M5.562,14.5a2.5,2.5,0,1,1,2.5-2.5A2.5,2.5,0,0,1,5.562,14.5Zm0-4a1.5,1.5,0,1,0,1.5,1.5A1.5,1.5,0,0,0,5.562,10.5Z" />
      <path d="M5.562,20.938a2.5,2.5,0,1,1,2.5-2.5A2.5,2.5,0,0,1,5.562,20.938Zm0-4a1.5,1.5,0,1,0,1.5,1.5A1.5,1.5,0,0,0,5.562,16.938Z" />
    </g>
  </g>
      </BaseIcon>
    </template>