# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./final/screencapture-localhost-5175-2023-12-22-15_15_59.png)
![](./final/screencapture-localhost-5175-2023-12-22-15_18_37.png)

### Links

## My process

### Built with

- Scss
- [React](https://reactjs.org/) - JS library

### What I learned

```scss
@mixin mobile {
  @media (max-width: 738px) {
    @content;
  }
}
```

```react
 onClick={() => setActiveId(activeId === faqs.id ? null : faqs.id)}
```

### Continued development

The media query on Scss and useState on react.

### Useful resources

None

## Author

- Website - [My Resume](https://rcp-portfolio.vercel.app/)
- Frontend Mentor - [@bbenbboy](https://www.frontendmentor.io/profile/bbenbboy)

## Acknowledgments

None
