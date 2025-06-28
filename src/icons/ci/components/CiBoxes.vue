<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CiBoxes',
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
        <g id="Boxes">
    <path d="M19.435,11.5h-2.72V4.56a1.5,1.5,0,0,0-1.5-1.5H8.785a1.5,1.5,0,0,0-1.5,1.5V11.5H4.565a1.5,1.5,0,0,0-1.5,1.5v6.44a1.5,1.5,0,0,0,1.5,1.5H11a1.468,1.468,0,0,0,1-.39,1.487,1.487,0,0,0,1,.39h6.44a1.5,1.5,0,0,0,1.5-1.5V13A1.5,1.5,0,0,0,19.435,11.5ZM11.5,19.44a.5.5,0,0,1-.5.5H4.565a.5.5,0,0,1-.5-.5V13a.5.5,0,0,1,.5-.5h1.97v2a.5.5,0,0,0,.5.5h1.5a.508.508,0,0,0,.5-.5v-2H11.5ZM8.285,11.5V4.56a.5.5,0,0,1,.5-.5h1.96v2a.5.5,0,0,0,.5.5h1.5a.5.5,0,0,0,.5-.5v-2h1.97a.5.5,0,0,1,.5.5V11.5Zm11.65,7.94a.508.508,0,0,1-.5.5H13a.508.508,0,0,1-.5-.5V12.5h2.47v2a.5.5,0,0,0,.5.5h1.5a.5.5,0,0,0,.5-.5v-2h1.97a.5.5,0,0,1,.5.5Z" />
  </g>
      </BaseIcon>
    </template>