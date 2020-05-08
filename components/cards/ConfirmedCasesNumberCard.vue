<template>
  <v-col cols="12" md="6" class="DataCard">
    <time-bar-chart
      :title="$t('陽性患者数')"
      :title-id="'number-of-confirmed-cases'"
      :chart-id="'time-bar-chart-patients'"
      :chart-data="patientsGraph"
      :date="patientsSummary.date"
      :unit="$t('人')"
      :url="
        'https://opendata.pref.kagawa.lg.jp/dataset/359.html'
      "
    />
  </v-col>
</template>

<script>
import patientsSummary from '@/data/patients_summary.json'
import formatGraph from '@/utils/formatGraph'
import TimeBarChart from '@/components/TimeBarChart.vue'

export default {
  components: {
    TimeBarChart
  },
  data() {
    // 感染者数グラフ
    const patientsGraph = formatGraph(patientsSummary.data)

    const data = {
      patientsSummary,
      patientsGraph
    }
    return data
  }
}
</script>
