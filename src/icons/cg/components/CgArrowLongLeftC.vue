<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CgArrowLongLeftC',
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
    d="M5.27 7.75737L1.0202 11.9928L5.25576 16.2426L6.67236 14.8308L4.85801 13.0103L17.1463 13.0525C17.5532 14.219 18.6604 15.0583 19.9663 15.0642C21.6231 15.0717 22.9723 13.7346 22.9798 12.0777C22.9872 10.4209 21.6501 9.07172 19.9933 9.06427C18.6867 9.05841 17.5715 9.88865 17.1547 11.0525L4.83934 11.0102L6.68182 9.17397L5.27 7.75737ZM18.9798 12.0598C18.9823 11.5075 19.432 11.0618 19.9843 11.0643C20.5366 11.0667 20.9823 11.5165 20.9798 12.0687C20.9773 12.621 20.5276 13.0667 19.9753 13.0642C19.423 13.0618 18.9773 12.612 18.9798 12.0598Z"
    fill="currentColor"
  />
      </BaseIcon>
    </template>