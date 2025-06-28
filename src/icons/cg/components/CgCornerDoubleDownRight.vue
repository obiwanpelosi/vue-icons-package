<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CgCornerDoubleDownRight',
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
    d="M12.6004 7.67915L7.63814 2.74194L2.70093 7.7042L4.11871 9.11483L6.52249 6.69886L6.5075 12.7348C6.50092 15.3857 8.64461 17.5401 11.2956 17.5467L17.224 17.5614L14.9855 19.8638L16.4195 21.258L21.299 16.239L16.2801 11.3595L14.8859 12.7934L17.3217 15.1616L11.3015 15.1467C9.97605 15.1434 8.9042 14.0662 8.9075 12.7407L8.92214 6.84077L11.1898 9.09694L12.6004 7.67915Z"
    fill="currentColor"
  />
      </BaseIcon>
    </template>