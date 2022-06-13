<template>
  <v-card class="tw-shadow-lg">
    <v-card-title class="align-start">
      <span>Total Earning</span>
      <v-spacer></v-spacer>

      <v-btn icon small class="me-n3 mt-n2">
        <v-icon> mdi-dots-vertical </v-icon>
      </v-btn>
    </v-card-title>

    <v-card-text class="my-7">
      <div class="tw-flex tw-align-middle">
        <h1 class="tw-text-5xl tw-font-semibold">$24,895</h1>

        <div class="tw-flex tw-align-middle mb-n3">
          <v-icon size="40" color="success"> mdi-menu-up </v-icon>
          <span class="tw-text-base tw-font-medium success--text">10%</span>
        </div>
      </div>

      <h4 class="tw-mt-2 tw-font-medium">Compared to $84,325 last year</h4>
    </v-card-text>

    <v-card-text>
      <div
        v-for="(earning, index) in totalEarning"
        :key="earning.avatar"
        :class="`tw-flex tw-justify-start ${index > 0 ? 'tw-mt-8' : ''}`"
      >
        <v-avatar rounded size="38" color="#5e56690a" class="tw-mr-4">
          <v-icon color="accent">mdi-account</v-icon>
        </v-avatar>

        <div class="tw-flex tw-justify-center tw-flex-grow tw-flex-wrap">
          <div>
            <h4 class="tw-font-medium">
              {{ earning.title }}
            </h4>
            <span class="tw-text-xs tw-text-no-wrap">{{
              earning.subtitle
            }}</span>
          </div>

          <v-spacer></v-spacer>

          <div class="tw-mb-1">
            <p class="text--primary tw-font-medium tw-mb-1">
              {{ earning.earning }}
            </p>
            <v-progress-linear
              :value="earning.progress"
              :color="earning.color"
            ></v-progress-linear>
          </div>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  setup () {
    const totalEarning = [
      {
        title: 'Zipcar',
        subtitle: 'Vuejs, React & HTML',
        earning: '$24,895.65',
        progress: '85',
        color: 'primary'
      },
      {
        title: 'Bitbank',
        subtitle: 'Sketch, Figma & XD',
        earning: '$8,6500.20',
        progress: '65',
        color: 'info'
      },
      {
        title: 'Aviato',
        subtitle: 'HTML & angular',
        earning: '$1,2450.80',
        progress: '30',
        color: 'secondary'
      }
    ]

    return {
      totalEarning
    }
  }
}
</script>
