# Smart: A Ghost Theme

Smart is a theme for the open-source CMS, [Ghost](https://ghost.org/). It is compatible with >=Ghost v4.

For instructions on how to install or use Ghost, see the [official documentation](https://ghost.org/help/).

## Download and Install

There are two versions of this theme: (1) memberships and (2) without memberships. For either versions, it is recommended that you use the [customizer](#) to generate a [customized homepage](#customize-your-homepage).

## How to Use This Theme

The instructions below explain features included with this theme that build on Ghost's functionality.

### Configure Your Site

- If you're using the membership functionality, it's recommended that you disable the Portal button, as it clashes with the bottom share bar on mobile.
- This theme includes a dark and light mode. It will automatically switch depending on the user's preference, as set either in their system or on your site. Currently, Ghost does not support custom theming for their portal UI (which will appear with a white background even when dark mode is active). Therefore, it is recommended that you choose a dark color for your accent color.

### Customize Your Theme

There are three customizable options:

1. Custom homepage sections
2. Dark or light mode default
3. Color theme

#### Custom homepage sections

The homepage is divided into three areas: (1) featured, (2) custom sections, and (3) latest.

**Featured** posts are designated by the author in the Ghost editor. If you want to highlight content, this is the place to do it. The theme will show up to three of the newest featured posts. In the customizer, you have the option to omit the featured section altogether.

**Custom sections** are up to four categories of your choice. These sections contain the five latest posts tagged with that category that are not featured. For example, if you had a music blog, your sections might be "Music News," "Album Reviews," and "New Releases." Any posts tagged with these categories would be collected in these sections. You can turn off this function if you wish.

The customizer has a few presets available of possible categories:

| Preset    | Tag 1        | Tag 2         | Tag 3       | Tag 4    |
| --------- | ------------ | ------------- | ----------- | -------- |
| Academic  | Publications | Presentations | Teaching    | Outreach |
| Music     | News         | Reviews       | Playlists   | Etc      |
| Blog      | Travel       | Reviews       | Series      | ETc      |
| Food      | Recipes      | Reviews       | Ingredients | Tools    |
| Developer | Portfolio    | Tutorials     | Tools       | Etc      |
| Designer  | Portfolio    | Designs       | Art         | Tools    |

**Latest** refers to the five newest published posts that are neither featured nor included in one of your custom sections. The customizer allows you turn off the latest section if you wish.

#### Dark or light mode default

The customizer allows you to choose whether you want your theme to default to dark or light mode.

#### Color theme

...TBA

### Add Search

To enable search, go to your Ghost admin dashboard (https://yoursite.com/ghost). In the sidebar, go to Integrations and click "Add Custom Integration." Call it "search" (the name's not important). Copy your Content API key. Click the cogwheel ⚙️ to go to Settings. Go to Code injection. Add the following code to your site header (case sensitive):

```javascript
<script>const SEARCH_API = 'THE CONTENT API KEY YOU COPIED EARLIER';</script>
```

Save the code and refresh your site. A search icon should now appear.

### Add Social Media Icons to Your Footer

Go to Settings > Navigation. Add additional social media accounts in the Secondary Navigation section. In the fields on the left side, enter the name of the social media service. The social media service name must match the name listed below. On the right side, enter the URL to your social media profile.

#### Supported Social Media Accounts

- Academia
- Facebook
- Github
- Gitlab
- Instagram
- LinkedIn
- RSS
- Twitch
- Twitter
- Website (for a global icon)
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

### Supported Browsers

This theme supports the last 2 versions of browsers. It does not support IE.
