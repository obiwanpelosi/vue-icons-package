<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'FcDoNotInsert',
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
        <g fill="#7CB342">
        <polygon points="31,29 24,36 17,29"/>
        <rect x="22" y="7" width="4" height="25"/>
        <path d="M42,18c-3.3,0-6,2.7-6,6v12c0,1.1-0.9,2-2,2H14c-1.1,0-2-0.9-2-2V24c0-3.3-2.7-6-6-6H4v4h2c1.1,0,2,0.9,2,2 v12c0,3.3,2.7,6,6,6h20c3.3,0,6-2.7,6-6V24c0-1.1,0.9-2,2-2h2v-4H42z"/>
    </g>
    <rect x="22" y="-2.9" transform="matrix(.707 -.707 .707 .707 -9.941 24)" fill="#37474F" width="4" height="53.7"/>
      </BaseIcon>
    </template>