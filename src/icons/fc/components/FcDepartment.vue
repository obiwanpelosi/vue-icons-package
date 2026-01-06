<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'FcDepartment',
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
        <polygon fill="#C5CAE9" points="42,42 6,42 6,9 24,2 42,9"/>
    <rect x="6" y="42" fill="#9FA8DA" width="36" height="2"/>
    <rect x="20" y="35" fill="#BF360C" width="8" height="9"/>
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
    </g>
      </BaseIcon>
    </template>