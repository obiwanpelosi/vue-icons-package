<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'BxRegularVial',
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
        <path d="m11.95 3.564.708.707-9.193 9.193C2.521 14.408 2 15.664 2 17s.521 2.592 1.465 3.535C4.408 21.479 5.664 22 7 22s2.592-.521 3.535-1.465l9.193-9.193.707.708 1.414-1.414-8.485-8.486-1.414 1.414zM9.121 19.121c-1.133 1.133-3.109 1.133-4.242 0C4.313 18.555 4 17.802 4 17s.313-1.555.879-2.121L5.758 14h8.484l-5.121 5.121zM16.242 12H7.758l6.314-6.314 4.242 4.242L16.242 12z"/>
      </BaseIcon>
    </template>