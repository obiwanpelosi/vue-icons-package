<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'FcRuler',
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
        <rect x="16.7" y="1.6" transform="matrix(-.707 -.707 .707 -.707 24 57.941)" fill="#FFA000" width="14.6" height="44.8"/>
    <g fill="#9E6400">
        <rect x="17.9" y="20.2" transform="matrix(-.707 -.707 .707 -.707 21.177 51.125)" width="6.6" height="2"/>
        <rect x="22.3" y="15.2" transform="matrix(-.707 -.707 .707 -.707 29.833 44.71)" width="3.7" height="2"/>
        <rect x="25.9" y="12.2" transform="matrix(-.707 -.707 .707 -.707 40.49 43.125)" width="6.6" height="2"/>
        <rect x="31.2" y="6.3" transform="matrix(.707 -.707 .707 .707 3.643 25.147)" width="2" height="3.7"/>
        <rect x="6.3" y="31.2" transform="matrix(-.707 -.707 .707 -.707 -8.794 60.71)" width="3.7" height="2"/>
        <rect x="9.9" y="28.2" transform="matrix(-.707 -.707 .707 -.707 1.863 59.125)" width="6.6" height="2"/>
        <rect x="14.3" y="23.2" transform="matrix(-.707 -.707 .707 -.707 10.52 52.71)" width="3.7" height="2"/>
    </g>
      </BaseIcon>
    </template>