# Cheatsheet

## Git
```bash
git add .
git commit -m "message"
git push
```

## Node / npm
```bash
node -v
npm init -y
npm install package-name
```


## Repo workflow

### Add a new lecture
Change the week and lecture folder name each time:
```bash
mkdir -p week-1/lecture-2-css/images
cp _template/notes.md week-1/lecture-2-css/notes.md
touch week-1/lecture-2-css/images/.gitkeep
```

### Save to GitHub
```bash
git add .
git commit -m "week 1 lecture 2: css notes and code"
git push
```

### Check the structure
```bash
ls -R
```



## Gotchas
| Problem | Fix |
|---------|-----|
|         |     |
## Add a new lecture (complete)

Change the week number, lecture number, and topic each time:
```bash
# 1. Create the folder, notes file, and images folder
mkdir -p week-1/lecture-2-css/images
cp _template/notes.md week-1/lecture-2-css/notes.md
touch week-1/lecture-2-css/images/.gitkeep

# 2. Add the link to the README index
echo "- [Lecture 2: CSS](week-1/lecture-2-css/notes.md)" >> README.md

# 3. Save to GitHub
git add .
git commit -m "week 1 lecture 2: css notes and code"
git push
```

Naming pattern: `week-<n>/lecture-<n>-<topic>`

Note: the README line is added at the very end of the file. If your Week 1 list isn't last, paste it under Week 1 manually in VS Code.
