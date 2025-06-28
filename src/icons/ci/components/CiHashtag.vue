<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CiHashtag',
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
        <g id="Hashtag">
    <path d="M20.435,15.506H16.2l.61-7h3.63a.5.5,0,0,0,.5-.5.5.5,0,0,0-.5-.5H16.9l.34-3.87a.509.509,0,0,0-.46-.54.5.5,0,0,0-.54.46l-.35,3.95H8.9l.34-3.87a.509.509,0,0,0-.46-.54.491.491,0,0,0-.54.46l-.35,3.95H3.565a.5.5,0,0,0-.5.5.5.5,0,0,0,.5.5h4.24l-.62,7H3.565a.5.5,0,0,0-.5.5.5.5,0,0,0,.5.5h3.54l-.34,3.86a.508.508,0,0,0,.45.54h.05a.516.516,0,0,0,.5-.46l.34-3.94h7l-.34,3.86a.508.508,0,0,0,.45.54h.05a.516.516,0,0,0,.5-.46l.34-3.94h4.33a.5.5,0,0,0,.5-.5A.5.5,0,0,0,20.435,15.506Zm-5.25,0H8.2l.61-7h7Z" />
  </g>
      </BaseIcon>
    </template>