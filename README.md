# PepeLeads - Affiliate Advantage

## Overview

PepeLeads is a modern, responsive frontend project designed to showcase affiliate marketing solutions. The website features multiple sections, including a hero section, advertise section, monetize section, brands section, and a footer. The design emphasizes clean UI/UX with animations, scroll effects, and a hand-drawn style for the brands section to highlight partnerships with trusted brands worldwide.

The project is built using HTML, CSS, and JavaScript, with a focus on responsiveness and user interaction. It includes features like navigation dots, scroll controls, a mobile menu, and smooth animations for an engaging user experience.

---

## Features

- **Responsive Design**: The website adapts seamlessly to different screen sizes, from mobile to desktop.
- **Interactive Navigation**: Navigation dots and scroll controls allow users to navigate between sections smoothly.
- **Mobile Menu**: A hamburger menu for mobile devices with smooth transitions.
- **Scroll Animations**: Elements animate into view as the user scrolls.
- **Parallax Effect**: The hero section illustration moves slightly with mouse movement for a dynamic effect.
- **Brands Section**: A hand-drawn style diagram showcasing brand partnerships, with pagination dots for multiple slides.
- **Sticky Header**: The header becomes fixed on scroll for easy navigation.
- **Custom Styling**: Uses a consistent color scheme (e.g., teal `#4ECCA3`, dark background `#101010`) and modern typography.

---

## Project Structure

```
pepeleads/
│
├── index.html          # Main HTML file containing the website structure
├── test.css            # CSS file with all styles for the website
├── pepeleads.js        # JavaScript file for interactivity and animations
├── images/             # Directory containing all images used in the project
│   ├── logo_pic-removebg-preview.png
│   ├── imagevdfvdf-removebg-preview.png
│   ├── menu.jpg
│   ├── pngtree-target-clipart-vector-png-image_6862808.png
│   ├── images__3_-removebg-preview.png
│   ├── accmgmt.png
│   ├── images (4).jpeg
│   ├── 9225503.webp
│   ├── pngtree-crazy-offer---promotion-label-png-image_9027281.png
│   ├── API_Integration_8cb6b3f49e.webp
│   ├── brand 1.png
│   └── (other images as needed)
└── README.md           # Project documentation (this file)
```

---

## Setup Instructions

### Prerequisites

- A modern web browser (e.g., Chrome, Firefox, Edge) to view the website.
- A code editor (e.g., VS Code) for making changes to the project.
- No external dependencies or build tools are required since this is a static website.

### Steps to Run the Project

1. **Clone or Download the Project**:
   - Clone the repository or download the project files to your local machine.
     ```bash
     git clone <repository-url>
     ```
   - Alternatively, download the ZIP file and extract it.

2. **Ensure All Files Are Present**:
   - Verify that the `index.html`, `test.css`, `pepeleads.js`, and `images/` directory with all required images are in the project folder.

3. **Open the Project**:
   - Open `index.html` in a web browser to view the website.
     - You can double-click the `index.html` file, or
     - Use a local development server (e.g., VS Code's Live Server extension) for a better development experience.

4. **Make Changes (Optional)**:
   - Edit `index.html` to modify the structure.
   - Update `test.css` to change styles.
   - Modify `pepeleads.js` to adjust interactivity or add new features.

---

## File Details

### `index.html`
- Contains the HTML structure of the website.
- Divided into sections: Hero, Advertise, Monetize, Brands, and Footer.
- Links to `test.css` for styling and `pepeleads.js` for interactivity.
- Uses images from the `images/` directory for logos, illustrations, and icons.

### `test.css`
- Provides all styling for the website.
- Includes responsive design with media queries for mobile devices.
- Features custom styles for the hand-drawn brands diagram, scroll controls, and animations.
- Uses a consistent color scheme:
  - Dark background: `#101010`
  - Highlight color: `#4ECCA3` (teal)
  - Accent color: `#FF6B6B` (red for icons like the checkmark)

### `pepeleads.js`
- Handles interactivity and animations.
- Key features include:
  - Navigation dot functionality to highlight the current section.
  - Scroll controls for smooth scrolling between sections.
  - Mobile menu toggle with a smooth slide-in effect.
  - Button hover effects and click navigation.
  - Scroll animations for elements like feature cards and the brands diagram.
  - Parallax effect on the hero section illustration.
  - Sticky header on scroll.
  - Pagination for the brands section (simulated with text changes).

### `images/`
- Contains all images used in the project.
- Ensure all image paths in `index.html` match the actual file names in this directory.

---

## Dependencies

This project is a static website and does not require any external libraries or frameworks. It uses:

- **HTML5**: For structure.
- **CSS3**: For styling, including animations and media queries.
- **Vanilla JavaScript**: For interactivity and DOM manipulation.

No package manager (e.g., npm) or build tools (e.g., Webpack) are required.

---

## Customization

### Changing Colors
- To change the primary highlight color, update the `.highlight` class in `test.css`:
  ```css
  .highlight {
      color: #4ECCA3; /* Change to your desired color */
  }
  ```
- Update other color references (e.g., for active dots, buttons) as needed.

### Adding New Sections
- Add a new `<div class="section">` in `index.html` with your content.
- Style the new section in `test.css`.
- Update the navigation dots in `pepeleads.js` (in the `initDotNavigation` function) to include the new section.

### Modifying the Brands Diagram
- The brands diagram is currently an image (`brand 1.png`). To update it:
  - Replace `images/brand 1.png` with a new image.
  - Alternatively, modify the `.brand-diagram` class in `test.css` to use a different layout or style.

### Adding More Interactivity
- Edit `pepeleads.js` to add new features, such as form handling, additional animations, or API integrations.

---

## Known Issues

- **Image Paths**: If any image is missing or the path is incorrect, the website may display broken image icons. Ensure all images are in the `images/` directory and paths in `index.html` are correct.
- **Mobile Menu**: The mobile menu is dynamically created via JavaScript. If JavaScript is disabled, the menu will not function.
- **Brands Pagination**: The pagination in the brands section currently simulates content changes by updating the heading text. To add real content slides, you would need to modify the HTML and JavaScript to handle multiple diagrams or content blocks.

---

## Future Improvements

- **Dynamic Content**: Integrate a backend or CMS to dynamically load content for sections like "Brands" or "Advertise."
- **Accessibility**: Add ARIA labels and improve keyboard navigation for better accessibility.
- **Performance**: Optimize images and add lazy loading for faster page load times.
- **Interactivity**: Add more interactive elements, such as a contact form with real backend integration.

---

## Contributing

1. Fork the repository.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to your fork:
   ```bash
   git push origin feature-name
   ```
5. Create a pull request with a description of your changes.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details (if applicable).

---

## Contact

For questions or feedback, please reach out to the project maintainers:



---
