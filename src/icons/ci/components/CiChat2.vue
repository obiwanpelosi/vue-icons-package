<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CiChat2',
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
        <g id="Chat_2" data-name="Chat 2">
    <path d="M12,19.937a1.243,1.243,0,0,1-.833-.319L9.281,17.932a1.531,1.531,0,0,0-1.08-.458H4.561a2.5,2.5,0,0,1-2.5-2.5l.006-8.41a2.5,2.5,0,0,1,2.5-2.5H19.439a2.5,2.5,0,0,1,2.5,2.5v8.411a2.5,2.5,0,0,1-2.5,2.5H15.79a1.483,1.483,0,0,0-1.062.441l-1.895,1.7A1.243,1.243,0,0,1,12,19.937ZM4.567,5.063a1.5,1.5,0,0,0-1.5,1.5l-.006,8.411a1.5,1.5,0,0,0,1.5,1.5H8.2a2.483,2.483,0,0,1,1.767.732l1.864,1.667a.248.248,0,0,0,.333,0l1.874-1.682a2.5,2.5,0,0,1,1.751-.716h3.649a1.5,1.5,0,0,0,1.5-1.5V6.563a1.5,1.5,0,0,0-1.5-1.5Z" />
  </g>
      </BaseIcon>
    </template>