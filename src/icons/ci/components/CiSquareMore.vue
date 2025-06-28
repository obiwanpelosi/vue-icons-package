<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CiSquareMore',
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
        <g id="Square_More" data-name="Square More">
    <g>
      <path d="M18.437,20.938H5.562a2.5,2.5,0,0,1-2.5-2.5V5.565a2.5,2.5,0,0,1,2.5-2.5H18.437a2.5,2.5,0,0,1,2.5,2.5V18.438A2.5,2.5,0,0,1,18.437,20.938ZM5.562,4.065a1.5,1.5,0,0,0-1.5,1.5V18.438a1.5,1.5,0,0,0,1.5,1.5H18.437a1.5,1.5,0,0,0,1.5-1.5V5.565a1.5,1.5,0,0,0-1.5-1.5Z" />
      <circle cx="11.999" cy="12.002" r="1" />
      <circle cx="15.999" cy="12.002" r="1" />
      <circle cx="7.999" cy="12.002" r="1" />
    </g>
  </g>
      </BaseIcon>
    </template>