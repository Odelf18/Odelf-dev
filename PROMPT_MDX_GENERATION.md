# Prompt for MDX Project Generation

Copy and paste this prompt each time you open a GitHub repository:

---

## Prompt to Use

Create a MDX project file for this repository for my portfolio website.

**Context:**
- This is a Next.js portfolio website using Contentlayer for MDX content
- The file should be saved in `content/projects/[repo-name].mdx`
- Content must be accessible to non-developers (simplified language)
- Focus on showcasing the project for a portfolio, NOT technical documentation
- All content must be in English

**Required Frontmatter:**
```yaml
---
title: [Project Title]
description: [Short description - max 1 sentence]
date: [YYYY-MM-DD]
published: true
repository: Odelf18/[repo-name]
---
```

**Content Structure (in order):**

1. **## The Project**
   - Brief overview in simple terms (2-3 sentences)
   - What problem it solves or what it does

2. **## How It Works**
   - Simple flow diagram (ASCII) or step-by-step explanation
   - Keep it visual and easy to understand

3. **## Key Features**
   - Use checkmarks (✅) for each feature
   - Group by category if needed (e.g., "Core Features", "Security", "Notifications")
   - 3-6 main features

4. **## Technical Architecture** (optional, keep brief)
   - Brief overview of the tech stack
   - Key technologies used

5. **## Code Examples**
   - 2-3 relevant code snippets
   - Keep them short and focused
   - Show key functionality, not full implementations
   - Add brief comments explaining what each does

6. **## Results & Performance**
   - What the project achieves
   - Benefits or outcomes
   - Use bullet points

7. **## Technical Challenges Solved**
   - 3-5 key problems addressed
   - Brief explanation of each challenge

8. **## Technologies Used**
   - Simple list of main technologies
   - No need for full stack details

9. **## Project Overview**
   - What skills this project demonstrates
   - Brief summary of technical achievements

**Style Guidelines:**
- ✅ Use simple, accessible language
- ✅ Explain technical terms when needed
- ✅ Keep code examples short (max 10-15 lines each)
- ✅ Focus on what the project does and why it's valuable
- ✅ Avoid installation/setup instructions
- ✅ Avoid full API documentation
- ✅ Maximum 200 lines total
- ✅ Use emojis sparingly (✅ for features only)

**Reference:**
Follow the style and structure of `content/projects/oanda-strategy-trading.mdx`

**Output:**
Create the complete MDX file with proper formatting and save it to `content/projects/[repo-name].mdx`

---

## Quick Copy-Paste Version

```
Create a MDX project file for this repository for my portfolio website.

Save it as: content/projects/[repo-name].mdx

Format:
- Frontmatter: title, description, date (YYYY-MM-DD), published: true, repository: Odelf18/[repo-name]
- Sections: The Project, How It Works, Key Features, Code Examples, Results & Performance, Technical Challenges Solved, Technologies Used, Project Overview
- Style: Portfolio-focused, accessible to non-developers, simple language, max 200 lines
- Reference: Follow content/projects/oanda-strategy-trading.mdx

All content in English. Focus on showcasing the project, not documentation.
```
