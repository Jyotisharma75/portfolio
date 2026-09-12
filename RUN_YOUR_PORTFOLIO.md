# 🚀 HOW TO RUN YOUR PORTFOLIO - COMPLETE GUIDE

## ⚡ QUICKEST WAY TO RUN (1 Click!)

### Option 1: Automatic Setup & Run (Recommended)

**Double-click this file:**
```
install-and-run.bat
```

This will:
1. ✅ Check if Node.js is installed
2. ✅ Install Node.js if needed
3. ✅ Create all directories
4. ✅ Organize all files
5. ✅ Install dependencies
6. ✅ Start dev server
7. ✅ Open browser automatically

**That's it! Your portfolio will be live in minutes!**

---

## 🎯 WHAT HAPPENS WHEN YOU RUN IT

```
Step 1: Check Node.js Installation
   └─ Downloads and installs if needed

Step 2: Create Directory Structure
   ├─ Creates app/
   ├─ Creates components/
   ├─ Creates data/
   ├─ Creates lib/
   └─ Creates public/

Step 3: Organize Files
   ├─ Moves app-*.tsx files → app/
   ├─ Moves components-*.tsx files → components/
   ├─ Moves data-*.ts files → data/
   └─ Moves *.ts files → lib/

Step 4: Install Dependencies
   └─ Runs: npm install

Step 5: Start Development Server
   └─ Runs: npm run dev

Step 6: Open Browser
   └─ Opens: http://localhost:3000
```

---

## 📝 MANUAL SETUP (If Automatic Doesn't Work)

### Step 1: Install Node.js

1. Download from: https://nodejs.org/
2. Download the **LTS (Long Term Support)** version
3. Run the installer
4. Accept all defaults
5. Restart your computer after installation

### Step 2: Verify Installation

Open Command Prompt and type:
```bash
node --version
npm --version
```

Both should show version numbers (like v20.11.1)

### Step 3: Run Setup

Double-click: `run-portfolio.bat`

Or open Command Prompt in the portfolio directory and type:
```bash
run-portfolio.bat
```

---

## 🌐 AFTER SETUP IS COMPLETE

Once the dev server starts:

1. ✅ Browser automatically opens to http://localhost:3000
2. ✅ You'll see your portfolio loading
3. ✅ All sections visible (Hero, About, Experience, Projects, Skills, Education, Contact)
4. ✅ Dark mode toggle in top right corner
5. ✅ Mobile menu works on small screens
6. ✅ All animations and features working

### To Stop the Server

Press `Ctrl + C` in the Command Prompt window running the dev server

### To Start Again

Double-click `run-portfolio.bat` again

---

## 🛠️ TROUBLESHOOTING

### Problem: "Node.js is not recognized"

**Solution:**
1. Restart your computer after installing Node.js
2. Open a NEW Command Prompt window
3. Try `node --version` again

### Problem: npm install is slow

**Solution:**
- This is normal, especially first time
- Download size: ~400 MB
- Installation time: 2-5 minutes
- Just wait, don't close the window

### Problem: Port 3000 is already in use

**Solution:**
Change port in the script:
```bash
npm run dev -- -p 3001
```
Then open: http://localhost:3001

### Problem: Browser doesn't open automatically

**Solution:**
1. Wait for the dev server to start
2. Manually open: http://localhost:3000
3. Server is running when you see "ready in X ms"

### Problem: "EACCES: permission denied"

**Solution:**
1. Run Command Prompt as Administrator
2. Then run `run-portfolio.bat`

---

## 📊 WHAT YOU'LL SEE

Your portfolio will display:

✨ **Animated Hero Section**
- Large heading
- Professional intro
- CTA buttons

📊 **Statistics Dashboard**
- 6 key metrics (Experience, Projects, Hours Automated, etc.)
- Animated counters

📝 **About Section**
- Your background
- Key skills
- Education info

💼 **Experience Timeline**
- 3 work positions
- Achievements
- Technologies used

🎨 **Projects Showcase**
- 4 featured AI projects
- Project descriptions
- Tech stack

🛠️ **Skills Section**
- 5 skill categories
- Proficiency bars
- Technical expertise

🎓 **Education & Certifications**
- Degrees
- Certifications
- Badges

📧 **Contact Form**
- Get in touch section
- Contact information
- Social links

🌙 **Dark/Light Mode**
- Toggle in top right
- Smooth transitions

---

## 🎯 QUICK REFERENCE

| Task | Command |
|------|---------|
| Start portfolio | Double-click `run-portfolio.bat` |
| Install Node.js | Double-click `install-and-run.bat` |
| Stop dev server | Press `Ctrl + C` |
| View portfolio | Open http://localhost:3000 |
| Customize content | Edit files in `data/` folder |
| Change colors | Edit `tailwind.config.ts` |

---

## 📱 TESTING YOUR PORTFOLIO

Once it's running:

1. **Test Desktop View**
   - All sections visible
   - Animations smooth
   - Dark mode works

2. **Test Mobile View**
   - Press F12 to open DevTools
   - Click device icon to toggle mobile view
   - Menu works on small screens

3. **Test Navigation**
   - Click navbar items
   - Smooth scroll works
   - Links functional

4. **Test Features**
   - Toggle dark/light mode
   - Check contact form
   - Click social links

---

## ✅ SUCCESS CHECKLIST

When you see these, your portfolio is working perfectly:

- [ ] Browser opens to http://localhost:3000
- [ ] Hero section displays with animations
- [ ] All 8 sections visible
- [ ] Dark mode toggle works
- [ ] Mobile menu works
- [ ] Animations are smooth
- [ ] No console errors
- [ ] Responsive on different sizes

---

## 🚀 NEXT STEPS

After confirming everything works:

1. **Customize Your Info**
   - Edit `data/projects.ts` - Add your projects
   - Edit `data/experience.ts` - Update your experience
   - Edit `data/skills.ts` - Your technical skills
   - Edit `data/education.ts` - Your education

2. **Deploy to Vercel**
   - See `DEPLOYMENT_GUIDE.md`
   - One-click deployment to live URL

3. **Monitor Your Portfolio**
   - Track visitors
   - Get feedback
   - Update content regularly

---

## 💡 PRO TIPS

- **Hot Reload**: Changes to code automatically refresh in browser
- **Port Issues**: If port 3000 is busy, use `-p 3001` flag
- **Editing**: You can edit files while server is running
- **Mobile Testing**: Use DevTools (F12) to test different screen sizes
- **Dark Mode**: Toggle to verify styling in both themes

---

## 📞 NEED HELP?

**Files Included:**
- `START_HERE.md` - Overview
- `QUICKSTART.md` - 5-minute guide
- `SETUP.md` - Detailed setup
- `DEPLOYMENT_GUIDE.md` - Deploy to Vercel
- All other documentation files

**Read** `START_HERE.md` if you have questions!

---

## 🎉 YOU'RE READY!

Your AI Engineer portfolio is production-ready.

**Just double-click `run-portfolio.bat` and enjoy! 🚀**

Questions? Check the documentation files included in the project folder.

Happy showcasing your AI engineering skills! ✨
