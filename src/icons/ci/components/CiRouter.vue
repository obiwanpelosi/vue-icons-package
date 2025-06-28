<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CiRouter',
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
        <g id="Router">
    <g>
      <path d="M19.44,10.94H17.93V4.54a.5.5,0,0,0-1,0v6.4H7.06V7a.5.5,0,0,0-1,0v3.94H4.56a2.507,2.507,0,0,0-2.5,2.5v4a2.514,2.514,0,0,0,2.5,2.5H19.44a2.507,2.507,0,0,0,2.5-2.5v-4A2.5,2.5,0,0,0,19.44,10.94Zm1.5,6.5a1.5,1.5,0,0,1-1.5,1.5H4.56a1.511,1.511,0,0,1-1.5-1.5v-4a1.5,1.5,0,0,1,1.5-1.5H19.44a1.5,1.5,0,0,1,1.5,1.5Z" />
      <circle cx="4.75" cy="15.436" r="0.75" />
      <circle cx="8.25" cy="15.436" r="0.75" />
      <path d="M18.5,16.936h-5a1.5,1.5,0,1,1,0-3h5a1.5,1.5,0,0,1,0,3Zm-5-2a.5.5,0,1,0,0,1h5a.5.5,0,0,0,0-1Z" />
    </g>
  </g>
      </BaseIcon>
    </template>