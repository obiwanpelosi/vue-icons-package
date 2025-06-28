<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CiPower',
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
        <g id="Power">
    <g>
      <path d="M6.638,5.209a8.782,8.782,0,1,0,13.917,8.96,8.871,8.871,0,0,0-3.189-8.96c-.5-.39-1.214.312-.707.707a7.93,7.93,0,0,1,3.082,7.113,7.787,7.787,0,0,1-15.308.956A7.9,7.9,0,0,1,7.345,5.916c.507-.394-.205-1.1-.707-.707Z" />
      <path d="M12.5,12.519a.5.5,0,0,1-1,0V3.548h0a.5.5,0,0,1,1,0Z" />
    </g>
  </g>
      </BaseIcon>
    </template>