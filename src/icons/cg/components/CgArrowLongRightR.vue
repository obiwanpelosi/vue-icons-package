<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CgArrowLongRightR',
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
    d="M19.3514 7.72525L23.6012 11.9607L19.3655 16.2105L17.9489 14.7987L19.7633 12.9781L7.89744 13.0188L4.64151 16.2748L0.398865 12.0321L4.64151 7.78947L7.87093 11.0189L19.782 10.9781L17.9395 9.14185L19.3514 7.72525ZM4.64151 13.4463L6.05572 12.0321L4.64151 10.6179L3.22729 12.0321L4.64151 13.4463Z"
    fill="currentColor"
  />
      </BaseIcon>
    </template>