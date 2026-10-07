[
  {
    course: "HTML",
    description:
      "Master HTML from beginner to advanced level through a complete learning path covering document structure, syntax, text, links, media, forms, tables, semantic HTML, accessibility, metadata and SEO, responsive media, SVG, Canvas, interactive elements, resource loading, security, internationalization, DOM concepts, validation, debugging, modern HTML features, best practices, and interview-ready concepts. Includes practical examples and progressively deeper topics for developers, designers, and web learners.",
    keywords:
      "HTML, HyperText Markup Language, HTML course, HTML tutorial, HTML5, web development, semantic HTML, accessibility, forms, HTML forms, HTML tags, attributes, global attributes, links, URLs, images, responsive images, picture, srcset, audio, video, iframe, tables, lists, metadata, SEO, ARIA, SVG, canvas, dialog, popover, template, web components, validation, performance, security, internationalization, DOM, parsing, HTML interview questions, developer interview",
    id: "HTMLTags",
    title: "HTML Complete Course",
    about: `
      <div>
        <h2 style="color: #3498db;">Complete HTML Learning Path</h2>
        <p>This course goes well beyond memorizing tags. Learn how HTML is structured, how browsers parse it, how semantic elements communicate meaning, how forms submit data, how media and embedded content work, and how to write accessible, maintainable, standards-friendly markup.</p>
        <p><strong>Goal:</strong> By the end, you should be able to read unfamiliar HTML confidently, build complete documents, design accessible forms, use responsive media, choose semantic elements correctly, improve page metadata and loading behavior, debug invalid markup, and explain common HTML interview questions.</p>
      </div>
      <div>
        <h2 style="color: #e74c3c;">What You Will Learn</h2>
        <ul>
          <li>HTML syntax, elements, tags, attributes, nesting, void elements, comments, entities, URLs and document structure.</li>
          <li>Text content, headings, paragraphs, quotations, code, lists, tables, links and navigation.</li>
          <li>Images, responsive images, figures, audio, video, tracks, iframes and other embedded content.</li>
          <li>Semantic HTML including header, nav, main, article, section, aside, footer, address, search and figure.</li>
          <li>Forms from fundamentals through input types, labels, grouping, validation, autocomplete, submission and encoding.</li>
          <li>Accessibility, keyboard navigation, source order, alt text, labels, table headings, landmarks and practical ARIA guidance.</li>
          <li>Metadata, title, description, viewport, icons, canonical links, language information and search-friendly markup.</li>
          <li>Modern interactive HTML such as details, summary, dialog, popover, inert, hidden and declarative controls.</li>
          <li>SVG, Canvas, templates, slots, custom-element related HTML concepts, and advanced browser-facing markup.</li>
          <li>Performance, resource hints, script loading, security-related HTML attributes, validation, debugging and best practices.</li>
        </ul>
      </div>
    `,
    contents: [
      {
        id: "Tags_1",
        title: "HTML Foundations and Basic Syntax",
        images: [
          "https://ourtutorials.in/html/img/intro1.JPG",
          "https://mdn.github.io/shared-assets/images/examples/fx-nightly-512.png",
        ],
      },
      {
        id: "Tags_2",
        title: "Document Structure: DOCTYPE, html, head and body",
        images: [
          "https://ourtutorials.in/html/img/intro1.JPG",
          "https://www.learntosap.com/html66.jpg",
        ],
      },
      {
        id: "Tags_3",
        title: "Text, Headings, Paragraphs and Inline Semantics",
        images: [
          "https://image.slidesharecdn.com/htmlcssandjavascript2-200702102403/75/Use-of-Lists-and-Tables-in-HTML-4-2048.jpg",
        ],
      },
      {
        id: "Tags_4",
        title: "Links, Anchors, URLs and Navigation",
        images: [
          "https://images.postaffiliatepro.com.br/images/faq/0x21a918aa516423ea.webp",
        ],
      },
      {
        id: "Tags_5",
        title: "Containers: div, span and Choosing the Right Element",
        images: [
          "https://www.tcpschool.com/lectures/img_html_html5_layout.png",
        ],
      },
      {
        id: "Tags_6",
        title: "Lists: ul, ol, li, dl, dt and dd",
        images: [
          "https://image.slidesharecdn.com/htmlcssandjavascript2-200702102403/75/Use-of-Lists-and-Tables-in-HTML-4-2048.jpg",
        ],
      },
      {
        id: "Tags_7",
        title: "Images, Figure and Figcaption",
        images: [
          "https://mdn.github.io/shared-assets/images/examples/fx-nightly-512.png",
        ],
      },
      {
        id: "Tags_8",
        title: "Forms Fundamentals",
        images: [
          "https://myschoolhouse.in/admin-panel/assets/upload-images/HTML-Form-Example2496-D-20-03-2025-T-02-51-09am.jpg",
        ],
      },
      {
        id: "Tags_9",
        title: "Tables and Accessible Tabular Data",
        images: [
          "https://ithelp.ithome.com.tw/upload/images/20211004/201120536YB6UPzuLf.png",
        ],
      },
      {
        id: "Tags_10",
        title: "Input Types and Input Attributes",
        images: [
          "https://media.licdn.com/dms/image/v2/D4D22AQGAAAyXS3bMxA/feedshare-shrink_800/feedshare-shrink_800/0/1704342532350?e=2147483647&t=3L0z3sjlfcgRyY5541B_ch8AmBKHcpqQKVMCAkdZVOk&v=beta",
        ],
      },
      {
        id: "Tags_11",
        title: "Other Useful Tags and Elements",
        images: [
          "https://www.tcpschool.com/lectures/img_html_html5_layout.png",
          "https://samanthaming.gumlet.io/tidbits/91-html-video.jpg.gz?format=auto",
        ],
      },
    ],
  },
  {
    id: "htmlDocumentAnatomy",
    title: "HTML Document Anatomy and Syntax",
    about: `
      <h2 style="color: #3498db;">1. Elements, Tags and Content</h2>
      <p>An <strong>element</strong> is the complete construct, while tags are the markup that starts and ends many elements. Learn opening tags, closing tags, element content, attributes and nesting.</p>
      <pre><code>&lt;p class="intro"&gt;Hello HTML&lt;/p&gt;</code></pre>
      <h2 style="color: #2ecc71;">2. Void Elements</h2>
      <p>Learn elements that do not contain child content, such as <code>&lt;img&gt;</code>, <code>&lt;br&gt;</code>, <code>&lt;hr&gt;</code>, <code>&lt;input&gt;</code>, <code>&lt;meta&gt;</code>, <code>&lt;link&gt;</code> and <code>&lt;source&gt;</code>. Do not invent closing tags for them.</p>
      <h2 style="color: #f39c12;">3. Correct Nesting</h2>
      <p>Elements should be nested according to the HTML rules. Avoid crossing structures such as opening one element, opening another, and closing them in the wrong order.</p>
      <h2 style="color: #9b59b6;">4. DOCTYPE and Standards Mode</h2>
      <p>Start normal HTML documents with <code>&lt;!doctype html&gt;</code>. Its modern purpose is to trigger standards mode rather than the historical long doctypes used by older HTML and XHTML versions.</p>
      <h2 style="color: #3498db;">5. The Basic Document</h2>
      <pre><code>&lt;!doctype html&gt;
&lt;html lang="en"&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8"&gt;
    &lt;title&gt;My Page&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Hello&lt;/h1&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>
      <p>Understand what belongs in <code>&lt;head&gt;</code> versus what belongs in <code>&lt;body&gt;</code>, and why the <code>lang</code> attribute is important for accessibility and language-aware software.</p>
    `,
    contents: [
      {
        id: "htmlDocumentAnatomy_1",
        title: "Document Skeleton and Syntax",
        images: [
          "https://ourtutorials.in/html/img/intro1.JPG",
          "https://www.learntosap.com/html66.jpg",
        ],
      },
    ],
  },
  {
    id: "htmlTextContent",
    title: "Text Content and Inline Semantics",
    about: `
      <p>Master content-oriented text elements instead of styling everything with generic containers.</p>
      <ul>
        <li><code>&lt;h1&gt;</code> through <code>&lt;h6&gt;</code> for document headings.</li>
        <li><code>&lt;p&gt;</code> for paragraphs and <code>&lt;br&gt;</code> only where a line break is actually meaningful.</li>
        <li><code>&lt;strong&gt;</code> for strong importance and <code>&lt;em&gt;</code> for stress emphasis.</li>
        <li><code>&lt;mark&gt;</code> for highlighted relevance, <code>&lt;small&gt;</code> for side comments or fine print, and <code>&lt;s&gt;</code> for content no longer accurate.</li>
        <li><code>&lt;del&gt;</code> and <code>&lt;ins&gt;</code> for editorial changes; <code>&lt;sub&gt;</code> and <code>&lt;sup&gt;</code> for subscripts and superscripts.</li>
        <li><code>&lt;code&gt;</code>, <code>&lt;kbd&gt;</code>, <code>&lt;samp&gt;</code> and <code>&lt;var&gt;</code> for technical text.</li>
        <li><code>&lt;pre&gt;</code> for preformatted text and preserving whitespace patterns.</li>
        <li><code>&lt;abbr&gt;</code> for abbreviations, <code>&lt;cite&gt;</code> for references to works, <code>&lt;q&gt;</code> for short inline quotations and <code>&lt;dfn&gt;</code> for terms being defined.</li>
        <li><code>&lt;time&gt;</code> for machine-readable dates and times using <code>datetime</code>.</li>
      </ul>
      <p>Learn when an element communicates meaning and when CSS should handle visual presentation.</p>
    `,
    contents: [
      {
        id: "htmlTextContent_1",
        title: "Headings, Paragraphs and Inline Text",
        images: [
          "https://ourtutorials.in/html/img/intro1.JPG",
        ],
      },
    ],
  },
  {
    id: "htmlEntitiesComments",
    title: "Comments, Character References and Special Characters",
    about: `
      <h2 style="color: #3498db;">Comments</h2>
      <p>Use <code>&lt;!-- comment --&gt;</code> for notes that should not be rendered as page content. Do not put secrets, passwords or API keys in comments because comments are still delivered to the browser.</p>
      <h2 style="color: #2ecc71;">Character References</h2>
      <p>Learn named and numeric character references when markup characters need to appear as text, such as <code>&amp;lt;</code>, <code>&amp;gt;</code>, <code>&amp;amp;</code>, <code>&amp;quot;</code> and numeric references.</p>
      <h2 style="color: #f39c12;">Unicode and Encoding</h2>
      <p>Understand UTF-8, why <code>&lt;meta charset="utf-8"&gt;</code> belongs early in the document head, and how encoding mistakes can produce broken characters.</p>
      <h2 style="color: #9b59b6;">Whitespace</h2>
      <p>HTML source whitespace is generally collapsed in normal phrasing content. Use CSS for layout and <code>&lt;pre&gt;</code> when preserving text formatting is part of the content.</p>
    `,
    contents: [
      {
        id: "htmlEntitiesComments_1",
        title: "Comments, Entities and Encoding",
        images: [
          "https://mdn.github.io/shared-assets/images/examples/fx-nightly-512.png",
        ],
      },
    ],
  },
  {
    id: "htmlAttributes",
    title: "HTML Attributes",
    about: `
      <p>Attributes configure elements and expose information or behavior to the browser.</p>
      <ul>
        <li>Learn attribute syntax: <code>name="value"</code>, spacing between attributes, quoting and case conventions.</li>
        <li>Understand common attributes such as <code>id</code>, <code>class</code>, <code>title</code>, <code>style</code>, <code>lang</code>, <code>dir</code> and <code>hidden</code>.</li>
        <li>Understand URL attributes such as <code>href</code>, <code>src</code>, <code>action</code> and <code>poster</code>.</li>
        <li>Learn Boolean attributes such as <code>disabled</code>, <code>checked</code>, <code>required</code>, <code>multiple</code>, <code>autofocus</code> and <code>readonly</code>.</li>
        <li>Learn enumerated attributes and why strings that look true or false do not always behave like JavaScript booleans.</li>
        <li>Understand attribute reflection conceptually: many HTML attributes correspond to properties on DOM objects.</li>
      </ul>
      <pre><code>&lt;input type="email" name="email" required autocomplete="email"&gt;</code></pre>
    `,
    contents: [
      {
        id: "htmlAttributes_1",
        title: "Attributes and Boolean Attributes",
        images: [
          "https://mdn.github.io/shared-assets/images/examples/fx-nightly-512.png",
        ],
      },
    ],
  },
  {
    id: "globalAttributes",
    title: "Global Attributes",
    about: `
      <p>Global attributes can be used on many HTML elements. Know these well because they appear throughout real-world HTML.</p>
      <ul>
        <li><code>id</code>, <code>class</code>, <code>title</code>, <code>lang</code>, <code>dir</code>, <code>hidden</code> and <code>style</code>.</li>
        <li><code>data-*</code> for custom data exposed to scripts through the element's dataset.</li>
        <li><code>contenteditable</code> for editable content and <code>spellcheck</code> for spelling-check hints.</li>
        <li><code>tabindex</code>, <code>accesskey</code> and <code>autofocus</code> for focus and keyboard behavior; use them carefully.</li>
        <li><code>draggable</code>, <code>translate</code>, <code>inputmode</code>, <code>enterkeyhint</code> and writing-related hints where appropriate.</li>
        <li><code>inert</code> to make a subtree non-interactive, and <code>popover</code> for the popover feature.</li>
        <li>Advanced concepts including <code>nonce</code>, <code>part</code>, <code>slot</code> and microdata attributes such as <code>itemscope</code>, <code>itemtype</code> and <code>itemprop</code>.</li>
      </ul>
    `,
    contents: [
      {
        id: "globalAttributes_1",
        title: "Global Attributes Reference",
        images: [
          "https://www.tcpschool.com/lectures/img_html_html5_layout.png",
        ],
      },
    ],
  },
  {
    id: "htmlLinksUrls",
    title: "Links, URLs, Paths and Navigation",
    about: `
      <p>The <code>&lt;a&gt;</code> element is one of HTML's most important interactive elements. Learn both the markup and the URL model behind it.</p>
      <ul>
        <li>Absolute URLs versus relative URLs.</li>
        <li>Root-relative paths such as <code>/images/logo.png</code> and document-relative paths such as <code>../assets/app.css</code>.</li>
        <li>Fragments such as <code>#pricing</code> and linking to an element with a matching <code>id</code>.</li>
        <li>Protocols such as <code>https:</code>, <code>mailto:</code>, <code>tel:</code> and other valid URL schemes.</li>
        <li><code>target="_blank"</code>, tab behavior, and when <code>rel="noopener"</code> is appropriate.</li>
        <li><code>download</code>, <code>hreflang</code>, <code>type</code>, <code>referrerpolicy</code> and link relationship values.</li>
        <li>Navigation menus, skip links and meaningful link text instead of vague labels such as “click here”.</li>
      </ul>
      <pre><code>&lt;a href="/docs/accessibility#forms"&gt;Form accessibility guide&lt;/a&gt;</code></pre>
    `,
    contents: [
      {
        id: "htmlLinksUrls_1",
        title: "Anchor Anatomy and URL Examples",
        images: [
          "https://images.postaffiliatepro.com.br/images/faq/0x21a918aa516423ea.webp",
        ],
      },
    ],
  },
  {
    id: "htmlImages",
    title: "Images, Alt Text and Figure",
    about: `
      <p>Learn <code>&lt;img&gt;</code> as a semantic content element, not just a way to place pictures on a page.</p>
      <ul>
        <li><code>src</code>, <code>alt</code>, <code>width</code>, <code>height</code>, <code>loading</code>, <code>decoding</code> and <code>fetchpriority</code>.</li>
        <li>Use meaningful <code>alt</code> text for informative images and <code>alt=""</code> for purely decorative images where appropriate.</li>
        <li>Reserve <code>&lt;figure&gt;</code> and <code>&lt;figcaption&gt;</code> for independent content that benefits from a caption.</li>
        <li>Understand replaced elements and why dimensions can help the browser reserve space and reduce layout movement.</li>
        <li>Learn image licensing basics, hotlinking concerns, and why production sites should normally host assets they are permitted to use.</li>
      </ul>
      <pre><code>&lt;figure&gt;
  &lt;img src="team.jpg" alt="Three engineers discussing a design" width="900" height="600"&gt;
  &lt;figcaption&gt;The team during the design review.&lt;/figcaption&gt;
&lt;/figure&gt;</code></pre>
    `,
    contents: [
      {
        id: "htmlImages_1",
        title: "Image Syntax and Accessibility",
        images: [
          "https://mdn.github.io/shared-assets/images/examples/fx-nightly-512.png",
        ],
      },
    ],
  },
  {
    id: "responsiveImages",
    title: "Responsive Images: picture, source, srcset and sizes",
    about: `
      <p>Learn how HTML can let the browser choose an appropriate image resource instead of sending one large image to every device.</p>
      <h3 style="color: #3498db;">srcset + sizes</h3>
      <p>Use width descriptors such as <code>400w</code> and <code>800w</code> with <code>sizes</code> to describe available image widths and the expected display width.</p>
      <h3 style="color: #2ecc71;">picture + source</h3>
      <p>Use <code>&lt;picture&gt;</code> for art direction or format selection. The fallback <code>&lt;img&gt;</code> remains essential.</p>
      <pre><code>&lt;picture&gt;
  &lt;source media="(min-width: 900px)" srcset="hero-wide.webp"&gt;
  &lt;img src="hero-mobile.jpg" alt="Mountain landscape" width="800" height="600"&gt;
&lt;/picture&gt;</code></pre>
      <p>Also understand format fallbacks, intrinsic dimensions, lazy loading and how responsive media affects bandwidth and performance.</p>
    `,
    contents: [
      {
        id: "responsiveImages_1",
        title: "Responsive Images and Picture",
        images: [
          "https://mdn.github.io/shared-assets/images/examples/fx-nightly-512.png",
        ],
      },
    ],
  },
  {
    id: "htmlMedia",
    title: "Audio, Video and Captions",
    about: `
      <p>Use HTML media elements when the browser should present or control audio and video content.</p>
      <ul>
        <li><code>&lt;audio&gt;</code> and <code>&lt;video&gt;</code> with <code>controls</code>, <code>autoplay</code>, <code>muted</code>, <code>loop</code>, <code>poster</code> and sizing attributes.</li>
        <li><code>&lt;source&gt;</code> for multiple media files and codec fallbacks.</li>
        <li><code>&lt;track&gt;</code> with WebVTT for captions, subtitles, descriptions and other timed text tracks.</li>
        <li>Why autoplay is commonly restricted and why muted autoplay is treated differently by browsers.</li>
        <li>Accessibility: captions, transcripts, controls, keyboard access, visible alternatives and meaningful fallback text.</li>
      </ul>
      <pre><code>&lt;video controls poster="cover.jpg" width="960" height="540"&gt;
  &lt;source src="lesson.webm" type="video/webm"&gt;
  &lt;source src="lesson.mp4" type="video/mp4"&gt;
  &lt;track src="lesson-en.vtt" kind="subtitles" srclang="en" label="English" default&gt;
&lt;/video&gt;</code></pre>
    `,
    contents: [
      {
        id: "htmlMedia_1",
        title: "Video, Sources and Tracks",
        images: [
          "https://samanthaming.gumlet.io/tidbits/91-html-video.jpg.gz?format=auto",
        ],
      },
    ],
  },
  {
    id: "embeddedContent",
    title: "iframe, embed, object and External Content",
    about: `
      <p>Learn the different ways HTML can include another resource or browsing context.</p>
      <ul>
        <li><code>&lt;iframe&gt;</code> creates a nested browsing context. Learn <code>src</code>, <code>title</code>, <code>loading</code>, <code>allow</code>, <code>referrerpolicy</code> and sandboxing.</li>
        <li><code>sandbox</code> can restrict capabilities of an embedded document; permissions should be enabled only when required.</li>
        <li><code>&lt;object&gt;</code> and <code>&lt;embed&gt;</code> support external content but are much less central to modern application development.</li>
        <li>Understand the performance and security implications of third-party iframes.</li>
        <li>Provide an accessible <code>title</code> for an iframe that explains its purpose.</li>
      </ul>
      <pre><code>&lt;iframe
  src="https://example.com/embed"
  title="Embedded product demo"
  loading="lazy"
  sandbox="allow-scripts allow-forms"
&gt;&lt;/iframe&gt;</code></pre>
    `,
    contents: [
      {
        id: "embeddedContent_1",
        title: "Embedded Browsing Contexts",
        images: [
          "https://www.learntosap.com/html66.jpg",
        ],
      },
    ],
  },
  {
    id: "semanticHtml",
    title: "Semantic HTML",
    about: `
      <div>
        <h2 style="color: #3498db;">Why Semantic HTML Matters</h2>
        <p>Semantic HTML gives content a meaning that browsers, assistive technologies, search engines and developers can use. Prefer the native element whose meaning matches the content or interaction.</p>
        <h3 style="color: #2ecc71;">1. &lt;header&gt;</h3>
        <p>Introductory content for a page or section, commonly containing headings, branding and navigation-related content.</p>
        <h3 style="color: #2ecc71;">2. &lt;nav&gt;</h3>
        <p>A navigation section containing groups of important navigation links.</p>
        <h3 style="color: #2ecc71;">3. &lt;main&gt;</h3>
        <p>The dominant content of the document. Normally there should be one main document content region.</p>
        <h3 style="color: #2ecc71;">4. &lt;article&gt;</h3>
        <p>Self-contained content that could make sense independently, such as a post, news item, review or forum entry.</p>
        <h3 style="color: #2ecc71;">5. &lt;section&gt;</h3>
        <p>A thematic grouping of content, typically with a heading. Do not use section simply because you need a CSS wrapper.</p>
        <h3 style="color: #2ecc71;">6. &lt;aside&gt;</h3>
        <p>Content related indirectly to the surrounding content, such as a sidebar, related links or pull quote.</p>
        <h3 style="color: #2ecc71;">7. &lt;footer&gt;</h3>
        <p>Footer information for a page or section such as author information, copyright or related navigation.</p>
        <h3 style="color: #2ecc71;">8. Other Semantic Elements</h3>
        <p>Also learn <code>&lt;address&gt;</code>, <code>&lt;search&gt;</code>, <code>&lt;figure&gt;</code>, <code>&lt;time&gt;</code>, <code>&lt;details&gt;</code>, headings, lists, tables and form landmarks.</p>
      </div>
    `,
    contents: [
      {
        id: "semanticHtml_1",
        title: "Explore Semantic Tags",
        images: [
          "https://www.tcpschool.com/lectures/img_html_html5_layout.png",
        ],
      },
    ],
  },
  {
    id: "htmlLists",
    title: "Lists: ul, ol, li, dl, dt and dd",
    about: `
      <p>Choose list structures based on the meaning of the content.</p>
      <ul>
        <li><code>&lt;ul&gt;</code> for unordered collections.</li>
        <li><code>&lt;ol&gt;</code> for ordered sequences where the order is meaningful.</li>
        <li><code>&lt;li&gt;</code> for individual list items inside <code>ul</code> or <code>ol</code>.</li>
        <li><code>start</code>, <code>reversed</code> and <code>type</code> for ordered lists when there is a real semantic need.</li>
        <li><code>&lt;dl&gt;</code>, <code>&lt;dt&gt;</code> and <code>&lt;dd&gt;</code> for name-value or term-description relationships. These are not limited to dictionaries.</li>
      </ul>
      <pre><code>&lt;dl&gt;
  &lt;dt&gt;HTTP&lt;/dt&gt;
  &lt;dd&gt;The protocol used to transfer resources on the web.&lt;/dd&gt;
&lt;/dl&gt;</code></pre>
    `,
    contents: [
      {
        id: "htmlLists_1",
        title: "Ordered, Unordered and Description Lists",
        images: [
          "https://image.slidesharecdn.com/htmlcssandjavascript2-200702102403/75/Use-of-Lists-and-Tables-in-HTML-4-2048.jpg",
        ],
      },
    ],
  },
  {
    id: "htmlTables",
    title: "Tables, Headers, Scope and Complex Tables",
    about: `
      <p>Tables are for genuinely tabular data, not for page layout.</p>
      <ul>
        <li><code>&lt;table&gt;</code>, <code>&lt;caption&gt;</code>, <code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code>, <code>&lt;tfoot&gt;</code>, <code>&lt;tr&gt;</code>, <code>&lt;th&gt;</code> and <code>&lt;td&gt;</code>.</li>
        <li>Use <code>&lt;caption&gt;</code> to provide the table's visible title or purpose.</li>
        <li>Use <code>scope="col"</code> and <code>scope="row"</code> for straightforward header relationships.</li>
        <li>Use <code>colspan</code> and <code>rowspan</code> only when the data relationship truly spans multiple cells.</li>
        <li>For complex tables, understand <code>id</code>/<code>headers</code> relationships and why accessible associations matter.</li>
        <li>Do not rely on deprecated presentation attributes such as <code>border</code>, <code>cellspacing</code> and <code>cellpadding</code>; use CSS for presentation.</li>
      </ul>
      <pre><code>&lt;table&gt;
  &lt;caption&gt;Quarterly revenue&lt;/caption&gt;
  &lt;thead&gt;
    &lt;tr&gt;&lt;th scope="col"&gt;Quarter&lt;/th&gt;&lt;th scope="col"&gt;Revenue&lt;/th&gt;&lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;...&lt;/tbody&gt;
&lt;/table&gt;</code></pre>
    `,
    contents: [
      {
        id: "htmlTables_1",
        title: "Table Anatomy and Accessible Headers",
        images: [
          "https://ithelp.ithome.com.tw/upload/images/20211004/201120536YB6UPzuLf.png",
        ],
      },
    ],
  },
  {
    id: "htmlForms",
    title: "Forms Fundamentals: form, label, input, button",
    about: `
      <p>Forms connect user interface controls to data submission. Learn the structure first, then the many controls and validation rules built on top of it.</p>
      <ul>
        <li><code>&lt;form&gt;</code> groups controls and defines submission behavior.</li>
        <li><code>action</code> selects the submission URL; <code>method</code> commonly chooses <code>get</code> or <code>post</code>.</li>
        <li><code>&lt;label&gt;</code> gives a form control an accessible label. Use a matching <code>for</code>/<code>id</code> pair or wrap the control.</li>
        <li><code>name</code> controls the successful form-control name sent during form submission.</li>
        <li><code>&lt;button type="submit"&gt;</code> is preferred over clickable generic elements for submitting a form.</li>
        <li>Understand form ownership, associated controls, <code>form</code> attributes and buttons outside the form.</li>
      </ul>
      <pre><code>&lt;form action="/signup" method="post"&gt;
  &lt;label for="email"&gt;Email&lt;/label&gt;
  &lt;input id="email" name="email" type="email" required&gt;
  &lt;button type="submit"&gt;Create account&lt;/button&gt;
&lt;/form&gt;</code></pre>
    `,
    contents: [
      {
        id: "htmlForms_1",
        title: "Form Anatomy, Label and Input",
        images: [
          "https://myschoolhouse.in/admin-panel/assets/upload-images/HTML-Form-Example2496-D-20-03-2025-T-02-51-09am.jpg",
        ],
      },
    ],
  },
  {
    id: "htmlInputTypes",
    title: "All Important Input Types",
    about: `
      <p>Learn the purpose and browser behavior of the major <code>&lt;input&gt;</code> types:</p>
      <ul>
        <li><code>text</code>, <code>password</code>, <code>email</code>, <code>tel</code>, <code>url</code> and <code>search</code>.</li>
        <li><code>number</code> and <code>range</code> for numeric controls.</li>
        <li><code>date</code>, <code>month</code>, <code>week</code>, <code>time</code> and <code>datetime-local</code> for date/time inputs.</li>
        <li><code>checkbox</code> for independent selections and <code>radio</code> for mutually exclusive choices that share a <code>name</code>.</li>
        <li><code>file</code> with <code>accept</code> and <code>multiple</code> where needed.</li>
        <li><code>color</code>, <code>hidden</code>, <code>submit</code>, <code>reset</code>, <code>button</code> and <code>image</code>.</li>
      </ul>
      <p>Also learn how <code>name</code>, <code>value</code>, <code>checked</code>, <code>selected</code>, <code>placeholder</code>, <code>inputmode</code> and <code>autocomplete</code> affect usability.</p>
    `,
    contents: [
      {
        id: "htmlInputTypes_1",
        title: "Input Types Reference",
        images: [
          "https://media.licdn.com/dms/image/v2/D4D22AQGAAAyXS3bMxA/feedshare-shrink_800/feedshare-shrink_800/0/1704342532350?e=2147483647&t=3L0z3sjlfcgRyY5541B_ch8AmBKHcpqQKVMCAkdZVOk&v=beta",
        ],
      },
    ],
  },
  {
    id: "htmlFormControls",
    title: "Select, Option, Optgroup, Datalist, Textarea and Output",
    about: `
      <ul>
        <li><code>&lt;select&gt;</code> with <code>&lt;option&gt;</code> for predefined choices.</li>
        <li><code>&lt;optgroup&gt;</code> for grouping options into categories.</li>
        <li><code>&lt;datalist&gt;</code> for suggested options while allowing user-entered values.</li>
        <li><code>&lt;textarea&gt;</code> for multi-line text input.</li>
        <li><code>&lt;output&gt;</code> for displaying a calculated result associated with controls.</li>
        <li><code>&lt;progress&gt;</code> for task progress and <code>&lt;meter&gt;</code> for measurements within a known range.</li>
      </ul>
      <pre><code>&lt;label for="country"&gt;Country&lt;/label&gt;
&lt;select id="country" name="country"&gt;
  &lt;option value="in"&gt;India&lt;/option&gt;
  &lt;option value="sg"&gt;Singapore&lt;/option&gt;
&lt;/select&gt;

&lt;label for="notes"&gt;Notes&lt;/label&gt;
&lt;textarea id="notes" name="notes" rows="5"&gt;&lt;/textarea&gt;</code></pre>
    `,
    contents: [
      {
        id: "htmlFormControls_1",
        title: "Advanced Form Controls",
        images: [
          "https://myschoolhouse.in/admin-panel/assets/upload-images/HTML-Form-Example2496-D-20-03-2025-T-02-51-09am.jpg",
        ],
      },
    ],
  },
  {
    id: "htmlFormAttributes",
    title: "Advanced Form Attributes and Autofill",
    about: `
      <p>Master the attributes that make forms robust and usable:</p>
      <ul>
        <li><code>autocomplete</code> for browser-supported autofill and credential/payment information categories.</li>
        <li><code>autofocus</code>, <code>disabled</code>, <code>readonly</code>, <code>required</code>, <code>multiple</code>, <code>checked</code> and <code>selected</code>.</li>
        <li><code>min</code>, <code>max</code>, <code>step</code>, <code>minlength</code>, <code>maxlength</code>, <code>pattern</code> and <code>size</code>.</li>
        <li><code>placeholder</code> as a hint, not a replacement for a visible label.</li>
        <li><code>inputmode</code> to hint the preferred virtual keyboard on supporting devices.</li>
        <li><code>accept</code> and <code>capture</code> for appropriate file input scenarios.</li>
        <li><code>formaction</code>, <code>formenctype</code>, <code>formmethod</code>, <code>formnovalidate</code> and <code>formtarget</code> on submit buttons.</li>
      </ul>
    `,
    contents: [
      {
        id: "htmlFormAttributes_1",
        title: "Form Attributes Cheat Sheet",
        images: [
          "https://media.licdn.com/dms/image/v2/D4D22AQGAAAyXS3bMxA/feedshare-shrink_800/feedshare-shrink_800/0/1704342532350?e=2147483647&t=3L0z3sjlfcgRyY5541B_ch8AmBKHcpqQKVMCAkdZVOk&v=beta",
        ],
      },
    ],
  },
  {
    id: "htmlValidation",
    title: "Constraint Validation and Form Errors",
    about: `
      <p>HTML provides native constraint validation before JavaScript is involved.</p>
      <ul>
        <li><code>required</code>, type-specific validation, <code>min</code>/<code>max</code>, lengths and <code>pattern</code>.</li>
        <li>Understand the difference between <code>valid</code>, <code>invalid</code> and browser validation UI.</li>
        <li>Learn how <code>novalidate</code> and <code>formnovalidate</code> bypass native validation when intentionally required.</li>
        <li>Use accessible visible error messages and associate them with the relevant field.</li>
        <li>Client-side validation improves user experience but is not a security boundary; the server must validate submitted data as well.</li>
        <li>Know <code>checkValidity()</code>, <code>reportValidity()</code> and <code>setCustomValidity()</code> as JavaScript APIs that work with HTML form constraints.</li>
      </ul>
    `,
    contents: [
      {
        id: "htmlValidation_1",
        title: "Native Form Validation",
        images: [
          "https://myschoolhouse.in/admin-panel/assets/upload-images/HTML-Form-Example2496-D-20-03-2025-T-02-51-09am.jpg",
        ],
      },
    ],
  },
  {
    id: "htmlFormSubmission",
    title: "Form Submission, GET, POST and Encoding",
    about: `
      <p>Understand what the browser actually submits when a form is activated.</p>
      <ul>
        <li><code>GET</code> generally encodes successful controls into the URL query string.</li>
        <li><code>POST</code> sends form data in the request body.</li>
        <li><code>application/x-www-form-urlencoded</code> is the common default encoding.</li>
        <li><code>multipart/form-data</code> is required for file uploads.</li>
        <li><code>text/plain</code> exists but is rarely the appropriate choice for production applications.</li>
        <li>Learn successful controls, omitted disabled controls, checkbox/radio values, repeated names and submit-button values.</li>
        <li>Understand <code>action</code>, <code>method</code>, <code>enctype</code>, <code>target</code> and submitter-specific overrides.</li>
      </ul>
      <pre><code>&lt;form action="/upload" method="post" enctype="multipart/form-data"&gt;
  &lt;input type="file" name="avatar" accept="image/*"&gt;
  &lt;button type="submit"&gt;Upload&lt;/button&gt;
&lt;/form&gt;</code></pre>
    `,
    contents: [
      {
        id: "htmlFormSubmission_1",
        title: "Form Submission and File Upload",
        images: [
          "https://myschoolhouse.in/admin-panel/assets/upload-images/HTML-Form-Example2496-D-20-03-2025-T-02-51-09am.jpg",
        ],
      },
    ],
  },
  {
    id: "htmlInteractive",
    title: "Buttons and Interactive Elements",
    about: `
      <h2 style="color: #3498db;">button</h2>
      <p>Use <code>&lt;button&gt;</code> for actions. Inside a form, explicitly set <code>type="button"</code>, <code>type="submit"</code> or <code>type="reset"</code> to avoid accidental submission behavior.</p>
      <h2 style="color: #2ecc71;">details and summary</h2>
      <p><code>&lt;details&gt;</code> and <code>&lt;summary&gt;</code> provide a native disclosure component. Learn the <code>open</code> state and accessible keyboard interaction.</p>
      <h2 style="color: #f39c12;">dialog</h2>
      <p><code>&lt;dialog&gt;</code> provides a native dialog element. Learn the distinction between <code>show()</code> and modal behavior through <code>showModal()</code>, as well as <code>method="dialog"</code> for dialog form submission.</p>
      <h2 style="color: #9b59b6;">hidden and inert</h2>
      <p><code>hidden</code> removes content from normal rendering, while <code>inert</code> prevents interaction and focus within a subtree.</p>
    `,
    contents: [
      {
        id: "htmlInteractive_1",
        title: "Details, Summary, Dialog and Native Controls",
        images: [
          "https://www.tcpschool.com/lectures/img_html_html5_layout.png",
        ],
      },
    ],
  },
  {
    id: "htmlPopover",
    title: "Modern Popover API Markup",
    about: `
      <p>The HTML popover feature provides declarative popover relationships without requiring a full JavaScript widget implementation for basic show/hide behavior.</p>
      <pre><code>&lt;button popovertarget="help"&gt;Help&lt;/button&gt;
&lt;div id="help" popover&gt;
  Helpful information goes here.
&lt;/div&gt;</code></pre>
      <ul>
        <li><code>popover="auto"</code> supports light dismissal and normal popover behavior.</li>
        <li><code>popover="manual"</code> allows independently controlled popovers.</li>
        <li><code>popover="hint"</code> is designed for hint-like popovers.</li>
        <li><code>popovertarget</code> points a button or button-like control at the popover.</li>
        <li><code>popovertargetaction</code> can toggle, show or hide the target.</li>
      </ul>
      <p>Learn progressive enhancement: use declarative HTML for the baseline interaction and JavaScript only when application-specific behavior is required.</p>
    `,
    contents: [
      {
        id: "htmlPopover_1",
        title: "Popover and Declarative Controls",
        images: [
          "https://www.learntosap.com/html66.jpg",
        ],
      },
    ],
  },
  {
    id: "htmlMetadata",
    title: "Head, Metadata, Title and Resource Links",
    about: `
      <p>The <code>&lt;head&gt;</code> contains machine-readable information about the document and links to resources.</p>
      <ul>
        <li><code>&lt;title&gt;</code> for the document title shown in browser tabs, bookmarks and commonly search results.</li>
        <li><code>&lt;meta charset="utf-8"&gt;</code> for the document encoding.</li>
        <li><code>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</code> for the mobile viewport.</li>
        <li><code>description</code>, author-related metadata where relevant, theme and other application metadata.</li>
        <li><code>&lt;link&gt;</code> for stylesheets, icons and many resource relationships.</li>
        <li><code>&lt;base&gt;</code> for the base URL used to resolve relative URLs; understand why it should be used deliberately because it affects all relative links in the document.</li>
        <li><code>&lt;style&gt;</code>, <code>&lt;script&gt;</code> and <code>&lt;noscript&gt;</code> placement and behavior.</li>
      </ul>
    `,
    contents: [
      {
        id: "htmlMetadata_1",
        title: "Head and Metadata",
        images: [
          "https://www.learntosap.com/html66.jpg",
        ],
      },
    ],
  },
  {
    id: "htmlSeo",
    title: "HTML for SEO and Discoverability",
    about: `
      <p>SEO is not a magic set of tags; it starts with clear, crawlable, meaningful HTML.</p>
      <ul>
        <li>Write a unique, descriptive <code>&lt;title&gt;</code>.</li>
        <li>Use useful headings in a sensible content hierarchy.</li>
        <li>Write descriptive link text and meaningful image <code>alt</code> text when images convey content.</li>
        <li>Use canonical URLs where the application needs to identify the preferred URL through the appropriate <code>link rel="canonical"</code>.</li>
        <li>Use language declarations with <code>lang</code>.</li>
        <li>Use semantic structure so crawlers and assistive technologies can more easily interpret content.</li>
        <li>Structured data can be embedded using formats such as JSON-LD, usually in a <code>&lt;script type="application/ld+json"&gt;</code> block. Treat structured data as a description of content that should also be genuinely present on the page.</li>
      </ul>
    `,
    contents: [
      {
        id: "htmlSeo_1",
        title: "Metadata, Headings and Discoverability",
        images: [
          "https://www.learntosap.com/html66.jpg",
        ],
      },
    ],
  },
  {
    id: "htmlAccessibility",
    title: "Accessibility with Semantic HTML",
    about: `
      <p>A large amount of web accessibility can be achieved by choosing the correct native HTML element and using it according to its intended meaning.</p>
      <ul>
        <li>Use semantic elements instead of generic <code>div</code> elements whenever an appropriate native element exists.</li>
        <li>Give images appropriate text alternatives with <code>alt</code>.</li>
        <li>Use proper form labels, field grouping and useful error messages.</li>
        <li>Use headings as a meaningful content hierarchy rather than as visual font-size choices.</li>
        <li>Make links descriptive and buttons action-oriented.</li>
        <li>Use table headers and scope appropriately for data tables.</li>
        <li>Maintain meaningful DOM source order so keyboard and assistive technology users encounter content logically.</li>
        <li>Preserve keyboard accessibility. Avoid making interactions depend only on mouse events.</li>
        <li>Use <code>lang</code> and direction attributes where necessary for correct pronunciation and text interpretation.</li>
        <li>Prefer native HTML before ARIA because native controls provide built-in semantics and interaction behavior.</li>
      </ul>
    `,
    contents: [
      {
        id: "htmlAccessibility_1",
        title: "Accessible Semantic Layout",
        images: [
          "https://www.tcpschool.com/lectures/img_html_html5_layout.png",
        ],
      },
    ],
  },
  {
    id: "htmlAria",
    title: "ARIA with HTML: When and How to Use It",
    about: `
      <p>ARIA supplements HTML; it should not be the first choice when a native HTML element already represents the desired semantics and interaction.</p>
      <ul>
        <li>Know roles, states and properties conceptually.</li>
        <li>Use <code>aria-label</code> or <code>aria-labelledby</code> when an element needs an accessible name and native visible naming is unavailable or insufficient.</li>
        <li>Use <code>aria-describedby</code> to associate additional descriptions, hints or error text.</li>
        <li>Use live-region concepts carefully for dynamic status messages.</li>
        <li>Do not add redundant ARIA where native HTML already exposes the correct role and name.</li>
        <li>Do not create custom interactive widgets with a role alone and forget keyboard behavior, focus management and state updates.</li>
      </ul>
      <pre><code>&lt;button aria-describedby="password-help"&gt;Create password&lt;/button&gt;
&lt;p id="password-help"&gt;Use at least 12 characters.&lt;/p&gt;</code></pre>
    `,
    contents: [
      {
        id: "htmlAria_1",
        title: "HTML and ARIA Accessibility Concepts",
        images: [
          "https://www.tcpschool.com/lectures/img_html_html5_layout.png",
        ],
      },
    ],
  },
  {
    id: "htmlKeyboard",
    title: "Keyboard Accessibility, Focus and Tab Order",
    about: `
      <p>Keyboard accessibility should be built into the HTML whenever possible.</p>
      <ul>
        <li>Native links, buttons, form controls and interactive elements already participate in keyboard interaction.</li>
        <li>Use <code>tabindex="0"</code> sparingly when a custom element genuinely needs to enter the sequential focus order.</li>
        <li>Avoid positive tabindex values such as <code>tabindex="5"</code> because they create difficult-to-maintain focus order.</li>
        <li>Do not remove focus outlines without providing an equally visible alternative.</li>
        <li>Keep DOM order aligned with the visual and reading order.</li>
        <li>When using dialogs, popovers and other overlays, understand focus movement and what should be inert while the overlay is active.</li>
      </ul>
    `,
    contents: [
      {
        id: "htmlKeyboard_1",
        title: "Keyboard and Focus Basics",
        images: [
          "https://www.tcpschool.com/lectures/img_html_html5_layout.png",
        ],
      },
    ],
  },
  {
    id: "htmlInternationalization",
    title: "Internationalization: lang, dir, bdi, bdo and Ruby",
    about: `
      <p>HTML includes several features for multilingual and bidirectional content.</p>
      <ul>
        <li><code>lang</code> identifies the language of content using a BCP 47 language tag.</li>
        <li><code>dir="ltr"</code>, <code>dir="rtl"</code> and <code>dir="auto"</code> control text direction.</li>
        <li><code>&lt;bdi&gt;</code> isolates bidirectional text such as user-generated names that may contain scripts in different directions.</li>
        <li><code>&lt;bdo&gt;</code> forces a direction for text where that is genuinely required.</li>
        <li><code>&lt;ruby&gt;</code>, <code>&lt;rt&gt;</code> and related markup support pronunciation annotations used in some writing systems.</li>
        <li><code>translate="no"</code> can indicate content that should not be translated by translation tools.</li>
      </ul>
    `,
    contents: [
      {
        id: "htmlInternationalization_1",
        title: "Language and Text Direction",
        images: [
          "https://ourtutorials.in/html/img/intro1.JPG",
        ],
      },
    ],
  },
  {
    id: "htmlTimeEdits",
    title: "Dates, Times and Editorial Changes",
    about: `
      <h2 style="color: #3498db;">time</h2>
      <p>Use <code>&lt;time&gt;</code> to expose a machine-readable date or time using <code>datetime</code>. This is especially useful for applications that need to parse or identify dates.</p>
      <h2 style="color: #2ecc71;">ins and del</h2>
      <p>Use <code>&lt;ins&gt;</code> for inserted content and <code>&lt;del&gt;</code> for deleted content. Optional <code>datetime</code> and <code>cite</code> metadata can explain changes.</p>
      <pre><code>&lt;p&gt;Release date: &lt;time datetime="2026-10-07"&gt;October 7, 2026&lt;/time&gt;&lt;/p&gt;
&lt;p&gt;Price: &lt;del&gt;₹999&lt;/del&gt; &lt;ins&gt;₹799&lt;/ins&gt;&lt;/p&gt;</code></pre>
    `,
    contents: [
      {
        id: "htmlTimeEdits_1",
        title: "Time and Editorial Markup",
        images: [
          "https://mdn.github.io/shared-assets/images/examples/fx-nightly-512.png",
        ],
      },
    ],
  },
  {
    id: "htmlSvg",
    title: "SVG in HTML",
    about: `
      <p>SVG is a vector graphics language that can be embedded in HTML or referenced as an external resource.</p>
      <ul>
        <li>Use <code>&lt;img src="icon.svg"&gt;</code> when an SVG is treated as an external image.</li>
        <li>Use inline <code>&lt;svg&gt;</code> when the document needs to interact with the graphic as part of the DOM.</li>
        <li>Learn SVG elements such as <code>svg</code>, <code>path</code>, <code>circle</code>, <code>rect</code>, <code>line</code>, <code>text</code> and <code>g</code>.</li>
        <li>Understand the difference between vector graphics and raster images.</li>
        <li>Consider accessibility: meaningful SVG content may need an accessible name or text alternative depending on how it is used.</li>
      </ul>
    `,
    contents: [
      {
        id: "htmlSvg_1",
        title: "Inline SVG and External SVG",
        images: [
          "https://image3.slideserve.com/7084472/canvas-svg-l.jpg",
        ],
      },
    ],
  },
  {
    id: "htmlCanvas",
    title: "Canvas and HTML Graphics",
    about: `
      <p><code>&lt;canvas&gt;</code> provides a drawable bitmap surface whose pixels are typically manipulated with JavaScript.</p>
      <ul>
        <li>Understand <code>width</code> and <code>height</code> as the canvas drawing buffer dimensions, not merely CSS size.</li>
        <li>Provide fallback content inside the canvas for environments or users that cannot access the drawing.</li>
        <li>Know the common 2D drawing context and how it differs from SVG's DOM-based vector model.</li>
        <li>Remember that Canvas drawing itself does not automatically provide the same semantic structure as ordinary HTML.</li>
      </ul>
      <pre><code>&lt;canvas width="800" height="400"&gt;
  Your browser or assistive technology should be given a useful alternative here.
&lt;/canvas&gt;</code></pre>
    `,
    contents: [
      {
        id: "htmlCanvas_1",
        title: "Canvas vs SVG",
        images: [
          "https://image3.slideserve.com/7084472/canvas-svg-l.jpg",
        ],
      },
    ],
  },
  {
    id: "htmlScriptsStyles",
    title: "script, style, link and noscript",
    about: `
      <h2 style="color: #3498db;">script</h2>
      <p>Learn how JavaScript is connected to the document using <code>&lt;script&gt;</code>, including <code>src</code>, modules, <code>async</code>, <code>defer</code>, integrity and referrer-related options.</p>
      <h2 style="color: #2ecc71;">link</h2>
      <p><code>&lt;link&gt;</code> describes relationships with external resources, most commonly stylesheets, icons and resource hints.</p>
      <h2 style="color: #f39c12;">style</h2>
      <p><code>&lt;style&gt;</code> contains CSS directly in the document. Learn when it is useful and why external stylesheets are usually easier to maintain for larger applications.</p>
      <h2 style="color: #9b59b6;">noscript</h2>
      <p><code>&lt;noscript&gt;</code> can provide alternate content for environments where scripting is disabled or unavailable, depending on where it appears.</p>
    `,
    contents: [
      {
        id: "htmlScriptsStyles_1",
        title: "Connecting CSS and JavaScript",
        images: [
          "https://www.learntosap.com/html66.jpg",
        ],
      },
    ],
  },
  {
    id: "htmlPerformance",
    title: "HTML Loading and Performance",
    about: `
      <p>HTML itself is usually small; the larger performance costs often come from images, video, third-party embeds and resource-loading choices.</p>
      <ul>
        <li><code>loading="lazy"</code> can defer offscreen images or iframes where appropriate.</li>
        <li>Use <code>width</code> and <code>height</code> for images when practical to reserve layout space.</li>
        <li>Use responsive images to avoid downloading resources that are much larger than the rendered size.</li>
        <li>Understand <code>async</code> versus <code>defer</code> for scripts.</li>
        <li>Learn resource hints such as <code>preload</code>, <code>prefetch</code>, <code>preconnect</code>, <code>dns-prefetch</code> and <code>modulepreload</code>.</li>
        <li>Preload only genuinely important resources; excessive preloading can compete with more useful network work.</li>
        <li>Third-party iframes and media can be expensive, so load them intentionally.</li>
      </ul>
    `,
    contents: [
      {
        id: "htmlPerformance_1",
        title: "Resource Loading and Media Performance",
        images: [
          "https://mdn.github.io/shared-assets/images/examples/fx-nightly-512.png",
        ],
      },
    ],
  },
  {
    id: "htmlSecurity",
    title: "HTML Security and Safe Embedding",
    about: `
      <p>HTML cannot replace server-side security, but markup choices can reduce common risks and accidental privilege.</p>
      <ul>
        <li>Use HTTPS URLs for application resources and links wherever possible.</li>
        <li>For new-tab links and untrusted contexts, understand <code>rel="noopener"</code> and related relationship controls.</li>
        <li>Use iframe <code>sandbox</code> to restrict embedded capabilities.</li>
        <li>Understand <code>referrerpolicy</code> as a way to control how much referrer information is sent with requests.</li>
        <li>Use Subresource Integrity (<code>integrity</code> plus a suitable <code>crossorigin</code> setup) when consuming supported external scripts or stylesheets where appropriate.</li>
        <li>Never put secrets in HTML, attributes, hidden fields or comments. Anything delivered to the browser should be treated as observable by the user.</li>
        <li>Learn the relationship between HTML attributes and Content Security Policy, including nonces for allowed inline scripts when a CSP is configured.</li>
      </ul>
    `,
    contents: [
      {
        id: "htmlSecurity_1",
        title: "Safe Links and Embedded Content",
        images: [
          "https://www.learntosap.com/html66.jpg",
        ],
      },
    ],
  },
  {
    id: "htmlMicrodata",
    title: "Microdata and Structured Content",
    about: `
      <p>HTML can carry machine-readable annotations through microdata attributes.</p>
      <ul>
        <li><code>itemscope</code> starts an item scope.</li>
        <li><code>itemtype</code> identifies the vocabulary/type of the item.</li>
        <li><code>itemprop</code> names a property inside the item.</li>
        <li><code>itemid</code> can identify an item when supported by the vocabulary.</li>
        <li><code>itemref</code> allows additional properties to be referenced outside the item's subtree.</li>
      </ul>
      <pre><code>&lt;div itemscope itemtype="https://schema.org/Person"&gt;
  &lt;span itemprop="name"&gt;Asha&lt;/span&gt;
&lt;/div&gt;</code></pre>
      <p>Compare microdata with JSON-LD and understand that structured data should accurately describe the page content.</p>
    `,
    contents: [
      {
        id: "htmlMicrodata_1",
        title: "Machine-Readable HTML Annotations",
        images: [
          "https://www.tcpschool.com/lectures/img_html_html5_layout.png",
        ],
      },
    ],
  },
  {
    id: "htmlContentModels",
    title: "Content Categories and Valid Nesting",
    about: `
      <p>Understanding HTML content models helps you predict which elements can contain which other elements and why some markup combinations are invalid.</p>
      <ul>
        <li>Flow content.</li>
        <li>Sectioning content and sectioning roots.</li>
        <li>Heading content.</li>
        <li>Phrasing content.</li>
        <li>Embedded content.</li>
        <li>Interactive content.</li>
        <li>Palpable content.</li>
        <li>Transparent content models for elements such as <code>&lt;a&gt;</code> in appropriate contexts.</li>
      </ul>
      <p>Learn practical rules such as why headings belong in structural content, why interactive elements should not be nested arbitrarily, and why a semantic element is not automatically a generic wrapper.</p>
    `,
    contents: [
      {
        id: "htmlContentModels_1",
        title: "HTML Content Model Overview",
        images: [
          "https://www.tcpschool.com/lectures/img_html_html5_layout.png",
        ],
      },
    ],
  },
  {
    id: "htmlDomParsing",
    title: "HTML Parsing, DOM Tree and Browser Interpretation",
    about: `
      <p>HTML source text is parsed into a DOM tree. Learn the difference between the source text you write and the DOM that the browser constructs.</p>
      <ul>
        <li>The browser uses HTML parsing rules to create the document tree.</li>
        <li>Some omissions are allowed by the HTML syntax, and browsers may infer missing nodes or implied structure during parsing.</li>
        <li>Malformed markup does not necessarily prevent a page from rendering; browser error recovery is one reason valid markup still matters for predictable behavior.</li>
        <li>Understand the difference between attributes and live DOM properties at a conceptual level.</li>
        <li>Learn how the DOM tree becomes the basis for CSS styling, layout and JavaScript interaction.</li>
      </ul>
      <p>This topic is essential for understanding why the Elements panel in developer tools may not look exactly like the raw HTML source file.</p>
    `,
    contents: [
      {
        id: "htmlDomParsing_1",
        title: "HTML to DOM Concept",
        images: [
          "https://ourtutorials.in/html/img/intro1.JPG",
        ],
      },
    ],
  },
  {
    id: "htmlTemplateWebComponents",
    title: "template, slot and Web Component-Friendly HTML",
    about: `
      <p>Modern HTML also participates in Web Components and reusable component systems.</p>
      <ul>
        <li><code>&lt;template&gt;</code> stores markup that is not rendered immediately as normal document content.</li>
        <li><code>&lt;slot&gt;</code> defines insertion points for content supplied to a component's shadow tree.</li>
        <li>Learn <code>slot</code> as a global attribute and the difference between light DOM content and shadow DOM rendering.</li>
        <li>Understand that custom elements are primarily a JavaScript platform feature, while HTML provides the markup hooks and content structures used by components.</li>
        <li>Learn why semantic native HTML should still be preferred inside components whenever possible.</li>
      </ul>
      <pre><code>&lt;template id="user-card-template"&gt;
  &lt;article&gt;
    &lt;slot name="name"&gt;Unknown user&lt;/slot&gt;
  &lt;/article&gt;
&lt;/template&gt;</code></pre>
    `,
    contents: [
      {
        id: "htmlTemplateWebComponents_1",
        title: "Template and Component Markup",
        images: [
          "https://www.tcpschool.com/lectures/img_html_html5_layout.png",
        ],
      },
    ],
  },
  {
    id: "htmlBestPractices",
    title: "HTML Best Practices and Maintainability",
    about: `
      <ul>
        <li>Use lowercase element and attribute names consistently and quote attribute values.</li>
        <li>Choose semantic HTML based on meaning, not on default browser appearance.</li>
        <li>Keep HTML valid and properly nested; use a validator during development.</li>
        <li>Keep CSS responsible for presentation and JavaScript responsible for behavior that cannot be expressed declaratively.</li>
        <li>Give forms labels, required-state explanations and useful validation feedback.</li>
        <li>Provide meaningful document titles, language declarations and text alternatives.</li>
        <li>Prefer real buttons and links over clickable <code>div</code> elements.</li>
        <li>Avoid deprecated tags and presentation-only attributes.</li>
        <li>Use descriptive IDs and classes while avoiding unnecessary wrapper elements.</li>
        <li>Write HTML that remains understandable without looking at the CSS first.</li>
      </ul>
    `,
    contents: [
      {
        id: "htmlBestPractices_1",
        title: "Clean and Maintainable HTML",
        images: [
          "https://www.tcpschool.com/lectures/img_html_html5_layout.png",
        ],
      },
    ],
  },
  {
    id: "htmlDeprecated",
    title: "Deprecated and Obsolete HTML",
    about: `
      <p>Recognize older markup that may appear in legacy applications but should not be used in modern HTML authoring.</p>
      <ul>
        <li>Presentation-era tags such as <code>&lt;font&gt;</code>, <code>&lt;center&gt;</code> and <code>&lt;big&gt;</code>.</li>
        <li>Old frame-based systems such as <code>&lt;frameset&gt;</code>, <code>&lt;frame&gt;</code> and <code>&lt;noframes&gt;</code>.</li>
        <li>Legacy document-era elements such as <code>&lt;acronym&gt;</code>, <code>&lt;tt&gt;</code>, <code>&lt;strike&gt;</code> and other obsolete features.</li>
        <li>Deprecated table presentation attributes such as <code>border</code>, <code>cellspacing</code> and <code>cellpadding</code>.</li>
      </ul>
      <p>Know what these features mean when maintaining old code, but prefer current semantic HTML and CSS for new development.</p>
    `,
    contents: [
      {
        id: "htmlDeprecated_1",
        title: "Legacy vs Modern HTML",
        images: [
          "https://www.tcpschool.com/lectures/img_html_html5_layout.png",
        ],
      },
    ],
  },
  {
    id: "htmlValidationDebugging",
    title: "Validation, Developer Tools and Debugging HTML",
    about: `
      <p>Good HTML work includes a repeatable debugging workflow.</p>
      <ul>
        <li>Use browser developer tools to inspect the DOM, not just the source file.</li>
        <li>Check the Console for parser-related hints, script errors and warnings.</li>
        <li>Inspect accessibility information where browser tooling provides it.</li>
        <li>Use an HTML validator to catch structural and conformance problems.</li>
        <li>Inspect Network requests when images, CSS, scripts, iframes or media do not load.</li>
        <li>When an image fails, check the URL, relative path, HTTP status, MIME type, permissions, CSP and whether the external host permits embedding.</li>
        <li>When a form behaves unexpectedly, inspect the control's <code>name</code>, disabled state, validation state and the actual submitted request.</li>
      </ul>
    `,
    contents: [
      {
        id: "htmlValidationDebugging_1",
        title: "Inspecting HTML in Browser DevTools",
        images: [
          "https://ourtutorials.in/html/img/intro1.JPG",
        ],
      },
    ],
  },
  {
    id: "htmlProjects",
    title: "Hands-on HTML Projects",
    about: `
      <h2 style="color: #3498db;">Project 1: Personal Profile</h2>
      <p>Build a profile page with a title, heading hierarchy, image, bio, skills list, links and semantic structure.</p>
      <h2 style="color: #2ecc71;">Project 2: Accessible Registration Form</h2>
      <p>Build a complete form using labels, fieldsets, legends, input types, autocomplete, validation attributes, error text and a useful submission structure.</p>
      <h2 style="color: #f39c12;">Project 3: Product Page</h2>
      <p>Use semantic sections, responsive images, product information, a specification table, price/time markup, forms and a footer.</p>
      <h2 style="color: #9b59b6;">Project 4: Documentation Site</h2>
      <p>Build a documentation page with header, nav, main, articles, headings, code blocks, links, lists, tables and skip navigation.</p>
      <h2 style="color: #3498db;">Project 5: Media Gallery</h2>
      <p>Combine figure, picture, audio, video, subtitles and captions with accessible alternatives.</p>
      <h2 style="color: #2ecc71;">Project 6: Data Dashboard Markup</h2>
      <p>Build the HTML layer of a dashboard with data tables, headings, forms, status text, progress indicators and semantic grouping.</p>
    `,
    contents: [
      {
        id: "htmlProjects_1",
        title: "Build Real HTML Pages",
        images: [
          "https://www.tcpschool.com/lectures/img_html_html5_layout.png",
          "https://myschoolhouse.in/admin-panel/assets/upload-images/HTML-Form-Example2496-D-20-03-2025-T-02-51-09am.jpg",
        ],
      },
    ],
  },
  {
    id: "shortcuts",
    title: "HTML Shortcuts and Productivity",
    about: `
      <div>
        <h2 style="color: #3498db;">Emmet Essentials</h2>
        <ul>
          <li><code>!</code> expands to a basic HTML document in editors that support Emmet.</li>
          <li><code>div.container</code> creates a <code>div</code> with a class.</li>
          <li><code>ul&gt;li*5</code> creates a list with five items.</li>
          <li><code>nav&gt;ul&gt;li*3&gt;a</code> rapidly creates common navigation structures.</li>
          <li><code>input:text</code>, <code>input:email</code> and similar abbreviations create common form controls.</li>
          <li><code>lorem20</code> can generate placeholder text in supporting editors; replace it with real content before shipping.</li>
        </ul>
        <h2 style="color: #2ecc71;">Editor Skills</h2>
        <p>Learn multi-cursor editing, format-on-save, code folding, tag rename, bracket matching, quick navigation, snippets and HTML validation extensions in your editor of choice.</p>
        <h2 style="color: #f39c12;">Browser Skills</h2>
        <p>Learn view-source, Elements, Accessibility, Console, Network and responsive device emulation panels. Being fast at inspecting HTML is as important as typing it quickly.</p>
      </div>
    `,
    contents: [
      {
        id: "shortcuts_1",
        title: "Useful HTML and Emmet Shortcuts",
        images: [
          "https://ourtutorials.in/html/img/intro1.JPG",
          "https://www.learntosap.com/html66.jpg",
        ],
      },
    ],
  },
  {
    id: "htmlInterview",
    title: "HTML Interview and Tricky Concepts",
    about: `
      <p>Prepare for interviews by understanding the reasoning behind HTML rather than memorizing isolated definitions.</p>
      <h3 style="color: #3498db;">Core Questions</h3>
      <ul>
        <li>What is the difference between an element, tag and attribute?</li>
        <li>What is a void element? Give examples.</li>
        <li>Why do we use <code>&lt;!doctype html&gt;</code>?</li>
        <li>What is semantic HTML and why is it important?</li>
        <li>What is the difference between <code>strong</code> and <code>b</code>, or <code>em</code> and <code>i</code>?</li>
        <li>What is the difference between <code>div</code> and <code>span</code>?</li>
        <li>Why should images have <code>alt</code> text?</li>
        <li>What is the difference between <code>id</code> and <code>class</code>?</li>
      </ul>
      <h3 style="color: #2ecc71;">Forms and Accessibility</h3>
      <ul>
        <li>Why is the <code>name</code> attribute important in a form?</li>
        <li>GET vs POST?</li>
        <li>How does browser validation work?</li>
        <li>Why is a label important for an input?</li>
        <li>When should you use ARIA?</li>
        <li>Why is a native button usually better than a clickable <code>div</code>?</li>
      </ul>
      <h3 style="color: #f39c12;">Advanced Questions</h3>
      <ul>
        <li>What is the difference between <code>async</code> and <code>defer</code>?</li>
        <li>What does <code>srcset</code> do?</li>
        <li>When would you choose <code>picture</code>?</li>
        <li>What is the purpose of <code>sandbox</code> on an iframe?</li>
        <li>What are global attributes?</li>
        <li>What is the DOM, and how does parsing differ from the source text?</li>
        <li>What are deprecated HTML elements and why should they be avoided?</li>
      </ul>
    `,
    contents: [
      {
        id: "htmlInterview_1",
        title: "HTML Interview Questions and Concepts",
        images: [
          "https://www.tcpschool.com/lectures/img_html_html5_layout.png",
          "https://myschoolhouse.in/admin-panel/assets/upload-images/HTML-Form-Example2496-D-20-03-2025-T-02-51-09am.jpg",
        ],
      },
    ],
  },
]
