<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CgCalculator',
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
        <path d="M17 5H7V7H17V5Z" fill="currentColor" />
  <path d="M7 9H9V11H7V9Z" fill="currentColor" />
  <path d="M9 13H7V15H9V13Z" fill="currentColor" />
  <path d="M7 17H9V19H7V17Z" fill="currentColor" />
  <path d="M13 9H11V11H13V9Z" fill="currentColor" />
  <path d="M11 13H13V15H11V13Z" fill="currentColor" />
  <path d="M13 17H11V19H13V17Z" fill="currentColor" />
  <path d="M15 9H17V11H15V9Z" fill="currentColor" />
  <path d="M17 13H15V19H17V13Z" fill="currentColor" />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M3 3C3 1.89543 3.89543 1 5 1H19C20.1046 1 21 1.89543 21 3V21C21 22.1046 20.1046 23 19 23H5C3.89543 23 3 22.1046 3 21V3ZM5 3H19V21H5V3Z"
    fill="currentColor"
  />
      </BaseIcon>
    </template>