# Contributing to M-FIoT
## Getting started

* Make sure you have a [Github](https://github.com/signup/free) account.
* Create an issue, assuming one does not already exist.
	* Clearly describe the issue (use tags to define if feature, bug, fix, etc...)

## Making Changes
We are using git flow to manage the project changes, it means that the master branch
is only used for releases and the develop branch is where you need to start.

To start creating a feature
```bash
# $ git flow feature start '#<number-of-the-issue>-<feature-name>'
$ git flow feature start '#1-first-feature'
```

It will then create the following branch

    feature/#1-first-feature

Example of a commit message for the first feature

    feature(#1): Add doc

!!!!!! It's your **last** commit?
Use one of the following closing keyword in your commit

    close
    closes
    closed
    fix
    fixes
    fixed
    resolve
    resolves
    resolved

Example of last commit message for the first feature

    feature(#1): Add doc closes #1

## Pull request
[Open a pull request](https://github.com/liip/zebra/compare) so another developer can review your changes.
To name your pull request, just use one of the closing keywords followed by the number of the issue:

    closes #1