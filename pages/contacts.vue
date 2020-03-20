<template> 
  <div>
    お問い合わせ先一覧
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