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
    </TextCard>
    <TextCard :title="$t('ブラウザ環境について')">
      {{ $t('当サイトは以下の環境でご覧いただくことを推奨いたします。') }}<br />
      <ul class="About-Browser-List">
        <li>{{ $t('Microsoft Edge 最新版') }}</li>
        <li>{{ $t('Mozilla Firefox 最新版') }}</li>
        <li>{{ $t('Google Chrome 最新版（Windows 10以上）') }}</li>
        <li>{{ $t('Apple Safari (macOS) 最新版') }}</li>
        <li>{{ $t('Opera Software ASA Opera 最新版') }}</li>
      </ul>
      {{
        $t(
          '※ 推奨環境以外で利用された場合や、推奨環境下でもご利用のブラウザの設定等によっては、正しく表示されない場合がありますのでご了承ください。'
        )
      }}
    </TextCard>
    <TextCard :title="$t('当サイトへのリンクについて')">
      {{ $t('当サイトへのリンクは自由です。') }}
    </TextCard>
    <TextCard :title="$t('JavaScriptについて')">
      {{ $t('当サイトではJavaScriptを使用しております。') }}<br />
      {{
        $t(
          'JavaScriptを無効にして使用された場合、各ページが正常に動作しない、または、表示されない場合がございます。'
        )
      }}<br />
      {{
        $t(
          '当サイトをご利用の際には、JavaScriptを有効にして頂きますようお願いいたします。'
        )
      }}
    </TextCard>
    <TextCard :title="$t('クッキー (Cookie) について')">
      {{ $t('当サイトの一部ではクッキーを使用しています。') }}<br />
      {{
        $t(
          'クッキーとは、Webコンテンツからの要求で利用者の手元の端末に一時的に保存されるデータのことで、当サイトでは利用状況の把握のためにクッキーを使用する場合があります。'
        )
      }}<br />
      <br />
      {{
        $t(
          'ブラウザに関する情報の収集を希望しない場合は、インターネット閲覧ソフト（ブラウザ）をご自身で設定することにより、クッキーの機能が働かないようにすることも可能です。'
        )
      }}<br />
      <br />
      {{
        $t(
          'ただし、クッキーを受け入れない設定をされている場合は、当サイトの機能が正常に動作しない場合がございます。'
        )
      }}
    </TextCard>
    <TextCard :title="$t('免責事項')">
      {{
        $t(
          '当サイトに掲載されている情報の正確性については万全を期していますが、香川県やサイト運営者は利用者が当サイトの情報を用いて行う一切の行為について責任を負うものではありません。'
        )
      }}<br />
      <br />
      {{
        $t(
          'また、利用者が当サイトを利用したことにより発生した利用者の損害及び利用者が第三者に与えた損害に対して、責任を負うものではありません。'
        )
      }}<br />
      <br />
      {{
        $t(
          '当サイトに掲載されている情報は、予告なしに変更又は削除することがあります。'
        )
      }}
    </TextCard>
    <TextCard :title="$t('お問い合わせ先')">
      {{ $t('香川県 新型コロナウイルス感染症 対策サイト 運営者代表') }}<br />
      {{ $t('メール') }}:
      <a href="mail:lusaca.contact@gmail.com">lusaca.contact@gmail.com</a>。
      または、代表のツイッター
      <a href="//twitter.com/Luscaca_" target="_blank">
        {{ $t('@Luscaca_') }}
      </a>
      にDMでお願いします。
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
</style>
