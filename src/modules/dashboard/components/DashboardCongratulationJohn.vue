<template>
  <v-card class="greeting-card tw-shadow-lg">
    <v-row class="ma-0 pa-0">
      <v-col cols="8">
        <v-card-title class="tw-text-xl tw-pt-1 tw-px-2">
          Congratulations John!
        </v-card-title>
        <v-card-subtitle class="tw-px-2"> You have won Trophy </v-card-subtitle>
        <v-card-text class="tw-flex tw-align-middle tw-mt-2 tw-pb-2 tw-px-2">
          <div>
            <p class="tw-text-2xl tw-font-semibold primary--text tw-mb-2">
              $42.8k
            </p>

            <v-btn small color="primary"> View Sales </v-btn>
          </div>
        </v-card-text>
      </v-col>

      <v-col cols="4">
        <v-img
          contain
          height="180"
          width="159"
          class="greeting-card-bg"
        ></v-img>
        <v-img
          contain
          height="108"
          max-width="83"
          class="greeting-card-trophy"
        ></v-img>
      </v-col>
    </v-row>
  </v-card>
</template>

<style lang="scss" scoped>
.greeting-card {
  position: relative;
  .greeting-card-bg {
    position: absolute;
    bottom: 0;
    right: 0;
  }
  .greeting-card-trophy {
    position: absolute;
    bottom: 10%;
    right: 8%;
  }
}
// rtl
.v-application {
  &.v-application--is-rtl {
    .greeting-card-bg {
      right: initial;
      left: 0;
      transform: rotateY(180deg);
    }
    .greeting-card-trophy {
      left: 8%;
      right: initial;
    }
  }
}
</style>
