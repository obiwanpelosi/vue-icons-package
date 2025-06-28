<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CiGPS',
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
        <g id="GPS">
    <g>
      <path d="M12,14.5A2.5,2.5,0,1,1,14.5,12,2.5,2.5,0,0,1,12,14.5Zm0-4A1.5,1.5,0,1,0,13.5,12,1.5,1.5,0,0,0,12,10.5Z" />
      <path d="M21.435,11.505h-1.46a7.98,7.98,0,0,0-7.48-7.48V2.565a.508.508,0,0,0-.5-.5.515.515,0,0,0-.5.5v1.46a8,8,0,0,0-7.48,7.48H2.565a.5.5,0,1,0,0,1h1.45a8.012,8.012,0,0,0,7.48,7.48v1.45a.508.508,0,0,0,.5.5.5.5,0,0,0,.5-.5v-1.45a8,8,0,0,0,7.48-7.48h1.46a.5.5,0,0,0,0-1ZM12,19.005a7,7,0,1,1,7-7A7.021,7.021,0,0,1,12,19.005Z" />
    </g>
  </g>
      </BaseIcon>
    </template>