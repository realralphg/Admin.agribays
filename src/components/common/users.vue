<template>
  <div>
      <div class="q-pa-md">
        <q-table
            flat
            title=""
            :data="users"
            :columns="columns"
            :row-key="item => item.createdAt"
            @row-click="rowClick"
            >
            ></q-table>
        </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    data () {
    return {
      columns: [
        {
          name: 'id',
          required: true,
          label: 'NO.',
          align: 'left',
          field: row => row.id,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'user', align: 'left', label: 'Name', field: row => row.first_name + ' ' + row.last_name, sortable: true },
        { name: 'plan',  align: 'left', label: 'Plan', field: row => row.label, sortable:true },
        { name: 'saved',  align: 'left', label: 'Saved', field: row => row.wallet[0].balance, sortable: true },
        { name: 'start',  align: 'left', label: 'Start', field: row => `${new Date(row.wallet[0].createdAt).toDateString().split(' ')[1]} ${new Date(row.wallet[0].createdAt).toDateString().split(' ')[2]}` },
        { name: 'end',  align: 'left', label: 'End', field: 'end' },
      ],
      data: [
        {
          name: '1',
          user: 'Akande George',
          saved: 5000,
          plan: 500,
          start: '1st December 2020',
          end: '31st December 2020',
        },

        {
          name: '1',
          user: 'Akande George',
          saved: 5000,
          plan: 500,
          start: '1st December 2020',
          end: '31st December 2020',
        },

        {
          name: '1',
          user: 'Akande George',
          saved: 5000,
          plan: 500,
          start: '1st December 2020',
          end: '31st December 2020',
        },

        {
          name: '1',
          user: 'Akande George',
          saved: 5000,
          plan: 500,
          start: '1st December 2020',
          end: '31st December 2020',
        },

        {
          name: '1',
          user: 'Akande George',
          saved: 5000,
          plan: 500,
          start: '1st December 2020',
          end: '31st December 2020',
        },

        {
          name: '1',
          user: 'Akande George',
          saved: 5000,
          plan: 500,
          start: '1st December 2020',
          end: '31st December 2020',
        },
      ]
    }

    },

    methods: {
        rowClick (evt, row, index) {
        this.$router.push({ name: 'user' })
        },
    },

    computed: {
      ...mapGetters({
        users: 'Auth/users'
      })
    },

    mounted () {
      this.$store.dispatch('Auth/users')
    }
}
</script>

<style scoped>

</style>