## **B12-A11\_category-11**

# **Requirements Video Link \-** [A11- Video - B12](https://drive.google.com/drive/folders/1gG2ZUo9Z-cjcz6WJz5eMJPpWhtAe19Mm?usp=sharing)

🚩We Will Notify Requirement update here if we made any 

---

# eTuitionBd

Job Task

Dear Candidates,

We are pleased to inform you that you have successfully passed the first round of the selection process\!\! 🎉

Your application and skills have impressed us, and we are excited to move forward with you in the next stages.  
 This project is designed to assess your skills, creativity, and problem-solving abilities. It will help us understand how you approach challenges and your ability to deliver high-quality solutions.

---

# **Project Overview & Discussion**

### **What is the Project?**

The Tuition Management System is a complete platform where **students**, **tutors**, and **admins** can manage tuition activities including tuition posting, tutor applications, financial tracking, payments, and student–tutor communication.

### **Why Should We Develop This Project?**

* To solve the real problem of finding qualified tutors and verified tuition.

* To reduce friction between students and tutors by providing automated workflows.

* To enable digital class tracking, transparent payment, and structured communication.

* To assist admins in monitoring and regulating all platform activities.

### 

### 

### 

### **How the System Works (Workflow)**

1. **User (Student)** registers and posts a tuition requirement (class, budget, location, subject, schedule, etc.).

2. **Tutors** browse available tuition posts and apply to suitable tuitions.

3. **Admin** reviews applications, verifies tutors, and approves or rejects tuition posts.

4. Admin monitors the system, handles disputes, manages data, and oversees platform performance.

# **✅ Ensure the Following to Get 100% Marks**

(Exactly following the template)

* At least **20 meaningful commits (client)** & **12 meaningful commits (server)**.

* README must contain project name, purpose, features, live URL, packages used.

* Firebase keys must be stored in environment variables.

* MongoDB credentials must be secured using `.env`.

* UI must be polished, aligned, and recruiter-friendly.

* Any copied concept from assignments/modules \= **0 marks**.

* Deployment must not show any CORS / 404 / 504 issues.

* Private routes must not redirect after reload.

* Firebase authorized domain must be updated.

---

# **🖥️ Layout & Page Structure Requirements**

### **Navbar Requirements**

* Display Logo & Website Name

* Navigation links: Home, Tuitions, Tutors, About, Contact

* Auth-based navigation:

  * If logged out: Login / Register

  * If logged in: Dashboard \+ Profile dropdown

* Sticky navbar with DaisyUI

* Responsive on mobile/tablet/desktop

### **Footer Requirements**

* About platform

* Quick links

* Contact information

* Social media icons (use new X logo, not old Twitter bird)

* Copyright section

### **Main Layout**

* Full-width responsive layout

* Consistent color theme

* Common layout for all public pages

* Dashboard layout fully separated

### 

### **Possible Pages**

* Home

* Tuitions Listing

* Tuition Details

* Tutor Listing

* Tutor Profile

* Login

* Register

* Contact

* Dashboard (Admin, Tutor, Student)

* Payment History

* Profile Settings

* Error Page

---

# 

# 

# 

# 

# 

# **🔐 Authentication System Requirements**

### **Register Features**

* Register as Student or Tutor

* Form fields:

  * Name

  * Email

  * Password

  * Role selection (Student/Tutor)

  * Phone

* Data stored in MongoDB

* Firebase authentication

* Save user profile to database

### **Login / Social Login**

* Email & password login

* Google login (must be implemented) (Default role “Student”)

* JWT token generation

* Role-based routing:

  * Students → Student Dashboard

  * Tutors → Tutor Dashboard

  * Admin → Admin Dashboard

# 

# **🏠 Home Page Requirements**

### **Must Include**

* Hero section  
* Dynamic section:  
   **Latest Tuition Posts** (Auto fetch from backend)

* Dynamic section:  
   **Latest Tutors** (Auto fetch from backend)  
* Animation with **Framer Motion** (minimum 2 animations)

### **Two Extra Sections**

1. **How the Platform Works (3 steps visual grid)**

2. **Why Choose Us (features section)**

# **📊 Dashboard Layout (Admin, Tutor & User)**

# **1\. Student Dashboard Requirements**

### **Dashboard Pages**

* ### My Tuitions

  (Users can view their approved tuitions)

* ### Post New Tuition

  (Users can create and publish new tuition posts to find tutors)

* ### Applied Tutors

  (Users can view tutor applications received for their posted tuitions)

* ### Payments

  (Users can view their payment history)

* ### Profile Settings

  (Users can update their personal information,like name, and photoUrl)

## **Student Functionalities**

## **1\. Create / Update / Delete Tuition Posts**

### **📝 Create Tuition Post**  Allows the student to publish a new tuition request.

* The student fills out a form (subject, class, location, budget, etc.).

* Click **Submit/Post Tuition**.

* The system saves it in the database with status: **Pending** (for admin approval).

---

### **✏️ Update Tuition Post**  Allows the student to edit existing tuition information.

* Students click **Edit** on their tuition post.

* Updates fields (subject, class, location, budget, etc.).(Must show the default save values )

---

### **❌ Delete Tuition Post**  Allows the student to remove a tuition post.

* Student clicks **Delete**.

* A confirmation popup appears.

* On confirmation, the post is removed from database

