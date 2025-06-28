<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CgPaypal',
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
    d="M6.47005 3.54443H14.4701C16.1089 3.54443 17.4146 4.31866 18.0963 5.51496C19.3165 6.38743 19.9427 7.91487 19.6082 9.65332C19.0865 12.365 16.425 14.5633 13.6636 14.5633H11.6636L10.5301 20.4553H6.39824L6.62891 19.2563H3.44727L6.47005 3.54443ZM8.0922 5.50842H14.0922C15.7491 5.50842 16.8385 6.82737 16.5254 8.45439C16.2124 10.0814 14.6155 11.4004 12.9587 11.4004H8.95866L7.82511 17.2923H5.82511L8.0922 5.50842Z"
    fill="currentColor"
  />
      </BaseIcon>
    </template>