<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'AiOutlinePinterest',
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
          default: '0 0 1024 1024'
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
        <path d="M448 0C200.807 0 0 200.807 0 448s200.807 448 448 448 448-200.807 448-448S695.193 0 448 0m0 38.957c226.14 0 409.043 182.904 409.043 409.043 0 226.14-182.904 409.043-409.043 409.043-41.365 0-81.269-6.19-118.886-17.576 16.756-28.014 38.39-68.058 46.984-101.12 5.106-19.601 26.098-99.559 26.098-99.559 13.642 26.045 53.503 48.087 95.945 48.087 126.295 0 217.343-116.149 217.343-260.484 0-138.375-112.916-241.88-258.201-241.88-180.753 0-276.69 121.314-276.69 253.407 0 61.433 32.673 137.902 84.989 162.256 7.924 3.688 12.18 2.09 14-5.592 1.4-5.831 8.468-34.255 11.64-47.479 1.016-4.22.524-7.866-2.89-12.021-17.316-21.004-31.196-59.583-31.196-95.566 0-92.374 69.932-181.771 189.076-181.771 102.875 0 174.924 70.13 174.924 170.396 0 113.281-57.2 191.777-131.63 191.777-41.106 0-71.885-34.005-62.011-75.706 11.838-49.77 34.695-103.478 34.695-139.43 0-32.149-17.253-58.967-52.994-58.967-42.024 0-75.783 43.447-75.783 101.69 0 37.063 12.554 62.163 12.554 62.163s-41.511 175.51-49.114 208.174c-7.619 32.642-5.578 76.605-2.435 109.337C144.551 766.518 38.957 619.785 38.957 448 38.957 221.86 221.86 38.957 448 38.957" transform="translate(64 64)"/>
      </BaseIcon>
    </template>