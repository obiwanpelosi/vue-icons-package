<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'FcVoicePresentation',
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
        <path fill="#2196F3" d="M40,22h-8l-4,4V12c0-2.2,1.8-4,4-4h8c2.2,0,4,1.8,4,4v6C44,20.2,42.2,22,40,22z"/>
    <circle fill="#FFA726" cx="17" cy="19" r="8"/>
    <path fill="#607D8B" d="M30,36.7c0,0-3.6-6.7-13-6.7S4,36.7,4,36.7V40h26V36.7z"/>
      </BaseIcon>
    </template>