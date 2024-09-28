# CUI Freelancing Platform

The **CUI Freelancing Platform** is a comprehensive web application designed to seamlessly connect students with employers, facilitating lucrative freelancing opportunities. This platform empowers students to gain practical work experience while enabling employers to tap into a pool of skilled individuals eager to contribute to various projects.

![CUI Freelancing Platform Screenshot](https://github.com/muhmmadwaqar/CUI-Freelancing-Platform/raw/main/Screenshot%20(14).png)

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features
- **User Authentication**: Robust, role-based login and registration using JWT for secure access.
- **Profile Management**: Dynamic profiles for students and employers, highlighting skills, experience, and projects.
- **Job Listings**: Employers can effortlessly post job opportunities; students can efficiently browse and apply based on their skills.
- **Bid System**: Students can competitively bid on projects, allowing employers to select candidates that best fit their needs.
- **In-App Messaging**: Integrated real-time messaging for effective communication between students and employers.
- **Review System**: Comprehensive feedback mechanism enabling employers to evaluate student performance, fostering accountability and growth.
- **Dashboard**: Personalized, user-friendly dashboards for students and employers to track applications, job postings, and communications efficiently.

## Installation

### Prerequisites
- [Node.js](https://nodejs.org/) (v14.x or higher)
- [npm](https://www.npmjs.com/) (v6.x or higher)
- [MongoDB](https://www.mongodb.com/) (v4.x or higher)

### Steps
1. **Clone the repository**:
   ```sh
   git clone https://github.com/muhmmadwaqar/CUI-Freelancing-Platform.git
   cd CUI-Freelancing-Platform
   ```

2. **Install dependencies**:
   ```sh
   npm install
   ```

3. **Configure environment variables**:
   Create a `.env` file in the root directory and add:
   ```sh
   echo "MONGO_URI=your_mongodb_uri" >> .env
   echo "JWT_SECRET=your_jwt_secret" >> .env
   ```

4. **Run the application**:
   ```sh
   npm start
   ```

## Usage
- **Student Dashboard**: Navigate to `/student-dashboard` to manage profiles, explore job listings, bid on projects, and communicate with employers.
- **Employer Dashboard**: Access `/employer-dashboard` to post job listings, manage applications, and connect with potential candidates.

## Contributing
We welcome contributions from the community! To contribute:
1. Fork the repository.
2. Create a new branch: 
   ```sh
   git checkout -b my-feature-branch
   ```
3. Make your changes and commit them:
   ```sh
   git commit -m 'Add new feature'
   ```
4. Push your changes to the branch: 
   ```sh
   git push origin my-feature-branch
   ```
5. Submit a pull request for review.

## License
This project is licensed under the MIT License. For more details, please refer to the LICENSE file.

## Contact
For inquiries, support, or feedback, please reach out:

**Muhammad Waqar**  
Email: [itswaqarmalik11@gmail.com](mailto:itswaqarmalik11@gmail.com)  
I welcome any questions or assistance you may need regarding the platform.

This README was generated with ❤️ by Muhammad Waqar
