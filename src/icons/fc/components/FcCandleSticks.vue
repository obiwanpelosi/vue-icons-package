<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'FcCandleSticks',
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
          default: '0 0 48 48'
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
        <g fill="#546E7A">
        <rect x="38" y="4" width="2" height="20"/>
        <rect x="15" y="7" width="2" height="17"/>
        <rect x="8" y="27" width="2" height="17"/>
        <rect x="28" y="19" width="2" height="22"/>
    </g>
    <path fill="#4CAF50" d="M36,7h6c1.1,0,2,0.9,2,2v10c0,1.1-0.9,2-2,2h-6c-1.1,0-2-0.9-2-2V9C34,7.9,34.9,7,36,7z"/>
    <path fill="#4CAF50" d="M13,10h6c1.1,0,2,0.9,2,2v7c0,1.1-0.9,2-2,2h-6c-1.1,0-2-0.9-2-2v-7C11,10.9,11.9,10,13,10z"/>
    <path fill="#F44336" d="M6,30h6c1.1,0,2,0.9,2,2v7c0,1.1-0.9,2-2,2H6c-1.1,0-2-0.9-2-2v-7C4,30.9,4.9,30,6,30z"/>
    <path fill="#F44336" d="M26,22h6c1.1,0,2,0.9,2,2v12c0,1.1-0.9,2-2,2h-6c-1.1,0-2-0.9-2-2V24C24,22.9,24.9,22,26,22z"/>
      </BaseIcon>
    </template>