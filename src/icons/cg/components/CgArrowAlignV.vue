<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CgArrowAlignV',
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
        <path d="M7 11L7 13H17V11H7Z" fill="currentColor" />
  <path
    d="M7.75732 18L9.17154 16.5858L11 18.4143V14H13V18.4142L14.8284 16.5858L16.2426 18L12 22.2427L7.75732 18Z"
    fill="currentColor"
  />
  <path
    d="M16.2427 5.99996L14.8285 7.41418L13 5.58572V9.99996H11L11 5.58579L9.17161 7.41418L7.75739 5.99996L12 1.75732L16.2427 5.99996Z"
    fill="currentColor"
  />
      </BaseIcon>
    </template>