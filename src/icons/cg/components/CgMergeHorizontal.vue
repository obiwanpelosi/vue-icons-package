<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CgMergeHorizontal',
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
    d="M12 8.9757L16.2426 4.73306L14.8284 3.31885L12 6.14727L9.17157 3.31885L7.75736 4.73306L12 8.9757Z"
    fill="currentColor"
  />
  <path
    d="M5 11.9998C5 11.4475 5.44772 10.9997 6 10.9997H18C18.5523 10.9997 19 11.4475 19 11.9998C19 12.552 18.5523 12.9998 18 12.9998H6C5.44772 12.9998 5 12.552 5 11.9998Z"
    fill="currentColor"
  />
  <path
    d="M12 15.0242L7.75736 19.2668L9.17157 20.681L12 17.8526L14.8284 20.681L16.2426 19.2668L12 15.0242Z"
    fill="currentColor"
  />
      </BaseIcon>
    </template>