# CLAUDE.md - Trevor Kist Portfolio Website

## PROJECT OVERVIEW
Create a modern, minimalist portfolio website for Trevor Kist that showcases his unique position as a Marketing Technology Leader who uses AI-augmented development to build production SaaS applications. The site should impress potential employers, clients, and collaborators with its clean design and subtle interactions.

## DESIGN SPECIFICATIONS

### Visual Design
- **Style**: Minimalist, inspired by Stripe's design language
- **Color Palette**:
  - Primary: #0A0A0A (near black)
  - Secondary: #FAFAFA (off white)
  - Accent: #0066FF (electric blue)
  - Success: #00D4AA (teal)
  - Gradient: Linear gradient from #0066FF to #00D4AA for special elements
  - Text Primary: #0A0A0A
  - Text Secondary: #666666
  - Border: #E5E5E5
- **Typography**:
  - Headings: Inter or SF Pro Display (clean, modern sans-serif)
  - Body: Inter or SF Pro Text
  - Code: JetBrains Mono or SF Mono
- **Spacing**: 8px grid system (8, 16, 24, 32, 48, 64, 96, 128)
- **Border Radius**: 8px for cards, 4px for buttons
- **Shadows**: 
  - Small: 0 1px 3px rgba(0,0,0,0.12)
  - Medium: 0 4px 6px rgba(0,0,0,0.1)
  - Large: 0 10px 40px rgba(0,0,0,0.08)

### Animations & Interactions
- **Scroll Animations**: Use Intersection Observer API for fade-in and slide-up effects
- **Hover States**: All interactive elements should have smooth transitions (0.2s ease)
- **Page Transitions**: Smooth fade between pages
- **Micro-interactions**:
  - Buttons: Subtle scale on hover (1.02) and translateY(-1px)
  - Cards: Lift on hover with shadow enhancement
  - Links: Color transition and underline animation
  - Navigation: Smooth underline indicator for active page
- **Loading State**: Minimal skeleton loader or subtle shimmer effect

### Responsive Design
- Mobile First approach
- Breakpoints:
  - Mobile: 320px - 768px
  - Tablet: 768px - 1024px
  - Desktop: 1024px+
- Max content width: 1200px
- Padding: 20px mobile, 40px tablet, 60px desktop

## FILE STRUCTURE
```
portfolio/
├── index.html (Home page)
├── projects.html
├── about.html
├── contact.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── assets/
│   └── images/
│       ├── trevor-headshot.jpg (placeholder)
│       ├── datavalidator-screenshot.png (placeholder)
│       ├── easypay-university-screenshot.png (placeholder)
│       └── other-project-screenshots.png (placeholder)
└── README.md
```

## PAGE CONTENT

### NAVIGATION (All Pages)
```
Logo: "TK" or "Trevor Kist" (minimal text logo)
Menu Items: Home | Projects | About | Contact
CTA Button: "View Resume" (opens PDF in new tab)
```

### HOME PAGE (index.html)

#### Hero Section
```
Headline: Building Tomorrow's Marketing Technology Today
Subheadline: I'm Trevor Kist—a marketing technology leader who uses AI-augmented development to build production SaaS applications in weeks, not months.

CTA Buttons: 
- Primary: "View My Work" → projects.html
- Secondary: "Let's Connect" → contact.html

Stats Bar (animated counters):
- 10+ Applications Built
- 98% Accuracy Rate
- 75% Faster Development
- $2M+ Revenue Generated
```

#### Featured Projects Preview (3 cards)
```
1. DataValidator Pro
   - Tag: "SaaS Platform"
   - Description: "Google Places API-powered validation tool processing 10,000+ records"
   - Metrics: "98% accuracy • 8hrs → 15min"
   - Link: → projects.html#datavalidator

2. EasyPay University
   - Tag: "EdTech Platform"
   - Description: "Gamified training platform reducing onboarding by 60%"
   - Metrics: "95% completion • 45% ↓ support tickets"
   - Link: → projects.html#easypay-university

3. Marketing Automation Suite
   - Tag: "MarTech Tools"
   - Description: "Suite of AI-powered marketing tools"
   - Metrics: "30hrs/week saved • $2M+ attributed"
   - Link: → projects.html#automation-suite
```

#### Skills & Technologies
```
Categories (with icon animations on scroll):
- AI Development: Claude Code, GitHub Copilot, ChatGPT
- Technologies: VS Code, Git, Node.js, React, APIs
- Marketing: Salesforce, Pardot, Google Analytics, SEO
- Cloud & Deploy: Heroku, Netlify, Vercel
```

#### Call to Action Section
```
Headline: Ready to Build Something Amazing?
Subtext: Whether you're looking for innovation, leadership, or technical expertise, let's talk.
Button: "Get In Touch" → contact.html
```

### PROJECTS PAGE (projects.html)

