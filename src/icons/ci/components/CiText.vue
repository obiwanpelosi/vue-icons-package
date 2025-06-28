<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CiText',
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
        <g id="Text">
    <path d="M18.44,2.06H5.56a1.5,1.5,0,0,0-1.5,1.5v4.5a.5.5,0,0,0,1,0v-1H10V20.94H8a.5.5,0,0,0,0,1h8a.5.5,0,0,0,0-1H14V7.06h4.94v1a.5.5,0,0,0,1,0V3.56A1.5,1.5,0,0,0,18.44,2.06Zm.5,4H14a1,1,0,0,0-1,1V20.94H11V7.06a1,1,0,0,0-1-1H5.06V3.56a.5.5,0,0,1,.5-.5H18.44a.5.5,0,0,1,.5.5Z" />
  </g>
      </BaseIcon>
    </template>