<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CiBatteryCharging',
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
        <g id="Battery_Charging" data-name="Battery Charging">
    <g>
      <path d="M17.505,18.5H4.065a2,2,0,0,1-2-2v-9a2,2,0,0,1,2-2h13.44a2,2,0,0,1,2,2v1h.93a1.5,1.5,0,0,1,1.5,1.5v4a1.5,1.5,0,0,1-1.5,1.5h-.93v1A2,2,0,0,1,17.505,18.5ZM4.065,6.5a1,1,0,0,0-1,1v9a1,1,0,0,0,1,1h13.44a1,1,0,0,0,1-1V15.25a.752.752,0,0,1,.75-.75h1.18a.5.5,0,0,0,.5-.5V10a.5.5,0,0,0-.5-.5h-1.18a.752.752,0,0,1-.75-.75V7.5a1,1,0,0,0-1-1Z" />
      <path d="M13.174,11.191H11.891a.11.11,0,0,1-.1-.15l.655-1.669a.251.251,0,0,0-.233-.342H9.274a.248.248,0,0,0-.231.157L8.292,11.04a.11.11,0,0,0,.1.151H9.829a.11.11,0,0,1,.1.144l-.776,3.53a.085.085,0,0,0,.139.081l3.947-3.561A.109.109,0,0,0,13.174,11.191Z" />
    </g>
  </g>
      </BaseIcon>
    </template>