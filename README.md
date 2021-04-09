# Smart: A Ghost Theme

Smart is a theme for the open-source CMS, [Ghost](https://ghost.org/). It is compatible with >=Ghost v4.

For instructions on how to install or use Ghost, see the [official documentation](https://ghost.org/help/).

## Download and Install
By default, this theme uses Ghost's Portal system for memberships. If you are not interested in using the membership functionality, download the no-membership release.
## How to Use This Theme
The instructions below explain features included with this theme that build on Ghost's functionality. 

### Configure Your Site
- If you're using the membership functionality, it's recommended that you disable the Portal button, as it clashes witht the bottom share bar on mobile. 
- This theme includes a dark and light mode. It will automatically switch depending on the user's preference, as set in their system or on your site. Unfortunately, Ghost does not support custom theming for their portal UI (which will appear with a white background even when dark mode is active). Therefore, it is recommended that you choose a dark color for your accent color. 
### Customize Your Homepage

Customize your homepage with sections of your choosing by using the customization form. For instance, if you're a coder, you might create sections for Projects, Tutorials, Tools, etc. If you write about music, you could include sections for Reviews, Features, News, etc.

### Add Search

To enable search, go to your Ghost admin dashboard (https://yoursite.com/ghost). In the sidebar, go to Integrations and click "Add Custom Integration." Call it "search" (the name's not important). Copy your Content API key. Click the cogwheel to go to Settings. Go to Code injection. Add the following code to your site header (case-sensitive):

```javascript
<script>const SEARCH_API = 'THE CONTENT API KEY YOU COPIED EARLIER';</script>
```

Reload your site. A search icon should now appear.

### Add Social Media Icons to Your Footer

### Add a Tags Page

### Add a Contact Form

### Supported Browsers
This theme supports the last 2 versions of browsers. It does not support IE.