## **2\. Approve / Reject Tutor Applications**

### **🧑‍🏫 View Tutor Applications**  Shows a list of tutors who applied to the student’s tuition.

**Visible information:**

* Tutor name

* Profile picture

* Qualifications

* Experience

* Expected salary

* Accept and Reject Button

---

### **Approve Tutor Application** Allows the student to accept a tutor.

* When the student clicks **Accept Tutor**, they are redirected to the **checkout/payment page** to pay the tutor’s expected salary.

**Flow:**

1. Student clicks **Approve / Accept Tutor**

2. System redirects to the **checkout page (Stripe payment)**

3. Student completes the payment successfully

4. After successful payment:

   * The tutor’s **application status is updated to “Approved”**

   * Other pending applications are automatically closed or rejected (**Optional**)

**Important Rule:**  
 👉 The tutor is considered **Approved only after the payment is successfully completed**.

### **❌ Reject Tutor Application**  Allows the student to decline an application.

**How it works:**

* Student clicks **Reject**.

* Status changes to **Rejected**.

# **2\. Tutor Dashboard / Tutor functionalities Requirements**

### **Dashboard Pages**

* My Applications (Track the status of your tuition applications. Tutors can update or delete their requests until they are approved.)

* Tutor Ongoing Tuitions (All tuitions that have been approved by the student)  
* Revenue History (See your total earnings and transactions)

### **Tutor Functionalities in Tuition Post Details page**

When a tutor visits a specific **tuition post details page from all tuition listing page**, they will see an **“Apply”** button.

**Application Flow:**

1. The tutor clicks the **Apply** button.

2. A **modal form** opens that contains the following fields:

   * **Name** (read-only)

   * **Email** (read-only)

   * **Qualifications**

   * **Experience**

   * **Expected Salary**

3. The tutor fills in the required fields and clicks the **Submit** button.

4. After submission:

   * The system creates a new **application request** linked to that tuition post.

   * The application is saved in the database with the status **Pending**.

   * The student can view the application from their dashboard and **approve or reject** it.

# **3\. Admin Dashboard Requirements**

### **Dashboard Pages**

***User Management Page :*** 

*(Admin can update user information, delete user accounts, or change user roles such as Student, Tutor, or Admin.)*

The **User Management** module allows administrators to manage all user accounts registered on the platform.  
 Admins can:

* **View user profiles** name, email image account status , role  etc.

* **Update user information**, such as names, contact details, profile images, verification status, or any incorrect data provided by the user.

* **Modify user roles** by assigning or changing access levels — for example, switching a user between *Student*, *Tutor*, or *Admin* roles depending on platform requirements.

* **Delete accounts** in case of violations, inactivity, or duplicate registrations.

## 

## **Tuition Management Page :**

*(Admin can review and approve or reject tuition posts before they become visible to tutors on the platform.)*

The **Tuition Management** section enables admins to moderate and control all tuition requests submitted by students or parents.

Admins can:

* **Review newly submitted tuition posts** for accuracy, completeness, and authenticity. Every post has an Approved or rejected button to change the status. 

* **Approve posts** that meet platform standards, making them visible to tutors who can then apply or accept the job. When clicks the approved button then change the status to Approved  
* **Reject posts** that contain incorrect information, incomplete details, or violate platform policies.When clicks the approved button then change the status to Rejected

This ensures that only legitimate, high-quality tuition jobs are published, helping tutors find suitable opportunities and maintaining trust across the platform.

## **3\. Reports & Analytics**

*(Admin can view total platform earnings, transaction history, and financial reports. All the successful transaction history.)*

The **Reports & Analytics** feature gives administrators a centralized dashboard for monitoring financial and operational performance.

Admins can:

* **View total platform earnings**  
* **Analyze transaction history**, showing all successful payments made by users — such as tuition posting fees. 

# **🛠️ Additional Requirements**

### **Loading Page Requirements**

* Full-screen spinner

* Must be shown during data fetch

### 

### **Error Page Requirements**

* 404 design

* Button to go back to home

* Friendly UI

### **Other Requirements**

* Protected routes

* JWT role verification (Challenge Part )

* Mobile responsive

# **🎨 UI Design Requirements**

* Unique design (not similar to module samples)

* Consistent heading style

* Equal image sizes

* Same button style across sections

* Clean spacing & alignment

* Dashboard must be responsive

* Charts & graphs for Admin Dashboard

* Profile sidebar section included

**🧩 Challenge Requirements**

*(Maximum 4 challenges)*

### **1\. Search & Sort Features**

Examples:

* Search tuitions by subject/location (Apply in the all tuitions page)  
* Sort by budget/date (Apply in the all tuitions page)

### **2\. Pagination (1 page only)**

* Tuition listing page must implement pagination. 

### **3\. Token Verification**

* JWT must verify:

  * Role

  * Access level

  * Token expiration

### **4\. Advanced Filter**

* Filter tuitions by class, subject, location (Apply in the all tuitions page)

# **⭐ Optional Requirements (2–5)**

* Tutor rating & review system

* In-app messaging

* Student–tutor class calendar sync

* Notifications system

* Bookmarking tutors or tuition posts

# 

# **📤 What to Submit**

* Admin Email

* Admin Password

* Live Site Link

* GitHub Repository (Client)

* GitHub Repository (Server)

