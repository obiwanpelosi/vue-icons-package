<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CiCircleQuestion',
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
        <g id="Circle_Question" data-name="Circle Question">
    <g>
      <g>
        <path d="M11.411,12.459a1.547,1.547,0,0,1,.341-.6,2.644,2.644,0,0,1,.535-.417,2.2,2.2,0,0,0,.363-.286,1.2,1.2,0,0,0,.256-.363A1.084,1.084,0,0,0,13,10.341a.923.923,0,0,0-.142-.517.938.938,0,0,0-.374-.338,1.123,1.123,0,0,0-.519-.119,1.173,1.173,0,0,0-.495.107.934.934,0,0,0-.389.335.884.884,0,0,0-.111.224.516.516,0,0,1-.483.359h0a.506.506,0,0,1-.479-.675,1.661,1.661,0,0,1,.178-.349,1.8,1.8,0,0,1,.748-.634,2.437,2.437,0,0,1,1.031-.215,2.4,2.4,0,0,1,1.082.231,1.737,1.737,0,0,1,.721.641,1.772,1.772,0,0,1,.257.96,1.841,1.841,0,0,1-.118.678,1.685,1.685,0,0,1-.334.536,2.289,2.289,0,0,1-.52.417,2.277,2.277,0,0,0-.462.369,1.113,1.113,0,0,0-.256.455,2.344,2.344,0,0,0-.045.283.487.487,0,0,1-.483.429h0a.484.484,0,0,1-.483-.531A2.931,2.931,0,0,1,11.411,12.459Z" />
        <circle cx="11.793" cy="14.891" r="0.587" />
      </g>
      <path d="M12,21.931A9.934,9.934,0,1,1,21.934,12,9.945,9.945,0,0,1,12,21.931ZM12,3.064A8.934,8.934,0,1,0,20.934,12,8.943,8.943,0,0,0,12,3.064Z" />
    </g>
  </g>
      </BaseIcon>
    </template>