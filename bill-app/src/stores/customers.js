import { defineStore } from 'pinia'
import customerInterface from '../interfaces/clientInterface.js'
import cloneDeep from 'lodash.clonedeep'
import axios from 'axios'

const useCustomerStore = defineStore('customer', {
    state: () => ({
        customer: null,
        customers: [],
        lastCustomers: []
    }),
    getters: {
        totalCustomers: (state) => state.customers.length
    },
    actions: {
        async getAllCustomers() {
            try {
                const response = await axios.get('/customers')
                this.$patch({ customers: cloneDeep(response.data) })
            } catch (error) {
                console.log(error)
            }
        },

        createCustomer() {
            console.log("Création d'un nouveau client")
            this.$patch({ customer: cloneDeep(customerInterface) })
        },

        async getCustomer(id) {
            try {
                const response = await axios.get(`/customers/${id}`)
                this.$patch({ customer: cloneDeep(response.data) })
            } catch (error) {
                console.log(error)
            }
        },

        async saveCustomer(customer) {
            if (customer._id) {
                try {
                    const response = await axios.patch(`/customers/${customer._id}`, customer)
                    this.$reset()
                } catch (error) {
                    console.log(error)
                }
            } else {
                console.log("création d'un nouveau client")
                try {
                    const response = await axios.post(`/customers`, customer)
                    //   console.log('post response ', response.data)
                    this.$reset()
                } catch (error) {
                    console.log(error)
                }
            }
        },
        async deleteCustomer(id) {
            try {
                const response = await axios.delete(`/customers/${id}`)
                this.getAllCustomers()
            } catch (error) {
                console.log(error)
            }
        },
        async getLastCustomers(nbr) {
            try {
                const response = await axios.get(`/customers/lastcustomers/${nbr}`)
                console.log(response.data)
                this.$patch({ lastCustomers: cloneDeep(response.data) })
                return response.data;
            } catch (error) {
                console.log(error)
            }
        }
    }
})

export { useCustomerStore }