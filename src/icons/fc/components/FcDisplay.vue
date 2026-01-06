<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'FcDisplay',
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
        <path fill="#80DEEA" d="M40,41H8c-2.2,0-4-1.8-4-4V11c0-2.2,1.8-4,4-4h32c2.2,0,4,1.8,4,4v26C44,39.2,42.2,41,40,41z"/>
    <g fill="#2962FF">
        <polygon points="36,17 31,17 29,15 31,13 36,13 38,15"/>
        <polygon points="36,35 31,35 29,33 31,31 36,31 38,33"/>
        <polygon points="37,30 37,18 39,16 41,18 41,30 39,32"/>
        <polygon points="26,30 26,18 28,16 30,18 30,30 28,32"/>
        <polygon points="17,17 12,17 10,15 12,13 17,13 19,15"/>
        <polygon points="17,35 12,35 10,33 12,31 17,31 19,33"/>
        <polygon points="18,30 18,18 20,16 22,18 22,30 20,32"/>
        <polygon points="7,30 7,18 9,16 11,18 11,30 9,32"/>
    </g>
      </BaseIcon>
    </template>