<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'FcStatistics',
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
        <g fill="#37474F">
        <rect x="23" y="5" width="2" height="36"/>
        <rect x="20.5" y="31.4" transform="matrix(.707 .707 -.707 .707 33.523 -3.921)" width="2" height="14.2"/>
        <rect x="25.5" y="31.4" transform="matrix(-.707 .707 -.707 -.707 72.487 46.995)" width="2" height="14.2"/>
    </g>
    <rect x="4" y="8" fill="#CFD8DC" width="40" height="28"/>
    <g fill="#607D8B">
        <rect x="3" y="7" width="42" height="4"/>
        <rect x="3" y="35" width="42" height="2"/>
        <circle cx="31.5" cy="43.5" r="1.5"/>
        <circle cx="16.5" cy="43.5" r="1.5"/>
    </g>
    <g fill="#C51162">
        <polygon points="31.9,18.9 26,24.9 20,18.9 11.9,26.9 14.1,29.1 20,23.1 26,29.1 34.1,21.1"/>
        <polygon points="36,24 29,17 36,17"/>
    </g>
      </BaseIcon>
    </template>