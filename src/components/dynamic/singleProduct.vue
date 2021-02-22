<template>
  <div :class="sizes">
      <section>
          <div class="row q-pt-sm">
              <div class="col-md-9 q-mx-auto col-sm-12 col-xs-12">
                  <q-card class="q-pa-xl" flat bordered>
                      <div class="text-center">
                          <img src="~/assets/basic.svg" width="100px" alt="">
                      </div> 
                      <q-separator class="q-mt-md"/>
                      <div class="row q-pt-md">
                          <div class="col">
                              <div class="text-body1">Product name</div>
                          </div>
                          <div class="col text-right">
                              <div class="text-medium">{{  currentProduct.name }}</div>
                          </div>
                      </div>
                      <q-separator class="q-mt-md"/>
                      <div class="row q-pt-md">
                          <div class="col">
                              <div class="text-body1">Amount</div>
                          </div>
                          <div class="col text-right">
                              <div class="text-medium">NGN {{  currentProduct.amount }}</div>
                          </div>
                      </div>
                      <q-separator class="q-mt-md"/>
                      <div class="row q-pt-md">
                          <div class="col">
                              <div class="text-body1">Stock</div>
                          </div>
                          <div class="col text-right">
                              <div class="text-medium">{{  currentProduct.stock }}</div>
                          </div>
                      </div>
                      <q-separator class="q-mt-md"/>
                      <div class="row q-pt-md">
                          <div class="col">
                              <div class="text-body1">Plan ID</div>
                          </div>
                          <div class="col text-right">
                              <div class="text-medium">{{  currentProduct.planId }}</div>
                          </div>
                      </div>
                      <q-separator class="q-mt-md"/>
                      <div class="row q-pt-md">
                          <div class="col">
                              <div class="text-body1">Tag ID</div>
                          </div>
                          <div class="col text-right">
                              <div class="text-medium">{{  currentProduct.tagId }}</div>
                          </div>
                      </div>
                      <q-card-actions class="q-pt-lg" align="right">
                        <q-btn unelevated class="q-px-md" @click="deleteProduct" label="Delete product" no-caps color="deep-orange-11" v-close-popup />
                        <q-btn unelevated class="q-px-md" @click="personal = true" label="Update product" no-caps color="primary" v-close-popup />
                    </q-card-actions>
                  </q-card>
              </div>
          </div>
      </section>
    <q-dialog v-model="personal">
        <updateProduct />
    </q-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import updateProduct from 'components/common/updateProduct.vue'

export default {
    components: {
        updateProduct
    },
    data () {
        return {
            personal: false,
        }
    },

    methods: {
        deleteProduct () {
            const productId= this.$route.params.id
            this.$store.dispatch('Auth/deleteProduct', productId)
            this.$store.dispatch('Auth/products')
            this.$router.push({name: 'products'})
        }
    },



    computed: {

        ...mapGetters({
            products: 'Auth/products'
        }),

        currentProduct () {
            return this.products.find(x => x.id === this.$route.params.id)
        },

        sizes () {
        let size = this.$q.screen.name
        if (size == 'md' || size == 'lg' || size == 'xl') {
            return 'q-pa-lg'
        } else return ''
        }
  },

  mounted () {
      this.$store.dispatch('Auth/products')
  }
}
</script>

<style>

</style>