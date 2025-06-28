<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CgCornerRightUp',
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
    d="M9.28999 10.6254L7.87709 9.20989L14.2469 2.85181L20.605 9.22164L19.1895 10.6346L15.4082 6.84631L15.3987 17.152C15.3967 19.3611 13.6042 21.1503 11.395 21.1483L3.39502 21.1409L3.39687 19.1409L11.3969 19.1483C12.5014 19.1493 13.3977 18.2547 13.3987 17.1501L13.4085 6.51446L9.28999 10.6254Z"
    fill="currentColor"
  />
      </BaseIcon>
    </template>