<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CgGitBranch',
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
    d="M9 3C7.89543 3 7 3.89543 7 5C7 5.74028 7.4022 6.38663 8 6.73244V17.2676C7.4022 17.6134 7 18.2597 7 19C7 20.1046 7.89543 21 9 21C9.74028 21 10.3866 20.5978 10.7324 20H11.9585C14.1676 20 15.9585 18.2091 15.9585 16V14.7324C16.5563 14.3866 16.9585 13.7403 16.9585 13C16.9585 11.8954 16.0631 11 14.9585 11C13.8539 11 12.9585 11.8954 12.9585 13C12.9585 13.7403 13.3607 14.3866 13.9585 14.7324V16C13.9585 17.1046 13.0631 18 11.9585 18H10.7324C10.5568 17.6964 10.3036 17.4432 10 17.2676V6.73244C10.5978 6.38663 11 5.74028 11 5C11 3.89543 10.1046 3 9 3Z"
    fill="currentColor"
  />
      </BaseIcon>
    </template>