#### Page Header
```
Title: Projects & Innovation
Subtitle: From concept to production—real applications solving real problems
```

#### Project 1: DataValidator Pro
```
Hero Image: [Screenshot placeholder]
Status Badge: "Live Production"
Tech Stack: Node.js • Express • React • Google Places API • PostgreSQL

Overview:
Built a full-stack SaaS application that validates and enhances business data using Google Places API. This tool transforms hours of manual verification into minutes of automated accuracy.

Key Features:
• Real-time validation of 10,000+ business records
• Batch processing with progress tracking
• Export functionality with confidence scoring
• Rate limiting and caching for API optimization

Impact:
• 98% accuracy rate
• Reduced validation time from 8 hours to 15 minutes
• Serving 500+ active users
• Processing 50,000+ records monthly

Links:
[View Live Demo - placeholder URL]
[GitHub Repository - placeholder URL]
[Read Case Study - placeholder URL]
```

#### Project 2: EasyPay University
```
Hero Image: [Screenshot placeholder]
Status Badge: "Live Production"
Tech Stack: TypeScript • React • Gamification Engine • Custom CMS

Overview:
Created an interactive training platform from scratch using AI-assisted development. Features gamification, progress tracking, and compliance-focused modules for merchant education.

Key Features:
• 7 comprehensive training modules
• Achievement system with badges
• Progress tracking and analytics
• Mobile-responsive design
• Quiz engine with instant feedback

Impact:
• 95% merchant activation rate
• 60% reduction in onboarding time
• 45% decrease in support tickets
• 98% satisfaction score

Links:
[View Live Demo - placeholder URL]
[GitHub Repository - placeholder URL]
[Watch Demo Video - placeholder URL]
```

#### Project 3: Marketing Automation Suite
```
Hero Image: [Screenshot placeholder]
Status Badge: "Internal Tools"
Tech Stack: JavaScript • Pardot API • Salesforce Integration • Claude Code

Overview:
Suite of custom marketing tools built to automate repetitive tasks and enhance campaign performance. Includes email builders, lead scoring systems, and analytics dashboards.

Components:
• Email Template Generator
• Lead Scoring Algorithm
• Campaign ROI Dashboard
• A/B Test Analyzer
• Content Performance Tracker

Impact:
• 30+ hours saved weekly
• $2M+ in attributed revenue
• 25% improvement in email engagement
• 40% increase in qualified leads

Links:
[View Documentation - placeholder URL]
[GitHub Repository - placeholder URL]
```

#### Other Projects Grid (2x2)
```
Quick cards for smaller projects:
1. PDF Butler - Training video automation tool
2. Data Migration Tool - Salesforce to Pardot sync
3. Merchant Portal - Self-service dashboard
4. Analytics Reporter - Automated insights generator
```

### ABOUT PAGE (about.html)

#### Hero Section
```
Headline: Bridging Marketing & Technology
Subheadline: The intersection of creativity and code is where innovation happens
Photo: [Professional headshot placeholder]
```

#### My Story
```
Title: The Journey

I discovered my superpower by accident. As a marketing manager drowning in manual processes and waiting weeks for dev resources, I asked myself: "What if I could build it myself?"

That question led me to AI-assisted development. Using tools like Claude Code within VS Code, I started building real applications that solved real problems. Not prototypes or proofs of concept—production applications serving thousands of users.

Today, I'm pioneering a new approach to marketing technology. While others debate the potential of AI, I'm using it to ship products that drive measurable business outcomes.

What started as curiosity has become my competitive advantage: the ability to conceive, build, and deploy enterprise solutions in weeks instead of months, without traditional development teams or massive budgets.
```

#### Experience Timeline
```
2020 - Present: Marketing Manager - Technology & Innovation | EasyPay Finance
- Building SaaS platforms using AI-augmented development
- Leading digital transformation initiatives
- Generating $2M+ in revenue through technology innovation

2019 - 2020: Marketing Specialist | EasyPay Finance
- Established marketing operations foundation
- Achieved 30% email open rates
- Identified automation opportunities

2017 - 2019: Quality Assurance Expert | Feghali Sales LLC
- Discovered passion for process optimization
- Increased productivity by 25%
- First exposure to systematic problem-solving

Education: B.S. Business Administration - MIS | CSU San Marcos (2015-2019)
```

#### What I Do
```
Three columns:
1. Innovate
   I identify problems and build solutions. Using AI-augmented development, I can prototype, test, and deploy faster than traditional methods.

2. Execute
   From SEO to email automation, I deliver core marketing results while pushing the boundaries of what's possible with technology.

3. Lead
   I bridge technical and business teams, translating complex requirements into actionable strategies that drive growth.
```

#### Values & Approach
```
- Ship Fast, Learn Faster: Perfect is the enemy of done
- Data Drives Decisions: Measure everything that matters
- Automate the Repetitive: Humans should do human work
- Always Be Learning: Technology evolves, so do I
```

