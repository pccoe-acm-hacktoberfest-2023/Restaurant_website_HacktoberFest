

# Start Contributing🤩🤗:
- Fork this repo (button on top)
- Clone on your local machine

```bash
  git clone https://github.com/your_username/Restaurant_website_HacktoberFest.git
```
- Navigate to project directory.
```bash
  cd Restaurant_website_HacktoberFest
```
- Create a new branch with a sensible name like your-name-add-hover-icons
```bash
 git checkout -b my-new-branch
```
- Stage the changes
```bash
 git add .
```
- Commit your changes
```bash 
git commit -m "first commit"
```
- Then push
```bash 
git push origin my-new-branch
```

- Create a new pull request from your forked repository

# Avoid Conflicts {Syncing your fork}
An easy way to avoid conflicts is to add an 'upstream' for your git repo, as other PR's may be merged while you're working on your branch/fork.
```bash 
git remote add upstream https://github.com/HrutvikKhatkar/Restaurant_website_HacktoberFest.git
```
You can verify that the new remote has been added by typing
```bash
git remote -v
```
To pull any new changes from your parent repo simply run
```bash
git merge upstream/main
```
This will give you any eventual conflicts and allow you to easily solve them in your repo. It's a good idea to use it frequently in between your own commits to make sure that your repo is up to date with its parent.

