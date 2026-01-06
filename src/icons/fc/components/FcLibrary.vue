<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'FcLibrary',
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
        <rect x="1" y="38" width="46" height="2"/>
        <rect x="25" y="18" width="4" height="16"/>
        <rect x="31" y="18" width="4" height="16"/>
        <rect x="37" y="18" width="4" height="16"/>
        <rect x="19" y="18" width="4" height="16"/>
        <rect x="13" y="18" width="4" height="16"/>
        <rect x="7" y="18" width="4" height="16"/>
        <polygon points="43,16 5,16 5,13 24,4 43,13"/>
        <rect x="5" y="34" width="38" height="2"/>
    </g>
    <g fill="#EF6C00">
        <rect x="25" y="16" width="4" height="2"/>
        <rect x="31" y="16" width="4" height="2"/>
        <rect x="37" y="16" width="4" height="2"/>
        <rect x="19" y="16" width="4" height="2"/>
        <rect x="13" y="16" width="4" height="2"/>
        <rect x="7" y="16" width="4" height="2"/>
        <rect x="3" y="36" width="42" height="2"/>
        <circle cx="24" cy="11" r="2"/>
    </g>
      </BaseIcon>
    </template>