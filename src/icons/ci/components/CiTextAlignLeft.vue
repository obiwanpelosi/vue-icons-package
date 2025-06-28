<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CiTextAlignLeft',
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
        <g id="Text_Align_Left" data-name="Text Align Left">
    <g>
      <path d="M20.438,4.063H3.563a.5.5,0,1,1,0-1H20.438a.5.5,0,1,1,0,1Z" />
      <path d="M12.562,8.5h-9a.5.5,0,0,1,0-1h9a.5.5,0,0,1,0,1Z" />
      <path d="M12.562,16.5h-9a.5.5,0,1,1,0-1h9a.5.5,0,0,1,0,1Z" />
      <path d="M20.436,12.5H3.562a.5.5,0,1,1,0-1H20.436a.5.5,0,0,1,0,1Z" />
      <path d="M20.436,20.937H3.562a.5.5,0,0,1,0-1H20.436a.5.5,0,0,1,0,1Z" />
    </g>
  </g>
      </BaseIcon>
    </template>