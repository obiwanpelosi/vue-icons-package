<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CiCircleMinus',
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
        <g id="Circle_Minus" data-name="Circle Minus">
    <g>
      <path d="M15,11.5h0a.5.5,0,0,1,0,1H9a.5.5,0,0,1,0-1Z" />
      <path d="M12,21.934A9.933,9.933,0,1,1,21.932,12,9.945,9.945,0,0,1,12,21.934ZM12,3.068A8.933,8.933,0,1,0,20.932,12,8.944,8.944,0,0,0,12,3.068Z" />
    </g>
  </g>
      </BaseIcon>
    </template>