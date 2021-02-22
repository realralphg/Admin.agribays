<template>
  <div>
      <q-card>
        <form @submit.prevent="updateProd">
            <q-card-section :style="sizes">
                <div class="text-body1 text-weight-bold my-font text-center">Update Product</div>
                <div class="q-pa-md">
                  <div class="q-mt-sm">
                    <div class="text-caption text-weight-medium">Product name</div>
                    <q-input outlined v-model="updateProduct.name" dense />
                  </div>
                  <div class="q-mt-sm">
                    <div class="text-caption text-weight-medium">Stock</div>
                    <q-input outlined type="number" v-model="updateProduct.stock" dense />
                  </div>
                  <div class="q-mt-sm">
                    <div class="text-caption text-weight-medium">Amount</div>
                    <q-input outlined type="number" v-model="updateProduct.amount" dense />
                  </div>
                  <div class="q-mt-sm">
                    <div class="text-caption text-weight-medium">Plan ID</div>
                    <q-input outlined v-model="updateProduct.planId" dense />
                  </div>
                  <div class="q-mt-sm">
                    <div class="text-caption text-weight-medium">Tad ID</div>
                    <q-input outlined v-model="updateProduct.tagId" dense />
                  </div>
                </div>
            </q-card-section>

            <q-card-actions align="right">
            <q-btn unelevated class="q-px-md" type="submit" label="Update Product" no-caps color="primary" v-close-popup />
            </q-card-actions>
        </form>
      </q-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    components: {
    },

    data () {
      return {
        model: true,
        yourValue: '',
        options: [
        true, false
      ],

      updateProduct: {
        name: '',
        stock: null,
        amount: null,
        planId: null,
        tagId: null
      }
      }
    },
    computed: {
    sizes () {
      let size = this.$q.screen.name
      if (size == 'md' || size == 'lg' || size == 'xl') {
        return 'width: 500px'
      } else return 'width: 320px'
    },
    },

    methods: {

      dataProd () {
        const product = this.products.filter(element => element.id === this.$route.params.id)
        const currentProduct = product[0]
        alert(currentProduct.name)
        this.updateProd.name = product[0].name
        this.updateProduct.stock = product[0].stock
        this.updateProduct.amount = product[0].amount
        this.updateProduct.planId= product[0].planId
        this.updateProduct.tagId= product[0].tagId
      },

      updateProd () {
        const productId= this.$route.params.id
        this.$store.dispatch('Auth/updateProduct', this.updateProduct, productId)
          .then(() => {
              this.$q.notify({
              message: 'Product was successful updated!',
              color: 'green'
              })
          })
          .catch(error => {
              if (error.response) {
              this.$q.notify({message: error.response.data.message, color: 'orange'})
              }
          })
      }
    },

    computed: {
      ...mapGetters({
        products: 'Auth/products'
      }),
    },

    mounted () {
      this.$store.dispatch('Auth/products')
      this.dataProd()
    }

}
</script>

<style>

</style>