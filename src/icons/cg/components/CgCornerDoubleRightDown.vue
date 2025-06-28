<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CgCornerDoubleRightDown',
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
        <path
    d="M7.69438 12.7048L2.63776 7.86424L7.47827 2.80762L8.92302 4.19062L6.56623 6.65263L12.6002 6.49061C15.2502 6.41945 17.4561 8.51002 17.5273 11.16L17.6864 17.0862L19.9335 14.7924L21.3622 16.192L16.4636 21.1924L11.4632 16.2938L12.8628 14.8651L15.2897 17.2426L15.1281 11.2245C15.0926 9.89945 13.9896 8.85417 12.6646 8.88974L6.76674 9.04811L9.07738 11.26L7.69438 12.7048Z"
    fill="currentColor"
  />
      </BaseIcon>
    </template>