<template>
  <div class="Worker">
    <page-header class="mb-3">
      {{ $t('企業の皆様・はたらく皆様へ') }}
    </page-header>
    <StaticCard>
      <h3>
        <a
          href="https://www.pref.kagawa.lg.jp/content/dir1/dir1_6/dir1_6_2/wt5q49200131182439.shtml#business"
          target="_blank"
          rel="noopener noreferrer"
          >{{ $t('事業者の皆様へ（県公式サイト）') }}</a
        >
      </h3>
      <p>
        {{
          $t(
            '商工会議所や中小企業対策相談窓口、関係機関への連絡先等があります。'
          )
        }}
      </p>
    </StaticCard>
    <StaticCard>
      <h3>
        <a
          href="https://www.mhlw.go.jp/stf/newpage_10059.html"
          target="_blank"
          rel="noopener noreferrer"
          >{{ $t('小学校休業等対応助成金の創設について') }}</a
        >
      </h3>
      <p>
        {{
          $t(
            '厚生労働省では、今般の新型コロナウイルス感染症に係る小学校等の臨時休業等により影響を受ける労働者を支援するため、労働者を有給で休ませる企業に対し助成する仕組みを設けることとしています。'
          )
        }}
      </p>
    </StaticCard>
    <StaticCard>
      <h3>
        <a
          href="http://acsa.jp/htm/news/2020022803.htm"
          target="_blank"
          rel="noopener noreferrer"
          >{{ $t('ベビーシッター派遣事業の取扱いについて') }}</a
        >
      </h3>
      <p>
        {{
          $t(
            '新型コロナウイルス感染症対策のため小学校等の臨時休業が行われること等を受け、ベビーシッター派遣事業の令和元年度の取扱いにつきまして、内閣府より通知がありましたのでお知らせをいたします。'
          )
        }}
      </p>
    </StaticCard>
    <StaticCard>
      <h3>
        <a
          href="https://www.mhlw.go.jp/stf/newpage_10037.html"
          target="_blank"
          rel="noopener noreferrer"
          >{{
            $t('時間外労働等改善助成金の特例的なコースの申請受付開始について')
          }}</a
        >
      </h3>
      <p>
        {{
          $t(
            '「新型コロナウイルス感染症対策のためのテレワークコース」「職場意識改善特例コース」について、申請の受付を開始しましたので、お知らせいたします。'
          )
        }}
      </p>
    </StaticCard>
    <StaticCard>
      <h3>
        <a
          href="https://www.hataraku.metro.kagawa.jp/kansensyo/index.html"
          target="_blank"
          rel="noopener noreferrer"
          >{{ $t('新型コロナウイルスに関するQ&A (企業の方向け)') }}</a
        >
      </h3>
      <p>
        {{
          $t(
            '労働者を休ませる場合の措置や、テレワークや時差出勤など感染防止に向けた柔軟な働き方などについてはこちらをご覧ください。'
          )
        }}
      </p>
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
      title: this.$t('企業の皆様・はたらく皆様へ') as string
    }
  }
})
</script>
