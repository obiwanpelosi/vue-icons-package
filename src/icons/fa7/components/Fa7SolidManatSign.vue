<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7SolidManatSign',
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
          default: '0 0 384 512'
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
        <path fill="currentColor" d="M192 32c-13.3 0-24 10.7-24 24l0 41.5C73.3 109.3 0 190.1 0 288L0 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-62.5 44.8-114.5 104-125.8L168 456c0 13.3 10.7 24 24 24s24-10.7 24-24l0-293.8c59.2 11.2 104 63.3 104 125.8l0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-97.9-73.3-178.7-168-190.5L216 56c0-13.3-10.7-24-24-24z"/>
      </BaseIcon>
    </template>