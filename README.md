# The Painter of Forgotten Worlds

Erfan Sheikh Sajadieh · DG8002 – Digital Media Environments · Activity 6

A two-page fictional self-portrait: Erfan is a painter who can enter forgotten worlds through his canvases. The visual direction combines Persian architecture with a melancholic dark-fantasy atmosphere.

## Files

- `index.html`: introduction, origin story, three skills, and an illustrated section introducing Leo.
- `classified.html`: three fun facts, an ordered survival guide, weaknesses, and future ambitions.
- `style.css`: optional visual styling and responsive layouts.
- `images/`: nine local JPG assets, converted from the supplied images for smaller downloads.
- `START_HERE_FA.md`: Persian instructions for preview, publishing, and submission.

## Open locally

Extract the complete ZIP first. Open `index.html` in a browser. Keep `classified.html`, `style.css`, and `images/` beside it. No installation, JavaScript, framework, account, or build command is needed to view the local site.

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

The HTML contains all the content and navigation. Removing the stylesheet leaves both pages readable and navigable. CSS controls colour, type, spacing, image placement, and layouts at narrower widths. No JavaScript is used.

## Publish on GitHub Pages

1. Create a **public** repository. Suggested name: `DG8002-Activity6-ErfanSheikhSajadieh`.
2. Upload these extracted contents to the repository root: `index.html`, `classified.html`, `style.css`, `images/`, and the Markdown files. Upload the actual files, not the ZIP or a single extra enclosing folder.
3. Commit the upload.
4. Go to **Settings → Pages**. Choose **Deploy from a branch**, then the branch containing your files (normally `main`) and **/(root)**. Save.
5. Wait for deployment. Use the published website link shown by GitHub Pages; do not submit a guessed URL.
6. Visit both live pages. Check both navigation directions, every image, and the external museum links.
7. Submit the public repository URL and the published website URL to D2L before the next class, as instructed by the assignment.

Publishing has not been completed as part of this package. A local preview is not a GitHub Pages deployment.

## Assignment coverage

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
| Public repository and live website | Remaining publication step |

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

I referred to the course lectures and recordings as much as I could while working on this assignment. I developed the project's visual direction and supplied the illustrations described above.

The fantasy portraits of me and Leo are AI-generated reinterpretations based on real photographs of us. AI assistance was also used to generate the website's HTML and CSS and to help with colours, spacing, image placement, and responsive layout. The final package therefore includes AI-assisted code alongside my artistic contribution. I include this clarification so that the use of AI in the project is transparent.

The external links point to The Metropolitan Museum of Art's records for *The Lovers* and *Laila and Majnun*. Museum images are not embedded in this project.

## Verification performed

- Both pages opened and their navigation was exercised in Chrome.
- Desktop presentation and both hero layouts at a 390-pixel frame width were visually inspected.
- All local image, stylesheet, navigation, and section-anchor targets were checked against the files.
- Required semantic elements and descriptive image alt attributes were checked.
- Both external artwork pages were retrieved successfully during preparation.
- Live GitHub Pages verification remains pending until publication.
