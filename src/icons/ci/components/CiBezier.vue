<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CiBezier',
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
        <g id="Bezier">
    <path d="M20.435,8.005a1.5,1.5,0,1,0-1.41-2H13.5v-.25a.749.749,0,0,0-.75-.75h-1.5a.755.755,0,0,0-.75.75v.25H4.975a1.5,1.5,0,0,0-2.91.5,1.5,1.5,0,0,0,2.91.5h3.79c-2.5,1.61-4.23,5-4.47,8.99h-.28a.749.749,0,0,0-.75.75v1.5a.749.749,0,0,0,.75.75h1.5a.755.755,0,0,0,.75-.75v-1.5a.755.755,0,0,0-.75-.75h-.21c.27-4.22,2.38-7.78,5.19-8.73a.747.747,0,0,0,.75.74h1.5a.741.741,0,0,0,.75-.74c2.81.95,4.93,4.51,5.21,8.73h-.22a.749.749,0,0,0-.75.75v1.5a.749.749,0,0,0,.75.75h1.5a.755.755,0,0,0,.75-.75v-1.5a.755.755,0,0,0-.75-.75H19.7c-.24-3.99-1.97-7.38-4.46-8.99h3.78A1.5,1.5,0,0,0,20.435,8.005Zm0-2a.508.508,0,0,1,.5.5.5.5,0,0,1-.5.5.5.5,0,0,1-.5-.5A.5.5,0,0,1,20.435,6.005Zm-16.87,1a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5.508.508,0,0,1,.5.5A.5.5,0,0,1,3.565,7.005ZM5.265,18h-1V17h1ZM12.5,7.005h-1v-1h1ZM18.735,17h1v1h-1Z" />
  </g>
      </BaseIcon>
    </template>