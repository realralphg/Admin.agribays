<template>
  <div :class="sizes">
      <section>
          <div class="row q-pt-sm">
              <div class="col-md-9 q-mx-auto col-sm-12 col-xs-12">
                  <q-card class="q-pa-xl" flat bordered>
                      <div class="row">
                          <div class="col">
                              <q-avatar size="50px" font-size="32px" color="accent" text-color="primary" icon="person" />
                          </div>
                          <div class="col q-pt-md text-right">
                              <div class="text-medium">customer ID</div>
                          </div>
                      </div>
                      <q-separator class="q-mt-md"/>
                      <div class="row q-pt-md">
                          <div class="col">
                              <div class="text-body1">Name</div>
                          </div>
                          <div class="col text-right">
                              <div class="text-medium">Akande George</div>
                          </div>
                      </div>
                      <q-separator class="q-mt-md"/>
                      <div class="row q-pt-md">
                          <div class="col">
                              <div class="text-body1">Email</div>
                          </div>
                          <div class="col text-right">
                              <div class="text-medium">george.akande.goa@gmail.com</div>
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
                              <div class="text-body1">Plan</div>
                          </div>
                          <div class="col text-right">
                              <div class="text-medium">500</div>
                          </div>
                      </div>
                      <q-separator class="q-mt-md"/>
                      <div class="row q-pt-md">
                          <div class="col">
                              <div class="text-body1">Start</div>
                          </div>
                          <div class="col text-right">
                              <div class="text-medium">1st December 2020</div>
                          </div>
                      </div>
                      <q-separator class="q-mt-md"/>
                      <div class="row q-pt-md">
                          <div class="col">
                              <div class="text-body1">Due date</div>
                          </div>
                          <div class="col text-right">
                              <div class="text-medium">31st December 2020</div>
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
            tab: 'transaction',
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