<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'FcNightPortrait',
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
        <path fill="#40C4FF" d="M42.9,6.3C43.6,7.4,44,8.6,44,10c0,3.9-3.1,7-7,7c-0.7,0-1.3-0.1-1.9-0.3c1.2,2,3.4,3.3,5.9,3.3 c3.9,0,7-3.1,7-7C48,9.8,45.9,7.1,42.9,6.3z"/>
    <g fill="#B39DDB">
        <circle cx="31" cy="19" r="2"/>
        <circle cx="13" cy="19" r="2"/>
        <polygon points="22,37 17,31 17,25 27,25 27,31"/>
    </g>
    <path fill="#D1C4E9" d="M31,13c0-7.6-18-5-18,0c0,1.1,0,5.9,0,7c0,5,4,9,9,9s9-4,9-9C31,18.9,31,14.1,31,13z"/>
    <g fill="#673AB7">
        <circle cx="26" cy="19" r="1"/>
        <circle cx="18" cy="19" r="1"/>
        <path d="M22,4c-6.1,0-10,4.9-10,11c0,0.8,0,2.3,0,2.3l2,1.7v-5l12-4l4,4v5l2-1.7c0,0,0-1.5,0-2.3c0-4-1-8-6-9l-1-2 H22z"/>
        <path d="M27,31L27,31c0,0-2,1-5,1s-5-1-5-1S6,33,6,44h32C38,33,27,31,27,31z"/>
    </g>
      </BaseIcon>
    </template>