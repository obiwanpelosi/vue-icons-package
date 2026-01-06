<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7Uber',
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
        <path fill="currentColor" d="M414.1 32L33.9 32C15.2 32 0 47.2 0 65.9L0 446c0 18.8 15.2 34 33.9 34L414 480c18.7 0 33.9-15.2 33.9-33.9l0-380.2C448 47.2 432.8 32 414.1 32zM237.6 391.1C163 398.6 96.4 344.2 88.9 269.6l94.4 0 0 20.4c0 3.7 3 6.8 6.8 6.8l67.9 0c3.7 0 6.8-3 6.8-6.8l0-67.9c0-3.7-3-6.8-6.8-6.8l-67.9 0c-3.7 0-6.8 3-6.8 6.8l0 20.4-94.4 0c7-69.4 65.4-122.2 135.1-122.2s128.1 52.8 135.1 122.2c7.5 74.5-46.9 141.1-121.5 148.6z"/>
      </BaseIcon>
    </template>