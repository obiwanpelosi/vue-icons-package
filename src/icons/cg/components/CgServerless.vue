<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CgServerless',
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
        <path d="M11.7872 6H5V9H10.6953L11.7872 6Z" fill="currentColor" />
  <path d="M9.96735 11H5V14H8.87544L9.96735 11Z" fill="currentColor" />
  <path d="M11.0038 14L12.0957 11H20V14H11.0038Z" fill="currentColor" />
  <path d="M8.1475 16H5V19H7.05559L8.1475 16Z" fill="currentColor" />
  <path d="M9.18394 19L10.2759 16H20V19H9.18394Z" fill="currentColor" />
  <path d="M12.8236 9L13.9156 6H20V9H12.8236Z" fill="currentColor" />
      </BaseIcon>
    </template>