<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'BsFileEaselFill',
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
          default: '0 0 16 16'
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
        :class="cssClass"
        :style="style" 
        :viewBox="viewBox"
      >
        <path d="M5 6.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5z"/>
  <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M8.5 5h2A1.5 1.5 0 0 1 12 6.5v2a1.5 1.5 0 0 1-1.5 1.5h-.473l.447 1.342a.5.5 0 0 1-.948.316L8.973 10H8.5v1a.5.5 0 0 1-1 0v-1h-.473l-.553 1.658a.5.5 0 1 1-.948-.316L5.973 10H5.5A1.5 1.5 0 0 1 4 8.5v-2A1.5 1.5 0 0 1 5.5 5h2a.5.5 0 0 1 1 0"/>
      </BaseIcon>
    </template>