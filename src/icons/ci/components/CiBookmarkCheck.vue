<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CiBookmarkCheck',
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
        <g id="Bookmark_Check" data-name="Bookmark Check">
    <g>
      <path d="M17.6,21.938a1.482,1.482,0,0,1-1.011-.4l-4.251-3.9a.5.5,0,0,0-.678,0L7.41,21.538a1.5,1.5,0,0,1-2.517-1.1V4.563a2.5,2.5,0,0,1,2.5-2.5h9.214a2.5,2.5,0,0,1,2.5,2.5V20.435a1.483,1.483,0,0,1-.9,1.375A1.526,1.526,0,0,1,17.6,21.938ZM12,16.5a1.5,1.5,0,0,1,1.018.395L17.269,20.8a.5.5,0,0,0,.838-.368V4.563a1.5,1.5,0,0,0-1.5-1.5H7.393a1.5,1.5,0,0,0-1.5,1.5V20.435a.5.5,0,0,0,.839.368L10.983,16.9A1.5,1.5,0,0,1,12,16.5Z" />
      <path d="M14.85,9.08c-.11.12-.23.23-.35.35-.83.83-1.65,1.65-2.47,2.48a.513.513,0,0,1-.71,0c-.47-.48-.94-.95-1.42-1.42a.5.5,0,0,1,.71-.71c.35.36.7.71,1.06,1.06.83-.82,1.65-1.65,2.48-2.47C14.6,7.91,15.31,8.62,14.85,9.08Z" />
    </g>
  </g>
      </BaseIcon>
    </template>