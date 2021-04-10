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

The homepage is divided into three areas: (1) featured, (2) custom sectinons, and (3) latest.

**Featured** posts are designated by the author in the Ghost editor. If you want to highlight content, this is the place to do it. The theme will show up to three of the newest featured posts. In the customizer, you have the option to omit the featured section altogether.

**Custom sections** are up to three categories of your choice. These sections contain the five latest posts tagged with that category that are not featured. For example, if you had a music blog, your sections might be "Music News," "Album Reviews," and "New Releases." Any posts tagged with these categories would be collected in these sections. You can turn off this function if you wish.

The customizer has a few presets available of possible categories: Academic, Music, Blog, Food, Developer, Designer.

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

- Twitter
- Facebook
- LinkedIn
- Github
- Gitlab
- Instagram
- Academia
- Twitch
- YouTube
- RSS
- Website (for a global icon)

Don't see your social media service? Get in touch.

### Add a Tags Page

### Add a Contact Form

### Supported Browsers

This theme supports the last 2 versions of browsers. It does not support IE.
