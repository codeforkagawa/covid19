<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      width="600px"
      :transition="false"
      @keydown.esc="dialog = false"
    >
      <v-card class="DetailView">
        <div class="DetailView-Inner">
          <div class="DetailView-Header">
            <v-row no-gutters>
              <v-col cols="7" style="padding-left: 10px;">
                <v-row>
                  <v-col>
                    <h3 class="DetailView-Title">
                      新型コロナウイルス感染症例
                    </h3>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <span class="DetailView-Idx">{{ detailID + 1 }}</span>
                    <small>{{ $t('例目') }}</small>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="5">
                <div class="detailInfo">
                  <v-row>
                    <v-col>
                      <small>{{ $t('公表日') }}</small>
                    </v-col>
                    <v-col class="date">
                      {{ $t(detail.info.date) }}
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <small>{{ $t('居住地') }}</small>
                    </v-col>
                    <v-col>
                      {{ $t(detail.info.residence) }}
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <small>{{ $t('年代') }}</small>
                    </v-col>
                    <v-col>
                      {{ $t(detail.info.age) }}
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <small>{{ $t('性別') }}</small>
                    </v-col>
                    <v-col>
                      {{ $t(detail.info.gender) }}
                    </v-col>
                  </v-row>
                </div>
              </v-col>
            </v-row>
          </div>
        </div>
        <v-stepper
          non-linear
          alt-labels
          style="box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14);"
        >
          <v-stepper-header>
            <template v-for="(status, index) in statuses">
              <v-stepper-step
                :key="status"
                :complete="detail.step === index + 1"
                step=""
                color="#005933"
              >
                {{ $t(status) }}
              </v-stepper-step>
              <v-divider v-if="index !== 2" :key="index" />
            </template>
          </v-stepper-header>
        </v-stepper>
        <v-tabs
          v-model="tab"
          background-color="transparent"
          color="#005933"
          grow
        >
          <v-tab v-for="value in items" :key="value" slider-color="#005933">
            {{ $t(value) }}
          </v-tab>
        </v-tabs>

        <div style="padding: 0 10px;">
          <v-tabs-items v-model="tab">
            <v-tab-item>
              <v-timeline dense>
                <v-timeline-item
                  v-for="item in detail.symptoms"
                  :key="item.description"
                  color="#005933"
                >
                  <v-card>
                    <v-card-title v-if="item.date">
                      {{ item.date }}
                    </v-card-title>
                    <v-card-text>
                      {{ item.description }}
                    </v-card-text>
                  </v-card>
                </v-timeline-item>
              </v-timeline>
            </v-tab-item>
            <v-tab-item>
              <v-timeline dense>
                <v-timeline-item
                  v-for="item in detail.actionHistories"
                  :key="item.description"
                  color="#005933"
                >
                  <v-card>
                    <v-card-title v-if="item.title">
                      {{ item.title }}
                    </v-card-title>
                    <v-card-text>
                      {{ item.description }}
                    </v-card-text>
                  </v-card>
                </v-timeline-item>
              </v-timeline>
            </v-tab-item>
          </v-tabs-items>
        </div>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script lang="ts">
import { detailStore } from '@/store'
export default {
  props: {
    date: {
      type: String,
      default: ''
    },
    residence: {
      type: String,
      default: ''
    },
    age: {
      type: String,
      default: ''
    },
    gender: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      tab: null,
      statuses: ['調査中', '入院中', '退院'],
      items: ['症状・経過', '行動歴']
    }
  },
  computed: {
    dialog: {
      get() {
        return detailStore.isShow
      },
      set(arg: Boolean) {
        detailStore.setIsShow(arg)
      }
    },
    step: {
      get() {
        return detailStore.details[detailStore.detailID].step
      }
    },
    detail: {
      get() {
        return detailStore.details[detailStore.detailID]
      }
    },
    detailID: {
      get() {
        return detailStore.detailID
      }
    }
  }
}
</script>

<style lang="scss">
/* stylelint-disable no-descending-specificity */

.detailInfo {
  &-row {
    font-size: 20px;
  }

  .date {
    @include lessThan($small) {
      font-size: larger;
    }
  }
}

.DetailView {
  @include card-container();

  height: 100%;

  .v-stepper:not(.v-stepper--vertical) .v-stepper__label {
    display: flex;
  }

  &-Header {
    display: flex;
    align-items: flex-start;
    flex-flow: column;
    padding: 0 10px;

    .col {
      padding: 4px;
    }

    @include largerThan($medium) {
      padding: 0 5px;
    }

    @include largerThan($large) {
      width: 100%;
      flex-flow: row;
      flex-wrap: wrap;
      padding: 0;
    }
  }

  &-DataInfo {
    &-summary {
      color: $gray-2;
      font-family: Hiragino Sans, sans-serif;
      font-style: normal;
      font-size: 30px;
      line-height: 30px;
      white-space: nowrap;

      &-unit {
        font-size: 0.6em;
        width: 100%;
      }
    }

    &-date {
      font-size: 12px;
      line-height: 12px;
      color: $gray-3;
      width: 100%;
      display: inline-block;
    }
  }

  &-Inner {
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    padding: 22px 22px 0 22px;
    height: 100%;
  }

  &-Title {
    width: 100%;
    margin-bottom: 10px;
    font-size: 1.25rem;
    line-height: 1.5;
    font-weight: normal;
    color: $gray-2;

    @include largerThan($large) {
      margin-bottom: 0;
      &.with-infoPanel {
        width: 50%;
      }
    }
  }

  &-Idx {
    font-size: 55px;
  }

  .overlay {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    user-select: none;
    opacity: 0.8;

    > .overlay-text {
      text-align: center;
      padding: 2em;
      width: 60%;
      background: $gray-2;
      border-radius: 8px;
      color: $white !important;
    }
  }
}

textarea {
  font: 400 11px system-ui;
  width: 100%;
  height: 2.4rem;
}
</style>
