<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CgMergeVertical',
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
    d="M8.97576 12L4.73312 7.75736L3.31891 9.17157L6.14734 12L3.31891 14.8284L4.73312 16.2426L8.97576 12Z"
    fill="currentColor"
  />
  <path
    d="M11.9998 19C11.4475 19 10.9998 18.5523 10.9998 18V6C10.9998 5.44772 11.4475 5 11.9998 5C12.5521 5 12.9998 5.44772 12.9998 6V18C12.9998 18.5523 12.5521 19 11.9998 19Z"
    fill="currentColor"
  />
  <path
    d="M15.0242 12L19.2669 16.2426L20.6811 14.8284L17.8527 12L20.6811 9.17157L19.2669 7.75736L15.0242 12Z"
    fill="currentColor"
  />
      </BaseIcon>
    </template>