# Robust File Metadata Extractor

This project is a web application designed to extract and display metadata from various file types. It consists of a Node.js/Express backend and a React/Tailwind CSS frontend.

## Features

- **Backend**: Handles file uploads, metadata extraction using `exiftool-vendored`, and serves API endpoints.
- **Frontend**: Provides a user-friendly interface for uploading files, displaying extracted metadata, and previewing supported file types.

## Technologies Used

**Backend**:
- Node.js
- Express.js
- Multer (for file uploads)
- exiftool-vendored (for metadata extraction)
- dotenv (for environment variables)

**Frontend**:
- React.js
- Tailwind CSS
- Create React App (for project setup)

## Setup and Installation

To get the project up and running on your local machine, follow these steps:

### 1. Clone the repository

```bash
git clone <repository_url>
cd MetaDataExtractor
```

### 2. Backend Setup

Navigate to the `backend` directory and install the dependencies:

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` directory and add the following:

```
PORT=3001
```

### 3. Frontend Setup

Navigate to the `frontend` directory and install the dependencies:

```bash
cd frontend
npm install
```

### 4. Running the Application

From the root directory of the project, you can start both the backend and frontend concurrently using `npm` scripts:

```bash
npm start
```

Alternatively, you can start them separately:

**Start Backend (from `backend` directory):**

```bash
npm start
```

**Start Frontend (from `frontend` directory):**

```bash
npm start
```

The frontend application will typically run on `http://localhost:3000` and the backend API on `http://localhost:3001`.

## Project Structure

```
MetaDataExtractor/
├── backend/
│   ├── app.js
│   ├── package.json
│   ├── node_modules/
│   ├── .env
│   ├── .gitignore
│   ├── routes/
│   │   └── metadata.js
│   ├── middleware/
│   │   └── upload.js
│   ├── services/
│   │   └── metadataService.js
│   ├── utils/
│   │   └── fileUtils.js
│   └── uploads/ (for temporary file storage)
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── index.css
│   │   ├── components/
│   │   │   ├── FileUpload.js
│   │   │   ├── MetadataDisplay.js
│   │   │   ├── Message.js
│   │   │   ├── LoadingSpinner.js
│   │   │   └── Preview.js
│   │   └── utils/
│   │       ├── api.js
│   │       ├── constants.js
│   │       └── helpers.js
│   ├── package.json
│   ├── tailwind.config.js
│   └── postcss.config.js
├── package.json (root package.json for concurrent start)
└── README.md
```

## Usage

1. Open your web browser and navigate to `http://localhost:3000`.
2. Use the file upload interface to select a file.
3. The application will display the extracted metadata and a preview (if supported).

## Contributing

Feel free to fork the repository and contribute. Please open issues for any bugs or feature requests.