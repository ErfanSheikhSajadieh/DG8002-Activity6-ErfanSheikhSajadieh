# The Painter of Forgotten Worlds

Erfan Sheikh Sajadieh · DG8002 – Digital Media Environments · Activity 8 Interactive Edition (built on Activities 6 and 7)

A two-page fictional self-portrait: Erfan is a painter who can enter forgotten worlds through his canvases. The visual direction combines Persian architecture with a melancholic dark-fantasy atmosphere.

## Activity 8 Interactive Edition

The homepage has a visitor's field desk with a guestbook greeting and five random facts about Erfan. The greeting rejects blank names and displays its result directly on the page. The fact button updates the text and avoids repeating the currently displayed fact. The theme button shows a sun in dark mode and a moon in light mode. It works on both pages and saves the preference when browser storage is available.

Both pages load the shared `script.js` with `defer`. The interactions use DOM selectors, `textContent`, `classList`, and click and submit event listeners. The greeting and fact generator update the page without reloading it.

## Activity 7 Update

After going through the Week 7 lecture and slides, I used what I learned about CSS to guide the redesign of my Activity 6 website. This time, I chose the colour palette myself and made the design decisions for both pages. I wanted the cards to have rounded corners and subtle gold details, and I wanted the opening images to fade into the page background. I also asked for a gentle scroll effect so the sections would appear more naturally as you move down the page.

The update uses a shared stylesheet, element, class, and ID selectors, Flexbox, and media queries. I directed the redesign and used AI assistance to implement the changes in the code.

### What changed for Activity 7

| Area | Update |
| --- | --- |
| Shared CSS | Both HTML pages load the same external stylesheet. |
| CSS selectors | Element selectors style headings and links, reusable classes such as `.section` and `.eyebrow` keep the pages consistent, and `#origin` adds space above the story when following its anchor link. |
| Colour palette | I chose `#37848C`, `#D5C3A1`, `#23333A`, `#E9E4DD`, and `#AA8C64` for the backgrounds, text, buttons, and accents. |
| Cards and image frames | Skills and archive facts have flat navy backgrounds, rounded corners, and gold details. The character panel has its own border and spacing, and the portrait has an arched frame. |
| Opening sections | Both pages place the image beside the heading on desktop. The image fades into the page background, and the section can grow with its content so the button stays inside it. |
| Flexbox and responsive layout | The navigation and skills cards use Flexbox. Media queries stack the cards on phones, scale headings, and adjust the opening layout for smaller screens. |
| Scroll effect | Sections gently rise and become clearer as they enter the viewport in supported browsers. The effect respects reduced-motion preferences. |
| Publication | Both pages were published from the existing repository and checked for the updated shared stylesheet. |

## Files

- `index.html`: introduction, origin story, three skills, and an illustrated section introducing Leo.
- `classified.html`: three fun facts, an ordered survival guide, weaknesses, and future ambitions.
- `style.css`: shared stylesheet for both pages, including responsive layouts.
- `script.js`: shared theme toggle and homepage visitor interactions.
- `images/`: nine local JPG assets, converted from the supplied images for smaller downloads.

## Open locally

Extract the complete ZIP first. Open `index.html` in a browser. Keep `classified.html`, `style.css`, `script.js`, and `images/` beside it. No installation, framework, account, or build command is needed.

## HTML concepts used

Both pages use `<!DOCTYPE html>`, `<html lang="en">`, `<head>`, character encoding, viewport metadata, a title, and a `<body>`.

- `<header>` contains site identity; `<nav>` contains navigation.
- `<main>` contains the primary page content.
- `<section>` groups each topic; headings follow an h1/h2/h3 hierarchy.
- `<p>` contains paragraphs.
- `<ul>` presents skills and fun facts; `<ol>` numbers the survival guide.
- `<div class="character-details">` groups related character information on the homepage. Other divs group hero content and related text.
- `<img src="..." alt="...">` loads local images with descriptive alternative text. The decorative ornament deliberately has empty alt text so screen readers skip it.
- `<a href="...">` connects the two pages, links to sections, and links to relevant museum artwork records.
- `<footer>` contains project identification and another route to the other page.

The HTML contains all the content and navigation. Removing the stylesheet leaves both pages readable and navigable. CSS controls colour, type, spacing, image placement, and layouts at narrower widths.

## GitHub Pages and submission

Activity 8 continues the same public repository used for Activities 6 and 7. For D2L, submit the [public GitHub repository](https://github.com/ErfanSheikhSajadieh/DG8002-Activity6-ErfanSheikhSajadieh) and the [published website](https://erfansheikhsajadieh.github.io/DG8002-Activity6-ErfanSheikhSajadieh/). The second page is available through [Classified Archive](https://erfansheikhsajadieh.github.io/DG8002-Activity6-ErfanSheikhSajadieh/classified.html).

## Activity 6 foundation

| Requirement | Location |
| --- | --- |
| Homepage introduction | index.html, “Meet the painter” |
| Origin story | index.html, “Origin story” |
| At least three skills | index.html, “Skills and abilities” |
| Three fun facts | classified.html, “Three curious facts” |
| Ordered survival guide | classified.html, “A survival guide for working with me” |
| Weaknesses | classified.html, “Known weaknesses” |
| Future ambitions | classified.html, “Future ambitions” |
| Semantic HTML and a grouping div | Both pages; character-details div on homepage |
| At least two images and alt attributes | Both pages |
| Navigation between pages | Header, footer, and content links |
| Relevant external hyperlink | Met artwork records on both pages |
| Public repository and live website | Published on GitHub Pages |

## Images and inspiration

I designed and painted the environmental illustrations and decorative artwork specifically for this website. The visual direction combines Iranian architecture with the atmosphere of *Clair Obscur: Expedition 33* and *Elden Ring*.

| Image | Purpose in the website |
| --- | --- |
| `portrait.jpg` | Introduces me as the fictional painter. |
| `leo.jpg` | Presents Leo as the guardian who guides the painter home. |
| `kingdom.jpg` | Establishes the forgotten Persian kingdom. |
| `origin.jpg` | Illustrates the first painted gateway in the origin story. |
| `atelier.jpg` | Shows the painter's secret workshop. |
| `pigment.jpg` | Represents the painter's powers and the cost of losing memories. |
| `garden.jpg` | Represents the destination and hope of restoring a forgotten world. |
| `background.jpg` | Provides an atmospheric backdrop for the pages. |
| `ornament.jpg` | Separates sections with Persian-inspired decoration. |

## AI Clarification

I used the course lectures and recordings while developing this assignment and contributed the visual direction and supplied illustrations. AI assisted with the website’s layout and logic, including the Activity 8 JavaScript implementation, and generated the fantasy portraits of me and Leo from real photographs.

External links lead to The Metropolitan Museum of Art’s records for *The Lovers* and *Laila and Majnun*; no museum images are embedded.

## Verification performed

- Both pages opened and their navigation was exercised in Chrome.
- Desktop presentation and both hero layouts at a 390-pixel frame width were visually inspected.
- All local image, stylesheet, navigation, and section-anchor targets were checked against the files.
- Required semantic elements and descriptive image alt attributes were checked.
- Both external artwork pages were retrieved successfully during preparation.
- Both published pages were checked for the updated shared stylesheet.
