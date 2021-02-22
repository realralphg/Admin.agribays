<template>
  <div>
      <component :is="componentId"></component>
  </div>
</template>

<script>
import overview from '../components/dash/overview'
import settings from '../components/dash/settings'
import orders from '../components/dash/orders'
import products from '../components/dash/products'
import users from '../components/dash/users'
import user from '../components/dynamic/singleUser'
import order from '../components/dynamic/singleOrder'
import product from '../components/dynamic/singleProduct'
import home from '../components/dash/home'
export default {
components: {
  overview,
    home,
    orders,
    users,
    user,
    order,
    product,
    products,
    settings,
},
computed: {
    componentId() {
        return this.$route.name
    },
  },
}
</script>

<style>

</style>