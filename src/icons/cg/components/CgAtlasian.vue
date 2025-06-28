<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CgAtlasian',
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
        <path
    opacity="0.8"
    d="M8.50705 11.5562C8.19028 11.1038 7.78219 11.1585 7.59556 11.6783L5 18.9075H10.1778C10.6982 16.85 10.2481 14.0427 9.08063 12.3754L8.50705 11.5562Z"
    fill="currentColor"
  />
  <path
    d="M12.8745 7.12641C11.6074 8.93603 11.1992 12.0835 11.9627 14.1565L13.7126 18.9074H18.9644L14.3673 6.42648C14.1764 5.90823 13.7649 5.85485 13.4481 6.30726L12.8745 7.12641Z"
    fill="currentColor"
  />
      </BaseIcon>
    </template>