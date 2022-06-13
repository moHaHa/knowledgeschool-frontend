<template>
  <main-page :drawerLeftVisible="false" :drawerRightVisible="false">
    <template #main>
      <div class="tw-p-4 main-dashboard">
        <v-row>
          <v-col cols="12" md="4">
            <dashboard-congratulation-john></dashboard-congratulation-john>
          </v-col>
          <v-col cols="12" md="8">
            <dashboard-statistics-card></dashboard-statistics-card>
          </v-col>

          <v-col cols="12" sm="6" md="4">
            <dashboard-weekly-overview></dashboard-weekly-overview>
          </v-col>

          <v-col cols="12" md="4" sm="6">
            <dashboard-card-total-earning></dashboard-card-total-earning>
          </v-col>

          <v-col cols="12" md="4">
            <v-row class="match-height">
              <v-col cols="12" sm="6">
                <statistics-card-vertical
                  :change="totalProfit.change"
                  :color="totalProfit.color"
                  :icon="totalProfit.icon"
                  :statistics="totalProfit.statistics"
                  :stat-title="totalProfit.statTitle"
                  :subtitle="totalProfit.subtitle"
                ></statistics-card-vertical>
              </v-col>
              <v-col cols="12" sm="6">
                <statistics-card-vertical
                  :change="totalSales.change"
                  :color="totalSales.color"
                  :icon="totalSales.icon"
                  :statistics="totalSales.statistics"
                  :stat-title="totalSales.statTitle"
                  :subtitle="totalSales.subtitle"
                ></statistics-card-vertical>
              </v-col>
              <v-col cols="12" sm="6">
                <statistics-card-vertical
                  :change="newProject.change"
                  :color="newProject.color"
                  :icon="newProject.icon"
                  :statistics="newProject.statistics"
                  :stat-title="newProject.statTitle"
                  :subtitle="newProject.subtitle"
                ></statistics-card-vertical>
              </v-col>

              <v-col cols="12" sm="6">
                <statistics-card-vertical
                  :change="salesQueries.change"
                  :color="salesQueries.color"
                  :icon="salesQueries.icon"
                  :statistics="salesQueries.statistics"
                  :stat-title="salesQueries.statTitle"
                  :subtitle="salesQueries.subtitle"
                ></statistics-card-vertical>
              </v-col>
            </v-row>
          </v-col>

          <v-col cols="12" md="4">
            <dashboard-card-sales-by-countries></dashboard-card-sales-by-countries>
          </v-col>
          <v-col cols="12" md="8">
            <dashboard-card-deposit-and-withdraw></dashboard-card-deposit-and-withdraw>
          </v-col>
          <v-col cols="12">
            <dashboard-datatable></dashboard-datatable>
          </v-col>
        </v-row>
      </div>
    </template>
  </main-page>
</template>

<script>
// eslint-disable-next-line object-curly-newline

import StatisticsCardVertical from './components/StatisticsCardVertical.vue'

// demos
import DashboardCongratulationJohn from './components/DashboardCongratulationJohn.vue'
import DashboardStatisticsCard from './components/DashboardStatisticsCard.vue'
import DashboardCardTotalEarning from './components/DashboardCardTotalEarning.vue'
import DashboardCardDepositAndWithdraw from './components/DashboardCardDepositAndWithdraw.vue'
import DashboardCardSalesByCountries from './components/DashboardCardSalesByCountries.vue'
import DashboardWeeklyOverview from './components/DashboardWeeklyOverview.vue'
import DashboardDatatable from './components/DashboardDatatable.vue'

export default {
  components: {
    StatisticsCardVertical,
    DashboardCongratulationJohn,
    DashboardStatisticsCard,
    DashboardCardTotalEarning,
    DashboardCardDepositAndWithdraw,
    DashboardCardSalesByCountries,
    DashboardWeeklyOverview,
    DashboardDatatable
  },
  setup () {
    const totalProfit = {
      statTitle: 'Total Profit',
      icon: 'mdi-poll',
      color: 'success',
      subtitle: 'Weekly Project',
      statistics: '$25.6k',
      change: '+42%'
    }

    const totalSales = {
      statTitle: 'Refunds',
      icon: 'mdi-currency-usd',
      color: 'secondary',
      subtitle: 'Past Month',
      statistics: '$78',
      change: '-15%'
    }

    // vertical card options
    const newProject = {
      statTitle: 'New Project',
      icon: 'mdi-label-variant-outline',
      color: 'primary',
      subtitle: 'Yearly Project',
      statistics: '862',
      change: '-18%'
    }

    const salesQueries = {
      statTitle: 'Sales Quries',
      icon: 'mdi-help-circle-outline',
      color: 'warning',
      subtitle: 'Last week',
      statistics: '15',
      change: '-18%'
    }

    return {
      totalProfit,
      totalSales,
      newProject,
      salesQueries
    }
  }
}
</script>

<style lang="scss" scoped>
.main-dashboard {
  ::v-deep {
    .v-card,
    .v-sheet {
      background-color: var(--v-white-base);
    }
    .statistic-card {
      .statistic-title {
        @apply tw-font-semibold tw-text-base;
        opacity: 0.85;
      }
    }
    h4 {
      opacity: 0.85;
    }
    .v-card__title,
    .v-card__subtitle {
      opacity: 0.8;
    }
  }
}
</style>
