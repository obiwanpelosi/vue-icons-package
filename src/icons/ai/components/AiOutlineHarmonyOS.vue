<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'AiOutlineHarmonyOS',
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
          default: '0 0 1024 1024'
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
        <g transform="translate(134 65)"><path d="M377.5 0C585.987 0 755 169.013 755 377.5S585.987 755 377.5 755 0 585.987 0 377.5 169.013 0 377.5 0m0 64C204.359 64 64 204.359 64 377.5S204.359 691 377.5 691 691 550.641 691 377.5 550.641 64 377.5 64"/><path d="M611 824 611 896 144 896 144 824z"/></g>
      </BaseIcon>
    </template>