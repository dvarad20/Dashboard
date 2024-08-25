# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

on.

# Dashboard with Dynamic Widgets and Pie Charts

This project is a React-based dashboard application that allows users to dynamically add and remove widgets within categories.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Features](#features)
- [Technologies Used](#technologies-used)

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/dvarad20/Dashboard
    ```

2. Navigate to the project directory:
    ```bash
    cd your Dynamic-Dashboard
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

4. Start the development server:
    ```bash
    npm start
    ```

5. Open your browser and go to `http://localhost:3000` to see the application.

## Usage

- **Add a Widget**: To add a widget to a category, fill out the form and click the "Add Widget" button.
- **Remove a Widget**: Click the cross icon on a widget to remove it from the category.
- **View Pie Charts**: The dashboard includes two pie charts:
  - The first pie chart shows the distribution of widgets across different categories.
  - The second pie chart represents a "Cloud Account Risk Assessment" with dummy data.

## Project Structure

```plaintext
├── public
│   ├── index.html
│   └── ...
├── src
│   ├── components
│   │   ├── WidgetForm.js
│   │   ├── PieChartComponent.js
│   │   ├── WidgetGraphContainer.js
│   │   └── ...
│   ├── redux
│   │   ├── widgetsSlice.js
│   │   └── store.js
│   ├── index.js
│   └── ...
├── package.json
└── README.md

