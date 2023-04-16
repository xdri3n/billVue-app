<template>
    <tr>
        <td><i class="fa-regular fa-file" /></td>
        <td>{{ 'Facture ' + formatDate(bill.date) }}</td>
        <td v-if="bill.client.company">{{ bill.client.company }}</td>
        <td v-else>{{ bill.client.firstName }} {{ bill.client.lastName }}</td>
        <td class="text-end">{{ bill.totalHT.toFixed(2) }} € HT</td>
        <td class="text-end">{{ bill.totalTTC.toFixed(2) }} € TTC</td>
        <td class="d-flex gap-2 justify-content-end">
            <a v-bind:href="'/bill/' + bill._id" class="text-decoration-none text-dark fw-bold">Éditer</a>
        </td>
    </tr>
</template>

<script>
export default {
    props: {
        bill: {
            type: Object,
            required: true
        },
        message: {
            type: String,
            default: '-'
        }
    },
    methods: {
        formatDate(dateStr) {
            const date = new Date(dateStr);
            const year = date.getFullYear();
            const month = ('0' + (date.getMonth() + 1)).slice(-2);
            return `${year}-${month}`;
        }
    }
}
</script>

<style lang="scss" scoped></style>
