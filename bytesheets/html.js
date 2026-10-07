[
  {
    course: "HTML",
    description: "A structured HTML course for beginners, working developers and interview preparation. Learn HTML through a small number of progressive stages with detailed explanations, practical examples, common mistakes, accessibility guidance, real-world workflows and interview questions.",
    keywords: "HTML, HTML tutorial, HTML course, HTML interview questions, semantic HTML, accessibility, HTML forms, responsive images, SEO, HTML5, web development, beginner HTML, advanced HTML",
    id: "HTMLTags",
    title: "HTML Complete Course",
    about: `<div style="font-family:"Inter","Avenir Next","Segoe UI",sans-serif;background:#fff;color:#292631;width:100%;max-width:none;margin:0;box-sizing:border-box;padding:30px 2vw 42px;line-height:1.82;font-size:16.5px;letter-spacing:0;">
<div style="background:#fff;border:1px solid #e7e0f0;border-radius:16px;padding:28px 30px;margin-bottom:26px;background:#fcfbf9;">
<h2 style="margin:0 0 10px;color:#514276;font-size:32px;letter-spacing:-0.02em;line-height:1.2;">Complete HTML Learning Path</h2>
<p style="font-size:17px;margin:0 0 10px;">This course is designed to work for three situations: learning HTML properly for the first time, refreshing HTML as an experienced developer, and preparing for an interview at short notice. The goal is understanding rather than memorizing dozens of isolated tags.</p>
<p style="margin:0;"><strong>Learning principle:</strong> understand the meaning of an element, see a realistic example, learn the common mistake, and then use the concept in a small project.</p>
</div>
<div style="background:#fff;border:1px solid #e7e3df;border-radius:12px;padding:24px 28px;margin-bottom:22px;">
<h2 style="color:#5d4e86;margin-top:0;">Choose Your Mode</h2>
<ul>
<li><strong>New learner:</strong> follow sections 1–6 in order, then complete accessibility and the practical projects.</li>
<li><strong>Regular developer:</strong> skim the fundamentals and spend more time on forms, accessibility, metadata, media, browser behavior and performance.</li>
<li><strong>Last-minute interview:</strong> review the Focus box of each section, study the examples, then go directly to the final 56 questions.</li>
<li><strong>Experienced developer:</strong> use the advanced section to refresh parsing, content models, loading, security, templates and browser behavior.</li>
</ul>
</div>
<div style="background:#fff;border:1px solid #e7e3df;border-radius:12px;padding:24px 28px;">
<h2 style="color:#5d4e86;margin-top:0;">Roadmap</h2>
<ol><li>HTML Foundations & Document Structure</li><li>Text, Links, Lists & Navigation</li><li>Images, Responsive Images & Media</li><li>Semantic HTML & Page Architecture</li><li>Tables & Accessible Tabular Data</li><li>Forms, Controls & Validation</li><li>Accessibility, Keyboard Support & ARIA</li><li>Head, Metadata, SEO & Structured Information</li><li>Modern Interactive HTML</li><li>Advanced HTML: DOM, Loading, Performance & Security</li><li>Practical Workflow, Debugging & Revision</li><li>Interview questions — Beginner → Intermediate → Advanced → Expert</li></ol>
</div>
<div style="background:#fbf8ef;border-left:4px solid #c79a4a;padding:15px 17px;border-radius:8px;margin:22px 0 0;">
<strong>How to study:</strong> First read the explanation, then type the example yourself, change one part of it, and explain the result in your own words. For interviews, use the examples to build your answer instead of memorizing definitions.
</div>
</div>`,
    contents: [],
  },
  {
    id: "htmlFoundations",
    title: "1. HTML Foundations & Document Structure",
    about: `<div style="font-family:"Inter","Avenir Next","Segoe UI",sans-serif;color:#302d35;background:#fff;color:#302d35;width:100%;max-width:none;margin:0;box-sizing:border-box;padding:30px 2vw 42px;line-height:1.82;font-size:16.5px;letter-spacing:0;">
<div style="background:#fff;border:1px solid #e7e0f0;border-radius:16px;padding:28px 30px;margin-bottom:26px;background:#fcfbf9;">
<h2 style="margin:0 0 9px;color:#5d4e86;font-size:32px;letter-spacing:-0.02em;">1. HTML Foundations & Document Structure</h2>
<p style="margin:0 0 10px;font-size:17px;color:#6b6670;">Build the mental model first. Understand what HTML is, how a browser reads it, and how elements, attributes, nesting and document structure fit together.</p>
<div style="background:#f4f0f9;border-left:4px solid #5d4e86;padding:12px 15px;border-radius:6px;"><strong>Focus:</strong> You should be able to write a clean HTML document from memory and explain every major line in it.</div>
</div>

<section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;border-radius:0;padding:6px 0 34px;margin:0 0 34px;box-shadow:none;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;letter-spacing:-0.01em;">1. Elements, Tags and Content</h2>
      <p style="color:#4c4852;">An <strong>element</strong> is the complete construct, while tags are the markup that starts and ends many elements. Learn opening tags, closing tags, element content, attributes and nesting.</p>
      <pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;p class="intro"&gt;Hello HTML&lt;/p&gt;</code></pre>
      <h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;letter-spacing:-0.01em;">2. Void Elements</h2>
      <p style="color:#4c4852;">Learn elements that do not contain child content, such as <code>&lt;img&gt;</code>, <code>&lt;br&gt;</code>, <code>&lt;hr&gt;</code>, <code>&lt;input&gt;</code>, <code>&lt;meta&gt;</code>, <code>&lt;link&gt;</code> and <code>&lt;source&gt;</code>. Do not invent closing tags for them.</p>
      <h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;letter-spacing:-0.01em;">3. Correct Nesting</h2>
      <p style="color:#4c4852;">Elements should be nested according to the HTML rules. Avoid crossing structures such as opening one element, opening another, and closing them in the wrong order.</p>
      <h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;letter-spacing:-0.01em;">4. DOCTYPE and Standards Mode</h2>
      <p style="color:#4c4852;">Start normal HTML documents with <code>&lt;!doctype html&gt;</code>. Its modern purpose is to trigger standards mode rather than the historical long doctypes used by older HTML and XHTML versions.</p>
      <h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;letter-spacing:-0.01em;">5. The Basic Document</h2>
      <pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;!doctype html&gt;
&lt;html lang="en"&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8"&gt;
    &lt;title&gt;My Page&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Hello&lt;/h1&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>
      <p style="color:#4c4852;">Understand what belongs in <code>&lt;head&gt;</code> versus what belongs in <code>&lt;body&gt;</code>, and why the <code>lang</code> attribute is important for accessibility and language-aware software.</p>
</section>

<section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;border-radius:0;padding:6px 0 34px;margin:0 0 34px;box-shadow:none;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;letter-spacing:-0.01em;">Comments</h2>
      <p style="color:#4c4852;">Use <code>&lt;!-- comment --&gt;</code> for notes that should not be rendered as page content. Do not put secrets, passwords or API keys in comments because comments are still delivered to the browser.</p>
      <h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;letter-spacing:-0.01em;">Character References</h2>
      <p style="color:#4c4852;">Learn named and numeric character references when markup characters need to appear as text, such as <code>&amp;lt;</code>, <code>&amp;gt;</code>, <code>&amp;amp;</code>, <code>&amp;quot;</code> and numeric references.</p>
      <h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;letter-spacing:-0.01em;">Unicode and Encoding</h2>
      <p style="color:#4c4852;">Understand UTF-8, why <code>&lt;meta charset="utf-8"&gt;</code> belongs early in the document head, and how encoding mistakes can produce broken characters.</p>
      <h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;letter-spacing:-0.01em;">Whitespace</h2>
      <p style="color:#4c4852;">HTML source whitespace is generally collapsed in normal phrasing content. Use CSS for layout and <code>&lt;pre&gt;</code> when preserving text formatting is part of the content.</p>
</section>

<section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;border-radius:0;padding:6px 0 34px;margin:0 0 34px;box-shadow:none;">
<p style="color:#4c4852;">Attributes configure elements and expose information or behavior to the browser.</p>
      <ul>
        <li>Learn attribute syntax: <code>name="value"</code>, spacing between attributes, quoting and case conventions.</li>
        <li>Understand common attributes such as <code>id</code>, <code>class</code>, <code>title</code>, <code>style</code>, <code>lang</code>, <code>dir</code> and <code>hidden</code>.</li>
        <li>Understand URL attributes such as <code>href</code>, <code>src</code>, <code>action</code> and <code>poster</code>.</li>
        <li>Learn Boolean attributes such as <code>disabled</code>, <code>checked</code>, <code>required</code>, <code>multiple</code>, <code>autofocus</code> and <code>readonly</code>.</li>
        <li>Learn enumerated attributes and why strings that look true or false do not always behave like JavaScript booleans.</li>
        <li>Understand attribute reflection conceptually: many HTML attributes correspond to properties on DOM objects.</li>
      </ul>
      <pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;input type="email" name="email" required autocomplete="email"&gt;</code></pre>
</section>
</div>`,
    contents: [
  {
    "id": "htmlFoundations_1",
    "title": "1. HTML Foundations & Document Structure",
    "images": [
      "https://upload.wikimedia.org/wikipedia/commons/5/55/HTML_element_structure.svg"
    ]
  }
],
  },
  {
    id: "htmlContentNavigation",
    title: "2. Text, Links, Lists & Navigation",
    about: `<div style="font-family:"Inter","Avenir Next","Segoe UI",sans-serif;color:#302d35;background:#fff;color:#302d35;width:100%;max-width:none;margin:0;box-sizing:border-box;padding:30px 2vw 42px;line-height:1.82;font-size:16.5px;letter-spacing:0;">
<div style="background:#fff;border:1px solid #e7e0f0;border-radius:16px;padding:28px 30px;margin-bottom:26px;background:#fcfbf9;">
<h2 style="margin:0 0 9px;color:#5d4e86;font-size:32px;letter-spacing:-0.02em;">2. Text, Links, Lists & Navigation</h2>
<p style="margin:0 0 10px;font-size:17px;color:#6b6670;">Learn to express content meaningfully and build navigation that remains understandable without relying on CSS or JavaScript.</p>
<div style="background:#f4f0f9;border-left:4px solid #5d4e86;padding:12px 15px;border-radius:6px;"><strong>Focus:</strong> Practice choosing the correct element before thinking about its visual appearance.</div>
</div>

<section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;border-radius:0;padding:6px 0 34px;margin:0 0 34px;box-shadow:none;">
<p style="color:#4c4852;">Master content-oriented text elements instead of styling everything with generic containers.</p>
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
      <p style="color:#4c4852;">Learn when an element communicates meaning and when CSS should handle visual presentation.</p>
</section>

<section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;border-radius:0;padding:6px 0 34px;margin:0 0 34px;box-shadow:none;">
<p style="color:#4c4852;">The <code>&lt;a&gt;</code> element is one of HTML's most important interactive elements. Learn both the markup and the URL model behind it.</p>
      <ul>
        <li>Absolute URLs versus relative URLs.</li>
        <li>Root-relative paths such as <code>/images/logo.png</code> and document-relative paths such as <code>../assets/app.css</code>.</li>
        <li>Fragments such as <code>#pricing</code> and linking to an element with a matching <code>id</code>.</li>
        <li>Protocols such as <code>https:</code>, <code>mailto:</code>, <code>tel:</code> and other valid URL schemes.</li>
        <li><code>target="_blank"</code>, tab behavior, and when <code>rel="noopener"</code> is appropriate.</li>
        <li><code>download</code>, <code>hreflang</code>, <code>type</code>, <code>referrerpolicy</code> and link relationship values.</li>
        <li>Navigation menus, skip links and meaningful link text instead of vague labels such as “click here”.</li>
      </ul>
      <pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;a href="/docs/accessibility#forms"&gt;Form accessibility guide&lt;/a&gt;</code></pre>
</section>

<section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;border-radius:0;padding:6px 0 34px;margin:0 0 34px;box-shadow:none;">
<p style="color:#4c4852;">Choose list structures based on the meaning of the content.</p>
      <ul>
        <li><code>&lt;ul&gt;</code> for unordered collections.</li>
        <li><code>&lt;ol&gt;</code> for ordered sequences where the order is meaningful.</li>
        <li><code>&lt;li&gt;</code> for individual list items inside <code>ul</code> or <code>ol</code>.</li>
        <li><code>start</code>, <code>reversed</code> and <code>type</code> for ordered lists when there is a real semantic need.</li>
        <li><code>&lt;dl&gt;</code>, <code>&lt;dt&gt;</code> and <code>&lt;dd&gt;</code> for name-value or term-description relationships. These are not limited to dictionaries.</li>
      </ul>
      <pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;dl&gt;
  &lt;dt&gt;HTTP&lt;/dt&gt;
  &lt;dd&gt;The protocol used to transfer resources on the web.&lt;/dd&gt;
&lt;/dl&gt;</code></pre>
</section>
</div>`,
    contents: [
  {
    "id": "htmlContentNavigation_1",
    "title": "2. Text, Links, Lists & Navigation",
    "images": []
  }
],
  },
  {
    id: "htmlMedia",
    title: "3. Images, Responsive Images & Media",
    about: `<div style="font-family:"Inter","Avenir Next","Segoe UI",sans-serif;color:#302d35;background:#fff;color:#302d35;width:100%;max-width:none;margin:0;box-sizing:border-box;padding:30px 2vw 42px;line-height:1.82;font-size:16.5px;letter-spacing:0;">
<div style="background:#fff;border:1px solid #e7e0f0;border-radius:16px;padding:28px 30px;margin-bottom:26px;background:#fcfbf9;">
<h2 style="margin:0 0 9px;color:#5d4e86;font-size:32px;letter-spacing:-0.02em;">3. Images, Responsive Images & Media</h2>
<p style="margin:0 0 10px;font-size:17px;color:#6b6670;">Learn when and how to use images, responsive image candidates, audio, video, captions and media fallbacks without adding unnecessary complexity.</p>
<div style="background:#f4f0f9;border-left:4px solid #5d4e86;padding:12px 15px;border-radius:6px;"><strong>Focus:</strong> Be able to explain alt text, srcset, sizes, picture, loading and captions in a real project.</div>
</div>

<section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;border-radius:0;padding:6px 0 34px;margin:0 0 34px;box-shadow:none;">
<p style="color:#4c4852;">Learn <code>&lt;img&gt;</code> as a semantic content element, not just a way to place pictures on a page.</p>
      <ul>
        <li><code>src</code>, <code>alt</code>, <code>width</code>, <code>height</code>, <code>loading</code>, <code>decoding</code> and <code>fetchpriority</code>.</li>
        <li>Use meaningful <code>alt</code> text for informative images and <code>alt=""</code> for purely decorative images where appropriate.</li>
        <li>Reserve <code>&lt;figure&gt;</code> and <code>&lt;figcaption&gt;</code> for independent content that benefits from a caption.</li>
        <li>Understand replaced elements and why dimensions can help the browser reserve space and reduce layout movement.</li>
        <li>Learn image licensing basics, hotlinking concerns, and why production sites should normally host assets they are permitted to use.</li>
      </ul>
      <pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;figure&gt;
  &lt;img src="team.jpg" alt="Three engineers discussing a design" width="900" height="600"&gt;
  &lt;figcaption&gt;The team during the design review.&lt;/figcaption&gt;
&lt;/figure&gt;</code></pre>
</section>

<section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;border-radius:0;padding:6px 0 34px;margin:0 0 34px;box-shadow:none;">
<p style="color:#4c4852;">Learn how HTML can let the browser choose an appropriate image resource instead of sending one large image to every device.</p>
      <h3 style="color:#6a5b91;font-size:20px;line-height:1.4;margin:20px 0 8px;">srcset + sizes</h3>
      <p style="color:#4c4852;">Use width descriptors such as <code>400w</code> and <code>800w</code> with <code>sizes</code> to describe available image widths and the expected display width.</p>
      <h3 style="color:#6a5b91;font-size:20px;line-height:1.4;margin:20px 0 8px;">picture + source</h3>
      <p style="color:#4c4852;">Use <code>&lt;picture&gt;</code> for art direction or format selection. The fallback <code>&lt;img&gt;</code> remains essential.</p>
      <pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;picture&gt;
  &lt;source media="(min-width: 900px)" srcset="hero-wide.webp"&gt;
  &lt;img src="hero-mobile.jpg" alt="Mountain landscape" width="800" height="600"&gt;
&lt;/picture&gt;</code></pre>
      <p style="color:#4c4852;">Also understand format fallbacks, intrinsic dimensions, lazy loading and how responsive media affects bandwidth and performance.</p>
</section>

<section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;border-radius:0;padding:6px 0 34px;margin:0 0 34px;box-shadow:none;">
<p style="color:#4c4852;">Use HTML media elements when the browser should present or control audio and video content.</p>
      <ul>
        <li><code>&lt;audio&gt;</code> and <code>&lt;video&gt;</code> with <code>controls</code>, <code>autoplay</code>, <code>muted</code>, <code>loop</code>, <code>poster</code> and sizing attributes.</li>
        <li><code>&lt;source&gt;</code> for multiple media files and codec fallbacks.</li>
        <li><code>&lt;track&gt;</code> with WebVTT for captions, subtitles, descriptions and other timed text tracks.</li>
        <li>Why autoplay is commonly restricted and why muted autoplay is treated differently by browsers.</li>
        <li>Accessibility: captions, transcripts, controls, keyboard access, visible alternatives and meaningful fallback text.</li>
      </ul>
      <pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;video controls poster="cover.jpg" width="960" height="540"&gt;
  &lt;source src="lesson.webm" type="video/webm"&gt;
  &lt;source src="lesson.mp4" type="video/mp4"&gt;
  &lt;track src="lesson-en.vtt" kind="subtitles" srclang="en" label="English" default&gt;
&lt;/video&gt;</code></pre>
</section>
</div>`,
    contents: [
  {
    "id": "htmlMedia_1",
    "title": "3. Images, Responsive Images & Media",
    "images": []
  }
],
  },
  {
    id: "htmlSemantic",
    title: "4. Semantic HTML & Page Architecture",
    about: `<div style="font-family:"Inter","Avenir Next","Segoe UI",sans-serif;color:#302d35;background:#fff;color:#302d35;width:100%;max-width:none;margin:0;box-sizing:border-box;padding:30px 2vw 42px;line-height:1.82;font-size:16.5px;letter-spacing:0;">
<div style="background:#fff;border:1px solid #e7e0f0;border-radius:16px;padding:28px 30px;margin-bottom:26px;background:#fcfbf9;">
<h2 style="margin:0 0 9px;color:#5d4e86;font-size:32px;letter-spacing:-0.02em;">4. Semantic HTML & Page Architecture</h2>
<p style="margin:0 0 10px;font-size:17px;color:#6b6670;">Move from “HTML tags” to meaningful documents. Learn landmarks, articles, sections, dates, quotations and language-aware markup.</p>
<div style="background:#f4f0f9;border-left:4px solid #5d4e86;padding:12px 15px;border-radius:6px;"><strong>Focus:</strong> Given a real page design, be able to map it to semantic HTML before writing CSS.</div>
</div>

<section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;border-radius:0;padding:6px 0 34px;margin:0 0 34px;box-shadow:none;">
<div>
        <h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;letter-spacing:-0.01em;">Why Semantic HTML Matters</h2>
        <p style="color:#4c4852;">Semantic HTML gives content a meaning that browsers, assistive technologies, search engines and developers can use. Prefer the native element whose meaning matches the content or interaction.</p>
        <h3 style="color:#6a5b91;font-size:20px;line-height:1.4;margin:20px 0 8px;">1. &lt;header&gt;</h3>
        <p style="color:#4c4852;">Introductory content for a page or section, commonly containing headings, branding and navigation-related content.</p>
        <h3 style="color:#6a5b91;font-size:20px;line-height:1.4;margin:20px 0 8px;">2. &lt;nav&gt;</h3>
        <p style="color:#4c4852;">A navigation section containing groups of important navigation links.</p>
        <h3 style="color:#6a5b91;font-size:20px;line-height:1.4;margin:20px 0 8px;">3. &lt;main&gt;</h3>
        <p style="color:#4c4852;">The dominant content of the document. Normally there should be one main document content region.</p>
        <h3 style="color:#6a5b91;font-size:20px;line-height:1.4;margin:20px 0 8px;">4. &lt;article&gt;</h3>
        <p style="color:#4c4852;">Self-contained content that could make sense independently, such as a post, news item, review or forum entry.</p>
        <h3 style="color:#6a5b91;font-size:20px;line-height:1.4;margin:20px 0 8px;">5. &lt;section&gt;</h3>
        <p style="color:#4c4852;">A thematic grouping of content, typically with a heading. Do not use section simply because you need a CSS wrapper.</p>
        <h3 style="color:#6a5b91;font-size:20px;line-height:1.4;margin:20px 0 8px;">6. &lt;aside&gt;</h3>
        <p style="color:#4c4852;">Content related indirectly to the surrounding content, such as a sidebar, related links or pull quote.</p>
        <h3 style="color:#6a5b91;font-size:20px;line-height:1.4;margin:20px 0 8px;">7. &lt;footer&gt;</h3>
        <p style="color:#4c4852;">Footer information for a page or section such as author information, copyright or related navigation.</p>
        <h3 style="color:#6a5b91;font-size:20px;line-height:1.4;margin:20px 0 8px;">8. Other Semantic Elements</h3>
        <p style="color:#4c4852;">Also learn <code>&lt;address&gt;</code>, <code>&lt;search&gt;</code>, <code>&lt;figure&gt;</code>, <code>&lt;time&gt;</code>, <code>&lt;details&gt;</code>, headings, lists, tables and form landmarks.</p>
      </div>
</section>

<section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;border-radius:0;padding:6px 0 34px;margin:0 0 34px;box-shadow:none;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;letter-spacing:-0.01em;">time</h2>
      <p style="color:#4c4852;">Use <code>&lt;time&gt;</code> to expose a machine-readable date or time using <code>datetime</code>. This is especially useful for applications that need to parse or identify dates.</p>
      <h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;letter-spacing:-0.01em;">ins and del</h2>
      <p style="color:#4c4852;">Use <code>&lt;ins&gt;</code> for inserted content and <code>&lt;del&gt;</code> for deleted content. Optional <code>datetime</code> and <code>cite</code> metadata can explain changes.</p>
      <pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;p&gt;Release date: &lt;time datetime="2026-10-07"&gt;October 7, 2026&lt;/time&gt;&lt;/p&gt;
&lt;p&gt;Price: &lt;del&gt;₹999&lt;/del&gt; &lt;ins&gt;₹799&lt;/ins&gt;&lt;/p&gt;</code></pre>
</section>

<section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;border-radius:0;padding:6px 0 34px;margin:0 0 34px;box-shadow:none;">
<p style="color:#4c4852;">HTML includes several features for multilingual and bidirectional content.</p>
      <ul>
        <li><code>lang</code> identifies the language of content using a BCP 47 language tag.</li>
        <li><code>dir="ltr"</code>, <code>dir="rtl"</code> and <code>dir="auto"</code> control text direction.</li>
        <li><code>&lt;bdi&gt;</code> isolates bidirectional text such as user-generated names that may contain scripts in different directions.</li>
        <li><code>&lt;bdo&gt;</code> forces a direction for text where that is genuinely required.</li>
        <li><code>&lt;ruby&gt;</code>, <code>&lt;rt&gt;</code> and related markup support pronunciation annotations used in some writing systems.</li>
        <li><code>translate="no"</code> can indicate content that should not be translated by translation tools.</li>
      </ul>
</section>
</div>`,
    contents: [
  {
    "id": "htmlSemantic_1",
    "title": "4. Semantic HTML & Page Architecture",
    "images": []
  }
],
  },
  {
    id: "htmlTables",
    title: "5. Tables & Accessible Tabular Data",
    about: `<div style="font-family:"Inter","Avenir Next","Segoe UI",sans-serif;color:#302d35;background:#fff;color:#302d35;width:100%;max-width:none;margin:0;box-sizing:border-box;padding:30px 2vw 42px;line-height:1.82;font-size:16.5px;letter-spacing:0;">
<div style="background:#fff;border:1px solid #e7e0f0;border-radius:16px;padding:28px 30px;margin-bottom:26px;background:#fcfbf9;">
<h2 style="margin:0 0 9px;color:#5d4e86;font-size:32px;letter-spacing:-0.02em;">5. Tables & Accessible Tabular Data</h2>
<p style="margin:0 0 10px;font-size:17px;color:#6b6670;">Learn tables as relationships between data, including captions, headers, scopes and more complex associations.</p>
<div style="background:#f4f0f9;border-left:4px solid #5d4e86;padding:12px 15px;border-radius:6px;"><strong>Focus:</strong> Know when a table is appropriate and how to make it understandable with a screen reader.</div>
</div>

<section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;border-radius:0;padding:6px 0 34px;margin:0 0 34px;box-shadow:none;">
<p style="color:#4c4852;">Tables are for genuinely tabular data, not for page layout.</p>
      <ul>
        <li><code>&lt;table&gt;</code>, <code>&lt;caption&gt;</code>, <code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code>, <code>&lt;tfoot&gt;</code>, <code>&lt;tr&gt;</code>, <code>&lt;th&gt;</code> and <code>&lt;td&gt;</code>.</li>
        <li>Use <code>&lt;caption&gt;</code> to provide the table's visible title or purpose.</li>
        <li>Use <code>scope="col"</code> and <code>scope="row"</code> for straightforward header relationships.</li>
        <li>Use <code>colspan</code> and <code>rowspan</code> only when the data relationship truly spans multiple cells.</li>
        <li>For complex tables, understand <code>id</code>/<code>headers</code> relationships and why accessible associations matter.</li>
        <li>Do not rely on deprecated presentation attributes such as <code>border</code>, <code>cellspacing</code> and <code>cellpadding</code>; use CSS for presentation.</li>
      </ul>
      <pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;table&gt;
  &lt;caption&gt;Quarterly revenue&lt;/caption&gt;
  &lt;thead&gt;
    &lt;tr&gt;&lt;th scope="col"&gt;Quarter&lt;/th&gt;&lt;th scope="col"&gt;Revenue&lt;/th&gt;&lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;...&lt;/tbody&gt;
&lt;/table&gt;</code></pre>

<section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;border-radius:0;padding:6px 0 34px;margin:0 0 34px;box-shadow:none;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">Reading Complex Tables</h2>
<p style="color:#4c4852;">Simple tables usually need a clear caption, column headers and row headers. More complex reports may have multiple header levels. In those cases, make the relationships explicit rather than relying on visual position alone.</p>
<pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;table&gt;
  &lt;caption&gt;Sales by region and quarter&lt;/caption&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th scope="col"&gt;Region&lt;/th&gt;
      &lt;th scope="col"&gt;Q1&lt;/th&gt;
      &lt;th scope="col"&gt;Q2&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  ...
&lt;/table&gt;</code></pre>
<p style="color:#4c4852;"><strong>Practice:</strong> Take a spreadsheet-like report and identify what is a row header, what is a column header, and what information belongs in the caption.</p>
</section>

<section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;border-radius:0;padding:6px 0 34px;margin:0 0 34px;box-shadow:none;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">Common Table Mistakes</h2>
<ul>
<li style="color:#4c4852;">Using tables to create page layout instead of representing data relationships.</li>
<li style="color:#4c4852;">Leaving data cells without meaningful headers.</li>
<li style="color:#4c4852;">Using CSS-looking legacy attributes such as <code>border</code>, <code>cellspacing</code> and <code>cellpadding</code> for presentation.</li>
<li style="color:#4c4852;">Creating visually complex tables without considering how the relationships are exposed to assistive technology.</li>
</ul>
<p style="color:#4c4852;"><strong>Interview focus:</strong> Be ready to explain why a visually correct table can still be inaccessible, and how <code>caption</code>, <code>scope</code>, <code>headers</code> and good structure improve the data model.</p>
</section>
</section>
</div>`,
    contents: [
  {
    "id": "htmlTables_1",
    "title": "5. Tables & Accessible Tabular Data",
    "images": []
  }
],
  },
  {
    id: "htmlForms",
    title: "6. Forms, Controls & Validation",
    about: `<div style="font-family:"Inter","Avenir Next","Segoe UI",sans-serif;color:#302d35;background:#fff;color:#302d35;width:100%;max-width:none;margin:0;box-sizing:border-box;padding:30px 2vw 42px;line-height:1.82;font-size:16.5px;letter-spacing:0;">
<div style="background:#fff;border:1px solid #e7e0f0;border-radius:16px;padding:28px 30px;margin-bottom:26px;background:#fcfbf9;">
<h2 style="margin:0 0 9px;color:#5d4e86;font-size:32px;letter-spacing:-0.02em;">6. Forms, Controls & Validation</h2>
<p style="margin:0 0 10px;font-size:17px;color:#6b6670;">Master the HTML forms you will use in almost every application: labels, controls, input types, validation, autocomplete, submission and encoding.</p>
<div style="background:#f4f0f9;border-left:4px solid #5d4e86;padding:12px 15px;border-radius:6px;"><strong>Focus:</strong> Be able to build an accessible registration or search form without JavaScript for basic browser validation.</div>
</div>

<section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;border-radius:0;padding:6px 0 34px;margin:0 0 34px;box-shadow:none;">
<p style="color:#4c4852;">Forms connect user interface controls to data submission. Learn the structure first, then the many controls and validation rules built on top of it.</p>
      <ul>
        <li><code>&lt;form&gt;</code> groups controls and defines submission behavior.</li>
        <li><code>action</code> selects the submission URL; <code>method</code> commonly chooses <code>get</code> or <code>post</code>.</li>
        <li><code>&lt;label&gt;</code> gives a form control an accessible label. Use a matching <code>for</code>/<code>id</code> pair or wrap the control.</li>
        <li><code>name</code> controls the successful form-control name sent during form submission.</li>
        <li><code>&lt;button type="submit"&gt;</code> is preferred over clickable generic elements for submitting a form.</li>
        <li>Understand form ownership, associated controls, <code>form</code> attributes and buttons outside the form.</li>
      </ul>
      <pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;form action="/signup" method="post"&gt;
  &lt;label for="email"&gt;Email&lt;/label&gt;
  &lt;input id="email" name="email" type="email" required&gt;
  &lt;button type="submit"&gt;Create account&lt;/button&gt;
&lt;/form&gt;</code></pre>
</section>

<section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;border-radius:0;padding:6px 0 34px;margin:0 0 34px;box-shadow:none;">
<p style="color:#4c4852;">Learn the purpose and browser behavior of the major <code>&lt;input&gt;</code> types:</p>
      <ul>
        <li><code>text</code>, <code>password</code>, <code>email</code>, <code>tel</code>, <code>url</code> and <code>search</code>.</li>
        <li><code>number</code> and <code>range</code> for numeric controls.</li>
        <li><code>date</code>, <code>month</code>, <code>week</code>, <code>time</code> and <code>datetime-local</code> for date/time inputs.</li>
        <li><code>checkbox</code> for independent selections and <code>radio</code> for mutually exclusive choices that share a <code>name</code>.</li>
        <li><code>file</code> with <code>accept</code> and <code>multiple</code> where needed.</li>
        <li><code>color</code>, <code>hidden</code>, <code>submit</code>, <code>reset</code>, <code>button</code> and <code>image</code>.</li>
      </ul>
      <p style="color:#4c4852;">Also learn how <code>name</code>, <code>value</code>, <code>checked</code>, <code>selected</code>, <code>placeholder</code>, <code>inputmode</code> and <code>autocomplete</code> affect usability.</p>
</section>

<section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;border-radius:0;padding:6px 0 34px;margin:0 0 34px;box-shadow:none;">
<ul>
        <li><code>&lt;select&gt;</code> with <code>&lt;option&gt;</code> for predefined choices.</li>
        <li><code>&lt;optgroup&gt;</code> for grouping options into categories.</li>
        <li><code>&lt;datalist&gt;</code> for suggested options while allowing user-entered values.</li>
        <li><code>&lt;textarea&gt;</code> for multi-line text input.</li>
        <li><code>&lt;output&gt;</code> for displaying a calculated result associated with controls.</li>
        <li><code>&lt;progress&gt;</code> for task progress and <code>&lt;meter&gt;</code> for measurements within a known range.</li>
      </ul>
      <pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;label for="country"&gt;Country&lt;/label&gt;
&lt;select id="country" name="country"&gt;
  &lt;option value="in"&gt;India&lt;/option&gt;
  &lt;option value="sg"&gt;Singapore&lt;/option&gt;
&lt;/select&gt;

&lt;label for="notes"&gt;Notes&lt;/label&gt;
&lt;textarea id="notes" name="notes" rows="5"&gt;&lt;/textarea&gt;</code></pre>
</section>

<section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;border-radius:0;padding:6px 0 34px;margin:0 0 34px;box-shadow:none;">
<p style="color:#4c4852;">Master the attributes that make forms robust and usable:</p>
      <ul>
        <li><code>autocomplete</code> for browser-supported autofill and credential/payment information categories.</li>
        <li><code>autofocus</code>, <code>disabled</code>, <code>readonly</code>, <code>required</code>, <code>multiple</code>, <code>checked</code> and <code>selected</code>.</li>
        <li><code>min</code>, <code>max</code>, <code>step</code>, <code>minlength</code>, <code>maxlength</code>, <code>pattern</code> and <code>size</code>.</li>
        <li><code>placeholder</code> as a hint, not a replacement for a visible label.</li>
        <li><code>inputmode</code> to hint the preferred virtual keyboard on supporting devices.</li>
        <li><code>accept</code> and <code>capture</code> for appropriate file input scenarios.</li>
        <li><code>formaction</code>, <code>formenctype</code>, <code>formmethod</code>, <code>formnovalidate</code> and <code>formtarget</code> on submit buttons.</li>
      </ul>
</section>

<section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;border-radius:0;padding:6px 0 34px;margin:0 0 34px;box-shadow:none;">
<p style="color:#4c4852;">HTML provides native constraint validation before JavaScript is involved.</p>
      <ul>
        <li><code>required</code>, type-specific validation, <code>min</code>/<code>max</code>, lengths and <code>pattern</code>.</li>
        <li>Understand the difference between <code>valid</code>, <code>invalid</code> and browser validation UI.</li>
        <li>Learn how <code>novalidate</code> and <code>formnovalidate</code> bypass native validation when intentionally required.</li>
        <li>Use accessible visible error messages and associate them with the relevant field.</li>
        <li>Client-side validation improves user experience but is not a security boundary; the server must validate submitted data as well.</li>
        <li>Know <code>checkValidity()</code>, <code>reportValidity()</code> and <code>setCustomValidity()</code> as JavaScript APIs that work with HTML form constraints.</li>
      </ul>
</section>

<section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;border-radius:0;padding:6px 0 34px;margin:0 0 34px;box-shadow:none;">
<p style="color:#4c4852;">Understand what the browser actually submits when a form is activated.</p>
      <ul>
        <li><code>GET</code> generally encodes successful controls into the URL query string.</li>
        <li><code>POST</code> sends form data in the request body.</li>
        <li><code>application/x-www-form-urlencoded</code> is the common default encoding.</li>
        <li><code>multipart/form-data</code> is required for file uploads.</li>
        <li><code>text/plain</code> exists but is rarely the appropriate choice for production applications.</li>
        <li>Learn successful controls, omitted disabled controls, checkbox/radio values, repeated names and submit-button values.</li>
        <li>Understand <code>action</code>, <code>method</code>, <code>enctype</code>, <code>target</code> and submitter-specific overrides.</li>
      </ul>
      <pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;form action="/upload" method="post" enctype="multipart/form-data"&gt;
  &lt;input type="file" name="avatar" accept="image/*"&gt;
  &lt;button type="submit"&gt;Upload&lt;/button&gt;
&lt;/form&gt;</code></pre>
</section>
</div>`,
    contents: [
  {
    "id": "htmlForms_1",
    "title": "6. Forms, Controls & Validation",
    "images": [
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/HTMLFormTutorial.sections.png"
    ]
  }
],
  },
  {
    id: "htmlAccessibility",
    title: "7. Accessibility, Keyboard Support & ARIA",
    about: `<div style="font-family:"Inter","Avenir Next","Segoe UI",sans-serif;color:#302d35;background:#fff;color:#302d35;width:100%;max-width:none;margin:0;box-sizing:border-box;padding:30px 2vw 42px;line-height:1.82;font-size:16.5px;letter-spacing:0;">
<div style="background:#fff;border:1px solid #e7e0f0;border-radius:16px;padding:28px 30px;margin-bottom:26px;background:#fcfbf9;">
<h2 style="margin:0 0 9px;color:#5d4e86;font-size:32px;letter-spacing:-0.02em;">7. Accessibility, Keyboard Support & ARIA</h2>
<p style="margin:0 0 10px;font-size:17px;color:#6b6670;">Learn how native HTML provides accessibility by default and where ARIA is appropriate. Accessibility should be part of markup decisions from the beginning.</p>
<div style="background:#f4f0f9;border-left:4px solid #5d4e86;padding:12px 15px;border-radius:6px;"><strong>Focus:</strong> For every interactive element, ask what its name, role, state, keyboard behavior and focus behavior should be.</div>
</div>

<section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;border-radius:0;padding:6px 0 34px;margin:0 0 34px;box-shadow:none;">
<p style="color:#4c4852;">A large amount of web accessibility can be achieved by choosing the correct native HTML element and using it according to its intended meaning.</p>
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
</section>

<section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;border-radius:0;padding:6px 0 34px;margin:0 0 34px;box-shadow:none;">
<p style="color:#4c4852;">ARIA supplements HTML; it should not be the first choice when a native HTML element already represents the desired semantics and interaction.</p>
      <ul>
        <li>Know roles, states and properties conceptually.</li>
        <li>Use <code>aria-label</code> or <code>aria-labelledby</code> when an element needs an accessible name and native visible naming is unavailable or insufficient.</li>
        <li>Use <code>aria-describedby</code> to associate additional descriptions, hints or error text.</li>
        <li>Use live-region concepts carefully for dynamic status messages.</li>
        <li>Do not add redundant ARIA where native HTML already exposes the correct role and name.</li>
        <li>Do not create custom interactive widgets with a role alone and forget keyboard behavior, focus management and state updates.</li>
      </ul>
      <pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;button aria-describedby="password-help"&gt;Create password&lt;/button&gt;
&lt;p id="password-help"&gt;Use at least 12 characters.&lt;/p&gt;</code></pre>
</section>

<section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;border-radius:0;padding:6px 0 34px;margin:0 0 34px;box-shadow:none;">
<p style="color:#4c4852;">Keyboard accessibility should be built into the HTML whenever possible.</p>
      <ul>
        <li>Native links, buttons, form controls and interactive elements already participate in keyboard interaction.</li>
        <li>Use <code>tabindex="0"</code> sparingly when a custom element genuinely needs to enter the sequential focus order.</li>
        <li>Avoid positive tabindex values such as <code>tabindex="5"</code> because they create difficult-to-maintain focus order.</li>
        <li>Do not remove focus outlines without providing an equally visible alternative.</li>
        <li>Keep DOM order aligned with the visual and reading order.</li>
        <li>When using dialogs, popovers and other overlays, understand focus movement and what should be inert while the overlay is active.</li>
      </ul>
</section>
</div>`,
    contents: [
  {
    "id": "htmlAccessibility_1",
    "title": "7. Accessibility, Keyboard Support & ARIA",
    "images": []
  }
],
  },
  {
    id: "htmlMetadata",
    title: "8. Head, Metadata, SEO & Structured Information",
    about: `<div style="font-family:"Inter","Avenir Next","Segoe UI",sans-serif;color:#302d35;background:#fff;color:#302d35;width:100%;max-width:none;margin:0;box-sizing:border-box;padding:30px 2vw 42px;line-height:1.82;font-size:16.5px;letter-spacing:0;">
<div style="background:#fff;border:1px solid #e7e0f0;border-radius:16px;padding:28px 30px;margin-bottom:26px;background:#fcfbf9;">
<h2 style="margin:0 0 9px;color:#5d4e86;font-size:32px;letter-spacing:-0.02em;">8. Head, Metadata, SEO & Structured Information</h2>
<p style="margin:0 0 10px;font-size:17px;color:#6b6670;">Understand the document head, metadata, icons, canonical URLs, crawler-related metadata and structured information without confusing SEO with a guarantee of ranking.</p>
<div style="background:#f4f0f9;border-left:4px solid #5d4e86;padding:12px 15px;border-radius:6px;"><strong>Focus:</strong> Be able to produce a sensible production head and explain what each metadata item is actually for.</div>
</div>

<section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;border-radius:0;padding:6px 0 34px;margin:0 0 34px;box-shadow:none;">
<p style="color:#4c4852;">The <code>&lt;head&gt;</code> contains machine-readable information about the document and links to resources.</p>
      <ul>
        <li><code>&lt;title&gt;</code> for the document title shown in browser tabs, bookmarks and commonly search results.</li>
        <li><code>&lt;meta charset="utf-8"&gt;</code> for the document encoding.</li>
        <li><code>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</code> for the mobile viewport.</li>
        <li><code>description</code>, author-related metadata where relevant, theme and other application metadata.</li>
        <li><code>&lt;link&gt;</code> for stylesheets, icons and many resource relationships.</li>
        <li><code>&lt;base&gt;</code> for the base URL used to resolve relative URLs; understand why it should be used deliberately because it affects all relative links in the document.</li>
        <li><code>&lt;style&gt;</code>, <code>&lt;script&gt;</code> and <code>&lt;noscript&gt;</code> placement and behavior.</li>
      </ul>
</section>

<section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;border-radius:0;padding:6px 0 34px;margin:0 0 34px;box-shadow:none;">
<p style="color:#4c4852;">SEO is not a magic set of tags; it starts with clear, crawlable, meaningful HTML.</p>
      <ul>
        <li>Write a unique, descriptive <code>&lt;title&gt;</code>.</li>
        <li>Use useful headings in a sensible content hierarchy.</li>
        <li>Write descriptive link text and meaningful image <code>alt</code> text when images convey content.</li>
        <li>Use canonical URLs where the application needs to identify the preferred URL through the appropriate <code>link rel="canonical"</code>.</li>
        <li>Use language declarations with <code>lang</code>.</li>
        <li>Use semantic structure so crawlers and assistive technologies can more easily interpret content.</li>
        <li>Structured data can be embedded using formats such as JSON-LD, usually in a <code>&lt;script type="application/ld+json"&gt;</code> block. Treat structured data as a description of content that should also be genuinely present on the page.</li>
      </ul>
</section>

<section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;border-radius:0;padding:6px 0 34px;margin:0 0 34px;box-shadow:none;">
<p style="color:#4c4852;">HTML can carry machine-readable annotations through microdata attributes.</p>
      <ul>
        <li><code>itemscope</code> starts an item scope.</li>
        <li><code>itemtype</code> identifies the vocabulary/type of the item.</li>
        <li><code>itemprop</code> names a property inside the item.</li>
        <li><code>itemid</code> can identify an item when supported by the vocabulary.</li>
        <li><code>itemref</code> allows additional properties to be referenced outside the item's subtree.</li>
      </ul>
      <pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;div itemscope itemtype="https://schema.org/Person"&gt;
  &lt;span itemprop="name"&gt;Asha&lt;/span&gt;
&lt;/div&gt;</code></pre>
      <p style="color:#4c4852;">Compare microdata with JSON-LD and understand that structured data should accurately describe the page content.</p>
</section>
</div>`,
    contents: [
  {
    "id": "htmlMetadata_1",
    "title": "8. Head, Metadata, SEO & Structured Information",
    "images": []
  }
],
  },
  {
    id: "htmlInteractive",
    title: "9. Modern Interactive HTML",
    about: `<div style="font-family:"Inter","Avenir Next","Segoe UI",sans-serif;color:#302d35;background:#fff;color:#302d35;width:100%;max-width:none;margin:0;box-sizing:border-box;padding:30px 2vw 42px;line-height:1.82;font-size:16.5px;letter-spacing:0;">
<div style="background:#fff;border:1px solid #e7e0f0;border-radius:16px;padding:28px 30px;margin-bottom:26px;background:#fcfbf9;">
<h2 style="margin:0 0 9px;color:#5d4e86;font-size:32px;letter-spacing:-0.02em;">9. Modern Interactive HTML</h2>
<p style="margin:0 0 10px;font-size:17px;color:#6b6670;">Use browser-native interactive features such as button, details, summary, dialog and popover where they match the user experience.</p>
<div style="background:#f4f0f9;border-left:4px solid #5d4e86;padding:12px 15px;border-radius:6px;"><strong>Focus:</strong> Prefer native interaction when it provides the behavior you need instead of recreating it with divs and JavaScript.</div>
</div>

<section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;border-radius:0;padding:6px 0 34px;margin:0 0 34px;box-shadow:none;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;letter-spacing:-0.01em;">button</h2>
      <p style="color:#4c4852;">Use <code>&lt;button&gt;</code> for actions. Inside a form, explicitly set <code>type="button"</code>, <code>type="submit"</code> or <code>type="reset"</code> to avoid accidental submission behavior.</p>
      <h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;letter-spacing:-0.01em;">details and summary</h2>
      <p style="color:#4c4852;"><code>&lt;details&gt;</code> and <code>&lt;summary&gt;</code> provide a native disclosure component. Learn the <code>open</code> state and accessible keyboard interaction.</p>
      <h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;letter-spacing:-0.01em;">dialog</h2>
      <p style="color:#4c4852;"><code>&lt;dialog&gt;</code> provides a native dialog element. Learn the distinction between <code>show()</code> and modal behavior through <code>showModal()</code>, as well as <code>method="dialog"</code> for dialog form submission.</p>
      <h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;letter-spacing:-0.01em;">hidden and inert</h2>
      <p style="color:#4c4852;"><code>hidden</code> removes content from normal rendering, while <code>inert</code> prevents interaction and focus within a subtree.</p>
</section>

<section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;border-radius:0;padding:6px 0 34px;margin:0 0 34px;box-shadow:none;">
<p style="color:#4c4852;">The HTML popover feature provides declarative popover relationships without requiring a full JavaScript widget implementation for basic show/hide behavior.</p>
      <pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;button popovertarget="help"&gt;Help&lt;/button&gt;
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
      <p style="color:#4c4852;">Learn progressive enhancement: use declarative HTML for the baseline interaction and JavaScript only when application-specific behavior is required.</p>

<section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;border-radius:0;padding:6px 0 34px;margin:0 0 34px;box-shadow:none;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">Choosing Native Interactive Elements</h2>
<p style="color:#4c4852;">Modern HTML gives you useful behavior without immediately reaching for JavaScript. <code>&lt;details&gt;</code> and <code>&lt;summary&gt;</code> provide disclosure, <code>&lt;dialog&gt;</code> represents a dialog, and popovers provide a declarative way to show floating content.</p>
<pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;details&gt;
  &lt;summary&gt;What is HTML?&lt;/summary&gt;
  &lt;p&gt;HTML describes the structure and meaning of web content.&lt;/p&gt;
&lt;/details&gt;</code></pre>
<p style="color:#4c4852;"><strong>Rule of thumb:</strong> prefer a native element when it already provides the semantics, keyboard behavior and browser integration you need.</p>
</section>

<section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;border-radius:0;padding:6px 0 34px;margin:0 0 34px;box-shadow:none;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">Progressive Enhancement</h2>
<p style="color:#4c4852;">Think of HTML as the foundation. A useful page should still communicate its essential information when advanced JavaScript is delayed, unavailable, or fails. JavaScript can then enhance the interaction rather than replacing the underlying document structure.</p>
<ul>
<li style="color:#4c4852;">Start with meaningful headings, links, forms and content.</li>
<li style="color:#4c4852;">Add CSS for presentation and responsive layout.</li>
<li style="color:#4c4852;">Add JavaScript only where behavior cannot be provided by the platform itself.</li>
</ul>
<p style="color:#4c4852;"><strong>Practice:</strong> Build a FAQ first with headings and links, then enhance it with <code>details</code> or a richer interactive component.</p>
</section>
</section>
</div>`,
    contents: [
  {
    "id": "htmlInteractive_1",
    "title": "9. Modern Interactive HTML",
    "images": []
  }
],
  },
  {
    id: "htmlAdvanced",
    title: "10. Advanced HTML: DOM, Loading, Performance & Security",
    about: `<div style="font-family:"Inter","Avenir Next","Segoe UI",sans-serif;color:#302d35;background:#fff;color:#302d35;width:100%;max-width:none;margin:0;box-sizing:border-box;padding:30px 2vw 42px;line-height:1.82;font-size:16.5px;letter-spacing:0;">
<div style="background:#fff;border:1px solid #e7e0f0;border-radius:16px;padding:28px 30px;margin-bottom:26px;background:#fcfbf9;">
<h2 style="margin:0 0 9px;color:#5d4e86;font-size:32px;letter-spacing:-0.02em;">10. Advanced HTML: DOM, Loading, Performance & Security</h2>
<p style="margin:0 0 10px;font-size:17px;color:#6b6670;">Connect markup to browser internals and production concerns. This is the bridge from comfortable HTML usage to experienced-developer and senior-interview knowledge.</p>
<div style="background:#f4f0f9;border-left:4px solid #5d4e86;padding:12px 15px;border-radius:6px;"><strong>Focus:</strong> Understand not just what the markup looks like, but what the browser does with it and what trade-offs it creates.</div>
</div>

<section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;border-radius:0;padding:6px 0 34px;margin:0 0 34px;box-shadow:none;">
<p style="color:#4c4852;">SVG is a vector graphics language that can be embedded in HTML or referenced as an external resource.</p>
      <ul>
        <li>Use <code>&lt;img src="icon.svg"&gt;</code> when an SVG is treated as an external image.</li>
        <li>Use inline <code>&lt;svg&gt;</code> when the document needs to interact with the graphic as part of the DOM.</li>
        <li>Learn SVG elements such as <code>svg</code>, <code>path</code>, <code>circle</code>, <code>rect</code>, <code>line</code>, <code>text</code> and <code>g</code>.</li>
        <li>Understand the difference between vector graphics and raster images.</li>
        <li>Consider accessibility: meaningful SVG content may need an accessible name or text alternative depending on how it is used.</li>
      </ul>
</section>

<section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;border-radius:0;padding:6px 0 34px;margin:0 0 34px;box-shadow:none;">
<p style="color:#4c4852;"><code>&lt;canvas&gt;</code> provides a drawable bitmap surface whose pixels are typically manipulated with JavaScript.</p>
      <ul>
        <li>Understand <code>width</code> and <code>height</code> as the canvas drawing buffer dimensions, not merely CSS size.</li>
        <li>Provide fallback content inside the canvas for environments or users that cannot access the drawing.</li>
        <li>Know the common 2D drawing context and how it differs from SVG's DOM-based vector model.</li>
        <li>Remember that Canvas drawing itself does not automatically provide the same semantic structure as ordinary HTML.</li>
      </ul>
      <pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;canvas width="800" height="400"&gt;
  Your browser or assistive technology should be given a useful alternative here.
&lt;/canvas&gt;</code></pre>
</section>

<section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;border-radius:0;padding:6px 0 34px;margin:0 0 34px;box-shadow:none;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;letter-spacing:-0.01em;">script</h2>
      <p style="color:#4c4852;">Learn how JavaScript is connected to the document using <code>&lt;script&gt;</code>, including <code>src</code>, modules, <code>async</code>, <code>defer</code>, integrity and referrer-related options.</p>
      <h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;letter-spacing:-0.01em;">link</h2>
      <p style="color:#4c4852;"><code>&lt;link&gt;</code> describes relationships with external resources, most commonly stylesheets, icons and resource hints.</p>
      <h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;letter-spacing:-0.01em;">style</h2>
      <p style="color:#4c4852;"><code>&lt;style&gt;</code> contains CSS directly in the document. Learn when it is useful and why external stylesheets are usually easier to maintain for larger applications.</p>
      <h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;letter-spacing:-0.01em;">noscript</h2>
      <p style="color:#4c4852;"><code>&lt;noscript&gt;</code> can provide alternate content for environments where scripting is disabled or unavailable, depending on where it appears.</p>
</section>

<section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;border-radius:0;padding:6px 0 34px;margin:0 0 34px;box-shadow:none;">
<p style="color:#4c4852;">HTML itself is usually small; the larger performance costs often come from images, video, third-party embeds and resource-loading choices.</p>
      <ul>
        <li><code>loading="lazy"</code> can defer offscreen images or iframes where appropriate.</li>
        <li>Use <code>width</code> and <code>height</code> for images when practical to reserve layout space.</li>
        <li>Use responsive images to avoid downloading resources that are much larger than the rendered size.</li>
        <li>Understand <code>async</code> versus <code>defer</code> for scripts.</li>
        <li>Learn resource hints such as <code>preload</code>, <code>prefetch</code>, <code>preconnect</code>, <code>dns-prefetch</code> and <code>modulepreload</code>.</li>
        <li>Preload only genuinely important resources; excessive preloading can compete with more useful network work.</li>
        <li>Third-party iframes and media can be expensive, so load them intentionally.</li>
      </ul>
</section>

<section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;border-radius:0;padding:6px 0 34px;margin:0 0 34px;box-shadow:none;">
<p style="color:#4c4852;">HTML cannot replace server-side security, but markup choices can reduce common risks and accidental privilege.</p>
      <ul>
        <li>Use HTTPS URLs for application resources and links wherever possible.</li>
        <li>For new-tab links and untrusted contexts, understand <code>rel="noopener"</code> and related relationship controls.</li>
        <li>Use iframe <code>sandbox</code> to restrict embedded capabilities.</li>
        <li>Understand <code>referrerpolicy</code> as a way to control how much referrer information is sent with requests.</li>
        <li>Use Subresource Integrity (<code>integrity</code> plus a suitable <code>crossorigin</code> setup) when consuming supported external scripts or stylesheets where appropriate.</li>
        <li>Never put secrets in HTML, attributes, hidden fields or comments. Anything delivered to the browser should be treated as observable by the user.</li>
        <li>Learn the relationship between HTML attributes and Content Security Policy, including nonces for allowed inline scripts when a CSP is configured.</li>
      </ul>
</section>

<section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;border-radius:0;padding:6px 0 34px;margin:0 0 34px;box-shadow:none;">
<p style="color:#4c4852;">Understanding HTML content models helps you predict which elements can contain which other elements and why some markup combinations are invalid.</p>
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
      <p style="color:#4c4852;">Learn practical rules such as why headings belong in structural content, why interactive elements should not be nested arbitrarily, and why a semantic element is not automatically a generic wrapper.</p>
</section>

<section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;border-radius:0;padding:6px 0 34px;margin:0 0 34px;box-shadow:none;">
<p style="color:#4c4852;">HTML source text is parsed into a DOM tree. Learn the difference between the source text you write and the DOM that the browser constructs.</p>
      <ul>
        <li>The browser uses HTML parsing rules to create the document tree.</li>
        <li>Some omissions are allowed by the HTML syntax, and browsers may infer missing nodes or implied structure during parsing.</li>
        <li>Malformed markup does not necessarily prevent a page from rendering; browser error recovery is one reason valid markup still matters for predictable behavior.</li>
        <li>Understand the difference between attributes and live DOM properties at a conceptual level.</li>
        <li>Learn how the DOM tree becomes the basis for CSS styling, layout and JavaScript interaction.</li>
      </ul>
      <p style="color:#4c4852;">This topic is essential for understanding why the Elements panel in developer tools may not look exactly like the raw HTML source file.</p>
</section>

<section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;border-radius:0;padding:6px 0 34px;margin:0 0 34px;box-shadow:none;">
<p style="color:#4c4852;">Modern HTML also participates in Web Components and reusable component systems.</p>
      <ul>
        <li><code>&lt;template&gt;</code> stores markup that is not rendered immediately as normal document content.</li>
        <li><code>&lt;slot&gt;</code> defines insertion points for content supplied to a component's shadow tree.</li>
        <li>Learn <code>slot</code> as a global attribute and the difference between light DOM content and shadow DOM rendering.</li>
        <li>Understand that custom elements are primarily a JavaScript platform feature, while HTML provides the markup hooks and content structures used by components.</li>
        <li>Learn why semantic native HTML should still be preferred inside components whenever possible.</li>
      </ul>
      <pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;template id="user-card-template"&gt;
  &lt;article&gt;
    &lt;slot name="name"&gt;Unknown user&lt;/slot&gt;
  &lt;/article&gt;
&lt;/template&gt;</code></pre>
</section>
</div>`,
    contents: [
  {
    "id": "htmlAdvanced_1",
    "title": "10. Advanced HTML: DOM, Loading, Performance & Security",
    "images": []
  }
],
  },
  {
    id: "htmlPractice",
    title: "11. Practical Workflow, Debugging & Revision",
    about: `<div style="font-family:"Inter","Avenir Next","Segoe UI",sans-serif;color:#302d35;background:#fff;color:#302d35;width:100%;max-width:none;margin:0;box-sizing:border-box;padding:30px 2vw 42px;line-height:1.82;font-size:16.5px;letter-spacing:0;">
<div style="background:#fff;border:1px solid #e7e0f0;border-radius:16px;padding:28px 30px;margin-bottom:26px;background:#fcfbf9;">
<h2 style="margin:0 0 9px;color:#5d4e86;font-size:32px;letter-spacing:-0.02em;">11. Practical Workflow, Debugging & Revision</h2>
<p style="margin:0 0 10px;font-size:17px;color:#6b6670;">Turn knowledge into repeatable skill. Use projects for regular learning, debugging checklists for work, and focused revision when an interview is close.</p>
<div style="background:#f4f0f9;border-left:4px solid #5d4e86;padding:12px 15px;border-radius:6px;"><strong>Focus:</strong> Build, inspect, validate, test with keyboard navigation, and explain why you selected each important HTML element.</div>
</div>

<section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;border-radius:0;padding:6px 0 34px;margin:0 0 34px;box-shadow:none;">
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
</section>

<section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;border-radius:0;padding:6px 0 34px;margin:0 0 34px;box-shadow:none;">
<p style="color:#4c4852;">Recognize older markup that may appear in legacy applications but should not be used in modern HTML authoring.</p>
      <ul>
        <li>Presentation-era tags such as <code>&lt;font&gt;</code>, <code>&lt;center&gt;</code> and <code>&lt;big&gt;</code>.</li>
        <li>Old frame-based systems such as <code>&lt;frameset&gt;</code>, <code>&lt;frame&gt;</code> and <code>&lt;noframes&gt;</code>.</li>
        <li>Legacy document-era elements such as <code>&lt;acronym&gt;</code>, <code>&lt;tt&gt;</code>, <code>&lt;strike&gt;</code> and other obsolete features.</li>
        <li>Deprecated table presentation attributes such as <code>border</code>, <code>cellspacing</code> and <code>cellpadding</code>.</li>
      </ul>
      <p style="color:#4c4852;">Know what these features mean when maintaining old code, but prefer current semantic HTML and CSS for new development.</p>
</section>

<section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;border-radius:0;padding:6px 0 34px;margin:0 0 34px;box-shadow:none;">
<p style="color:#4c4852;">Good HTML work includes a repeatable debugging workflow.</p>
      <ul>
        <li>Use browser developer tools to inspect the DOM, not just the source file.</li>
        <li>Check the Console for parser-related hints, script errors and warnings.</li>
        <li>Inspect accessibility information where browser tooling provides it.</li>
        <li>Use an HTML validator to catch structural and conformance problems.</li>
        <li>Inspect Network requests when images, CSS, scripts, iframes or media do not load.</li>
        <li>When an image fails, check the URL, relative path, HTTP status, MIME type, permissions, CSP and whether the external host permits embedding.</li>
        <li>When a form behaves unexpectedly, inspect the control's <code>name</code>, disabled state, validation state and the actual submitted request.</li>
      </ul>
</section>

<section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;border-radius:0;padding:6px 0 34px;margin:0 0 34px;box-shadow:none;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;letter-spacing:-0.01em;">Project 1: Personal Profile</h2>
      <p style="color:#4c4852;">Build a profile page with a title, heading hierarchy, image, bio, skills list, links and semantic structure.</p>
      <h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;letter-spacing:-0.01em;">Project 2: Accessible Registration Form</h2>
      <p style="color:#4c4852;">Build a complete form using labels, fieldsets, legends, input types, autocomplete, validation attributes, error text and a useful submission structure.</p>
      <h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;letter-spacing:-0.01em;">Project 3: Product Page</h2>
      <p style="color:#4c4852;">Use semantic sections, responsive images, product information, a specification table, price/time markup, forms and a footer.</p>
      <h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;letter-spacing:-0.01em;">Project 4: Documentation Site</h2>
      <p style="color:#4c4852;">Build a documentation page with header, nav, main, articles, headings, code blocks, links, lists, tables and skip navigation.</p>
      <h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;letter-spacing:-0.01em;">Project 5: Media Gallery</h2>
      <p style="color:#4c4852;">Combine figure, picture, audio, video, subtitles and captions with accessible alternatives.</p>
      <h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;letter-spacing:-0.01em;">Project 6: Data Dashboard Markup</h2>
      <p style="color:#4c4852;">Build the HTML layer of a dashboard with data tables, headings, forms, status text, progress indicators and semantic grouping.</p>
</section>
</div>`,
    contents: [
  {
    "id": "htmlPractice_1",
    "title": "11. Practical Workflow, Debugging & Revision",
    "images": []
  }
],
  },
  {
    id: "htmlInterview",
    title: "12. Interview Preparation — 56 HTML Questions & Answers",
    about: `
      <div style="font-family:"Inter","Avenir Next","Segoe UI",sans-serif;color:#302d35;background:#fff;color:#302d35;width:100%;max-width:none;margin:0;box-sizing:border-box;padding:30px 2vw 42px;line-height:1.82;font-size:16.5px;letter-spacing:0;">
        <div style="background:#fff;border:1px solid #e7e0f0;border-radius:16px;padding:28px 30px;margin-bottom:26px;background:#fcfbf9;"><h2 style="color:#5d4e86;margin:0 0 8px;font-size:32px;letter-spacing:-0.02em;">HTML Interview Questions &amp; Answers</h2>
        <p style="color:#4c4852;">Use this section as an interview revision guide. The questions progress from fundamentals to browser behavior, accessibility, forms, performance, parsing, security and standards-level concepts.</p>
        <p style="color:#4c4852;"><strong>Format:</strong> 56 questions divided into Beginner, Intermediate, Advanced and Expert levels. Each answer includes a practical example where it helps explain the concept.</p></div>

        <h2 style="color:#5d4e86;font-size:25px;border-bottom:2px solid #e7e3df;padding-bottom:9px;margin:30px 0 18px;">Beginner</h2>
        <article style="background:#fff;border:1px solid #e6e1dc;border-radius:12px;padding:24px 28px;margin:0 0 20px;box-shadow:none;background:#fffdfb;"><h3 style="margin:0 0 10px;color:#28242c;font-size:20px;line-height:1.4;">1. What is HTML?</h3><p style="color:#4c4852;"><strong>Answer:</strong> HTML (HyperText Markup Language) is the markup language used to describe the structure and meaning of content on a web page. It tells the browser what is a heading, paragraph, link, image, form control, table, and so on.</p><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:14px 16px;border-radius:8px;overflow:auto;line-height:1.65;"><code>&lt;h1&gt;My Portfolio&lt;/h1&gt;
&lt;p&gt;I am a web developer.&lt;/p&gt;</code></pre></article>
        <article style="background:#fff;border:1px solid #e6e1dc;border-radius:12px;padding:24px 28px;margin:0 0 20px;box-shadow:none;background:#fffdfb;"><h3 style="margin:0 0 10px;color:#28242c;font-size:20px;line-height:1.4;">2. What is the difference between an element and a tag?</h3><p style="color:#4c4852;"><strong>Answer:</strong> A tag is markup such as <code>&lt;p&gt;</code> or <code>&lt;/p&gt;</code>. An element is the complete construct, including its content and tags when applicable.</p><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:14px 16px;border-radius:8px;overflow:auto;line-height:1.65;"><code>&lt;p&gt;Hello&lt;/p&gt;</code></pre></article>
        <article style="background:#fff;border:1px solid #e6e1dc;border-radius:12px;padding:24px 28px;margin:0 0 20px;box-shadow:none;background:#fffdfb;"><h3 style="margin:0 0 10px;color:#28242c;font-size:20px;line-height:1.4;">3. What does &lt;!doctype html&gt; do?</h3><p style="color:#4c4852;"><strong>Answer:</strong> It tells the browser to use standards mode for the document. In modern HTML it is intentionally short and is not a version declaration like old HTML doctypes.</p><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:14px 16px;border-radius:8px;overflow:auto;line-height:1.65;"><code>&lt;!doctype html&gt;</code></pre></article>
        <article style="background:#fff;border:1px solid #e6e1dc;border-radius:12px;padding:24px 28px;margin:0 0 20px;box-shadow:none;background:#fffdfb;"><h3 style="margin:0 0 10px;color:#28242c;font-size:20px;line-height:1.4;">4. What is a void element?</h3><p style="color:#4c4852;"><strong>Answer:</strong> A void element cannot contain child content and does not have an HTML closing tag. Examples include <code>img</code>, <code>input</code>, <code>br</code>, <code>hr</code>, <code>meta</code>, <code>link</code> and <code>source</code>.</p></article>
        <article style="background:#fff;border:1px solid #e6e1dc;border-radius:12px;padding:24px 28px;margin:0 0 20px;box-shadow:none;background:#fffdfb;"><h3 style="margin:0 0 10px;color:#28242c;font-size:20px;line-height:1.4;">5. What is the purpose of the html, head and body elements?</h3><p style="color:#4c4852;"><strong>Answer:</strong> <code>html</code> is the document root, <code>head</code> contains metadata and resource information, and <code>body</code> contains the document content rendered as the page.</p></article>
        <article style="background:#fff;border:1px solid #e6e1dc;border-radius:12px;padding:24px 28px;margin:0 0 20px;box-shadow:none;background:#fffdfb;"><h3 style="margin:0 0 10px;color:#28242c;font-size:20px;line-height:1.4;">6. What is the difference between block and inline elements?</h3><p style="color:#4c4852;"><strong>Answer:</strong> This is a useful historical description of layout behavior, but modern HTML is better understood by each element's content model and CSS display. CSS controls layout. For example, a <code>div</code> is flow content while <code>span</code> is phrasing content.</p></article>
        <article style="background:#fff;border:1px solid #e6e1dc;border-radius:12px;padding:24px 28px;margin:0 0 20px;box-shadow:none;background:#fffdfb;"><h3 style="margin:0 0 10px;color:#28242c;font-size:20px;line-height:1.4;">7. What is semantic HTML?</h3><p style="color:#4c4852;"><strong>Answer:</strong> Semantic HTML uses elements according to their meaning rather than their appearance. For example, use <code>nav</code> for navigation and <code>button</code> for an action instead of generic <code>div</code> elements.</p></article>
        <article style="background:#fff;border:1px solid #e6e1dc;border-radius:12px;padding:24px 28px;margin:0 0 20px;box-shadow:none;background:#fffdfb;"><h3 style="margin:0 0 10px;color:#28242c;font-size:20px;line-height:1.4;">8. What is the difference between id and class?</h3><p style="color:#4c4852;"><strong>Answer:</strong> An <code>id</code> identifies an element uniquely within a document and is useful for fragment links and scripting. A <code>class</code> groups elements so the same styling or behavior can apply to multiple elements.</p><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:14px 16px;border-radius:8px;overflow:auto;line-height:1.65;"><code>&lt;section id="profile" class="card featured"&gt;...&lt;/section&gt;</code></pre></article>
        <article style="background:#fff;border:1px solid #e6e1dc;border-radius:12px;padding:24px 28px;margin:0 0 20px;box-shadow:none;background:#fffdfb;"><h3 style="margin:0 0 10px;color:#28242c;font-size:20px;line-height:1.4;">9. Why is the alt attribute important on images?</h3><p style="color:#4c4852;"><strong>Answer:</strong> Alternative text communicates the purpose or meaning of an image when it cannot be perceived. Screen readers can announce it, and it can appear when the image cannot be loaded. Decorative images should normally use an empty <code>alt=""</code>.</p></article>
        <article style="background:#fff;border:1px solid #e6e1dc;border-radius:12px;padding:24px 28px;margin:0 0 20px;box-shadow:none;background:#fffdfb;"><h3 style="margin:0 0 10px;color:#28242c;font-size:20px;line-height:1.4;">10. What is the difference between strong and b?</h3><p style="color:#4c4852;"><strong>Answer:</strong> <code>strong</code> expresses strong importance, while <code>b</code> draws attention without adding that same semantic importance. CSS should be used for purely visual bold styling.</p></article>
        <article style="background:#fff;border:1px solid #e6e1dc;border-radius:12px;padding:24px 28px;margin:0 0 20px;box-shadow:none;background:#fffdfb;"><h3 style="margin:0 0 10px;color:#28242c;font-size:20px;line-height:1.4;">11. What is the difference between em and i?</h3><p style="color:#4c4852;"><strong>Answer:</strong> <code>em</code> represents stress emphasis. <code>i</code> represents text set apart from the surrounding text for a different reason, such as a technical term or alternate voice, depending on context.</p></article>
        <article style="background:#fff;border:1px solid #e6e1dc;border-radius:12px;padding:24px 28px;margin:0 0 20px;box-shadow:none;background:#fffdfb;"><h3 style="margin:0 0 10px;color:#28242c;font-size:20px;line-height:1.4;">12. What is the difference between div and span?</h3><p style="color:#4c4852;"><strong>Answer:</strong> Both are generic containers. <code>div</code> is a flow-content container commonly used for larger structural grouping, while <code>span</code> is a phrasing-content container for inline text or small inline groups.</p></article>
        <article style="background:#fff;border:1px solid #e6e1dc;border-radius:12px;padding:24px 28px;margin:0 0 20px;box-shadow:none;background:#fffdfb;"><h3 style="margin:0 0 10px;color:#28242c;font-size:20px;line-height:1.4;">13. Why should the lang attribute be set?</h3><p style="color:#4c4852;"><strong>Answer:</strong> It identifies the language of the document or a portion of content. Assistive technologies, spell checkers, translation tools and other user agents can use it.</p><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:14px 16px;border-radius:8px;overflow:auto;line-height:1.65;"><code>&lt;html lang="en"&gt;</code></pre></article>
        <article style="background:#fff;border:1px solid #e6e1dc;border-radius:12px;padding:24px 28px;margin:0 0 20px;box-shadow:none;background:#fffdfb;"><h3 style="margin:0 0 10px;color:#28242c;font-size:20px;line-height:1.4;">14. What is the difference between HTML and CSS?</h3><p style="color:#4c4852;"><strong>Answer:</strong> HTML describes document structure and meaning. CSS controls presentation and layout. A good implementation keeps meaningful structure in HTML and visual rules in CSS.</p></article>

        <h2 style="color:#5d4e86;font-size:25px;border-bottom:2px solid #e7e3df;padding-bottom:9px;margin:30px 0 18px;">Intermediate</h2>
        <article style="background:#fff;border:1px solid #e6e1dc;border-radius:12px;padding:24px 28px;margin:0 0 20px;box-shadow:none;background:#fffdfb;"><h3 style="margin:0 0 10px;color:#28242c;font-size:20px;line-height:1.4;">15. Why is the name attribute important on form controls?</h3><p style="color:#4c4852;"><strong>Answer:</strong> The <code>name</code> identifies the control's field when successful form controls are serialized for submission. An input with an <code>id</code> but no <code>name</code> generally does not contribute a name/value pair to form submission.</p><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:14px 16px;border-radius:8px;overflow:auto;line-height:1.65;"><code>&lt;input name="email" type="email"&gt;</code></pre></article>
        <article style="background:#fff;border:1px solid #e6e1dc;border-radius:12px;padding:24px 28px;margin:0 0 20px;box-shadow:none;background:#fffdfb;"><h3 style="margin:0 0 10px;color:#28242c;font-size:20px;line-height:1.4;">16. GET vs POST in HTML forms?</h3><p style="color:#4c4852;"><strong>Answer:</strong> With <code>GET</code>, form data is encoded into the target URL's query string. With <code>POST</code>, data is sent in the request body. GET is commonly used for safe retrieval/search; POST is commonly used when submitting data that changes server state.</p></article>
        <article style="background:#fff;border:1px solid #e6e1dc;border-radius:12px;padding:24px 28px;margin:0 0 20px;box-shadow:none;background:#fffdfb;"><h3 style="margin:0 0 10px;color:#28242c;font-size:20px;line-height:1.4;">17. Why should a form input have a label?</h3><p style="color:#4c4852;"><strong>Answer:</strong> A label gives the control a human-readable purpose and improves usability and accessibility. Explicit association is made with matching <code>for</code> and <code>id</code> values.</p><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:14px 16px;border-radius:8px;overflow:auto;line-height:1.65;"><code>&lt;label for="email"&gt;Email&lt;/label&gt;
&lt;input id="email" name="email" type="email"&gt;</code></pre></article>
        <article style="background:#fff;border:1px solid #e6e1dc;border-radius:12px;padding:24px 28px;margin:0 0 20px;box-shadow:none;background:#fffdfb;"><h3 style="margin:0 0 10px;color:#28242c;font-size:20px;line-height:1.4;">18. What are Boolean attributes?</h3><p style="color:#4c4852;"><strong>Answer:</strong> Boolean attributes represent an enabled/disabled or true/false state by their presence. For example, <code>required</code> means the control is required; its presence is what matters.</p><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:14px 16px;border-radius:8px;overflow:auto;line-height:1.65;"><code>&lt;input required&gt;</code></pre></article>
        <article style="background:#fff;border:1px solid #e6e1dc;border-radius:12px;padding:24px 28px;margin:0 0 20px;box-shadow:none;background:#fffdfb;"><h3 style="margin:0 0 10px;color:#28242c;font-size:20px;line-height:1.4;">19. What is the difference between disabled and readonly?</h3><p style="color:#4c4852;"><strong>Answer:</strong> A disabled form control cannot normally be edited or focused and is excluded from form submission. A readonly text-like control cannot be edited by the user but can generally be focused and submitted.</p></article>
        <article style="background:#fff;border:1px solid #e6e1dc;border-radius:12px;padding:24px 28px;margin:0 0 20px;box-shadow:none;background:#fffdfb;"><h3 style="margin:0 0 10px;color:#28242c;font-size:20px;line-height:1.4;">20. What is srcset used for?</h3><p style="color:#4c4852;"><strong>Answer:</strong> <code>srcset</code> lets an image provide multiple candidate resources so the browser can select an appropriate resource based on resolution or display conditions.</p><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:14px 16px;border-radius:8px;overflow:auto;line-height:1.65;"><code>&lt;img src="photo-800.jpg"
     srcset="photo-400.jpg 400w, photo-800.jpg 800w, photo-1200.jpg 1200w"
     sizes="(max-width: 600px) 100vw, 800px"
     alt="Mountain landscape"&gt;</code></pre></article>
        <article style="background:#fff;border:1px solid #e6e1dc;border-radius:12px;padding:24px 28px;margin:0 0 20px;box-shadow:none;background:#fffdfb;"><h3 style="margin:0 0 10px;color:#28242c;font-size:20px;line-height:1.4;">21. When should picture be used?</h3><p style="color:#4c4852;"><strong>Answer:</strong> Use <code>picture</code> when you need art direction or alternative image formats/resources selected using conditions. It still requires an <code>img</code> fallback.</p></article>
        <article style="background:#fff;border:1px solid #e6e1dc;border-radius:12px;padding:24px 28px;margin:0 0 20px;box-shadow:none;background:#fffdfb;"><h3 style="margin:0 0 10px;color:#28242c;font-size:20px;line-height:1.4;">22. What is the difference between section and article?</h3><p style="color:#4c4852;"><strong>Answer:</strong> A <code>section</code> is a thematic grouping of content, usually with a heading. An <code>article</code> represents a self-contained composition that could be distributed or reused independently, such as a news story or blog post.</p></article>
        <article style="background:#fff;border:1px solid #e6e1dc;border-radius:12px;padding:24px 28px;margin:0 0 20px;box-shadow:none;background:#fffdfb;"><h3 style="margin:0 0 10px;color:#28242c;font-size:20px;line-height:1.4;">23. What is the difference between section and div?</h3><p style="color:#4c4852;"><strong>Answer:</strong> <code>section</code> communicates a thematic section of a document. <code>div</code> carries no semantic meaning and should be used when a generic container is actually needed.</p></article>
        <article style="background:#fff;border:1px solid #e6e1dc;border-radius:12px;padding:24px 28px;margin:0 0 20px;box-shadow:none;background:#fffdfb;"><h3 style="margin:0 0 10px;color:#28242c;font-size:20px;line-height:1.4;">24. What are thead, tbody and tfoot?</h3><p style="color:#4c4852;"><strong>Answer:</strong> They group table rows into header, body and footer sections. They improve structure and make complex tables easier to understand and manipulate.</p></article>
        <article style="background:#fff;border:1px solid #e6e1dc;border-radius:12px;padding:24px 28px;margin:0 0 20px;box-shadow:none;background:#fffdfb;"><h3 style="margin:0 0 10px;color:#28242c;font-size:20px;line-height:1.4;">25. What is the purpose of scope in a table header?</h3><p style="color:#4c4852;"><strong>Answer:</strong> <code>scope</code> helps identify what cells a header describes, such as a column or row. This improves the association between headers and data cells for assistive technologies.</p><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:14px 16px;border-radius:8px;overflow:auto;line-height:1.65;"><code>&lt;th scope="col"&gt;Price&lt;/th&gt;</code></pre></article>
        <article style="background:#fff;border:1px solid #e6e1dc;border-radius:12px;padding:24px 28px;margin:0 0 20px;box-shadow:none;background:#fffdfb;"><h3 style="margin:0 0 10px;color:#28242c;font-size:20px;line-height:1.4;">26. What is the difference between button and anchor?</h3><p style="color:#4c4852;"><strong>Answer:</strong> An anchor navigates to a URL or document location. A button performs an action such as submitting a form, opening a dialog or triggering application behavior. Use the element that matches the user's intent.</p></article>
        <article style="background:#fff;border:1px solid #e6e1dc;border-radius:12px;padding:24px 28px;margin:0 0 20px;box-shadow:none;background:#fffdfb;"><h3 style="margin:0 0 10px;color:#28242c;font-size:20px;line-height:1.4;">27. What does autocomplete do on forms?</h3><p style="color:#4c4852;"><strong>Answer:</strong> It gives the browser hints about whether and how it may autofill fields. Values such as <code>email</code>, <code>name</code>, <code>postal-code</code> and <code>current-password</code> provide semantic hints.</p></article>
        <article style="background:#fff;border:1px solid #e6e1dc;border-radius:12px;padding:24px 28px;margin:0 0 20px;box-shadow:none;background:#fffdfb;"><h3 style="margin:0 0 10px;color:#28242c;font-size:20px;line-height:1.4;">28. What is native constraint validation?</h3><p style="color:#4c4852;"><strong>Answer:</strong> Browsers can validate controls using attributes such as <code>required</code>, <code>type="email"</code>, <code>min</code>, <code>max</code>, <code>minlength</code>, <code>maxlength</code> and <code>pattern</code> before submission.</p></article>

        <h2 style="color:#5d4e86;font-size:25px;border-bottom:2px solid #e7e3df;padding-bottom:9px;margin:30px 0 18px;">Advanced</h2>
        <article style="background:#fff;border:1px solid #e6e1dc;border-radius:12px;padding:24px 28px;margin:0 0 20px;box-shadow:none;background:#fffdfb;"><h3 style="margin:0 0 10px;color:#28242c;font-size:20px;line-height:1.4;">29. What is the difference between async and defer on scripts?</h3><p style="color:#4c4852;"><strong>Answer:</strong> Both allow classic external scripts to download without blocking HTML parsing. <code>defer</code> scripts execute after parsing and preserve document order. <code>async</code> scripts execute as soon as they finish downloading, so execution order is not guaranteed.</p></article>
        <article style="background:#fff;border:1px solid #e6e1dc;border-radius:12px;padding:24px 28px;margin:0 0 20px;box-shadow:none;background:#fffdfb;"><h3 style="margin:0 0 10px;color:#28242c;font-size:20px;line-height:1.4;">30. Why can a script in the head block rendering/parsing?</h3><p style="color:#4c4852;"><strong>Answer:</strong> A classic parser-inserted script without appropriate loading behavior can pause HTML parsing while the browser fetches and executes it. This is why script placement and loading attributes matter for performance.</p></article>
        <article style="background:#fff;border:1px solid #e6e1dc;border-radius:12px;padding:24px 28px;margin:0 0 20px;box-shadow:none;background:#fffdfb;"><h3 style="margin:0 0 10px;color:#28242c;font-size:20px;line-height:1.4;">31. What is the purpose of meta viewport?</h3><p style="color:#4c4852;"><strong>Answer:</strong> It provides viewport behavior information for mobile browsers so the page can be laid out appropriately on device-sized viewports.</p><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:14px 16px;border-radius:8px;overflow:auto;line-height:1.65;"><code>&lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;</code></pre></article>
        <article style="background:#fff;border:1px solid #e6e1dc;border-radius:12px;padding:24px 28px;margin:0 0 20px;box-shadow:none;background:#fffdfb;"><h3 style="margin:0 0 10px;color:#28242c;font-size:20px;line-height:1.4;">32. What is an iframe sandbox?</h3><p style="color:#4c4852;"><strong>Answer:</strong> The <code>sandbox</code> attribute applies restrictions to content loaded in an iframe. Specific capabilities can be selectively enabled with sandbox tokens. It is useful for isolating untrusted embedded content.</p></article>
        <article style="background:#fff;border:1px solid #e6e1dc;border-radius:12px;padding:24px 28px;margin:0 0 20px;box-shadow:none;background:#fffdfb;"><h3 style="margin:0 0 10px;color:#28242c;font-size:20px;line-height:1.4;">33. Why is target="_blank" often paired with rel="noopener"?</h3><p style="color:#4c4852;"><strong>Answer:</strong> A newly opened browsing context can otherwise have an opener relationship. <code>noopener</code> prevents the opened page from accessing the opener through <code>window.opener</code>. Modern browsers provide additional protections in many cases, but explicit intent is still clear.</p></article>
        <article style="background:#fff;border:1px solid #e6e1dc;border-radius:12px;padding:24px 28px;margin:0 0 20px;box-shadow:none;background:#fffdfb;"><h3 style="margin:0 0 10px;color:#28242c;font-size:20px;line-height:1.4;">34. What is the difference between hidden and CSS display:none?</h3><p style="color:#4c4852;"><strong>Answer:</strong> <code>hidden</code> expresses that the content is not currently relevant or should not be presented. CSS can also hide content visually, but it represents a presentation rule. Be careful not to use hiding mechanisms to remove information that assistive technology should receive.</p></article>
        <article style="background:#fff;border:1px solid #e6e1dc;border-radius:12px;padding:24px 28px;margin:0 0 20px;box-shadow:none;background:#fffdfb;"><h3 style="margin:0 0 10px;color:#28242c;font-size:20px;line-height:1.4;">35. When should ARIA be used?</h3><p style="color:#4c4852;"><strong>Answer:</strong> Prefer native HTML semantics first. Use ARIA when native HTML cannot express the required role, state or property. ARIA changes accessibility semantics; it does not automatically provide keyboard behavior, focus management or interaction logic.</p></article>
        <article style="background:#fff;border:1px solid #e6e1dc;border-radius:12px;padding:24px 28px;margin:0 0 20px;box-shadow:none;background:#fffdfb;"><h3 style="margin:0 0 10px;color:#28242c;font-size:20px;line-height:1.4;">36. Why is a native button better than a clickable div?</h3><p style="color:#4c4852;"><strong>Answer:</strong> A native button already has semantics, keyboard interaction, focus behavior and expected browser accessibility behavior. A clickable <code>div</code> requires developers to recreate much of that behavior correctly.</p></article>
        <article style="background:#fff;border:1px solid #e6e1dc;border-radius:12px;padding:24px 28px;margin:0 0 20px;box-shadow:none;background:#fffdfb;"><h3 style="margin:0 0 10px;color:#28242c;font-size:20px;line-height:1.4;">37. What is the purpose of the dialog element?</h3><p style="color:#4c4852;"><strong>Answer:</strong> <code>dialog</code> represents a dialog box or other interactive subwindow. With JavaScript it can be opened as a modal using <code>showModal()</code>, allowing the browser to provide native dialog behavior.</p></article>
        <article style="background:#fff;border:1px solid #e6e1dc;border-radius:12px;padding:24px 28px;margin:0 0 20px;box-shadow:none;background:#fffdfb;"><h3 style="margin:0 0 10px;color:#28242c;font-size:20px;line-height:1.4;">38. What are details and summary used for?</h3><p style="color:#4c4852;"><strong>Answer:</strong> They provide a native disclosure widget. <code>summary</code> is the visible control and the remaining <code>details</code> content can be expanded or collapsed.</p></article>
        <article style="background:#fff;border:1px solid #e6e1dc;border-radius:12px;padding:24px 28px;margin:0 0 20px;box-shadow:none;background:#fffdfb;"><h3 style="margin:0 0 10px;color:#28242c;font-size:20px;line-height:1.4;">39. What is the popover attribute?</h3><p style="color:#4c4852;"><strong>Answer:</strong> The popover feature provides declarative support for temporary overlay UI such as menus, hints and popovers. A trigger can use attributes such as <code>popovertarget</code> to control a popover element.</p></article>
        <article style="background:#fff;border:1px solid #e6e1dc;border-radius:12px;padding:24px 28px;margin:0 0 20px;box-shadow:none;background:#fffdfb;"><h3 style="margin:0 0 10px;color:#28242c;font-size:20px;line-height:1.4;">40. What is the difference between loading="lazy" and eager loading?</h3><p style="color:#4c4852;"><strong>Answer:</strong> Lazy loading allows suitable resources such as images or iframes to be deferred until they are near the viewport. Eager loading requests the resource normally. Use lazy loading for non-critical off-screen content, not important above-the-fold images by default.</p></article>
        <article style="background:#fff;border:1px solid #e6e1dc;border-radius:12px;padding:24px 28px;margin:0 0 20px;box-shadow:none;background:#fffdfb;"><h3 style="margin:0 0 10px;color:#28242c;font-size:20px;line-height:1.4;">41. Why should width and height be specified on images?</h3><p style="color:#4c4852;"><strong>Answer:</strong> Providing dimensions allows the browser to reserve the correct aspect-ratio space earlier, reducing layout shifts while the image loads.</p></article>
        <article style="background:#fff;border:1px solid #e6e1dc;border-radius:12px;padding:24px 28px;margin:0 0 20px;box-shadow:none;background:#fffdfb;"><h3 style="margin:0 0 10px;color:#28242c;font-size:20px;line-height:1.4;">42. What is the difference between SVG and Canvas?</h3><p style="color:#4c4852;"><strong>Answer:</strong> SVG is a retained-mode vector document made of elements that can participate in the DOM and accessibility tree. Canvas is a bitmap drawing surface controlled mainly through JavaScript. SVG is often convenient for scalable UI graphics; Canvas is useful for pixel-oriented or frequently redrawn graphics.</p></article>

        <h2 style="color:#514276;font-size:25px;border-bottom:2px solid #e7e3df;padding-bottom:9px;margin:30px 0 18px;">Expert</h2>
        <article style="background:#fff;border:1px solid #e6e1dc;border-radius:12px;padding:24px 28px;margin:0 0 20px;box-shadow:none;background:#fffdfb;"><h3 style="margin:0 0 10px;color:#28242c;font-size:20px;line-height:1.4;">43. What happens conceptually when the browser parses HTML?</h3><p style="color:#4c4852;"><strong>Answer:</strong> The browser tokenizes the HTML and constructs a DOM tree according to the HTML parsing algorithm. The resulting DOM can differ from the literal source because the parser performs error recovery and inserts or closes elements according to the specification.</p></article>
        <article style="background:#fff;border:1px solid #e6e1dc;border-radius:12px;padding:24px 28px;margin:0 0 20px;box-shadow:none;background:#fffdfb;"><h3 style="margin:0 0 10px;color:#28242c;font-size:20px;line-height:1.4;">44. Why can invalid HTML still appear to work?</h3><p style="color:#4c4852;"><strong>Answer:</strong> Browsers implement standardized error-recovery rules. Invalid markup may therefore produce a usable DOM, but relying on recovery makes behavior harder to reason about and can cause accessibility, styling or scripting problems.</p></article>
        <article style="background:#fff;border:1px solid #e6e1dc;border-radius:12px;padding:24px 28px;margin:0 0 20px;box-shadow:none;background:#fffdfb;"><h3 style="margin:0 0 10px;color:#28242c;font-size:20px;line-height:1.4;">45. What is the DOM versus HTML source?</h3><p style="color:#4c4852;"><strong>Answer:</strong> The source is the serialized document received or authored. The DOM is the browser's in-memory document tree after parsing. JavaScript manipulates the DOM, and the DOM is not always a byte-for-byte representation of the original source.</p></article>
        <article style="background:#fff;border:1px solid #e6e1dc;border-radius:12px;padding:24px 28px;margin:0 0 20px;box-shadow:none;background:#fffdfb;"><h3 style="margin:0 0 10px;color:#28242c;font-size:20px;line-height:1.4;">46. What are content categories in HTML?</h3><p style="color:#4c4852;"><strong>Answer:</strong> HTML defines categories such as flow, phrasing, heading, interactive, embedded and metadata content. They describe what kinds of elements can participate in particular contexts and help determine valid parent/child relationships.</p></article>
        <article style="background:#fff;border:1px solid #e6e1dc;border-radius:12px;padding:24px 28px;margin:0 0 20px;box-shadow:none;background:#fffdfb;"><h3 style="margin:0 0 10px;color:#28242c;font-size:20px;line-height:1.4;">47. Why can the same element be valid in one parent but invalid in another?</h3><p style="color:#4c4852;"><strong>Answer:</strong> HTML defines permitted content for each element. For example, an element may allow phrasing content but not arbitrary flow content. Correct nesting is therefore determined by the content model, not just by whether a browser happens to render the markup.</p></article>
        <article style="background:#fff;border:1px solid #e6e1dc;border-radius:12px;padding:24px 28px;margin:0 0 20px;box-shadow:none;background:#fffdfb;"><h3 style="margin:0 0 10px;color:#28242c;font-size:20px;line-height:1.4;">48. What is the purpose of template?</h3><p style="color:#4c4852;"><strong>Answer:</strong> <code>template</code> holds inert markup that is not rendered as part of the document immediately. Its contents can later be cloned and inserted using JavaScript, making it useful for reusable client-side markup and Web Components.</p></article>
        <article style="background:#fff;border:1px solid #e6e1dc;border-radius:12px;padding:24px 28px;margin:0 0 20px;box-shadow:none;background:#fffdfb;"><h3 style="margin:0 0 10px;color:#28242c;font-size:20px;line-height:1.4;">49. What is the slot element?</h3><p style="color:#4c4852;"><strong>Answer:</strong> <code>slot</code> is used with Shadow DOM to define insertion points for light-DOM content supplied by a component consumer.</p></article>
        <article style="background:#fff;border:1px solid #e6e1dc;border-radius:12px;padding:24px 28px;margin:0 0 20px;box-shadow:none;background:#fffdfb;"><h3 style="margin:0 0 10px;color:#28242c;font-size:20px;line-height:1.4;">50. What is declarative versus imperative HTML behavior?</h3><p style="color:#4c4852;"><strong>Answer:</strong> Declarative HTML describes desired structure or behavior through markup, such as <code>details</code>, <code>dialog</code> and popovers. Imperative behavior is explicitly performed by JavaScript, such as calling methods, changing properties or registering event handlers.</p></article>
        <article style="background:#fff;border:1px solid #e6e1dc;border-radius:12px;padding:24px 28px;margin:0 0 20px;box-shadow:none;background:#fffdfb;"><h3 style="margin:0 0 10px;color:#28242c;font-size:20px;line-height:1.4;">51. What security considerations exist for external links and embeds?</h3><p style="color:#4c4852;"><strong>Answer:</strong> Treat external content as untrusted. Consider <code>noopener</code> for opened contexts, iframe <code>sandbox</code>, appropriate <code>referrerpolicy</code>, safe URL schemes, Content Security Policy, and whether third-party content actually needs to execute scripts or access capabilities.</p></article>
        <article style="background:#fff;border:1px solid #e6e1dc;border-radius:12px;padding:24px 28px;margin:0 0 20px;box-shadow:none;background:#fffdfb;"><h3 style="margin:0 0 10px;color:#28242c;font-size:20px;line-height:1.4;">52. What is the difference between preload, prefetch and normal loading?</h3><p style="color:#4c4852;"><strong>Answer:</strong> They communicate different resource priorities and intended use. <code>preload</code> asks the browser to fetch a resource needed soon; <code>prefetch</code> is a lower-priority hint for a resource likely to be needed later. Incorrect hints can waste bandwidth, so they should be used deliberately.</p></article>
        <article style="background:#fff;border:1px solid #e6e1dc;border-radius:12px;padding:24px 28px;margin:0 0 20px;box-shadow:none;background:#fffdfb;"><h3 style="margin:0 0 10px;color:#28242c;font-size:20px;line-height:1.4;">53. How can HTML affect Core Web Vitals?</h3><p style="color:#4c4852;"><strong>Answer:</strong> HTML controls what resources are discovered and their loading hints. Image dimensions can reduce layout shifts, correct image sizing can reduce download cost, and script/resource placement can affect how quickly the page becomes usable. HTML is therefore part of performance engineering, not just structure.</p></article>
        <article style="background:#fff;border:1px solid #e6e1dc;border-radius:12px;padding:24px 28px;margin:0 0 20px;box-shadow:none;background:#fffdfb;"><h3 style="margin:0 0 10px;color:#28242c;font-size:20px;line-height:1.4;">54. How would you build an accessible custom control?</h3><p style="color:#4c4852;"><strong>Answer:</strong> First ask whether a native control can meet the requirement. If not, define the correct semantic role/state, make it keyboard accessible, implement expected focus behavior, expose state changes to assistive technology, and test with keyboard and screen-reader workflows. ARIA alone is not enough.</p></article>
        <article style="background:#fff;border:1px solid #e6e1dc;border-radius:12px;padding:24px 28px;margin:0 0 20px;box-shadow:none;background:#fffdfb;"><h3 style="margin:0 0 10px;color:#28242c;font-size:20px;line-height:1.4;">55. How do you debug an HTML accessibility issue?</h3><p style="color:#4c4852;"><strong>Answer:</strong> Inspect the DOM and accessibility tree in browser DevTools, check headings and landmarks, verify labels and names for controls, test keyboard navigation, inspect focus order, check image alternatives and table associations, then validate with automated tools and manual testing.</p></article>
        <article style="background:#fff;border:1px solid #e6e1dc;border-radius:12px;padding:24px 28px;margin:0 0 20px;box-shadow:none;background:#fffdfb;"><h3 style="margin:0 0 10px;color:#28242c;font-size:20px;line-height:1.4;">56. What makes HTML production-ready?</h3><p style="color:#4c4852;"><strong>Answer:</strong> Production-ready HTML is valid and maintainable, uses semantic elements appropriately, has correct document metadata, accessible names and relationships, responsive media, sensible loading behavior, safe external links and embeds, predictable form behavior, and minimal reliance on browser error recovery.</p><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:14px 16px;border-radius:8px;overflow:auto;line-height:1.65;"><code>&lt;!doctype html&gt;
&lt;html lang="en"&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;
    &lt;title&gt;Accessible Product Page&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;header&gt;...&lt;/header&gt;
    &lt;main&gt;...&lt;/main&gt;
    &lt;footer&gt;...&lt;/footer&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre></article>

        <div style="margin-top:24px;padding:16px 18px;background:#f7f5f1;border-left:4px solid #5d4e86;border-radius:8px;">
          <strong>Interview tip:</strong> For senior HTML questions, do not stop at the definition. Explain <em>why</em> the element exists, what problem it solves, what the accessible behavior should be, and when you would choose an alternative.
        </div>
      </div>
    `,
    contents: [
  {
    "id": "htmlInterview_1",
    "title": "56 Interview Questions and Answers",
    "images": []
  }
],
  }
];
