<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CiApple',
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
        <g id="Apple">
    <path d="M14.875,6.612l.05-.05a3.229,3.229,0,0,0,.95-2.58.976.976,0,0,0-.9-.9,3.229,3.229,0,0,0-2.58.95,3.279,3.279,0,0,0-.85,1.46,4.661,4.661,0,0,0-2.69-1.75.5.5,0,1,0-.22.98,3.664,3.664,0,0,1,2.59,2.2,5.577,5.577,0,0,0-1.9-.32,5.847,5.847,0,0,0-5.84,5.84c0,2.98,2.41,8.49,5.84,8.49a5.821,5.821,0,0,0,2.4-.52.683.683,0,0,1,.56,0,5.73,5.73,0,0,0,2.38.52c3.44,0,5.85-5.51,5.85-8.49A5.838,5.838,0,0,0,14.875,6.612Zm-1.77-1.87a2.3,2.3,0,0,1,1.78-.68c0,.06.01.12.01.17a2.326,2.326,0,0,1-.67,1.63,2.359,2.359,0,0,1-1.79.66A2.247,2.247,0,0,1,13.105,4.742Zm1.56,15.19a4.787,4.787,0,0,1-1.97-.43,1.718,1.718,0,0,0-.69-.15,1.649,1.649,0,0,0-.69.15,4.879,4.879,0,0,1-1.99.43c-2.58,0-4.84-4.67-4.84-7.49a4.855,4.855,0,0,1,6.83-4.42,1.56,1.56,0,0,0,.67.15h.02a1.683,1.683,0,0,0,.69-.15,4.777,4.777,0,0,1,1.97-.42,4.852,4.852,0,0,1,4.85,4.84C19.515,15.262,17.245,19.932,14.665,19.932Z" />
  </g>
      </BaseIcon>
    </template>