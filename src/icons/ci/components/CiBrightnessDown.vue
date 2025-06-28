<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CiBrightnessDown',
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
        <g id="Brightness_Down" data-name="Brightness Down">
    <g>
      <path d="M12,17.5A5.5,5.5,0,1,1,17.5,12,5.506,5.506,0,0,1,12,17.5Zm0-10A4.5,4.5,0,1,0,16.5,12,4.505,4.505,0,0,0,12,7.5Z" />
      <circle cx="12" cy="2.813" r="0.75" />
      <circle cx="12" cy="21.187" r="0.75" />
      <circle cx="21.187" cy="12" r="0.75" />
      <circle cx="2.813" cy="12" r="0.75" />
      <circle cx="18.496" cy="5.504" r="0.75" />
      <circle cx="5.504" cy="18.496" r="0.75" />
      <circle cx="18.496" cy="18.496" r="0.75" />
      <circle cx="5.504" cy="5.504" r="0.75" />
    </g>
  </g>
      </BaseIcon>
    </template>