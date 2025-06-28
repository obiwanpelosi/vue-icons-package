<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CiCalendarDate',
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
        <g id="Calendar_Date" data-name="Calendar Date">
    <g>
      <path d="M18.435,4.955H16.5V3.545a.5.5,0,0,0-1,0v1.41h-7V3.545a.5.5,0,1,0-1,0v1.41H5.565a2.5,2.5,0,0,0-2.5,2.5v11a2.5,2.5,0,0,0,2.5,2.5h12.87a2.5,2.5,0,0,0,2.5-2.5v-11A2.5,2.5,0,0,0,18.435,4.955Zm1.5,13.5a1.5,1.5,0,0,1-1.5,1.5H5.565a1.5,1.5,0,0,1-1.5-1.5v-8.42h15.87Zm0-9.42H4.065V7.455a1.5,1.5,0,0,1,1.5-1.5H7.5v.59a.5.5,0,0,0,1,0v-.59h7v.59a.5.5,0,0,0,1,0v-.59h1.94a1.5,1.5,0,0,1,1.5,1.5Z" />
      <path d="M11.492,17.173V13.714a.075.075,0,0,0-.114-.064l-.638.392a.15.15,0,0,1-.229-.128v-.65a.3.3,0,0,1,.146-.258l.764-.457a.3.3,0,0,1,.154-.043H12.2a.3.3,0,0,1,.3.3v4.367a.3.3,0,0,1-.3.3h-.409A.3.3,0,0,1,11.492,17.173Z" />
    </g>
  </g>
      </BaseIcon>
    </template>