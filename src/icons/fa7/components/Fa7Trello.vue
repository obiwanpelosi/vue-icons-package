<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7Trello',
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
          default: '0 0 448 512'
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
        <path fill="currentColor" d="M392.3 32L56.1 32c-31 0-56.1 25.1-56.1 56-.1 0 0-4 0 336 0 30.9 25.1 56 56 56l336.2 0c30.8-.2 55.7-25.2 55.7-56l0-336c.1-30.8-24.8-55.8-55.6-56zM197 371.3c-.2 14.7-12.1 26.6-26.9 26.6l-82.7 0c-14.8 .1-26.9-11.8-27-26.6l0-254.2c0-14.8 12-26.9 26.9-26.9l82.9 0c14.8 0 26.9 12 26.9 26.9l0 254.2-.1 0zm193.1-112c0 14.8-12 26.9-26.9 26.9l-81 0c-14.8 0-26.9-12-26.9-26.9l0-142.1c0-14.8 12-26.9 26.8-26.9l81.1 0c14.8 0 26.9 12 26.9 26.9l0 142.1z"/>
      </BaseIcon>
    </template>