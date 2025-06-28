<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CiCircleChevDown',
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
        <g id="Circle_Chev_Down" data-name="Circle Chev Down">
    <g>
      <path d="M12.35,13.85a.492.492,0,0,1-.7,0l-3-3a.495.495,0,0,1,.7-.7L12,12.79l2.65-2.64a.495.495,0,0,1,.7.7Z" />
      <path d="M21.933,12A9.933,9.933,0,1,1,12,2.067,9.944,9.944,0,0,1,21.933,12ZM3.067,12A8.933,8.933,0,1,0,12,3.067,8.943,8.943,0,0,0,3.067,12Z" />
    </g>
  </g>
      </BaseIcon>
    </template>