<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CiFacebook',
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
        <g id="Facebook">
    <path d="M19.02,4.975A9.93,9.93,0,0,0,2.07,12,9.935,9.935,0,0,0,12,21.935a9.98,9.98,0,0,0,3.8-.75,10.189,10.189,0,0,0,3.22-2.16,9.934,9.934,0,0,0,0-14.05Zm-.7,13.34A8.921,8.921,0,0,1,13,20.885v-6.56h1.88a1,1,0,0,0,0-2H13V9.585a1,1,0,0,1,1-1h1.2a1,1,0,0,0,0-2H13.5a2.5,2.5,0,0,0-2.5,2.5v3.24H9.13a1,1,0,1,0,0,2H11v6.56a8.919,8.919,0,1,1,9.26-5.47A9.061,9.061,0,0,1,18.32,18.315Z" />
  </g>
      </BaseIcon>
    </template>