<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CiCoins1',
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
        <g id="Coins_1" data-name="Coins 1">
    <path d="M18.46,10.905a3.469,3.469,0,0,0-2.47,1.04,2.3,2.3,0,0,0-.86-1.73,2.257,2.257,0,0,0,.86-1.78,2.288,2.288,0,0,0-2.28-2.29H4.35a2.284,2.284,0,0,0-1.43,4.07,2.282,2.282,0,0,0,0,3.57,2.277,2.277,0,0,0,1.43,4.06h9.36a2.29,2.29,0,0,0,2.06-1.29,3.434,3.434,0,0,0,2.69,1.3,3.475,3.475,0,1,0,0-6.95Zm-4.75,5.94H4.35a1.28,1.28,0,1,1,0-2.56h9.36a1.28,1.28,0,1,1,0,2.56Zm0-3.56H4.35a1.285,1.285,0,1,1,0-2.57h9.36a1.285,1.285,0,0,1,0,2.57Zm0-3.57H4.35a1.285,1.285,0,1,1,0-2.57h9.36a1.285,1.285,0,0,1,0,2.57Zm4.75,7.14a2.475,2.475,0,1,1,2.48-2.48A2.477,2.477,0,0,1,18.46,16.855Z" />
  </g>
      </BaseIcon>
    </template>