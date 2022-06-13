<template>
  <v-card class="tw-shadow-lg statistic-card">
    <v-card-title class="align-start">
      <v-avatar :color="color" size="38" class="elevation-3">
        <v-icon size="24" color="white" class="rounded-0">
          {{ icon }}
        </v-icon>
      </v-avatar>
      <v-spacer></v-spacer>

      <v-btn small icon class="me-n3 mt-n1">
        <v-icon> mdi-dots-vertical </v-icon>
      </v-btn>
    </v-card-title>

    <v-card-text class="text-no-wrap text--primary mt-3">
      <p class="font-weight-semibold text-sm mb-1 statistic-title">
        {{ statTitle }}
      </p>

      <div class="d-flex align-end flex-wrap">
        <span class="font-weight-semibold text-2xl me-1 mb-2">{{
          statistics
        }}</span>
        <span
          class="percentage text-xs mb-2"
          :class="checkChange(change) ? 'success--text' : 'error--text'"
        >
          {{ change }}</span
        >
      </div>
      <p class="text-xs text--secondary mb-0">
        {{ subtitle }}
      </p>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    statTitle: { type: String, default: '' },
    icon: { type: String, default: '' },
    color: { type: String, default: '' },
    subtitle: { type: String, default: '' },
    statistics: { type: String, default: '' },
    change: { type: String, default: '' }
  },
  setup () {
    const checkChange = (value) => {
      const firstChar = value.charAt(0)
      if (firstChar === '+') {
        return true
      }

      return false
    }

    return {
      checkChange
    }
  }
}
</script>

<style lang="scss" scoped>
.percentage {
  top: -8px;
  position: relative;
}
</style>
