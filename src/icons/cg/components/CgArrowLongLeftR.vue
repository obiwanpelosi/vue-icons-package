<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CgArrowLongLeftR',
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
    d="M4.64872 7.72528L0.398926 11.9608L4.63443 16.2105L6.05103 14.7987L4.23673 12.9783L16.1027 13.019L19.3585 16.2747L23.6011 12.0321L19.3585 7.78945L16.1289 11.019L4.21801 10.9782L6.06055 9.14188L4.64872 7.72528ZM17.9443 12.0321L19.3585 10.6179L20.7727 12.0321L19.3585 13.4463L17.9443 12.0321Z"
    fill="currentColor"
  />
      </BaseIcon>
    </template>