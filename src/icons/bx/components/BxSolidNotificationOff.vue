<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'BxSolidNotificationOff',
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
        <circle cx="18" cy="6" r="3"/><path d="M20 18v-7.422A4.962 4.962 0 0 1 18 11a5 5 0 0 1-5-5c0-.712.153-1.387.422-2H6c-.178 0-.347.031-.51.076L3.707 2.293 2.293 3.707l18 18 1.414-1.414-1.783-1.783c.045-.163.076-.332.076-.51zM4 18c0 1.103.897 2 2 2h9.879L4 8.121V18z"/>
      </BaseIcon>
    </template>