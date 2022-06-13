/* eslint-disable vue/no-parsing-error */ /* eslint-disable vue/no-parsing-error
*/
<template>
  <div>
    <main-page>
      <template v-slot:leftSide> </template>
      <template v-slot:main>
        <div class="tw-px-3 tw-py-3">
          <div>
            <h2 class="tw-text-xl mb-2">Naming Conviction</h2>

            <div>
              <ul>
                <li>1. folder must be <code>kebab-case</code></li>
                <li>2. route path must be <code>kebab-case</code></li>
                <li>2. vuex modules must be <code>PascalCase</code></li>
              </ul>
            </div>
          </div>

          <v-divider class="tw-mt-1 py-2"></v-divider>
          <div>
            <h2 class="tw-text-xl mb-2">Git</h2>

            <div>
              <ul>
                <li>
                  1. make your commits to repo readable for other team members
                </li>
                <li>
                  2. never push directly to branch <code>library</code> instead
                  create new branch named on your feature name from library and
                  push to it then when you are done create merge request on git
                  lab between new branch and <code>library</code>
                </li>
                <li>3 .never push to other but your module branches</li>
              </ul>
            </div>
          </div>
          <v-divider class="tw-mt-1 py-2"></v-divider>
          <div>
            <h2 class="tw-text-xl mb-2">Code</h2>

            <div>
              <ul>
                <li>
                  1. make your code readable as possible for other team members
                </li>
                <li>2. use valid english vocabulary on naming</li>
                <li>3. make your components dynamic as possible</li>
                <li>
                  4. always use namespaced vuex modules for stores definition
                </li>
              </ul>
            </div>
          </div>
          <v-divider class="tw-mt-1 py-2"></v-divider>
          <div class="tw-w-full blue--text tw-text-3xl">
            Happy coding for every one
          </div>
          <div class="tw-w-full grey--text tw-font-light">
            docs authored by : Mohammed Al Hallak and Zouhair Nasser<br />
            best wishes
          </div>
        </div>
      </template>
      <template v-slot:rightSide> </template>
    </main-page>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {}
  }
}
</script>
<style>
.once-code-block {
  border-radius: 10px;
  padding: 1rem;
  background: var(--v-code-block-base);
}
.theme--light.v-application code.once-code-block {
  background: var(white-smoke);
}
</style>
