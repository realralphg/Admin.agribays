<template>
  <div>
      <div class="q-pa-md">
        <q-table
            flat
            title=""
            :data="data"
            :columns="columns"
            row-key="name"
            @row-click="rowClick"
            >
            <template v-slot:body="props">
              <q-tr :props="props">
                <q-td key="name" :props="props">{{ props.row.name }}</q-td>
                <q-td key="Name" :props="props">{{ props.row.Name }}</q-td>
                <q-td key="Products" :props="props">{{ props.row.Products }}</q-td>
                <q-td key="Amount" :props="props">{{ props.row.Amount }}</q-td>
                <q-td key="Status" :props="props" class="cursor-pointer">
                  <q-badge color="primary" class="q-pa-sm">
                  {{ props.row.Status }}
                  </q-badge>
                  <q-popup-edit v-model="props.row.Status" title="Update status" buttons persistent>
                    <q-select type="number" :options="options" v-model="props.row.Status" dense autofocus hint="" />
                  </q-popup-edit>
                </q-td>
                <q-td key="Date" :props="props">{{ props.row.Date }}</q-td>
              </q-tr>
            </template>
            </q-table>
        </div>
  </div>
</template>

<script>
export default {
    data () {
    return {
      options: ['Delivered', 'Pending'],
      columns: [
        {
          name: 'name',
          required: true,
          label: 'NO.',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'Name', align: 'left', label: 'Name', field: 'Name', sortable: true },
        { name: 'Products',  align: 'left', label: 'Products', field: 'Products', sortable: true },
        { name: 'Amount',  align: 'left', label: 'Amount', field: 'Amount' },
        { name: 'Status',  align: 'left', label: 'Status', field: 'Status' },
        { name: 'Date',  align: 'left', label: 'Date', field: 'Date' },
        // { name: 'Description',  align: 'left', label: 'Description', field: 'Description', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }
      ],
      data: [
        {
          name: '1',
          Name: 'Akande George',
          Products: '500A',
          Amount: 15000,
          Status: 'Delivered',
          Date: '1st April 2020',
        },

        {
          name: '1',
          Name: 'Akande George',
          Products: '500A',
          Amount: 15000,
          Status: 'Delivered',
          Date: '1st April 2020',
        },

        {
          name: '1',
          Name: 'Akande George',
          Products: '500A',
          Amount: 15000,
          Status: 'Delivered',
          Date: '1st April 2020',
        },

        {
          name: '1',
          Name: 'Akande George',
          Products: '500A',
          Amount: 15000,
          Status: 'Delivered',
          Date: '1st April 2020',
        },

        {
          name: '1',
          Name: 'Akande George',
          Products: '500A',
          Amount: 15000,
          Status: 'Delivered',
          Date: '1st April 2020',
        },
      ]
    }

    },

    methods: {
        rowClick (evt, row, index) {
        this.$router.push({ name: 'order' })
        },
    }
}
</script>

<style scoped>

</style>