<template>
  <div class="">
    <section class="">
        <div class="text-right q-mt-md">
            <q-btn unelevated color="primary" class="my-font" label="Add product" @click="personal = true" no-caps />
        </div>
      <div class="text-body1 text-medium">Products</div>
    </section>
    <Product />
    <q-dialog v-model="personal">
        <addProduct />
    </q-dialog>
  </div>
</template>

<script>
import Product from 'components/common/product.vue'
import addProduct from 'components/common/addProduct.vue'
export default {
  components: {
    Product,
    addProduct
  },

  data () {
      return {
          personal: false,
      }
  }
}
</script>

<style>

</style>