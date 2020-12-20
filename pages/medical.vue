<template>
  <div class="Parent">
    <page-header class="mb-3">
      {{ $t('医療体制整備状況') }}
    </page-header>
    <StaticCard>
        <div :class="$style.medical_card_title">
            {{ $t("入院患者受入確保病床数") }}
        </div>
        <div :class="$style.medical_card_value">
            <span :class="$style.medical_card_number">
                199
            </span>
            <span :class="$style.medical_card_unit">
                {{ $t("床")}}
            </span>
        </div>
    </StaticCard>
    <StaticCard>
        <div :class="$style.medical_card_title">
            {{ $t("宿泊施設受入可能室数") }}
        </div>
        <div :class="$style.medical_card_value">
            <span :class="$style.medical_card_number">
                101
            </span>
            <span :class="$style.medical_card_unit">
                {{ $t("台")}}
            </span>
        </div>
    </StaticCard>
  </div>
</template>

<style lang="scss" module>
.medical_card_title {
    margin-bottom: 10px;
    line-height: 1.5;
    font-weight: 400;
    color: #4d4d4d;
    font-size: 1.4rem;
}

.medical_card_value {
    text-align: center;
    .medical_card_number {
        font-weight: bold;
        font-size: 64px;
        color: #000;
    }

    .medical_card_unit {
        font-size: 32px;
        color: #000;
    }
}
</style>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'
import StaticCard from '@/components/StaticCard.vue'
import PageHeader from '@/components/PageHeader.vue'

export default Vue.extend({
  components: {
    PageHeader,
    StaticCard
  },
  head(): MetaInfo {
    return {
      title: this.$t('医療整備体制状況') as string
    }
  }
})
</script>
