<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CiCalendar',
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
        <g id="Calendar">
    <path d="M18.44,4.955H16.5V3.545a.5.5,0,0,0-1,0v1.41h-7V3.545a.5.5,0,0,0-1,0v1.41H5.56a2.5,2.5,0,0,0-2.5,2.5v11a2.5,2.5,0,0,0,2.5,2.5H18.44a2.5,2.5,0,0,0,2.5-2.5v-11A2.5,2.5,0,0,0,18.44,4.955Zm1.5,13.5a1.5,1.5,0,0,1-1.5,1.5H5.56a1.5,1.5,0,0,1-1.5-1.5v-8.42H19.94Zm0-9.42H4.06V7.455a1.5,1.5,0,0,1,1.5-1.5H7.5v.59a.5.5,0,0,0,1,0v-.59h7v.59a.5.5,0,1,0,1,0v-.59h1.94a1.5,1.5,0,0,1,1.5,1.5Z" />
  </g>
      </BaseIcon>
    </template>