<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CgCompressV',
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
    d="M13.0338 7.3559L15.4999 4.85376L16.9244 6.25768L12.0107 11.2432L7.02515 6.32948L8.42907 4.90505L11.0329 7.47139L11.0834 0.843506L13.0833 0.858735L13.0338 7.3559Z"
    fill="currentColor"
  />
  <path
    d="M15.5627 18.532L16.9749 17.1159L12.0184 12.1729L7.07543 17.1295L8.49159 18.5418L11.0762 15.95L11.1019 23.1566L13.1019 23.1495L13.0765 16.0528L15.5627 18.532Z"
    fill="currentColor"
  />
      </BaseIcon>
    </template>