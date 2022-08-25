# …or create a new repository on the command line

echo "# wpclone" >> README.md

```js script
git init
git add README.md
git commit -m "first commit"
git branch -M master
git remote add origin <https://github.com/gohugotr/wpclone.git>
git push -u origin master
```

## …or push an existing repository from the command line

```js script
git remote add origin <https://github.com/gohugotr/wpclone.git>
git branch -M master
git push -u origin master
```

`yarn add antd @ant-design/icons`
