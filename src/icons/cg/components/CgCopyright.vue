<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CgCopyright',
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
    d="M13.392 10.4362L14.8106 9.0176C14.1031 8.38476 13.169 8 12.145 8C9.93588 8 8.14502 9.79086 8.14502 12C8.14502 14.2091 9.93588 16 12.145 16C13.2563 16 14.2617 15.5468 14.9866 14.8152L13.674 13.5026L13.4646 13.503C13.1124 13.8124 12.6506 14 12.145 14C11.0405 14 10.145 13.1046 10.145 12C10.145 10.8954 11.0405 10 12.145 10C12.6166 10 13.0501 10.1632 13.392 10.4362Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3ZM12 5C15.866 5 19 8.13401 19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12C5 8.13401 8.13401 5 12 5Z"
    fill="currentColor"
  />
      </BaseIcon>
    </template>