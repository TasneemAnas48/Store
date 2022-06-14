<template>
    <div>

        <table id="datatable"  class="table table-striped table-bordered dt-responsive nowrap">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Website</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id">
                    <td>{{ user.id }}</td>
                    <td>{{ user.name }}</td>
                    <td>{{ user.username }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.phone }}</td>
                    <td>{{ user.website }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
 
<script>
import $ from "jquery";
export default {
    mounted() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => {
                this.users = data;
                setTimeout(() => {
                    $("#datatable").DataTable({
                        // responsive: true,
                        "language": {
                            "url": "//cdn.datatables.net/plug-ins/1.12.1/i18n/ar.json"
                        },
                        lengthMenu: [
                            [5, 10, 25, 50, -1],
                            [5, 10, 25, 50, "All"],
                        ],
                        pageLength: 5,
                    });
                });
            });
    },
    data: function () {
        return {
            users: [],
        };
    },
};
</script>