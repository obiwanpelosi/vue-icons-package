<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CgArrowLongUpE',
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
    d="M12.0321 1.01318L16.2425 5.28781L14.8177 6.69131L13.014 4.86019L12.9436 16.9774L14.9425 16.9869L14.914 22.9868L8.91412 22.9583L8.9426 16.9584L10.9436 16.9679L11.0142 4.82318L9.16107 6.64852L7.75757 5.22367L12.0321 1.01318ZM10.9236 20.9678L12.9236 20.9773L12.9331 18.9773L10.9331 18.9678L10.9236 20.9678Z"
    fill="currentColor"
  />
      </BaseIcon>
    </template>