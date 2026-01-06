<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'FcSoundRecordingCopyright',
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
        <circle fill="#9C27B0" cx="24" cy="24" r="21"/>
    <path fill="#E1BEE7" d="M20.7,27.2v8.4h-3.9V12.9h8.7c1.3,0,2.5,0.2,3.5,0.5c1,0.4,1.9,0.9,2.6,1.5c0.7,0.6,1.2,1.4,1.6,2.3 c0.4,0.9,0.6,1.8,0.6,2.9c0,1.1-0.2,2.1-0.6,3c-0.4,0.9-0.9,1.6-1.6,2.2c-0.7,0.6-1.6,1.1-2.6,1.4c-1,0.3-2.2,0.5-3.5,0.5H20.7z M20.7,24h4.7c0.8,0,1.4-0.1,2-0.3c0.5-0.2,1-0.5,1.4-0.8c0.4-0.3,0.6-0.8,0.8-1.2c0.2-0.5,0.2-1,0.2-1.6c0-0.5-0.1-1-0.2-1.5 c-0.2-0.5-0.4-0.9-0.8-1.3c-0.4-0.4-0.8-0.7-1.4-0.9c-0.5-0.2-1.2-0.3-2-0.3h-4.7V24z"/>
      </BaseIcon>
    </template>