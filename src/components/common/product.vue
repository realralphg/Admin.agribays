<template>
  <div>
      <div class="q-pa-md">
        <q-table
            flat
            title=""
            :data="products"
            :columns="columns"
            row-key="name"
            @row-click="rowClick"
            :pagination.sync="pagination"
            ></q-table>
        </div>
  </div>
</template>

<script>
// import Swal from 'sweetalert2/dist/sweetalert2.js'
import { mapGetters } from 'vuex'
import 'sweetalert2/src/sweetalert2.scss'

export default {
    data () {
    return {
      pagination: {
        rowsPerPage: 15 // current rows per page being displayed
      },

      columns: [
        {
          name: 'name',
          required: true,
          label: 'NO.',
          align: 'left',
          field: row => row.id,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'product', align: 'left', label: 'Product', field: row => row.name, sortable: true },
        { name: 'Amount',  align: 'left', label: 'Amount', field: row => row.amount, },
        // { name: 'Tags',  align: 'left', label: 'Tags', field: row => row.tagId, },
        { name: 'Stock',  align: 'left', label: 'Stocks ', field: row => row.stock, },
        { name: 'Status',  align: 'left', label: 'Status ', field: row => row.status, },
      ],
      data: [
        {
          name: '1',
          Date: '3kg Indomine Noodles',
          Amount: 3000,
          Tags: '500C, 500B, 500A, 300A,',
          Stock: 10,
          Status: true
        },
      ]
    }

    },

    methods: {
        rowClick (evt, row, index) {
        this.$router.push({ name: 'product', params: {id: row.id}})
        }
    },

     computed: {
        ...mapGetters({
            products: 'Auth/products'
        })
    },

    mounted () {
      this.$store.dispatch('Auth/products')
    }
}
</script>

<style scoped>

</style>