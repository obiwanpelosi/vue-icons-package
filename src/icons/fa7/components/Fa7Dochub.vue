<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7Dochub',
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
          default: '0 0 448 512'
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
        <path fill="currentColor" d="M413.9 160L272 160 272 19.6 413.9 160zM320 192l0 130c0 66.8-36.5 100.1-113.3 100.1l-94.7 0 0-337.3 94.7 0c12 0 23.1 .8 33.1 2.5l0-84C228.9 1.1 217.4 0 205.2 0L16 0 16 512 205.2 512C345.7 512 416 447.4 416 318.1l0-126.1-96 0z"/>
      </BaseIcon>
    </template>