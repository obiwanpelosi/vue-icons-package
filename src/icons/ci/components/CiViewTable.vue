<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CiViewTable',
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
        <g id="View_Table" data-name="View Table">
    <path d="M18.44,3.06H5.56a2.507,2.507,0,0,0-2.5,2.5V18.44a2.507,2.507,0,0,0,2.5,2.5H18.44a2.514,2.514,0,0,0,2.5-2.5V5.56A2.514,2.514,0,0,0,18.44,3.06ZM8.71,19.94H5.56a1.5,1.5,0,0,1-1.5-1.5V15.33H8.71Zm0-5.61H4.06V9.67H8.71Zm0-5.66H4.06V5.56a1.5,1.5,0,0,1,1.5-1.5H8.71Zm11.23,9.77a1.511,1.511,0,0,1-1.5,1.5H9.71V15.33H19.94Zm0-4.11H9.71V9.67H19.94Zm0-5.66H9.71V4.06h8.73a1.511,1.511,0,0,1,1.5,1.5Z" />
  </g>
      </BaseIcon>
    </template>