<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CiMedicalCase',
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
        <g id="Medical_Case" data-name="Medical Case">
    <g>
      <path d="M18.435,6.465h-1.43v-.9a2.5,2.5,0,0,0-2.5-2.5h-5a2.5,2.5,0,0,0-2.5,2.5v.9H5.565a2.5,2.5,0,0,0-2.5,2.5v9.47a2.5,2.5,0,0,0,2.5,2.5h12.87a2.5,2.5,0,0,0,2.5-2.5V8.965A2.5,2.5,0,0,0,18.435,6.465Zm-10.43-.9a1.5,1.5,0,0,1,1.5-1.5h5a1.5,1.5,0,0,1,1.5,1.5v.9h-8Zm11.93,12.87a1.5,1.5,0,0,1-1.5,1.5H5.565a1.5,1.5,0,0,1-1.5-1.5V8.965a1.5,1.5,0,0,1,1.5-1.5h12.87a1.5,1.5,0,0,1,1.5,1.5Z" />
      <path d="M14.505,13.675a.5.5,0,0,1-.5.5h-1.5v1.5a.5.5,0,0,1-.5.5.5.5,0,0,1-.5-.5v-1.5h-1.5a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5h1.5v-1.5a.5.5,0,0,1,.5-.5.508.508,0,0,1,.5.5v1.5h1.5A.508.508,0,0,1,14.505,13.675Z" />
    </g>
  </g>
      </BaseIcon>
    </template>