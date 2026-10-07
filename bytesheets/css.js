return [
  {
    id: "introduction",
    description:
      "Master CSS from scratch with our comprehensive online course! Learn everything you need to know about Cascading Style Sheets (CSS), including selectors, properties, layout techniques, responsive design, Flexbox, Grid, animations, and best practices. Get hands-on experience with practical exercises and projects, guiding you from beginner to expert level. Perfect for beginners, developers, designers, and anyone looking to style websites and create stunning user interfaces. Enroll now to unlock your potential and start building professional-quality websites with CSS today!",
    keywords:
      "CSS, Cascading Style Sheets, web development, online course, beginner, selectors, properties, layout, responsive design, Flexbox, Grid, animations, bytesheets, bytes css course, bytes, css course, css selectors, css media queries",
    course: "CSS",
    title: "Introduction to CSS",
    about: `<div>
  <h2 style="color: #3498db; margin-bottom: 8px;">Introduction to CSS</h2>
  <p>CSS, short for Cascading Style Sheets, is a style sheet language used to control the presentation and layout of HTML documents. It allows web developers to style elements on a webpage, defining how they should appear to users.</p>
</div>
<div>
  <h2 style="color: #2ecc71; margin-bottom: 8px;">What is CSS?</h2>
  <p>CSS describes how HTML elements should be displayed on screen, in print, or spoken by a screen reader. It allows for the separation of content and presentation, enabling developers to style the appearance of web pages independently from their structure.</p>
</div>
<div>
  <h2 style="color: #e74c3c; margin-bottom: 8px;">Why CSS is Used?</h2>
  <p>CSS is used to enhance the visual presentation of web pages, making them more engaging and user-friendly. It allows developers to control aspects such as layout, colors, fonts, spacing, and responsiveness, leading to a better user experience.</p>
</div>
<div>
  <h2 style="color: #9b59b6; margin-bottom: 8px;">CSS Versions and Evolution</h2>
  <p>CSS has evolved over time with various versions and specifications. The latest major version is CSS3, which introduced many new features and enhancements over its predecessors. CSS is continually evolving, with new modules and updates being developed to address the needs of modern web development.</p>
</div>`,
    contents: [
      {
        id: "introduction_1",
        title: "Introduction to CSS",
        about: `<div>
  <h2 style="color: #3498db; margin-bottom: 8px;">Core Concepts of CSS</h2>
  <p>CSS works by targeting HTML elements and applying styling rules to them. A CSS rule consists of a selector and a declaration block specifying properties and values.</p>
  <ul>
    <li><strong>Separation of Concerns:</strong> Keeps structural markup clean while centralizing design styles.</li>
    <li><strong>Consistency:</strong> Style once and apply universally across hundreds of pages.</li>
    <li><strong>Maintainability:</strong> Easy updating of visual themes from a central style definition.</li>
  </ul>
</div>`,
      },
      {
        id: "introduction_2",
        title: "CSS Types",
        about: `<div>
  <h2 style="color: #3498db; margin-bottom: 8px;">CSS Types: Inline, Internal, and External Styles</h2>
  <p>This example demonstrates different ways to apply CSS styles: inline, internal, and external stylesheets.</p>
  <div>
    <h3 style="color: #f39c12; margin-top: 16px;">Inline Styles</h3>
    <p>Inline styles are applied directly to HTML elements using the style attribute.</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 12px; border-radius: 6px;"><code>&lt;div style="background-color: #f39c12; color: #fff; padding: 10px;"&gt;This is a box with inline styles&lt;/div&gt;</code></pre>
    <div style="background-color: #f39c12; color: #fff; padding: 10px; border-radius: 4px; margin-bottom: 16px;">This is a box with inline styles</div>

    <h3 style="color: #0074d9; margin-top: 16px;">Internal Styles</h3>
    <p>Internal styles are defined within the <code>&lt;style&gt;</code> element in the HTML document.</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 12px; border-radius: 6px;"><code>&lt;style&gt;
  .internal-style-box {
    background-color: #0074d9;
    color: #fff;
    padding: 10px;
  }
&lt;/style&gt;</code></pre>

    <h3 style="color: #2ecc71; margin-top: 16px;">External Styles</h3>
    <p>External styles are defined in separate CSS files and linked to the HTML document using the <code>&lt;link&gt;</code> element.</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 12px; border-radius: 6px;"><code>&lt;link rel="stylesheet" href="styles.css"&gt;</code></pre>
  </div>
  <h3 style="color: #3498db; margin-top: 16px;">Explanation:</h3>
  <ul>
    <li>Inline styles are applied directly to HTML elements using the style attribute.</li>
    <li>Internal styles are defined within the <code>&lt;style&gt;</code> element in the HTML document.</li>
    <li>External styles are defined in separate CSS files and linked to the HTML document using the <code>&lt;link&gt;</code> element.</li>
  </ul>
</div>`,
      },
    ],
  },
  {
    id: "basicCSSSyntax",
    title: "Basic CSS Syntax",
    about: `<div>
  <h2 style="color: #3498db; margin-bottom: 8px;">CSS Rule Structure</h2>
  <p>A CSS rule set consists of a <strong>selector</strong> and a <strong>declaration block</strong>. Each declaration includes a property name and a value separated by a colon, ending with a semicolon.</p>
  
  <pre style="background: #272822; color: #f8f8f2; padding: 12px; border-radius: 6px;"><code><span style="color: #66d9ef;">h1</span> {
  <span style="color: #f92672;">color</span>: <span style="color: #ae81ff;">#0074d9</span>;
  <span style="color: #f92672;">font-size</span>: <span style="color: #ae81ff;">24px</span>;
}</code></pre>
</div>

<div>
  <h2 style="color: #2ecc71; margin-bottom: 8px;">CSS Comments</h2>
  <p>Comments document code intent and are ignored by browser rendering engines. CSS supports multi-line comment syntax using <code>/* comment */</code>.</p>
  
  <pre style="background: #272822; color: #f8f8f2; padding: 12px; border-radius: 6px;"><code><span style="color: #75715e;">/* Primary header styles */</span>
<span style="color: #66d9ef;">p</span> {
  <span style="color: #f92672;">color</span>: <span style="color: #e6db74;">red</span>; <span style="color: #75715e;">/* Inline explanation */</span>
}</code></pre>
</div>

<div>
  <h2 style="color: #e74c3c; margin-bottom: 8px;">Core CSS Selectors</h2>
  <p>Selectors specify which HTML elements should receive style rules.</p>
  <ul>
    <li><strong>Type Selector:</strong> Targets tags by name (e.g., <code>p</code>, <code>h1</code>).</li>
    <li><strong>Class Selector:</strong> Targets elements with a class attribute (prefix with <code>.</code>).</li>
    <li><strong>ID Selector:</strong> Targets a unique element by ID (prefix with <code>#</code>).</li>
    <li><strong>Universal Selector:</strong> Targets all elements on the page (<code>*</code>).</li>
    <li><strong>Attribute Selector:</strong> Targets elements based on attribute presence or value.</li>
  </ul>

  <pre style="background: #272822; color: #f8f8f2; padding: 12px; border-radius: 6px;"><code><span style="color: #75715e;">/* Type Selector */</span>
<span style="color: #66d9ef;">p</span> { <span style="color: #f92672;">color</span>: <span style="color: #ae81ff;">blue</span>; }

<span style="color: #75715e;">/* Class Selector */</span>
<span style="color: #a6e22e;">.highlight</span> { <span style="color: #f92672;">background-color</span>: <span style="color: #ae81ff;">#ffd28a</span>; }

<span style="color: #75715e;">/* ID Selector */</span>
<span style="color: #a6e22e;">#header</span> { <span style="color: #f92672;">font-size</span>: <span style="color: #ae81ff;">28px</span>; }

<span style="color: #75715e;">/* Universal Selector */</span>
<span style="color: #66d9ef;">*</span> { <span style="color: #f92672;">box-sizing</span>: <span style="color: #ae81ff;">border-box</span>; }

<span style="color: #75715e;">/* Attribute Selector */</span>
<span style="color: #66d9ef;">input</span>[<span style="color: #a6e22e;">type</span>=<span style="color: #e6db74;">"text"</span>] { <span style="color: #f92672;">border</span>: <span style="color: #ae81ff;">1px solid #ccc</span>; }</code></pre>
</div>`,
    contents: [
      {
        id: "basicCSSSyntax",
        title: "Explore Basic CSS Syntax",
      },
    ],
  },
  {
    id: "boxModel",
    title: "CSS Box Model",
    about: `<div>
  <h2 style="color: #3498db; margin-bottom: 8px;">Understanding the Box Model</h2>
  <p>In CSS, every HTML element is represented as a rectangular box. The Box Model consists of four concentric layers:</p>
  <ul>
    <li><strong>Content:</strong> The innermost area containing text, images, or child elements.</li>
    <li><strong>Padding:</strong> Clear space surrounding content inside the border.</li>
    <li><strong>Border:</strong> A solid, dashed, or dotted line surrounding padding and content.</li>
    <li><strong>Margin:</strong> Space outside the border, creating distance from neighboring elements.</li>
  </ul>
</div>

<div>
  <h2 style="color: #e74c3c; margin-bottom: 8px;">Box Sizing: content-box vs. border-box</h2>
  <p>The <code>box-sizing</code> property determines how width and height calculations occur:</p>
  <ul>
    <li><strong>content-box (default):</strong> Total width = declared width + padding + border. Extra padding increases element size.</li>
    <li><strong>border-box:</strong> Total width = declared width. Padding and border are absorbed inside the specified dimensions.</li>
  </ul>
  <pre style="background: #272822; color: #f8f8f2; padding: 12px; border-radius: 6px;"><code><span style="color: #75715e;">/* Best practice global box sizing reset */</span>
<span style="color: #66d9ef;">*</span>, <span style="color: #66d9ef;">*::before</span>, <span style="color: #66d9ef;">*::after</span> {
  <span style="color: #f92672;">box-sizing</span>: <span style="color: #ae81ff;">border-box</span>;
}</code></pre>
</div>

<div>
  <h2 style="color: #2ecc71; margin-bottom: 8px;">Margin Collapse</h2>
  <p>Vertical margins of adjacent elements often collapse into a single margin equal to the larger of the two margins. Understanding margin collapse prevents unexpected layout gaps.</p>
</div>`,
    contents: [
      {
        id: "boxModel_1",
        title: "Box Model Overview",
        images: [
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fcss%2Fbox%20model%2F3.png?alt=media&token=c200a54f-06ef-4b62-abb6-5025e1b82579",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fcss%2Fbox%20model%2F1.jpg?alt=media&token=51caf3fe-5b28-4a56-b086-5d709d8ec0c3",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fcss%2Fbox%20model%2F2.jpg?alt=media&token=8217ef3a-5094-4940-a960-71d6153f5db0",
        ],
      },
      {
        id: "boxModel_2",
        title: "Box Model Explanation",
        images: [
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fcss%2Fbox%20model%2Fexplanation%2F1.jpg?alt=media&token=ee386a2f-466e-40c1-805c-60b7a13531f1",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fcss%2Fbox%20model%2Fexplanation%2F2.jpg?alt=media&token=a751a07d-fcb3-4140-ab6b-8dede702495f",
        ],
      },
    ],
  },
  {
    id: "cssPropertiesAndValues",
    title: "CSS Properties and Values",
    about: `<div>
  <h2 style="color: #3498db; margin-bottom: 8px;">Core CSS Property Groups</h2>
  <p>CSS properties control formatting across various visual aspect domains:</p>
  <ul>
    <li><strong>Typography:</strong> <code>font-family</code>, <code>font-size</code>, <code>color</code>, <code>line-height</code>.</li>
    <li><strong>Backgrounds:</strong> <code>background-color</code>, <code>background-image</code>, <code>background-size</code>.</li>
    <li><strong>Borders & Radii:</strong> <code>border</code>, <code>border-radius</code>, <code>outline</code>.</li>
    <li><strong>Spacing:</strong> <code>margin</code>, <code>padding</code>, <code>gap</code>.</li>
    <li><strong>Sizing:</strong> <code>width</code>, <code>height</code>, <code>min-width</code>, <code>max-width</code>, <code>aspect-ratio</code>.</li>
  </ul>
</div>`,
    contents: [
      {
        id: "cssPropertiesAndValues_1",
        title: "Text Properties",
        about: `<div>
  <h2 style="color: #3498db; margin-bottom: 8px;">Essential Text Styling Properties</h2>
  
  <h3 style="color: #3498db; margin-top: 12px;">1. Color</h3>
  <p>Sets text color using named colors, Hexadecimal, RGB, HSL, or modern OKLCH formats.</p>
  <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 4px;"><code>.title { color: #3498db; }</code></pre>

  <h3 style="color: #3498db; margin-top: 12px;">2. Font Family & Size</h3>
  <p>Controls typeface selection and text dimensions.</p>
  <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 4px;"><code>.body-text {
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 1.125rem;
}</code></pre>

  <h3 style="color: #3498db; margin-top: 12px;">3. Font Weight & Style</h3>
  <p>Specifies font weight (e.g., <code>bold</code>, <code>400</code>, <code>700</code>) and style (e.g., <code>italic</code>).</p>

  <h3 style="color: #3498db; margin-top: 12px;">4. Text Alignment & Decoration</h3>
  <p>Aligns text (<code>left</code>, <code>center</code>, <code>right</code>, <code>justify</code>) and adds line decorations like underlines or strikeouts.</p>

  <h3 style="color: #3498db; margin-top: 12px;">5. Text Shadow</h3>
  <p>Adds drop-shadow effects behind rendered text glyphs.</p>
  <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 4px;"><code>.heading { text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); }</code></pre>
</div>`,
      },
      {
        id: "cssPropertiesAndValues_2",
        title: "Filter Property",
        images: [
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fcss%2Fproperties%2Ffilter%2F1.jpg?alt=media&token=5c04aef4-1a1c-4244-843a-13c81772b403",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fcss%2Fproperties%2Ffilter%2F2.jpg?alt=media&token=2fa0b20e-572f-48f8-8ca9-6764ad9d936a",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fcss%2Fproperties%2Ffilter%2F3.jpg?alt=media&token=698f55bd-160d-45c7-82f4-0d65b96e0af9",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fcss%2Fproperties%2Ffilter%2F4.jpg?alt=media&token=c5cf63dd-6131-4ed4-b959-a7d5d5510063",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fcss%2Fproperties%2Ffilter%2F5.jpg?alt=media&token=7befac1b-1365-4d5b-bfe7-9dc03480f70c",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fcss%2Fproperties%2Ffilter%2F6.jpg?alt=media&token=c2507411-23db-49eb-baca-0a239b8aa05b",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fcss%2Fproperties%2Ffilter%2F7.jpg?alt=media&token=8fe93e02-88f1-4c5b-8e59-c68545b5a5f1",
        ],
      },
      {
        id: "cssPropertiesAndValues_3",
        title: "Background Properties",
        about: `<div>
  <h2 style="color: #3498db; margin-bottom: 8px;">Comprehensive Background Styling</h2>

  <h3 style="color: #3498db; margin-top: 12px;">1. Background Image & Attachment</h3>
  <p>Determines background URL images and scrolling attachment behavior (<code>scroll</code> or <code>fixed</code>).</p>
  <div style="background-image: url('https://cdn.pixabay.com/photo/2023/12/26/10/34/hochkonig-8469932_640.jpg'); background-attachment: relative; background-size: cover; height: 140px; color: #fff; padding: 15px; border-radius: 6px; margin-bottom: 12px;">Fixed/Cover Background Preview</div>

  <h3 style="color: #3498db; margin-top: 12px;">2. Background Size & Position</h3>
  <p>Scales images using <code>cover</code>, <code>contain</code>, or custom values and positions them using alignment keywords or percentage values.</p>

  <h3 style="color: #3498db; margin-top: 12px;">3. Multiple Background Layers</h3>
  <p>CSS allows comma-separated multi-layered background images rendered in order from top to bottom layer.</p>
  <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 4px;"><code>.element {
  background: 
    url('overlay.png') center/cover no-repeat,
    url('background.jpg') center/cover no-repeat;
}</code></pre>
</div>`,
      },
      {
        id: "cssPropertiesAndValues_4",
        title: "Border Properties",
        about: `<div>
  <h2 style="color: #3498db; margin-bottom: 8px;">Border Properties and Shorthands</h2>
  
  <h3 style="color: #2ecc71; margin-top: 12px;">1. Border Shorthand Syntax</h3>
  <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 4px;"><code>border: [width] [style] [color];
/* Example */
border: 2px solid #e74c3c;</code></pre>

  <h3 style="color: #2ecc71; margin-top: 12px;">2. Border Radius</h3>
  <p>Rounds element corners. Standard value or 4-corner shorthand syntax:</p>
  <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 4px;"><code>border-radius: top-left top-right bottom-right bottom-left;</code></pre>

  <div style="display: flex; gap: 10px; margin-top: 15px;">
    <div style="background-color: #3498db; color: #fff; padding: 10px; border-radius: 0px;">0px Radius</div>
    <div style="background-color: #3498db; color: #fff; padding: 10px; border-radius: 10px;">10px Radius</div>
    <div style="background-color: #3498db; color: #fff; padding: 10px; border-radius: 20px;">20px Radius</div>
  </div>
</div>`,
      },
      {
        id: "cssPropertiesAndValues_5",
        title: "Margin & Padding",
        about: `<div>
  <h2 style="color: #3498db; margin-bottom: 8px;">Understanding Spacing Controls</h2>
  <p><strong>Margin:</strong> Space outside border.</p>
  <p><strong>Padding:</strong> Space inside border surrounding inner content.</p>

  <h3 style="color: #3498db; margin-top: 12px;">Shorthand Clockwise Syntax:</h3>
  <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 4px;"><code>/* 4 Values: top right bottom left */
margin: 10px 15px 10px 15px;

/* 2 Values: top/bottom left/right */
padding: 20px 10px;</code></pre>
</div>`,
      },
      {
        id: "cssPropertiesAndValues_6",
        title: "Dimension Properties",
        about: `<div>
  <h2 style="color: #3498db; margin-bottom: 8px;">Element Dimensions</h2>
  <p>Controls sizing restrictions and flexible responsiveness boundaries.</p>
  <ul>
    <li><code>width</code> & <code>height</code>: Strict dimensional values.</li>
    <li><code>min-width</code> & <code>min-height</code>: Guarantees element never shrinks smaller than specified boundary.</li>
    <li><code>max-width</code> & <code>max-height</code>: Guarantees element never exceeds maximum threshold.</li>
  </ul>
</div>`,
      },
      {
        id: "cssPropertiesAndValues_7",
        title: "Aspect Ratio",
        images: [
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fcss%2Fproperties%2Faspect%20ratio%2F1.jpg?alt=media&token=86e2a74c-ae58-4cfb-b181-f204354e4dee",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fcss%2Fproperties%2Faspect%20ratio%2F2.jpg?alt=media&token=e9c90b38-6486-4e65-b2ee-d127677f4b93",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fcss%2Fproperties%2Faspect%20ratio%2F3.jpg?alt=media&token=e7497cee-e34c-4d09-a1c2-574b88962184",
        ],
      },
    ],
  },
  {
    id: "position",
    title: "CSS Position Property",
    about: `<div>
  <h2 style="color: #3498db; margin-bottom: 8px;">CSS Positioning Schemes</h2>
  <p>The <code>position</code> property sets how an element is placed within the document layout flow.</p>

  <h3 style="color: #2ecc71; margin-top: 12px;">1. Static (Default)</h3>
  <p>Elements remain in normal document flow. Offset properties (<code>top</code>, <code>right</code>, <code>bottom</code>, <code>left</code>) are ignored.</p>

  <h3 style="color: #2ecc71; margin-top: 12px;">2. Relative</h3>
  <p>Element is offset relative to its normal flow position without affecting neighboring elements.</p>

  <h3 style="color: #2ecc71; margin-top: 12px;">3. Absolute</h3>
  <p>Removed from document flow and positioned relative to its nearest non-static positioned ancestor.</p>

  <h3 style="color: #2ecc71; margin-top: 12px;">4. Fixed</h3>
  <p>Positioned relative to the browser window viewport. Stays fixed during page scrolling.</p>

  <h3 style="color: #2ecc71; margin-top: 12px;">5. Sticky</h3>
  <p>Toggles between relative and fixed positioning depending on the scroll offset of the viewport container.</p>
</div>`,
    contents: [
      {
        id: "positions_1",
        title: "Position Overview",
      },
    ],
  },
  {
    id: "display",
    title: "Display Property",
    about: `<div>
  <h2 style="color: #3498db; margin-bottom: 8px;">Understanding Display Values</h2>
  <p>The <code>display</code> property determines how an element generates bounding layout boxes.</p>

  <ul>
    <li><strong>block:</strong> Starts on a new line, occupying full container width.</li>
    <li><strong>inline:</strong> Takes only content width and flows on the same line.</li>
    <li><strong>inline-block:</strong> Flows inline like text but accepts width, height, margin, and padding.</li>
    <li><strong>flex:</strong> Activates modern 1D flexbox layout engine.</li>
    <li><strong>grid:</strong> Activates 2D grid container system.</li>
    <li><strong>none:</strong> Removes element completely from rendering pipeline and layout flow.</li>
  </ul>
</div>`,
    contents: [
      {
        id: "display_1",
        title: "Display Overview",
        images: [
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fcss%2Fdisplay%2F1.jpg?alt=media&token=f38876fb-8d25-4386-bc38-ac0bc65ca25e",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fcss%2Fdisplay%2F2.jpg?alt=media&token=5acbeee9-7bcf-4bc1-841b-8718f0ad5a5b",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fcss%2Fdisplay%2F3.jpg?alt=media&token=1d651284-35ce-4cf8-85c4-012226ddb1a5",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fcss%2Fdisplay%2F4.jpg?alt=media&token=ab39fac5-8adc-4a2c-bfbc-8ea191d25926",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fcss%2Fdisplay%2F5.jpg?alt=media&token=99dc5e3d-88fc-463e-bf7d-6f38b0cd16dc",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fcss%2Fdisplay%2F6.jpg?alt=media&token=ade9f404-c5d6-424c-ab2c-110e27c15d8f",
        ],
      },
      {
        id: "display_2",
        title: "Difference Between Opacity, Visibility, and Display",
        images: [
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fcss%2Fdisplay%2Fdifference%20bw%20opacity%20visibility%20display%2F1.jpg?alt=media&token=729de219-4fae-45d5-ac93-aa8b11ccd5e9",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fcss%2Fdisplay%2Fdifference%20bw%20opacity%20visibility%20display%2F2.jpg?alt=media&token=5d31d2a6-ea79-4eab-b392-a7f2610a989c",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fcss%2Fdisplay%2Fdifference%20bw%20opacity%20visibility%20display%2F3.jpg?alt=media&token=a4fb1a9d-d75b-4e5e-9812-6221cc03bc2c",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fcss%2Fdisplay%2Fdifference%20bw%20opacity%20visibility%20display%2F4.jpg?alt=media&token=b07994de-8c7f-48bd-9da5-8281215d89cd",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fcss%2Fdisplay%2Fdifference%20bw%20opacity%20visibility%20display%2F5.jpg?alt=media&token=2b041a0a-2064-4974-9313-36fd4673d006",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fcss%2Fdisplay%2Fdifference%20bw%20opacity%20visibility%20display%2F6.jpg?alt=media&token=cf01ed28-2f66-4a21-b7e2-a7d1db31ce30",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fcss%2Fdisplay%2Fdifference%20bw%20opacity%20visibility%20display%2F7.jpg?alt=media&token=04f45ecb-b97c-4c13-956b-2ca0a28df53e",
        ],
      },
    ],
  },
  {
    id: "overflowProperty",
    title: "Overflow Property",
    about: `<div>
  <h2 style="color: #3498db; margin-bottom: 8px;">Overflow Behavior</h2>
  <p>The <code>overflow</code> property controls content clipping or scrollbar behavior when content exceeds element boundaries.</p>

  <ul>
    <li><code>visible</code> (default): Overflow content renders outside the box.</li>
    <li><code>hidden</code>: Excess content is clipped and hidden.</li>
    <li><code>scroll</code>: Adds permanent scrollbars.</li>
    <li><code>auto</code>: Adds scrollbars automatically only when content overflows.</li>
  </ul>
</div>`,
    contents: [
      {
        id: "overflow_1",
        title: "Overview",
      },
    ],
  },
  {
    id: "zIndex",
    title: "Z-index Property",
    contents: [
      {
        id: "zIndex_1",
        title: "Overview",
        about: `<div>
  <h2 style="color: #3498db; margin-bottom: 8px;">Understanding z-index & Stacking Contexts</h2>
  <p>The <code>z-index</code> property controls the vertical stacking order of overlapping elements along the Z-axis.</p>
  <ul>
    <li>Only applies to positioned elements (position value other than <code>static</code>) and flex/grid items.</li>
    <li>Higher integer values render closer to the user, overlaying elements with lower values.</li>
  </ul>

  <div style="position: relative; height: 90px; margin-top: 15px;">
    <div style="background-color: #e74c3c; color: #fff; padding: 10px; position: absolute; z-index: 2; top: 0; left: 0; width: 220px; border-radius: 4px;">Top Box (z-index: 2)</div>
    <div style="background-color: #2ecc71; color: #fff; padding: 10px; position: absolute; z-index: 1; top: 20px; left: 20px; width: 220px; border-radius: 4px;">Bottom Box (z-index: 1)</div>
  </div>
</div>`,
      },
    ],
  },
  {
    id: "floatProperty",
    title: "Float Property",
    contents: [
      {
        id: "floatProperty_1",
        title: "Overview",
        about: `<div>
  <h2 style="color: #3498db; margin-bottom: 8px;">Floats and Clearfix</h2>
  <p>The <code>float</code> property places an element along the left or right side of its container, allowing inline content to wrap around it.</p>

  <h3 style="color: #3498db; margin-top: 12px;">Clearfix Technique</h3>
  <p>Parent elements with floated children collapse vertically. Clearfix uses pseudo-elements to restore container height balance:</p>

  <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 4px;"><code>.clearfix::after {
  content: "";
  display: table;
  clear: both;
}</code></pre>
</div>`,
      },
    ],
  },
  {
    id: "transformationProperties",
    title: "CSS Transformations",
    about: `<div>
  <h2 style="color: #3498db; margin-bottom: 8px;">2D & 3D CSS Transformations</h2>
  <p>The <code>transform</code> property allows developers to translate, rotate, scale, and skew web elements visually without altering standard layout flow.</p>

  <h3 style="color: #3498db; margin-top: 12px;">Key Functions:</h3>
  <ul>
    <li><code>translate(x, y)</code>: Moves element from original X/Y position.</li>
    <li><code>scale(x, y)</code>: Resizes element dimensions dynamically.</li>
    <li><code>rotate(deg)</code>: Rotates element clockwise or counter-clockwise.</li>
    <li><code>skew(x-angle, y-angle)</code>: Slants element along coordinate axes.</li>
  </ul>
</div>`,
    contents: [
      {
        id: "transformationProperties_1",
        title: "Transformations Overview",
        images: [
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fcss%2Ftransformation%20properties%2F1.jpg?alt=media&token=6ac03155-3a60-4d85-b678-8d71d4e4db38",
        ],
      },
    ],
  },
  {
    id: "cssUnits",
    title: "CSS Sizing Units",
    about: `<div>
  <h2 style="color: #3498db; margin-bottom: 8px;">Absolute vs Relative CSS Units</h2>
  <p>CSS units define length measurements for spacing, dimensions, fonts, and layout grid calculations.</p>

  <h3 style="color: #2ecc71; margin-top: 12px;">1. Absolute Units</h3>
  <p>Fixed physical length units that maintain identical rendered measurements regardless of device viewport size (e.g., <code>px</code>, <code>cm</code>, <code>pt</code>).</p>

  <h3 style="color: #2ecc71; margin-top: 12px;">2. Relative Units</h3>
  <p>Scale relative to parent elements, root typography scales, or viewport dimensions:</p>
  <ul>
    <li><code>rem</code>: Relative to root element (<code>&lt;html&gt;</code>) font-size.</li>
    <li><code>em</code>: Relative to current element or direct parent font-size.</li>
    <li><code>%</code>: Relative to parent container property bounds.</li>
    <li><code>vw</code> / <code>vh</code>: Relative to 1% of viewport width or height.</li>
  </ul>
</div>`,
    contents: [
      {
        id: "cssUnits_1",
        title: "CSS Units Overview",
      },
    ],
  },
  {
    id: "flex",
    title: "CSS Flexible Box Layout (Flexbox)",
    about: `<div>
  <h2 style="color: #3498db; margin-bottom: 8px;">Mastering CSS Flexbox</h2>
  <p>Flexbox (Flexible Box Layout) is a 1-dimensional layout module designed to distribute space along a primary row or column axis, aligning items predictably across various screen sizes.</p>

  <h3 style="color: #2ecc71; margin-top: 12px;">Flex Container Properties:</h3>
  <ul>
    <li><code>display: flex</code>: Activates flex context on direct children.</li>
    <li><code>flex-direction</code>: Defines primary layout axis (<code>row</code>, <code>column</code>, <code>row-reverse</code>, <code>column-reverse</code>).</li>
    <li><code>justify-content</code>: Aligns items along main axis (<code>flex-start</code>, <code>center</code>, <code>space-between</code>, <code>space-around</code>, <code>space-evenly</code>).</li>
    <li><code>align-items</code>: Aligns items along cross axis (<code>stretch</code>, <code>center</code>, <code>flex-start</code>, <code>flex-end</code>).</li>
    <li><code>flex-wrap</code>: Controls multi-line wrap behavior (<code>nowrap</code>, <code>wrap</code>).</li>
    <li><code>gap</code>: Specifies explicit gutter spacing between flex items.</li>
  </ul>

  <h3 style="color: #2ecc71; margin-top: 12px;">Flex Item Properties:</h3>
  <ul>
    <li><code>flex-grow</code>: Dictates how item expands relative to remaining available container space.</li>
    <li><code>flex-shrink</code>: Dictates how item shrinks relative to surrounding items when space contracts.</li>
    <li><code>flex-basis</code>: Sets default initial size prior to flex space distribution calculations.</li>
    <li><code>align-self</code>: Overrides default container <code>align-items</code> for an individual item.</li>
  </ul>
</div>`,
    contents: [
      {
        id: "flex_1",
        title: "Flexbox Overview & Examples",
        about: `<div>
  <h2 style="color: #3498db; margin-bottom: 8px;">Interactive Flexbox Examples</h2>
  
  <p>Centered item flexbox layout snippet:</p>
  <pre style="background: #272822; color: #f8f8f2; padding: 12px; border-radius: 6px;"><code>.center-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  background-color: #f4f6f8;
}</code></pre>

  <div style="display: flex; justify-content: center; align-items: center; background-color: #272822; min-height: 80px; border-radius: 6px; color: #fff;">
    <div style="background-color: #3498db; padding: 10px 20px; border-radius: 4px;">Centered Flex Item</div>
  </div>
</div>`,
      },
    ],
  },
];
