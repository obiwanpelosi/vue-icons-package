<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CiFileOn',
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
        <g id="File_On" data-name="File On">
    <path d="M19.485,7.35l-4.97-4.86a1.466,1.466,0,0,0-1.05-.43h-6.9a2.5,2.5,0,0,0-2.5,2.5V19.44a2.507,2.507,0,0,0,2.5,2.5h10.87a2.507,2.507,0,0,0,2.5-2.5V8.42A1.49,1.49,0,0,0,19.485,7.35Zm-1.27.15h-2.34a1.5,1.5,0,0,1-1.5-1.5V3.75Zm.72,11.94a1.5,1.5,0,0,1-1.5,1.5H6.565a1.5,1.5,0,0,1-1.5-1.5V4.56a1.5,1.5,0,0,1,1.5-1.5h6.81V6a2.5,2.5,0,0,0,2.5,2.5h3.06Z" />
  </g>
      </BaseIcon>
    </template>