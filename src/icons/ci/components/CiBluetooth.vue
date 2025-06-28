<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CiBluetooth',
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
        <g id="Bluetooth">
    <path d="M18.649,15.938,11.829,12l6.82-3.94a.984.984,0,0,0,.5-.87.968.968,0,0,0-.5-.861L12.029,2.5a.989.989,0,0,0-1,0,1,1,0,0,0-.5.87v7.769q-2.1-1.23-4.22-2.44c-.24-.139-.47-.279-.71-.409a.5.5,0,0,0-.51.86L10.039,12c-1.41.81-2.83,1.62-4.23,2.44-.24.129-.48.27-.72.41a.5.5,0,0,0,.51.86c1.65-.951,3.28-1.891,4.93-2.85v7.769a.993.993,0,0,0,.5.871.969.969,0,0,0,1,0l6.62-3.82a1.007,1.007,0,0,0,0-1.74Zm-7.12-12.57,6.62,3.82-6.62,3.83Zm0,17.259V12.988l6.62,3.82Z" />
  </g>
      </BaseIcon>
    </template>