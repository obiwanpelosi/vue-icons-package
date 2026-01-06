<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'FcDeleteRow',
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
        <path fill="#90CAF9" d="M43,30V18c0-2.2-1.8-4-4-4H9c-2.2,0-4,1.8-4,4v12c0,2.2,1.8,4,4,4h30C41.2,34,43,32.2,43,30z M9,18h30v12 L9,30V18z"/>
    <circle fill="#F44336" cx="38" cy="38" r="10"/>
    <g fill="#fff">
        <rect x="36.5" y="32" transform="matrix(-.707 .707 -.707 -.707 91.74 38)" width="3" height="12"/>
        <rect x="36.5" y="32" transform="matrix(-.707 -.707 .707 -.707 38 91.74)" width="3" height="12"/>
    </g>
      </BaseIcon>
    </template>