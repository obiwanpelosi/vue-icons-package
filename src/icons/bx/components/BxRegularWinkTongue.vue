<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'BxRegularWinkTongue',
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
        <path d="M15.5 9c-2 0-2.5 2-2.5 2h5s-.501-2-2.5-2z"/><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-2 16v-3h4v3c0 1.103-.897 2-2 2s-2-.897-2-2zm5.856 1.005c.085-.323.144-.656.144-1.005v-1.499C17.589 15.028 18 13 18 13H6s.412 2.028 2 3.501V18c0 .349.059.682.144 1.005A8.005 8.005 0 0 1 4 12c0-4.411 3.589-8 8-8s8 3.589 8 8a8.005 8.005 0 0 1-4.144 7.005z"/><circle cx="8.5" cy="9.5" r="1.5"/>
      </BaseIcon>
    </template>