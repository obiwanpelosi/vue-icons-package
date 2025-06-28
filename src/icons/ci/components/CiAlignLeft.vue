<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CiAlignLeft',
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
        <g id="Align_Left" data-name="Align Left">
    <g>
      <path d="M3.078,3.548v16.9a.5.5,0,0,0,1,0V3.548a.5.5,0,0,0-1,0Z" />
      <path d="M18.422,11.5H7.582A2.5,2.5,0,0,1,5.082,9V6.565a2.5,2.5,0,0,1,2.5-2.5h10.84a2.5,2.5,0,0,1,2.5,2.5V9A2.5,2.5,0,0,1,18.422,11.5ZM7.582,5.065a1.5,1.5,0,0,0-1.5,1.5V9a1.5,1.5,0,0,0,1.5,1.5h10.84a1.5,1.5,0,0,0,1.5-1.5V6.565a1.5,1.5,0,0,0-1.5-1.5Z" />
      <path d="M13.451,19.938H7.582a2.5,2.5,0,0,1-2.5-2.5V15a2.5,2.5,0,0,1,2.5-2.5h5.869a2.5,2.5,0,0,1,2.5,2.5v2.436A2.5,2.5,0,0,1,13.451,19.938ZM7.582,13.5a1.5,1.5,0,0,0-1.5,1.5v2.436a1.5,1.5,0,0,0,1.5,1.5h5.869a1.5,1.5,0,0,0,1.5-1.5V15a1.5,1.5,0,0,0-1.5-1.5Z" />
    </g>
  </g>
      </BaseIcon>
    </template>