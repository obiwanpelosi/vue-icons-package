<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'FcIphone',
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
        <path fill="#E38939" d="M12,40V8c0-2.2,1.8-4,4-4h16c2.2,0,4,1.8,4,4v32c0,2.2-1.8,4-4,4H16C13.8,44,12,42.2,12,40z"/>
    <path fill="#FFF3E0" d="M32,7H16c-0.6,0-1,0.4-1,1v29c0,0.6,0.4,1,1,1h16c0.6,0,1-0.4,1-1V8C33,7.4,32.6,7,32,7z"/>
    <circle fill="#A6642A" cx="24" cy="41" r="1.5"/>
      </BaseIcon>
    </template>