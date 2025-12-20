# eTuitionBd - Project TODO List

## 📋 Overview

- **Client Commits Required**: 20 meaningful commits
- **Server Commits Required**: 12 meaningful commits
- **Deadline**: Follow requirements from B12-A11_category-11.md
- **Refactoring Proposal**: See 

---

## 🔐 Authentication System

### Register Features

- [ ] #TODO: Register form with fields: Name, Email, Password, Role (Student/Tutor), Phone
- [ ] #TODO: Role selection dropdown (Student/Tutor)
- [ ] #TODO: Firebase authentication integration
- [ ] #TODO: Save user profile to MongoDB
- [ ] #TODO: Form validation with zod

### Login Features

- [ ] #TODO: Email & password login form
- [ ] #TODO: Google login integration (Default role: "Student")
- [ ] #TODO: JWT token generation on server
- [ ] #TODO: Role-based routing after login

---

## 🖥️ Layout & Navigation

### Navbar Requirements

- [ ] #TODO: Display Logo & Website Name
- [ ] #TODO: Navigation links: Home, Tuitions, Tutors, About, Contact
- [ ] #TODO: Auth-based navigation (Login/Register if logged out)
- [ ] #TODO: Dashboard + Profile dropdown if logged in
- [ ] #TODO: Sticky navbar
- [ ] #TODO: Mobile responsive (hamburger menu)

### Footer Requirements

- [ ] #TODO: About platform section
- [ ] #TODO: Quick links section
- [ ] #TODO: Contact information
- [ ] #TODO: Social media icons (X logo, not Twitter bird)
- [ ] #TODO: Copyright section

### Main Layout

- [ ] #TODO: Full-width responsive layout
- [ ] #TODO: Consistent color theme
- [ ] #TODO: Dashboard layout separate from main layout

---

## 🏠 Home Page

### Required Sections

- [ ] #TODO: Hero section with CTA buttons
- [ ] #TODO: Latest Tuition Posts (dynamic from backend)
- [ ] #TODO: Latest Tutors (dynamic from backend)
- [ ] #TODO: Framer Motion animations (minimum 2)

### Extra Sections

- [ ] #TODO: How the Platform Works (3 steps visual grid)
- [ ] #TODO: Why Choose Us (features section)

---

## 📄 Public Pages

### Tuitions Listing Page

- [ ] #TODO: Display all approved tuitions
- [ ] #TODO: Search by subject/location
- [ ] #TODO: Sort by budget/date
- [ ] #TODO: Filter by class, subject, location
- [ ] #TODO: Pagination implementation

### Tuition Details Page

- [ ] #TODO: Show complete tuition information
- [ ] #TODO: Apply button for tutors (with modal form)
- [ ] #TODO: Application form: Name, Email (read-only), Qualifications, Experience, Expected Salary

### Tutors Listing Page

- [ ] #TODO: Display all verified tutors
- [ ] #TODO: Search functionality
- [ ] #TODO: Filter options

### Tutor Profile Page

- [ ] #TODO: Display tutor information
- [ ] #TODO: Qualifications and experience
- [ ] #TODO: Rating & reviews (Optional)

### Contact Page

- [ ] #TODO: Contact form
- [ ] #TODO: Contact information display
- [ ] #TODO: Map integration (Optional)

### About Page

- [ ] #TODO: Platform information
- [ ] #TODO: Mission/Vision

---

## 👨‍🎓 Student Dashboard

### My Tuitions Page

- [ ] #TODO: View approved tuitions list
- [ ] #TODO: Edit tuition functionality
- [ ] #TODO: Delete tuition with confirmation modal
- [ ] #TODO: Status display (Pending/Approved/Rejected)

### Post New Tuition Page

- [ ] #TODO: Tuition post form (subject, class, location, budget, schedule)
- [ ] #TODO: Form validation
- [ ] #TODO: Submit with status: Pending

### Applied Tutors Page

- [ ] #TODO: View tutor applications for each tuition
- [ ] #TODO: Display: Tutor name, Profile picture, Qualifications, Experience, Expected salary
- [ ] #TODO: Accept button (redirects to payment)
- [ ] #TODO: Reject button (updates status to Rejected)

### Payments Page

- [ ] #TODO: View payment history
- [ ] #TODO: Transaction details

### Profile Settings Page

- [ ] #TODO: Update name, photoUrl
- [ ] #TODO: Display email (read-only)

---

## 👨‍🏫 Tutor Dashboard

### My Applications Page

- [ ] #TODO: Track application status (Pending/Approved/Rejected)
- [ ] #TODO: Update application (until approved)
- [ ] #TODO: Delete application (until approved)

### Ongoing Tuitions Page

