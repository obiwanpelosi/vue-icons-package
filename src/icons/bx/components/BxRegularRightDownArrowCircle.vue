<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'BxRegularRightDownArrowCircle',
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
        <path d="M12 2.007a9.928 9.928 0 0 0-7.071 2.922c-3.899 3.899-3.899 10.243 0 14.143A9.93 9.93 0 0 0 12 21.995a9.93 9.93 0 0 0 7.071-2.923c3.899-3.899 3.899-10.243 0-14.143A9.928 9.928 0 0 0 12 2.007zm5.657 15.65A7.946 7.946 0 0 1 12 19.994c-2.141 0-4.15-.83-5.657-2.337-3.119-3.119-3.119-8.195 0-11.314A7.944 7.944 0 0 1 12 4.007c2.141 0 4.15.829 5.657 2.336 3.119 3.119 3.119 8.195 0 11.314z"/><path d="M9.661 8.247 8.247 9.661l3.214 3.214L9.336 15H15V9.337l-2.125 2.124z"/>
      </BaseIcon>
    </template>