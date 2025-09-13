# Portfolio Website Customization Guide

## Quick Start Checklist

Follow this checklist to personalize your portfolio website:

### 1. Personal Information
- [ ] Replace "Your Name" with your actual name in:
  - `index.html` (lines 16, 47, 361)
  - `projects.html` (line 16)
- [ ] Update the page titles in both HTML files
- [ ] Replace placeholder email "your.email@example.com" with your real email
- [ ] Update phone number "+1 (555) 123-4567" with your actual number
- [ ] Change location "Your City, Your State" to your real location

### 2. Social Media Links
Update these placeholder URLs with your actual profiles:
- [ ] GitHub: "https://github.com/yourusername"
- [ ] LinkedIn: "https://linkedin.com/in/yourprofile"
- [ ] Email: "mailto:your.email@example.com"

### 3. About Section (index.html, lines 74-96)
- [ ] Rewrite the introduction paragraph to reflect your background
- [ ] Update university name: "[Your University Name]"
- [ ] Update degree program if different from Computer Science
- [ ] Update graduation timeline: "[Start Year] - [Expected Graduation Year]"
- [ ] Update GPA: "[Your GPA]/4.0"
- [ ] Replace placeholder certifications and achievements with your own

### 4. Skills Section (index.html, lines 108-133)
- [ ] Adjust programming language skill levels (data-width attributes)
- [ ] Add or remove programming languages based on your expertise
- [ ] Update web development skills and proficiency levels
- [ ] Modify the tools & technologies list to match your experience

### 5. Projects Section
Update each project with your actual work:

#### For each project in index.html (lines 189-287):
- [ ] Replace project titles with your actual project names
- [ ] Update project descriptions to match your work
- [ ] Change GitHub links to your actual repositories
- [ ] Update demo links or remove if not available
- [ ] Modify technology tags to reflect what you used

#### For detailed projects page (projects.html):
- [ ] Replace all project information with your actual projects
- [ ] Update project statuses (completed, in-progress, planned)
- [ ] Add real GitHub repository links
- [ ] Update development timelines
- [ ] Modify feature lists to match your projects

### 6. Contact Information (index.html, lines 306-318)
- [ ] Update email address
- [ ] Update phone number
- [ ] Update location/address
- [ ] Verify all social media links

### 7. Hero Section Customization
- [ ] Replace the typewriter text array in `js/script.js` (lines 272-277) with titles that fit you:
  ```javascript
  const texts = [
      'Computer Science Student',        // Keep or modify
      'Future Software Engineer',       // Customize based on your goals
      'Problem Solver',                // Keep or personalize
      'Code Enthusiast'                // Add your own interests
  ];
  ```

### 8. Images and Assets
- [ ] Add your professional headshot to `/images/` folder
- [ ] Replace the placeholder resume in `/assets/resume.pdf` with your actual resume
- [ ] Add screenshots of your projects to `/images/projects/` folder
- [ ] Update image references in the HTML files

### 9. SEO and Meta Information
- [ ] Update page titles in both HTML files
- [ ] Add meta descriptions for better SEO
- [ ] Update the favicon (currently using default)

### 10. Optional Customizations

#### Colors and Branding
- [ ] Modify CSS color variables in `css/style.css` (lines 26-39) to match your preferred color scheme:
  ```css
  :root {
      --primary-color: #2563eb;    /* Your brand color */
      --secondary-color: #1e40af;  /* Darker shade */
      --accent-color: #60a5fa;     /* Lighter accent */
  }
  ```

#### Additional Sections
Consider adding these optional sections:
- [ ] Blog section (if you write technical articles)
- [ ] Testimonials (if you have recommendations)
- [ ] Volunteer work or extracurricular activities
- [ ] Relevant coursework section

## Content Writing Tips

### Project Descriptions
When writing project descriptions, include:
- **Problem**: What issue were you trying to solve?
- **Solution**: How did you approach the problem?
- **Technologies**: What tools and languages did you use?
- **Results**: What did you accomplish or learn?

### About Section
Your about section should:
- Introduce yourself professionally
- Highlight your passion for computer science
- Mention your career goals (internships, full-time roles)
- Show personality while remaining professional

### Skills Section
Be honest about your skill levels:
- **Beginner (0-40%)**: Basic understanding, can write simple programs
- **Intermediate (40-70%)**: Comfortable with the technology, can build projects
- **Advanced (70-90%)**: Proficient, can tackle complex problems
- **Expert (90-100%)**: Deep expertise, can teach others

## Technical Notes

### File Structure
```
portfolio-website/
├── index.html              # Main homepage
├── projects.html           # Detailed projects page
├── css/
│   └── style.css          # Main stylesheet
├── js/
│   └── script.js          # Interactive functionality
├── images/                # Your photos and project screenshots
├── assets/               # Resume, documents, etc.
└── README.md            # Setup and deployment instructions
```

### Responsive Design
The website is fully responsive and will look great on:
- Desktop computers
- Tablets
- Mobile phones

### Browser Compatibility
Tested and works with:
- Chrome (recommended)
- Firefox
- Safari
- Edge

## Need Help?

If you need assistance with customization:
1. Check the main README.md for technical setup
2. Look at the comments in the HTML and CSS files
3. Test changes locally before deploying
4. Keep backups of your customized files

Remember: This is YOUR portfolio, so make it reflect who you are and what you've accomplished!