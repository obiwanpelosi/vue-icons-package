<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CiAlignCenterH',
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
        <g id="Align_Center-H" data-name="Align Center-H">
    <path d="M17.42,4.062H12.5v-.51a.5.5,0,0,0-1,0v.51H6.58a2.507,2.507,0,0,0-2.5,2.5V9a2.5,2.5,0,0,0,2.5,2.5H11.5v1H9.06A2.507,2.507,0,0,0,6.56,15v2.44a2.507,2.507,0,0,0,2.5,2.5H11.5v.51a.5.5,0,0,0,1,0v-.51h2.43a2.5,2.5,0,0,0,2.5-2.5V15a2.5,2.5,0,0,0-2.5-2.5H12.5v-1h4.92A2.5,2.5,0,0,0,19.92,9V6.562A2.507,2.507,0,0,0,17.42,4.062ZM11.5,18.942H9.06a1.511,1.511,0,0,1-1.5-1.5V15a1.5,1.5,0,0,1,1.5-1.5H11.5Zm0-8.44H6.58A1.5,1.5,0,0,1,5.08,9V6.562a1.5,1.5,0,0,1,1.5-1.5H11.5Zm3.43,3a1.5,1.5,0,0,1,1.5,1.5v2.44a1.5,1.5,0,0,1-1.5,1.5H12.5V13.5ZM18.92,9a1.5,1.5,0,0,1-1.5,1.5H12.5V5.062h4.92a1.5,1.5,0,0,1,1.5,1.5Z" />
  </g>
      </BaseIcon>
    </template>