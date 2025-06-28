<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CiCamera',
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
        <g id="Camera">
    <g>
      <path d="M20.435,19.925H3.565a1.5,1.5,0,0,1-1.5-1.5V9.285a1.5,1.5,0,0,1,1.5-1.5H6.223a.5.5,0,0,0,.5-.454l.166-1.8a1.49,1.49,0,0,1,1.5-1.454h7.23a1.5,1.5,0,0,1,1.5,1.5l.164,1.756a.5.5,0,0,0,.5.454h2.658a1.5,1.5,0,0,1,1.5,1.5v9.14A1.5,1.5,0,0,1,20.435,19.925ZM3.565,8.785a.5.5,0,0,0-.5.5v9.14a.5.5,0,0,0,.5.5h16.87a.5.5,0,0,0,.5-.5V9.285a.5.5,0,0,0-.5-.5H17.777a1.5,1.5,0,0,1-1.494-1.362l-.166-1.8a.515.515,0,0,0-.5-.546H8.385a.5.5,0,0,0-.5.5L7.717,7.423A1.5,1.5,0,0,1,6.223,8.785Z" />
      <path d="M12,17.282a4,4,0,1,1,4-4A4,4,0,0,1,12,17.282Zm0-7a3,3,0,1,0,3,3A3,3,0,0,0,12,10.282Z" />
    </g>
  </g>
      </BaseIcon>
    </template>