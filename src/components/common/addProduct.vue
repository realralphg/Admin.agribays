<template>
  <div>
      <q-card>
        <form @submit.prevent="addProd">
            <q-card-section :style="sizes">
                <div class="text-body1 text-weight-bold my-font text-center">Add Product</div>
                <div class="q-pa-md">
                  <div class="q-mt-sm">
                    <div class="text-caption text-weight-medium">Product name</div>
                    <q-input outlined v-model="addProduct.name" dense />
                  </div>
                  <div class="q-mt-sm">
                    <div class="text-caption text-weight-medium">Stock</div>
                    <q-input outlined type="number" v-model="addProduct.stock" dense />
                  </div>
                  <div class="q-mt-sm">
                    <div class="text-caption text-weight-medium">Amount</div>
                    <q-input outlined type="number" v-model="addProduct.amount" dense />
                  </div>
                  <div class="q-mt-sm">
                    <div class="text-caption text-weight-medium">Plan</div>
                    <q-select outlined v-model="addProduct.planId" :options="plans.map(x => x.name)" dense />
                  </div>
                  <div class="q-mt-sm">
                    <div class="text-caption text-weight-medium">Tags</div>
                    <q-select outlined v-model="addProduct.tagId" :options="tags.map(x => x.name)" dense />
                  </div>
                </div>
            </q-card-section>

            <q-card-actions align="right">
            <q-btn unelevated class="q-px-md" type="submit" label="Add Product" no-caps color="primary" v-close-popup />
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

      addProduct: {
        name: '',
        stock: null,
        amount: null,
        planId: '',
        tagId: ''
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

    ...mapGetters({
            plans: 'Auth/plans',
            tags: 'Auth/tags'
        })
    },

    methods: {
      addProd () {
        let planKor = this.plans.filter(x => x.name == this.addProduct.planId)
        this.addProduct.planId = planKor[0].id
        let tagKor = this.tags.filter(y => y.name == this.addProduct.tagId)
        this.addProduct.tagId = tagKor[0].id
        console.log(this.addProduct.planId)
        console.log(this.addProduct.tagId)
        this.$store.dispatch('Auth/addProduct', this.addProduct)
          .then(() => {
              this.$store.dispatch('Auth/products')
              this.$q.notify({
              message: 'Product added was successful!',
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

     mounted () {
      this.$store.dispatch('Auth/plans')
      this.$store.dispatch('Auth/tags')
    }

}
</script>

<style>

</style>