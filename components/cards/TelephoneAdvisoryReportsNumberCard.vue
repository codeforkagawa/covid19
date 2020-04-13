<template>
  <v-col cols="12" md="6" class="DataCard">
    <time-bar-chart
      :title="$t('「帰国者・接触者相談センター」一般相談件数')"
      :title-id="'number-of-reports-to-covid19-telephone-advisory-center'"
      :chart-id="'time-bar-chart-contacts'"
      :chart-data="contactsGraph"
      :date="contacts.date"
      :unit="$t('件.reports')"
      :url="
        'https://www.pref.kagawa.lg.jp/content/etc/subsite/kansenshoujouhou/kansen/sr5cfn200127213457.shtml#kennai'
      "
    />
    <!-- 件.reports = 窓口相談件数 -->
  </v-col>
</template>

<script>
import contacts from '@/data/contacts.json'
import formatGraph from '@/utils/formatGraph'
import TimeBarChart from '@/components/TimeBarChart.vue'

export default {
  components: {
    TimeBarChart
  },
  data() {
    // 相談件数
    const contactsGraph = formatGraph(contacts.data)

    const data = {
      contacts,
      contactsGraph
    }
    return data
  }
}
</script>