#### Currently Exploring
```
- Advanced AI development patterns
- Real-time data processing at scale
- Voice and conversational UI
- Machine learning for marketing optimization
```

### CONTACT PAGE (contact.html)

#### Hero Section
```
Headline: Let's Build Something Together
Subheadline: Whether you're looking to hire, collaborate, or just chat about the future of marketing technology—I'd love to hear from you.
```

#### Contact Options (Cards)
```
1. Email
   Icon: Mail
   trevor@email.com [placeholder]
   "Direct line for opportunities"

2. LinkedIn
   Icon: LinkedIn
   linkedin.com/in/trevor-kist
   "Let's connect professionally"

3. GitHub
   Icon: GitHub
   github.com/trevorkist [placeholder]
   "Check out my code"

4. Schedule
   Icon: Calendar
   Calendly link [placeholder]
   "Book a 30-min chat"
```

#### Contact Form
```
Fields:
- Name* (required)
- Email* (required)
- Company
- Subject (dropdown):
  - Job Opportunity
  - Consulting Project
  - Partnership
  - General Inquiry
- Message* (required)
- Button: "Send Message"

Success message: "Thanks for reaching out! I'll get back to you within 24 hours."
```

#### FAQs
```
Q: Do you do freelance/consulting work?
A: Yes, I'm open to interesting projects that push the boundaries of marketing technology.

Q: How did you learn AI-assisted development?
A: Self-directed learning, lots of experimentation, and a willingness to fail fast and iterate.

Q: What's your preferred tech stack?
A: VS Code + Claude Code for development, Node.js/React for web apps, Heroku/Netlify for deployment.

Q: Are you open to relocation?
A: I'm based in Bellingham, WA but open to remote opportunities and occasional travel.
```

## TECHNICAL REQUIREMENTS

### SEO & Meta Tags
```html
<!-- Per page customization needed -->
<title>Trevor Kist | Marketing Technology Leader & AI Developer</title>
<meta name="description" content="Marketing technology leader pioneering AI-augmented development. Building SaaS applications that drive real business outcomes.">
<meta property="og:image" content="[portfolio-preview.jpg]">
<!-- Include Open Graph and Twitter Card tags -->
```

### Performance
- Lazy load images
- Minify CSS/JS for production
- Use system fonts or load fonts efficiently
- Optimize images (WebP with fallbacks)
- Target 90+ Lighthouse score

### Accessibility
- Semantic HTML5 structure
- ARIA labels where appropriate
- Keyboard navigation support
- Focus states for all interactive elements
- Alt text for all images
- Color contrast WCAG AA compliant

### Analytics
- Google Analytics 4 setup
- Track key events:
  - Project views
  - Resume downloads
  - Contact form submissions
  - External link clicks

### JavaScript Functionality
```javascript
// Key features to implement:
1. Smooth scroll for anchor links
2. Intersection Observer for scroll animations
3. Form validation and submission (can use Netlify Forms)
4. Mobile menu toggle
5. Theme persistence (if adding dark mode later)
6. Animated number counters on home page
7. Project filtering/sorting on projects page
8. Copy email to clipboard functionality
```

### Deployment
- Optimize for Netlify deployment
- Include _redirects file if needed
- Add netlify.toml for build settings
- Include proper 404 page

## CONTENT NOTES

### Tone of Voice
- Professional but approachable
- Confident without arrogance
- Technical but accessible
- Focus on outcomes, not just features

### Key Messages
1. "I build real products that solve real problems"
2. "AI is a tool, strategy is the differentiator"
3. "Faster development, better outcomes"
4. "The future of marketing technology is here"

### Social Proof Elements
- Include metrics wherever possible
- Add testimonials if available (placeholder for now)
- Show real screenshots of applications
- Include logos of technologies used

## IMPLEMENTATION PRIORITIES

### Phase 1 (MVP)
1. Basic HTML structure for all pages
2. CSS styling with responsive design
3. Navigation between pages
4. Basic scroll animations
5. Contact form

### Phase 2 (Enhancements)
1. Advanced animations
2. Project filtering
3. Blog section (if desired)
4. Dark mode toggle
5. Performance optimizations

## TESTING CHECKLIST
- [ ] All links work correctly
- [ ] Forms submit properly
- [ ] Responsive on all devices
- [ ] Cross-browser compatibility
- [ ] Loading speed < 3 seconds
- [ ] SEO meta tags present
- [ ] Images optimized
- [ ] Accessibility standards met

## INSPIRATION REFERENCES
- Stripe.com - Clean design and subtle animations
- Linear.app - Modern UI patterns
- Vercel.com - Developer-focused portfolio
- Brian Lovin's site - Personal portfolio excellence

Build this portfolio to showcase Trevor's unique position as a marketing technology innovator who's pioneering the future of AI-augmented development!