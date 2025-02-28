# README

## Post Style Guide

This guide outlines the style for posts in this repository. The design is simple and utilizes a custom `styles.css` file for styling.

### Design Reference

Refer to `index.html` for an example of the design.

### Style Guidelines

- **Font**: Use a clean, sans-serif font.
- **Colors**: Stick to a minimal color palette.
- **Spacing**: Ensure ample spacing between elements for readability.
- **Headings**: Use CSS classes for heading sizes.
- **Links**: Style links with CSS classes to make them stand out.
- **Images**: Center images and add a small margin.

### Tone Guidelines

All content for posts should be simple, direct, and based. Write as if you are communicating straightforwardly and clearly, avoiding unnecessary complexity.

### Instructions for AI Prompts

When suggesting changes or additions to HTML files, ensure that the reusable classes from the `styles.css` file are used. This will maintain consistency across all posts and pages.

### Example

Here is a basic example of a post:

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Will Roscoe</title>
        <link rel="stylesheet" href="styles.css" />
    </head>
    <body>
        <header>
            <div>
                <h1 class="font-bold text-2xl">Post Title</h1>
                <p class="mb-4">This is an example of a simple post using custom CSS for styling. Follow the guidelines to maintain consistency across all posts.</p>
                <a href="#" class="text-blue-500 underline">Read more</a>
            </div>
        </header>
    </body>
</html>
```

### Conclusion

Keep the design simple and clean, using the custom `styles.css` file to ensure consistency. Refer to `index.html` for a detailed example.