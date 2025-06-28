<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CiCircleChevUp',
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
        <g id="Circle_Chev_Up" data-name="Circle Chev Up">
    <g>
      <path d="M11.65,10.15a.492.492,0,0,1,.7,0l3,3a.495.495,0,0,1-.7.7L12,11.21,9.35,13.85a.495.495,0,0,1-.7-.7Z" />
      <path d="M2.067,12A9.933,9.933,0,1,1,12,21.934,9.944,9.944,0,0,1,2.067,12Zm18.866,0A8.933,8.933,0,1,0,12,20.934,8.943,8.943,0,0,0,20.933,12Z" />
    </g>
  </g>
      </BaseIcon>
    </template>