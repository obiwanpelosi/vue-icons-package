<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'FcCrystalOscillator',
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
        <g fill="#FF9800">
        <rect x="3" y="28" width="26" height="4"/>
        <rect x="3" y="16" width="26" height="4"/>
    </g>
    <path fill="#2196F3" d="M43,11H20v26h23c1.1,0,2-0.9,2-2V13C45,11.9,44.1,11,43,11z"/>
    <path fill="#64B5F6" d="M20,9h-2v30h2c1.1,0,2-0.9,2-2V11C22,9.9,21.1,9,20,9z"/>
      </BaseIcon>
    </template>