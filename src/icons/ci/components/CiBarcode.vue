<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CiBarcode',
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
        <g id="Barcode">
    <g>
      <path d="M8.066,4.065H3.648a1.732,1.732,0,0,0-.963.189A1.368,1.368,0,0,0,2.066,5.48v4.585a.5.5,0,0,0,1,0V5.785a1.794,1.794,0,0,1,.014-.518c.077-.236.319-.2.514-.2H8.066a.5.5,0,0,0,0-1Z" />
      <path d="M2.063,13.937v4.418a1.733,1.733,0,0,0,.189.963,1.369,1.369,0,0,0,1.227.619H8.063a.5.5,0,0,0,0-1H3.783a1.831,1.831,0,0,1-.518-.014c-.236-.077-.2-.319-.2-.514V13.937a.5.5,0,0,0-1,0Z" />
      <path d="M15.934,19.935h4.418a1.732,1.732,0,0,0,.963-.189,1.368,1.368,0,0,0,.619-1.226V13.935a.5.5,0,0,0-1,0v4.28a1.794,1.794,0,0,1-.014.518c-.077.236-.319.2-.514.2H15.934a.5.5,0,0,0,0,1Z" />
      <path d="M21.937,10.063V5.645a1.733,1.733,0,0,0-.189-.963,1.369,1.369,0,0,0-1.227-.619H15.937a.5.5,0,0,0,0,1h4.28a1.831,1.831,0,0,1,.518.014c.236.077.2.319.2.514v4.472a.5.5,0,0,0,1,0Z" />
      <g>
        <rect x="10.999" y="7.643" width="1" height="8.709" rx="0.5" />
        <rect x="14.249" y="7.643" width="1" height="8.709" rx="0.5" />
        <rect x="16.499" y="7.643" width="1" height="8.709" rx="0.5" />
        <rect x="6.499" y="7.643" width="1" height="8.709" rx="0.5" />
        <rect x="8.499" y="7.643" width="1.5" height="8.709" rx="0.75" />
      </g>
    </g>
  </g>
      </BaseIcon>
    </template>