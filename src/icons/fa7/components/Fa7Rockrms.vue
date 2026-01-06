<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7Rockrms',
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
        <path fill="currentColor" d="M256 8a248 248 0 1 0 0 496 248 248 0 1 0 0-496zM413.4 427.5l-90 0-112-131.3c-17.9-20.4-3.9-56.1 26.6-56.1l75.3 0-84.6-99.3-84.3 98.9-90 0 147.1-172.5c14.4-18.4 41.3-17.3 54.5 0L413.7 252.3c19 22.8 2 57.2-27.6 56.1-.6 0-74.2 .2-74.2 .2L413.4 427.5z"/>
      </BaseIcon>
    </template>