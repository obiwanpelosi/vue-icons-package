<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CiFootball',
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
        <g id="Football">
    <g>
      <path d="M20.278,4.757a1.64,1.64,0,0,0-1.03-1.04,12.248,12.248,0,0,0-15.53,15.53,1.64,1.64,0,0,0,1.04,1.03,12.306,12.306,0,0,0,3.95.66,12.262,12.262,0,0,0,11.57-16.18Zm-15.2,14.58a.725.725,0,0,1-.42-.42,11.379,11.379,0,0,1-.58-4.26l5.26,5.26A11.352,11.352,0,0,1,5.078,19.337Zm11.56-2.71a11.179,11.179,0,0,1-6.03,3.14l-6.38-6.38a11.083,11.083,0,0,1,3.14-6.02,11.193,11.193,0,0,1,6.03-3.15l6.38,6.38A11.245,11.245,0,0,1,16.638,16.627Zm3.29-7.3-5.26-5.26c.21,0,.41-.01.62-.01a11.154,11.154,0,0,1,3.63.61.682.682,0,0,1,.42.41A11.543,11.543,0,0,1,19.928,9.327Z" />
      <path d="M10.4,15.257a.5.5,0,0,0,.35.15.508.508,0,0,0,.36-.15.5.5,0,0,0,0-.7l-.48-.48L12,12.707l.48.48a.518.518,0,0,0,.35.14.543.543,0,0,0,.36-.14.513.513,0,0,0,0-.71l-.48-.48,1.37-1.37.48.48a.5.5,0,0,0,.7-.71L13.6,8.737a.5.5,0,0,0-.71,0,.5.5,0,0,0,0,.7l.49.49L12,11.3l-.48-.48a.495.495,0,1,0-.7.7l.48.48-1.37,1.38-.49-.49a.5.5,0,0,0-.7,0,.5.5,0,0,0,0,.71Z" />
    </g>
  </g>
      </BaseIcon>
    </template>