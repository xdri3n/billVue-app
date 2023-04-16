<template>
  <div class="home">
    <!-- titre + bouton -->
    <div class="d-flex align-items-baseline justify-content-between border-bottom">
    <h1 class="text-secondary"><i class="fas fa-angle-down me-2" />Dashboard</h1>
    <div class="d-flex gap-2">
        <BButton size="md" variant="outline-primary" iconLeft="circle-plus" :to="{ name: 'bill', params: { id: -1 } }">
        Ajouter une facture
        </BButton>
        <BButton size="md" variant="outline-primary" iconLeft="circle-plus" :to="{ name: 'customer', params: { id: -1 } }">
        Ajouter un client
        </BButton>
    </div>
    </div>
    <!-- ./titre + bouton -->

    <div class="row justify-content-between">
      <!-- Dashboard Graphique -->
      <div class="col-12 col-md-4 m-4">
        <div class="card rounded shadow-sm border p-3 text-center h-50">
          <p class="text-start d-flex align-items-center">
            <span class="fs-1 fw-normal">{{ totalBills }}</span>
            <span class="fs-4 ms-2">Factures en 2023</span>
          </p>
          <img class="mb-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQByGGU55f5xDavJ2mzNUdQkpIWgpIoMXzH0FFdkERu1eJDTqW-" alt="je m'excuse je n'ai pas eu le temps">
          <div class="row">
            <strong class="fs-5 text-end mb-2">{{ totalTTC }} €</strong>
          </div>
          <div class="row">
            <div class="col-md-9 text-start">
              <p><i class="fa-regular fa-circle mx-1 text-success"></i>Total Encaissée TTC - 58,6%</p>
              <p><i class="fa-regular fa-circle mx-1 text-warning"></i>Total Facturé TTC - 34,9%</p>
              <p><i class="fa-regular fa-circle mx-1 text-danger"></i>Dû à plus d'un mois TTC - 6,5%</p>
            </div>
            <div class="col-md-3">
              <p>2%<i class="fa-solid fa-arrow-up mx-1 text-success"></i></p>
              <p>8%<i class="fa-solid fa-arrow-up mx-1 text-success"></i></p>
              <p>-5%<i class="fa-solid fa-arrow-down mx-1 text-danger"></i></p>
            </div>
          </div>
        </div>
      </div>
      <!-- ./Dashboard Graphique -->

      <div class="col-12 col-md-7 m-4 d-flex flex-column gap-4">
        <!-- Tableau des Factures -->
        <div class="card p-4 rounded shadow-sm">
          <h4>Factures en cours</h4>
          <p v-if="!lastBills || !lastBills.length" class="text-primary my-5">Aucune facture pour l'instant.</p>
          <LastBillList v-else>
            <LastBillListItem
              v-for="bill in lastBills"
              :key="bill.id"
              :bill="bill"
            />
          </LastBillList>
        </div>
        <!-- ./Tableau des Factures -->

        <!-- Tableau des Clients -->
        <div class="card p-3 rounded shadow-sm">
          <h4>Clients</h4>
          <p v-if="!lastCustomers || !lastCustomers.length" class="text-primary my-5">Aucun client pour l'instant.</p>
          <LastCustomerList v-else>
            <lastCustomerListItem
              v-for="customer in lastCustomers"
              :key="customer.id"
              :customer="customer"
            />
          </LastCustomerList>
        </div>
        <!-- ./Tableau des Clients -->
      </div>
    </div>
  </div>
</template>

<script>
    import { useCustomerStore } from '@/stores/customers.js'
    import { useBillStore } from '@/stores/bill.js'
    import LastCustomerList from '@/components/LastCustomerList.vue'
    import LastCustomerListItem from '@/components/LastCustomerListItem.vue'
    import LastBillList from '@/components/LastBillList.vue'
    import LastBillListItem from '@/components/LastBillListItem.vue'
    import { mapState, mapActions } from 'pinia'

    export default {
        components: {
            LastCustomerList,
            LastCustomerListItem,
            LastBillList,
            LastBillListItem
        },
        computed: {
            ...mapState(useCustomerStore, ['lastCustomers']),
            ...mapState(useBillStore, ['lastBills', 'totalBills', 'totalTTC'])
            },
        async mounted() {
            this.getLastCustomers(3)
            this.getLastBills(3),
            this.getAllBills(),
            this.totalTTC()
        },
        methods: {
            ...mapActions(useCustomerStore, ['getLastCustomers']),
            ...mapActions(useBillStore, ['getLastBills', 'getAllBills']),

            editCustomer(id) {
                console.log('edit customer with id : ', id)
                this.$router.push({
                    name: 'customer',
                    params: { id }
                })
            },
            editBill(id) {
                console.log('edit bill with id : ', id)
                this.$router.push({
                    name: 'bill',
                    params: { id }
                })
            }
        }
    }
</script>
