# Contributing to OrganicFlow

First off, thank you for considering contributing to OrganicFlow! It's people like you that make OrganicFlow such a great tool for the architectural community.

## Table of Contents

- [Contributing to OrganicFlow](#contributing-to-organicflow)
  - [Table of Contents](#table-of-contents)
  - [Code of Conduct](#code-of-conduct)
  - [Getting Started](#getting-started)
    - [Issues](#issues)
    - [Pull Requests](#pull-requests)
  - [Coding Guidelines](#coding-guidelines)
  - [Commit Message Guidelines](#commit-message-guidelines)
    - [Commit Message Format](#commit-message-format)
    - [Type](#type)
  - [Testing](#testing)
  - [Documentation](#documentation)
  - [Community](#community)

## Code of Conduct

This project and everyone participating in it is governed by the [OrganicFlow Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to [info@blueconvergence.se].

## Getting Started

Contributions to OrganicFlow are made via Issues and Pull Requests (PRs). A few general guidelines that cover both:

- Search for existing Issues and PRs before creating your own.
- We work hard to makes sure issues are handled in a timely manner but, depending on the impact, it could take a while to investigate the root cause. A friendly ping in the comment thread to the submitter or a contributor can help draw attention if your issue is blocking.

### Issues

Issues should be used to report problems with the library, request a new feature, or to discuss potential changes before a PR is created. When you create a new Issue, a template will be loaded that will guide you through collecting and providing the information we need to investigate.

If you find an Issue that addresses the problem you're having, please add your own reproduction information to the existing issue rather than creating a new one. Adding a [reaction](https://github.blog/2016-03-10-add-reactions-to-pull-requests-issues-and-comments/) can also help be indicating to our maintainers that a particular problem is affecting more than just the reporter.

### Pull Requests

PRs to OrganicFlow are always welcome and can be a quick way to get your fix or improvement slated for the next release. In general, PRs should:

1. Only fix/add the functionality in question OR address wide-spread whitespace/style issues, not both.
2. Add unit or integration tests for fixed or changed functionality (if a test suite already exists).
3. Address a single concern in the least number of changed lines as possible.
4. Include documentation in the repo or on our [docs site](https://blueconvergence.se).
5. Be accompanied by a complete Pull Request template (loaded automatically when a PR is created).

For changes that address core functionality or would require breaking changes (e.g. a major release), it's best to open an Issue to discuss your proposal first. This is not required but can save time creating and reviewing changes.

In general, we follow the ["fork-and-pull" Git workflow](https://github.com/susam/gitpr)

1. Fork the repository to your own Github account
2. Clone the project to your machine
3. Create a branch locally with a succinct but descriptive name
4. Commit changes to the branch
5. Following any formatting and testing guidelines specific to this repo
6. Push changes to your fork
7. Open a PR in our repository and follow the PR template so that we can efficiently review the changes.

## Coding Guidelines

To ensure consistency throughout the source code, keep these rules in mind as you are working:

1. All features or bug fixes **must be tested** by one or more specs (unit-tests).
2. We follow [Airbnb's JavaScript Style Guide](https://github.com/airbnb/javascript) with some modifications.
   - Use 2 spaces for indentation.
   - Prefer single quotes for strings.
   - Use semicolons at the end of each statement.
3. For React components, follow the [React Hooks guidelines](https://reactjs.org/docs/hooks-rules.html).
4. Use TypeScript for type checking and documentation.

## Commit Message Guidelines

We have very precise rules over how our git commit messages can be formatted. This leads to **more readable messages** that are easy to follow when looking through the **project history**.

### Commit Message Format
Each commit message consists of a **header**, a **body** and a **footer**. The header has a special format that includes a **type**, a **scope** and a **subject**:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The **header** is mandatory and the **scope** of the header is optional.

### Type
Must be one of the following:

* **feat**: A new feature
* **fix**: A bug fix
* **docs**: Documentation only changes
* **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
* **refactor**: A code change that neither fixes a bug nor adds a feature
* **perf**: A code change that improves performance
* **test**: Adding missing tests or correcting existing tests
* **chore**: Changes to the build process or auxiliary tools and libraries such as documentation generation

## Testing

We use Jest for unit testing and Cypress for end-to-end testing. Please make sure to write tests for new features or fixes. Run the test suite with:

```
yarn test
```

## Documentation

Documentation is a crucial part of this project. Please make sure to update the documentation when you change or add features.

## Community

Discussions about OrganicFlow take place on this repository's [Issues](https://github.com/cardonaarchitecture/organicflow/issues) and [Pull Requests](https://github.com/cardonaarchitecture/organicflow/pulls) sections. Anybody is welcome to join these conversations.

Wherever possible, do not take these conversations to private channels, including contacting the maintainers directly. Keeping communication public means everybody can benefit and learn from the conversation.
