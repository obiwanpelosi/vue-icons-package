<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'BxSolidTraffic',
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
        <path d="m2.958 16 .043 1.042c.005.12.142 2.255 2.999 3.338v1.12a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-1.12c2.857-1.083 2.994-3.218 2.999-3.338L21.043 16H18v-1.62c2.857-1.083 2.994-3.218 2.999-3.338L21.043 10H18V8.38c2.857-1.083 2.994-3.218 2.999-3.338L21.043 4H18V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5V4H2.958l.043 1.042c.005.12.142 2.255 2.999 3.338V10H2.958l.043 1.042c.005.12.142 2.255 2.999 3.338V16H2.958zM12 4a2 2 0 1 1-.001 4.001A2 2 0 0 1 12 4zm0 6a2 2 0 1 1-.001 4.001A2 2 0 0 1 12 10zm0 6a2 2 0 1 1-.001 4.001A2 2 0 0 1 12 16z"/>
      </BaseIcon>
    </template>