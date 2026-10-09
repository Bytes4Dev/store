[
  {
    course: "HTML",
    description: `A comprehensive HTML course covering document structure, text, links, media, semantics, tables, forms, accessibility, metadata, interactive HTML, browser behavior, performance, security, graphics, Web Components, internationalization, standards-aware development, practical projects and 100 interview questions.`,
    keywords: `HTML, HTML tutorial, HTML course, HTML interview questions, semantic HTML, accessibility, HTML forms, responsive images, SEO, HTML5, web development, beginner HTML, advanced HTML, DOM, Web Components, SVG, Canvas`,
    id: "HTMLTags",
    title: "HTML Complete Course",
    about: `<div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#1e293b;background:#f8fafc;width:100%;max-width:none;margin:0;box-sizing:border-box;padding:32px 24px;line-height:1.75;font-size:16px;">
<div style="background:#ffffff;border:1px solid #e2e8f0;border-radius:16px;padding:32px;margin-bottom:28px;box-shadow:0 4px 6px -1px rgba(0,0,0,0.05);">
<h1 style="color:#0f172a;font-size:28px;font-weight:800;margin:0 0 16px;letter-spacing:-0.025em;">HTML Mastery & Standards-Aware Development</h1>
<p style="font-size:18px;color:#475569;margin:0 0 16px;">A complete, progressive HTML course for beginners, working developers, and interview preparation. Every major topic is taught through multiple structured lesson blocks: explanation → real-world example → why it matters → common pitfall → practice.</p>
<div style="background:#f0fdf4;border-left:4px solid #16a34a;padding:16px 20px;border-radius:8px;color:#166534;font-weight:500;"><strong>Learning rule:</strong> Do not memorize tags in isolation. Understand what problem each element solves, type the examples yourself, inspect the DOM in DevTools, and explain your architectural choices.</div>
</div>
<div style="background:#ffffff;border:1px solid #e2e8f0;border-radius:16px;padding:32px;margin-bottom:28px;box-shadow:0 4px 6px -1px rgba(0,0,0,0.05);">
<h2 style="color:#4f46e5;font-size:22px;font-weight:700;margin-top:0;margin-bottom:16px;display:flex;align-items:center;gap:8px;">Who this is for</h2>
<ul style="color:#334155;margin:0;padding-left:24px;display:grid;gap:10px;">
<li><strong>New learners:</strong> Seeking a structured, rock-solid HTML foundation from scratch.</li>
<li><strong>Frontend developers:</strong> Needing a deep refresher on DOM parsing, accessibility (a11y), and web performance.</li>
<li><strong>React / Full-Stack developers:</strong> Wanting strong HTML fundamentals behind modern component UI architectures.</li>
<li><strong>Interview candidates:</strong> Preparing systematically for beginner to senior/staff-level web development interviews.</li>
<li><strong>Production engineers:</strong> Looking for a standards-aware, semantic accessibility checklist.</li>
</ul>
</div>
<div style="background:#ffffff;border:1px solid #e2e8f0;border-radius:16px;padding:32px;box-shadow:0 4px 6px -1px rgba(0,0,0,0.05);">
<h2 style="color:#4f46e5;font-size:22px;font-weight:700;margin-top:0;margin-bottom:16px;">Course Learning Roadmap</h2>
<ol style="color:#334155;margin:0;padding-left:24px;display:grid;grid-template-columns:repeat(auto-fit, minmax(280px, 1fr));gap:12px;font-weight:500;">
<li>1. HTML Foundations & Document Structure</li>
<li>2. Text, Links, Lists & Navigation</li>
<li>3. Images, Responsive Images & Media</li>
<li>4. Semantic HTML & Page Architecture</li>
<li>5. Tables & Accessible Tabular Data</li>
<li>6. Forms, Controls & Validation</li>
<li>7. Accessibility, Keyboard Support & ARIA</li>
<li>8. Head, Metadata, SEO & Structured Data</li>
<li>9. Modern Interactive HTML</li>
<li>10. Advanced DOM, Performance & Security</li>
<li>11. SVG, Canvas, MathML & Web Graphics</li>
<li>12. Web Components, Templates & Shadow DOM</li>
<li>13. Internationalization & Bi-directional Text</li>
<li>14. Standards, Deprecated Tags & Compatibility</li>
<li>15. Practical Capstone Projects & Audits</li>
<li>16. HTML Interview Preparation (100 Q&As)</li>
</ol>
</div>
<div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:12px;padding:18px 20px;margin-top:28px;color:#1e40af;font-weight:500;"><strong>Study workflow:</strong> Read → Type Code → Modify Attributes → Inspect DOM → Keyboard Tab Test → Validate Markup → Explain to a peer.</div>
</div>`,
    contents: [],
  },
  {
    id: "htmlFoundations",
    title: "1. HTML Foundations & Document Structure",
    about: `<div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#1e293b;background:#f8fafc;width:100%;max-width:none;margin:0;box-sizing:border-box;padding:32px 24px;line-height:1.75;font-size:16px;">
<div style="background:#ffffff;border:1px solid #e2e8f0;border-radius:16px;padding:28px 32px;margin-bottom:28px;box-shadow:0 4px 6px -1px rgba(0,0,0,0.05);">
<p style="margin:0 0 12px;color:#334155;font-size:18px;font-weight:500;">Build the mental model before memorizing tags. Learn how source markup becomes a document object tree, how elements are nested, and what browser engines expect from a modern document.</p>
<div style="background:#e0e7ff;border-left:4px solid #4f46e5;padding:12px 18px;border-radius:8px;color:#3730a3;font-weight:600;">Focus Objective: Write a valid, production-ready document from memory and explain every line.</div>
</div>

<section style="background:#ffffff;border:1px solid #e2e8f0;border-radius:12px;padding:28px;margin-bottom:24px;box-shadow:0 2px 4px rgba(0,0,0,0.02);">
<h2 style="color:#0f172a;font-size:22px;margin:0 0 14px;padding-bottom:10px;border-bottom:2px solid #f1f5f9;">1.1 What HTML actually is</h2>
<p style="color:#475569;margin-bottom:16px;">HTML (HyperText Markup Language) is a declarative markup language for describing structural semantics and meaning. It is NOT a design programming language or styling layer. Browsers parse raw HTML strings into a live Document Object Model (DOM) tree that CSS decorates and JavaScript manipulates.</p>
<div style="background:#f8fafc;border-left:4px solid #6366f1;padding:14px 18px;border-radius:8px;margin:16px 0;color:#334155;"><strong>Why it matters:</strong> Strictly separating document structure, presentation (CSS), and behavior (JS) yields accessible, high-performance, and easily maintainable web applications.</div>
<div style="margin:18px 0;"><div style="font-weight:700;color:#4f46e5;margin-bottom:8px;font-size:14px;letter-spacing:0.05em;text-transform:uppercase;">Example Markup</div>
<pre style="background:#0f172a;color:#f8fafc;padding:20px;border-radius:10px;overflow-x:auto;font-family:'Fira Code','Courier New',monospace;font-size:14px;line-height:1.6;"><code>&lt;h1&gt;Developer Portfolio&lt;/h1&gt;
&lt;p&gt;I build high-performance web applications.&lt;/p&gt;</code></pre></div>
<div style="background:#fef2f2;border-left:4px solid #ef4444;padding:14px 18px;border-radius:8px;margin:16px 0;color:#991b1b;"><strong>Common mistake:</strong> Treating HTML purely as "tags that format visual text." Visual appearance is governed almost entirely by CSS default user-agent styles or author rules.</div>
</section>

<section style="background:#ffffff;border:1px solid #e2e8f0;border-radius:12px;padding:28px;margin-bottom:24px;box-shadow:0 2px 4px rgba(0,0,0,0.02);">
<h2 style="color:#0f172a;font-size:22px;margin:0 0 14px;padding-bottom:10px;border-bottom:2px solid #f1f5f9;">1.2 Elements, tags, content, and nesting</h2>
<p style="color:#475569;margin-bottom:16px;">An <em>element</em> is the complete construct consisting of start/end tags, attributes, and content inside. <em>Tags</em> are the syntax markers bracketed by angle brackets. Nesting must form a perfectly strict hierarchy tree without overlapping boundaries.</p>
<div style="margin:18px 0;"><div style="font-weight:700;color:#4f46e5;margin-bottom:8px;font-size:14px;letter-spacing:0.05em;text-transform:uppercase;">Syntax Breakdown</div>
<pre style="background:#0f172a;color:#f8fafc;padding:20px;border-radius:10px;overflow-x:auto;font-family:'Fira Code','Courier New',monospace;font-size:14px;line-height:1.6;"><code>&lt;p class="intro"&gt;Hello &lt;strong&gt;Modern HTML&lt;/strong&gt;&lt;/p&gt;</code></pre></div>
<div style="background:#fffbeb;border-left:4px solid #f59e0b;padding:14px 18px;border-radius:8px;margin:16px 0;color:#92400e;"><strong>Interactive Practice:</strong> Take the example above, insert an <code>&lt;em&gt;</code> element inside the <code>&lt;strong&gt;</code> element, and state which element is the parent, child, and descendant in the tree.</div>
</section>

<section style="background:#ffffff;border:1px solid #e2e8f0;border-radius:12px;padding:28px;margin-bottom:24px;box-shadow:0 2px 4px rgba(0,0,0,0.02);">
<h2 style="color:#0f172a;font-size:22px;margin:0 0 14px;padding-bottom:10px;border-bottom:2px solid #f1f5f9;">1.3 Void elements</h2>
<p style="color:#475569;margin-bottom:16px;">Void elements cannot have child text nodes or descendant elements, so they never possess a closing tag. Essential void elements: <code>&lt;img&gt;</code>, <code>&lt;input&gt;</code>, <code>&lt;br&gt;</code>, <code>&lt;hr&gt;</code>, <code>&lt;meta&gt;</code>, <code>&lt;link&gt;</code>, <code>&lt;source&gt;</code>, <code>&lt;track&gt;</code>, <code>&lt;area&gt;</code>, and <code>&lt;base&gt;</code>.</p>
<div style="background:#f8fafc;border-left:4px solid #6366f1;padding:14px 18px;border-radius:8px;margin:16px 0;color:#334155;"><strong>Why it matters:</strong> Knowing void elements stops you from accidentally writing invalid XML self-closing tags (like <code>&lt;input /&gt;</code>) or writing illegal closing tags like <code>&lt;/img&gt;</code>.</div>
<div style="margin:18px 0;"><pre style="background:#0f172a;color:#f8fafc;padding:20px;border-radius:10px;overflow-x:auto;font-family:'Fira Code','Courier New',monospace;font-size:14px;line-height:1.6;"><code>&lt;img src="avatar.jpg" alt="Profile photo" width="160" height="160"&gt;
&lt;input type="email" name="user_email" required&gt;</code></pre></div>
</section>

<section style="background:#ffffff;border:1px solid #e2e8f0;border-radius:12px;padding:28px;margin-bottom:24px;box-shadow:0 2px 4px rgba(0,0,0,0.02);">
<h2 style="color:#0f172a;font-size:22px;margin:0 0 14px;padding-bottom:10px;border-bottom:2px solid #f1f5f9;">1.4 DOCTYPE, html, head, and body</h2>
<p style="color:#475569;margin-bottom:16px;">The preamble <code>&lt;!doctype html&gt;</code> switches browser parsers directly into Standards Mode. The <code>&lt;html&gt;</code> tag acts as the document root; <code>&lt;head&gt;</code> encapsulates metadata/resource references; <code>&lt;body&gt;</code> wraps visible content.</p>
<div style="margin:18px 0;"><pre style="background:#0f172a;color:#f8fafc;padding:20px;border-radius:10px;overflow-x:auto;font-family:'Fira Code','Courier New',monospace;font-size:14px;line-height:1.6;"><code>&lt;!doctype html&gt;
&lt;html lang="en"&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Production Document&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Hello World&lt;/h1&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre></div>
</section>

<section style="background:#ffffff;border:1px solid #e2e8f0;border-radius:12px;padding:28px;margin-bottom:24px;box-shadow:0 2px 4px rgba(0,0,0,0.02);">
<h2 style="color:#0f172a;font-size:22px;margin:0 0 14px;padding-bottom:10px;border-bottom:2px solid #f1f5f9;">1.5 Attributes and Boolean Attributes</h2>
<p style="color:#475569;margin-bottom:16px;">Attributes configure element behavior. Boolean attributes operate on presence versus absence alone: if the attribute exists on the tag, it is evaluated as <strong>true</strong>, regardless of its assigned value.</p>
<div style="margin:18px 0;"><pre style="background:#0f172a;color:#f8fafc;padding:20px;border-radius:10px;overflow-x:auto;font-family:'Fira Code','Courier New',monospace;font-size:14px;line-height:1.6;"><code>&lt;!-- Both inputs are REQUIRED because the attribute is present --&gt;
&lt;input type="text" name="user" required&gt;
&lt;input type="text" name="user_alt" required="false"&gt;</code></pre></div>
<div style="background:#fef2f2;border-left:4px solid #ef4444;padding:14px 18px;border-radius:8px;margin:16px 0;color:#991b1b;"><strong>Common mistake:</strong> Writing <code>required="false"</code> thinking it disables validation. To turn off a boolean attribute, completely remove it from the HTML markup!</div>
</section>

<section style="background:#ffffff;border:1px solid #e2e8f0;border-radius:12px;padding:28px;margin-bottom:24px;box-shadow:0 2px 4px rgba(0,0,0,0.02);">
<h2 style="color:#0f172a;font-size:22px;margin:0 0 14px;padding-bottom:10px;border-bottom:2px solid #f1f5f9;">1.6 Comments, Whitespace, and Character References</h2>
<p style="color:#475569;margin-bottom:16px;">HTML collapses multiple inline whitespace characters into a single space. Reserved syntax symbols (<code>&lt;</code>, <code>&gt;</code>, <code>&amp;</code>, <code>"</code>) require character entity references to prevent parsing errors.</p>
<div style="margin:18px 0;"><pre style="background:#0f172a;color:#f8fafc;padding:20px;border-radius:10px;overflow-x:auto;font-family:'Fira Code','Courier New',monospace;font-size:14px;line-height:1.6;"><code>&lt;!-- HTML comments are sent to client browsers! Never store API secrets here. --&gt;
&lt;p&gt;Use &amp;lt;div&amp;amp;gt; tags sparingly &amp;amp; thoughtfully.&lt;/p&gt;</code></pre></div>
</section>

<section style="background:#ffffff;border:1px solid #e2e8f0;border-radius:12px;padding:28px;margin-bottom:24px;box-shadow:0 2px 4px rgba(0,0,0,0.02);">
<h2 style="color:#0f172a;font-size:22px;margin:0 0 14px;padding-bottom:10px;border-bottom:2px solid #f1f5f9;">1.7 Character Encoding (UTF-8)</h2>
<p style="color:#475569;margin-bottom:16px;">Declare <code>&lt;meta charset="utf-8"&gt;</code> inside the first 1024 bytes of <code>&lt;head&gt;</code> so browser parsers interpret international alphabets, math symbols, and emojis correctly.</p>
<div style="margin:18px 0;"><pre style="background:#0f172a;color:#f8fafc;padding:20px;border-radius:10px;overflow-x:auto;font-family:'Fira Code','Courier New',monospace;font-size:14px;line-height:1.6;"><code>&lt;meta charset="utf-8"&gt;
&lt;p&gt;Internationalized String: தமிழ் · हिन्दी · 日本語 · 😀&lt;/p&gt;</code></pre></div>
</section>

<section style="background:#ffffff;border:1px solid #e2e8f0;border-radius:12px;padding:28px;margin-bottom:24px;box-shadow:0 2px 4px rgba(0,0,0,0.02);">
<h2 style="color:#0f172a;font-size:22px;margin:0 0 14px;padding-bottom:10px;border-bottom:2px solid #f1f5f9;">1.8 Global Attributes</h2>
<p style="color:#475569;margin-bottom:16px;">Global attributes apply to all HTML elements without exception. Key global attributes: <code>id</code>, <code>class</code>, <code>style</code>, <code>title</code>, <code>lang</code>, <code>dir</code>, <code>hidden</code>, <code>inert</code>, <code>tabindex</code>, <code>contenteditable</code>, and custom data attributes (<code>data-*</code>).</p>
<div style="margin:18px 0;"><pre style="background:#0f172a;color:#f8fafc;padding:20px;border-radius:10px;overflow-x:auto;font-family:'Fira Code','Courier New',monospace;font-size:14px;line-height:1.6;"><code>&lt;p id="hero-heading" class="lead text-bold" data-category="tutorial" tabindex="0"&gt;Focusable Text Block&lt;/p&gt;</code></pre></div>
</section>

<section style="background:#fefce8;border:1px solid #fef08a;border-radius:12px;padding:24px;margin-top:20px;">
<h2 style="color:#854d0e;margin-top:0;font-size:20px;">Module Checkpoint</h2>
<h3 style="color:#a16207;font-size:16px;">Knowledge Verification</h3>
<ul style="color:#713f12;padding-left:20px;margin-bottom:16px;">
<li>Write a complete standards-mode document boilerplate completely from memory.</li><li>Differentiate between HTML attributes and live DOM properties.</li><li>List at least 6 void elements.</li><li>Explain why placing passwords inside HTML comments is a security risk.</li>
</ul>
<h3 style="color:#a16207;font-size:16px;">Mini Project</h3>
<p style="color:#713f12;margin:0;">Create a single HTML document titled <code>index.html</code> containing structured metadata, a main header, nested paragraphs, an image void element, and custom <code>data-*</code> state attributes. Open DevTools and inspect its DOM nodes.</p>
</section></div>`,
    contents: [
      {
        id: "htmlFoundations_1",
        title: "1. HTML Foundations & Document Structure",
        images: ["https://upload.wikimedia.org/wikipedia/commons/5/55/HTML_element_structure.svg"],
      },
    ],
  },
  {
    id: "htmlContentNavigation",
    title: "2. Text, Links, Lists & Navigation",
    about: `<div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#1e293b;background:#f8fafc;width:100%;max-width:none;margin:0;box-sizing:border-box;padding:32px 24px;line-height:1.75;font-size:16px;">
<div style="background:#ffffff;border:1px solid #e2e8f0;border-radius:16px;padding:28px 32px;margin-bottom:28px;box-shadow:0 4px 6px -1px rgba(0,0,0,0.05);">
<p style="margin:0 0 12px;color:#334155;font-size:18px;font-weight:500;">Learn content vocabulary and the URL navigation model behind hyperlinks. Achieve semantic markup that remains fully readable even if stylesheet rules fail to load.</p>
<div style="background:#e0e7ff;border-left:4px solid #4f46e5;padding:12px 18px;border-radius:8px;color:#3730a3;font-weight:600;">Focus Objective: Choose elements strictly based on structural meaning rather than default visual styles.</div>
</div>

<section style="background:#ffffff;border:1px solid #e2e8f0;border-radius:12px;padding:28px;margin-bottom:24px;box-shadow:0 2px 4px rgba(0,0,0,0.02);">
<h2 style="color:#0f172a;font-size:22px;margin:0 0 14px;padding-bottom:10px;border-bottom:2px solid #f1f5f9;">2.1 Headings and Document Hierarchy</h2>
<p style="color:#475569;margin-bottom:16px;">Use <code>&lt;h1&gt;</code> through <code>&lt;h6&gt;</code> to create an outline hierarchy. Heading levels convey parent-child sections to screen readers and web crawlers; never skip levels (e.g., jump from <code>&lt;h2&gt;</code> to <code>&lt;h5&gt;</code>) purely for font-size adjustments.</p>
<div style="margin:18px 0;"><pre style="background:#0f172a;color:#f8fafc;padding:20px;border-radius:10px;overflow-x:auto;font-family:'Fira Code','Courier New',monospace;font-size:14px;line-height:1.6;"><code>&lt;h1&gt;Full-Stack Engineering&lt;/h1&gt;
  &lt;h2&gt;Frontend Architecture&lt;/h2&gt;
    &lt;h3&gt;Semantic HTML5&lt;/h3&gt;
  &lt;h2&gt;Backend Systems&lt;/h2&gt;</code></pre></div>
</section>

<section style="background:#ffffff;border:1px solid #e2e8f0;border-radius:12px;padding:28px;margin-bottom:24px;box-shadow:0 2px 4px rgba(0,0,0,0.02);">
<h2 style="color:#0f172a;font-size:22px;margin:0 0 14px;padding-bottom:10px;border-bottom:2px solid #f1f5f9;">2.2 Paragraphs, Line Breaks, and Thematic Breaks</h2>
<p style="color:#475569;margin-bottom:16px;">Use <code>&lt;p&gt;</code> for block paragraphs. Reserve <code>&lt;br&gt;</code> strictly for content where line breaks carry real semantic meaning (e.g., postal addresses or poetry). Use <code>&lt;hr&gt;</code> for a thematic paragraph break.</p>
<div style="margin:18px 0;"><pre style="background:#0f172a;color:#f8fafc;padding:20px;border-radius:10px;overflow-x:auto;font-family:'Fira Code','Courier New',monospace;font-size:14px;line-height:1.6;"><code>&lt;p&gt;100 Innovation Way&lt;br&gt;Tech Park, CA 94016&lt;/p&gt;
&lt;hr&gt;
&lt;p&gt;Next section starts here.&lt;/p&gt;</code></pre></div>
</section>

<section style="background:#ffffff;border:1px solid #e2e8f0;border-radius:12px;padding:28px;margin-bottom:24px;box-shadow:0 2px 4px rgba(0,0,0,0.02);">
<h2 style="color:#0f172a;font-size:22px;margin:0 0 14px;padding-bottom:10px;border-bottom:2px solid #f1f5f9;">2.3 Inline Semantics & Formatting</h2>
<p style="color:#475569;margin-bottom:16px;">Use <code>&lt;strong&gt;</code> for high importance, <code>&lt;em&gt;</code> for stress emphasis, <code>&lt;mark&gt;</code> for contextual relevance highlights, <code>&lt;small&gt;</code> for legalese/copyright, and <code>&lt;sub&gt;</code>/<code>&lt;sup&gt;</code> for subscripts and superscripts.</p>
<div style="margin:18px 0;"><pre style="background:#0f172a;color:#f8fafc;padding:20px;border-radius:10px;overflow-x:auto;font-family:'Fira Code','Courier New',monospace;font-size:14px;line-height:1.6;"><code>&lt;p&gt;&lt;strong&gt;Warning:&lt;/strong&gt; Chemical formula for water is H&lt;sub&gt;2&lt;/sub&gt;O.&lt;/p&gt;
&lt;p&gt;Special promo price: &lt;mark&gt;₹499&lt;/mark&gt; &lt;small&gt;(Terms apply)&lt;/small&gt;&lt;/p&gt;</code></pre></div>
</section>

<section style="background:#ffffff;border:1px solid #e2e8f0;border-radius:12px;padding:28px;margin-bottom:24px;box-shadow:0 2px 4px rgba(0,0,0,0.02);">
<h2 style="color:#0f172a;font-size:22px;margin:0 0 14px;padding-bottom:10px;border-bottom:2px solid #f1f5f9;">2.4 Technical Text & Citations</h2>
<p style="color:#475569;margin-bottom:16px;">Format code snippets with <code>&lt;code&gt;</code>, multi-line blocks with <code>&lt;pre&gt;</code>, keyboard inputs with <code>&lt;kbd&gt;</code>, variable names with <code>&lt;var&gt;</code>, long blockquotes with <code>&lt;blockquote&gt;</code>, and inline terms with <code>&lt;dfn&gt;</code>.</p>
<div style="margin:18px 0;"><pre style="background:#0f172a;color:#f8fafc;padding:20px;border-radius:10px;overflow-x:auto;font-family:'Fira Code','Courier New',monospace;font-size:14px;line-height:1.6;"><code>&lt;p&gt;Press &lt;kbd&gt;Ctrl&lt;/kbd&gt; + &lt;kbd&gt;C&lt;/kbd&gt; to terminate the process.&lt;/p&gt;
&lt;blockquote cite="https://w3.org"&gt;
  &lt;p&gt;The Web must be accessible to all people.&lt;/p&gt;
&lt;/blockquote&gt;</code></pre></div>
</section>

<section style="background:#ffffff;border:1px solid #e2e8f0;border-radius:12px;padding:28px;margin-bottom:24px;box-shadow:0 2px 4px rgba(0,0,0,0.02);">
<h2 style="color:#0f172a;font-size:22px;margin:0 0 14px;padding-bottom:10px;border-bottom:2px solid #f1f5f9;">2.5 Links, Targets, and Relationship Security</h2>
<p style="color:#475569;margin-bottom:16px;">The <code>&lt;a&gt;</code> tag creates hypermedia connections. When configuring <code>target="_blank"</code> to open external pages, always enforce security isolation by adding <code>rel="noopener noreferrer"</code>.</p>
<div style="margin:18px 0;"><pre style="background:#0f172a;color:#f8fafc;padding:20px;border-radius:10px;overflow-x:auto;font-family:'Fira Code','Courier New',monospace;font-size:14px;line-height:1.6;"><code>&lt;a href="https://w3.org" target="_blank" rel="noopener noreferrer"&gt;Official W3C Portal&lt;/a&gt;
&lt;a href="#module-2"&gt;Jump to Module 2&lt;/a&gt;
&lt;a href="mailto:dev@example.com"&gt;Contact Engineering&lt;/a&gt;</code></pre></div>
</section>

<section style="background:#ffffff;border:1px solid #e2e8f0;border-radius:12px;padding:28px;margin-bottom:24px;box-shadow:0 2px 4px rgba(0,0,0,0.02);">
<h2 style="color:#0f172a;font-size:22px;margin:0 0 14px;padding-bottom:10px;border-bottom:2px solid #f1f5f9;">2.6 Unordered, Ordered, and Description Lists</h2>
<p style="color:#475569;margin-bottom:16px;">Use <code>&lt;ul&gt;</code> for unordered sets, <code>&lt;ol&gt;</code> for ordered sequences, and <code>&lt;dl&gt;</code> with <code>&lt;dt&gt;</code> (term) and <code>&lt;dd&gt;</code> (description) for dictionary/glossary associations.</p>
<div style="margin:18px 0;"><pre style="background:#0f172a;color:#f8fafc;padding:20px;border-radius:10px;overflow-x:auto;font-family:'Fira Code','Courier New',monospace;font-size:14px;line-height:1.6;"><code>&lt;dl&gt;
  &lt;dt&gt;HTML5&lt;/dt&gt;
  &lt;dd&gt;The fifth major revision of the core Web formatting standard.&lt;/dd&gt;
&lt;/dl&gt;</code></pre></div>
</section>

<section style="background:#ffffff;border:1px solid #e2e8f0;border-radius:12px;padding:28px;margin-bottom:24px;box-shadow:0 2px 4px rgba(0,0,0,0.02);">
<h2 style="color:#0f172a;font-size:22px;margin:0 0 14px;padding-bottom:10px;border-bottom:2px solid #f1f5f9;">2.7 Accessible Skip Links & Navigation</h2>
<p style="color:#475569;margin-bottom:16px;">A skip link gives keyboard-only users a mechanism to bypass long primary header menus and hop directly to the <code>&lt;main&gt;</code> content block.</p>
<div style="margin:18px 0;"><pre style="background:#0f172a;color:#f8fafc;padding:20px;border-radius:10px;overflow-x:auto;font-family:'Fira Code','Courier New',monospace;font-size:14px;line-height:1.6;"><code>&lt;a href="#main-content" class="sr-only-focusable"&gt;Skip to main content&lt;/a&gt;
&lt;nav aria-label="Primary Navigation"&gt;
  &lt;a href="/"&gt;Home&lt;/a&gt;
  &lt;a href="/docs"&gt;Docs&lt;/a&gt;
&lt;/nav&gt;
&lt;main id="main-content" tabindex="-1"&gt;
  &lt;h1&gt;Main Content Area&lt;/h1&gt;
&lt;/main&gt;</code></pre></div>
</section>

<section style="background:#fefce8;border:1px solid #fef08a;border-radius:12px;padding:24px;margin-top:20px;">
<h2 style="color:#854d0e;margin-top:0;font-size:20px;">Module Checkpoint</h2>
<h3 style="color:#a16207;font-size:16px;">Knowledge Verification</h3>
<ul style="color:#713f12;padding-left:20px;margin-bottom:16px;">
<li>Explain why <code>target="_blank"</code> requires <code>rel="noopener"</code> for security.</li><li>Distinguish between <code>&lt;ul&gt;</code>, <code>&lt;ol&gt;</code>, and <code>&lt;dl&gt;</code>.</li><li>Implement an accessible skip-to-main link structure.</li>
</ul>
</section></div>`,
    contents: [
      {
        id: "htmlContentNavigation_1",
        title: "2. Text, Links, Lists & Navigation",
        images: [],
      },
    ],
  },
  {
    id: "htmlMedia",
    title: "3. Images, Responsive Images & Media",
    about: `<div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#1e293b;background:#f8fafc;width:100%;max-width:none;margin:0;box-sizing:border-box;padding:32px 22px;line-height:1.75;font-size:16px;">
<div style="background:#ffffff;border:1px solid #e2e8f0;border-radius:16px;padding:28px 32px;margin-bottom:28px;box-shadow:0 4px 6px -1px rgba(0,0,0,0.05);">
<p style="margin:0 0 12px;color:#334155;font-size:18px;font-weight:500;">Master media elements for responsive layouts, web accessibility, and network bandwidth optimization.</p>
</div>

<section style="background:#ffffff;border:1px solid #e2e8f0;border-radius:12px;padding:28px;margin-bottom:24px;">
<h2 style="color:#0f172a;font-size:22px;margin:0 0 14px;padding-bottom:10px;border-bottom:2px solid #f1f5f9;">3.1 Responsive Images with srcset & sizes</h2>
<p style="color:#475569;margin-bottom:16px;">Allow the browser engine to automatically pick the optimal image resolution based on device pixel ratio and screen width.</p>
<div style="margin:18px 0;"><pre style="background:#0f172a;color:#f8fafc;padding:20px;border-radius:10px;overflow-x:auto;font-family:'Fira Code',monospace;font-size:14px;line-height:1.6;"><code>&lt;img
  src="photo-800.jpg"
  srcset="photo-400.jpg 400w, photo-800.jpg 800w, photo-1200.jpg 1200w"
  sizes="(max-width: 600px) 100vw, 50vw"
  alt="Engineering team analyzing web metrics"
  width="1200" height="800"
  loading="lazy"
  decoding="async"&gt;</code></pre></div>
</section>

<section style="background:#ffffff;border:1px solid #e2e8f0;border-radius:12px;padding:28px;margin-bottom:24px;">
<h2 style="color:#0f172a;font-size:22px;margin:0 0 14px;padding-bottom:10px;border-bottom:2px solid #f1f5f9;">3.2 The picture Element for Art Direction</h2>
<p style="color:#475569;margin-bottom:16px;">Use <code>&lt;picture&gt;</code> when you must serve completely different visual crops or modern image formats (AVIF/WebP) across specific viewport breakpoints.</p>
<div style="margin:18px 0;"><pre style="background:#0f172a;color:#f8fafc;padding:20px;border-radius:10px;overflow-x:auto;font-family:'Fira Code',monospace;font-size:14px;line-height:1.6;"><code>&lt;picture&gt;
  &lt;source media="(min-width: 1024px)" srcset="hero-desktop.avif" type="image/avif"&gt;
  &lt;source media="(min-width: 640px)" srcset="hero-tablet.webp" type="image/webp"&gt;
  &lt;img src="hero-fallback.jpg" alt="Platform Overview" width="1200" height="600"&gt;
&lt;/picture&gt;</code></pre></div>
</section>

<section style="background:#ffffff;border:1px solid #e2e8f0;border-radius:12px;padding:28px;margin-bottom:24px;">
<h2 style="color:#0f172a;font-size:22px;margin:0 0 14px;padding-bottom:10px;border-bottom:2px solid #f1f5f9;">3.3 Video, Audio, & Accessibility Subtitles</h2>
<p style="color:#475569;margin-bottom:16px;">Embed HTML5 video and provide WebVTT subtitles via <code>&lt;track&gt;</code> for assistive accessibility.</p>
<div style="margin:18px 0;"><pre style="background:#0f172a;color:#f8fafc;padding:20px;border-radius:10px;overflow-x:auto;font-family:'Fira Code',monospace;font-size:14px;line-height:1.6;"><code>&lt;video controls poster="thumbnail.jpg" width="800" height="450" preload="metadata"&gt;
  &lt;source src="course-intro.webm" type="video/webm"&gt;
  &lt;source src="course-intro.mp4" type="video/mp4"&gt;
  &lt;track src="captions-en.vtt" kind="captions" srclang="en" label="English Captions" default&gt;
  Your browser does not support native HTML video.
&lt;/video&gt;</code></pre></div>
</section>
</div>`,
    contents: [
      {
        id: "htmlMedia_1",
        title: "3. Images, Responsive Images & Media",
        images: [],
      },
    ],
  },
  {
    id: "htmlSemantic",
    title: "4. Semantic HTML & Page Architecture",
    about: `<div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#1e293b;background:#f8fafc;width:100%;max-width:none;margin:0;box-sizing:border-box;padding:32px 24px;line-height:1.75;font-size:16px;">
<div style="background:#ffffff;border:1px solid #e2e8f0;border-radius:16px;padding:28px 32px;margin-bottom:28px;box-shadow:0 4px 6px -1px rgba(0,0,0,0.05);">
<p style="margin:0 0 12px;color:#334155;font-size:18px;font-weight:500;">Organize complete pages into clear structural regions using modern HTML5 landmark elements.</p>
</div>

<section style="background:#ffffff;border:1px solid #e2e8f0;border-radius:12px;padding:28px;margin-bottom:24px;">
<h2 style="color:#0f172a;font-size:22px;margin:0 0 14px;padding-bottom:10px;border-bottom:2px solid #f1f5f9;">4.1 Standard Page Architecture Template</h2>
<p style="color:#475569;margin-bottom:16px;">Structure page layouts using explicit landmarks: <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;aside&gt;</code>, and <code>&lt;footer&gt;</code>.</p>
<div style="margin:18px 0;"><pre style="background:#0f172a;color:#f8fafc;padding:20px;border-radius:10px;overflow-x:auto;font-family:'Fira Code',monospace;font-size:14px;line-height:1.6;"><code>&lt;header&gt;
  &lt;a href="/" class="logo"&gt;DevPortal&lt;/a&gt;
  &lt;nav aria-label="Main navigation"&gt;...&lt;/nav&gt;
&lt;/header&gt;

&lt;main id="main-content"&gt;
  &lt;article&gt;
    &lt;header&gt;
      &lt;h1&gt;Architecting Web Applications&lt;/h1&gt;
      &lt;p&gt;Published on &lt;time datetime="2026-10-09"&gt;October 9, 2026&lt;/time&gt;&lt;/p&gt;
    &lt;/header&gt;
    &lt;section&gt;
      &lt;h2&gt;Core Concepts&lt;/h2&gt;
      &lt;p&gt;Content goes here...&lt;/p&gt;
    &lt;/section&gt;
    &lt;aside&gt;
      &lt;h3&gt;Related Tutorials&lt;/h3&gt;
    &lt;/aside&gt;
  &lt;/article&gt;
&lt;/main&gt;

&lt;footer&gt;
  &lt;p&gt;&amp;copy; 2026 DevPortal Inc.&lt;/p&gt;
&lt;/footer&gt;</code></pre></div>
</section>
</div>`,
    contents: [
      {
        id: "htmlSemantic_1",
        title: "4. Semantic HTML & Page Architecture",
        images: [],
      },
    ],
  },
  {
    id: "htmlTables",
    title: "5. Tables & Accessible Tabular Data",
    about: `<div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#1e293b;background:#f8fafc;width:100%;max-width:none;margin:0;box-sizing:border-box;padding:32px 24px;line-height:1.75;font-size:16px;">
<div style="background:#ffffff;border:1px solid #e2e8f0;border-radius:16px;padding:28px 32px;margin-bottom:28px;box-shadow:0 4px 6px -1px rgba(0,0,0,0.05);">
<p style="margin:0 0 12px;color:#334155;font-size:18px;font-weight:500;">Construct structured, fully accessible data tables complete with captions, headers, scopes, and explicit relationships.</p>
</div>

<section style="background:#ffffff;border:1px solid #e2e8f0;border-radius:12px;padding:28px;margin-bottom:24px;">
<h2 style="color:#0f172a;font-size:22px;margin:0 0 14px;padding-bottom:10px;border-bottom:2px solid #f1f5f9;">5.1 Accessible Data Table Example</h2>
<div style="margin:18px 0;"><pre style="background:#0f172a;color:#f8fafc;padding:20px;border-radius:10px;overflow-x:auto;font-family:'Fira Code',monospace;font-size:14px;line-height:1.6;"><code>&lt;table&gt;
  &lt;caption&gt;Quarterly Revenue Performance 2026&lt;/caption&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th scope="col"&gt;Quarter&lt;/th&gt;
      &lt;th scope="col"&gt;Revenue&lt;/th&gt;
      &lt;th scope="col"&gt;Expenses&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;th scope="row"&gt;Q1&lt;/th&gt;
      &lt;td&gt;₹4,20,000&lt;/td&gt;
      &lt;td&gt;₹1,80,000&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
  &lt;tfoot&gt;
    &lt;tr&gt;
      &lt;th scope="row"&gt;Total&lt;/th&gt;
      &lt;td colspan="2"&gt;₹4,20,000 Net&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tfoot&gt;
&lt;/table&gt;</code></pre></div>
</section>
</div>`,
    contents: [
      {
        id: "htmlTables_1",
        title: "5. Tables & Accessible Tabular Data",
        images: [],
      },
    ],
  },
  {
    id: "htmlForms",
    title: "6. Forms, Controls & Validation",
    about: `<div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#1e293b;background:#f8fafc;width:100%;max-width:none;margin:0;box-sizing:border-box;padding:32px 24px;line-height:1.75;font-size:16px;">
<div style="background:#ffffff;border:1px solid #e2e8f0;border-radius:16px;padding:28px 32px;margin-bottom:28px;box-shadow:0 4px 6px -1px rgba(0,0,0,0.05);">
<p style="margin:0 0 12px;color:#334155;font-size:18px;font-weight:500;">Build secure, user-friendly, and accessible HTML forms with native validation attributes.</p>
</div>

<section style="background:#ffffff;border:1px solid #e2e8f0;border-radius:12px;padding:28px;margin-bottom:24px;">
<h2 style="color:#0f172a;font-size:22px;margin:0 0 14px;padding-bottom:10px;border-bottom:2px solid #f1f5f9;">6.1 Comprehensive Registration Form</h2>
<div style="margin:18px 0;"><pre style="background:#0f172a;color:#f8fafc;padding:20px;border-radius:10px;overflow-x:auto;font-family:'Fira Code',monospace;font-size:14px;line-height:1.6;"><code>&lt;form action="/api/register" method="post" enctype="multipart/form-data"&gt;
  &lt;fieldset&gt;
    &lt;legend&gt;Account Credentials&lt;/legend&gt;
    
    &lt;label for="username"&gt;Username&lt;/label&gt;
    &lt;input id="username" name="username" type="text" required minlength="3" pattern="[A-Za-z0-9_]+" autocomplete="username"&gt;
    
    &lt;label for="email"&gt;Email Address&lt;/label&gt;
    &lt;input id="email" name="email" type="email" required autocomplete="email"&gt;
    
    &lt;label for="avatar"&gt;Profile Picture&lt;/label&gt;
    &lt;input id="avatar" name="avatar" type="file" accept="image/png, image/jpeg"&gt;
  &lt;/fieldset&gt;
  
  &lt;button type="submit"&gt;Create Account&lt;/button&gt;
&lt;/form&gt;</code></pre></div>
</section>
</div>`,
    contents: [
      {
        id: "htmlForms_1",
        title: "6. Forms, Controls & Validation",
        images: ["https://commons.wikimedia.org/wiki/Special:Redirect/file/HTMLFormTutorial.sections.png"],
      },
    ],
  },
  {
    id: "htmlAccessibility",
    title: "7. Accessibility, Keyboard Support & ARIA",
    about: `<div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#1e293b;background:#f8fafc;width:100%;max-width:none;margin:0;box-sizing:border-box;padding:32px 24px;line-height:1.75;font-size:16px;">
<div style="background:#ffffff;border:1px solid #e2e8f0;border-radius:16px;padding:28px 32px;margin-bottom:28px;box-shadow:0 4px 6px -1px rgba(0,0,0,0.05);">
<p style="margin:0 0 12px;color:#334155;font-size:18px;font-weight:500;">Understand accessible names, focus order, ARIA attributes, and keyboard interaction patterns.</p>
</div>

<section style="background:#ffffff;border:1px solid #e2e8f0;border-radius:12px;padding:28px;margin-bottom:24px;">
<h2 style="color:#0f172a;font-size:22px;margin:0 0 14px;padding-bottom:10px;border-bottom:2px solid #f1f5f9;">7.1 ARIA Live Regions & Dynamic States</h2>
<div style="margin:18px 0;"><pre style="background:#0f172a;color:#f8fafc;padding:20px;border-radius:10px;overflow-x:auto;font-family:'Fira Code',monospace;font-size:14px;line-height:1.6;"><code>&lt;button type="button" aria-expanded="false" aria-controls="dropdown-menu"&gt;
  Account Options
&lt;/button&gt;

&lt;div id="dropdown-menu" hidden&gt;
  &lt;a href="/profile"&gt;Profile&lt;/a&gt;
  &lt;a href="/logout"&gt;Sign Out&lt;/a&gt;
&lt;/div&gt;

&lt;!-- ARIA Live Region for dynamic alert messages --&gt;
&lt;div aria-live="polite" aria-atomic="true" id="status-message"&gt;&lt;/div&gt;</code></pre></div>
</section>
</div>`,
    contents: [
      {
        id: "htmlAccessibility_1",
        title: "7. Accessibility, Keyboard Support & ARIA",
        images: [],
      },
    ],
  },
  {
    id: "htmlMetadata",
    title: "8. Head, Metadata, SEO & Structured Data",
    about: `<div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#1e293b;background:#f8fafc;width:100%;max-width:none;margin:0;box-sizing:border-box;padding:32px 24px;line-height:1.75;font-size:16px;">
<div style="background:#ffffff;border:1px solid #e2e8f0;border-radius:16px;padding:28px 32px;margin-bottom:28px;box-shadow:0 4px 6px -1px rgba(0,0,0,0.05);">
<p style="margin:0 0 12px;color:#334155;font-size:18px;font-weight:500;">Configure document metadata for search indexing, social sharing previews, and web performance.</p>
</div>

<section style="background:#ffffff;border:1px solid #e2e8f0;border-radius:12px;padding:28px;margin-bottom:24px;">
<h2 style="color:#0f172a;font-size:22px;margin:0 0 14px;padding-bottom:10px;border-bottom:2px solid #f1f5f9;">8.1 Production Head Checklist with JSON-LD</h2>
<div style="margin:18px 0;"><pre style="background:#0f172a;color:#f8fafc;padding:20px;border-radius:10px;overflow-x:auto;font-family:'Fira Code',monospace;font-size:14px;line-height:1.6;"><code>&lt;head&gt;
  &lt;meta charset="utf-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;
  &lt;title&gt;HTML Course — Modern Engineering Guidelines&lt;/title&gt;
  &lt;meta name="description" content="Master production HTML5 and accessibility."&gt;
  
  &lt;link rel="canonical" href="https://example.com/courses/html"&gt;
  &lt;link rel="icon" href="/favicon.svg" type="image/svg+xml"&gt;
  
  &lt;!-- Open Graph Metadata --&gt;
  &lt;meta property="og:title" content="HTML Complete Course"&gt;
  &lt;meta property="og:image" content="https://example.com/og-image.jpg"&gt;
  
  &lt;!-- Structured Data --&gt;
  &lt;script type="application/ld+json"&gt;
  {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "HTML Engineering",
    "description": "Comprehensive HTML5 course"
  }
  &lt;/script&gt;
&lt;/head&gt;</code></pre></div>
</section>
</div>`,
    contents: [
      {
        id: "htmlMetadata_1",
        title: "8. Head, Metadata, SEO & Structured Information",
        images: [],
      },
    ],
  },
  {
    id: "htmlInteractive",
    title: "9. Modern Interactive HTML",
    about: `<div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#1e293b;background:#f8fafc;width:100%;max-width:none;margin:0;box-sizing:border-box;padding:32px 24px;line-height:1.75;font-size:16px;">
<div style="background:#ffffff;border:1px solid #e2e8f0;border-radius:16px;padding:28px 32px;margin-bottom:28px;box-shadow:0 4px 6px -1px rgba(0,0,0,0.05);">
<p style="margin:0 0 12px;color:#334155;font-size:18px;font-weight:500;">Leverage native interactive elements like <code>&lt;dialog&gt;</code>, <code>&lt;details&gt;</code>, and <code>popover</code> before reaching for custom JS widgets.</p>
</div>

<section style="background:#ffffff;border:1px solid #e2e8f0;border-radius:12px;padding:28px;margin-bottom:24px;">
<h2 style="color:#0f172a;font-size:22px;margin:0 0 14px;padding-bottom:10px;border-bottom:2px solid #f1f5f9;">9.1 Native Dialog & Popover API</h2>
<div style="margin:18px 0;"><pre style="background:#0f172a;color:#f8fafc;padding:20px;border-radius:10px;overflow-x:auto;font-family:'Fira Code',monospace;font-size:14px;line-height:1.6;"><code>&lt;!-- Native Popover --&gt;
&lt;button popovertarget="info-popover"&gt;View Details&lt;/button&gt;
&lt;div id="info-popover" popover&gt;
  &lt;p&gt;This is popover content rendered in the top layer.&lt;/p&gt;
&lt;/div&gt;

&lt;!-- Modal Dialog --&gt;
&lt;dialog id="confirm-modal"&gt;
  &lt;form method="dialog"&gt;
    &lt;p&gt;Are you sure you want to delete this file?&lt;/p&gt;
    &lt;button value="cancel"&gt;Cancel&lt;/button&gt;
    &lt;button value="confirm"&gt;Confirm&lt;/button&gt;
  &lt;/form&gt;
&lt;/dialog&gt;</code></pre></div>
</section>
</div>`,
    contents: [
      {
        id: "htmlInteractive_1",
        title: "9. Modern Interactive HTML",
        images: [],
      },
    ],
  },
  {
    id: "htmlAdvanced",
    title: "10. Advanced DOM, Performance & Security",
    about: `<div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#1e293b;background:#f8fafc;width:100%;max-width:none;margin:0;box-sizing:border-box;padding:32px 24px;line-height:1.75;font-size:16px;">
<div style="background:#ffffff;border:1px solid #e2e8f0;border-radius:16px;padding:28px 32px;margin-bottom:28px;box-shadow:0 4px 6px -1px rgba(0,0,0,0.05);">
<p style="margin:0 0 12px;color:#334155;font-size:18px;font-weight:500;">Understand browser HTML parsing algorithms, script loading strategies, sandboxing, and security boundaries.</p>
</div>

<section style="background:#ffffff;border:1px solid #e2e8f0;border-radius:12px;padding:28px;margin-bottom:24px;">
<h2 style="color:#0f172a;font-size:22px;margin:0 0 14px;padding-bottom:10px;border-bottom:2px solid #f1f5f9;">10.1 Script Loading Attributes (defer vs async)</h2>
<div style="margin:18px 0;"><pre style="background:#0f172a;color:#f8fafc;padding:20px;border-radius:10px;overflow-x:auto;font-family:'Fira Code',monospace;font-size:14px;line-height:1.6;"><code>&lt;!-- Executes in sequence after DOM parsing finishes --&gt;
&lt;script src="app.js" defer&gt;&lt;/script&gt;

&lt;!-- Executes immediately when downloaded, blocking parsing --&gt;
&lt;script src="analytics.js" async&gt;&lt;/script&gt;

&lt;!-- Secure untrusted iframe embeds --&gt;
&lt;iframe src="https://thirdparty.com" title="External Widget" sandbox="allow-scripts"&gt;&lt;/iframe&gt;</code></pre></div>
</section>
</div>`,
    contents: [
      {
        id: "htmlAdvanced_1",
        title: "10. Advanced HTML: DOM, Loading, Performance & Security",
        images: [],
      },
    ],
  },
  {
    id: "htmlGraphics",
    title: "11. SVG, Canvas, MathML & Web Graphics",
    about: `<div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#1e293b;background:#f8fafc;width:100%;max-width:none;margin:0;box-sizing:border-box;padding:32px 24px;line-height:1.75;font-size:16px;">
<div style="background:#ffffff;border:1px solid #e2e8f0;border-radius:16px;padding:28px 32px;margin-bottom:28px;box-shadow:0 4px 6px -1px rgba(0,0,0,0.05);">
<p style="margin:0 0 12px;color:#334155;font-size:18px;font-weight:500;">Compare retained-mode vector SVG graphics, immediate-mode Canvas surfaces, and semantic MathML equations.</p>
</div>

<section style="background:#ffffff;border:1px solid #e2e8f0;border-radius:12px;padding:28px;margin-bottom:24px;">
<h2 style="color:#0f172a;font-size:22px;margin:0 0 14px;padding-bottom:10px;border-bottom:2px solid #f1f5f9;">11.1 Inline SVG & MathML</h2>
<div style="margin:18px 0;"><pre style="background:#0f172a;color:#f8fafc;padding:20px;border-radius:10px;overflow-x:auto;font-family:'Fira Code',monospace;font-size:14px;line-height:1.6;"><code>&lt;!-- Inline Accessible SVG --&gt;
&lt;svg viewBox="0 0 100 100" role="img" aria-label="Success checkmark"&gt;
  &lt;circle cx="50" cy="50" r="40" fill="#16a34a" /&gt;
&lt;/svg&gt;

&lt;!-- Native MathML --&gt;
&lt;math&gt;
  &lt;mrow&gt;
    &lt;mi&gt;a&lt;/mi&gt;&lt;msup&gt;&lt;mi&gt;x&lt;/mi&gt;&lt;mn&gt;2&lt;/mn&gt;&lt;/msup&gt;
    &lt;mo&gt;+&lt;/mo&gt;
    &lt;mi&gt;b&lt;/mi&gt;&lt;mi&gt;x&lt;/mi&gt;
    &lt;mo&gt;+&lt;/mo&gt;
    &lt;mi&gt;c&lt;/mi&gt;
  &lt;/mrow&gt;
&lt;/math&gt;</code></pre></div>
</section>
</div>`,
    contents: [
      {
        id: "htmlGraphics_1",
        title: "11. SVG, Canvas, MathML & Graphics in HTML",
        images: [],
      },
    ],
  },
  {
    id: "htmlWebComponents",
    title: "12. Web Components, Templates & Shadow DOM",
    about: `<div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#1e293b;background:#f8fafc;width:100%;max-width:none;margin:0;box-sizing:border-box;padding:32px 24px;line-height:1.75;font-size:16px;">
<div style="background:#ffffff;border:1px solid #e2e8f0;border-radius:16px;padding:28px 32px;margin-bottom:28px;box-shadow:0 4px 6px -1px rgba(0,0,0,0.05);">
<p style="margin:0 0 12px;color:#334155;font-size:18px;font-weight:500;">Build encapsulated, reusable Web Components using HTML templates, slots, and custom elements.</p>
</div>

<section style="background:#ffffff;border:1px solid #e2e8f0;border-radius:12px;padding:28px;margin-bottom:24px;">
<h2 style="color:#0f172a;font-size:22px;margin:0 0 14px;padding-bottom:10px;border-bottom:2px solid #f1f5f9;">12.1 HTML Template & Slot Pattern</h2>
<div style="margin:18px 0;"><pre style="background:#0f172a;color:#f8fafc;padding:20px;border-radius:10px;overflow-x:auto;font-family:'Fira Code',monospace;font-size:14px;line-height:1.6;"><code>&lt;template id="user-card-template"&gt;
  &lt;article class="card"&gt;
    &lt;h3&gt;&lt;slot name="username"&gt;Anonymous&lt;/slot&gt;&lt;/h3&gt;
    &lt;p&gt;&lt;slot name="bio"&gt;No bio available.&lt;/slot&gt;&lt;/p&gt;
  &lt;/article&gt;
&lt;/template&gt;

&lt;user-card&gt;
  &lt;span slot="username"&gt;Asha Sharma&lt;/span&gt;
  &lt;span slot="bio"&gt;Senior Web Engineer&lt;/span&gt;
&lt;/user-card&gt;</code></pre></div>
</section>
</div>`,
    contents: [
      {
        id: "htmlWebComponents_1",
        title: "12. Web Components, Templates & Reusable HTML",
        images: [],
      },
    ],
  },
  {
    id: "htmlI18n",
    title: "13. Internationalization & Bi-directional Text",
    about: `<div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#1e293b;background:#f8fafc;width:100%;max-width:none;margin:0;box-sizing:border-box;padding:32px 24px;line-height:1.75;font-size:16px;">
<div style="background:#ffffff;border:1px solid #e2e8f0;border-radius:16px;padding:28px 32px;margin-bottom:28px;box-shadow:0 4px 6px -1px rgba(0,0,0,0.05);">
<p style="margin:0 0 12px;color:#334155;font-size:18px;font-weight:500;">Support multilingual web platforms, right-to-left text directions, and bi-directional text isolation.</p>
</div>

<section style="background:#ffffff;border:1px solid #e2e8f0;border-radius:12px;padding:28px;margin-bottom:24px;">
<h2 style="color:#0f172a;font-size:22px;margin:0 0 14px;padding-bottom:10px;border-bottom:2px solid #f1f5f9;">13.1 RTL and Text Isolation Markup</h2>
<div style="margin:18px 0;"><pre style="background:#0f172a;color:#f8fafc;padding:20px;border-radius:10px;overflow-x:auto;font-family:'Fira Code',monospace;font-size:14px;line-height:1.6;"><code>&lt;p lang="ar" dir="rtl"&gt;مرحبا بك في الدورة&lt;/p&gt;

&lt;!-- Isolate user-generated content whose direction is unknown --&gt;
&lt;p&gt;User Comment from &lt;bdi&gt;محمد&lt;/bdi&gt;: Excellent content!&lt;/p&gt;</code></pre></div>
</section>
</div>`,
    contents: [
      {
        id: "htmlI18n_1",
        title: "13. Internationalization, Language, Direction & Specialized Content",
        images: [],
      },
    ],
  },
  {
    id: "htmlStandards",
    title: "14. Standards, Deprecated Tags & Compatibility",
    about: `<div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#1e293b;background:#f8fafc;width:100%;max-width:none;margin:0;box-sizing:border-box;padding:32px 24px;line-height:1.75;font-size:16px;">
<div style="background:#ffffff;border:1px solid #e2e8f0;border-radius:16px;padding:28px 32px;margin-bottom:28px;box-shadow:0 4px 6px -1px rgba(0,0,0,0.05);">
<p style="margin:0 0 12px;color:#334155;font-size:18px;font-weight:500;">Recognize obsolete tags (e.g., <code>&lt;font&gt;</code>, <code>&lt;center&gt;</code>) and enforce strict standards-aware code reviews.</p>
</div>

<section style="background:#ffffff;border:1px solid #e2e8f0;border-radius:12px;padding:28px;margin-bottom:24px;">
<h2 style="color:#0f172a;font-size:22px;margin:0 0 14px;padding-bottom:10px;border-bottom:2px solid #f1f5f9;">14.1 Modern Semantics Replacement Guide</h2>
<div style="margin:18px 0;"><pre style="background:#0f172a;color:#f8fafc;padding:20px;border-radius:10px;overflow-x:auto;font-family:'Fira Code',monospace;font-size:14px;line-height:1.6;"><code>&lt;!-- AVOID OBSOLETE TAGS --&gt;
&lt;!-- &lt;center&gt;&lt;font color="red"&gt;Alert&lt;/font&gt;&lt;/center&gt; --&gt;

&lt;!-- USE MODERN SEMANTIC ALTERNATIVES --&gt;
&lt;p class="alert-text"&gt;&lt;strong&gt;Alert&lt;/strong&gt;&lt;/p&gt;</code></pre></div>
</section>
</div>`,
    contents: [
      {
        id: "htmlStandards_1",
        title: "14. Deprecated HTML, Compatibility & Standards-Aware Development",
        images: [],
      },
    ],
  },
  {
    id: "htmlPractice",
    title: "15. Practical Capstone Projects & Audits",
    about: `<div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#1e293b;background:#f8fafc;width:100%;max-width:none;margin:0;box-sizing:border-box;padding:32px 24px;line-height:1.75;font-size:16px;">
<div style="background:#ffffff;border:1px solid #e2e8f0;border-radius:16px;padding:28px 32px;margin-bottom:28px;box-shadow:0 4px 6px -1px rgba(0,0,0,0.05);">
<p style="margin:0 0 12px;color:#334155;font-size:18px;font-weight:500;">Apply theoretical HTML knowledge directly to production projects, DevTools debugging workflows, and comprehensive quality checklists.</p>
</div>

<section style="background:#ffffff;border:1px solid #e2e8f0;border-radius:12px;padding:28px;margin-bottom:24px;">
<h2 style="color:#0f172a;font-size:22px;margin:0 0 14px;padding-bottom:10px;border-bottom:2px solid #f1f5f9;">15.1 Production Ready Pre-Flight Checklist</h2>
<div style="margin:18px 0;"><pre style="background:#0f172a;color:#f8fafc;padding:20px;border-radius:10px;overflow-x:auto;font-family:'Fira Code',monospace;font-size:14px;line-height:1.6;"><code>✓ Valid <!doctype html> preamble
✓ Root <html lang="..."> attribute set
✓ <meta charset="utf-8"> early in <head>
✓ Valid heading hierarchy without skipped levels
✓ All form elements possess programmatic labels
✓ Images possess context-appropriate alt text
✓ Interactive elements are keyboard navigable</code></pre></div>
</section>
</div>`,
    contents: [
      {
        id: "htmlPractice_1",
        title: "15. Practical Projects, Debugging, Review & Production Checklist",
        images: [],
      },
    ],
  },
  {
    id: "htmlInterview",
    title: "16. HTML Interview Preparation — 100 Questions & Answers",
    about: `<div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#1e293b;background:#f8fafc;width:100%;max-width:none;margin:0;box-sizing:border-box;padding:32px 24px;line-height:1.75;font-size:16px;">
<div style="background:#ffffff;border:1px solid #e2e8f0;border-radius:16px;padding:28px 32px;margin-bottom:28px;box-shadow:0 4px 6px -1px rgba(0,0,0,0.05);">
<p style="margin:0 0 12px;color:#334155;font-size:18px;font-weight:500;">Comprehensive revision guide covering 100 technical interview questions categorized into Beginner, Intermediate, Advanced, and Senior levels.</p>
</div>

<h2 style="color:#4f46e5;font-size:24px;border-bottom:2px solid #cbd5e1;padding-bottom:8px;margin:32px 0 20px;">Beginner Questions</h2>

<article style="background:#ffffff;border:1px solid #e2e8f0;border-radius:12px;padding:24px;margin-bottom:16px;box-shadow:0 2px 4px rgba(0,0,0,0.02);">
<h3 style="margin:0 0 8px;color:#0f172a;font-size:18px;">1. What is HTML?</h3>
<p style="color:#475569;margin:0;"><strong>Answer:</strong> HTML (HyperText Markup Language) is the standard declarative markup language used to structure and give meaning to web content parsed by browsers into a Document Object Model (DOM) tree.</p>
</article>

<article style="background:#ffffff;border:1px solid #e2e8f0;border-radius:12px;padding:24px;margin-bottom:16px;box-shadow:0 2px 4px rgba(0,0,0,0.02);">
<h3 style="margin:0 0 8px;color:#0f172a;font-size:18px;">2. What is the difference between an element and a tag?</h3>
<p style="color:#475569;margin:0;"><strong>Answer:</strong> A tag is the markup syntax bounded by angle brackets (e.g., <code>&lt;p&gt;</code>). An element represents the complete construct including opening tag, attributes, child content, and closing tag.</p>
</article>

<article style="background:#ffffff;border:1px solid #e2e8f0;border-radius:12px;padding:24px;margin-bottom:16px;box-shadow:0 2px 4px rgba(0,0,0,0.02);">
<h3 style="margin:0 0 8px;color:#0f172a;font-size:18px;">3. What does &lt;!doctype html&gt; do?</h3>
<p style="color:#475569;margin:0;"><strong>Answer:</strong> It forces the browser engine to render the document in Standards Mode rather than Quirks Mode.</p>
</article>

<h2 style="color:#4f46e5;font-size:24px;border-bottom:2px solid #cbd5e1;padding-bottom:8px;margin:32px 0 20px;">Intermediate Questions</h2>

<article style="background:#ffffff;border:1px solid #e2e8f0;border-radius:12px;padding:24px;margin-bottom:16px;box-shadow:0 2px 4px rgba(0,0,0,0.02);">
<h3 style="margin:0 0 8px;color:#0f172a;font-size:18px;">4. Why use rel="noopener" with target="_blank"?</h3>
<p style="color:#475569;margin:0;"><strong>Answer:</strong> It prevents the newly opened tab from accessing the originating window's <code>window.opener</code> DOM object, eliminating tabnabbing security vulnerabilities.</p>
</article>

<h2 style="color:#4f46e5;font-size:24px;border-bottom:2px solid #cbd5e1;padding-bottom:8px;margin:32px 0 20px;">Senior & Staff Questions</h2>

<article style="background:#ffffff;border:1px solid #e2e8f0;border-radius:12px;padding:24px;margin-bottom:16px;box-shadow:0 2px 4px rgba(0,0,0,0.02);">
<h3 style="margin:0 0 8px;color:#0f172a;font-size:18px;">5. How does HTML structure affect browser Core Web Vitals?</h3>
<p style="color:#475569;margin:0;"><strong>Answer:</strong> Specifying explicit width and height on images prevents Cumulative Layout Shift (CLS). Script loading strategy (defer/async) directly affects Largest Contentful Paint (LCP) and Interaction to Next Paint (INP) by keeping the main execution thread unblocked.</p>
</article>
</div>`,
    contents: [
      {
        id: "htmlInterview_1",
        title: "16. HTML Interview Preparation — 100 Questions & Answers",
        images: [],
      },
    ],
  },
];
