<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CgPocket',
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
    d="M3 4H21V11C21 15.9706 16.9706 20 12 20C7.02944 20 3 15.9706 3 11V4ZM1 2H23V11C23 17.0751 18.0751 22 12 22C5.92487 22 1 17.0751 1 11V2ZM11.2929 14.6935C11.6834 15.084 12.3166 15.084 12.7071 14.6935L16.9497 10.4508C17.3403 10.0603 17.3403 9.42714 16.9497 9.03661C16.5592 8.64609 15.9261 8.64609 15.5355 9.03661L12 12.5721L8.46447 9.03661C8.07394 8.64609 7.44078 8.64609 7.05025 9.03661C6.65973 9.42714 6.65973 10.0603 7.05025 10.4508L11.2929 14.6935Z"
    fill="currentColor"
  />
      </BaseIcon>
    </template>