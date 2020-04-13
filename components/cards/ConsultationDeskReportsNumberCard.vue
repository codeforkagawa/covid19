<template>
  <v-col cols="12" md="6" class="DataCard">
    <time-bar-chart
      :title="$t('「帰国者・接触者相談センター」受診相談件数')"
      :title-id="'number-of-reports-to-covid19-consultation-desk'"
      :chart-id="'time-bar-chart-querents'"
      :chart-data="querentsGraph"
      :date="querents.date"
      :unit="$t('件.reports')"
      :url="
        'https://www.pref.kagawa.lg.jp/content/etc/subsite/kansenshoujouhou/kansen/sr5cfn200127213457.shtml#kennai'
      "
    />
    <!-- 件.reports = 窓口相談件数 -->
  </v-col>
</template>

<script>
import querents from '@/data/querents.json'
import formatGraph from '@/utils/formatGraph'
import TimeBarChart from '@/components/TimeBarChart.vue'

export default {
  components: {
    TimeBarChart
  },
  data() {
    // 帰国者・接触者 電話相談センター 相談件数
    const querentsGraph = formatGraph(querents.data)

    const data = {
      querents,
      querentsGraph
    }
    return data
  }
}
</script>
