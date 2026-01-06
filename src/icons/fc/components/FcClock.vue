<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'FcClock',
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
        <circle fill="#00ACC1" cx="24" cy="24" r="20"/>
    <circle fill="#eee" cx="24" cy="24" r="16"/>
    <rect x="23" y="11" width="2" height="13"/>
    <rect x="26.1" y="22.7" transform="matrix(-.707 .707 -.707 -.707 65.787 27.25)" width="2.3" height="9.2"/>
    <circle cx="24" cy="24" r="2"/>
    <circle fill="#00ACC1" cx="24" cy="24" r="1"/>
      </BaseIcon>
    </template>