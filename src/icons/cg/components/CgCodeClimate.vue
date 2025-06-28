<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CgCodeClimate',
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
    d="M9.49506 8.1109L3.1311 14.4749L4.54532 15.8891L9.49506 10.9393L14.4448 15.8891L15.859 14.4749L9.49506 8.1109Z"
    fill="currentColor"
  />
  <path
    d="M14.5049 8.11092L12.5317 10.0842L13.9503 11.494L14.5049 10.9393L19.4547 15.8891L20.8689 14.4749L14.5049 8.11092Z"
    fill="currentColor"
  />
      </BaseIcon>
    </template>