<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CiMobile1',
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
        <g id="Mobile_1" data-name="Mobile 1">
    <g>
      <path d="M10,18.933h4a.5.5,0,0,0,0-1H10a.5.5,0,0,0,0,1Z" />
      <path d="M16.727,21.937H7.273a2.384,2.384,0,0,1-2.239-2.5V4.563a2.384,2.384,0,0,1,2.239-2.5h9.454a2.384,2.384,0,0,1,2.239,2.5V19.437A2.384,2.384,0,0,1,16.727,21.937ZM7.273,3.063a1.39,1.39,0,0,0-1.239,1.5V19.437a1.39,1.39,0,0,0,1.239,1.5h9.454a1.39,1.39,0,0,0,1.239-1.5V4.563a1.39,1.39,0,0,0-1.239-1.5Z" />
    </g>
  </g>
      </BaseIcon>
    </template>