<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CiDesktopMouse1',
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
        <g id="Desktop_Mouse_1" data-name="Desktop Mouse 1">
    <path d="M13.435,2.065h-2.87a6.5,6.5,0,0,0-6.5,6.5v6.87a6.5,6.5,0,0,0,6.5,6.5h2.87a6.5,6.5,0,0,0,6.5-6.5V8.565A6.5,6.5,0,0,0,13.435,2.065Zm-8.37,6.5a5.51,5.51,0,0,1,5.5-5.5h.94v6.44H5.065Zm13.87,6.87a5.5,5.5,0,0,1-5.5,5.5h-2.87a5.5,5.5,0,0,1-5.5-5.5v-4.93h13.87Zm0-5.93h-6.43V3.065h.93a5.5,5.5,0,0,1,5.5,5.5Z" />
  </g>
      </BaseIcon>
    </template>