<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CgSortZa',
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
    d="M6 16C6 16.5523 6.44772 17 7 17H17C17.5523 17 18 16.5523 18 16C18 15.4477 17.5523 15 17 15H7C6.44772 15 6 15.4477 6 16Z"
    fill="currentColor"
  />
  <path
    d="M8 12C8 12.5523 8.44772 13 9 13H15C15.5523 13 16 12.5523 16 12C16 11.4477 15.5523 11 15 11H9C8.44772 11 8 11.4477 8 12Z"
    fill="currentColor"
  />
  <path
    d="M11 9C10.4477 9 10 8.55229 10 8C10 7.44771 10.4477 7 11 7H13C13.5523 7 14 7.44771 14 8C14 8.55229 13.5523 9 13 9H11Z"
    fill="currentColor"
  />
      </BaseIcon>
    </template>