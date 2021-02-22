<template>
  <div class="">
    <q-layout view="hHh Lpr lff" container style="height: 100vh;" class="">
      <q-header class="bg-white">
        <q-toolbar class="q-pa-md" outlined>
          <q-btn flat @click="drawer = !drawer" color="primary" round dense icon="menu" />
          <q-toolbar-title class="text-h5 text-bold text-primary">Agrobays</q-toolbar-title>
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="drawer"
        show-if-above
        :width="220"
        :breakpoint="500"
        bordered
        content-class="bg-white"
      >
        <q-scroll-area class="fit q-pt-xl">
          <q-list>
            <template>
              <q-item class="q-py-md" clickable v-ripple  @click="$router.push({name: 'users'})">
                <q-item-section avatar>
                  <q-icon color="primary" name="people" />
                </q-item-section>
                <q-item-section>
                  Users
                </q-item-section>
              </q-item>
            </template>
            <template>
              <q-item class="q-py-md" clickable v-ripple  @click="$router.push({name: 'home'})">
                <q-item-section avatar>
                  <q-icon color="primary" name="dashboard" />
                </q-item-section>
                <q-item-section>
                  Dashboard
                </q-item-section>
              </q-item>
            </template>
            <template>
              <q-item class="q-py-md" clickable v-ripple  @click="$router.push({name: 'orders'})">
                <q-item-section avatar>
                  <q-icon color="primary" name="receipt_long" />
                </q-item-section>
                <q-item-section>
                  Orders
                </q-item-section>
              </q-item>
            </template> 
            <template>
              <q-item class="q-py-md" clickable v-ripple  @click="$router.push({name: 'products'})">
                <q-item-section avatar>
                  <q-icon color="primary" name="inventory_2" />
                </q-item-section>
                <q-item-section>
                  Products
                </q-item-section>
              </q-item>
            </template> 
            <!-- <template>
              <q-item class="q-py-md" clickable v-ripple  @click="$router.push({name: 'products'})">
                <q-item-section avatar>
                  <q-icon color="primary" name="food_bank" />
                </q-item-section>
                <q-item-section>
                  Food Items
                </q-item-section>
              </q-item>
            </template>  -->
            <template>
              <q-item class="q-py-md" clickable v-ripple  @click="$router.push({name: 'settings'})">
                <q-item-section avatar>
                  <q-icon color="primary" name="settings" />
                </q-item-section>
                <q-item-section>
                  Settings
                </q-item-section>
              </q-item>
            </template>        
            <template>
              <q-item class="q-py-md position-bottom q-mt-xl" clickable v-ripple @click="logout">
                <q-item-section avatar>
                  <q-icon color="primary" name="exit_to_app" />
                </q-item-section>
                <q-item-section>
                  Logout
                </q-item-section>
              </q-item>
            </template>

          </q-list>
        </q-scroll-area>
      </q-drawer>

      <q-page-container>
        <q-page padding class="q-pa-md">
          <Main />
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import Main from 'components/dashboard'
export default {
    components: {
        Main
    },
    data () {
        return {
            drawer: false,
            drawer2: true 
        }
    },

    computed: {
        routename () {
            return this.$route.name
        },
        
    },

     methods: {
      logout () {
        this.$store.dispatch('Auth/logout')
      }
    }
}
</script>

<style scoped>
.active-class {
    background-color: #F6F7F9;
    border-left: 2px solid #F7A200;
}

.active-home {
    background-color: #F6F7F9;
    border-left: 2px solid #F7A200;
}

.activer:hover {
    background-color: #F6F7F9;
    border-left: 5px solid #F7A200;
}

</style>