<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'FcBriefcase',
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
        <path fill="#424242" d="M27,7h-6c-1.7,0-3,1.3-3,3v3h2v-3c0-0.6,0.4-1,1-1h6c0.6,0,1,0.4,1,1v3h2v-3C30,8.3,28.7,7,27,7z"/>
    <path fill="#E65100" d="M40,43H8c-2.2,0-4-1.8-4-4V15c0-2.2,1.8-4,4-4h32c2.2,0,4,1.8,4,4v24C44,41.2,42.2,43,40,43z"/>
    <path fill="#FF6E40" d="M40,28H8c-2.2,0-4-1.8-4-4v-9c0-2.2,1.8-4,4-4h32c2.2,0,4,1.8,4,4v9C44,26.2,42.2,28,40,28z"/>
    <path fill="#FFF3E0" d="M26,26h-4c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1h4c0.6,0,1,0.4,1,1v2C27,25.6,26.6,26,26,26z"/>
      </BaseIcon>
    </template>