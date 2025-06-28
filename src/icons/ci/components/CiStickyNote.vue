<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CiStickyNote',
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
        <g id="Sticky_Note" data-name="Sticky Note">
    <path d="M18.44,3.065H5.56a2.507,2.507,0,0,0-2.5,2.5v12.87a2.507,2.507,0,0,0,2.5,2.5h8.68A2.482,2.482,0,0,0,16,20.2l4.21-4.2a2.505,2.505,0,0,0,.73-1.77V5.565A2.5,2.5,0,0,0,18.44,3.065Zm-4.38,13.5v3.37H5.56a1.5,1.5,0,0,1-1.5-1.5V5.565a1.5,1.5,0,0,1,1.5-1.5H18.44a1.5,1.5,0,0,1,1.5,1.5v8.5H16.56A2.507,2.507,0,0,0,14.06,16.565Zm1,3.13v-3.13a1.5,1.5,0,0,1,1.5-1.5h3.13Z" />
  </g>
      </BaseIcon>
    </template>