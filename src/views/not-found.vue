<template>
  <div class="tw-bg-gradient-to-r tw-from-primary tw-to-dark-primary">
    <div
      class="
        tw-w-9/12
        tw-m-auto
        tw-py-16
        tw-min-h-screen
        tw-flex
        tw-items-center
        tw-justify-center
      "
    >
      <div
        class="
          tw-rounded-lg
          tw-bg-dark-flat-primary
          tw-shadow-2xl
          tw-overflow-hidden
          tw-pb-8
        "
      >
        <div class="tw-border-t tw-border-gray-200 tw-text-center tw-pt-8">
          <h1 class="word-404 tw-font-bold tw-text-error">404</h1>
          <h1 class="lg:tw-text-6xl tw-font-medium tw-py-4 sm:tw-text-5xl">
            Page not found !
          </h1>
          <p
            class="
              tw-text-2xl tw-pb-8 tw-px-12 tw-font-medium tw-text-secondary
            "
          >
            Sorry but the page you are looking for does not exist. It might have
            been moved or deleted.
          </p>
          <v-btn
            square
            large
            elevation="0"
            class="tw-bg-dark-primary tw-text-white tw-font-bold"
            @click="$router.push('/')"
            >Back To Home</v-btn
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.word-404 {
  font-size: 100px;
}
</style>