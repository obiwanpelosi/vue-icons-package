<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CgCornerDoubleLeftDown',
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
    d="M21.299 7.7609L16.2801 12.6405L14.8859 11.2065L17.3217 8.83829L11.3015 8.85324C9.97605 8.85653 8.9042 9.93371 8.9075 11.2592L8.92214 17.1591L11.1898 14.903L12.6004 16.3208L7.63814 21.258L2.70093 16.2957L4.11871 14.8851L6.52249 17.3011L6.5075 11.2652C6.50092 8.61419 8.64461 6.45983 11.2956 6.45325L17.224 6.43853L14.9855 4.1361L16.4195 2.74194L21.299 7.7609Z"
    fill="currentColor"
  />
      </BaseIcon>
    </template>