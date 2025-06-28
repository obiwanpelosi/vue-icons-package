<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CiSignpostR1',
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
        <g id="Signpost_R_1" data-name="Signpost R 1">
    <path d="M3.563,8h13.9a2.489,2.489,0,0,1,1.744.709l2.25,2.192a1.5,1.5,0,0,1-.007,2.2l-2.243,2.187A2.483,2.483,0,0,1,17.464,16H3.563a1.5,1.5,0,0,1-1.5-1.5v-5A1.5,1.5,0,0,1,3.563,8Zm13.9,7a1.491,1.491,0,0,0,1.046-.425l2.255-2.2A.5.5,0,0,0,20.937,12a.494.494,0,0,0-.162-.369l-.01-.01-2.254-2.2A1.492,1.492,0,0,0,17.464,9H3.563a.5.5,0,0,0-.5.5v5a.5.5,0,0,0,.5.5Z" />
  </g>
      </BaseIcon>
    </template>