- [ ] #TODO: Display all approved tuitions
- [ ] #TODO: Student contact information

### Revenue History Page

- [ ] #TODO: Total earnings display
- [ ] #TODO: Transaction history

---

## 👨‍💼 Admin Dashboard

### User Management Page

- [ ] #TODO: View all users (name, email, image, status, role)
- [ ] #TODO: Update user information
- [ ] #TODO: Change user roles (Student/Tutor/Admin)
- [ ] #TODO: Delete user accounts

### Tuition Management Page

- [ ] #TODO: View all tuition posts
- [ ] #TODO: Approve button (change status to Approved)
- [ ] #TODO: Reject button (change status to Rejected)
- [ ] #TODO: Review tuition details

### Reports & Analytics Page

- [ ] #TODO: Total platform earnings chart
- [ ] #TODO: Transaction history table
- [ ] #TODO: Charts and graphs for analytics

---

## 💳 Payment System

### Stripe Integration

- [ ] #TODO: Checkout page implementation
- [ ] #TODO: Stripe payment processing
- [ ] #TODO: Payment success handling
- [ ] #TODO: Update application status after payment
- [ ] #TODO: Save transaction to database

---

## 🎨 UI/UX Requirements

### Design Consistency

- [ ] #TODO: Unique design (not similar to module samples)
- [ ] #TODO: Consistent heading styles
- [ ] #TODO: Equal image sizes
- [ ] #TODO: Same button style across sections
- [ ] #TODO: Clean spacing & alignment

### Responsive Design

- [ ] #TODO: Mobile responsive (all pages)
- [ ] #TODO: Tablet responsive
- [ ] #TODO: Desktop responsive
- [ ] #TODO: Dashboard responsive

### Loading & Error States

- [ ] #TODO: Full-screen loading spinner
- [ ] #TODO: 404 Error page with back to home button
- [ ] #TODO: Friendly error UI

---

## 🔒 Security & Protected Routes

### Route Protection

- [ ] #TODO: Protected routes for dashboard
- [ ] #TODO: Role-based route access
- [ ] #TODO: Redirect to login if not authenticated
- [ ] #TODO: No redirect after reload on private routes

### JWT Implementation

- [ ] #TODO: JWT token verification
- [ ] #TODO: Role verification in token
- [ ] #TODO: Token expiration handling

---

## 🧩 Challenge Requirements (Max 4)

- [ ] #TODO: Search & Sort (tuitions by subject/location, sort by budget/date)
- [ ] #TODO: Pagination (Tuition listing page)
- [ ] #TODO: JWT Token Verification (Role, Access level, Expiration)
- [ ] #TODO: Advanced Filter (class, subject, location)

---

## ⭐ Optional Requirements (2-5)

- [ ] #TODO: Tutor rating & review system
- [ ] #TODO: In-app messaging
- [ ] #TODO: Student-tutor class calendar sync
- [ ] #TODO: Notifications system
- [ ] #TODO: Bookmarking tutors or tuition posts

---

## 📤 Deployment Requirements

- [ ] #TODO: Firebase authorized domain updated
- [ ] #TODO: No CORS issues
- [ ] #TODO: No 404 errors
- [ ] #TODO: No 504 errors
- [ ] #TODO: Environment variables secured (.env)

---

## 📝 README Requirements

- [ ] #TODO: Project name
- [ ] #TODO: Purpose description
- [ ] #TODO: Features list
- [ ] #TODO: Live URL
- [ ] #TODO: Packages used list

---

## 📊 Commit Tracking

### Client Commits (Target: 20)

1. [ ] Initial setup
2. [ ] Auth system
3. [ ] Layout components
4. [ ] Home page
5. [ ] Tuitions page
6. [ ] Tutors page
7. [ ] Contact page
8. [ ] About page
9. [ ] Login page
10. [ ] Register page
11. [ ] Student Dashboard - My Tuitions
12. [ ] Student Dashboard - Post Tuition
13. [ ] Student Dashboard - Applied Tutors
14. [ ] Student Dashboard - Payments
15. [ ] Tutor Dashboard - Applications
16. [ ] Tutor Dashboard - Ongoing
17. [ ] Tutor Dashboard - Revenue
18. [ ] Admin Dashboard - Users
19. [ ] Admin Dashboard - Tuitions
20. [ ] Admin Dashboard - Reports

### Server Commits (Target: 12)

1. [ ] Initial setup
2. [ ] User routes
3. [ ] Auth middleware
4. [ ] Tuition routes
5. [ ] Application routes
6. [ ] Payment routes
7. [ ] Admin routes
8. [ ] JWT implementation
9. [ ] Error handling
10. [ ] Validation middleware
11. [ ] Analytics endpoints
12. [ ] Final cleanup
