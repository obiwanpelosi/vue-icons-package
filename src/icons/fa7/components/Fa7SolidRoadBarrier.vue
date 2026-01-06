<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7SolidRoadBarrier',
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
          default: '0 0 640 512'
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
        <path fill="currentColor" d="M32 32C14.3 32 0 46.3 0 64L0 448c0 17.7 14.3 32 32 32s32-14.3 32-32L64 266.3 149.2 96 64 96 64 64c0-17.7-14.3-32-32-32zM405.2 96l-74.3 0-5.4 10.7-90.6 181.3 74.3 0 5.4-10.7 90.6-181.3zM362.8 288l74.3 0 5.4-10.7 90.6-181.3-74.3 0-5.4 10.7-90.6 181.3zM202.8 96l-5.4 10.7-90.6 181.3 74.3 0 5.4-10.7 90.6-181.3-74.3 0zm288 192l85.2 0 0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-384c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 53.7-85.2 170.3z"/>
      </BaseIcon>
    </template>