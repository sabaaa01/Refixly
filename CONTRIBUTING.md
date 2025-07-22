# Contributing to FinTrack

Thank you for your interest in contributing to FinTrack!. We welcome contributions from developers of all skill levels. This guide will help you get started.

## How to Contribute

### 1. Fork and Clone
1. Fork the repository on GitHub
2. Clone your fork locally:
```bash
git clone https://github.com/Bavanetha27/Refixly
cd Refixly
```

### 2. Set Up Development Environment
1. Install Node.js (version 16 or higher)
2. Install dependencies:
```bash
npm install
```
3. Create a `.env` file with the required environment variables see [`.env.example`](.env.example)
4. Start the development server:
```bash
npm run dev
```

### 3. Create a Branch
Create a new branch for your feature or bug fix:
```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/bug-description
```

## Types of Contributions

### 🐛 Bug Fixes
- Look for issues labeled `bug` or `good first issue`
- Include steps to reproduce the bug in your PR description
- Add tests if applicable

### ✨ New Features
- Check existing issues or create a new issue to discuss the feature
- Follow the existing code patterns and architecture
- Update documentation as needed

### 📚 Documentation
- Improve README.md, code comments, or inline documentation
- Add examples and use cases
- Fix typos and grammar issues

### 🎨 UI/UX Improvements
- Look for issues labeled `design-needed` or `ui/ux`
- Ensure changes are responsive and accessible
- Follow the existing Tailwind CSS patterns

### 🧪 Testing
- Add unit tests for new features
- Improve test coverage
- Fix failing tests

## Code Style Guidelines

### JavaScript/React
- Use functional components with hooks
- Follow ESLint rules (run `npm run lint`)
- Use descriptive variable and function names
- Add comments for complex logic

### CSS/Styling
- Use Tailwind CSS classes
- Follow mobile-first responsive design
- Maintain consistent spacing and typography

### File Structure
- Place components in appropriate directories
- Use clear, descriptive file names
- Keep components small and focused

## Commit Message Guidelines

Use clear and descriptive commit messages:

```
feat: add QR scan component
fix: resolve technician dashboard issue
docs: update contributing guidelines
style: refactor layout with Tailwind CSS
test: add unit test for booking form
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: UI/UX changes
- `test`: Adding tests
- `refactor`: Code refactoring

## Pull Request Process

### Before Submitting
1. Test your changes thoroughly
2. Run `npm run lint` and fix any issues
3. Update documentation if needed
4. Ensure your branch is up to date with main
5. **Include a screenshot or screen recording of your changes** when submitting a PR. This helps us review and merge your work more efficiently.

### PR Description Template
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] UI/UX improvement

## Testing
- [ ] Tested locally
- [ ] No console errors
- [ ] Responsive design verified

## Screenshots (if applicable)
Add screenshots for UI changes

## Checklist
- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
```

### Review Process
1. Maintainers will review your PR
2. Address any requested changes
3. Once approved, your PR will be merged

## Issue Guidelines

### Reporting Bugs
Use the following template:
```markdown
**Bug Description**
A clear description of the bug

**Steps to Reproduce**
1. Go to '...'
2. Click on '...'
3. See error

**Expected Behavior**
What should happen

**Screenshots**
If applicable

**Environment**
- OS: [e.g., Windows, macOS, Linux]
- Browser: [e.g., Chrome, Firefox]
- Version: [e.g., 22]
```

### Feature Requests
```markdown
**Feature Description**
Clear description of the proposed feature

**Problem it Solves**
What problem does this solve?

**Proposed Solution**
How should this be implemented?

**Additional Context**
Any other relevant information
```

## Development Tips

### Firebase Configuration
- Do not commit any API keys or credentials
- Use your own Firebase project while developing
- Follow security rules and permissions

### AI/ML Features (Future Scope)
- Test AI features like model predictions thoroughly
- Ensure fallback UI when APIs fail
- Optimize loading for AI-based components

### Performance
- Use lazy loading where applicable
- Avoid unnecessary re-renders
- Optimize API calls and state updates

## Getting Help

- Check existing issues and documentation first
- Ask questions in GitHub issues

## Code of Conduct

Please read and follow our [Code of Conduct](CODE_OF_CONDUCT.md).

---

Thank you for contributing to FinTrack! Your contributions help make personal finance management accessible to everyone.
