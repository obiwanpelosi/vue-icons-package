<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CiSpeaker',
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
        <g id="Speaker">
    <g>
      <path d="M17.437,21.938H6.562a2.5,2.5,0,0,1-2.5-2.5V4.562a2.5,2.5,0,0,1,2.5-2.5H17.437a2.5,2.5,0,0,1,2.5,2.5V19.438A2.5,2.5,0,0,1,17.437,21.938ZM6.562,3.062a1.5,1.5,0,0,0-1.5,1.5V19.438a1.5,1.5,0,0,0,1.5,1.5H17.437a1.5,1.5,0,0,0,1.5-1.5V4.562a1.5,1.5,0,0,0-1.5-1.5Z" />
      <path d="M12,18.939a3.75,3.75,0,1,1,3.75-3.75A3.755,3.755,0,0,1,12,18.939Zm0-6.5a2.75,2.75,0,1,0,2.75,2.75A2.752,2.752,0,0,0,12,12.439Z" />
      <path d="M12,9.563a2.25,2.25,0,1,1,2.25-2.25A2.253,2.253,0,0,1,12,9.563Zm0-3.5a1.25,1.25,0,1,0,1.25,1.25A1.251,1.251,0,0,0,12,6.063Z" />
    </g>
  </g>
      </BaseIcon>
    </template>