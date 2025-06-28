<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CiBrightnessUp',
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
        <g id="Brightness_Up" data-name="Brightness Up">
    <g>
      <path d="M12,17.5A5.5,5.5,0,1,1,17.5,12,5.506,5.506,0,0,1,12,17.5Zm0-10A4.5,4.5,0,1,0,16.5,12,4.505,4.505,0,0,0,12,7.5Z" />
      <circle cx="12" cy="3.063" r="1" />
      <circle cx="12" cy="20.937" r="1" />
      <circle cx="20.937" cy="12" r="1" />
      <circle cx="3.063" cy="12" r="1" />
      <circle cx="18.319" cy="5.681" r="1" />
      <circle cx="5.681" cy="18.319" r="1" />
      <circle cx="18.319" cy="18.319" r="1" />
      <circle cx="5.681" cy="5.681" r="1" />
    </g>
  </g>
      </BaseIcon>
    </template>