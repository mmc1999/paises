# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)


**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode *(optional)*

### Screenshot

![](./cap.png)



### Links


- Live Site URL: [Add live site URL here](https://hungry-lovelace-a749df.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [javascript](https://javascript.org/) - JS 



### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:


```js
divDark.addEventListener('click', (e) => {
    document.body.classList.toggle("modoDark")
    main.classList.toggle("modoDark")
    $claseParaLosP.classList.add("modoDark")
    if(document.querySelector(".parrafoDark").textContent == "🌙 Dark mode") {
        document.querySelector(".parrafoDark").textContent = "☀️ ligth Mode"; 
    }else {
        document.querySelector(".parrafoDark").textContent = "🌙 Dark mode" 
    }
})

```


