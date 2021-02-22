<template>
  <div class="q-pa-lg">
    <!-- <section>
      <div class="row">
        <div class="col-md-12 col-sm-12 col-xs-12">
          <q-card class="q-pa-lg row" flat>
            <div class="col-md-3 col-sm-12 col-xs-12 text-center">
              <q-avatar size="100px" font-size="52px" color="secondary" text-color="primary" icon="person" />
            </div>
            <div class="col-md-9 col-sm-12 col-xs-12 q-pl-lg">
              <div class="q-mt-md">
                <div class="text-body1 text-bold">{{ name }}</div>
                <div class="text-caption">{{ email }}</div>
                <div class="text-caption text-bold">{{ phone }}</div>
                <div class="q-mt-sm">
                  <q-btn unelevated color="primary" @click="$router.push({name: 'edit'})" class="q-mr-sm" label="Edit" no-caps />
                  <q-btn outline color="primary" class="q-mx-sm" label="Change plan" no-caps >
                    <q-menu>
                      <q-list style="min-width: 100px">
                        <q-item clickable v-close-popup>
                          <q-item-section>NGN 300</q-item-section>
                        </q-item>
                        <q-item clickable v-close-popup>
                          <q-item-section>NGN 500</q-item-section>
                        </q-item>
                        <q-separator />
                        <q-item clickable v-close-popup>
                          <q-item-section>NGN 1000</q-item-section>
                        </q-item>
                      </q-list>
                    </q-menu>
                  </q-btn>
                </div>
              </div>
            </div>
          </q-card>
        </div>
      </div>
    </section>
    <section class="q-pt-lg">
      <div class="row">
        <div class="col-md-6 col-sm-12 col-xs-12 q-mt-md q-pr-lg">
          <q-card flat class="q-pa-lg">
            <q-item>
              <q-item-section top avatar>
                <q-avatar color="secondary" text-color="primary" icon="home" />
              </q-item-section>

              <q-item-section>
                <q-item-label class="text-body1 text-bold">Address 1</q-item-label>
                <q-item-label caption lines="2">Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
              </q-item-section>
            </q-item>
            <q-item class="q-mt-sm">
              <q-item-section top avatar>
                <q-avatar color="secondary" text-color="primary" icon="home" />
              </q-item-section>

              <q-item-section>
                <q-item-label class="text-body1 text-bold">State</q-item-label>
                <q-item-label caption lines="2">Kaduna State</q-item-label>
              </q-item-section>
            </q-item>
            <q-item class="q-mt-sm">
              <q-item-section top avatar>
                <q-avatar color="secondary" text-color="primary" icon="home" />
              </q-item-section>

              <q-item-section>
                <q-item-label class="text-body1 text-bold">Country</q-item-label>
                <q-item-label caption lines="2">Nigeria</q-item-label>
              </q-item-section>
            </q-item>
          </q-card>
        </div>
        <div class="col-md-6 col-sm-12 col-xs-12 q-mt-md q-pl-lg">
          <q-card flat class="q-pa-lg">
            <q-item>
              <q-item-section top avatar>
                <q-avatar color="secondary" text-color="primary" icon="home" />
              </q-item-section>

              <q-item-section>
                <q-item-label class="text-body1 text-bold">Current plan</q-item-label>
                <q-item-label caption lines="2"><b>NGN</b> 500</q-item-label>
              </q-item-section>
            </q-item>
            <q-item class="q-mt-sm">
              <q-item-section top avatar>
                <q-avatar color="secondary" text-color="primary" icon="home" />
              </q-item-section>

              <q-item-section>
                <q-item-label class="text-body1 text-bold">Start Date</q-item-label>
                <q-item-label caption lines="2">1st December 2020</q-item-label>
              </q-item-section>
            </q-item>
            <q-item class="q-mt-sm">
              <q-item-section top avatar>
                <q-avatar color="secondary" text-color="primary" icon="home" />
              </q-item-section>

              <q-item-section>
                <q-item-label class="text-body1 text-bold">Due Date</q-item-label>
                <q-item-label caption lines="2">30th December 2020</q-item-label>
              </q-item-section>
            </q-item>
          </q-card>
        </div>
      </div>
    </section> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: 'Akande George',
      email: 'george.akande.goa@gmail.com',
      phone: '08163040074'
    }
  }
}
</script>

<style>

</style>