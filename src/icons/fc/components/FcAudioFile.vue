<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'FcAudioFile',
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
        <rect x="204" fill="none" width="48" height="48"/>
    <polygon fill="#90CAF9" points="244,45 212,45 212,3 234,3 244,13"/>
    <polygon fill="#E1F5FE" points="242.5,14 233,14 233,4.5"/>
    <g fill="#1976D2">
        <circle cx="227" cy="30" r="4"/>
        <polygon points="234,21 229,19 229,30 231,30 231,22.9 234,24"/>
    </g>
    <polygon fill="#90CAF9" points="40,45 8,45 8,3 30,3 40,13"/>
    <polygon fill="#E1F5FE" points="38.5,14 29,14 29,4.5"/>
    <g fill="#1976D2">
        <circle cx="23" cy="30" r="4"/>
        <polygon points="30,21 25,19 25,30 27,30 27,22.9 30,24"/>
    </g>
      </BaseIcon>
    </template>