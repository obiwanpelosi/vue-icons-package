<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CiMemoPad',
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
        <g id="Memo_Pad" data-name="Memo Pad">
    <g>
      <path d="M17.44,2.065H6.56a2.507,2.507,0,0,0-2.5,2.5v14.87a2.507,2.507,0,0,0,2.5,2.5H17.44a2.5,2.5,0,0,0,2.5-2.5V4.565A2.5,2.5,0,0,0,17.44,2.065Zm1.5,17.37a1.5,1.5,0,0,1-1.5,1.5H6.56a1.5,1.5,0,0,1-1.5-1.5V6.505H18.94Z" />
      <g>
        <path d="M7.549,9.506h0a.5.5,0,0,1,0-1h8.909a.5.5,0,0,1,0,1Z" />
        <path d="M7.549,12.506h0a.5.5,0,0,1,0-1h6.5a.5.5,0,0,1,0,1Z" />
        <path d="M7.566,18.374h0a.5.5,0,1,1,0-1h3.251a.5.5,0,0,1,0,1Z" />
      </g>
    </g>
  </g>
      </BaseIcon>
    </template>