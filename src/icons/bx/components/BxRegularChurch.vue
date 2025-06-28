<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'BxRegularChurch',
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
          default: '0 0 24 24'
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
        <path d="M21.447 14.105 18 12.382V12a1 1 0 0 0-.485-.857L13 8.434V6h2V4h-2V2h-2v2H9v2h2v2.434l-4.515 2.709A1 1 0 0 0 6 12v.382l-3.447 1.724A.998.998 0 0 0 2 15v6a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-6c0-.379-.214-.725-.553-.895zM4 15.618l2-1V20H4v-4.382zM12 15a2 2 0 0 0-2 2v3H8v-7.434l4-2.4 4 2.4V20h-2v-3a2 2 0 0 0-2-2zm8 5h-2v-5.382l2 1V20z"/>
      </BaseIcon>
    </template>