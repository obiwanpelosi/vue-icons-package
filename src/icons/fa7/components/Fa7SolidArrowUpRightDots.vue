<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7SolidArrowUpRightDots',
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
          default: '0 0 512 512'
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
        <path fill="currentColor" d="M96 32C78.3 32 64 46.3 64 64S78.3 96 96 96L114.7 96 9.4 201.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.3 160 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32L96 32zM403.8 70.1a38.1 38.1 0 1 0 76.2 0 38.1 38.1 0 1 0 -76.2 0zM279.7 194.2a38.1 38.1 0 1 0 76.2 0 38.1 38.1 0 1 0 -76.2 0zm162.2-38.1a38.1 38.1 0 1 0 0 76.2 38.1 38.1 0 1 0 0-76.2zM156.2 317.8a38.1 38.1 0 1 0 76.2 0 38.1 38.1 0 1 0 -76.2 0zm161.6-38.1a38.1 38.1 0 1 0 0 76.2 38.1 38.1 0 1 0 0-76.2zm86.1 38.1a38.1 38.1 0 1 0 76.2 0 38.1 38.1 0 1 0 -76.2 0zM70.1 403.8a38.1 38.1 0 1 0 0 76.2 38.1 38.1 0 1 0 0-76.2zm86.1 38.1a38.1 38.1 0 1 0 76.2 0 38.1 38.1 0 1 0 -76.2 0zm161.6-38.1a38.1 38.1 0 1 0 0 76.2 38.1 38.1 0 1 0 0-76.2zm86.1 38.1a38.1 38.1 0 1 0 76.2 0 38.1 38.1 0 1 0 -76.2 0z"/>
      </BaseIcon>
    </template>