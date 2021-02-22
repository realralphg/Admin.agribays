<template>
  <div>
      <q-card>
        <form @submit.prevent="add">
            <q-card-section :style="sizes">
                <div class="text-body1 text-weight-bold my-font text-center">Add Plan</div>
                <div class="q-pa-md">
                  <div class="q-mt-sm">
                    <div class="text-caption text-weight-medium">Plan name</div>
                    <q-input outlined v-model="addPlan.name" dense />
                  </div>
                  <div class="q-mt-sm">
                    <div class="text-caption text-weight-medium">Amount</div>
                    <q-input outlined type="number" v-model="addPlan.amount" dense />
                  </div>
                  <div class="q-mt-sm">
                    <div class="text-caption text-weight-medium">description</div>
                    <q-input outlined v-model="addPlan.description" dense />
                  </div>
                </div>
            </q-card-section>

            <q-card-actions align="right">
            <q-btn unelevated class="q-px-md" type="submit" label="Add Plan" no-caps color="primary" v-close-popup />
            </q-card-actions>
        </form>
      </q-card>
  </div>
</template>

<script>

export default {
    components: {
    },

    data () {
      return {
        model: true,
        yourValue: '',

      addPlan: {
            name: '',
            amount: null,
            description: null,
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
      add () {
        this.$store.dispatch('Auth/addPlan', this.addPlan)
          .then(() => {
              this.$store.dispatch('Auth/plans')
              this.$q.notify({
              message: 'Plan added was successful!',
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
    

}
</script>

<style>

</style>