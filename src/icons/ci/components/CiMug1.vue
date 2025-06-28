<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CiMug1',
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
        <g id="Mug_1" data-name="Mug 1">
    <path d="M18.115,5.91V4.97a1.2,1.2,0,0,0-1.2-1.2H4.265a1.2,1.2,0,0,0-1.2,1.2v9.14a11.321,11.321,0,0,0,.8,4.17A3.3,3.3,0,0,0,7,20.23h7.19a3.312,3.312,0,0,0,3.14-1.95,10.989,10.989,0,0,0,.74-3.13l1.04-.52a3.319,3.319,0,0,0,1.83-2.97V9.19A3.326,3.326,0,0,0,18.115,5.91Zm-1.73,12.01a2.3,2.3,0,0,1-2.2,1.31H7a2.312,2.312,0,0,1-2.2-1.31,10.238,10.238,0,0,1-.73-3.81V4.97a.2.2,0,0,1,.2-.2h12.65a.2.2,0,0,1,.2.2v9.14A10.238,10.238,0,0,1,16.385,17.92Zm3.55-6.26a2.287,2.287,0,0,1-1.28,2.07l-.54.27V6.93a2.316,2.316,0,0,1,1.82,2.26Z" />
  </g>
      </BaseIcon>
    </template>