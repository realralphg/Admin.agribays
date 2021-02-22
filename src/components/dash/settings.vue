<template>
  <div class="">
    <div class="q-pa-md">
    <div class="q-gutter-y-md">
      <q-card flat class="bg-transparent">
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
        >
          <q-tab name="mails" label="Plans" no-caps />
          <q-tab name="alarms" label="Tags" no-caps />
          <q-tab name="movies" label="Add admin" no-caps />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated class="bg-transparent">
          <q-tab-panel name="mails">
            <div class="text-h6">Plans</div>
            <div class="text-body1">Here are the list of active plans</div>
            <div class="row">
              <q-list class="col-md-3 col-sm-4 col-xs-6">
                <q-item v-for="plan in plans" :key="plan.name" class="q-my-sm bg-green-1">
                  <q-item-section avatar>
                    <q-avatar color="primary" size="sm" text-color="white" icon="done" />
                  </q-item-section>

                  <q-item-section>{{ plan.name }}</q-item-section>
                  <q-item-section side top clickable>
                    <q-icon name="delete" color="red" class="cursor-pointer" @click="remove(plan)" />
                  </q-item-section>
                </q-item>
              </q-list>
            </div>
            <div class="q-py-sm">
              <q-btn color="primary" unelevated icon-right="add" @click="personal = true" no-caps label="Add Plan" />
            </div>
          </q-tab-panel>

          <q-tab-panel name="alarms">
            <div class="text-h6">Tags</div>
            <div class="text-body1">Here are the list of tags</div>
            <div class="row">
            <q-list class="col-md-3 col-sm-4 col-xs-6">
              <q-item v-for="tag in tags" :key="tag.id" class="q-my-sm bg-green-1">
                <q-item-section avatar>
                  <q-avatar color="primary" text-color="white" icon="done" />
                </q-item-section>

                <q-item-section>{{ tag.name }}</q-item-section>
                <q-item-section side top clickable>
                    <q-icon name="delete" color="red" class="cursor-pointer" @click="removeTag(tag)" />
                  </q-item-section>
              </q-item>
            </q-list>
            </div>
            <div class="q-py-sm">
              <q-btn color="primary" unelevated icon-right="add" @click="personalTwo = true" no-caps label="Add Tag" />
            </div>
          </q-tab-panel>

          <q-tab-panel name="movies">
            <div class="text-h6">Add new Admin</div>
            Click here to add admin
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
  </div>
  <q-dialog v-model="personal">
        <addPlan />
    </q-dialog>
    <q-dialog v-model="personalTwo">
        <addTag />
    </q-dialog>
  </div>
</template>

<script>
import addPlan from 'components/common/addPlan.vue'
import addTag from 'components/common/addTag.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    addPlan,
    addTag
  },
  data () {
    return {
      personal: false,
      personalTwo: false,
      tab: 'mails',
      planser: [
        {
          name: '300 plan',
          amount: 300,
          description: '300 plan'
        },
        {
          name: '500 plan',
          amount: 500,
          description: '500 plan'
        },
      ],
      tagser: [
        {
          name: '500A',
          description: 'would appear only in group A'
        },
        {
          name: '500B',
          description: 'would appear only in group B for the 500 plan'
        }
      ]
    }
  },

  computed: {
        ...mapGetters({
            plans: 'Auth/plans',
            tags: 'Auth/tags'
        })
    },

    methods: {
      remove(plan) {
        // alert(plan.name)
        const productId= plan.id
        this.$store.dispatch('Auth/deletePlan', productId)
        this.plans.pop(plan)
        .then(()=> {
          this.$q.notify({
          message: 'Plan removed!',
          color: 'green'
          })
        })
        .catch(error => {
            if (error.response) {
            this.$q.notify({message: error.response.data.message, color: 'orange'})
            }
        })
      },

      removeTag(tag) {
        // alert(plan.name)
        const productId= tag.id
        this.$store.dispatch('Auth/deletePlan', productId)
        this.tags.pop(tag)
        .then(()=> {
          this.$q.notify({
          message: 'Tag removed!',
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