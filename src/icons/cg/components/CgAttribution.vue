<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CgAttribution',
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
    d="M6 8C6.74028 8 7.38663 7.5978 7.73244 7H14C15.1046 7 16 7.89543 16 9C16 10.1046 15.1046 11 14 11H10C7.79086 11 6 12.7909 6 15C6 17.2091 7.79086 19 10 19H16.2676C16.6134 19.5978 17.2597 20 18 20C19.1046 20 20 19.1046 20 18C20 16.8954 19.1046 16 18 16C17.2597 16 16.6134 16.4022 16.2676 17H10C8.89543 17 8 16.1046 8 15C8 13.8954 8.89543 13 10 13H14C16.2091 13 18 11.2091 18 9C18 6.79086 16.2091 5 14 5H7.73244C7.38663 4.4022 6.74028 4 6 4C4.89543 4 4 4.89543 4 6C4 7.10457 4.89543 8 6 8Z"
    fill="currentColor"
  />
      </BaseIcon>
    </template>