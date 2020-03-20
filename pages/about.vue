<template>
  <div class="About">
    <h2 class="About-Heading">
      {{ $t('当サイトについて') }}
    </h2>
    <StaticCard>
      {{
        $t(
          '当サイトは香川県内の新型コロナウイルス感染症（COVID-19）に関する最新情報を提供するために作成されました。'
        )
      }}<br />
      {{
        $t(
          '運営・開発は以下の学生エンジニアによってボランティアで行われています。'
        )
      }}<br />
      <br />
      ・藤原出帆 (
      <a href="//twitter.com/fujiwaraizuho" target="_blank">
        {{ $t('@fujiwaraizuho') }}
      </a>
      )
      <br />
      ・ルサカ (
      <a href="//twitter.com/Luscaca_" target="_blank">
        {{ $t('@Luscaca_') }}
      </a>
      )
      <br />
      ・なんぞー (
      <a href="//twitter.com/nandehu0323" target="_blank">
        {{ $t('@nandehu0323') }}
      </a>
      )<br />
      <br />
      複製・改変が許されたオープンソースライセンスで公開されている、
      <a href="//stopcovid19.metro.tokyo.lg.jp/" target="_blank">
        {{ $t('東京都公式新型コロナウイルス対策サイト') }}
      </a>
      の
      <a href="//github.com/tokyo-metropolitan-gov/covid19" target="_blank">
        {{ $t('仕組み') }}
      </a>
      と
      <a href="//covid19-okayama.netlify.com/" target="_blank">
        {{ $t('岡山県新型コロナウイルス感染症対策サイト (非公式)') }}
      </a>
      のソースコードを利用しています。
      <br />
      <br />
      {{
        $t(
          '香川県による公式情報と客観的な数値をわかりやすく伝えることで、香川県にお住まいの方や、香川県内に拠点を持つ企業の方、香川県を訪れる方が、現状を把握して適切な対策を取れるようにすることを目的としています。'
        )
      }}
    </StaticCard>
    <StaticCard>
      <h2>{{ $t('ブラウザ環境について') }}</h2>
      <p>
        {{ $t('当サイトは以下の環境でご覧いただくことを推奨いたします。') }}
      </p>
      <ul>
        <li>{{ $t('Microsoft Edge 最新版') }}</li>
        <li>{{ $t('Mozilla Firefox 最新版') }}</li>
        <li>{{ $t('Google Chrome 最新版（Windows 10以上）') }}</li>
        <li>{{ $t('Apple Safari (macOS) 最新版') }}</li>
        <li>{{ $t('Opera Software ASA Opera 最新版') }}</li>
      </ul>
      <p class="StaticCard-Note">
        <span>{{ $t('※') }}</span>
        <span>
          {{
            $t(
              '※ 推奨環境以外で利用された場合や、推奨環境下でもご利用のブラウザの設定等によっては、正しく表示されない場合がありますのでご了承ください。'
            )
          }}
        </span>
      </p>
    </StaticCard>
    <StaticCard>
      <h2>{{ $t('当サイトへのリンクについて') }}</h2>
      <p>{{ $t('当サイトへのリンクは自由です。') }}</p>
    </StaticCard>
    <StaticCard>
      <h2>{{ $t('JavaScriptについて') }}</h2>
      <p>
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
      </p>
    </StaticCard>
    <StaticCard>
      <h2>{{ $t('クッキー (Cookie) について') }}</h2>
      <p>
        {{ $t('当サイトの一部ではクッキーを使用しています。') }}<br />
        {{
          $t(
            'クッキーとは、Webコンテンツからの要求で利用者の手元の端末に一時的に保存されるデータのことで、当サイトでは利用状況の把握のためにクッキーを使用する場合があります。'
          )
        }}<br />
      </p>
      <p>
        {{
          $t(
            'ブラウザに関する情報の収集を希望しない場合は、インターネット閲覧ソフト（ブラウザ）をご自身で設定することにより、クッキーの機能が働かないようにすることも可能です。'
          )
        }}
      </p>
      <p>
        {{
          $t(
            'ただし、クッキーを受け入れない設定をされている場合は、当サイトの機能が正常に動作しない場合がございます。'
          )
        }}
      </p>
    </StaticCard>
    <StaticCard>
      <h2>{{ $t('免責事項') }}</h2>
      <p>
        {{
          $t(
            '当サイトに掲載されている情報の正確性については万全を期していますが、運営者は利用者が当サイトの情報を用いて行う一切の行為について責任を負うものではありません。'
          )
        }}
      </p>
      <p>
        {{
          $t(
            'また、利用者が当サイトを利用したことにより発生した利用者の損害及び利用者が第三者に与えた損害に対して、責任を負うものではありません。'
          )
        }}
      </p>
      <p>
        {{
          $t(
            '当サイトに掲載されている情報は、予告なしに変更又は削除することがあります。'
          )
        }}
      </p>
    </StaticCard>
    <StaticCard>
      <h2>{{ $t('データについて') }}</h2>
      <i18n
        tag="p"
        path="本サイトで公表しているデータは、{catalogWebsite}より誰でも自由にダウンロードが可能です。"
      >
        <a
          href="https://www.pref.kagawa.lg.jp/content/dir1/dir1_6/dir1_6_2/wt5q49200131182439.shtml"
          target="_blank"
          rel="noopener"
          place="catalogWebsite"
        >
          {{ $t('新型コロナウイルス感染症（COVID－19）に関する情報') }}
        </a>
      </i18n>
    </StaticCard>
    <StaticCard>
      <h2>{{ $t('お問い合わせ先') }}</h2>
      <p>
        {{ $t('香川県 新型コロナウイルス感染症 対策サイト 運営者代表') }}<br />
        {{ $t('メール') }}:
        <a href="mail:lusaca.contact@gmail.com">lusaca.contact@gmail.com</a>。
        または、代表のツイッター
        <a href="//twitter.com/Luscaca_" target="_blank">
          {{ $t('@Luscaca_') }}
        </a>
        にDMでお願いします。
      </p>
    </StaticCard>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'
import StaticCard from '@/components/StaticCard.vue'

export default Vue.extend({
  components: {
    StaticCard
  },
  head: (): MetaInfo => ({
    title: '当サイトについて'
  })
})
</script>

<style lang="scss">
.About {
  &-Heading {
    @include font-size(30);
    font-weight: normal;
    color: $gray-2;
    margin-bottom: 12px;
  }
}
</style>
