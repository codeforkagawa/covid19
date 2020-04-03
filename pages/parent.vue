<template>
  <div class="Parent">
    <page-header class="mb-3">
      {{ $t('臨時休校中の新型コロナウイルス感染症対応についてのお願い') }}
    </page-header>
    <StaticCard>
      <h3>1. {{ $t('感染予防・健康管理') }}</h3>
      <ul>
        <li>
          {{
            $t(
              '不特定多数の人の集まる場所等への外出を避け、基本的に自宅で過ごしてください。'
            )
          }}
        </li>
        <li>
          {{ $t('手洗い、咳エチケット等により、感染予防に努めてください。')
          }}<br />
          <a
            href="https://tokyodouga.jp/lViN9C_BS-0.html"
            target="_blank"
            rel="noopener noreferrer"
            >{{ $t('【参考】感染症予防のための正しい手洗い方法（動画）') }}</a
          >
        </li>
        <li>
          {{
            $t(
              '規則正しい生活を心がけ、日常の健康管理に十分気を付けてください。'
            )
          }}
        </li>
      </ul>
    </StaticCard>
    <StaticCard>
      <h3>2. {{ $t('感染症を疑う場合の対応') }}</h3>
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
    <StaticCard>
      <h3>3. {{ $t('その他.parent') }}</h3>
      <p>{{ $t('詳細は、各学校からのお知らせ等をご確認ください。') }}</p>
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
      title: this.$t('お子様をお持ちの皆様へ') as string
    }
  }
})
</script>
