# CUI Freelancing Platform

The **CUI Freelancing Platform** is a dynamic web application designed to bridge the gap between students and employers, facilitating freelancing opportunities that provide students with invaluable real-world experience while offering employers access to talented, motivated individuals ready to tackle projects.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features
- **User Authentication**: Secure, role-based login and registration for both students and employers, utilizing JWT for enhanced security.
- **Profile Management**: Comprehensive profiles for students showcasing skills, experience, and portfolios, and for employers detailing their organization and project requirements.
- **Job Listings**: Employers can post detailed job listings, and students can effortlessly browse and apply for opportunities that match their skills.
- **Bid System**: An intuitive bidding mechanism allowing students to propose their rates and timelines for projects, empowering employers to select the best candidates based on criteria that matter most.
- **In-App Messaging**: A robust messaging system enabling real-time communication between students and employers to discuss project details and expectations.
- **Review System**: Post-project reviews allowing employers to provide feedback on student performance, fostering a culture of accountability and continuous improvement.
- **Dashboard**: Personalized dashboards for students and employers to manage applications, job listings, and messages efficiently, enhancing user experience.

## Installation

### Prerequisites
- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/)

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
   Create a `.env` file in the root directory and add the following:
   ```sh
   echo "MONGO_URI=your_mongodb_uri" >> .env
   echo "JWT_SECRET=your_jwt_secret" >> .env
   ```

4. **Run the application**:
   ```sh
   npm start
   ```

## Usage
- **Student Dashboard**: Access at `/student-dashboard` to manage profiles, browse job listings, bid on projects, and communicate with employers.
- **Employer Dashboard**: Access at `/employer-dashboard` to post jobs, review applications, and communicate with students.

## Contributing
We welcome contributions! To contribute, follow these steps:
1. Fork the repository.
2. Create a new branch: 
   ```sh
   git checkout -b my-feature-branch
   ```
3. Make your changes and commit:
   ```sh
   git commit -m 'Add new feature'
   ```
4. Push to the branch: 
   ```sh
   git push origin my-feature-branch
   ```
5. Submit a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Contact
For questions or support, please contact:

**Muhammad Waqar**  
Email: [itswaqarmalik11@gmail.com](mailto:itswaqarmalik11@gmail.com)  
Feel free to reach out for any inquiries or assistance.

This README was generated with ❤️ by Muhammad Waqar
