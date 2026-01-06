<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'FcRemoveImage',
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
        <path fill="#8CBCD6" d="M40,41H8c-2.2,0-4-1.8-4-4V11c0-2.2,1.8-4,4-4h32c2.2,0,4,1.8,4,4v26C44,39.2,42.2,41,40,41z"/>
    <circle fill="#B3DDF5" cx="35" cy="16" r="3"/>
    <polygon fill="#9AC9E3" points="20,16 9,32 31,32"/>
    <polygon fill="#B3DDF5" points="31,22 23,32 39,32"/>
    <circle fill="#F44336" cx="38" cy="38" r="10"/>
    <g fill="#fff">
        <rect x="36.5" y="32" transform="matrix(-.707 .707 -.707 -.707 91.74 38)" width="3" height="12"/>
        <rect x="36.5" y="32" transform="matrix(-.707 -.707 .707 -.707 38 91.74)" width="3" height="12"/>
    </g>
      </BaseIcon>
    </template>