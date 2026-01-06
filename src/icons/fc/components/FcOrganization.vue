<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'FcOrganization',
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
        <path fill="#90CAF9" d="M42,42H6V10c0-2.2,1.8-4,4-4h28c2.2,0,4,1.8,4,4V42z"/>
    <rect x="6" y="42" fill="#64B5F6" width="36" height="2"/>
    <g fill="#1565C0">
        <rect x="31" y="27" width="6" height="5"/>
        <rect x="21" y="27" width="6" height="5"/>
        <rect x="11" y="27" width="6" height="5"/>
        <rect x="31" y="35" width="6" height="5"/>
        <rect x="11" y="35" width="6" height="5"/>
        <rect x="31" y="19" width="6" height="5"/>
        <rect x="21" y="19" width="6" height="5"/>
        <rect x="11" y="19" width="6" height="5"/>
        <rect x="31" y="11" width="6" height="5"/>
        <rect x="21" y="11" width="6" height="5"/>
        <rect x="11" y="11" width="6" height="5"/>
        <rect x="21" y="35" width="6" height="9"/>
    </g>
      </BaseIcon>
    </template>