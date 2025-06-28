<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CiAlignCenterV',
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
        <g id="Align_Center-V" data-name="Align Center-V">
    <path d="M20.446,11.5h-.51V9.07a2.5,2.5,0,0,0-2.5-2.5h-2.43a2.5,2.5,0,0,0-2.5,2.5V11.5H11.5V6.58A2.5,2.5,0,0,0,9,4.08H6.566a2.5,2.5,0,0,0-2.5,2.5V11.5h-.52a.5.5,0,0,0,0,1h.52v4.92a2.5,2.5,0,0,0,2.5,2.5H9a2.5,2.5,0,0,0,2.5-2.5V12.5h1.01v2.43a2.5,2.5,0,0,0,2.5,2.5h2.43a2.5,2.5,0,0,0,2.5-2.5V12.5h.51A.5.5,0,0,0,20.446,11.5ZM10.5,17.42A1.5,1.5,0,0,1,9,18.92H6.566a1.5,1.5,0,0,1-1.5-1.5V12.5H10.5Zm0-5.92H5.066V6.58a1.5,1.5,0,0,1,1.5-1.5H9a1.5,1.5,0,0,1,1.5,1.5Zm8.44,3.43a1.5,1.5,0,0,1-1.5,1.5h-2.43a1.5,1.5,0,0,1-1.5-1.5V12.5h5.43Zm0-3.43h-5.43V9.07a1.5,1.5,0,0,1,1.5-1.5h2.43a1.5,1.5,0,0,1,1.5,1.5Z" />
  </g>
      </BaseIcon>
    </template>