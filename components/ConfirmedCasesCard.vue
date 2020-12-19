<template>
  <data-view :title="title" :title-id="titleId" :date="date">
    <template v-slot:button>
      <p :class="$style.note">
        {{ $t('※県外対応となった2人は、上の表に計上していない。') }}<br />
        {{ $t('※県外での感染確認で、県内対応となった2人は、上の表に計上している。') }}
      </p>
    </template>
    <slot />
  </data-view>
</template>

<style lang="scss" module>
.note {
  margin-top: 10px;
  margin-bottom: 0;
  font-size: 12px;
  color: $gray-3;
}
</style>

<script lang="ts">
import Vue from 'vue'
import DataView from '@/components/DataView.vue'

export default Vue.extend({
  components: { DataView },
  props: {
    title: {
      type: String,
      default: ''
    },
    titleId: {
      type: String,
      default: ''
    },
    date: {
      type: String,
      default: ''
    }
  }
})
</script>
