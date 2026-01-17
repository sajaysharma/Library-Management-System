# E-Book-Content-Management-System
This is a full stack web application that control book management.
# ChapterZero 📚
### MERN Stack Digital Library & Marketplace

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Stack](https://img.shields.io/badge/MERN-Stack-green)

**ChapterZero** is a full-stack web application that serves as a digital library and marketplace. It features a dual-panel architecture (Admin vs. User) allowing administrators to manage content and users to access free or premium e-books.

---

## 🚀 Live Demo
**[Insert Link to Deployed Project Here]** *(e.g., https://chapterzero.vercel.app)*

## 📸 Screenshots
*(Add screenshots of your project here. Example: 1. The Home Page, 2. The Admin Dashboard)*

---

## ✨ Features

### 👤 User Panel
* **Browse Library:** View a collection of available books with covers, titles, and authors.
* **Conditional Access:** Instantly read "Free" books directly in the browser.
* **Secure Content:** "Paid" books remain locked until purchased (simulated or integrated).
* **Responsive Design:** Optimized for mobile and desktop reading.

### 🛡️ Admin Panel
* **Content Management:** Upload new books (PDFs) and cover images directly to Cloudinary.
* **Product Control:** Set books as "Free" or set a specific price tag.
* **Dashboard:** View all listed books and manage inventory.

### ⚙️ Technical Highlights
* **Authentication:** Secure JWT (JSON Web Token) authentication for login/signup.
* **Role-Based Access Control (RBAC):** Middleware to protect Admin routes from unauthorized users.
* **File Handling:** Integrated **Cloudinary** for scalable image and PDF storage.

---

## 🛠️ Tech Stack

**Frontend:**
* React.js
* React Router (Navigation)
* Axios (API requests)
* Tailwind CSS (Styling)

**Backend:**
* Node.js & Express.js
* MongoDB & Mongoose (Database)
* Multer (File upload handling)
* Cloudinary SDK (Cloud storage)
* JWT & Bcrypt (Security)

---

## ⚙️ Installation & Setup

Follow these steps to run the project locally.

### 1. Clone the repository
```bash
git clone [https://github.com/your-username/chapterzero.git](https://github.com/your-username/chapterzero.git)
cd chapterzero
