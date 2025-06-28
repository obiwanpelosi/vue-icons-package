<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CiLollipop',
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
        <g id="Lollipop">
    <path d="M18,6.565h-.19a6,6,0,0,0-11.62,0H6a1.5,1.5,0,1,0,0,3h.19a5.992,5.992,0,0,0,5.31,4.48v7.39a.5.5,0,0,0,.5.5.5.5,0,0,0,.5-.5v-7.39a6.013,6.013,0,0,0,5.31-4.48H18a1.5,1.5,0,1,0,0-3Zm-6-3.5a4.991,4.991,0,0,1,4.77,3.5H7.23A4.991,4.991,0,0,1,12,3.065Zm0,10a4.991,4.991,0,0,1-4.77-3.5h9.54A4.991,4.991,0,0,1,12,13.065Zm6-4.5H6a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5H18a.5.5,0,0,1,.5.5A.508.508,0,0,1,18,8.565Z" />
  </g>
      </BaseIcon>
    </template>