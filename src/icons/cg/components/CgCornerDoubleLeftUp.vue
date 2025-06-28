<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CgCornerDoubleLeftUp',
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
    d="M7.78372 9.25045L6.36951 7.83624L10.6121 3.59363L14.8548 7.83627L13.4406 9.25048L10.6121 6.42205L7.78372 9.25045Z"
    fill="currentColor"
  />
  <path
    d="M13.4406 13.4932L14.8548 12.0789L10.6121 7.83628L6.36951 12.0789L7.78372 13.4931L9.63052 11.6463V16.4063C9.63052 18.6155 11.4214 20.4063 13.6305 20.4063H17.6305V18.4063H13.6305C12.526 18.4063 11.6305 17.5109 11.6305 16.4063V11.6831L13.4406 13.4932Z"
    fill="currentColor"
  />
      </BaseIcon>
    </template>