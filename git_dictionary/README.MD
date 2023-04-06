# What is this? 
Git has the property to make easy things really, really hard and complex to execute (...because "it is so powerful" (... I guess all these people who reason like that only program in asm, because its *so powerful*.)

This file intends to *translate* `what you want to do` into `what you have to do`.

"But this information is already on Stackoverflow!"... well yeh... have fun searching :)

# Git Dictionary

## git pull overwriting local changes
Other titles: 
- Overwrite local changes with remote

Replace your local branch `develop` with the contents of the remote branch `origin/develop`:

```
git fetch origin
git checkout develop
git reset --hard origin/develop
```

Source: https://stackoverflow.com/a/6257598/6702598


## Rebase a branch

You want to rebase your branch `feature/mynewfeature`

Remember: *rebase* means *re-base*, meaning *change the base*, meaning *change the commit where it was branched from. 

[What is rebasing?](https://poanchen.github.io/blog/2020/09/19/what-to-do-when-git-branch-has-diverged) 

```
# be on your branch (e.g. feature/mynewfeature)
git rebase develop

# you will probably get merge conflicts
# use `mergetool` to solve them:
git mergetool

# continue rebasing with 
git rebase --continue
```





