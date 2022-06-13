<template>
  <v-main class="grey lighten-3">
    <v-container>
      <v-row>
        <v-col>
          <v-sheet min-height="70vh" rounded="lg">
            <router-view></router-view>
          </v-sheet>
        </v-col>
        <v-col cols="2">
          <v-sheet rounded="lg">
            <v-list color="transparent">
              <v-list-item
                v-ripple="false"
                v-for="(item, index) in adminViews"
                :key="index"
                link
                :to="item.path"
              >
                <v-list-item-content>
                  <v-list-item-title>
                    {{ item.text }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  data: () => ({
    adminViews: [
      { path: '/svu/admin/movies', text: 'الافلام' },
      { path: '/svu/admin/stories', text: 'القصص' },
      { path: '/svu/admin/songs', text: 'الأغاني' }
    ]
  })
}
</script>