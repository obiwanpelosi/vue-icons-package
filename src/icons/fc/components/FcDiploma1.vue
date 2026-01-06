<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'FcDiploma1',
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
        <rect x="4" y="9" fill="#E8EAF6" width="40" height="30"/>
    <g fill="#5C6BC0">
        <polygon points="30,34 32.8,34 27.8,29 25,31.8 30,36.8"/>
        <polygon points="18,34 15.2,34 20.2,29 23,31.8 18,36.8"/>
    </g>
    <rect x="11" y="15" fill="#9FA8DA" width="26" height="4"/>
    <path fill="#9FA8DA" d="M24,23c-2.8,0-5,2.2-5,5s2.2,5,5,5s5-2.2,5-5S26.8,23,24,23z M24,31c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3 S25.7,31,24,31z"/>
    <path fill="#9FA8DA" d="M3,8v32h42V8H3z M43,35c-1.7,0-3,1.3-3,3H8c0-1.7-1.3-3-3-3V13c1.7,0,3-1.3,3-3h32c0,1.7,1.3,3,3,3V35z"/>
      </BaseIcon>
    </template>