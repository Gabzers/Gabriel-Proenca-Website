Here is the `README.md` file for your GitHub portfolio project:

```markdown
# Gabriel Proença's Personal Portfolio

Welcome to the repository for Gabriel Proença's personal portfolio website. This project showcases my work, skills, and experiences as a Computer Engineering student and aspiring software developer.

## Table of Contents

- [About](#about)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## About

This personal portfolio website was created to showcase my projects, skills, and experiences. It includes sections for my works, blog posts, and information about me. The website is built using HTML, CSS, JavaScript, and Node.js for the backend.

## Features

- **Home Page**: Introduction and recent posts.
- **Works Page**: List of projects with detailed descriptions.
- **Single Work Page**: Detailed view of a single project.
- **Blog Page**: List of blog posts with the ability to share and read more.
- **About Page**: Information about me, my skills, and contact details.
- **GitHub Integration**: Fetches and displays repositories from GitHub.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **API**: GitHub API
- **Other**: dotenv, node-fetch, node-cache

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```sh
   git clone https://github.com/Gabzers/Gabriel-Proenca-Website.git
   cd Gabriel-Proenca-Website
   ```

2. Install the dependencies:

   ```sh
   npm install
   ```

3. Create a `.env` file in the root directory and add your GitHub token:

   ```env
   GITHUB_TOKEN=your_github_token_here
   ```

4. Start the server:

   ```sh
   npm start
   ```

5. Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

## Usage

- **Home Page**: Provides an introduction and displays recent blog posts.
- **Works Page**: Lists all projects with links to detailed views.
- **Single Work Page**: Displays detailed information about a specific project.
- **Blog Page**: Lists blog posts with options to share and read more.
- **About Page**: Provides information about me and my contact details.

## API Endpoints

- `GET /api/github/repos`: Fetches repositories from GitHub.
- `GET /api/github/token`: Fetches the GitHub token from the environment variables.

## Project Structure

```
.env
.gitignore
package.json
package-lock.json
public/
  about.html
  assets/
    work1/
  blog.html
  css/
    style.css
  index.html
  js/
    script.js
  single-work-work1.html
  single-work.html
  works.html
server.js
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the ISC License.

## Contact

Gabriel Proença - [LinkedIn](https://www.linkedin.com/in/gabrielproenca) - [GitHub](https://github.com/Gabzers)

Feel free to reach out if you have any questions or suggestions!
```

Let me know if you need any further adjustments!
