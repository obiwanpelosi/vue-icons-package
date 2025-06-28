<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CgArrowLongDownC',
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
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M10.9991 6.84976C9.83339 6.43819 8.99813 5.32671 8.99813 4.02014C8.99813 2.36329 10.3413 1.02014 11.9981 1.02014C13.655 1.02014 14.9981 2.36329 14.9981 4.02014C14.9981 5.32601 14.1638 6.43701 12.9991 6.84911L13.0121 19.1375L14.8244 17.315L16.2426 18.7253L12.0119 22.9799L7.75739 18.7491L9.16763 17.3309L11.0122 19.1652L10.9991 6.84976ZM11.9981 5.02014C11.4458 5.02014 10.9981 4.57243 10.9981 4.02014C10.9981 3.46786 11.4458 3.02014 11.9981 3.02014C12.5504 3.02014 12.9981 3.46786 12.9981 4.02014C12.9981 4.57243 12.5504 5.02014 11.9981 5.02014Z"
    fill="currentColor"
  />
      </BaseIcon>
    </template>