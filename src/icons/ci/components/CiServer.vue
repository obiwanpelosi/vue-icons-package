<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CiServer',
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
        <g id="Server">
    <g>
      <path d="M20.437,11H3.563a1.5,1.5,0,0,1-1.5-1.5V5.565a1.5,1.5,0,0,1,1.5-1.5H20.437a1.5,1.5,0,0,1,1.5,1.5v3.93A1.5,1.5,0,0,1,20.437,11ZM3.563,5.065a.5.5,0,0,0-.5.5v3.93a.5.5,0,0,0,.5.5H20.437a.5.5,0,0,0,.5-.5V5.565a.5.5,0,0,0-.5-.5Z" />
      <path d="M20.437,19.935H3.563a1.5,1.5,0,0,1-1.5-1.5v-3.93a1.5,1.5,0,0,1,1.5-1.5H20.437a1.5,1.5,0,0,1,1.5,1.5v3.93A1.5,1.5,0,0,1,20.437,19.935ZM3.563,14.005a.5.5,0,0,0-.5.5v3.93a.5.5,0,0,0,.5.5H20.437a.5.5,0,0,0,.5-.5v-3.93a.5.5,0,0,0-.5-.5Z" />
      <circle cx="5.563" cy="7.53" r="0.5" />
      <circle cx="7.563" cy="7.53" r="0.5" />
      <path d="M13.452,8.03a.5.5,0,0,1,0-1h5a.5.5,0,0,1,0,1Z" />
      <circle cx="5.563" cy="16.47" r="0.5" />
      <circle cx="7.563" cy="16.47" r="0.5" />
      <path d="M13.452,16.97a.5.5,0,0,1,0-1h5a.5.5,0,0,1,0,1Z" />
    </g>
  </g>
      </BaseIcon>
    </template>