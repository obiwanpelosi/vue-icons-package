<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CiHospital1',
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
        <g id="Hospital_1" data-name="Hospital 1">
    <g>
      <path d="M18.435,7.5h-1.93V5.56a2.5,2.5,0,0,0-2.5-2.5h-4a2.5,2.5,0,0,0-2.5,2.5V7.5H5.565a2.5,2.5,0,0,0-2.5,2.5v9.44a1.511,1.511,0,0,0,1.5,1.5h14.87a1.5,1.5,0,0,0,1.5-1.5V10A2.5,2.5,0,0,0,18.435,7.5ZM7.505,19.94H4.565a.508.508,0,0,1-.5-.5V10a1.5,1.5,0,0,1,1.5-1.5h1.94Zm8,0h-1.5v-2.5a2.038,2.038,0,0,0-.59-1.42,2,2,0,0,0-3.41,1.42v2.5h-1.5V5.56a1.5,1.5,0,0,1,1.5-1.5h4a1.5,1.5,0,0,1,1.5,1.5Zm4.43-.5a.5.5,0,0,1-.5.5h-2.93V8.5h1.93a1.5,1.5,0,0,1,1.5,1.5Z" />
      <path d="M14.505,8.56a.5.5,0,0,1-.5.5h-1.5v1.5a.5.5,0,0,1-.5.5.5.5,0,0,1-.5-.5V9.06h-1.5a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5h1.5V6.56a.5.5,0,0,1,.5-.5.508.508,0,0,1,.5.5v1.5h1.5A.508.508,0,0,1,14.505,8.56Z" />
      <g>
        <path d="M5.786,13.217a.5.5,0,0,1-.5-.5v-1.5a.5.5,0,0,1,1,0v1.5A.5.5,0,0,1,5.786,13.217Z" />
        <path d="M5.786,17.717a.5.5,0,0,1-.5-.5v-1.5a.5.5,0,0,1,1,0v1.5A.5.5,0,0,1,5.786,17.717Z" />
      </g>
      <g>
        <path d="M18.221,13.217a.5.5,0,0,1-.5-.5v-1.5a.5.5,0,0,1,1,0v1.5A.5.5,0,0,1,18.221,13.217Z" />
        <path d="M18.221,17.717a.5.5,0,0,1-.5-.5v-1.5a.5.5,0,0,1,1,0v1.5A.5.5,0,0,1,18.221,17.717Z" />
      </g>
    </g>
  </g>
      </BaseIcon>
    </template>