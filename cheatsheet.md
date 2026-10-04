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