<template>
  <div class="Contacts">
    <h2 class="Contacts-Heading">
      {{ $t('お問い合わせ先一覧') }}
    </h2>
    <div class="Contacts-Card">
      <v-simple-table class="Contacts-Card-Table">
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-center">{{ $t('お問い合わせ内容') }}</th>
              <th class="text-center">{{ $t('局名') }}</th>
              <th class="text-center">{{ $t('電話番号') }}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="content">感染症に関すること</td>
              <td class="bureau">
                <a
                  href="https://www.pref.kagawa.lg.jp/content/etc/sec/sec19500.shtml"
                  >薬務感染症対策課</a
                >
              </td>
              <td class="tel"><a href="tel:087-832-3302">087-832-3302</a></td>
            </tr>
            <tr>
              <td class="content">高齢者施設に関すること</td>
              <td class="bureau">
                <a
                  href="https://www.pref.kagawa.lg.jp/content/etc/sec/sec19200.shtml"
                  >長寿社会対策課</a
                >
              </td>
              <td class="tel"><a href="tel:087-832-3268">087-832-3268</a></td>
            </tr>
            <tr>
              <td class="content">障害児・者施設に関すること</td>
              <td class="bureau">
                <a
                  href="https://www.pref.kagawa.lg.jp/content/etc/sec/sec19400.shtml"
                  >障害福祉課</a
                >
              </td>
              <td class="tel"><a href="tel:087-832-3302">087-832-3293</a></td>
            </tr>
            <tr>
              <td class="content">
                児童福祉施設（入所）に関すること（障害児施設を除く）
              </td>
              <td class="bureau">
                <a
                  href="https://www.pref.kagawa.lg.jp/content/etc/sec/sec19300.shtml"
                  >子ども家庭課（児童家庭グループ）</a
                >
              </td>
              <td class="tel"><a href="tel:087-832-3302">087-832-3286</a></td>
            </tr>
            <tr>
              <td class="content">
                保育施設に関すること（放課後児童クラブを含む）
              </td>
              <td class="bureau">
                <a
                  href="https://www.pref.kagawa.lg.jp/content/etc/sec/sec19300.shtml"
                  >子ども家庭課（保育所グループ）</a
                >
              </td>
              <td class="tel"><a href="tel:087-832-3302">087-832-3284</a></td>
            </tr>
            <tr>
              <td class="content">県主催行事の開催基準に関すること</td>
              <td class="bureau">
                <a
                  href="https://www.pref.kagawa.lg.jp/content/etc/sec/sec19100.shtml"
                  >健康福祉総務課</a
                >
              </td>
              <td class="tel"><a href="tel:087-832-3302">087-832-3252</a></td>
            </tr>
            <tr>
              <td class="content">観光に関すること</td>
              <td class="bureau">
                <a
                  href="https://www.pref.kagawa.lg.jp/content/etc/sec/sec10520.shtml"
                  >観光振興課</a
                >
              </td>
              <td class="tel"><a href="tel:087-832-3302">087-832-3360</a></td>
            </tr>
            <tr>
              <td class="content">中小企業の経営に関すること</td>
              <td class="bureau">
                <a
                  href="https://www.pref.kagawa.lg.jp/content/etc/sec/sec15710.shtml"
                  >経営支援課</a
                >
              </td>
              <td class="tel"><a href="tel:087-832-3302">087-832-3343</a></td>
            </tr>
            <tr>
              <td class="content">労働や雇用に関すること</td>
              <td class="bureau">
                <a
                  href="https://www.pref.kagawa.lg.jp/content/etc/sec/sec15710.shtml"
                  >労働政策課</a
                >
              </td>
              <td class="tel"><a href="tel:087-832-3302">087-832-3371</a></td>
            </tr>
            <tr>
              <td class="content">県立中学校、高等学校に関すること</td>
              <td class="bureau">
                <a
                  href="https://www.pref.kagawa.lg.jp/content/etc/sec/sec31400.shtml"
                  >高校教育課</a
                >
              </td>
              <td class="tel"><a href="tel:087-832-3302">087-832-3750</a></td>
            </tr>
            <tr>
              <td class="content">県立特別支援学校に関すること</td>
              <td class="bureau">
                <a
                  href="https://www.pref.kagawa.lg.jp/content/etc/sec/sec31500.shtml"
                  >特別支援教育課</a
                >
              </td>
              <td class="tel"><a href="tel:087-832-3302">087-832-3757</a></td>
            </tr>
            <tr>
              <td class="content">上記以外の内容</td>
              <td class="bureau" colspan="2">
                「<a
                  href="https://www.pref.kagawa.lg.jp/content/koho/kohosonota/soudan.shtml"
                  >各種相談窓口のご案内</a
                >」のページをご覧ください。
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
  </div>
</template>

<script lang="ts">
import TextCard from '@/components/TextCard.vue'

export default {
  components: {
    TextCard
  },
  head() {
    return {
      title: 'お問い合わせ先一覧'
    }
  }
}
</script>

<style lang="scss">
.Contacts {
  &-Heading {
    @include font-size(30);
    font-weight: normal;
    color: $gray-2;
    margin-bottom: 12px;
  }
  &-Card {
    @include card-container();
    padding: 1px; // tr:hover で外枠が消えないように
    &-Table {
      th {
        font-size: 14px !important;
      }
      tr:hover {
        background: $white !important;
      }
      @include largerThan($medium) {
        tbody tr {
          height: 96px;
        }
      }
      @include lessThan($medium) {
        thead {
          display: none;
        }
        tbody tr {
          height: auto;
          .content {
            font-weight: bold;
            border-bottom: none !important;
            padding-top: 12px;
            padding-bottom: 8px;
          }
          .bureau {
            border-bottom: none !important;
          }
          .tel {
            padding-bottom: 12px;
          }
        }
        tbody td {
          height: auto;
        }
        td {
          display: block;
        }
      }
    }
  }
}
</style>