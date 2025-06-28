<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CiRepeat',
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
        <rect id="Repeat" x="0" y="0" width="24" height="24" style="fill:none;"/>
    <g id="Repeat1" serif:id="Repeat">
        <path d="M2.078,17.562c-0.01,-0.039 -0.016,-0.08 -0.016,-0.123c0,-0.138 0.056,-0.263 0.147,-0.353c0.008,-0.009 1.416,-1.417 2,-2c0.198,-0.198 0.507,-0.183 0.707,-0c0.199,0.183 0.185,0.522 -0,0.707l-1.147,1.146l15.669,0c0.828,0 1.5,-0.671 1.5,-1.5l0,-3.439c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,3.439c0,1.381 -1.12,2.5 -2.5,2.5l-15.669,0l1.147,1.147c0.198,0.198 0.183,0.507 -0,0.707c-0.183,0.199 -0.522,0.185 -0.707,-0l-2,-2c-0.066,-0.063 -0.11,-0.143 -0.131,-0.231Zm19.845,-11.105c0.01,0.039 0.015,0.08 0.015,0.122c0,0.138 -0.056,0.263 -0.147,0.354c-0.008,0.008 -1.416,1.417 -2,2c-0.197,0.198 -0.507,0.183 -0.707,-0c-0.199,-0.183 -0.185,-0.522 0,-0.707l1.147,-1.147l-15.669,0c-0.828,0 -1.5,0.672 -1.5,1.5l0,3.439c-0,0.276 -0.224,0.5 -0.5,0.5c-0.276,0 -0.5,-0.224 -0.5,-0.5l0,-3.439c0,-1.381 1.12,-2.5 2.5,-2.5l15.669,0l-1.146,-1.146c-0.198,-0.198 -0.183,-0.507 -0,-0.707c0.183,-0.199 0.522,-0.185 0.707,-0l2,2c0.065,0.063 0.11,0.143 0.131,0.231Z"/>
    </g>
      </BaseIcon>
    </template>