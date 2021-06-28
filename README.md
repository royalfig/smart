# Smart: A Ghost Theme

Smart is a theme for the open-source CMS, [Ghost](https://ghost.org/). It is compatible with >=Ghost v4.

For instructions on how to install or use Ghost, see the [official documentation](https://ghost.org/help/).

## Demo

[See the theme in action](https://demo.ryanfeigenbaum.com). Screenshots available below.

## Download and Install

[Download `Smart.zip` from the Releases page](https://github.com/royalfig/smart/releases)

## How to Use This Theme

The instructions below explain features included with this theme that build on Ghost's functionality.

Out of the box, this theme offers the following features:

1. Performance & accessibility (a11y) forward
2. Responsive design
3. Search
4. Image zoom on posts
5. Responsive tables on posts
6. Lazy loaded images
7. Share bar with ability to copy URL to clipboard
8. Contact form (with Formspree)
9. Easy to remove membership functionality
10. Add extra social media accounts via the second navigation bar
11. Custom tags page
12. Dark mode toggle

### Configure Your Site

- If you're using the membership functionality, it's recommended that you disable the Portal button, as it clashes with the bottom share bar on mobile.
- This theme includes a dark and light mode. It will automatically switch depending on the user's preference, as set either in their system or on your site. Currently, Ghost does not support custom theming for their portal UI (which will appear with a white background even when dark mode is active). Therefore, it is recommended that you choose a dark color for your accent color.

### Add Search

To enable search, go to your Ghost admin dashboard ("https://yoursite.com/ghost"). In the sidebar, go to Integrations and click "Add Custom Integration." Call it "search" (the name's not important). Copy your Content API key. Click the cogwheel ⚙️ to go to Settings. Go to Code injection. Add the following code to your site header (case sensitive):

```javascript
<script>const SEARCH_API = 'THE CONTENT API KEY YOU COPIED EARLIER';</script>
```

Save the code and refresh your site. A search icon should now appear.

### Add Social Media Icons to Your Footer

Go to Settings > Navigation. Add additional social media accounts in the Secondary Navigation section. In the fields on the left side, enter the name of the social media service. The social media service name must match the name listed below. On the right side, enter the URL to your social media profile.

#### Supported Social Media Accounts

- Facebook
- Github
- Gitlab
- Instagram
- LinkedIn
- RSS
- Twitch
- Twitter
- Website (globe icon suitable for representing sources not shown here)
- YouTube

Don't see your social media service? Get in touch.

### Add a Tags Page

Go to `Pages`. Add a page called "Tags." You can add a custom cover image and additional text if desired. Ghost will use the custom template to render all your tags in alphabetical order, showing the number of posts for each tag. Tag information is customizable via the `Tags` menu in the Ghost admin.

[Learn more about Tags](https://ghost.org/help/organising-content/#tagging-content)

### Add a Contact Form

1. Create a [Formspree account](https://formspree.io/)
   Ghost doesn't support forms natively. Including a contact form requires the use of a service like Formspree. Once you create your form on Formspree, copy the custom URL for use in step three.

2. Create a new page for the contact form. You can call it whatever you want.

3. Add an HTML card to the new page, using the code below. Remember to add the custom URL you copied from Formspree.

```html
<form
  class="sm-form"
  action="ENTER YOUR CUSTOME URL FROM FORMSPREE"
  method="POST"
>
  <label class="sm-form__label" for="name">Name</label>
  <input
    class="sm-form__input"
    id="name"
    name="name"
    type="text"
    required
    autofocus
  />

  <label class="sm-form__label" for="email">Email</label>
  <input class="sm-form__input" id="email" name="email" type="text" required />

  <label class="sm-form__label" for="message">Message</label>
  <textarea
    class="sm-form__input"
    id="message"
    name="message"
    required
  ></textarea>

  <button class="sm-button--color" type="submit" value="Send">Send</button>
</form>
```

[Learn more about integrating Formspree into Ghost](https://ghost.org/integrations/formspree/)

### Remove Membership

Remove Sign Up and Sign In buttons by adding this code to your Site Footer. This option is accessible via `Settings` > `Code injection`

```js
<script>
    function removeMembership() {
        const memberElements = document.querySelectorAll(".sm-members");
        memberElements.forEach(el => el.remove())
    }

    removeMembership()
</script>
```

### Supported Browsers

This theme supports the last 2 versions of browsers. It does not actively support IE.

## Screenshots

<p align="center">
  <img src="assets/screenshot-desktop.png">
</p>

Standard Dark Theme

<br>

<p align="center">
  <img src="assets/screenshot-dracula.png">
</p>

Dracula Dark Theme
