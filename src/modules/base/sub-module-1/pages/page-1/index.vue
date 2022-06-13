<template>
  <div>
    <main-page>
      <template v-slot:main>
        <ValidationObserver
          ref="obs"
          v-slot="{ invalid, validated, handleSubmit, validate }"
        >
          <v-card class="elevation-12">
            <v-toolbar dark color="primary">
              <v-toolbar-title
                >VeeValidate Providers: Refactored</v-toolbar-title
              >
            </v-toolbar>
            <v-card-text>
              <v-form class="tw-grid tw-grid-cols-2 tw-gap-4">
                <inputField rules="required" v-model="name" label="Name" />
                <erp-table-search />
                <erp-select
                  item-text="title"
                  label="label"
                  api="https://jsonplaceholder.typicode.com/todos"
                  valuesPath="data"
                  v-model="select"
                  name="test"
                  rules="required"
                />
                <inputField rules="required" v-model="name" label="Name" />
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-btn @click="clear">Clear</v-btn>
              <v-spacer></v-spacer>
              <v-btn @click="validate">Validate</v-btn>
              <v-btn
                color="primary"
                @click="handleSubmit(submit)"
                :disabled="invalid || !validated"
                >Sign Up</v-btn
              >
            </v-card-actions>
          </v-card>
        </ValidationObserver>
      </template>
    </main-page>
  </div>
</template>

<script>
import { ValidationObserver, extend } from 'vee-validate'
import inputField from '@/components/forms/input'
import { required } from 'vee-validate/dist/rules'
import erpSelect from '@/components/forms/select'

extend('required', {
  ...required,
  message: 'This field is required'
})
export default {
  data: () => ({
    items: [
      { label: 'foo', value: 'f' },
      { label: 'bar', value: 'b' },
      { label: 'to', value: 't' }
    ],
    name: '',
    email: '',
    select: null,
    checkbox: ''
  }),
  components: {
    ValidationObserver,
    inputField,
    erpSelect
    // ValidationProvider
  },
  methods: {
    async clear () {
      this.name = this.email = this.select = this.checkbox = ''
      requestAnimationFrame(() => {
        this.$refs.obs.reset()
      })
    },
    async submit () {}
  }
}
</script>
<style lang="sass" scoped>
</style>
