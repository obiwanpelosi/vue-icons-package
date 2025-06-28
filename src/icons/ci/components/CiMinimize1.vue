<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CiMinimize1',
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
        <g id="Minimize_1" data-name="Minimize 1">
    <g>
      <path d="M11,17.78a.5.5,0,0,1-1,0V14.71L3.92,20.79a.5.5,0,0,1-.71-.71c.29-.29.58-.57.87-.86C5.82,17.48,7.55,15.74,9.3,14H6.22a.5.5,0,0,1,0-1H10.5a.429.429,0,0,1,.34.14c.01.01.02.01.02.02a.384.384,0,0,1,.13.26Z" />
      <path d="M14.7,10h3.08a.5.5,0,0,1,0,1H13.5a.429.429,0,0,1-.34-.14c-.01-.01-.02-.01-.02-.02a.384.384,0,0,1-.13-.26L13,6.22a.5.5,0,0,1,1,0V9.29l.01-.01,6.07-6.07a.5.5,0,0,1,.71.71Z" />
    </g>
  </g>
      </BaseIcon>
    </template>