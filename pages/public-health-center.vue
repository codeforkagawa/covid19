<template>
  <div class="Parent">
    <page-header class="mb-3">
      {{ $t('県内の保健所一覧') }}
    </page-header>
    <StaticCard>
      <h3>{{ $t('感染症を疑う場合の対応') }}</h3>
      <ul>
        <li>{{ $t('各保健所にご相談ください') }}</li>
        <li>
          {{ $t('「新型コロナウイルス感染症にかかる相談窓口について」') }}<br />
          <table class="Contacts-Card-Table" v-bind="tableAttrs">
            <thead>
              <tr>
                <th class="text-center" scope="col">
                  {{ $t('相談窓口') }}
                </th>
                <th class="text-center" scope="col">
                  {{ $t('電話番号') }}
                </th>
                <th class="text-center" scope="col">
                  {{ $t('FAX（土日祝除く）') }}
                </th>
                <th class="text-center" scope="col">
                  {{ $t('開設時間') }}
                </th>
              </tr>
            </thead>
            <tbody style="text-align: center;">
              <tr>
                <td class="content">
                  {{ $t('小豆保健所') }}
                </td>
                <td class="tel">
                  <a href="tel:0879-62-1373">0879-62-1373</a>
                </td>
                <td class="tel">
                  0879-62-1384
                </td>
                <td class="bureau">
                  {{ $t('8時30分～17時15分') }}
                </td>
              </tr>
              <tr>
                <td class="content">
                  {{ $t('東讃保健所') }}
                </td>
                <td class="tel">
                  <a href="tel:0879-29-8261">0879-29-8261</a>
                </td>
                <td class="tel">
                  0879-42-5881
                </td>
                <td class="bureau">
                  {{ $t('8時30分～17時15分') }}
                </td>
              </tr>
              <tr>
                <td class="content">
                  {{ $t('中讃保健所') }}
                </td>
                <td class="tel">
                  <a href="tel:0877-24-9962">0877-24-9962</a>
                </td>
                <td class="tel">
                  0877-24-8341
                </td>
                <td class="bureau">
                  {{ $t('8時30分～17時15分') }}
                </td>
              </tr>
              <tr>
                <td class="content">
                  {{ $t('西讃保健所') }}
                </td>
                <td class="tel">
                  <a href="tel:0875-25-2052">0875-25-2052</a>
                </td>
                <td class="tel">
                  0875-25-6320
                </td>
                <td class="bureau">
                  {{ $t('8時30分～17時15分') }}
                </td>
              </tr>
              <tr>
                <td class="content">
                  {{ $t('高松市保健所') }}
                </td>
                <td class="tel">
                  <a href="tel:087-839-2870">087-839-2870</a>
                </td>
                <td class="tel">
                  087-839-2879
                </td>
                <td class="bureau">
                  {{ $t('8時30分～17時15分') }}
                </td>
              </tr>
            </tbody>
          </table>
        </li>
      </ul>
    </StaticCard>
  </div>
</template>

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
      title: this.$t('保健所一覧') as string
    }
  }
})
</script>
