<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CiVideoOn',
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
        <g id="Video_On" data-name="Video On">
    <path d="M21.05,5.05a1.433,1.433,0,0,0-1.48.08L16.25,7.37V6.56a2.5,2.5,0,0,0-2.5-2.5H4.69a2.5,2.5,0,0,0-2.5,2.5V17.44a2.5,2.5,0,0,0,2.5,2.5h9.06a2.5,2.5,0,0,0,2.5-2.5v-.81l3.32,2.24a1.5,1.5,0,0,0,.81.24,1.414,1.414,0,0,0,1.43-1.43V6.32A1.437,1.437,0,0,0,21.05,5.05Zm-5.8,12.39a1.5,1.5,0,0,1-1.5,1.5H4.69a1.5,1.5,0,0,1-1.5-1.5V6.56a1.5,1.5,0,0,1,1.5-1.5h9.06a1.5,1.5,0,0,1,1.5,1.5Zm5.56.24a.415.415,0,0,1-.23.38.425.425,0,0,1-.45-.02l-3.88-2.62V8.58l3.88-2.62a.425.425,0,0,1,.45-.02.415.415,0,0,1,.23.38Z" />
  </g>
      </BaseIcon>
    </template>