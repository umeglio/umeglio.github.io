# Contributing Guide

Thank you for your interest in contributing to this project! This guide explains how to participate in development.

## How to Contribute

### Reporting Bugs

If you find a bug, please:

1. Check if the bug has already been reported in [Issues](https://github.com/umeglio/umeglio.github.io/issues)
2. If not found, open a new issue with:
   - **Title**: Brief description of the bug
   - **Description**: Problem details, steps to reproduce, expected vs actual behavior
   - **Browser**: Specify which browser and version you're using

### Suggestions and Improvements

To suggest an improvement:

1. Open a new issue with the `enhancement` tag
2. Clearly describe:
   - What problem it would solve
   - How it should work
   - Possible alternatives

### Code Contributions

#### Getting Started

1. **Fork the Repository**
   ```bash
   # On GitHub, click the "Fork" button
   ```

2. **Clone Your Fork**
   ```bash
   git clone https://github.com/YOUR-USERNAME/umeglio.github.io.git
   cd umeglio.github.io
   ```

3. **Create a Feature Branch**
   ```bash
   git checkout -b feature/feature-description
   # or for bug fixes:
   git checkout -b bugfix/bug-description
   ```

#### Code Guidelines

- **Keep It Simple**: The project intentionally doesn't use frameworks to maintain simplicity
- **No Dependencies**: Don't add external libraries or frameworks without discussion
- **Clean Code**: Ensure code is readable and well-commented where necessary
- **Responsive Design**: Test modifications on desktop, tablet, and mobile

#### Required Changes

1. **Bilingual Updates**: If you modify content, update both `index.html` and `index_en.html`
2. **Testing**: Test modifications in major browsers (Chrome, Firefox, Safari, Edge)
3. **Performance**: Ensure modifications don't slow down the website
4. **Accessibility**: Maintain compliance with WCAG accessibility guidelines

#### Commit Messages

Use clear and descriptive commit messages:

```
Format: [Type] Brief description

Types:
- feat: New feature
- fix: Bug fix
- docs: Documentation changes
- style: Formatting changes
- refactor: Refactoring without functionality changes
- test: Adding tests
- chore: Build, dependency, etc. changes

Example:
fix: Fix skills bar alignment on mobile
docs: Update installation guide
```

#### Push and Pull Request

1. **Push Your Branch**
   ```bash
   git push origin feature/feature-description
   ```

2. **Create a Pull Request**
   - Go to GitHub and click "Compare & pull request"
   - Title: Brief description of the change
   - Description: Details of what changed and why
   - If it resolves an issue, write `Closes #issue-number`

3. **Respond to Feedback**
   - Wait for review
   - Make requested changes
   - Push them to your branch (they'll automatically update in the PR)

### Style Guide

#### HTML
```html
<!-- Use consistent indentation (2 spaces) -->
<div class="section">
  <h2>Title</h2>
  <p>Content</p>
</div>
```

#### CSS
```css
/* Use clear naming conventions */
.class-name {
  property: value;
}

/* Comments for important sections */
/* Hero Section */
.hero {
  /* Hero section styling */
}
```

#### JavaScript
```javascript
// Use camelCase for variables and functions
const myVariable = 'value';

function myFunction() {
  // Comment complex logic
}
```

## Areas for Contribution

### Open Areas

- Design improvements
- Performance optimizations
- Accessibility improvements
- Additional translations
- Bug fixes
- Documentation improvements

### Controlled Areas

- Adding large frameworks or libraries
- Significant architectural changes
- Personal author data

For these topics, open a discussion issue before submitting a PR.

## Review Process

1. The maintainer will review your PR
2. May ask for changes or clarifications
3. Once approved, it will be merged
4. Public thanks on GitHub profile!

## Questions?

- Open an issue for general questions
- Contact directly: umberto.meglio@sipos.it

## Code of Conduct

Be respectful and constructive. This is a welcoming space for everyone.

---

Thank you for considering contributing! 🚀
