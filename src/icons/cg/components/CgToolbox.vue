<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CgToolbox',
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
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M17 5.5H20C21.1046 5.5 22 6.39543 22 7.5V19.5C22 20.6046 21.1046 21.5 20 21.5H4C2.89543 21.5 2 20.6046 2 19.5V7.5C2 6.39543 2.89543 5.5 4 5.5H7C7 3.84315 8.34315 2.5 10 2.5H14C15.6569 2.5 17 3.84315 17 5.5ZM14 4.5H10C9.44772 4.5 9 4.94772 9 5.5H15C15 4.94772 14.5523 4.5 14 4.5ZM20 7.5H4V9.5H20V7.5ZM4 19.5V11.5H7V13.5H11V11.5H13V13.5H17V11.5H20V19.5H4Z"
    fill="currentColor"
  />
      </BaseIcon>
    </template>