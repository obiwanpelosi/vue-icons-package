<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CiIndent',
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
        <g id="Indent">
    <g>
      <path d="M20.437,4.064H3.563a.5.5,0,0,1,0-1H20.437a.5.5,0,0,1,0,1Z" />
      <path d="M20.437,9.688h-9a.5.5,0,0,1,0-1h9a.5.5,0,0,1,0,1Z" />
      <path d="M20.437,15.312h-9a.5.5,0,0,1,0-1h9a.5.5,0,0,1,0,1Z" />
      <path d="M20.437,20.936H3.563a.5.5,0,1,1,0-1H20.437a.5.5,0,1,1,0,1Z" />
      <path d="M7.91,11.65a.492.492,0,0,1,0,.7l-2,2a.495.495,0,0,1-.7-.7L6.36,12.5H3.54a.5.5,0,0,1,0-1H6.35c-.38-.38-.76-.76-1.14-1.15a.495.495,0,0,1,.7-.7Z" />
    </g>
  </g>
      </BaseIcon>
    </template>