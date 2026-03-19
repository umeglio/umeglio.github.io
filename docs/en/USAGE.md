# Usage Guide

## Accessing the Website

### Online

The website is published and accessible at:
**https://umeglio.github.io**

### Locally

For modifications and local development, see the [Installation Guide](INSTALLATION.md).

## Modifying Content

### Profile Editing

The main content is located in the files:
- `index.html` - Italian version
- `index_en.html` - English version

### Main Sections

#### 1. Header and Introduction
Modify the welcome section in the `<header>` tag to update your personal introduction.

#### 2. "About Me" Section
Update the biography in the `#about` section of both HTML files.

#### 3. Technical Skills
Skills are displayed with progress bars. To add a new skill:
1. Find the `#skills` section
2. Add a new `<div class="skill-item">`
3. Set the skill name and value

Example:
```html
<div class="skill-item">
    <span class="skill-name">New Skill</span>
    <div class="skill-bar">
        <div class="skill-level" style="width: 85%;">85%</div>
    </div>
</div>
```

#### 4. Professional Experience
The experience timeline is in the `#experience` section. Add new entries in this format:
```html
<div class="timeline-item">
    <div class="timeline-date">Year - Year</div>
    <div class="timeline-content">
        <h3>Position</h3>
        <p>Experience description</p>
    </div>
</div>
```

#### 5. Projects
Projects are displayed in the `#projects` section. To add a new project:
```html
<div class="project-card">
    <h3>Project Name</h3>
    <p>Project description</p>
    <a href="project-link" class="project-link">View Project</a>
</div>
```

#### 6. Contact Information
Modify the `#contact` section to update your contact details.

## Changing the Profile Image

1. Replace the `avatar.png` file with your new image
2. Make sure the filename is `avatar.png`
3. The image must be in the main project directory

## Publishing Changes

Changes are automatically published when you push to GitHub:

```bash
git add .
git commit -m "Description of changes"
git push origin main
```

The website will be updated within a few minutes.

## File Structure

### HTML Files
- **index.html**: Complete Italian version with inline CSS and JavaScript
- **index_en.html**: English version with the same structure

### Utility Files
- **avatar.png**: Profile image
- **decibel.js/**: Utility library for animations and interactions

### Configuration
- **googlea91d977fe5a5a8e8.html**: Domain verification for Google Search Console

## Bilingual Versions

The website supports both languages:
- **index.html**: Italian version (IT)
- **index_en.html**: English version (EN)

To maintain consistency, make sure to update both versions when you modify content.

## Custom Styling

CSS is included in the HTML files. To modify styling:
1. Find the `<style>` section in the HTML file
2. Modify the desired CSS properties
3. Save and reload the browser to see changes

## Previewing Changes

1. Save changes in the HTML file
2. Open the file in your browser or reload it (Ctrl+F5)
3. Test changes on different resolutions (desktop, tablet, mobile)

## Supporting Bilingual Versions

If you want to add a new section:
1. Add the content in Italian to `index.html`
2. Add the corresponding content in English to `index_en.html`
3. Make sure the HTML structure is identical
4. Use the same CSS classes for styling

## Next Steps

- See the [Installation Guide](INSTALLATION.md) for configuration issues
- Read the [Contributor Guide](CONTRIBUTING.md) if you want to make improvements
- Check the [FAQ](FAQ.md) for common questions
