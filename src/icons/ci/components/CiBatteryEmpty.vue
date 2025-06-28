<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CiBatteryEmpty',
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
        <g id="Battery_Empty" data-name="Battery Empty">
    <path d="M17.505,18.5H4.065a2,2,0,0,1-2-2v-9a2,2,0,0,1,2-2h13.44a2,2,0,0,1,2,2v1h.93a1.5,1.5,0,0,1,1.5,1.5v4a1.5,1.5,0,0,1-1.5,1.5h-.93v1A2,2,0,0,1,17.505,18.5ZM4.065,6.5a1,1,0,0,0-1,1v9a1,1,0,0,0,1,1h13.44a1,1,0,0,0,1-1V15.25a.752.752,0,0,1,.75-.75h1.18a.5.5,0,0,0,.5-.5V10a.5.5,0,0,0-.5-.5h-1.18a.752.752,0,0,1-.75-.75V7.5a1,1,0,0,0-1-1Z" />
  </g>
      </BaseIcon>
    </template>