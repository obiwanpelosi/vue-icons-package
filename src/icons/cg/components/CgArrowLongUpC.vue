<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CgArrowLongUpC',
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
    d="M7.75751 5.23078L12.0321 1.02029L16.2425 5.29492L14.8177 6.69842L13.0141 4.86736L12.9427 17.1555C14.1054 17.5732 14.9345 18.6881 14.9283 19.994C14.9204 21.6508 13.5709 22.9876 11.9141 22.9797C10.2572 22.9718 8.92049 21.6223 8.92836 19.9655C8.93456 18.6589 9.77508 17.5514 10.9427 17.1454L11.0142 4.83017L9.161 6.65563L7.75751 5.23078ZM11.9331 18.9797C11.3808 18.9771 10.931 19.4227 10.9283 19.975C10.9257 20.5273 11.3713 20.9771 11.9236 20.9797C12.4759 20.9823 12.9257 20.5367 12.9283 19.9845C12.9309 19.4322 12.4853 18.9824 11.9331 18.9797Z"
    fill="currentColor"
  />
      </BaseIcon>
    </template>