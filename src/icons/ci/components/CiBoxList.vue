<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CiBoxList',
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
        <g id="Box_List" data-name="Box List">
    <g>
      <path d="M6.562,8.062h-2a1.5,1.5,0,0,1-1.5-1.5v-2a1.5,1.5,0,0,1,1.5-1.5h2a1.5,1.5,0,0,1,1.5,1.5v2A1.5,1.5,0,0,1,6.562,8.062Zm-2-4a.5.5,0,0,0-.5.5v2a.5.5,0,0,0,.5.5h2a.5.5,0,0,0,.5-.5v-2a.5.5,0,0,0-.5-.5Z" />
      <path d="M6.562,20.938h-2a1.5,1.5,0,0,1-1.5-1.5v-2a1.5,1.5,0,0,1,1.5-1.5h2a1.5,1.5,0,0,1,1.5,1.5v2A1.5,1.5,0,0,1,6.562,20.938Zm-2-4a.5.5,0,0,0-.5.5v2a.5.5,0,0,0,.5.5h2a.5.5,0,0,0,.5-.5v-2a.5.5,0,0,0-.5-.5Z" />
      <path d="M6.562,14.5h-2a1.5,1.5,0,0,1-1.5-1.5V11a1.5,1.5,0,0,1,1.5-1.5h2a1.5,1.5,0,0,1,1.5,1.5v2A1.5,1.5,0,0,1,6.562,14.5Zm-2-4a.5.5,0,0,0-.5.5v2a.5.5,0,0,0,.5.5h2a.5.5,0,0,0,.5-.5V11a.5.5,0,0,0-.5-.5Z" />
      <path d="M20.438,6.062h-9a.5.5,0,0,1,0-1h9a.5.5,0,0,1,0,1Z" />
      <path d="M20.438,12.5h-9a.5.5,0,0,1,0-1h9a.5.5,0,0,1,0,1Z" />
      <path d="M20.438,18.935h-9a.5.5,0,1,1,0-1h9a.5.5,0,0,1,0,1Z" />
    </g>
  </g>
      </BaseIcon>
    </template>