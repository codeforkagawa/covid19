<template>
  <div class="Contacts">
    <page-header class="mb-3">
      {{ $t('お問い合わせ先一覧') }}
    </page-header>
    <div class="Contacts-Card">
      <table class="Contacts-Card-Table" v-bind="tableAttrs">
        <thead>
          <tr>
            <th class="text-center" scope="col">
              {{ $t('お問い合わせ内容') }}
            </th>
            <th class="text-center" scope="col">
              {{ $t('局名') }}
            </th>
            <th class="text-center" scope="col">
              {{ $t('電話番号') }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="content">
              感染症に関すること
            </td>
            <td class="bureau">
              <a
                href="https://www.pref.kagawa.lg.jp/content/etc/sec/sec19500.shtml"
                >薬務感染症対策課</a
              >
            </td>
            <td class="tel">
              <a href="tel:087-832-3302">087-832-3302</a>
            </td>
          </tr>
          <tr>
            <td class="content">
              高齢者施設に関すること
            </td>
            <td class="bureau">
              <a
                href="https://www.pref.kagawa.lg.jp/content/etc/sec/sec19200.shtml"
                >長寿社会対策課</a
              >
            </td>
            <td class="tel">
              <a href="tel:087-832-3268">087-832-3268</a>
            </td>
          </tr>
          <tr>
            <td class="content">
              障害児・者施設に関すること
            </td>
            <td class="bureau">
              <a
                href="https://www.pref.kagawa.lg.jp/content/etc/sec/sec19400.shtml"
                >障害福祉課</a
              >
            </td>
            <td class="tel">
              <a href="tel:087-832-3302">087-832-3293</a>
            </td>
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
            <td class="tel">
              <a href="tel:087-832-3302">087-832-3286</a>
            </td>
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
            <td class="tel">
              <a href="tel:087-832-3302">087-832-3284</a>
            </td>
          </tr>
          <tr>
            <td class="content">
              県主催行事の開催基準に関すること
            </td>
            <td class="bureau">
              <a
                href="https://www.pref.kagawa.lg.jp/content/etc/sec/sec19100.shtml"
                >健康福祉総務課</a
              >
            </td>
            <td class="tel">
              <a href="tel:087-832-3302">087-832-3252</a>
            </td>
          </tr>
          <tr>
            <td class="content">
              観光に関すること
            </td>
            <td class="bureau">
              <a
                href="https://www.pref.kagawa.lg.jp/content/etc/sec/sec10520.shtml"
                >観光振興課</a
              >
            </td>
            <td class="tel">
              <a href="tel:087-832-3302">087-832-3360</a>
            </td>
          </tr>
          <tr>
            <td class="content">
              中小企業の経営に関すること
            </td>
            <td class="bureau">
              <a
                href="https://www.pref.kagawa.lg.jp/content/etc/sec/sec15710.shtml"
                >経営支援課</a
              >
            </td>
            <td class="tel">
              <a href="tel:087-832-3302">087-832-3343</a>
            </td>
          </tr>
          <tr>
            <td class="content">
              労働や雇用に関すること
            </td>
            <td class="bureau">
              <a
                href="https://www.pref.kagawa.lg.jp/content/etc/sec/sec15710.shtml"
                >労働政策課</a
              >
            </td>
            <td class="tel">
              <a href="tel:087-832-3302">087-832-3371</a>
            </td>
          </tr>
          <tr>
            <td class="content">
              県立中学校、高等学校に関すること
            </td>
            <td class="bureau">
              <a
                href="https://www.pref.kagawa.lg.jp/content/etc/sec/sec31400.shtml"
                >高校教育課</a
              >
            </td>
            <td class="tel">
              <a href="tel:087-832-3302">087-832-3750</a>
            </td>
          </tr>
          <tr>
            <td class="content">
              県立特別支援学校に関すること
            </td>
            <td class="bureau">
              <a
                href="https://www.pref.kagawa.lg.jp/content/etc/sec/sec31500.shtml"
                >特別支援教育課</a
              >
            </td>
            <td class="tel">
              <a href="tel:087-832-3302">087-832-3757</a>
            </td>
          </tr>
          <tr>
            <td class="content">
              上記以外の内容
            </td>
            <td class="bureau" colspan="2">
              「<a
                href="https://www.pref.kagawa.lg.jp/content/koho/kohosonota/soudan.shtml"
                >各種相談窓口のご案内</a
              >」のページをご覧ください。
            </td>
          </tr>
          <tr>
            <td class="content">
              当サイトに関すること
            </td>
            <td class="bureau">
              Code for Kagawa
            </td>
            <td class="tel">
              <a href="mailto:codeforkagawa@gmail.com"
                >codeforkagawa@gmail.com</a
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'
import PageHeader from '@/components/PageHeader.vue'
export default Vue.extend({
  components: {
    PageHeader
  },
  data() {
    return {
      pc: true
    }
  },
  computed: {
    tableAttrs(): any {
      return this.pc ? {} : { role: 'presentation' }
    },
    headingAttrs(): any {
      return this.pc ? {} : { role: 'heading', 'aria-level': '3' }
    }
  },
  mounted() {
    if (process.browser) {
      window.addEventListener('resize', this.handleResize)
      this.handleResize()
    }
  },
  destroyed() {
    if (process.browser) {
      window.removeEventListener('resize', this.handleResize)
    }
  },
  methods: {
    handleResize() {
      this.pc = window.innerWidth > 768
    }
  },
  head(): MetaInfo {
    return {
      title: this.$t('お問い合わせ先一覧') as string
    }
  }
})
</script>

<style lang="scss">
.Contacts {
  &-Card {
    @include card-container();
    &-Table {
      width: 100%;
      border-collapse: collapse;
      th {
        font-size: 14px !important;
      }
      td {
        padding: 0 16px;
        font-size: 14px;
      }
      @include largerThan($medium) {
        thead tr {
          height: 48px;
        }
        tbody tr {
          height: 96px;
        }
        th,
        tr:not(:last-child) {
          border-top: none;
          border-left: none;
          border-right: none;
          border-bottom: thin solid rgba(0, 0, 0, 0.12);
        }
        tr:last-child {
          border: none;
        }
      }
      @include lessThan($medium) {
        thead {
          display: none;
        }
        tbody {
          tr {
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
          tr:not(:last-child) {
            border-bottom: thin solid rgba(0, 0, 0, 0.12);
          }
        }
        td {
          display: block;
        }
      }
    }
  }
}
</style>
