<template>
  <div class="About">
    <h2 class="About-Heading">
      {{ $t('お問い合わせ先一覧') }}
    </h2>
    <TextCard :title="$t('帰国者・接触者センター')">
      <table>
        <tr>
          <td>相談窓口</td>
          <td>電話番号</td>
          <td>FAX（土日祝除く）</td>
          <td>開設時間</td>
        </tr>
        <tr>
          <td>小豆保健所</td>
          <td>0879－62－1373</td>
          <td>0879－62－1384</td>
          <td>8時30分～17時15分</td>
        </tr>
        <tr>
          <td>東讃保健所</td>
          <td>0879－29－8261</td>
          <td>0879－42－5881</td>
          <td>8時30分～17時15分</td>
        </tr>
        <tr>
          <td>中讃保健所</td>
          <td>0877－24－9962</td>
          <td>0877－24－8341</td>
          <td>8時30分～17時15分</td>
        </tr>
        <tr>
          <td>西讃保健所</td>
          <td>0875－25－2052</td>
          <td>0875－25－6320</td>
          <td>8時30分～17時15分</td>
        </tr>
        <tr>
          <td>高松市保健所</td>
          <td>087－839－2870</td>
          <td>087－839－2879</td>
          <td>8時30分～17時15分</td>
        </tr>
      </table>

      <a
        href="//www.pref.kagawa.lg.jp/content/etc/subsite/kansenshoujouhou/kansen/sr5cfn200127213457.shtml#hokensyo"
        target="_blank"
      >
        香川県公式サイトもご覧ください。
      </a>
      <br />
      <a href="//www.mhlw.go.jp/content/10900000/000596905.pdf" target="_blank">
        相談・受診の目安（厚生労働省）
      </a>
    </TextCard>
  </div>
</template>

<i18n src="./about.i18n.json"></i18n>

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
.About {
  &-Heading {
    @include font-size(30);
    font-weight: normal;
    color: $gray-2;
    margin-bottom: 12px;
  }
  & &-Browser-List {
    // セレクタ指定が&-Browser-List のみだと
    // .v-application ul の設定が勝ってしまい padding-left が24px となってしまうため
    // このようなセレクタ指定としています
    list-style: none;
    padding: 12px 0;
  }
}
table {
  width: 100%;
}
table tr td {
  width: 25%;
  text-align: center;
}
.contacts_else tr td {
  width: calc(100% / 3);
  text-align: center;
}
</style>
