<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'BxLogoZoom',
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
        <path d="M1.984 7.506v6.74c.006 1.524 1.361 2.75 3.014 2.745h10.693c.303 0 .549-.225.549-.498v-6.74c-.008-1.523-1.363-2.75-3.014-2.744H2.531c-.302 0-.547.224-.547.497zm14.936 2.63 4.416-2.963c.383-.292.68-.219.68.309v9.036c0 .601-.363.528-.68.309L16.92 13.87v-3.734z"/>
      </BaseIcon>
    </template>