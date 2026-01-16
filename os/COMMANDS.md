# ShaneOS Terminal Commands

Quick reference for all available terminal commands in ShaneOS.

## Basic Commands

### `help`
Shows list of all available commands
```
$ help
Available commands:
  help     - Show this help message
  about    - About Shane Israel
  skills   - List technical skills
  projects - Show projects
  contact  - Contact information
  clear    - Clear terminal
  whoami   - Display current user
  date     - Show current date and time
```

### `whoami`
Display current user
```
$ whoami
shane
```

### `date`
Show current date and time
```
$ date
Fri Jan 16 2026 15:30:45 GMT+0530 (India Standard Time)
```

### `clear`
Clear the terminal screen
```
$ clear
[Terminal clears]
```

## Information Commands

### `about`
Display information about Shane Israel
```
$ about
Shane Israel N
Software Engineer | Machine Learning Engineer
Undergraduate CS Student | India
Passionate about AI/ML and building impactful software
```

### `skills`
List technical skills and technologies
```
$ skills
Technical Skills:
  Languages: Python, JavaScript/TypeScript, Java, C++
  Web: React, Node.js, Express, HTML/CSS
  ML/AI: TensorFlow, PyTorch, Scikit-learn
  Tools: Git, Docker, AWS, MongoDB
```

### `projects`
Show recent projects
```
$ projects
Recent Projects:
  1. Interactive 3D Portfolio (Three.js, React)
  2. Hackathon Projects (Various tech stacks)
  3. ML Research Projects (Python, PyTorch)
  Visit GitHub for more: github.com/shaneisraeln
```

### `contact`
Display contact information
```
$ contact
Contact Information:
  Email: shaneisrael2006@gmail.com
  GitHub: github.com/shaneisraeln
  LinkedIn: linkedin.com/in/shane-israel
  Instagram: @_shane__israel_lh44_
```

## Adding Custom Commands

Want to add your own commands? Edit `os/src/components/windows/TerminalContent.tsx`:

```tsx
const commands: { [key: string]: () => string[] } = {
  // Add your custom command here
  mycommand: () => [
    'Output line 1',
    'Output line 2',
    'Output line 3',
  ],
  
  // Example: Easter egg
  secret: () => [
    '🎉 You found the secret command!',
    'Here\'s a fun fact about me...',
  ],
  
  // Example: Dynamic command
  random: () => [
    `Your lucky number is: ${Math.floor(Math.random() * 100)}`,
  ],
};
```

## Command Ideas

Here are some fun command ideas you could add:

- `joke` - Tell a programming joke
- `quote` - Display an inspirational quote
- `resume` - Link to your resume
- `github` - Show GitHub stats
- `blog` - Link to your blog posts
- `achievements` - List your achievements
- `education` - Show your education background
- `experience` - Display work experience
- `certifications` - List certifications
- `hobbies` - Share your hobbies
- `music` - What you're listening to
- `coffee` - How many coffees you've had today 😄

## Tips

1. Keep command outputs concise and readable
2. Use ASCII art for visual interest
3. Add personality with emojis
4. Include links where relevant
5. Make it fun and interactive!

## Example Session

```
$ help
Available commands:
  help     - Show this help message
  ...

$ whoami
shane

$ about
Shane Israel N
Software Engineer | Machine Learning Engineer
...

$ skills
Technical Skills:
  Languages: Python, JavaScript/TypeScript, Java, C++
  ...

$ contact
Contact Information:
  Email: shaneisrael2006@gmail.com
  ...

$ clear
[Terminal clears]
```
