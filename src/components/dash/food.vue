<template>
  <div>
      <span class="text-h5 text-bold">Current Plan - </span> 
      <span class="text-h5">NGN 500</span> <br> <br>

      <span class="text-h6 text-primary">Select a Food Bag of your choice!</span> <br>

      <section class="container">
        <q-card class="my-card q-pa-lg bg-transparent" flat>
            <div class="row">
                <div class="col-md-4 col-sm-4 col-xs-12">
                    <img src="~/assets/basic.svg" style="width: 70%" alt="">
                    <div>
                        <div class="text-h6 text-weight-bold">Food Items (N15,000):</div>
                        <div class="text-">
                            <ul>
                                <li>5kg Rice (1)</li>
                                <li>1 Crate of Eggs (2)</li>
                                <li>5kg Semovita (1)</li>
                                <li>2kg Peak Milk (4)</li>
                                <li>2kg Bournvita (4)</li>
                                <li>3kg Indomie Noodles (3)</li>
                            </ul>
                            <!-- <q-list>
                                <q-item>
                                    <q-item-section avatar>
                                    <q-icon color="primary" name="shop" size="10px" />
                                    </q-item-section>

                                    <q-item-section>5kg Rice</q-item-section>
                                </q-item>
                                <q-item>
                                    <q-item-section avatar>
                                    <q-icon color="primary" name="shop" size="10px" />
                                    </q-item-section>

                                    <q-item-section>Crate of Eggs</q-item-section>
                                </q-item>
                                <q-item>
                                    <q-item-section avatar>
                                    <q-icon color="primary" name="shop" size="10px" />
                                    </q-item-section>

                                    <q-item-section>5kg Semovita</q-item-section>
                                </q-item>
                                <q-item>
                                    <q-item-section avatar>
                                    <q-icon color="primary" name="shop" size="10px" />
                                    </q-item-section>

                                    <q-item-section>2kg Peak Milk (1)</q-item-section>
                                </q-item>
                                <q-item>
                                    <q-item-section avatar>
                                    <q-icon color="primary" name="shop" size="10px"/>
                                    </q-item-section>

                                    <q-item-section>2kg Bournvita</q-item-section>
                                </q-item>
                                <q-item >
                                    <q-item-section avatar>
                                    <q-icon color="primary" name="shop" size="10px" />
                                    </q-item-section>

                                    <q-item-section>3kg Indomine Noodles</q-item-section>
                                </q-item>
                            </q-list> -->
                        </div>
                        <q-btn unelevated color="primary"  @click="alert1 = true" class="q-px-md" label="Select" no-caps/>
                    </div>
                </div>
                <div class="col-md-4 col-sm-4 col-xs-12 q-mt-lg">
                    <img src="~/assets/standard.svg" style="width: 70%" alt="">
                    <div>
                        <div class="text-h5 text-weight-bold">Food Items (N15,000):</div>
                        <div class="text-">
                            <ul>
                                <li>5kg Poundo Yam (1)</li>
                                <li>1 Crate of Eggs (4)</li>
                                <li>5kg Spaghetti (4)</li>
                                <li>2kg Peak Milk (3)</li>
                                <li>2kg Bournvita (3)</li>
                                <li>3kg Indomie Noodles (5)</li>
                            </ul>

                        </div>
                        <q-btn unelevated color="primary" class="q-px-md" @click="alert1 = true" label="Select" no-caps/>
                    </div>
                </div>
                <div class="col-md-4 col-sm-4 col-xs-12 q-mt-lg">
                    <img src="~/assets/premium.svg" style="width: 70%" alt="">
                    <div>
                        <div class="text-h5 text-weight-bold">Food Items (N15,000):</div>
                        <div class="text-">
                            <ul>
                                <li>3kg Groundnut Oil (3)</li>
                                <li>5kg Oats (1)</li>
                                <li>2kg Peak Milk (4)</li>
                                <li>2kg Bournvita (3)</li>
                                <li>1 Crate of Eggs (2)</li>
                                <li>3kg Indomie Noodles (4)</li>
                            </ul>

                        </div>
                        <q-btn unelevated color="primary" class="q-px-md" @click="alert1 = true" label="Select" no-caps/>
                    </div>
                </div>
            </div>
        </q-card>
      </section>

      <!-- Dialog begines here  -->
      <section>
          <q-dialog v-model="alert1">
            <q-card>
                <q-card-section>
                <div class="text-h6">One Moment!</div>
                </q-card-section>

                <q-card-section class="q-pt-none">
                Home Delivery will attract additional N300
                </q-card-section>

                <q-card-actions align="center">
                <q-btn unelevated label="Pickup at Agrobays" color="primary" v-close-popup no-caps />
                <q-btn unelevated label="Home Delivery" color="primary" v-close-popup  no-caps/>
                </q-card-actions>
            </q-card>
            </q-dialog>

      </section>
  </div>
</template>

<script>
export default {
    data () {
        return {
            alert1: false,
        }
    }
}
</script>

<style scoped>
ul li {
    list-style-type: none;
}

</style>