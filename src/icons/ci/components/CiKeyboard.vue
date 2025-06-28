<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CiKeyboard',
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
        <g id="Keyboard">
    <g>
      <path d="M19.437,18.5H4.562a2.5,2.5,0,0,1-2.5-2.5V8a2.5,2.5,0,0,1,2.5-2.5H19.437a2.5,2.5,0,0,1,2.5,2.5v8A2.5,2.5,0,0,1,19.437,18.5ZM4.562,6.5A1.5,1.5,0,0,0,3.062,8v8a1.5,1.5,0,0,0,1.5,1.5H19.437a1.5,1.5,0,0,0,1.5-1.5V8a1.5,1.5,0,0,0-1.5-1.5Z" />
      <path d="M5.548,16.5h12.9a.5.5,0,0,0,0-1H5.548a.5.5,0,0,0,0,1Z" />
      <g>
        <circle cx="5.82" cy="9.248" r="0.75" />
        <circle cx="9.94" cy="9.248" r="0.75" />
        <circle cx="14.06" cy="9.248" r="0.75" />
        <circle cx="18.18" cy="9.248" r="0.75" />
      </g>
      <g>
        <circle cx="5.82" cy="12.998" r="0.75" />
        <circle cx="9.94" cy="12.998" r="0.75" />
        <circle cx="14.06" cy="12.998" r="0.75" />
        <circle cx="18.18" cy="12.998" r="0.75" />
      </g>
    </g>
  </g>
      </BaseIcon>
    </template>