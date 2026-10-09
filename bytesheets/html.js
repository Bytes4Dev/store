[
  {
    course: "HTML",
    description: `A comprehensive HTML course covering document structure, text, links, media, semantics, tables, forms, accessibility, metadata, interactive HTML, browser behavior, performance, security, graphics, Web Components, internationalization, standards-aware development, practical projects and 100 interview questions.`,
    keywords: `HTML, HTML tutorial, HTML course, HTML interview questions, semantic HTML, accessibility, HTML forms, responsive images, SEO, HTML5, web development, beginner HTML, advanced HTML, DOM, Web Components, SVG, Canvas`,
    id: "HTMLTags",
    title: "HTML Complete Course",
    about: `<div style="font-family:Inter,"Avenir Next","Segoe UI",sans-serif;color:#302d35;background:#fff;width:100%;max-width:none;margin:0;box-sizing:border-box;padding:30px 2vw 42px;line-height:1.82;font-size:16.5px;letter-spacing:0;">
<div style="background:#fcfbf9;border:1px solid #e7e0f0;border-radius:16px;padding:30px;margin-bottom:26px;">
<h2 style="color:#5d4e86;margin:0 0 10px;font-size:34px;">HTML Complete Course</h2>
<p style="font-size:17px;color:#4c4852;margin:0 0 12px;">A complete, progressive HTML course for beginners, working developers and interview preparation. Every major topic is taught through multiple lesson blocks: explanation → example → why it matters → common mistake → practice.</p>
<div style="background:#f4f0f9;border-left:4px solid #5d4e86;padding:13px 16px;border-radius:7px;"><strong>Learning rule:</strong> Do not memorize tags in isolation. Understand what problem each element solves, type the examples yourself, change them, inspect the DOM, and explain your choices.</div>
</div>
<div style="background:#fff;border:1px solid #e7e3df;border-radius:12px;padding:24px 28px;margin-bottom:22px;">
<h2 style="color:#5d4e86;margin-top:0;">Who this is for</h2><ul style="color:#4c4852;"><li>New learners who want a structured HTML foundation.</li><li>Frontend developers who need a deeper browser, accessibility and performance refresher.</li><li>MERN/React developers who want strong HTML fundamentals behind component-based UI.</li><li>Interview candidates preparing from beginner through senior-level HTML questions.</li><li>Experienced developers who want a standards-aware checklist for production HTML.</li></ul>
</div>
<div style="background:#fff;border:1px solid #e7e3df;border-radius:12px;padding:24px 28px;">
<h2 style="color:#5d4e86;margin-top:0;">Roadmap</h2>
<ol style="color:#4c4852;"><li>1. HTML Foundations & Document Structure</li><li>2. Text, Links, Lists & Navigation</li><li>3. Images, Responsive Images & Media</li><li>4. Semantic HTML & Page Architecture</li><li>5. Tables & Accessible Tabular Data</li><li>6. Forms, Controls & Validation</li><li>7. Accessibility, Keyboard Support & ARIA</li><li>8. Head, Metadata, SEO & Structured Information</li><li>9. Modern Interactive HTML</li><li>10. Advanced HTML: DOM, Loading, Performance & Security</li><li>11. SVG, Canvas, MathML & Graphics in HTML</li><li>12. Web Components, Templates & Reusable HTML</li><li>13. Internationalization, Language, Direction & Specialized Content</li><li>14. Deprecated HTML, Compatibility & Standards-Aware Development</li><li>15. Practical Projects, Debugging, Review & Production Checklist</li><li>16. HTML Interview Preparation — 100 Questions & Answers</li></ol>
</div>
<div style="background:#fbf8ef;border-left:4px solid #c79a4a;padding:15px 17px;border-radius:8px;margin:22px 0 0;"><strong>Study workflow:</strong> Read → type → modify → inspect → test with keyboard → validate → explain. After every major stage, build a small project rather than immediately moving to the next list of tags.</div>
</div>`,
    contents: [],
  },
  {
    id: "htmlFoundations",
    title: "1. HTML Foundations & Document Structure",
    about: `<div style="font-family:Inter,"Avenir Next","Segoe UI",sans-serif;color:#302d35;background:#fff;width:100%;max-width:none;margin:0;box-sizing:border-box;padding:30px 2vw 42px;line-height:1.82;font-size:16.5px;letter-spacing:0;">
<div style="background:#fcfbf9;border:1px solid #e7e0f0;border-radius:16px;padding:28px 30px;margin-bottom:26px;">
<h2 style="color:#5d4e86;margin:0 0 10px;font-size:31px;letter-spacing:-0.02em;">1. HTML Foundations & Document Structure</h2>
<p style="margin:0 0 12px;color:#4c4852;font-size:17px;">Build the mental model before memorizing tags. Learn how source markup becomes a document, how elements are nested, and what the browser expects from a modern HTML document.</p>
<div style="background:#f4f0f9;border-left:4px solid #5d4e86;padding:12px 15px;border-radius:7px;"><strong>Focus:</strong> Write a valid document from memory and explain every major line.</div>
</div><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">1.1 What HTML actually is</h2>
<p style="color:#4c4852;">HTML is a markup language for describing the structure and meaning of a document. It is not a programming language and it is not the styling layer. Browsers parse HTML into a document tree that CSS and JavaScript can work with.</p><div style="background:#f4f0f9;border-left:4px solid #5d4e86;padding:12px 15px;border-radius:7px;margin:14px 0;"><strong>Why it matters:</strong> Separating structure, presentation and behavior makes pages easier to maintain and more accessible.</div><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;h1&gt;Developer Portfolio&lt;/h1&gt;
&lt;p&gt;I build web applications.&lt;/p&gt;</code></pre></div><div style="background:#fff5f3;border-left:4px solid #c56b55;padding:12px 15px;border-radius:7px;margin:14px 0;"><strong>Common mistake:</strong> Thinking of HTML as “a list of tags that make things look right.” Visual appearance is primarily CSS’s job.</div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">1.2 Elements, tags, content and nesting</h2>
<p style="color:#4c4852;">An element is the complete construct; tags are the markup syntax used by many elements. Elements can contain text, other elements, or both. Nesting must form a valid hierarchy.</p><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;p class="intro"&gt;Hello &lt;strong&gt;HTML&lt;/strong&gt;&lt;/p&gt;</code></pre></div><div style="background:#f7f5f1;border-left:4px solid #c79a4a;padding:12px 15px;border-radius:7px;margin:14px 0;"><strong>Practice:</strong> Take the example and add an emphasized word inside the strong element, then explain which element is the parent and which is the child.</div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">1.3 Void elements</h2>
<p style="color:#4c4852;">Void elements do not have closing tags because they cannot contain child content. Common examples include img, input, br, hr, meta, link, source, track, area and base.</p><div style="background:#f4f0f9;border-left:4px solid #5d4e86;padding:12px 15px;border-radius:7px;margin:14px 0;"><strong>Why it matters:</strong> Understanding void elements prevents malformed markup and helps distinguish HTML syntax from XML-style syntax.</div><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;img src="avatar.jpg" alt="Profile photo" width="160" height="160"&gt;
&lt;input type="email" name="email"&gt;</code></pre></div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">1.4 DOCTYPE, html, head and body</h2>
<p style="color:#4c4852;">The modern doctype is short and primarily switches browsers into standards mode. The html element is the document root; head contains metadata and resource relationships; body contains document content.</p><div style="background:#f4f0f9;border-left:4px solid #5d4e86;padding:12px 15px;border-radius:7px;margin:14px 0;"><strong>Why it matters:</strong> Standards mode avoids legacy browser quirks and the lang declaration helps assistive technology and language-aware tools.</div><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;!doctype html&gt;
&lt;html lang="en"&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;
    &lt;title&gt;My page&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Hello&lt;/h1&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre></div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">1.5 Attributes and attribute values</h2>
<p style="color:#4c4852;">Attributes configure elements. Learn quoted values, boolean attributes, global attributes, URL-valued attributes and the difference between an HTML attribute and a live DOM property.</p><div style="background:#f4f0f9;border-left:4px solid #5d4e86;padding:12px 15px;border-radius:7px;margin:14px 0;"><strong>Why it matters:</strong> Boolean attributes are presence-based: required="false" still means required because the attribute exists.</div><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;input type="email" name="email" required autocomplete="email"&gt;
&lt;button type="button" disabled&gt;Unavailable&lt;/button&gt;</code></pre></div><div style="background:#fff5f3;border-left:4px solid #c56b55;padding:12px 15px;border-radius:7px;margin:14px 0;"><strong>Common mistake:</strong> Treating every attribute value as a JavaScript boolean.</div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">1.6 Comments, whitespace and character references</h2>
<p style="color:#4c4852;">Comments are source notes and are still delivered to the browser, so they are not a place for secrets. Normal HTML whitespace in phrasing content is generally collapsed. Character references let markup characters appear as text.</p><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;!-- Internal note: this section is temporary --&gt;
&lt;p&gt;Use &amp;lt;strong&amp;gt; for strong importance.&lt;/p&gt;</code></pre></div><div style="background:#f7f5f1;border-left:4px solid #c79a4a;padding:12px 15px;border-radius:7px;margin:14px 0;"><strong>Practice:</strong> Write examples containing <, >, &, quotes and multiple spaces. Explain which characters need references and why.</div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">1.7 Encoding and Unicode</h2>
<p style="color:#4c4852;">UTF-8 can represent the characters used by most modern web content. Put the charset declaration early in the head so the browser can decode the document correctly.</p><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;meta charset="utf-8"&gt;
&lt;p&gt;தமிழ் · हिन्दी · 日本語 · العربية · 😀&lt;/p&gt;</code></pre></div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">1.8 Global attributes</h2>
<p style="color:#4c4852;">Global attributes can apply to many HTML elements. Know id, class, title, lang, dir, hidden, inert, data-*, contenteditable, draggable, spellcheck, translate, tabindex and accesskey, including when not to use them.</p><div style="background:#f4f0f9;border-left:4px solid #5d4e86;padding:12px 15px;border-radius:7px;margin:14px 0;"><strong>Why it matters:</strong> Global attributes are powerful, but adding them without a semantic reason can create confusing behavior.</div><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;p id="intro" class="lead" lang="en" data-topic="html"&gt;Welcome.&lt;/p&gt;</code></pre></div></section><section style="background:#fbf8ef;border:1px solid #eadfc9;border-radius:12px;padding:22px 24px;margin-top:12px;">
<h2 style="color:#6b552f;margin-top:0;">Checkpoint</h2><p style="color:#4c4852;">You should now understand the document as a structured tree rather than a visual canvas.</p>
<h3 style="color:#6a5b91;">Before moving on</h3><ul style="color:#4c4852;"><li>Create a standards-mode document without copying a template.</li><li>Explain head versus body.</li><li>Explain boolean attributes.</li><li>Identify void elements.</li><li>Explain why comments cannot protect secrets.</li></ul>
<h3 style="color:#6a5b91;">Mini project</h3><p style="color:#4c4852;">Create a personal profile page containing a title, metadata, headings, paragraphs, a list and an image. Inspect the resulting DOM in DevTools.</p>
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
    about: `<div style="font-family:Inter,"Avenir Next","Segoe UI",sans-serif;color:#302d35;background:#fff;width:100%;max-width:none;margin:0;box-sizing:border-box;padding:30px 2vw 42px;line-height:1.82;font-size:16.5px;letter-spacing:0;">
<div style="background:#fcfbf9;border:1px solid #e7e0f0;border-radius:16px;padding:28px 30px;margin-bottom:26px;">
<h2 style="color:#5d4e86;margin:0 0 10px;font-size:31px;letter-spacing:-0.02em;">2. Text, Links, Lists & Navigation</h2>
<p style="margin:0 0 12px;color:#4c4852;font-size:17px;">Learn the vocabulary of documents and the URL model behind links. The goal is semantic content that remains meaningful even before CSS is applied.</p>
<div style="background:#f4f0f9;border-left:4px solid #5d4e86;padding:12px 15px;border-radius:7px;"><strong>Focus:</strong> Choose elements based on meaning rather than their default appearance.</div>
</div><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">2.1 Headings and document hierarchy</h2>
<p style="color:#4c4852;">Use h1–h6 to express heading levels. Heading level is a structural relationship, not simply a font-size choice. A page can have one main topic and many nested subsections.</p><div style="background:#f4f0f9;border-left:4px solid #5d4e86;padding:12px 15px;border-radius:7px;margin:14px 0;"><strong>Why it matters:</strong> Headings help readers scan content and help assistive technology expose a useful outline.</div><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;h1&gt;HTML Course&lt;/h1&gt;
&lt;h2&gt;Forms&lt;/h2&gt;
&lt;h3&gt;Validation&lt;/h3&gt;
&lt;h2&gt;Accessibility&lt;/h2&gt;</code></pre></div><div style="background:#fff5f3;border-left:4px solid #c56b55;padding:12px 15px;border-radius:7px;margin:14px 0;"><strong>Common mistake:</strong> Choosing h4 because it “looks the right size” and then using CSS to fix the hierarchy.</div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">2.2 Paragraphs, line breaks and thematic breaks</h2>
<p style="color:#4c4852;">Use p for paragraphs. Use br when a line break is part of the content, such as an address or poem, not as a spacing tool. hr represents a thematic break between topics.</p><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;p&gt;Line one&lt;br&gt;Line two&lt;/p&gt;
&lt;hr&gt;
&lt;p&gt;A new topic starts here.&lt;/p&gt;</code></pre></div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">2.3 Inline semantics</h2>
<p style="color:#4c4852;">Strong conveys strong importance; em conveys stress emphasis; mark highlights relevance; small is for side comments or fine print; s marks content that is no longer accurate. Use del/ins for editorial changes and sub/sup for subscripts and superscripts.</p><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;p&gt;&lt;strong&gt;Important:&lt;/strong&gt; Back up your data.&lt;/p&gt;
&lt;p&gt;Water is H&lt;sub&gt;2&lt;/sub&gt;O.&lt;/p&gt;
&lt;p&gt;2&lt;sup&gt;10&lt;/sup&gt; = 1024.&lt;/p&gt;</code></pre></div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">2.4 Technical text and quotations</h2>
<p style="color:#4c4852;">Use code for code fragments, kbd for user input, samp for program output, var for variables, pre for preserved whitespace, q for short quotations, blockquote for longer quotations, cite for the title of a work, abbr for abbreviations and dfn when defining a term.</p><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;p&gt;Run &lt;code&gt;npm test&lt;/code&gt; in the terminal.&lt;/p&gt;
&lt;p&gt;Press &lt;kbd&gt;Ctrl&lt;/kbd&gt; + &lt;kbd&gt;C&lt;/kbd&gt;.&lt;/p&gt;
&lt;blockquote cite="https://example.com/article"&gt;A short quoted passage.&lt;/blockquote&gt;</code></pre></div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">2.5 Links and the URL model</h2>
<p style="color:#4c4852;">The a element creates hyperlinks. Understand absolute, root-relative and document-relative URLs, fragments, URL schemes and query strings.</p><div style="background:#f4f0f9;border-left:4px solid #5d4e86;padding:12px 15px;border-radius:7px;margin:14px 0;"><strong>Why it matters:</strong> Good link text tells users what they will reach. A URL is data with structure, not merely a string to paste into href.</div><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;a href="/docs/forms#validation?mode=basic"&gt;Form validation&lt;/a&gt;</code></pre></div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">2.6 Link targets and relationships</h2>
<p style="color:#4c4852;">target controls where navigation occurs. When opening a new browsing context, understand rel values such as noopener, noreferrer and external. Use download only when a resource should be offered as a download and the browser permits it.</p><div style="background:#f4f0f9;border-left:4px solid #5d4e86;padding:12px 15px;border-radius:7px;margin:14px 0;"><strong>Why it matters:</strong> New-window behavior should be intentional and understandable.</div><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;a href="https://example.com" target="_blank" rel="noopener"&gt;External documentation&lt;/a&gt;</code></pre></div><div style="background:#fff5f3;border-left:4px solid #c56b55;padding:12px 15px;border-radius:7px;margin:14px 0;"><strong>Common mistake:</strong> Using target="_blank" everywhere without considering user expectations or relationship metadata.</div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">2.7 Lists</h2>
<p style="color:#4c4852;">Use ul for unordered collections, ol when sequence matters, and dl for term-description or name-value relationships. Ordered lists support start, reversed and type when those semantics are genuinely needed.</p><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;ol&gt;
  &lt;li&gt;Install dependencies&lt;/li&gt;
  &lt;li&gt;Run tests&lt;/li&gt;
  &lt;li&gt;Deploy&lt;/li&gt;
&lt;/ol&gt;
&lt;dl&gt;&lt;dt&gt;HTTP&lt;/dt&gt;&lt;dd&gt;A protocol for transferring resources.&lt;/dd&gt;&lt;/dl&gt;</code></pre></div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">2.8 Navigation and skip links</h2>
<p style="color:#4c4852;">Navigation is usually a group of important links. A skip link lets keyboard users bypass repeated navigation and move directly to main content.</p><div style="background:#f4f0f9;border-left:4px solid #5d4e86;padding:12px 15px;border-radius:7px;margin:14px 0;"><strong>Why it matters:</strong> Skip links solve a real keyboard-navigation problem without requiring custom JavaScript.</div><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;a href="#main" class="skip-link"&gt;Skip to main content&lt;/a&gt;
&lt;nav aria-label="Primary"&gt;
  &lt;a href="/"&gt;Home&lt;/a&gt;
  &lt;a href="/docs"&gt;Docs&lt;/a&gt;
&lt;/nav&gt;
&lt;main id="main"&gt;...&lt;/main&gt;</code></pre></div></section><section style="background:#fbf8ef;border:1px solid #eadfc9;border-radius:12px;padding:22px 24px;margin-top:12px;">
<h2 style="color:#6b552f;margin-top:0;">Checkpoint</h2><p style="color:#4c4852;">You should be able to read a page as a meaningful document even if all CSS is removed.</p>
<h3 style="color:#6a5b91;">Before moving on</h3><ul style="color:#4c4852;"><li>Build a correct heading hierarchy.</li><li>Explain a relative URL and a fragment.</li><li>Choose ul, ol or dl intentionally.</li><li>Use native links instead of clickable divs.</li></ul>
<h3 style="color:#6a5b91;">Mini project</h3><p style="color:#4c4852;">Build a documentation page with a sidebar navigation, skip link, headings, code samples, ordered steps and a glossary using dl.</p>
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
    about: `<div style="font-family:Inter,"Avenir Next","Segoe UI",sans-serif;color:#302d35;background:#fff;width:100%;max-width:none;margin:0;box-sizing:border-box;padding:30px 2vw 42px;line-height:1.82;font-size:16.5px;letter-spacing:0;">
<div style="background:#fcfbf9;border:1px solid #e7e0f0;border-radius:16px;padding:28px 30px;margin-bottom:26px;">
<h2 style="color:#5d4e86;margin:0 0 10px;font-size:31px;letter-spacing:-0.02em;">3. Images, Responsive Images, Audio, Video & Embedded Content</h2>
<p style="margin:0 0 12px;color:#4c4852;font-size:17px;">Learn how media affects semantics, accessibility, bandwidth and layout. Production HTML should give the browser enough information to choose sensible resources.</p>
<div style="background:#f4f0f9;border-left:4px solid #5d4e86;padding:12px 15px;border-radius:7px;"><strong>Focus:</strong> Be able to explain alt text, dimensions, srcset, sizes, picture, captions, loading and media fallbacks.</div>
</div><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">3.1 img fundamentals</h2>
<p style="color:#4c4852;">img is a replaced element that embeds an image resource. src identifies the resource; alt supplies a text alternative when appropriate; width and height communicate intrinsic dimensions and help reserve layout space.</p><div style="background:#f4f0f9;border-left:4px solid #5d4e86;padding:12px 15px;border-radius:7px;margin:14px 0;"><strong>Why it matters:</strong> Dimensions can reduce layout movement because the browser can reserve the expected aspect ratio before the image arrives.</div><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;img src="team.jpg" alt="Three engineers reviewing a design" width="900" height="600"&gt;</code></pre></div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">3.2 Writing useful alt text</h2>
<p style="color:#4c4852;">Informative images need concise text alternatives that communicate the relevant purpose. Decorative images can use alt="". Do not describe every visual detail if it does not matter to the surrounding content.</p><div style="background:#f4f0f9;border-left:4px solid #5d4e86;padding:12px 15px;border-radius:7px;margin:14px 0;"><strong>Why it matters:</strong> The correct alt depends on context. The same image may need different alternatives in different pages.</div><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;img src="chart.png" alt="Revenue increased from ₹4.2 lakh in Q1 to ₹5.1 lakh in Q2"&gt;</code></pre></div><div style="background:#fff5f3;border-left:4px solid #c56b55;padding:12px 15px;border-radius:7px;margin:14px 0;"><strong>Common mistake:</strong> Writing “image of” for every image or repeating text that is already present beside the image.</div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">3.3 figure and figcaption</h2>
<p style="color:#4c4852;">Use figure when content is self-contained or independently referenced and a caption adds useful context. It can contain images, code, diagrams or other content.</p><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;figure&gt;
  &lt;img src="architecture.png" alt="Three-tier application architecture" width="1200" height="700"&gt;
  &lt;figcaption&gt;Application architecture used by the platform.&lt;/figcaption&gt;
&lt;/figure&gt;</code></pre></div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">3.4 Responsive images with srcset and sizes</h2>
<p style="color:#4c4852;">srcset lets the browser choose among candidate resources. Width descriptors such as 400w describe intrinsic resource widths. sizes tells the browser how wide the image is expected to display under different viewport conditions.</p><div style="background:#f4f0f9;border-left:4px solid #5d4e86;padding:12px 15px;border-radius:7px;margin:14px 0;"><strong>Why it matters:</strong> Responsive images can save bandwidth on smaller displays while still serving sharp assets to larger displays.</div><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;img
  src="card-800.jpg"
  srcset="card-400.jpg 400w, card-800.jpg 800w, card-1200.jpg 1200w"
  sizes="(max-width: 700px) 100vw, 50vw"
  alt="Product dashboard"
  width="1200"
  height="800"&gt;</code></pre></div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">3.5 picture and art direction</h2>
<p style="color:#4c4852;">picture is useful when the actual composition should change at a breakpoint or when you want source selection by media condition or image format. The img element remains the fallback and carries the alternative text.</p><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;picture&gt;
  &lt;source media="(min-width: 900px)" srcset="hero-wide.webp"&gt;
  &lt;source srcset="hero-mobile.webp"&gt;
  &lt;img src="hero-mobile.jpg" alt="Mountain landscape" width="800" height="600"&gt;
&lt;/picture&gt;</code></pre></div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">3.6 Loading and fetch hints for images</h2>
<p style="color:#4c4852;">loading="lazy" can defer off-screen images. decoding can provide a hint about decoding strategy. fetchpriority can express relative importance when supported. These are hints, not commands, so measure real performance.</p><div style="background:#f4f0f9;border-left:4px solid #5d4e86;padding:12px 15px;border-radius:7px;margin:14px 0;"><strong>Why it matters:</strong> Do not lazy-load content that is immediately visible and important to the initial view without measuring the impact.</div><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;img src="hero.jpg" alt="Product overview" width="1600" height="900" fetchpriority="high"&gt;
&lt;img src="gallery-1.jpg" alt="Gallery item" width="800" height="600" loading="lazy"&gt;</code></pre></div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">3.7 Audio and video</h2>
<p style="color:#4c4852;">audio and video provide native media playback. Understand controls, muted, autoplay, loop, poster, preload, source fallbacks and accessible alternatives.</p><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;video controls poster="cover.jpg" width="960" height="540"&gt;
  &lt;source src="lesson.webm" type="video/webm"&gt;
  &lt;source src="lesson.mp4" type="video/mp4"&gt;
  Your browser does not support this video.
&lt;/video&gt;</code></pre></div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">3.8 Captions, subtitles and transcripts</h2>
<p style="color:#4c4852;">track connects timed text such as subtitles, captions, descriptions and metadata. Captions are especially important when speech or meaningful audio is part of the experience.</p><div style="background:#f4f0f9;border-left:4px solid #5d4e86;padding:12px 15px;border-radius:7px;margin:14px 0;"><strong>Why it matters:</strong> A transcript is often useful even when a timed track exists because it provides a searchable, copyable text representation.</div><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;video controls&gt;
  &lt;source src="lesson.mp4" type="video/mp4"&gt;
  &lt;track src="lesson-en.vtt" kind="subtitles" srclang="en" label="English" default&gt;
&lt;/video&gt;</code></pre></div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">3.9 iframe and embedded documents</h2>
<p style="color:#4c4852;">iframe embeds another browsing context. Understand src, title, loading, sandbox, referrerpolicy and permission-related attributes. Give iframes a useful title and avoid embedding untrusted content without appropriate isolation.</p><div style="background:#f4f0f9;border-left:4px solid #5d4e86;padding:12px 15px;border-radius:7px;margin:14px 0;"><strong>Why it matters:</strong> An iframe can have a different security and origin context from the parent page; sandboxing can reduce capabilities.</div><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;iframe
  src="https://example.com/widget"
  title="Weather widget"
  loading="lazy"
  sandbox="allow-scripts"&gt;
&lt;/iframe&gt;</code></pre></div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">3.10 object, embed, map and area</h2>
<p style="color:#4c4852;">object and embed support embedded external resources but are less common in modern application UI. map and area create image maps for interactive regions. Know them as part of the platform, while recognizing when simpler links or SVG are better choices.</p><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;img src="office-map.png" alt="Office floor map" usemap="#office"&gt;
&lt;map name="office"&gt;
  &lt;area shape="rect" coords="0,0,200,150" href="/rooms/1" alt="Meeting room 1"&gt;
&lt;/map&gt;</code></pre></div></section><section style="background:#fbf8ef;border:1px solid #eadfc9;border-radius:12px;padding:22px 24px;margin-top:12px;">
<h2 style="color:#6b552f;margin-top:0;">Checkpoint</h2><p style="color:#4c4852;">Media markup is successful when the browser can select an appropriate resource and users can understand the content without depending on visual presentation alone.</p>
<h3 style="color:#6a5b91;">Before moving on</h3><ul style="color:#4c4852;"><li>Write meaningful alt text.</li><li>Explain srcset versus picture.</li><li>Know when lazy loading helps.</li><li>Provide captions or alternatives for media.</li><li>Give embedded browsing contexts meaningful titles and appropriate restrictions.</li></ul>
<h3 style="color:#6a5b91;">Mini project</h3><p style="color:#4c4852;">Build an accessible media gallery using figure, picture, responsive images, audio, video, captions and a transcript link.</p>
</section></div>`,
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
    about: `<div style="font-family:Inter,"Avenir Next","Segoe UI",sans-serif;color:#302d35;background:#fff;width:100%;max-width:none;margin:0;box-sizing:border-box;padding:30px 2vw 42px;line-height:1.82;font-size:16.5px;letter-spacing:0;">
<div style="background:#fcfbf9;border:1px solid #e7e0f0;border-radius:16px;padding:28px 30px;margin-bottom:26px;">
<h2 style="color:#5d4e86;margin:0 0 10px;font-size:31px;letter-spacing:-0.02em;">4. Semantic HTML & Page Architecture</h2>
<p style="margin:0 0 12px;color:#4c4852;font-size:17px;">Move from isolated elements to page-level structure. Semantic HTML communicates regions, relationships and content roles to browsers, assistive technology, search systems and other developers.</p>
<div style="background:#f4f0f9;border-left:4px solid #5d4e86;padding:12px 15px;border-radius:7px;"><strong>Focus:</strong> Given a visual design, map it to semantic HTML before thinking about CSS.</div>
</div><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">4.1 header and footer</h2>
<p style="color:#4c4852;">header contains introductory or navigational content for a page or section. footer contains information about its nearest section or the document, such as author, copyright or related links.</p><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;header&gt;
  &lt;a href="/"&gt;Bytes4Dev&lt;/a&gt;
  &lt;nav aria-label="Primary"&gt;...&lt;/nav&gt;
&lt;/header&gt;
&lt;footer&gt;© 2026 Bytes4Dev&lt;/footer&gt;</code></pre></div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">4.2 main and the page’s dominant content</h2>
<p style="color:#4c4852;">main represents the dominant content of the document. A normal document has one main content region. It should not be used for repeated site-wide navigation or sidebars.</p><div style="background:#f4f0f9;border-left:4px solid #5d4e86;padding:12px 15px;border-radius:7px;margin:14px 0;"><strong>Why it matters:</strong> A meaningful main landmark gives keyboard and assistive-technology users a reliable way to reach the page’s primary content.</div><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;main id="main-content"&gt;
  &lt;h1&gt;HTML Forms&lt;/h1&gt;
  &lt;p&gt;...&lt;/p&gt;
&lt;/main&gt;</code></pre></div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">4.3 nav and search</h2>
<p style="color:#4c4852;">nav identifies a section whose purpose is navigation. search can identify a search or filtering region. Not every collection of links needs nav; use it for important navigation groups.</p><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;search aria-label="Site search"&gt;
  &lt;form action="/search"&gt;
    &lt;label for="q"&gt;Search&lt;/label&gt;
    &lt;input id="q" name="q" type="search"&gt;
    &lt;button&gt;Search&lt;/button&gt;
  &lt;/form&gt;
&lt;/search&gt;</code></pre></div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">4.4 article, section and aside</h2>
<p style="color:#4c4852;">article is self-contained content that could stand on its own. section is a thematic grouping, generally with a heading. aside is content related indirectly to the surrounding content. A div is appropriate when no semantic element fits.</p><div style="background:#f4f0f9;border-left:4px solid #5d4e86;padding:12px 15px;border-radius:7px;margin:14px 0;"><strong>Why it matters:</strong> Choosing section because “I need a wrapper” is a common semantic mistake. Use div when the grouping has no particular document meaning.</div><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;article&gt;
  &lt;h2&gt;Understanding Forms&lt;/h2&gt;
  &lt;p&gt;...&lt;/p&gt;
  &lt;aside&gt;Related: Validation&lt;/aside&gt;
&lt;/article&gt;</code></pre></div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">4.5 Address, time, data and semantic metadata</h2>
<p style="color:#4c4852;">address is for contact information for the relevant article or page author/owner. time exposes machine-readable dates or times. data can associate human-readable content with a machine-readable value.</p><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;address&gt;Written by Asha · &lt;a href="mailto:asha@example.com"&gt;Email&lt;/a&gt;&lt;/address&gt;
&lt;time datetime="2026-10-09"&gt;October 9, 2026&lt;/time&gt;
&lt;data value="499"&gt;₹499&lt;/data&gt;</code></pre></div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">4.6 Details, summary and disclosure</h2>
<p style="color:#4c4852;">details and summary provide a native disclosure widget. The summary is the visible control. This is often preferable to recreating a simple accordion with divs and JavaScript.</p><div style="background:#f4f0f9;border-left:4px solid #5d4e86;padding:12px 15px;border-radius:7px;margin:14px 0;"><strong>Why it matters:</strong> Native controls bring built-in semantics and keyboard behavior.</div><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;details&gt;
  &lt;summary&gt;What is semantic HTML?&lt;/summary&gt;
  &lt;p&gt;HTML that communicates the meaning of the content.&lt;/p&gt;
&lt;/details&gt;</code></pre></div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">4.7 Quotations, definitions and editorial markup</h2>
<p style="color:#4c4852;">Use blockquote for longer quotations, q for short inline quotations, cite for the title of a work, dfn for a term being defined, ins for inserted text and del for deleted text.</p><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;p&gt;&lt;dfn&gt;Semantic HTML&lt;/dfn&gt; means choosing markup that expresses meaning.&lt;/p&gt;
&lt;p&gt;Old price: &lt;del&gt;₹999&lt;/del&gt; New price: &lt;ins&gt;₹799&lt;/ins&gt;&lt;/p&gt;</code></pre></div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">4.8 Language, direction and bidirectional text</h2>
<p style="color:#4c4852;">lang identifies language. dir can be ltr, rtl or auto. bdi isolates bidirectional user content; bdo forces direction when truly necessary. Ruby markup can represent pronunciation annotations.</p><div style="background:#f4f0f9;border-left:4px solid #5d4e86;padding:12px 15px;border-radius:7px;margin:14px 0;"><strong>Why it matters:</strong> Correct language and direction metadata improves pronunciation, reading order and text handling.</div><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;p lang="ta"&gt;வணக்கம்&lt;/p&gt;
&lt;p dir="rtl"&gt;مرحبا&lt;/p&gt;
&lt;p&gt;User: &lt;bdi&gt;محمد&lt;/bdi&gt;&lt;/p&gt;</code></pre></div></section><section style="background:#fbf8ef;border:1px solid #eadfc9;border-radius:12px;padding:22px 24px;margin-top:12px;">
<h2 style="color:#6b552f;margin-top:0;">Checkpoint</h2><p style="color:#4c4852;">A semantic page should still make sense if every CSS class name is deleted.</p>
<h3 style="color:#6a5b91;">Before moving on</h3><ul style="color:#4c4852;"><li>Identify header, nav, main, article, section, aside and footer.</li><li>Explain why div is not “bad” but should not replace meaningful elements.</li><li>Use time and lang where they add machine-readable meaning.</li></ul>
<h3 style="color:#6a5b91;">Mini project</h3><p style="color:#4c4852;">Take a common blog or dashboard design and write only the HTML skeleton first. Add CSS only after the semantic structure is complete.</p>
</section></div>`,
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
    about: `<div style="font-family:Inter,"Avenir Next","Segoe UI",sans-serif;color:#302d35;background:#fff;width:100%;max-width:none;margin:0;box-sizing:border-box;padding:30px 2vw 42px;line-height:1.82;font-size:16.5px;letter-spacing:0;">
<div style="background:#fcfbf9;border:1px solid #e7e0f0;border-radius:16px;padding:28px 30px;margin-bottom:26px;">
<h2 style="color:#5d4e86;margin:0 0 10px;font-size:31px;letter-spacing:-0.02em;">5. Tables & Accessible Tabular Data</h2>
<p style="margin:0 0 12px;color:#4c4852;font-size:17px;">Tables represent relationships between data. Learn simple and complex header associations and understand why visual alignment alone is not enough.</p>
<div style="background:#f4f0f9;border-left:4px solid #5d4e86;padding:12px 15px;border-radius:7px;"><strong>Focus:</strong> Be able to explain a table to a screen reader user, not just make it look aligned.</div>
</div><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">5.1 When to use a table</h2>
<p style="color:#4c4852;">Use table for tabular relationships, such as schedules, financial reports, inventories or comparison matrices. Do not use tables for page layout.</p><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;table&gt;
  &lt;caption&gt;Quarterly revenue&lt;/caption&gt;
  &lt;thead&gt;&lt;tr&gt;&lt;th scope="col"&gt;Quarter&lt;/th&gt;&lt;th scope="col"&gt;Revenue&lt;/th&gt;&lt;/tr&gt;&lt;/thead&gt;
  &lt;tbody&gt;&lt;tr&gt;&lt;th scope="row"&gt;Q1&lt;/th&gt;&lt;td&gt;₹4.2L&lt;/td&gt;&lt;/tr&gt;&lt;/tbody&gt;
&lt;/table&gt;</code></pre></div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">5.2 Table anatomy</h2>
<p style="color:#4c4852;">Know table, caption, thead, tbody, tfoot, tr, th and td. caption describes purpose; header cells describe row or column dimensions; data cells contain values.</p><div style="background:#f4f0f9;border-left:4px solid #5d4e86;padding:12px 15px;border-radius:7px;margin:14px 0;"><strong>Why it matters:</strong> A correct semantic structure gives assistive technologies enough information to understand relationships between cells.</div><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;table&gt;
  &lt;caption&gt;Team capacity&lt;/caption&gt;
  &lt;thead&gt;&lt;tr&gt;&lt;th scope="col"&gt;Team&lt;/th&gt;&lt;th scope="col"&gt;Members&lt;/th&gt;&lt;/tr&gt;&lt;/thead&gt;
  &lt;tbody&gt;&lt;tr&gt;&lt;th scope="row"&gt;Frontend&lt;/th&gt;&lt;td&gt;6&lt;/td&gt;&lt;/tr&gt;&lt;/tbody&gt;
&lt;/table&gt;</code></pre></div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">5.3 scope and header relationships</h2>
<p style="color:#4c4852;">scope="col" and scope="row" are useful for straightforward header relationships. Complex tables may need id on headers and headers on data cells to explicitly list the applicable headers.</p><div style="background:#f4f0f9;border-left:4px solid #5d4e86;padding:12px 15px;border-radius:7px;margin:14px 0;"><strong>Why it matters:</strong> Do not use headers="..." casually; it is most valuable when the table has relationships that scope alone cannot express.</div><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;th id="sales" scope="col"&gt;Sales&lt;/th&gt;
&lt;td headers="sales"&gt;₹4.2L&lt;/td&gt;</code></pre></div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">5.4 colspan, rowspan and complex reports</h2>
<p style="color:#4c4852;">colspan and rowspan express structural spanning, not visual decoration. Multi-level reports should preserve the relationship between dimensions and values.</p><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;tr&gt;
  &lt;th colspan="2"&gt;2026&lt;/th&gt;
&lt;/tr&gt;
&lt;tr&gt;
  &lt;th scope="col"&gt;Q1&lt;/th&gt;&lt;th scope="col"&gt;Q2&lt;/th&gt;
&lt;/tr&gt;</code></pre></div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">5.5 Responsive tables</h2>
<p style="color:#4c4852;">Do not destroy the data relationships merely to make a table fit a narrow viewport. Common approaches include horizontal scrolling, responsive transformations with care, or a purpose-built mobile representation. Keep headers associated with values.</p><div style="background:#f4f0f9;border-left:4px solid #5d4e86;padding:12px 15px;border-radius:7px;margin:14px 0;"><strong>Why it matters:</strong> A visually transformed table can become confusing if row and column labels disappear.</div><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;div style="overflow-x:auto"&gt;
  &lt;table&gt;...&lt;/table&gt;
&lt;/div&gt;</code></pre></div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">5.6 Common table mistakes</h2>
<p style="color:#4c4852;">Avoid layout tables, missing headers, vague captions, presentation attributes such as border/cellpadding/cellspacing, and visually complex tables without explicit relationships.</p><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;!-- Prefer CSS for presentation --&gt;
&lt;table class="report"&gt;...&lt;/table&gt;</code></pre></div></section><section style="background:#fbf8ef;border:1px solid #eadfc9;border-radius:12px;padding:22px 24px;margin-top:12px;">
<h2 style="color:#6b552f;margin-top:0;">Checkpoint</h2><p style="color:#4c4852;">A good data table communicates relationships even when visual styling is unavailable.</p>
<h3 style="color:#6a5b91;">Before moving on</h3><ul style="color:#4c4852;"><li>Use caption for purpose.</li><li>Use th for headers and td for values.</li><li>Use scope for simple relationships.</li><li>Know when complex tables require explicit headers.</li></ul>
<h3 style="color:#6a5b91;">Mini project</h3><p style="color:#4c4852;">Create a sales report with row and column headers, a caption, a footer total, and a responsive container. Test it with keyboard navigation and an accessibility tree.</p>
</section></div>`,
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
    about: `<div style="font-family:Inter,"Avenir Next","Segoe UI",sans-serif;color:#302d35;background:#fff;width:100%;max-width:none;margin:0;box-sizing:border-box;padding:30px 2vw 42px;line-height:1.82;font-size:16.5px;letter-spacing:0;">
<div style="background:#fcfbf9;border:1px solid #e7e0f0;border-radius:16px;padding:28px 30px;margin-bottom:26px;">
<h2 style="color:#5d4e86;margin:0 0 10px;font-size:31px;letter-spacing:-0.02em;">6. Forms, Controls, Validation & Submission</h2>
<p style="margin:0 0 12px;color:#4c4852;font-size:17px;">Forms are one of the most important HTML skills for application developers. Learn controls, labels, constraints, submission encoding, browser behavior and the difference between UX validation and security validation.</p>
<div style="background:#f4f0f9;border-left:4px solid #5d4e86;padding:12px 15px;border-radius:7px;"><strong>Focus:</strong> Build an accessible registration form using native HTML before adding JavaScript.</div>
</div><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">6.1 Form structure and ownership</h2>
<p style="color:#4c4852;">form groups controls and defines submission behavior. Controls can be associated by nesting or by a form attribute. The label element provides an accessible name.</p><div style="background:#f4f0f9;border-left:4px solid #5d4e86;padding:12px 15px;border-radius:7px;margin:14px 0;"><strong>Why it matters:</strong> The name attribute is especially important because it determines the key used for successful form submission.</div><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;form action="/signup" method="post"&gt;
  &lt;label for="email"&gt;Email&lt;/label&gt;
  &lt;input id="email" name="email" type="email" required&gt;
  &lt;button type="submit"&gt;Create account&lt;/button&gt;
&lt;/form&gt;</code></pre></div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">6.2 Input types</h2>
<p style="color:#4c4852;">Know text, password, email, tel, url, search, number, range, date, month, week, time, datetime-local, checkbox, radio, file, color, hidden, submit, reset, button and image. The type changes browser behavior, validation and available UI.</p><div style="background:#f4f0f9;border-left:4px solid #5d4e86;padding:12px 15px;border-radius:7px;margin:14px 0;"><strong>Why it matters:</strong> Choosing the right input type improves validation, mobile keyboards, autofill and usability.</div><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;label for="age"&gt;Age&lt;/label&gt;
&lt;input id="age" name="age" type="number" min="18" max="120"&gt;</code></pre></div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">6.3 Labels, fieldsets and legends</h2>
<p style="color:#4c4852;">Every interactive form control should have a useful accessible name. fieldset groups related controls and legend names the group, especially useful for radio buttons and related checkbox choices.</p><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;fieldset&gt;
  &lt;legend&gt;Preferred contact&lt;/legend&gt;
  &lt;label&gt;&lt;input type="radio" name="contact" value="email"&gt; Email&lt;/label&gt;
  &lt;label&gt;&lt;input type="radio" name="contact" value="phone"&gt; Phone&lt;/label&gt;
&lt;/fieldset&gt;</code></pre></div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">6.4 Select, option, optgroup and datalist</h2>
<p style="color:#4c4852;">select restricts choices to provided options. optgroup organizes choices. datalist supplies suggestions while still allowing free-form input.</p><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;label for="country"&gt;Country&lt;/label&gt;
&lt;select id="country" name="country"&gt;
  &lt;optgroup label="Asia"&gt;
    &lt;option value="in"&gt;India&lt;/option&gt;
    &lt;option value="sg"&gt;Singapore&lt;/option&gt;
  &lt;/optgroup&gt;
&lt;/select&gt;

&lt;label for="browser"&gt;Browser&lt;/label&gt;
&lt;input id="browser" name="browser" list="browsers"&gt;
&lt;datalist id="browsers"&gt;&lt;option value="Chrome"&gt;&lt;option value="Firefox"&gt;&lt;/datalist&gt;</code></pre></div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">6.5 textarea, button, output, progress and meter</h2>
<p style="color:#4c4852;">textarea handles multi-line input. button creates actions. output represents a calculated result associated with controls. progress represents task progress; meter represents a measurement within a known range.</p><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;label for="quantity"&gt;Quantity&lt;/label&gt;
&lt;input id="quantity" type="number" value="2"&gt;
&lt;output for="quantity"&gt;2&lt;/output&gt;
&lt;progress value="70" max="100"&gt;70%&lt;/progress&gt;
&lt;meter min="0" max="100" value="82"&gt;82&lt;/meter&gt;</code></pre></div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">6.6 Validation constraints</h2>
<p style="color:#4c4852;">Native constraints include required, type-specific syntax, min/max, minlength/maxlength, step and pattern. checkValidity, reportValidity and setCustomValidity expose the browser’s constraint-validation API.</p><div style="background:#f4f0f9;border-left:4px solid #5d4e86;padding:12px 15px;border-radius:7px;margin:14px 0;"><strong>Why it matters:</strong> Native validation is a user-experience aid, not a security boundary. The server must validate again.</div><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;input
  name="username"
  required
  minlength="3"
  maxlength="30"
  pattern="[A-Za-z0-9_]+"&gt;</code></pre></div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">6.7 Placeholder, autocomplete and inputmode</h2>
<p style="color:#4c4852;">placeholder is a hint, not a replacement for a label. autocomplete enables browser autofill categories. inputmode hints at an appropriate virtual keyboard on supporting devices.</p><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;label for="phone"&gt;Phone number&lt;/label&gt;
&lt;input id="phone" name="phone" type="tel" autocomplete="tel" inputmode="tel" placeholder="e.g. +91 98765 43210"&gt;</code></pre></div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">6.8 File inputs and uploads</h2>
<p style="color:#4c4852;">input type=file selects local files. accept filters the chooser’s suggested file types; multiple permits several files; capture can hint at capture sources on supported devices. The server must validate type, size and content rather than trusting the client.</p><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;label for="avatar"&gt;Profile photo&lt;/label&gt;
&lt;input id="avatar" name="avatar" type="file" accept="image/*"&gt;</code></pre></div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">6.9 GET versus POST</h2>
<p style="color:#4c4852;">GET commonly places successful form data into the URL query string and is appropriate for retrieval/search. POST sends the data in the request body and is common for state-changing operations.</p><div style="background:#f4f0f9;border-left:4px solid #5d4e86;padding:12px 15px;border-radius:7px;margin:14px 0;"><strong>Why it matters:</strong> The method should reflect the operation, not merely personal preference.</div><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;form action="/search" method="get"&gt;
  &lt;label for="q"&gt;Search&lt;/label&gt;
  &lt;input id="q" name="q" type="search"&gt;
  &lt;button&gt;Search&lt;/button&gt;
&lt;/form&gt;</code></pre></div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">6.10 Form encoding and successful controls</h2>
<p style="color:#4c4852;">The default encoding is application/x-www-form-urlencoded. multipart/form-data is required for file uploads. Disabled controls are not successful controls; unchecked checkboxes normally submit nothing; controls need names to contribute data.</p><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;form action="/upload" method="post" enctype="multipart/form-data"&gt;
  &lt;input type="file" name="avatar"&gt;
  &lt;button type="submit"&gt;Upload&lt;/button&gt;
&lt;/form&gt;</code></pre></div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">6.11 Buttons and accidental submissions</h2>
<p style="color:#4c4852;">A button inside a form defaults to submit in many contexts, so explicitly set type="button" for non-submitting actions. submit and reset have distinct semantics.</p><div style="background:#f4f0f9;border-left:4px solid #5d4e86;padding:12px 15px;border-radius:7px;margin:14px 0;"><strong>Why it matters:</strong> Unexpected submissions are a common source of bugs in forms containing multiple buttons.</div><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;button type="button"&gt;Open help&lt;/button&gt;
&lt;button type="submit"&gt;Save&lt;/button&gt;
&lt;button type="reset"&gt;Reset&lt;/button&gt;</code></pre></div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">6.12 Advanced form attributes</h2>
<p style="color:#4c4852;">Know autocomplete, autofocus, disabled, readonly, required, multiple, checked, selected, min, max, step, minlength, maxlength, pattern, size, inputmode, accept, capture and submit-button overrides such as formaction, formmethod and formnovalidate.</p><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;button type="submit" formaction="/draft" formmethod="post"&gt;Save draft&lt;/button&gt;</code></pre></div></section><section style="background:#fbf8ef;border:1px solid #eadfc9;border-radius:12px;padding:22px 24px;margin-top:12px;">
<h2 style="color:#6b552f;margin-top:0;">Checkpoint</h2><p style="color:#4c4852;">You should be able to predict the request generated by a form without JavaScript.</p>
<h3 style="color:#6a5b91;">Before moving on</h3><ul style="color:#4c4852;"><li>Build labels correctly.</li><li>Explain name versus id.</li><li>Choose GET or POST intentionally.</li><li>Explain successful controls.</li><li>Know native validation constraints and their limits.</li><li>Use multipart/form-data for file uploads.</li></ul>
<h3 style="color:#6a5b91;">Mini project</h3><p style="color:#4c4852;">Build a complete account form with profile data, password, contact preference, file upload, terms checkbox, native validation and a server-friendly submission structure.</p>
</section></div>`,
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
    about: `<div style="font-family:Inter,"Avenir Next","Segoe UI",sans-serif;color:#302d35;background:#fff;width:100%;max-width:none;margin:0;box-sizing:border-box;padding:30px 2vw 42px;line-height:1.82;font-size:16.5px;letter-spacing:0;">
<div style="background:#fcfbf9;border:1px solid #e7e0f0;border-radius:16px;padding:28px 30px;margin-bottom:26px;">
<h2 style="color:#5d4e86;margin:0 0 10px;font-size:31px;letter-spacing:-0.02em;">7. Accessibility, Keyboard Support & ARIA</h2>
<p style="margin:0 0 12px;color:#4c4852;font-size:17px;">Accessibility starts with native HTML. Learn accessible names, roles, states, keyboard behavior, focus order, text alternatives and when ARIA is appropriate.</p>
<div style="background:#f4f0f9;border-left:4px solid #5d4e86;padding:12px 15px;border-radius:7px;"><strong>Focus:</strong> For every interactive element, ask: what is its name, role, state, keyboard behavior and focus behavior?</div>
</div><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">7.1 Native HTML first</h2>
<p style="color:#4c4852;">Native buttons, links, inputs, headings, lists, tables and landmarks already expose useful semantics and interaction patterns. Prefer them before custom roles.</p><div style="background:#f4f0f9;border-left:4px solid #5d4e86;padding:12px 15px;border-radius:7px;margin:14px 0;"><strong>Why it matters:</strong> Replacing a button with div role="button" means you must recreate keyboard behavior, focus handling and state semantics yourself.</div><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;button type="button"&gt;Open menu&lt;/button&gt;
&lt;a href="/pricing"&gt;View pricing&lt;/a&gt;</code></pre></div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">7.2 Accessible names</h2>
<p style="color:#4c4852;">A control needs a name that communicates its purpose. Labels, visible text, alt text and appropriate ARIA naming mechanisms can provide names depending on the element.</p><div style="background:#f4f0f9;border-left:4px solid #5d4e86;padding:12px 15px;border-radius:7px;margin:14px 0;"><strong>Why it matters:</strong> A visual icon alone may not provide a useful accessible name.</div><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;button type="button" aria-label="Close dialog"&gt;×&lt;/button&gt;</code></pre></div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">7.3 Images and alternative text</h2>
<p style="color:#4c4852;">Use alt according to purpose. Decorative images generally use empty alt. Functional images need alt describing the action or destination; informative images need the relevant information; complex charts may need surrounding explanation or a data table.</p><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;a href="/profile"&gt;&lt;img src="avatar.jpg" alt="Asha's profile"&gt;&lt;/a&gt;</code></pre></div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">7.4 Keyboard access and focus</h2>
<p style="color:#4c4852;">Native controls participate in keyboard interaction. Use tabindex="0" only when a genuinely custom element needs sequential focus. Avoid positive tabindex values. Never remove focus indicators without providing an equally visible alternative.</p><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;button type="button"&gt;Save&lt;/button&gt;
&lt;!-- Prefer native focus behavior over tabindex="5". --&gt;</code></pre></div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">7.5 ARIA roles, states and properties</h2>
<p style="color:#4c4852;">ARIA can supplement semantics when native HTML cannot express a required pattern. Common mechanisms include aria-label, aria-labelledby, aria-describedby, aria-expanded, aria-current, aria-controls, aria-live and role.</p><div style="background:#f4f0f9;border-left:4px solid #5d4e86;padding:12px 15px;border-radius:7px;margin:14px 0;"><strong>Why it matters:</strong> ARIA changes what assistive technology may perceive; it does not automatically implement keyboard behavior, focus management or visual state changes.</div><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;button aria-expanded="false" aria-controls="filters"&gt;Filters&lt;/button&gt;
&lt;div id="filters" hidden&gt;...&lt;/div&gt;</code></pre></div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">7.6 Forms and accessible errors</h2>
<p style="color:#4c4852;">Associate labels with controls, group related choices, provide instructions and make errors understandable. Error text should be programmatically associated where appropriate and should not rely on color alone.</p><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;label for="email"&gt;Email&lt;/label&gt;
&lt;input id="email" name="email" aria-describedby="email-help email-error" aria-invalid="true"&gt;
&lt;p id="email-help"&gt;Use your work email.&lt;/p&gt;
&lt;p id="email-error"&gt;Enter a valid email address.&lt;/p&gt;</code></pre></div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">7.7 Tables and accessibility</h2>
<p style="color:#4c4852;">Use table headers and relationships rather than relying on bold text or visual position. scope is often enough for simple tables; complex tables need explicit relationships.</p><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;th scope="col"&gt;Price&lt;/th&gt;
&lt;td&gt;₹799&lt;/td&gt;</code></pre></div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">7.8 Dialogs, popovers and focus management</h2>
<p style="color:#4c4852;">Native dialog and popover features can provide better platform integration than custom overlays. When an overlay opens, users must understand where focus goes and how it closes.</p><div style="background:#f4f0f9;border-left:4px solid #5d4e86;padding:12px 15px;border-radius:7px;margin:14px 0;"><strong>Why it matters:</strong> Accessibility is an interaction problem, not just an attribute problem.</div><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;dialog open&gt;
  &lt;h2&gt;Confirm deletion&lt;/h2&gt;
  &lt;form method="dialog"&gt;&lt;button&gt;Cancel&lt;/button&gt;&lt;/form&gt;
&lt;/dialog&gt;</code></pre></div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">7.9 Accessibility testing workflow</h2>
<p style="color:#4c4852;">Combine automated checks with manual testing. Inspect the accessibility tree, navigate with keyboard only, test zoom/reflow, verify headings and landmarks, inspect labels/names, test media alternatives and use a screen reader when possible.</p><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>Checklist:
1. Keyboard only
2. Focus visible
3. Headings/landmarks
4. Form names/errors
5. Images/alt
6. Tables
7. Zoom/reflow</code></pre></div></section><section style="background:#fbf8ef;border:1px solid #eadfc9;border-radius:12px;padding:22px 24px;margin-top:12px;">
<h2 style="color:#6b552f;margin-top:0;">Checkpoint</h2><p style="color:#4c4852;">The strongest accessibility implementation often looks like ordinary, well-chosen HTML.</p>
<h3 style="color:#6a5b91;">Before moving on</h3><ul style="color:#4c4852;"><li>Prefer native semantics.</li><li>Test keyboard navigation.</li><li>Verify accessible names.</li><li>Use ARIA only when necessary.</li><li>Test errors, dynamic updates and focus movement.</li></ul>
<h3 style="color:#6a5b91;">Mini project</h3><p style="color:#4c4852;">Take an existing form or modal from a project and perform an accessibility audit. Record every issue and fix it using native HTML where possible.</p>
</section></div>`,
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
    title: "8. Head, Metadata, SEO & Structured Information",
    about: `<div style="font-family:Inter,"Avenir Next","Segoe UI",sans-serif;color:#302d35;background:#fff;width:100%;max-width:none;margin:0;box-sizing:border-box;padding:30px 2vw 42px;line-height:1.82;font-size:16.5px;letter-spacing:0;">
<div style="background:#fcfbf9;border:1px solid #e7e0f0;border-radius:16px;padding:28px 30px;margin-bottom:26px;">
<h2 style="color:#5d4e86;margin:0 0 10px;font-size:31px;letter-spacing:-0.02em;">8. Head, Metadata, SEO, Social Metadata & Structured Information</h2>
<p style="margin:0 0 12px;color:#4c4852;font-size:17px;">The head controls important document metadata, resource relationships and hints. Learn what each item actually does instead of treating metadata as a collection of SEO magic spells.</p>
<div style="background:#f4f0f9;border-left:4px solid #5d4e86;padding:12px 15px;border-radius:7px;"><strong>Focus:</strong> Produce a sensible production head and explain every important line.</div>
</div><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">8.1 title, charset and viewport</h2>
<p style="color:#4c4852;">title identifies the document in browser UI and other contexts. charset declares encoding. viewport tells mobile browsers how to size the layout viewport.</p><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;head&gt;
  &lt;meta charset="utf-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;
  &lt;title&gt;HTML Forms — Bytes4Dev&lt;/title&gt;
&lt;/head&gt;</code></pre></div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">8.2 description and robots metadata</h2>
<p style="color:#4c4852;">meta name=description can provide a summary used by search systems, though search engines choose their own presentation. robots metadata can communicate crawler directives supported by the relevant crawler.</p><div style="background:#f4f0f9;border-left:4px solid #5d4e86;padding:12px 15px;border-radius:7px;margin:14px 0;"><strong>Why it matters:</strong> Metadata is a hint to consuming systems, not a guarantee that they will display or obey it in every context.</div><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;meta name="description" content="Learn accessible HTML forms with practical examples and validation."&gt;
&lt;meta name="robots" content="index,follow"&gt;</code></pre></div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">8.3 link relationships</h2>
<p style="color:#4c4852;">link connects the document to related resources. Common relationships include stylesheet, icon, canonical, alternate, preload, preconnect and manifest.</p><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;link rel="stylesheet" href="/styles.css"&gt;
&lt;link rel="icon" href="/favicon.svg" type="image/svg+xml"&gt;
&lt;link rel="canonical" href="https://example.com/html/forms"&gt;</code></pre></div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">8.4 Canonical and alternate URLs</h2>
<p style="color:#4c4852;">canonical identifies a preferred URL when multiple URLs represent substantially the same resource. alternate can represent language variants or other representations depending on the relationship and attributes.</p><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;link rel="canonical" href="https://example.com/docs/html"&gt;
&lt;link rel="alternate" hreflang="ta" href="https://example.com/ta/docs/html"&gt;</code></pre></div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">8.5 Open Graph and social previews</h2>
<p style="color:#4c4852;">Social platforms can use metadata such as og:title, og:description, og:image and og:url to build previews. These are social-consumer conventions, not core HTML semantics.</p><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;meta property="og:title" content="HTML Complete Course"&gt;
&lt;meta property="og:description" content="A practical HTML course."&gt;
&lt;meta property="og:type" content="website"&gt;
&lt;meta property="og:url" content="https://example.com/html"&gt;</code></pre></div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">8.6 JSON-LD structured data</h2>
<p style="color:#4c4852;">Structured data can describe content in machine-readable form. JSON-LD is commonly placed in a script element. The data should accurately represent content that is genuinely present on the page.</p><div style="background:#f4f0f9;border-left:4px solid #5d4e86;padding:12px 15px;border-radius:7px;margin:14px 0;"><strong>Why it matters:</strong> Structured data is descriptive metadata, not a replacement for clear visible content.</div><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;script type="application/ld+json"&gt;
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Learning HTML"
}
&lt;/script&gt;</code></pre></div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">8.7 Microdata</h2>
<p style="color:#4c4852;">Microdata uses itemscope, itemtype and itemprop to annotate elements. It is still part of HTML but JSON-LD is often easier to maintain for structured data.</p><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;div itemscope itemtype="https://schema.org/Person"&gt;
  &lt;span itemprop="name"&gt;Asha&lt;/span&gt;
&lt;/div&gt;</code></pre></div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">8.8 base, style, script and noscript</h2>
<p style="color:#4c4852;">base changes how relative URLs are resolved throughout the document and should be used deliberately. style contains CSS. script loads or embeds JavaScript. noscript provides content for contexts where scripting is unavailable or disabled.</p><div style="background:#f4f0f9;border-left:4px solid #5d4e86;padding:12px 15px;border-radius:7px;margin:14px 0;"><strong>Why it matters:</strong> A base element can unexpectedly change every relative URL, so it deserves special care.</div><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;base href="https://example.com/app/"&gt;
&lt;style&gt;body { margin: 0; }&lt;/style&gt;
&lt;script src="/app.js" defer&gt;&lt;/script&gt;
&lt;noscript&gt;Please enable JavaScript for enhanced features.&lt;/noscript&gt;</code></pre></div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">8.9 SEO fundamentals from HTML</h2>
<p style="color:#4c4852;">Good SEO-oriented HTML starts with crawlable links, meaningful text, descriptive titles, coherent headings, canonical URLs where needed, language metadata and accurate structured data. No tag guarantees ranking.</p><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;h1&gt;HTML Forms and Validation&lt;/h1&gt;
&lt;p&gt;Learn native form controls...&lt;/p&gt;
&lt;a href="/html/accessibility"&gt;Accessibility guide&lt;/a&gt;</code></pre></div></section><section style="background:#fbf8ef;border:1px solid #eadfc9;border-radius:12px;padding:22px 24px;margin-top:12px;">
<h2 style="color:#6b552f;margin-top:0;">Checkpoint</h2><p style="color:#4c4852;">A production head should be intentional, minimal and accurate.</p>
<h3 style="color:#6a5b91;">Before moving on</h3><ul style="color:#4c4852;"><li>Explain charset and viewport.</li><li>Know canonical and alternate.</li><li>Distinguish HTML semantics from social metadata.</li><li>Understand JSON-LD versus microdata.</li></ul>
<h3 style="color:#6a5b91;">Mini project</h3><p style="color:#4c4852;">Create the complete head for an article page including title, description, icon, canonical URL, social metadata and JSON-LD. Verify every value against the visible page.</p>
</section></div>`,
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
    about: `<div style="font-family:Inter,"Avenir Next","Segoe UI",sans-serif;color:#302d35;background:#fff;width:100%;max-width:none;margin:0;box-sizing:border-box;padding:30px 2vw 42px;line-height:1.82;font-size:16.5px;letter-spacing:0;">
<div style="background:#fcfbf9;border:1px solid #e7e0f0;border-radius:16px;padding:28px 30px;margin-bottom:26px;">
<h2 style="color:#5d4e86;margin:0 0 10px;font-size:31px;letter-spacing:-0.02em;">9. Modern Interactive HTML</h2>
<p style="margin:0 0 12px;color:#4c4852;font-size:17px;">Use platform-native interactive features before reaching for custom JavaScript widgets. Learn button, details, dialog, popover, inert and disclosure patterns.</p>
<div style="background:#f4f0f9;border-left:4px solid #5d4e86;padding:12px 15px;border-radius:7px;"><strong>Focus:</strong> Prefer native behavior when it already solves the interaction problem.</div>
</div><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">9.1 button</h2>
<p style="color:#4c4852;">button represents an action. Inside a form, explicitly choose type=button, submit or reset. A button can be disabled and can expose state through ARIA when needed.</p><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;button type="button"&gt;Open filters&lt;/button&gt;
&lt;button type="submit"&gt;Save&lt;/button&gt;</code></pre></div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">9.2 details and summary</h2>
<p style="color:#4c4852;">details creates a disclosure widget and summary is its control. The open state is represented by the open attribute.</p><div style="background:#f4f0f9;border-left:4px solid #5d4e86;padding:12px 15px;border-radius:7px;margin:14px 0;"><strong>Why it matters:</strong> Use this for simple disclosure rather than rebuilding a keyboard-accessible accordion from scratch.</div><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;details&gt;
  &lt;summary&gt;Shipping information&lt;/summary&gt;
  &lt;p&gt;Orders ship within two business days.&lt;/p&gt;
&lt;/details&gt;</code></pre></div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">9.3 dialog</h2>
<p style="color:#4c4852;">dialog represents a dialog box. It can be opened non-modally or modally using the corresponding APIs. Forms with method=dialog can close a dialog and expose a return value through the DOM APIs.</p><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;dialog id="confirm"&gt;
  &lt;h2&gt;Delete project?&lt;/h2&gt;
  &lt;form method="dialog"&gt;
    &lt;button value="cancel"&gt;Cancel&lt;/button&gt;
    &lt;button value="delete"&gt;Delete&lt;/button&gt;
  &lt;/form&gt;
&lt;/dialog&gt;</code></pre></div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">9.4 popover</h2>
<p style="color:#4c4852;">The popover feature provides a declarative mechanism for showing floating content. Understand popover attributes, invokers and light-dismiss behavior as supported by modern browsers.</p><div style="background:#f4f0f9;border-left:4px solid #5d4e86;padding:12px 15px;border-radius:7px;margin:14px 0;"><strong>Why it matters:</strong> Native popovers can reduce custom positioning, focus and dismissal code, but you should still test browser support for your target audience.</div><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;button popovertarget="help"&gt;Help&lt;/button&gt;
&lt;div id="help" popover&gt;Use the search box to find a lesson.&lt;/div&gt;</code></pre></div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">9.5 inert</h2>
<p style="color:#4c4852;">inert makes a subtree unavailable to user interaction and removes it from relevant accessibility interaction while active. It is useful when an overlay is active and background content should not be interacted with.</p><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;main inert&gt;Background content&lt;/main&gt;
&lt;dialog open&gt;Active dialog&lt;/dialog&gt;</code></pre></div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">9.6 Progressive enhancement</h2>
<p style="color:#4c4852;">Start with meaningful content and native navigation. Add CSS for presentation and JavaScript for behavior that genuinely needs it. A robust page should not become meaningless merely because an enhancement fails.</p><div style="background:#f4f0f9;border-left:4px solid #5d4e86;padding:12px 15px;border-radius:7px;margin:14px 0;"><strong>Why it matters:</strong> This approach improves resilience, accessibility, testability and often performance.</div><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;form action="/search" method="get"&gt;
  &lt;label for="q"&gt;Search&lt;/label&gt;
  &lt;input id="q" name="q"&gt;
  &lt;button&gt;Search&lt;/button&gt;
&lt;/form&gt;</code></pre></div></section><section style="background:#fbf8ef;border:1px solid #eadfc9;border-radius:12px;padding:22px 24px;margin-top:12px;">
<h2 style="color:#6b552f;margin-top:0;">Checkpoint</h2><p style="color:#4c4852;">Native interactive elements give you a strong baseline before custom components are introduced.</p>
<h3 style="color:#6a5b91;">Before moving on</h3><ul style="color:#4c4852;"><li>Know button types.</li><li>Use details for simple disclosure.</li><li>Understand dialog and popover at a conceptual level.</li><li>Know why inert exists.</li></ul>
<h3 style="color:#6a5b91;">Mini project</h3><p style="color:#4c4852;">Build an FAQ and confirmation flow first with native HTML. Enhance it with CSS and JavaScript only where the product actually needs richer behavior.</p>
</section></div>`,
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
    title: "10. Advanced HTML: DOM, Loading, Performance & Security",
    about: `<div style="font-family:Inter,"Avenir Next","Segoe UI",sans-serif;color:#302d35;background:#fff;width:100%;max-width:none;margin:0;box-sizing:border-box;padding:30px 2vw 42px;line-height:1.82;font-size:16.5px;letter-spacing:0;">
<div style="background:#fcfbf9;border:1px solid #e7e0f0;border-radius:16px;padding:28px 30px;margin-bottom:26px;">
<h2 style="color:#5d4e86;margin:0 0 10px;font-size:31px;letter-spacing:-0.02em;">10. Advanced HTML: DOM, Parsing, Loading, Performance & Security</h2>
<p style="margin:0 0 12px;color:#4c4852;font-size:17px;">Connect markup to browser internals and production concerns. This section is the bridge from comfortable HTML usage to senior-developer knowledge.</p>
<div style="background:#f4f0f9;border-left:4px solid #5d4e86;padding:12px 15px;border-radius:7px;"><strong>Focus:</strong> Explain what the browser does with HTML, not only what the source code looks like.</div>
</div><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">10.1 Source HTML versus the DOM</h2>
<p style="color:#4c4852;">The browser parses source text into a DOM tree. Error recovery and implied elements mean the DOM shown in DevTools may not exactly match the source file. Attributes and DOM properties are related but not identical concepts.</p><div style="background:#f4f0f9;border-left:4px solid #5d4e86;padding:12px 15px;border-radius:7px;margin:14px 0;"><strong>Why it matters:</strong> Understanding parsing explains why invalid markup can still render while producing surprising trees.</div><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;!-- Source --&gt;
&lt;table&gt;&lt;tr&gt;&lt;td&gt;One&lt;/table&gt;
&lt;!-- Browser constructs a complete table structure in the DOM. --&gt;</code></pre></div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">10.2 Parsing and implied structure</h2>
<p style="color:#4c4852;">HTML has parsing rules that can insert or close elements implicitly. For predictable behavior, write valid, well-nested markup instead of depending on error recovery.</p><div style="background:#f4f0f9;border-left:4px solid #5d4e86;padding:12px 15px;border-radius:7px;margin:14px 0;"><strong>Why it matters:</strong> Some end tags may be optional in HTML syntax, but explicit structure is often easier for humans to maintain.</div><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;ul&gt;
  &lt;li&gt;One
  &lt;li&gt;Two
&lt;/ul&gt;</code></pre></div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">10.3 Content models</h2>
<p style="color:#4c4852;">Elements have content models describing what kinds of descendants are permitted. Think in terms of categories such as flow, phrasing, interactive and sectioning content.</p><div style="background:#f4f0f9;border-left:4px solid #5d4e86;padding:12px 15px;border-radius:7px;margin:14px 0;"><strong>Why it matters:</strong> Content-model rules explain why some seemingly reasonable nesting combinations are invalid.</div><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;p&gt;Text and &lt;strong&gt;phrasing content&lt;/strong&gt; belong here.&lt;/p&gt;</code></pre></div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">10.4 Script loading</h2>
<p style="color:#4c4852;">Classic scripts can block parsing when encountered. defer downloads while parsing and executes after parsing before DOMContentLoaded. async executes as soon as available and does not preserve order. Module scripts are deferred by default and have their own dependency semantics.</p><div style="background:#f4f0f9;border-left:4px solid #5d4e86;padding:12px 15px;border-radius:7px;margin:14px 0;"><strong>Why it matters:</strong> Choosing the loading mode is about execution timing, dependency order and user-visible performance.</div><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;script src="app.js" defer&gt;&lt;/script&gt;
&lt;script src="analytics.js" async&gt;&lt;/script&gt;
&lt;script type="module" src="main.js"&gt;&lt;/script&gt;</code></pre></div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">10.5 Resource hints</h2>
<p style="color:#4c4852;">preconnect can establish connections early; dns-prefetch hints at DNS resolution; preload requests a resource that will be needed soon; prefetch expresses a lower-priority future navigation/resource hint. Use hints based on measured need.</p><div style="background:#f4f0f9;border-left:4px solid #5d4e86;padding:12px 15px;border-radius:7px;margin:14px 0;"><strong>Why it matters:</strong> Overusing preload can compete with genuinely critical resources and hurt performance.</div><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;link rel="preconnect" href="https://cdn.example.com"&gt;
&lt;link rel="preload" href="/fonts/app.woff2" as="font" type="font/woff2" crossorigin&gt;</code></pre></div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">10.6 Performance and layout stability</h2>
<p style="color:#4c4852;">HTML affects performance through resource discovery, image dimensions, loading priority, DOM size and critical content. Reserve media space, avoid unnecessary wrappers and lazy-load suitable off-screen resources.</p><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;img src="hero.jpg" width="1600" height="900" alt="Product hero"&gt;</code></pre></div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">10.7 Security boundaries in HTML</h2>
<p style="color:#4c4852;">HTML alone cannot secure an application. Important controls include HTTPS, appropriate response headers, CSP, safe URL handling, sandboxing untrusted frames, avoiding unsafe HTML injection and validating data server-side.</p><div style="background:#f4f0f9;border-left:4px solid #5d4e86;padding:12px 15px;border-radius:7px;margin:14px 0;"><strong>Why it matters:</strong> Never treat client-side HTML validation, hidden fields or HTML comments as security controls.</div><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;iframe src="https://untrusted.example" sandbox="allow-scripts" title="Embedded content"&gt;&lt;/iframe&gt;</code></pre></div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">10.8 Cross-origin and embedded content</h2>
<p style="color:#4c4852;">Different origins have security boundaries. iframe, resource loading, CORS-related behavior and permissions can affect what embedded or fetched content can do. HTML attributes such as crossorigin, referrerpolicy, sandbox and allow can participate in these controls.</p><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;iframe
  src="https://widget.example"
  title="Payment widget"
  sandbox="allow-scripts allow-forms"
  referrerpolicy="strict-origin-when-cross-origin"&gt;
&lt;/iframe&gt;</code></pre></div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">10.9 DOM size and maintainability</h2>
<p style="color:#4c4852;">Large, deeply nested DOM trees can increase parsing, styling and layout work. More importantly, unnecessary structure makes accessibility and maintenance harder. Prefer the smallest semantic structure that accurately models the content.</p><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;!-- Prefer --&gt;
&lt;article&gt;&lt;h2&gt;Title&lt;/h2&gt;&lt;p&gt;Text&lt;/p&gt;&lt;/article&gt;

&lt;!-- Avoid wrappers with no purpose --&gt;
&lt;div&gt;&lt;div&gt;&lt;div&gt;&lt;article&gt;...&lt;/article&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;</code></pre></div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">10.10 Browser developer tools</h2>
<p style="color:#4c4852;">Use Elements to inspect the live DOM, view accessibility information, inspect properties and attributes, and trace source locations. Use Network to inspect document/resource requests and timing. Use Lighthouse or equivalent audits as a starting point, not as the complete test.</p><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>DevTools workflow:
Elements → Accessibility → Network → Performance → Console</code></pre></div></section><section style="background:#fbf8ef;border:1px solid #eadfc9;border-radius:12px;padding:22px 24px;margin-top:12px;">
<h2 style="color:#6b552f;margin-top:0;">Checkpoint</h2><p style="color:#4c4852;">Senior HTML knowledge is largely about relationships: source to DOM, markup to accessibility tree, resources to loading, and elements to security boundaries.</p>
<h3 style="color:#6a5b91;">Before moving on</h3><ul style="color:#4c4852;"><li>Explain source versus DOM.</li><li>Explain async versus defer.</li><li>Know what preload is for.</li><li>Understand why HTML validation is not security.</li><li>Relate HTML decisions to performance and accessibility.</li></ul>
<h3 style="color:#6a5b91;">Mini project</h3><p style="color:#4c4852;">Take a slow-loading page and audit it from the HTML outward: reduce unnecessary DOM, fix image dimensions, review script loading, inspect resource priorities, and document security-sensitive embeds.</p>
</section></div>`,
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
    title: "11. SVG, Canvas, MathML & Graphics in HTML",
    about: `<div style="font-family:Inter,"Avenir Next","Segoe UI",sans-serif;color:#302d35;background:#fff;width:100%;max-width:none;margin:0;box-sizing:border-box;padding:30px 2vw 42px;line-height:1.82;font-size:16.5px;letter-spacing:0;">
<div style="background:#fcfbf9;border:1px solid #e7e0f0;border-radius:16px;padding:28px 30px;margin-bottom:26px;">
<h2 style="color:#5d4e86;margin:0 0 10px;font-size:31px;letter-spacing:-0.02em;">11. SVG, Canvas, MathML & Graphics in HTML</h2>
<p style="margin:0 0 12px;color:#4c4852;font-size:17px;">Understand the platform’s graphics options and choose the right one for semantics, scalability, accessibility and interaction.</p>
<div style="background:#f4f0f9;border-left:4px solid #5d4e86;padding:12px 15px;border-radius:7px;"><strong>Focus:</strong> Know when to use an external image, inline SVG, canvas or MathML.</div>
</div><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">11.1 SVG as an image</h2>
<p style="color:#4c4852;">An SVG can be referenced as an external image when it behaves like a graphic resource. alt belongs on the img element when the image is meaningful.</p><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;img src="logo.svg" alt="Bytes4Dev"&gt;</code></pre></div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">11.2 Inline SVG</h2>
<p style="color:#4c4852;">Inline svg becomes part of the document tree and can be styled or manipulated. Meaningful graphics may need an accessible name and supporting text.</p><div style="background:#f4f0f9;border-left:4px solid #5d4e86;padding:12px 15px;border-radius:7px;margin:14px 0;"><strong>Why it matters:</strong> Inline SVG is useful when the graphic itself needs DOM interaction or fine-grained styling.</div><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;svg viewBox="0 0 100 100" role="img" aria-labelledby="title"&gt;
  &lt;title id="title"&gt;Progress circle&lt;/title&gt;
  &lt;circle cx="50" cy="50" r="40"&gt;&lt;/circle&gt;
&lt;/svg&gt;</code></pre></div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">11.3 Canvas</h2>
<p style="color:#4c4852;">canvas provides a bitmap drawing surface, commonly manipulated with JavaScript. Its pixels do not automatically expose semantic structure like HTML elements. Provide fallback content and consider accessible alternatives for meaningful information.</p><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;canvas width="400" height="200"&gt;
  Sales chart: Q1 ₹4L, Q2 ₹5L.
&lt;/canvas&gt;</code></pre></div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">11.4 SVG versus canvas</h2>
<p style="color:#4c4852;">SVG is retained-mode/vector and its shapes are represented as elements. Canvas is an immediate-mode drawing surface where your script paints pixels. SVG is often better for interactive diagrams; canvas can be useful for large dynamic drawings, games and pixel operations.</p><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;!-- SVG: semantic-ish DOM objects --&gt;
&lt;svg&gt;&lt;rect x="10" y="10" width="80" height="40"&gt;&lt;/rect&gt;&lt;/svg&gt;

&lt;!-- Canvas: drawing surface --&gt;
&lt;canvas id="chart"&gt;&lt;/canvas&gt;</code></pre></div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">11.5 MathML</h2>
<p style="color:#4c4852;">MathML provides markup for mathematical notation. Modern HTML documents can embed MathML where supported. Use it when mathematical structure itself is content, rather than converting formulas into screenshots.</p><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;math&gt;
  &lt;mrow&gt;&lt;mi&gt;x&lt;/mi&gt;&lt;mo&gt;=&lt;/mo&gt;&lt;mfrac&gt;&lt;mn&gt;1&lt;/mn&gt;&lt;mn&gt;2&lt;/mn&gt;&lt;/mfrac&gt;&lt;/mrow&gt;
&lt;/math&gt;</code></pre></div></section><section style="background:#fbf8ef;border:1px solid #eadfc9;border-radius:12px;padding:22px 24px;margin-top:12px;">
<h2 style="color:#6b552f;margin-top:0;">Checkpoint</h2><p style="color:#4c4852;">Graphics are not automatically accessible just because they are visible. Choose a representation that preserves the information users need.</p>
<h3 style="color:#6a5b91;">Before moving on</h3><ul style="color:#4c4852;"><li>Explain external versus inline SVG.</li><li>Know canvas limitations for semantics.</li><li>Compare SVG and canvas.</li><li>Recognize MathML as structured mathematical content.</li></ul>
<h3 style="color:#6a5b91;">Mini project</h3><p style="color:#4c4852;">Create a small analytics graphic twice: once with accessible SVG and once with canvas plus a text/data fallback. Compare maintainability and accessibility.</p>
</section></div>`,
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
    title: "12. Web Components, Templates & Reusable HTML",
    about: `<div style="font-family:Inter,"Avenir Next","Segoe UI",sans-serif;color:#302d35;background:#fff;width:100%;max-width:none;margin:0;box-sizing:border-box;padding:30px 2vw 42px;line-height:1.82;font-size:16.5px;letter-spacing:0;">
<div style="background:#fcfbf9;border:1px solid #e7e0f0;border-radius:16px;padding:28px 30px;margin-bottom:26px;">
<h2 style="color:#5d4e86;margin:0 0 10px;font-size:31px;letter-spacing:-0.02em;">12. Web Components, Templates & Reusable HTML</h2>
<p style="margin:0 0 12px;color:#4c4852;font-size:17px;">Learn the HTML pieces that support component architectures: template, slot and custom elements. Keep native semantics inside components whenever possible.</p>
<div style="background:#f4f0f9;border-left:4px solid #5d4e86;padding:12px 15px;border-radius:7px;"><strong>Focus:</strong> Understand light DOM, shadow DOM, templates and slots conceptually.</div>
</div><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">12.1 template</h2>
<p style="color:#4c4852;">template stores inert markup that is not rendered as ordinary document content until JavaScript clones and inserts its content.</p><div style="background:#f4f0f9;border-left:4px solid #5d4e86;padding:12px 15px;border-radius:7px;margin:14px 0;"><strong>Why it matters:</strong> Templates separate reusable markup from the live document tree.</div><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;template id="user-card-template"&gt;
  &lt;article class="user-card"&gt;
    &lt;h2&gt;&lt;slot name="name"&gt;Unknown user&lt;/slot&gt;&lt;/h2&gt;
  &lt;/article&gt;
&lt;/template&gt;</code></pre></div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">12.2 slot</h2>
<p style="color:#4c4852;">slot defines insertion points for content supplied to a shadow tree. Named slots let component consumers place content into specific regions.</p><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;my-card&gt;
  &lt;span slot="name"&gt;Asha&lt;/span&gt;
&lt;/my-card&gt;</code></pre></div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">12.3 Custom elements</h2>
<p style="color:#4c4852;">Custom elements let JavaScript define new HTML-like elements. Their names contain a hyphen. HTML provides the markup surface while JavaScript supplies behavior and lifecycle.</p><div style="background:#f4f0f9;border-left:4px solid #5d4e86;padding:12px 15px;border-radius:7px;margin:14px 0;"><strong>Why it matters:</strong> A custom element is not automatically accessible. Its internal implementation still needs correct native controls, names, focus behavior and states.</div><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;user-card&gt;&lt;/user-card&gt;
&lt;script&gt;
  customElements.define('user-card', class extends HTMLElement {});
&lt;/script&gt;</code></pre></div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">12.4 Shadow DOM and semantics</h2>
<p style="color:#4c4852;">Shadow DOM encapsulates a component’s internal DOM and styling. Learn the difference between light DOM content supplied by the page and shadow DOM content rendered inside the component.</p><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>class UserCard extends HTMLElement {
  connectedCallback() {
    const root = this.attachShadow({ mode: 'open' });
    root.innerHTML = '&lt;article&gt;&lt;slot&gt;&lt;/slot&gt;&lt;/article&gt;';
  }
}</code></pre></div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">12.5 Progressive enhancement with components</h2>
<p style="color:#4c4852;">A robust component can start with meaningful HTML and enhance it after JavaScript loads. Avoid making a custom element the only place where essential content exists if failure would make the page unusable.</p><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;details class="faq"&gt;
  &lt;summary&gt;Shipping&lt;/summary&gt;
  &lt;p&gt;Ships in two days.&lt;/p&gt;
&lt;/details&gt;
&lt;!-- JavaScript may enhance this later. --&gt;</code></pre></div></section><section style="background:#fbf8ef;border:1px solid #eadfc9;border-radius:12px;padding:22px 24px;margin-top:12px;">
<h2 style="color:#6b552f;margin-top:0;">Checkpoint</h2><p style="color:#4c4852;">Component systems should improve reuse without throwing away the strengths of HTML.</p>
<h3 style="color:#6a5b91;">Before moving on</h3><ul style="color:#4c4852;"><li>Explain template and slot.</li><li>Know why custom elements need a hyphen.</li><li>Understand light versus shadow DOM.</li><li>Keep native semantics inside components.</li></ul>
<h3 style="color:#6a5b91;">Mini project</h3><p style="color:#4c4852;">Create a user-card component that accepts a name and image but uses native article, heading, img and button semantics internally.</p>
</section></div>`,
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
    title: "13. Internationalization, Language, Direction & Specialized Content",
    about: `<div style="font-family:Inter,"Avenir Next","Segoe UI",sans-serif;color:#302d35;background:#fff;width:100%;max-width:none;margin:0;box-sizing:border-box;padding:30px 2vw 42px;line-height:1.82;font-size:16.5px;letter-spacing:0;">
<div style="background:#fcfbf9;border:1px solid #e7e0f0;border-radius:16px;padding:28px 30px;margin-bottom:26px;">
<h2 style="color:#5d4e86;margin:0 0 10px;font-size:31px;letter-spacing:-0.02em;">13. Internationalization, Language, Direction & Specialized Content</h2>
<p style="margin:0 0 12px;color:#4c4852;font-size:17px;">HTML carries important information about language, direction, pronunciation and machine-readable values. These details matter for global applications.</p>
<div style="background:#f4f0f9;border-left:4px solid #5d4e86;padding:12px 15px;border-radius:7px;"><strong>Focus:</strong> Write markup that behaves correctly for multilingual and bidirectional content.</div>
</div><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">13.1 lang at the document level</h2>
<p style="color:#4c4852;">Set lang on the html element using a BCP 47 language tag. Override it on descendants when a passage changes language.</p><div style="background:#f4f0f9;border-left:4px solid #5d4e86;padding:12px 15px;border-radius:7px;margin:14px 0;"><strong>Why it matters:</strong> Language metadata helps screen readers choose pronunciation and helps software process text correctly.</div><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;html lang="en"&gt;
  &lt;body&gt;
    &lt;p&gt;Hello &lt;span lang="ta"&gt;வணக்கம்&lt;/span&gt;&lt;/p&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre></div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">13.2 dir and bidirectional text</h2>
<p style="color:#4c4852;">Use dir="ltr", dir="rtl" or dir="auto". User-generated mixed-direction content can be isolated with bdi. bdo can force a direction for specific content.</p><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;p dir="rtl"&gt;مرحبا&lt;/p&gt;
&lt;p&gt;User: &lt;bdi&gt;محمد&lt;/bdi&gt;&lt;/p&gt;</code></pre></div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">13.3 Ruby annotations</h2>
<p style="color:#4c4852;">ruby, rt and related elements can represent pronunciation or annotation text used in some writing systems.</p><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;ruby&gt;漢&lt;rt&gt;かん&lt;/rt&gt;&lt;/ruby&gt;</code></pre></div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">13.4 translate and localized values</h2>
<p style="color:#4c4852;">translate="no" can tell translation tools that a string should not be translated. data and time can expose machine-readable values while preserving localized human-readable text.</p><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;p translate="no"&gt;Bytes4Dev&lt;/p&gt;
&lt;time datetime="2026-10-09T08:30:00+05:30"&gt;9 October, 8:30 AM&lt;/time&gt;</code></pre></div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">13.5 Dates, numbers and localization strategy</h2>
<p style="color:#4c4852;">HTML can expose machine-readable values, but formatting and localization decisions often belong to application code. Do not assume one date format or decimal convention works globally.</p><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;data value="1234.50"&gt;₹1,234.50&lt;/data&gt;</code></pre></div></section><section style="background:#fbf8ef;border:1px solid #eadfc9;border-radius:12px;padding:22px 24px;margin-top:12px;">
<h2 style="color:#6b552f;margin-top:0;">Checkpoint</h2><p style="color:#4c4852;">Internationalization is easier when the markup carries correct language and direction metadata from the beginning.</p>
<h3 style="color:#6a5b91;">Before moving on</h3><ul style="color:#4c4852;"><li>Set document language.</li><li>Override language for mixed-language text.</li><li>Know bdi versus bdo.</li><li>Use machine-readable date/value attributes appropriately.</li></ul>
<h3 style="color:#6a5b91;">Mini project</h3><p style="color:#4c4852;">Create a multilingual profile page containing English, Tamil and Arabic text, a localized date, and a user-generated name that must remain directionally isolated.</p>
</section></div>`,
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
    title: "14. Deprecated HTML, Compatibility & Standards-Aware Development",
    about: `<div style="font-family:Inter,"Avenir Next","Segoe UI",sans-serif;color:#302d35;background:#fff;width:100%;max-width:none;margin:0;box-sizing:border-box;padding:30px 2vw 42px;line-height:1.82;font-size:16.5px;letter-spacing:0;">
<div style="background:#fcfbf9;border:1px solid #e7e0f0;border-radius:16px;padding:28px 30px;margin-bottom:26px;">
<h2 style="color:#5d4e86;margin:0 0 10px;font-size:31px;letter-spacing:-0.02em;">14. Deprecated HTML, Compatibility & Standards-Aware Development</h2>
<p style="margin:0 0 12px;color:#4c4852;font-size:17px;">Learn what not to use, how browser compatibility affects decisions, and how to build HTML that remains understandable over time.</p>
<div style="background:#f4f0f9;border-left:4px solid #5d4e86;padding:12px 15px;border-radius:7px;"><strong>Focus:</strong> Distinguish modern semantic HTML from legacy presentation markup and vendor-specific habits.</div>
</div><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">14.1 Presentation belongs in CSS</h2>
<p style="color:#4c4852;">Avoid legacy presentation attributes and elements such as font, center, bgcolor, align and layout tables. Use semantic HTML for meaning and CSS for presentation.</p><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;!-- Better --&gt;
&lt;p class="notice"&gt;Important update&lt;/p&gt;

&lt;!-- Avoid legacy presentation --&gt;
&lt;center&gt;&lt;font color="red"&gt;Important update&lt;/font&gt;&lt;/center&gt;</code></pre></div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">14.2 Deprecated and obsolete patterns</h2>
<p style="color:#4c4852;">Do not introduce obsolete tags such as font, center, big, strike, tt, frameset and similar legacy constructs into new projects. Know that browser support for old markup does not make it a good engineering choice.</p><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;!-- Modern --&gt;
&lt;strong&gt;Important&lt;/strong&gt;
&lt;em&gt;Emphasis&lt;/em&gt;</code></pre></div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">14.3 Browser compatibility</h2>
<p style="color:#4c4852;">HTML features have varying support across browsers and versions. Use progressive enhancement, feature detection and compatibility references when a feature matters to your target audience.</p><div style="background:#f4f0f9;border-left:4px solid #5d4e86;padding:12px 15px;border-radius:7px;margin:14px 0;"><strong>Why it matters:</strong> Do not avoid a useful platform feature merely because an old browser once lacked it; base the decision on your actual support matrix.</div><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;details&gt;
  &lt;summary&gt;Native disclosure&lt;/summary&gt;
  &lt;p&gt;Enhanced where supported.&lt;/p&gt;
&lt;/details&gt;</code></pre></div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">14.4 Validation and conformance</h2>
<p style="color:#4c4852;">Use HTML validators and linters to catch syntax and conformance problems, but remember that validation does not guarantee accessibility, security, usability or correct business behavior.</p><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;!doctype html&gt;
&lt;html lang="en"&gt;
  ...
&lt;/html&gt;</code></pre></div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">14.5 Maintainability conventions</h2>
<p style="color:#4c4852;">Use consistent casing, quoted attributes, meaningful class/id names, sensible source order and minimal wrappers. Keep comments useful and remove stale notes.</p><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;main class="course-content"&gt;
  &lt;section class="lesson"&gt;
    &lt;h2&gt;Forms&lt;/h2&gt;
  &lt;/section&gt;
&lt;/main&gt;</code></pre></div></section><section style="background:#fbf8ef;border:1px solid #eadfc9;border-radius:12px;padding:22px 24px;margin-top:12px;">
<h2 style="color:#6b552f;margin-top:0;">Checkpoint</h2><p style="color:#4c4852;">Standards-aware HTML is not about using every new feature; it is about choosing stable semantics and verifying behavior for the browsers you support.</p>
<h3 style="color:#6a5b91;">Before moving on</h3><ul style="color:#4c4852;"><li>Avoid obsolete presentation markup.</li><li>Use CSS for presentation.</li><li>Validate but do not equate validation with quality.</li><li>Know your browser support target.</li></ul>
<h3 style="color:#6a5b91;">Mini project</h3><p style="color:#4c4852;">Take an old HTML page and modernize it without changing its visible design: replace deprecated markup, add semantic structure, improve labels and remove unnecessary wrappers.</p>
</section></div>`,
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
    title: "15. Practical Projects, Debugging, Review & Production Checklist",
    about: `<div style="font-family:Inter,"Avenir Next","Segoe UI",sans-serif;color:#302d35;background:#fff;width:100%;max-width:none;margin:0;box-sizing:border-box;padding:30px 2vw 42px;line-height:1.82;font-size:16.5px;letter-spacing:0;">
<div style="background:#fcfbf9;border:1px solid #e7e0f0;border-radius:16px;padding:28px 30px;margin-bottom:26px;">
<h2 style="color:#5d4e86;margin:0 0 10px;font-size:31px;letter-spacing:-0.02em;">15. Practical Projects, Debugging, Review & Production Checklist</h2>
<p style="margin:0 0 12px;color:#4c4852;font-size:17px;">Turn the course into repeatable engineering skill. Each project focuses on a different cluster of HTML decisions.</p>
<div style="background:#f4f0f9;border-left:4px solid #5d4e86;padding:12px 15px;border-radius:7px;"><strong>Focus:</strong> Build first, inspect the DOM, test with keyboard navigation, validate, then explain why each important element was chosen.</div>
</div><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">15.1 Project 1 — Personal profile</h2>
<p style="color:#4c4852;">Build a semantic profile page with header, nav, main, article, aside, footer, headings, links, image alternative text and contact information.</p><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;header&gt;...&lt;/header&gt;
&lt;main&gt;
  &lt;article&gt;...&lt;/article&gt;
  &lt;aside&gt;...&lt;/aside&gt;
&lt;/main&gt;
&lt;footer&gt;...&lt;/footer&gt;</code></pre></div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">15.2 Project 2 — Registration form</h2>
<p style="color:#4c4852;">Create an accessible registration form with labels, password, email, date, radio buttons, checkboxes, select, file upload, validation constraints and useful instructions.</p><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;form action="/register" method="post"&gt;
  &lt;fieldset&gt;...&lt;/fieldset&gt;
  &lt;button type="submit"&gt;Create account&lt;/button&gt;
&lt;/form&gt;</code></pre></div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">15.3 Project 3 — Product page</h2>
<p style="color:#4c4852;">Use semantic sections, responsive images, price data, product specifications, a table, purchase form, delivery information and footer.</p><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;main&gt;
  &lt;article&gt;
    &lt;h1&gt;Product&lt;/h1&gt;
    &lt;figure&gt;...&lt;/figure&gt;
    &lt;data value="799"&gt;₹799&lt;/data&gt;
  &lt;/article&gt;
&lt;/main&gt;</code></pre></div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">15.4 Project 4 — Documentation site</h2>
<p style="color:#4c4852;">Build a documentation page with skip navigation, nav, main, articles, headings, code blocks, lists, tables, related links and a search form.</p><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;a href="#main"&gt;Skip to content&lt;/a&gt;
&lt;nav aria-label="Documentation"&gt;...&lt;/nav&gt;
&lt;main id="main"&gt;...&lt;/main&gt;</code></pre></div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">15.5 Project 5 — Media gallery</h2>
<p style="color:#4c4852;">Combine figure, picture, responsive images, video, captions and a transcript. Test the page with images disabled and without audio.</p><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;picture&gt;...&lt;/picture&gt;
&lt;figure&gt;...&lt;/figure&gt;
&lt;video controls&gt;...&lt;/video&gt;</code></pre></div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">15.6 Project 6 — Data dashboard markup</h2>
<p style="color:#4c4852;">Create a dashboard’s HTML layer with headings, status text, progress/meter, filters, accessible tables and semantic grouping. Do not use layout tables.</p><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>&lt;main&gt;
  &lt;h1&gt;Sales dashboard&lt;/h1&gt;
  &lt;section&gt;...&lt;/section&gt;
  &lt;table&gt;...&lt;/table&gt;
&lt;/main&gt;</code></pre></div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">15.7 Debugging workflow</h2>
<p style="color:#4c4852;">When something is wrong, inspect the live DOM, check the accessibility tree, inspect network requests, verify resource URLs, validate the document and test keyboard behavior.</p><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>1. Reproduce
2. Inspect DOM
3. Check console/network
4. Check accessibility
5. Fix semantic root cause
6. Retest</code></pre></div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">15.8 Production HTML checklist</h2>
<p style="color:#4c4852;">Before shipping, review document metadata, semantics, headings, links, forms, media, accessibility, resource loading, embeds, security-sensitive markup and compatibility.</p><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>Production checklist:
✓ doctype/lang/title
✓ headings/landmarks
✓ labels/errors
✓ alt/captions
✓ responsive images
✓ safe embeds
✓ loading behavior</code></pre></div></section><section style="background:#fff;border:0;border-bottom:1px solid #e7e3df;padding:8px 0 34px;margin:0 0 34px;">
<h2 style="color:#514276;font-size:23px;line-height:1.35;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #e7e0f0;">15.9 Code review questions</h2>
<p style="color:#4c4852;">Review HTML by asking: Does the element express meaning? Is there a native control? Is the source order logical? Does every form control have a name and label? Are images alternatives correct? Are tables truly tabular? Could a user operate it with a keyboard?</p><div style="margin:16px 0;"><div style="font-weight:700;color:#6a5b91;margin-bottom:7px;">Example</div><pre style="background:#f7f5f1;color:#28242c;border:1px solid #e6e1dc;padding:18px 20px;border-radius:10px;overflow:auto;font-size:14px;line-height:1.7;white-space:pre-wrap;"><code>Review question: “If CSS and JavaScript disappeared, would the core information and navigation still make sense?”</code></pre></div></section><section style="background:#fbf8ef;border:1px solid #eadfc9;border-radius:12px;padding:22px 24px;margin-top:12px;">
<h2 style="color:#6b552f;margin-top:0;">Checkpoint</h2><p style="color:#4c4852;">The goal is not perfect-looking markup. The goal is predictable, semantic, accessible and maintainable documents.</p>
<h3 style="color:#6a5b91;">Before moving on</h3><ul style="color:#4c4852;"><li>Inspect both source and live DOM.</li><li>Test keyboard-only operation.</li><li>Check mobile and zoom behavior.</li><li>Validate forms and table relationships.</li><li>Review performance and security-sensitive embeds.</li></ul>
<h3 style="color:#6a5b91;">Mini project</h3><p style="color:#4c4852;">Final capstone: build an accessible product/documentation portal using at least 10 course topics. Write a short architecture note explaining each semantic choice.</p>
</section></div>`,
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
    about: `<div style="font-family:Inter,"Avenir Next","Segoe UI",sans-serif;color:#302d35;background:#fff;width:100%;max-width:none;margin:0;box-sizing:border-box;padding:30px 2vw 42px;line-height:1.82;font-size:16.5px;letter-spacing:0;">
<div style="background:#fcfbf9;border:1px solid #e7e0f0;border-radius:16px;padding:28px 30px;margin-bottom:26px;">
<h2 style="color:#5d4e86;margin:0 0 10px;font-size:31px;letter-spacing:-0.02em;">16. HTML Interview Preparation — 100 Questions & Answers</h2>
<p style="margin:0 0 12px;color:#4c4852;font-size:17px;">Use this as a revision guide. Questions progress from fundamentals to browser behavior, accessibility, forms, performance, parsing, security and standards-level concepts.</p>
<div style="background:#f4f0f9;border-left:4px solid #5d4e86;padding:12px 15px;border-radius:7px;"><strong>Focus:</strong> Do not memorize one-line definitions. Explain the problem, the semantic choice, the browser behavior and the trade-off.</div>
</div><h2 style="color:#5d4e86;font-size:27px;border-bottom:2px solid #e7e3df;padding-bottom:9px;margin:34px 0 18px;">Beginner</h2><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">What is HTML?</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> HTML is the markup language used to describe the structure and meaning of web content. It defines elements such as headings, paragraphs, links, forms and tables.</p></article><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">What is the difference between an element and a tag?</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> A tag is markup syntax such as an opening or closing tag. An element is the complete construct including its content and attributes.</p></article><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">What does <!doctype html> do?</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> It tells the browser to use standards mode for the document.</p></article><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">What is the purpose of the html element?</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> It is the root element of the document and commonly carries document-wide metadata such as lang.</p></article><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">What belongs in head versus body?</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> head contains metadata, resource relationships and document-level information; body contains the document content users interact with or read.</p></article><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">What is a void element?</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> An element that cannot contain child content and therefore has no closing tag, such as img or input.</p></article><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">Why is lang important?</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> It identifies the language so assistive technology and other software can interpret or pronounce text appropriately.</p></article><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">What is the difference between id and class?</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> id identifies an element uniquely within a document; class groups elements and can be reused.</p></article><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">What are boolean attributes?</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> Attributes whose presence represents true, such as disabled, checked and required. disabled="false" is still disabled because the attribute is present.</p></article><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">Why should attributes normally be quoted?</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> Quoted values are unambiguous, easier to read and robust when values contain spaces or special characters.</p></article><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">What is semantic HTML?</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> HTML that expresses the meaning and structure of content using appropriate elements rather than generic containers chosen only for appearance.</p></article><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">When should you use div?</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> When no more specific semantic element represents the grouping or when a generic container is genuinely needed for styling or scripting.</p></article><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">What is the difference between strong and b?</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> strong conveys strong importance; b is a generic offset of attention without adding the same importance semantics.</p></article><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">What is the difference between em and i?</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> em conveys stress emphasis; i is used for text set off from the normal prose for reasons such as a technical term or alternate voice, depending on context.</p></article><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">When should br be used?</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> When a line break is part of the content, such as an address or poem. It should not be used for layout spacing.</p></article><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">What is an anchor element?</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> a creates a hyperlink when it has an href or can represent a link destination/context as defined by HTML.</p></article><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">What is the difference between ul and ol?</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> ul is an unordered collection; ol represents a sequence where order matters.</p></article><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">What is dl used for?</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> It represents name-value or term-description groups, not only traditional dictionaries.</p></article><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">What is alt text?</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> It is the text alternative associated with an image when the image conveys information or function.</p></article><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">What is the purpose of label?</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> It provides an accessible name for a form control and can enlarge the activation target when associated correctly.</p></article><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">What is the name attribute used for in forms?</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> It identifies the field in form submission data. A control generally needs a name to contribute a successful value.</p></article><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">What does required do?</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> It makes a form control fail native constraint validation when no acceptable value is provided.</p></article><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">Why is placeholder not a label?</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> Placeholder is a temporary hint and can disappear or have insufficient contrast; it does not reliably provide a persistent accessible name.</p></article><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">What is the difference between button and a link?</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> A button performs an action; a link navigates to a resource or location.</p></article><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">What is a table used for?</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> Representing relationships between tabular data, not page layout.</p></article><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">What is caption in a table?</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> It gives the table a visible title or description of its purpose.</p></article><h2 style="color:#5d4e86;font-size:27px;border-bottom:2px solid #e7e3df;padding-bottom:9px;margin:34px 0 18px;">Intermediate</h2><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">What is the difference between src and href?</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> src identifies a resource embedded or loaded by an element such as img or script; href identifies a destination or related resource such as an anchor or stylesheet.</p></article><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">What is a relative URL?</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> A URL resolved against a base URL, usually the current document URL unless a base element changes resolution.</p></article><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">What is a fragment identifier?</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> The portion after # that can identify a location within a resource, commonly matching an element id on a page.</p></article><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">Why use rel="noopener" with target="_blank"?</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> It prevents the newly opened page from receiving an opener reference in contexts where that relationship matters, reducing a class of window-opener attacks.</p></article><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">What is responsive imagery?</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> Serving or selecting image resources appropriate to the device or display size, often with srcset, sizes and picture.</p></article><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">What is the difference between srcset and picture?</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> srcset/sizes describe candidate resources for a given image display; picture can select different sources for art direction or format/media conditions.</p></article><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">Why specify image width and height?</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> They communicate intrinsic dimensions/aspect ratio and help reserve layout space before the resource loads.</p></article><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">What is loading="lazy"?</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> A hint that suitable resources, commonly off-screen images or iframes, may be deferred until closer to use.</p></article><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">What is figure used for?</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> Self-contained content that can be referenced independently and may have an associated figcaption.</p></article><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">What is semantic page structure?</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> Using elements such as header, nav, main, article, section, aside and footer to communicate page regions and relationships.</p></article><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">What is the difference between article and section?</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> article is self-contained content that could stand independently; section groups related content thematically and generally has a heading.</p></article><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">What is the purpose of main?</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> It identifies the dominant content of the document.</p></article><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">What is scope in a table?</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> It indicates whether a header cell describes a row or column in straightforward table relationships.</p></article><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">When do you need headers and id on table cells?</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> When table relationships are complex enough that scope alone cannot express which headers apply to a data cell.</p></article><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">What is a fieldset?</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> It groups related form controls, with legend providing the group’s name.</p></article><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">What is the difference between radio and checkbox?</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> Radio buttons choose one option from a same-named group; checkboxes represent independent selections.</p></article><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">What is datalist?</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> A source of suggestions for an input while still allowing a value outside the suggestions.</p></article><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">What is the difference between progress and meter?</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> progress represents task completion; meter represents a scalar measurement within a known range.</p></article><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">What is native constraint validation?</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> The browser’s built-in validation system driven by attributes such as required, type, min, max and pattern.</p></article><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">Why is client-side validation not security?</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> Users can bypass or modify the browser and send requests directly, so the server must validate and authorize independently.</p></article><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">When is multipart/form-data needed?</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> When a form submits files.</p></article><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">What are successful form controls?</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> Controls whose names and states cause them to contribute name/value pairs during form submission; for example, disabled controls are omitted and unchecked checkboxes normally contribute nothing.</p></article><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">What is progressive enhancement?</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> Building a useful baseline with HTML and then enhancing presentation and behavior with CSS and JavaScript.</p></article><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">What is ARIA?</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> A set of accessibility semantics used to communicate roles, states and properties when native HTML does not provide the required semantics.</p></article><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">Why prefer native HTML over ARIA?</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> Native controls already implement semantics and interaction behavior, reducing the amount of custom accessibility behavior developers must reproduce.</p></article><h2 style="color:#5d4e86;font-size:27px;border-bottom:2px solid #e7e3df;padding-bottom:9px;margin:34px 0 18px;">Advanced</h2><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">What happens when a browser parses HTML?</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> It tokenizes the source and applies HTML parsing rules to construct a DOM tree, including error recovery and implied structure.</p></article><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">Why can DevTools DOM differ from source HTML?</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> The parser can insert implied elements, normalize markup and recover from malformed source before exposing the live DOM.</p></article><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">What are content models?</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> Rules describing what kinds of content or descendants an element may contain. They help determine valid nesting and semantic relationships.</p></article><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">What is the difference between async and defer?</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> Both allow downloading without blocking the parser; async executes as soon as available without preserving script order, while defer preserves order and executes after parsing.</p></article><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">Are module scripts deferred?</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> Module scripts are deferred by default in modern browsers, while also following module dependency semantics.</p></article><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">What does preload do?</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> It tells the browser that a resource is expected to be needed soon and can be fetched early when correctly configured.</p></article><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">Why can excessive preload hurt performance?</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> It can compete for bandwidth and connection priority with more important resources.</p></article><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">What is fetchpriority?</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> A hint expressing relative fetch importance for certain resources; it should complement, not replace, good resource loading strategy.</p></article><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">What is an iframe security concern?</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> Embedded content may have capabilities or origins you do not control. sandbox, permissions and referrer policies can reduce exposure depending on the use case.</p></article><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">What is sandbox on iframe?</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> A set of restrictions applied to an embedded browsing context, with selected capabilities re-enabled using tokens.</p></article><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">What is CSP?</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> Content Security Policy is primarily a response-header/browser security mechanism that can restrict sources and dangerous execution patterns; HTML alone cannot substitute for it.</p></article><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">What is the difference between inline SVG and img SVG?</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> Inline SVG participates in the document DOM and can be styled/manipulated directly; an SVG referenced by img is treated as an external image resource.</p></article><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">What is canvas?</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> A bitmap drawing surface typically controlled through JavaScript; its visual pixels do not automatically expose the same semantics as HTML elements.</p></article><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">What is SVG versus canvas?</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> SVG represents graphics as retained DOM-like vector objects; canvas is an immediate drawing surface. SVG is often convenient for interactive diagrams, canvas for high-frequency drawing and pixel operations.</p></article><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">What is template?</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> An inert HTML fragment that can be cloned and inserted by script without being rendered as ordinary document content immediately.</p></article><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">What is slot?</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> An insertion point in a shadow tree where light-DOM content can be projected into a component.</p></article><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">What is shadow DOM?</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> An encapsulated DOM tree associated with a host element, often used to isolate component internals and styling.</p></article><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">What makes a custom element accessible?</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> Its implementation must still provide native semantics where possible, correct names, keyboard interaction, focus behavior and accurate state communication.</p></article><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">What is inert?</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> It makes a subtree non-interactive and removes it from relevant user interaction while active, useful for background content behind an overlay.</p></article><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">What is a machine-readable date in HTML?</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> A time element can expose a datetime value while displaying localized human-readable text.</p></article><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">What is canonical metadata?</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> A link relationship that identifies a preferred URL when multiple URLs represent substantially the same resource.</p></article><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">What is JSON-LD?</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> A JSON-based linked-data format commonly embedded in a script element to describe structured information about page content.</p></article><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">What is the accessibility tree?</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> A browser-exposed representation of accessible roles, names, states and relationships used by assistive technologies.</p></article><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">How would you debug an accessibility issue?</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> Inspect the DOM and accessibility tree, verify names/roles/states, test keyboard navigation and focus, check headings/landmarks/forms/images/tables, then use automated and manual testing.</p></article><h2 style="color:#5d4e86;font-size:27px;border-bottom:2px solid #e7e3df;padding-bottom:9px;margin:34px 0 18px;">Expert</h2><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">Why can invalid HTML still render?</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> HTML defines error-recovery parsing rules. Browsers attempt to construct a usable document even when source markup is malformed, but relying on recovery creates unpredictable or maintenance-heavy results.</p></article><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">Why does source order matter for accessibility?</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> DOM order influences reading order, keyboard navigation, focus movement and the logical sequence consumed by assistive technology.</p></article><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">How would you design HTML for progressive enhancement?</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> Start with semantic content and native navigation/forms, ensure core tasks work without advanced scripting, then add CSS and JavaScript enhancements without replacing the underlying meaning.</p></article><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">How does HTML affect Core Web Vitals?</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> Markup affects resource discovery, image sizing, layout stability, DOM complexity and script/resource loading. HTML is one part of the performance system, not the whole system.</p></article><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">Why can lazy-loading the wrong image hurt performance?</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> Deferring an image that is immediately visible or important can delay meaningful visual content and degrade perceived loading performance.</p></article><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">How would you optimize a large HTML document?</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> Remove unnecessary wrappers, keep semantic structure shallow, reduce repeated markup where possible, paginate or virtualize appropriate application data, defer non-critical resources and measure DOM/style/layout cost.</p></article><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">How should HTML and server validation interact?</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> HTML constraints provide immediate user feedback; the server independently validates, sanitizes where appropriate and authorizes operations because requests cannot be trusted to originate from the browser UI.</p></article><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">How would you secure an untrusted iframe?</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> Define the required capabilities, use sandbox with the smallest necessary allowances, review permissions and origin behavior, use suitable referrer policy, and enforce broader security with response headers.</p></article><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">When should you use a custom element instead of native HTML?</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> When the product needs a reusable behavior or abstraction that cannot reasonably be expressed with existing elements. Native controls should remain the internal foundation where applicable.</p></article><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">How would you review a PR containing only HTML changes?</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> Check semantics, source order, content models, accessibility names, keyboard behavior, form submission, responsive media, metadata, resource loading, security-sensitive embeds, validation and maintainability.</p></article><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">What is the difference between HTML semantics and CSS appearance?</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> Semantics describe meaning and relationships; CSS controls presentation. A heading remains a heading regardless of font size.</p></article><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">Why is a clickable div usually a code smell?</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> It has no native link/button semantics or keyboard behavior. Replacing it with the correct native element usually provides accessibility and interaction behavior for free.</p></article><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">What should a senior developer say when asked “How do you make HTML accessible?”</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> Start with semantic native elements, correct names and labels, meaningful source order, text alternatives, keyboard support, visible focus, accessible errors and states, then test manually and with tools. ARIA is a supplement, not the starting point.</p></article><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">What makes HTML production-ready?</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> Valid and maintainable structure, correct metadata, semantic landmarks, accessible names and relationships, responsive media, sensible loading, safe embeds, predictable forms, appropriate internationalization and minimal dependence on parser error recovery.</p></article><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">What is the difference between an attribute and a DOM property?</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> An attribute is part of the element markup/content model; a DOM property is an object property exposed by the browser. They can reflect each other for some attributes, but reflection is not universal and their values can diverge.</p></article><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">Why should source order generally match reading order?</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> It keeps keyboard navigation, screen-reader reading and logical comprehension aligned. Visual reordering with CSS should not create a confusing interaction order.</p></article><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">What is a successful control in a GET form?</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> A form-associated control with a name and an eligible value contributes a name/value pair to the query string according to the form submission algorithm.</p></article><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">Why should hidden form fields not be trusted?</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> Hidden fields are visible to and modifiable by the client, so they can carry state but cannot establish authorization or trusted business values.</p></article><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">What is referrerpolicy used for?</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> It controls how much referrer information the browser sends with requests from a document or resource, helping balance analytics needs and privacy/security.</p></article><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">What is crossorigin on a resource element?</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> It controls the CORS mode used when fetching certain cross-origin resources and can be important for resources such as fonts, images, scripts or media depending on the element and use case.</p></article><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">Why is accessibility not just adding ARIA labels?</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> Accessibility also depends on semantic structure, keyboard behavior, focus order, states, contrast, alternatives, errors, dynamic updates and actual usability. Labels solve only one part of the problem.</p></article><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">How do you decide between a link and button in a design?</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> If activating it navigates to another URL or document location, use a link. If it performs an action without navigation, use a button.</p></article><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">Why can a visually hidden element still affect accessibility?</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> Different hiding techniques have different semantics. CSS clipping, hidden, display:none and visibility:hidden do not all produce the same accessibility behavior, so the technique must match the intended purpose.</p></article><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">How would you make a data visualization accessible?</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> Provide a meaningful accessible name, summarize the key insight in text, and when the underlying data matters provide a text or tabular representation rather than relying only on pixels.</p></article><article style="background:#fffdfb;border:1px solid #e6e1dc;border-radius:12px;padding:22px 26px;margin:0 0 18px;">
<h3 style="margin:0 0 9px;color:#28242c;font-size:19px;line-height:1.45;">What is the most important HTML principle for senior developers?</h3>
<p style="color:#4c4852;margin:0 0 10px;"><strong>Answer:</strong> Choose the simplest native element that accurately expresses the content or interaction, then enhance it only as necessary while preserving accessibility, performance and resilience.</p></article><div style="margin-top:24px;padding:18px 20px;background:#f4f0f9;border-left:4px solid #5d4e86;border-radius:8px;"><strong>Senior interview pattern:</strong> A strong answer usually covers four layers: what the feature means, why it exists, a practical example, and when you would choose an alternative.</div></div>`,
    contents: [
      {
        id: "htmlInterview_1",
        title: "16. HTML Interview Preparation — 100 Questions & Answers",
        images: [],
      },
    ],
  },
];
