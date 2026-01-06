<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'FcFilingCabinet',
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
        <rect x="12" y="44" fill="#263238" width="4" height="2"/>
    <rect x="32" y="44" fill="#263238" width="4" height="2"/>
    <path fill="#607D8B" d="M8,41V7c0-2.2,1.8-4,4-4h24c2.2,0,4,1.8,4,4v34c0,2.2-1.8,4-4,4H12C9.8,45,8,43.2,8,41z"/>
    <path fill="#B0BEC5" d="M12,17V8c0-0.6,0.4-1,1-1h22c0.6,0,1,0.4,1,1v9H12z"/>
    <rect x="12" y="19" fill="#B0BEC5" width="24" height="10"/>
    <path fill="#B0BEC5" d="M12,40v-9h24v9c0,0.6-0.4,1-1,1H13C12.4,41,12,40.6,12,40z"/>
    <rect x="20" y="11" fill="#546E7A" width="8" height="2"/>
    <rect x="20" y="23" fill="#546E7A" width="8" height="2"/>
    <rect x="20" y="35" fill="#546E7A" width="8" height="2"/>
      </BaseIcon>
    </template>