<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'FcWorkflow',
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
        <rect x="7" y="31" fill="#00BCD4" width="10" height="10"/>
    <path fill="#00BCD4" d="M35.3,19.3l-5.6-5.6c-0.4-0.4-0.4-1,0-1.4l5.6-5.6c0.4-0.4,1-0.4,1.4,0l5.6,5.6c0.4,0.4,0.4,1,0,1.4 l-5.6,5.6C36.3,19.7,35.7,19.7,35.3,19.3z"/>
    <circle fill="#3F51B5" cx="12" cy="13" r="6"/>
    <circle fill="#448AFF" cx="36" cy="36" r="6"/>
    <g fill="#90A4AE">
        <rect x="11" y="24" width="2" height="5"/>
        <polygon points="12,21 9,25 15,25"/>
    </g>
    <g fill="#90A4AE">
        <rect x="20" y="12" width="5" height="2"/>
        <polygon points="28,13 24,10 24,16"/>
    </g>
    <g fill="#90A4AE">
        <rect x="35" y="21" width="2" height="5"/>
        <polygon points="36,29 39,25 33,25"/>
    </g>
      </BaseIcon>
    </template>