# KML File Viewer

## Overview

This is a **React-based KML File Viewer** that allows users to upload `.kml` files and visualize their geographical data on a map. The application provides a **map view**, a **summary of data**, and a **detailed analysis of geographical features**.

## Features

- **KML File Upload**: Upload a `.kml` file and convert it into **GeoJSON format**.
- **Interactive Map**: Display the uploaded data using **Leaflet.js**.
- **Summary Analysis**: Count and categorize different geometrical elements.
- **Detailed Analysis**: Calculate and display the length of **LineString** and **MultiLineString** features.
- **Modern UI**: Built with **React.js**, **Tailwind CSS**, and **Material UI** for a sleek design.

---

## Installation & Setup

### 1. Clone the Repository

```sh
https://github.com/rishi-logic-design/kml-file-viewer
cd kml-file-viewer
```

### 2. Install Dependencies

```sh
npm install
```

### 3. Start the Development Server

```sh
npm run dev
```

The application will be available at [**http://localhost:5173/**](http://localhost:5173/) (default Vite port).

---

## Project Structure

```
kml-file-viewer/
│── src/
│   ├── components/
│   │   ├── FileUpload.jsx   # Handles KML file upload and parsing
│   │   ├── MapView.jsx      # Displays the geographical data on a map
│   │   ├── Summary.jsx      # Provides a summary count of feature types
│   │   ├── Detailed.jsx     # Shows detailed analysis of LineStrings
│   ├── App.jsx              # Main application component
│   ├── main.jsx             # Entry point for the React app
│── public/
│── index.css                # Global styles using Tailwind CSS
│── package.json             # Dependencies and scripts
│── vite.config.js           # Vite configuration
```

---

## Component Breakdown

### 1. **FileUpload.jsx**

- Uses **Material UI** for file upload button.
- Reads and converts `.kml` files to **GeoJSON** using `@tmcw/togeojson`.
- Passes the converted GeoJSON data to the parent component.

### 2. **MapView\.jsx**

- Uses **React-Leaflet** to render an interactive map.
- Dynamically updates based on uploaded **GeoJSON** data.
- Automatically fits map bounds to the uploaded features.

### 3. **Summary.jsx**

- Counts different feature types (**Point, LineString, Polygon, etc.**).
- Displays the summary in a tabular format.

### 4. **Detailed.jsx**

- Filters and calculates the **length** of `LineString` and `MultiLineString` features using **Turf.js**.
- Displays results in a table format.

### 5. **App.jsx**

- Manages application state using **useState**.
- Handles file upload and passes data to child components.
- Renders the **MapView**, **Summary**, and **Detailed** components.

---

## Technologies Used

- **React.js**: UI framework
- **Vite**: Fast development build tool
- **Leaflet.js & React-Leaflet**: Interactive maps
- **Turf.js**: Geospatial calculations
- **@tmcw/togeojson**: KML to GeoJSON conversion
- **Material UI**: File upload button styling
- **Tailwind CSS**: Responsive and modern styling

---

## Deployment

To deploy the project on **Vercel** or **Netlify**, follow these steps:

1. Build the project:
   ```sh
   npm run build
   ```

## Contributing

Feel free to open issues or pull requests if you have suggestions or improvements!

---

## License

This project is open-source and available under the **MIT License**.

---

## Author

Developed by **[Rishi]**

---

Enjoy using the **KML File Viewer**! 🚀

