<template>
  <div>
      <div>
            <div>
                <div class="row">
                    <div class="col-md-4 col-sm-12 col-xs-12 q-px-md q-mt-sm">
                        <q-card flat bordered class="q-pa-lg">
                            <div class="row">
                                <div class="col-5">
                                    <q-avatar size="60px" font-size="32px" color="accent" text-color="primary" icon="account_balance_wallet" />
                                </div>
                                <div class="col-7">
                                    <div class="text-h5 text-bold">Orders</div>
                                    <div class="text-body1 text-light">{{ orders.length }}</div>
                                </div>
                            </div>
                        </q-card>
                    </div>
                    <div class="col-md-4 col-sm-12 col-xs-12 q-px-md q-mt-sm">
                        <q-card flat bordered class="q-pa-lg">
                            <div class="row">
                                <div class="col-5">
                                    <q-avatar size="60px" font-size="32px" color="accent" text-color="primary" icon="topic" />
                                </div>
                                <div class="col-7">
                                    <div class="text-h5 text-bold">Users</div>
                                    <div class="text-body1 text-light">{{ users.length }}</div>
                                </div>
                            </div>
                        </q-card>
                    </div>
                    <div class="col-md-4 col-sm-12 col-xs-12 q-px-md q-mt-sm">
                        <q-card flat bordered class="q-pa-lg">
                            <div class="row">
                                <div class="col-5">
                                    <q-avatar size="60px" font-size="32px" color="accent" text-color="primary" icon="today" />
                                </div>
                                <div class="col-7">
                                    <div class="text-h5 text-bold">Products</div>
                                    <div class="text-body1 text-light">{{ products.length }}</div>
                                </div>
                            </div>
                        </q-card>
                    </div>
                </div>
            </div>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters({
            users: 'Auth/users',
            orders: 'Auth/orders',
            products: 'Auth/products'
        })
    },

    mounted () {
        this.$store.dispatch('Auth/users')
        this.$store.dispatch('Auth/orders')
        this.$store.dispatch('Auth/products')
    }
}
</script>

<style>

</style>