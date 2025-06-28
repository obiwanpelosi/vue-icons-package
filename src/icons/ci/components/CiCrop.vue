<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CiCrop',
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
        <g id="Crop1" >
        <path d="M5.624,6.623l-2.075,-0c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l2.075,-0l0,-2.073c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,2.073l9.191,-0c1.414,-0 2.561,1.147 2.561,2.561l-0,9.193l2.075,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-2.075,0l-0,2.073c-0,0.276 -0.224,0.5 -0.5,0.5c-0.276,-0 -0.5,-0.224 -0.5,-0.5l-0,-2.073l-9.191,0c-1.414,0 -2.561,-1.147 -2.561,-2.561l0,-9.193Zm11.752,10.754l-0,-9.193c-0,-0.862 -0.699,-1.561 -1.561,-1.561l-9.191,-0l0,9.193c0,0.862 0.699,1.561 1.561,1.561l9.191,0Z" />
    </g>
      </BaseIcon>
    </template>