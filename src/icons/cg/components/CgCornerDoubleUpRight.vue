<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CgCornerDoubleUpRight',
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
    d="M14.7495 7.78369L16.1638 6.36948L20.4064 10.6121L16.1637 14.8547L14.7495 13.4405L17.5779 10.6121L14.7495 7.78369Z"
    fill="currentColor"
  />
  <path
    d="M10.5068 13.4405L11.9211 14.8547L16.1637 10.6121L11.9211 6.36948L10.5069 7.78369L12.3537 9.63049L7.59366 9.63049C5.38452 9.63049 3.59366 11.4214 3.59366 13.6305L3.59366 17.6305L5.59366 17.6305L5.59366 13.6305C5.59366 12.5259 6.48909 11.6305 7.59366 11.6305L12.3169 11.6305L10.5068 13.4405Z"
    fill="currentColor"
  />
      </BaseIcon>
    </template>