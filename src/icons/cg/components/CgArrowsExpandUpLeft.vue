<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CgArrowsExpandUpLeft',
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
    d="M5 11H3L3 3L11 3V5L6.41419 5L11.7781 10.3639C12.1686 10.7545 12.1686 11.3876 11.7781 11.7782C11.3876 12.1687 10.7544 12.1687 10.3639 11.7782L5 6.41424L5 11Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M19 13C20.1046 13 21 13.8954 21 15V19C21 20.1046 20.1046 21 19 21H15C13.8954 21 13 20.1046 13 19V15C13 13.8954 13.8954 13 15 13H19ZM19 15V19H15V15H19Z"
    fill="currentColor"
  />
      </BaseIcon>
    </template>