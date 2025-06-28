<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CgLayoutGridSmall',
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
        <path d="M7 7H9V9H7V7Z" fill="currentColor" />
  <path d="M11 7H13V9H11V7Z" fill="currentColor" />
  <path d="M17 7H15V9H17V7Z" fill="currentColor" />
  <path d="M7 11H9V13H7V11Z" fill="currentColor" />
  <path d="M13 11H11V13H13V11Z" fill="currentColor" />
  <path d="M15 11H17V13H15V11Z" fill="currentColor" />
  <path d="M9 15H7V17H9V15Z" fill="currentColor" />
  <path d="M11 15H13V17H11V15Z" fill="currentColor" />
  <path d="M17 15H15V17H17V15Z" fill="currentColor" />
      </BaseIcon>
    </template>