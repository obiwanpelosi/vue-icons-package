<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CgArrowLongRightE',
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
    d="M22.9865 11.9929L18.7511 16.2426L17.3345 14.8308L19.1488 13.0104L7.0314 13.0519L7.04038 15.0507L1.04044 15.0777L1.01349 9.07773L7.01343 9.05079L7.02242 11.0519L19.1674 11.0103L17.3249 9.17398L18.7367 7.75739L22.9865 11.9929ZM3.02245 11.0687L3.03143 13.0687L5.03141 13.0597L5.02243 11.0597L3.02245 11.0687Z"
    fill="currentColor"
  />
      </BaseIcon>
    </template>