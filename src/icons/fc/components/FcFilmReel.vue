<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'FcFilmReel',
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
          default: '0 0 48 48'
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
        <path fill="#3F51B5" d="M43,39V24h-4v15c0,5,4,9,9,9v-4C45.2,44,43,41.8,43,39z"/>
    <circle fill="#90A4AE" cx="24" cy="24" r="19"/>
    <circle fill="#37474F" cx="24" cy="24" r="2"/>
    <g fill="#253278">
        <circle cx="24" cy="14" r="5"/>
        <circle cx="24" cy="34" r="5"/>
        <circle cx="34" cy="24" r="5"/>
        <circle cx="14" cy="24" r="5"/>
    </g>
      </BaseIcon>
    </template>