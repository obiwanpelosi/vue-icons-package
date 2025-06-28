<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CiVolumeHigh',
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
        <g id="Volume_Hight" data-name="Volume Hight">
    <g>
      <path d="M13.816,19.937a1.446,1.446,0,0,1-.717-.194L9.43,17.623a3.257,3.257,0,0,0-1.625-.434H4.439a2.379,2.379,0,0,1-2.375-2.376V9.187A2.378,2.378,0,0,1,4.439,6.812H7.805A3.257,3.257,0,0,0,9.43,6.376L13.1,4.259A1.437,1.437,0,0,1,15.255,5.5V18.5a1.424,1.424,0,0,1-.718,1.245A1.445,1.445,0,0,1,13.816,19.937ZM4.439,7.812A1.377,1.377,0,0,0,3.064,9.187v5.626a1.378,1.378,0,0,0,1.375,1.376H7.805a4.254,4.254,0,0,1,2.125.569L13.6,18.876a.439.439,0,0,0,.657-.38V5.5a.438.438,0,0,0-.657-.379L9.93,7.242a4.251,4.251,0,0,1-2.125.57Z" />
      <path d="M18.407,6.262a7.79,7.79,0,0,1,.021,11.476c-.474.437.235,1.143.707.707a8.793,8.793,0,0,0-.021-12.89c-.474-.434-1.184.272-.707.707Z" />
      <path d="M16.91,9.031a4.021,4.021,0,0,1,.012,5.938c-.474.438.234,1.143.707.707a5.025,5.025,0,0,0-.012-7.352c-.474-.434-1.183.272-.707.707Z" />
    </g>
  </g>
      </BaseIcon>
    </template>