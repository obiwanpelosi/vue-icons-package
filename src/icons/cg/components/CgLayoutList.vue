<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CgLayoutList',
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
        <path d="M9 7H7V9H9V7Z" fill="currentColor" />
  <path d="M7 13V11H9V13H7Z" fill="currentColor" />
  <path d="M7 15V17H9V15H7Z" fill="currentColor" />
  <path d="M11 15V17H17V15H11Z" fill="currentColor" />
  <path d="M17 13V11H11V13H17Z" fill="currentColor" />
  <path d="M17 7V9H11V7H17Z" fill="currentColor" />
      </BaseIcon>
    </template>