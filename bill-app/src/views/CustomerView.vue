<template>
    <div class="customers">
        <!-- titre + bouton -->
        <div class="d-flex align-items-baseline justify-content-between border-bottom mb-4">
            <h1 class="mb-4 text-secondary"><i class="fas fa-angle-down me-2" />Liste des clients</h1>
            <BButton size="md" iconLeft="circle-plus" :to="{ name: 'customer', params: { id: -1 } }">
                Ajouter un client
            </BButton>
        </div>
        <!-- ./titre + bouton -->

        <p v-if="!customers || !customers.length" class="text-primary my-5">Aucun client pour l'instant.</p>

        <!-- tableau des clients -->
        <CustomerList v-else>
            <CustomerListItem
            v-for="customer in customers"
            :key="customer.id"
            :customer="customer"
            message="test"
            @delete="deleteCustomer($event)"
            @edit="editCustomer($event)"
            />
        </CustomerList>
        <!-- ./tableau des clients -->

            <p class="text-center text-muted">
                {{ totalCustomers }} client<span v-if="totalCustomers > 1">s</span>
            </p>
        </div>
    </template>

<script>
    // On importe le store des customers
    import { useCustomerStore } from '@/stores/customers.js'
    // On importe les composants enfants
    import CustomerList from '@/components/CustomerList.vue'
    import CustomerListItem from '@/components/CustomerListItem.vue'
    // On importe les fonctions mapState et mapActions
    import { mapState, mapActions } from 'pinia'

    export default {
        components: {
            CustomerList,
            CustomerListItem
        },
        computed: {
            ...mapState(useCustomerStore, ['customers', 'totalCustomers'])
            },
        mounted() {
            // On récupère tous les customers via le store
            this.getAllCustomers()
        },
        methods: {
            ...mapActions(useCustomerStore, ['deleteCustomer', 'getAllCustomers']),

            editCustomer(id) {
                console.log('edit customer with id : ', id)
                this.$router.push({
                    name: 'customer',
                    params: { id }
                })
            }
        }
    }
</script>