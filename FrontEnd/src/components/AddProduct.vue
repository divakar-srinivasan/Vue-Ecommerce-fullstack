<template>
  <div class="add-product">
    <h2>Add a New Product</h2>
    <form @submit.prevent="submitProduct">
      <div>
        <label for="name">Name:</label>
        <input type="text" v-model="product.name" required />
      </div>
      <div>
        <label for="category">Category:</label>
        <input type="text" v-model="product.category" required />
      </div>
      <div>
        <label for="price">Price:</label>
        <input type="number" v-model="product.price" required />
      </div>
      <div>
        <label for="unit">Unit:</label>
        <input type="text" v-model="product.unit" required />
      </div>
      <div>
        <label for="unit">Link:</label>
        <input type="text" v-model="product.link" required />
      </div>
      <button type="submit">Add Product</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      product: {
        name: '',
        category: '',
        price: 0,
        unit: '',
        link: ''
      },
    };
  },
  methods: {
    handleImageUpload(event) {
      this.product.image = event.target.files[0];
    },
    async submitProduct() {
      try {
        const formData = new FormData();
        formData.append('name', this.product.name);
        formData.append('category', this.product.category);
        formData.append('price', this.product.price);
        formData.append('unit', this.product.unit);
        formData.append('link', this.product.link);

        const response = await axios.post('http://localhost:3000/api/products/add', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        console.log('Product added:', response.data);
        // Optionally, clear the form after successful submission
        this.resetForm();
      } catch (error) {
        console.error('There was an error adding the product:', error);
      }
    },
    resetForm() {
      this.product.name = '';
      this.product.category = '';
      this.product.price = 0;
      this.product.unit = '';
      this.product.link = '';
    },
  },
};
</script>

<style scoped>
.add-product {
  max-width: 500px;
  margin: auto;
  padding: 1em;
  background-color: #f9f9f9;
  border-radius: 5px;
}

.add-product h2 {
  margin-bottom: 1em;
}

.add-product div {
  margin-bottom: 1em;
}

.add-product label {
  display: block;
  margin-bottom: 0.5em;
}

.add-product input {
  width: 100%;
  padding: 0.5em;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.add-product button {
  padding: 0.7em 1.5em;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.add-product button:hover {
  background-color: #0056b3;
}
</style>