<template>
    <tr>
        <td><i class="fa-regular fa-user" /></td>
        <td>{{ customer.firstName }} {{ customer.lastName }}</td>
        <td>{{ customer.company }}</td>
        <td class="text-end">{{ customer.dateAdded }}</td>
        <td class="d-flex gap-2 justify-content-end">
            <a v-bind:href="'/customer/' + customer._id" class="text-decoration-none text-dark fw-bold">Éditer</a>
        </td>
    </tr>
</template>

<script>
export default {
    props: {
        customer: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped></style>
