<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CgUmbrella',
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
    d="M4 9C4 4.58172 7.58172 1 12 1C16.4183 1 20 4.58172 20 9V11H13.0187V20.5C13.0187 21.8807 11.8994 23 10.5187 23C9.13797 23 8.01868 21.8807 8.01868 20.5V17.8571H10.0187V20.5C10.0187 20.7761 10.2425 21 10.5187 21C10.7948 21 11.0187 20.7761 11.0187 20.5V11H4V9ZM12 3C15.3137 3 18 5.68629 18 9H6C6 5.68629 8.68629 3 12 3Z"
    fill="currentColor"
  />
      </BaseIcon>
    </template>