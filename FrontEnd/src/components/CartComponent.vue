<template>
    <NavigationComponent />
    <v-container>
        <v-data-table :items="items" :items-per-page="5" :headers="headers">
            <template v-slot:top>
                <v-toolbar flat>
                    <v-toolbar-title>Item List</v-toolbar-title>
                    <v-divider class="mx-4" inset vertical></v-divider>
                    <v-spacer></v-spacer>
                    <v-dialog v-model="dialog" max-width="500px">
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
                                Add Item
                            </v-btn>
                        </template>

                        <v-card>
                            <v-card-title>
                                <span class="headline">Add New Item</span>
                            </v-card-title>
                            <v-card-text>
                                <v-container>
                                    <v-row>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="newItem.name" label="Item Name"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="newItem.price" label="Price"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="newItem.quantity" label="Quantity"></v-text-field>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn @click="dialog = false">Cancel</v-btn>
                                <v-btn @click="addItem" color="primary">Save</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-toolbar>
            </template>

            <template v-slot:[`item.actions`]="{ item }">
                <div class="d-flex justify-space-between align-center">
                    <v-btn @click="editItem(item)">
                        <v-icon>mdi-pencil</v-icon>
                    </v-btn>
                    <v-btn @click="deleteItem(item)">
                        <v-icon>mdi-delete</v-icon>
                    </v-btn>
                </div>
            </template>


        </v-data-table>
    </v-container>
</template>

<script>
import NavigationComponent from './NavigationComponent.vue';
export default {
    name: "CartComponent",
    components: {
        NavigationComponent
    },
    data() {
        return {
            dialog: false,
            headers: [
                { text: 'Item Name', value: 'name' },
                { text: 'Price', value: 'price' },
                { text: 'Quantity', value: 'quantity' },
                { text: 'Actions', value: 'actions', sortable: false },
            ],
            items: [
                // Sample data, replace with your actual data
                { name: 'Item 1', price: 100, quantity: 2 },
                { name: 'Item 2', price: 200, quantity: 5 },
            ],
            newItem: {
                name: '',
                price: '',
                quantity: ''
            }
        };
    },
    methods: {
        addItem() {
            if (this.newItem.name && this.newItem.price && this.newItem.quantity) {
                this.items.push({ ...this.newItem });
                this.newItem.name = '';
                this.newItem.price = '';
                this.newItem.quantity = '';
                this.dialog = false;
            } else {
                alert('Please fill out all fields');
            }
        },
        editItem(item) {
            alert(`Edit ${item.name}`);
        },
        deleteItem(item) {
            this.items = this.items.filter(i => i !== item);
        }
    }
};
</script>

<style scoped>
.headline {
    font-weight: bold;
}
</style>
