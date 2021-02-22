<template>
  <div :class="sizes">
      <section>
          <div class="row q-pt-sm">
              <div class="col-md-9 q-mx-auto col-sm-12 col-xs-12">
                  <q-card class="q-pa-xl" flat bordered>
                      <div class="row">
                          <div class="col">
                              <div class="text-body1">Amount</div>
                              <div class="text-h6 text-medium">NGN 15,000</div>
                          </div>
                          <div class="col q-pt-md text-right">
                              <q-chip size="md" color="green" text-color="white">
                                Fulfilled
                            </q-chip>
                          </div>
                      </div>
                      <q-separator class="q-mt-md"/>
                      <div class="row q-pt-md">
                          <div class="col">
                              <div class="text-body1">status</div>
                          </div>
                          <div class="col text-right">
                              <q-toggle
                                v-model="publish"
                                color="primary"
                                label="Mark Fulfilled"
                                />
                          </div>
                      </div>
                      <q-separator class="q-mt-md"/>
                      <div class="row q-pt-md">
                          <div class="col">
                              <div class="text-body1">Category</div>
                          </div>
                          <div class="col text-right">
                              <div class="text-medium">Category A</div>
                          </div>
                      </div>
                      <q-separator class="q-mt-md"/>
                      <div class="row q-pt-md">
                          <div class="col">
                              <div class="text-body1">User</div>
                          </div>
                          <div class="col text-right">
                              <div class="text-medium">Akande George</div>
                          </div>
                      </div>
                      <q-separator class="q-mt-md"/>
                      <div class="row q-pt-md">
                          <div class="col">
                              <div class="text-body1">Phone number</div>
                          </div>
                          <div class="col text-right">
                              <div class="text-medium">08163040074</div>
                          </div>
                      </div>
                      <q-separator class="q-mt-md"/>
                      <div class="row q-pt-md">
                          <div class="col">
                              <div class="text-body1">Address</div>
                          </div>
                          <div class="col text-right">
                              <div class="text-medium">no 13 rabah road</div>
                          </div>
                      </div>
                      <q-separator class="q-mt-md"/>
                      <div class="row q-pt-md">
                          <div class="col">
                              <div class="text-body1">Time</div>
                          </div>
                          <div class="col text-right">
                              <div class="text-medium">31st Decemeber 2020</div>
                          </div>
                      </div>
                      <q-separator class="q-mt-md"/>
                      <div class="row q-pt-md">
                          <div class="col">
                              <div class="text-body1">User</div>
                          </div>
                          <div class="col text-right">
                              <div class="text-medium">Akande George</div>
                          </div>
                      </div>
                  </q-card>
              </div>
          </div>
      </section>
  </div>
</template>

<script>

export default {
    components: {
    },
    data () {
        return {
            publish: false,
        }
    },

    computed: {
        sizes () {
        let size = this.$q.screen.name
        if (size == 'md' || size == 'lg' || size == 'xl') {
            return 'q-pa-lg'
        } else return ''
        }
  },
}
</script>

<style>

</style>