<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'BxSolidBadgeDollar',
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
        <path d="M2.047 14.668a.994.994 0 0 0 .465.607l1.91 1.104v2.199a1 1 0 0 0 1 1h2.199l1.104 1.91a1.01 1.01 0 0 0 .866.5c.174 0 .347-.046.501-.135L12 20.75l1.91 1.104a1.001 1.001 0 0 0 1.366-.365l1.103-1.91h2.199a1 1 0 0 0 1-1V16.38l1.91-1.104a1 1 0 0 0 .365-1.367L20.75 12l1.104-1.908a1 1 0 0 0-.365-1.366l-1.91-1.104v-2.2a1 1 0 0 0-1-1H16.38l-1.103-1.909a1.008 1.008 0 0 0-.607-.466.993.993 0 0 0-.759.1L12 3.25l-1.909-1.104a1 1 0 0 0-1.366.365l-1.104 1.91H5.422a1 1 0 0 0-1 1V7.62l-1.91 1.104a1.003 1.003 0 0 0-.365 1.368L3.251 12l-1.104 1.908a1.009 1.009 0 0 0-.1.76zM12 13c-3.48 0-4-1.879-4-3 0-1.287 1.029-2.583 3-2.915V6.012h2v1.109c1.734.41 2.4 1.853 2.4 2.879h-1l-1 .018C13.386 9.638 13.185 9 12 9c-1.299 0-2 .515-2 1 0 .374 0 1 2 1 3.48 0 4 1.879 4 3 0 1.287-1.029 2.583-3 2.915V18h-2v-1.08c-2.339-.367-3-2.003-3-2.92h2c.011.143.159 1 2 1 1.38 0 2-.585 2-1 0-.325 0-1-2-1z"/>
      </BaseIcon>
    </template>