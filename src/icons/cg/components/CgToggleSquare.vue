<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CgToggleSquare',
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
    d="M9 9C9.55228 9 10 9.44772 10 10V14C10 14.5523 9.55228 15 9 15H5C4.44772 15 4 14.5523 4 14V10C4 9.44772 4.44772 9 5 9H9Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M24 7C24 5.89543 23.1046 5 22 5H2C0.89543 5 0 5.89543 0 7V17C0 18.1046 0.895432 19 2 19H22C23.1046 19 24 18.1046 24 17V7ZM22 7H2V17H22V7Z"
    fill="currentColor"
  />
      </BaseIcon>
    </template>