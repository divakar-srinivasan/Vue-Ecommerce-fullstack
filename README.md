# E-Shop - E-commerce Platform

E-Shop is a feature-rich e-commerce platform built with the MEVN stack, incorporating Redux for state management and styled with Tailwind CSS. This platform allows users to browse products, add them to their cart, and place orders seamlessly. The project is a collaborative effort between Ganesh Kanna and Divakar.

## Features

1. **User Authentication**
   - Secure user login and registration.
   - Role-based access for customers and admins.

2. **Product Management**
   - Display of products with images, descriptions, and pricing.
   - Admin panel for adding, updating, and deleting products.

3. **Cart and Checkout**
   - Add products to the cart and manage quantities.
   - Simple checkout process with order summary.

4. **Redux for State Management**
   - Efficient state handling for cart and user authentication.

5. **Responsive Design**
   - Fully responsive layout powered by Tailwind CSS.

## Technologies Used

- **Frontend**: Vue.js, Redux, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **State Management**: Redux

## Installation Guide

1. **Clone the Repository**
   ```bash
   git clone https://github.com/divakar-srinivasan/Vue-Ecommerce-fullstack.git
   cd Vue-Ecommerce-fullstack
   ```

2. **Install Dependencies**
   - Install server-side dependencies:
     ```bash
     cd backend

     cd BackendServer
     npm install
     cd ..
     cd my-auth-app
     npm install
     ```
   - Install client-side dependencies:
     ```bash
     cd frontend
     npm install
     ```

3. **Set Up Environment Variables**
   Create a `.env` file in the `server` directory with the following:
   ```env
   PORT=4200
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. **Run the Application**
   - Start the backend server:
     ```bash
     cd backend

     cd BackendServer
     node server
     cd my-auth-app
     node index
     ```
   - Start the frontend:
     ```bash
     cd frontend
     npm run serve
     ```

   The application will be accessible at `http://localhost:3000`.

## Screenshots
![Screenshot 2025-01-28 203547](https://github.com/user-attachments/assets/44eb39f5-96f5-402d-b75c-80e8cad53ac9)
![Screenshot 2025-01-28 203556](https://github.com/user-attachments/assets/b0a00dfb-c315-4daa-9b9e-93e209ad1d31)



1. **Home Page**
  ![Screenshot 2025-01-28 203818](https://github.com/user-attachments/assets/7e0d2565-107b-4f8d-a651-135982ee33af)

2. **Product Page**
   ![Screenshot 2025-01-28 203834](https://github.com/user-attachments/assets/08fc50d0-9fe2-460a-8363-51dbf1c60054)


3. **Cart Page**
  ![Screenshot 2025-01-28 203850](https://github.com/user-attachments/assets/009d87c6-7d3e-438c-90de-9eaf4272a21e)
![Screenshot 2025-01-28 203944](https://github.com/user-attachments/assets/0b9be875-008e-43f0-b98f-81a714af392d)



5. **Checkout Page**
   ![Screenshot 2025-01-28 203904](https://github.com/user-attachments/assets/be2b1602-d697-4233-852b-a616adf2f8b5)
   ![Screenshot 2025-01-28 203924](https://github.com/user-attachments/assets/32d4989b-cd1f-4e1e-bcf5-f7fcc2178eba)



## Custom Tailwind CSS Highlights
- Clean, modern design with a focus on user experience.
- Responsive grid-based layout for product displays.
- Consistent color scheme and typography.

## Future Enhancements
- **Payment Gateway**: Integration with online payment providers.
- **Order History**: Allow users to view past orders.
- **Wishlist**: Add functionality to save favorite products.
- **Product Search and Filters**: Enhance product discovery.

## Contribution Guidelines

1. Fork the repository.
2. Create a new branch for your feature/bug fix.
3. Commit your changes with a descriptive message.
4. Push your branch and create a Pull Request.

## Contact

For any queries or support, feel free to reach out:
- **Divakar**: [GitHub](https://github.com/divakar-srinivasan)

---

Made with ❤️ by DIVAKAR S.
