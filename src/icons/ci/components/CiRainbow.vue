<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CiRainbow',
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
        <g id="Rainbow">
    <g>
      <path d="M3.089,16.71A9,9,0,0,1,8.97,8.326,8.912,8.912,0,0,1,20.911,16.71a.5.5,0,0,0,1,0,10.033,10.033,0,0,0-6.46-9.291,9.981,9.981,0,0,0-11.06,2.944,10.058,10.058,0,0,0-2.3,6.347.5.5,0,0,0,1,0Z" />
      <path d="M5.985,16.71A6.078,6.078,0,0,1,12,10.7a6.078,6.078,0,0,1,6.015,6.015.5.5,0,0,0,1,0A7.013,7.013,0,0,0,6.606,12.228,7.151,7.151,0,0,0,4.985,16.71a.5.5,0,0,0,1,0Z" />
      <path d="M8.88,16.71a3.12,3.12,0,0,1,6.24,0,.5.5,0,0,0,1,0,4.119,4.119,0,0,0-7.255-2.669A4.219,4.219,0,0,0,7.88,16.71a.5.5,0,0,0,1,0Z" />
    </g>
  </g>
      </BaseIcon>
    </template>