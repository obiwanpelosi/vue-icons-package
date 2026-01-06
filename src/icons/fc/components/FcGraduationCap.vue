<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'FcGraduationCap',
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
        <rect x="9" y="20" width="30" height="13"/>
        <ellipse cx="24" cy="33" rx="15" ry="6"/>
    </g>
    <path fill="#78909C" d="M23.1,8.2L0.6,18.1c-0.8,0.4-0.8,1.5,0,1.9l22.5,9.9c0.6,0.2,1.2,0.2,1.8,0l22.5-9.9c0.8-0.4,0.8-1.5,0-1.9 L24.9,8.2C24.3,7.9,23.7,7.9,23.1,8.2z"/>
    <g fill="#37474F">
        <path d="M43.2,20.4l-20-3.4c-0.5-0.1-1.1,0.3-1.2,0.8c-0.1,0.5,0.3,1.1,0.8,1.2L42,22.2V37c0,0.6,0.4,1,1,1 s1-0.4,1-1V21.4C44,20.9,43.6,20.5,43.2,20.4z"/>
        <circle cx="43" cy="37" r="2"/>
        <path d="M46,40c0,1.7-3,6-3,6s-3-4.3-3-6s1.3-3,3-3S46,38.3,46,40z"/>
    </g>
      </BaseIcon>
    </template>