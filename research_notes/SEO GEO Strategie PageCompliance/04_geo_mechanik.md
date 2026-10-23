# GEO Mechanics 2026: How AI Answer Engines Pick and Cite Sources, and What This Means for PageCompliance (German YMYL B2B SaaS)

> **Method note (please read first):** Research date 2026-10-23. In this session the egress proxy refused direct page fetches (WebFetch/curl to developers.google.com, developers.openai.com, docs.perplexity.ai, ppc.land and others returned DNS or proxy-403 errors). The one exception was Anthropic's help center, which loaded directly. Everything else comes from the WebSearch tool, which reads pages and summarizes them. So the numbers below are **second-hand unless marked "fetched directly"**. Each item carries one of these labels:
> - **[OFFICIAL]**: official vendor or engine documentation
> - **[STUDY]**: a dataset study, usually published by an SEO-tool vendor (vendor interest is noted)
> - **[ACADEMIC]**: an academic paper or preprint
> - **[SECONDARY]**: a blog or press report on a primary source
> - **[UNVERIFIED]**: a single source or conflicting sources
>
> Check every number against the primary URL before it goes into client-facing material.

---

## Q1: How do the main engines retrieve sources in 2026, and which crawlers must robots.txt allow?

### Takeaway
Every engine uses retrieval-augmented generation (RAG) on top of a search index, but each one uses a different index:
- **Google AI Overviews, AI Mode and Gemini** use the Google index with query fan-out.
- **ChatGPT** uses Bing plus OpenAI's own OAI-SearchBot index, and reportedly a newer in-house index.
- **Copilot** uses Bing.
- **Perplexity** uses its own PerplexityBot index.
- **Claude** uses Brave Search (strong evidence, not officially confirmed) plus Claude-SearchBot and Claude-User.

Being indexed and ranking well in **Google, Bing and Brave** is therefore the base requirement. Training crawlers and search/retrieval crawlers are separate user agents and should be decided on separately.

### Cited Findings

**Google AI Overviews / AI Mode / Gemini**
- [OFFICIAL] Google's "AI features and your website" page says AI Overviews and AI Mode "may use a 'query fan-out' technique". This means issuing several related searches across subtopics and data sources. The two features may use different models, so the links they show differ. AI Overviews appear only when Google judges them additive to classic results. — [Google Search Central: AI features and your website](https://developers.google.com/search/docs/appearance/ai-features) (via search summary)
- [OFFICIAL] To be eligible as a supporting link, a page "needs only to meet the same requirements as traditional search results": it must be indexed and eligible to show with a snippet. There are "no additional requirements". — [Google Search Central: AI features](https://developers.google.com/search/docs/appearance/ai-features); quoted by [RiZen Metrics](https://www.rizenmetrics.com/google-ai-features-and-your-website-what-site-owners-actually-need-to-know-in-2026/)
- [OFFICIAL] Google published a separate guide, "Optimizing your website for generative AI features on Google Search". Sources disagree on the date: published 15 May 2026 or updated 5 June 2026. Its message is that optimizing for generative AI search "is optimizing for the search experience, and thus still SEO". The features draw on Google's core ranking and quality systems, RAG and query fan-out. — [Google: AI optimization guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide); [Search Engine Journal](https://www.searchenginejournal.com/googles-new-ai-search-guide-calls-aeo-and-geo-still-seo/575026/); [Semrush](https://www.semrush.com/blog/google-publishes-generative-ai-search-guide/)
- [SECONDARY / UNVERIFIED] One secondary summary says Google calls building separate pages for each fan-out variation a scaled-content-abuse risk. I could not confirm this wording on the official page. — [The Keyword summary](https://www.thekeyword.co/news/google-ai-search-optimization-guide)
- [SECONDARY] Availability in Germany:
  - AI Overviews rolled out in Germany around 26 March 2025 ([t3n](https://t3n.de/news/google-ai-mode-gemini-ki-suche-1676616)).
  - AI Mode has been available in German since 7 October 2025 ([onlinemarketing.de](https://onlinemarketing.de/technologie/google-search-ai-mode-startet-in-deutschland); [OMR coverage via onlinemarketing.de](https://onlinemarketing.de/seo/google-ai-mode-jetzt-in-deutschland-nutzen)).

**ChatGPT Search (OpenAI)**
- [OFFICIAL] OpenAI documents three agents:
  - **OAI-SearchBot**: search inclusion. Allow it to appear and be cited in ChatGPT search answers.
  - **GPTBot**: model training. Blocking it does not remove a site from search.
  - **ChatGPT-User**: user-initiated fetches.

  Robots.txt changes take about 24 hours to apply. OpenAI publishes IP ranges for verification. — [OpenAI: Overview of OpenAI Crawlers](https://developers.openai.com/api/docs/bots); details via [Search Engine World](https://www.searchengineworld.com/tracking-openai-chatgpt-bots-a-fresh-guide-for-webmasters-site-owners-and-seos), [Promptwatch](https://promptwatch.com/bots/oai-searchbot)
- [SECONDARY] OpenAI removed the statement that ChatGPT-User obeys robots.txt. Its documentation now says such rules may not apply to user-triggered actions. This report is from about Dec 2025. — [PPC Land](https://ppc.land/openai-revises-chatgpt-crawler-documentation-with-significant-policy-changes/)
- [SECONDARY] Bing is a confirmed input. OpenAI's head of ChatGPT reportedly testified in April 2025 that ChatGPT uses Bing search data and that OpenAI wanted to build its own index. — [pritamr Substack](https://pritamr.substack.com/p/does-chatgpt-use-bing); [Lighthouse Local](https://www.lighthouselocal.ai/blog/does-chatgpt-use-google-or-bing)
- [UNVERIFIED] Reports from May to July 2026 describe an OpenAI in-house index called "Labrador". One claim says free instant answers come mostly from Labrador while paid "thinking" mode leans on scraped Google results. OpenAI has not confirmed this. — [anafernandezseo](https://www.anafernandezseo.com/en/blog/chatgpt-search-index); [tilio blog](https://tilionew.vercel.app/blog/chatgpt-has-built-its-own-search-index)
- [ACADEMIC preprint, Oct 2026 / SECONDARY] Google results plus OpenAI's Responses API recovered only about 25% of the exact URLs ChatGPT cited, and about 50% of the hostnames. Google's top five results pages contained only 9.4% and 6.4% of the cited exact URLs. — [Relevant Audience summary](https://www.relevantaudience.com/geo/chatgpt-citations-google-openai-api-proxies-study/)

**Perplexity**
- [SECONDARY, Aug 2025] Perplexity's declared agents are **PerplexityBot** (index) and **Perplexity-User** (user-triggered fetch). Cloudflare accused Perplexity of using an undeclared Chrome-on-macOS crawler to get around robots.txt, and delisted it as a verified bot. Perplexity called the report a "publicity stunt". Cloudflare's figures: 20–25 million requests per day from declared agents and 3–6 million from the undeclared one. — [Search Engine Journal](https://www.searchenginejournal.com/cloudflare-delists-and-blocks-perplexity-from-crawling-websites/552899/); [Malwarebytes](https://www.malwarebytes.com/blog/news/2025/08/perplexity-ai-ignores-no-crawling-rules-on-websites-crawls-them-anyway); [AlternativeTo](https://alternativeto.net/news/2025/8/cloudflare-accuses-perplexity-of-evading-ai-crawler-blocks-on-sites-using-stealth-tactics); [Sunil Pratap Singh](https://sunilpratapsingh.com/guides/geo/what-is-perplexitybot)
- Gap: I could not open Perplexity's own bot documentation (docs.perplexity.ai/guides/bots); the proxy blocked it.

**Microsoft Copilot / Bing**
- [OFFICIAL, Feb 2026] Bing Webmaster Tools added an **AI Performance** report (public preview).
  - It shows citations across Copilot, Bing's AI summaries and unnamed "partner integrations".
  - Metrics: total citations, cited pages, grounding queries, trends. A June 2026 preview added Intents, Topics, Citation Share and Compare.
  - Microsoft says the data "does not represent traffic, clicks, or user engagement."
  - Bing's guidelines say Copilot uses the same crawl, index and ranking base as Bing.

  — [Bing Webmaster Blog](https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview); [Search Engine Land](https://searchengineland.com/bing-webmaster-tools-ai-performance-report-468751)
- [SECONDARY] There is no evidence that IndexNow speeds up Copilot citations. It only speeds up indexing notification. — [eSEOspace](https://eseospace.com/blog/bing-webmaster-tools-indexnow-ai-search/)

**Claude (Anthropic)**
- [OFFICIAL, fetched directly] Anthropic documents three bots:
  - **ClaudeBot**: training data.
  - **Claude-User**: fetches pages when a user asks; blocking it "may reduce your site's visibility in user-directed web search".
  - **Claude-SearchBot**: indexing "to improve search result quality"; blocking it "may reduce your site's visibility and accuracy in user search results".

  Anthropic also supports the non-standard Crawl-delay directive, and robots.txt rules must be set per subdomain. — [Anthropic Help Center](https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler)
- [SECONDARY / partly UNVERIFIED] Brave Search is the likely backend for Claude's web search:
  - Anthropic's Trust Center lists Brave Search as a subprocessor.
  - The search tool has a parameter named `BraveSearchParams`.
  - Profound-attributed analyses report that 79–87% of Claude's cited URLs appear in Brave's top results, versus about one third in Google's top 10.
  - Anthropic has not officially confirmed the setup.

  — [shahabpapoon](https://www.shahabpapoon.com/blog/claude-web-search-runs-on-brave); [rankry](https://rankry.ai/blog/how-claude-finds-and-cites-sources/); [mostailabs](https://mostailabs.com/field-guide/claude-and-brave-search)
- [SECONDARY] One summary reports that Reddit is "completely absent" from Claude's citations, while it leads ChatGPT, Gemini and Perplexity. — [Contently / search summary](https://contently.com/2026/04/29/top-sources-llms-cite/)

**Overlap with organic rankings**
- [STUDY, Semrush, Jul 2025] In AI Mode, the sidebar links (shown in 92% of answers, about 7 domains each) had 51% domain overlap and 32% URL overlap with Google's top 10. The links below the answer had 89% domain and 80% URL overlap. — [Semrush AI Mode study](https://semrush.com/blog/ai-mode-comparison-study)
- [STUDY, Semrush] About 97% of AI Overview citations come from pages in the organic top 20 (sample of more than 10 million keywords). — [tech-insider summary](https://tech-insider.org/google-ai-overviews-citation-rules-2026/)
- [STUDY, Ahrefs, 2026] Only about 38% of URLs cited in AI Overviews also rank in the top 10. The earlier version of the study found about 76%. Sample: 863,000 keywords. — via [Ahrefs coverage summary](https://www.digitalapplied.com/blog/ai-search-citation-ranking-factors-2026-data-study)
- **Conflict:** the Semrush (97% from the top 20) and Ahrefs (38% from the top 10) figures use different cut-offs and methods. Other studies give 17% to 54% for early 2026.
- [STUDY, Ahrefs] Across 15,000 long-tail queries, about 12% of URLs cited by ChatGPT, Gemini and Copilot were in Google's top 10 (ChatGPT alone about 8%). — [vibhe summary](https://vibhe.com/blog/ranking-in-google-wont-get-you-cited-in-chatgpt)
- [STUDY, CiteLens, Jul 2026, small sample of 320 buyer queries] 93% of AI Mode citations and 89% of Perplexity citations came from the top 10, but only 30% of ChatGPT citations. — [saasylinks summary](https://saasylinks.com/blog/most-cited-websites-chatgpt/)

### Inferences
- **robots.txt recommendation for PageCompliance:**
  - **Allow** `Googlebot`, `Bingbot`, `OAI-SearchBot`, `ChatGPT-User`, `PerplexityBot`, `Perplexity-User`, `Claude-SearchBot` and `Claude-User`. Blocking any of these directly costs visibility in that engine.
  - Training bots (`GPTBot`, `ClaudeBot`, `Google-Extended`, `CCBot`) are a separate business decision. For a new brand that wants LLMs to "know" it even without live search, **allowing training is advisable**. This is my inference, not a measured effect.
  - Check that Cloudflare or another WAF is not blocking AI bots by default. A 2026 report says Cloudflare blocks AI agents by default for new zones ([anakin.io](https://anakin.io/blog/cloudflare-ai-agent-blocking-default-2026)).
- **Google-Extended:** from background knowledge not re-verified in this session, it controls Gemini training and grounding use and does not affect Google Search or AI Overviews inclusion. Verify on Google's crawler documentation.
- **Bing matters more than its market share suggests**, because it feeds Copilot and is at least one input to ChatGPT. Set up Bing Webmaster Tools, submit the sitemap, enable IndexNow and watch the AI Performance report.
- **Brave matters for Claude.** Check that pagecompliance.de appears on search.brave.com for brand and category queries.
- ChatGPT overlaps only weakly with Google rankings. Google-SEO alone will under-deliver in ChatGPT. Third-party mentions on pages ChatGPT likes to cite (listicles, review sites, Reddit, LinkedIn) are what fill the gap.

### Gaps
- I could not open the primary pages for OpenAI, Perplexity or Google directly; the proxy blocked them. Wording comes from search summaries.
- I found no official statement on what Gemini (the app) uses for grounding beyond Google Search. No results covered this.
- The status of OpenAI's own index ("Labrador") and any Google scraping is unconfirmed.

---

## Q2: What do studies show about citation factors (GEO paper, Ahrefs, Semrush, Seer, Peec, etc.)?

### Takeaway
- **Lab level:** adding citations, quotations and statistics makes a source more visible (the GEO paper, KDD 2024). Keyword stuffing does not.
- **Market level:** brand mentions across the web (including YouTube and UGC platforms), fairly fresh content, "best X" listicles, comparison pages and review platforms correlate most strongly with citations.
- Most market data are **correlations from vendors**, and recent findings swing with model updates. The listicle share, for example, reportedly fell sharply after a 2026 ChatGPT model change.

### Cited Findings

**Academic: the GEO paper (Aggarwal et al., arXiv 2311.09735, Nov 2023; KDD 2024)**
- [ACADEMIC] GEO is a black-box optimization framework tested on GEO-bench, a benchmark of queries from many domains. The abstract says GEO can raise visibility "by up to 40%". "Up to" means a best case, not a typical lift. — [arXiv abstract](https://arxiv.org/abs/2311.09735)
- [ACADEMIC] Table 1 values (Position-Adjusted Word Count / Subjective Impression), against a baseline of about 19.3–19.5 on both:

  | Method | PAWC | Subjective Impression |
  |---|---|---|
  | Quotation Addition | 27.2 | 24.7 |
  | Statistics Addition | 25.2 | 23.7 |
  | Cite Sources | 24.6 | 21.9 |

  — [arXiv PDF](https://arxiv.org/pdf/2311.09735) (via search snippet)
- [SECONDARY] Keyword stuffing scored worse than baseline (about −8%, or −10% in the deployed Perplexity test). Secondary sources disagree on per-method percentages (+27% vs +34% for Cite Sources). Recalculate from Table 1 instead. — [blckalpaca critique](https://blckalpaca.at/en/knowledge-base/seo-geo/geo-generative-engine-optimization/the-princeton-geo-study-methodology-results-and-critique); [elementera](https://www.elementera.com/blog/generative-engine-optimization-what-geo-aeo-ai-search-paper-shows-your-business)
- Limitation: the experiments ran on 2023-era engines (a simulated generative engine plus Perplexity). The results do not prove how current engines behave. — [elementera](https://www.elementera.com/blog/generative-engine-optimization-what-geo-aeo-ai-search-paper-shows-your-business)

**Brand mentions vs. backlinks**
- [STUDY, Ahrefs, 75,000 brands, 2025] Spearman correlations with AI Overview visibility:
  - YouTube mentions: about 0.737
  - Unlinked branded web mentions: about 0.664
  - Branded anchors: about 0.527
  - Backlinks: about 0.218
  - Brand search volume: reported as 0.334, 0.35 or 0.392 depending on the write-up

  Ahrefs itself stresses "correlation ≠ causation". — [blckalpaca summary](https://blckalpaca.at/en/knowledge-base/seo-geo/geo-generative-engine-optimization/brand-mentions-vs-backlinks-the-ahrefs-75k-brand-study); [authoritytech](https://authoritytech.io/curated/ahrefs-brand-mentions-backlinks-ai-search-2026)
- **Conflict:** another analysis found referring domains to be the strongest predictor of ChatGPT citations. That is a different engine and dataset. — [geoptimizer](https://www.geoptimizer.io/blog/do-backlinks-matter-ai-citations)
- Attribution is muddled: some pages credit the 0.664/0.218 figures to Onely or Semrush instead of Ahrefs. — [entity-SEO search results](https://www.airops.com/blog/entity-seo-ai-search)

**Freshness**
- [STUDY, Ahrefs, about 17 million citations, mid-2025] Pages cited by AI assistants averaged 1,064 days old, versus 1,432 days for organic SERP results. That is 25.7% "fresher". Cited pages were also updated more recently (909 vs 1,047 days). Cited content is still almost 3 years old on average. — [Ahrefs](https://ahrefs.com/blog/do-ai-assistants-prefer-to-cite-fresh-content); [Foundation Inc](https://foundationinc.co/lab/vol-251); critique by [Liam Vi](https://liamvi.com/blog/does-content-freshness-affect-ai-citations)

**Platform shares (Reddit, YouTube, Wikipedia, LinkedIn)**
- [STUDY, Peec AI, 30 million sources] Reddit is the most-cited domain across ChatGPT, AI Mode, Gemini, Perplexity and AI Overviews. — [Peec AI](https://peec.ai/blog/top-domains-cited-by-ai-search-analysis-based-on-30m-sources)
- [STUDY] On ChatGPT, the ranking of Wikipedia and Reddit flips depending on who measured and when:
  - Similarweb (Jan–Feb 2026): Wikipedia 13.15%, Reddit 11.97%.
  - Ahrefs (Jul 2026): Reddit 16.7% of mention share, Wikipedia 8.9%.

  — [saasylinks compilation](https://saasylinks.com/blog/most-cited-websites-chatgpt/); [trendlyai](https://blog.trendlyai.com/most-cited-domains-chatgpt)
- [STUDY] YouTube reportedly leads on Perplexity (31.2%) and AI Overviews (21.1%), per a compilation. — [everything-pr](https://everything-pr.com/the-50-most-cited-websites-in-ai-reddit-wikipedia-youtube-lead-2026-index)
- [STUDY] One study found AI search engines cite Reddit, YouTube and LinkedIn most. — [Search Engine Land](https://searchengineland.com/ai-search-engines-cite-reddit-youtube-and-linkedin-most-study-473138)
- [STUDY, Semrush AI Visibility Index, Jan–Jul 2026, UK and US] Fewer than half of the top 100 *mentioned* brands were also among the top 100 *cited* domains. Being mentioned and being cited are different things. — [Semrush most-cited domains](https://www.semrush.com/blog/most-cited-domains-ai/); [machinerelations summary](https://machinerelations.ai/research/semrush-ai-visibility-index-126-million-prompts-citation-authority-2026)

**Listicles, comparison pages and review platforms (most relevant for "which tool checks Health Claims?")**
- [STUDY, Ahrefs, 26,283 cited URLs, software prompts] "Best X" list posts were 43.8% of pages ChatGPT cited for top-of-funnel software prompts. — [getreditus / summaries](https://getreditus.com/blog/how-to-get-cited-by-llms)
- [STUDY, Averi B2B benchmark] Comparative listicles were 32.5% of AI citations. — [Averi](https://www.averi.ai/how-to/chatgpt-vs.-perplexity-vs.-google-ai-mode-the-b2b-saas-citation-benchmarks-report-(2026))
- **Conflict:**
  - [STUDY, Peec AI, 180 million sources, 2026] After the "GPT-5.6" rollout in ChatGPT, listicles lost 50.5% of their citation share and comparison pages lost 32.1%. This is a change in which pages get cited, not an official penalty. — [marketmaze](https://www.marketmaze.me/p/chatgpt-listicle-citation-share)
  - [STUDY, Presenc.ai 2026] Comparison pages have a 33% median citation rate versus 19% for listicles. — [Presenc](https://presenc.ai/research/ai-citation-rate-by-page-format-2026)
- [STUDY, MaxAEO B2B SaaS] G2.com is the most-cited source for B2B SaaS prompts in ChatGPT, with a 9.8% share. — [MaxAEO](https://maxaeo.ai/blog/what-websites-does-chatgpt-cite-most/)
- [UNVERIFIED vendor claim] Review profiles on G2, Capterra or Trustpilot "increase citation chances 3x". — [search summary of getreditus/virayo](https://virayo.com/blog/llm-seo)

**Clicks from AI Overviews**
- [STUDY, Seer Interactive, Jun 2024 – Sep 2025] On queries with an AI Overview, organic CTR fell from 1.76% to 0.61% (−61%) and paid CTR fell 68%. Brands cited in the Overview had organic CTR of 0.70%, versus 0.52% for brands not cited.
- [STUDY, Seer Interactive, 2026 update, 53 brands, 5.47 million queries] Organic CTR recovered to about 2.4% by Feb 2026. Cited pages got about 120% more clicks per impression than pages not cited (report of 21 May 2026). The data come from client accounts only, and no causation is claimed.

  Both Seer studies — [Seer Interactive](https://www.seerinteractive.com/news/fast-company-featured-ai-search-study-from-seer-interactive); [Presenc comparison](https://presenc.ai/research/ai-overviews-ctr-impact-2026)

### Inferences
- **For PageCompliance's own pages:** put cited statistics, verbatim quotes and source citations into the content, not keyword repetition. This is the most evidence-backed on-page lever. The natural fit is quoting HWG/HCVO articles and court rulings with case numbers, plus original data.
- **For "Welches Tool…?" prompts:** the decisive sources are third-party lists and comparisons ("Die besten Tools zur HWG-Prüfung"), review platforms (G2, Capterra, OMR Reviews) and community and professional platforms (Reddit, LinkedIn, YouTube). PageCompliance's own website alone will rarely win these prompts.
- Publishing an honest comparison page of its own ("PageCompliance vs. manual review by a lawyer vs. other tools") is reasonable. Do not depend on self-promotional listicles alone, given the reported 2026 drop in listicle share.
- Clicks from AI Overviews are low, so measure **visibility and mentions**, not only traffic.

### Gaps
- I could not verify the Ahrefs 75,000-brand and listicle figures against Ahrefs' original pages.
- "GPT-5.6" appears only in a Peec AI secondary write-up. The model name and date are unverified.
- I found no study on citation factors specifically for legal or regulatory B2B SaaS.

---

## Q3: What is Google's official guidance on AI features and llms.txt, and is llms.txt used by any engine in 2026?

### Takeaway
Google says officially that **llms.txt, special markup, Markdown copies, content chunking and AI-specific rewriting are not required** for its AI features. The data suggest almost nothing reads llms.txt, and no major engine documents using it for answers. Treat it as cheap and optional, not as a GEO lever.

### Cited Findings
- [OFFICIAL] The "mythbusting" section of Google's AI optimization guide (May/June 2026) says:
  - You don't need machine-readable AI files, special markup or Markdown.
  - Google's crawler may find such files but gives them no special treatment.
  - Content does not need to be "chunked".
  - AI-specific rewriting, special schema.org markup and "inauthentic mentions" are listed as unnecessary.
  - The guide covers Google Search only.

  — [Google AI optimization guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide); [Search Engine Journal](https://www.searchenginejournal.com/googles-new-ai-search-guide-calls-aeo-and-geo-still-seo/575026/); [Averi myth summary](https://www.averi.ai/blog/google-s-ai-guide-just-killed-4-geo-myths-(and-validated-3)); [CXL](https://cxl.com/blog/google-ai-search-optimization-guide/)
- [STUDY, SE Ranking, Nov 2025, about 300,000 domains] 10.13% of domains had an llms.txt file. The study found no measurable link between having one and getting AI citations. — via [PPC Land](https://ppc.land/llms-txt-adoption-rises-8-8x-but-97-of-files-get-zero-ai-requests/); [aisaasradar](https://aisaasradar.com/article/llms-txt-adoption-data-2026)
- [STUDY, Ahrefs log study, Jun 2026, about 137,000 domains] 97% of llms.txt files received **zero** requests in May 2026. Ahrefs notes the sample is SEO-aware. File count grew about 8.8x. — [PPC Land](https://ppc.land/llms-txt-adoption-rises-8-8x-but-97-of-files-get-zero-ai-requests/)
- [SECONDARY] Profound tracking reportedly saw Microsoft and OpenAI crawlers fetching llms.txt files. This shows some crawler traffic, not use in answers. OpenAI and Anthropic publish llms.txt files for their *own* docs, but their crawler documentation does not mention reading other sites' files. — [kulbhushanpareek](https://kulbhushanpareek.com/blog/llms-txt-guide-ai-search-visibility); [guptadeepak](https://guptadeepak.com/llms-txt-meta-keywords-2026/)
- [OFFICIAL] Google's AI features page (via secondary sources) recommends normal SEO hygiene:
  - crawlability, internal links, page experience, text content;
  - structured data that matches visible content;
  - snippet controls (nosnippet, data-nosnippet, max-snippet, noindex) also apply to AI features.

  Traffic from AI features is counted in Search Console's Performance report, in the "Web" search type. — [Google AI features](https://developers.google.com/search/docs/appearance/ai-features). The snippet-control and Search Console items come from my background knowledge of this page and were **not re-verified this session**.

### Inferences
- Creating an llms.txt (for example, a product summary and links to key pages) takes 30 minutes and costs nothing. Do it at low priority, and never present it to stakeholders as a ranking factor.
- Google's "still SEO" message suggests most of PageCompliance's effort should go into normal SEO quality plus off-site brand mentions.

### Gaps
- I found no statement from Perplexity or Microsoft about llms.txt.

---

## Q4: How relevant is structured data (Organization, SoftwareApplication, FAQPage, HowTo, Article, Person, sameAs), and what changed for rich results?

### Takeaway
Structured data helps machines understand **entities**, and still powers some rich results such as SoftwareApplication ratings and Organization logo and knowledge data. But Google says no special schema is needed for AI features. FAQ and HowTo rich results are essentially gone. The evidence that schema itself increases AI citations is weak or negative.

### Cited Findings
- [OFFICIAL via SECONDARY] Google: no special schema.org markup is needed for AI Overviews or AI Mode. Structured data should match visible text. — [Google AI optimization guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide); [globerunner](https://globerunner.com/structured-data-schema-markup-ai-2026/)
- [SECONDARY] FAQ rich results:
  - Restricted to government and health sites in August 2023.
  - Reportedly removed from Search on 7 May 2026.
  - Search Console and API support reportedly removed in June and August 2026.

  — [elementera](https://www.elementera.com/blog/google-has-removed-faq-rich-results). The 2026 removal dates are **UNVERIFIED** (single secondary source).
- [SECONDARY] HowTo rich results stopped showing in 2023. The markup is still valid schema.org. In June 2025 Google announced it was retiring seven more structured-data-driven displays; the sources do not list which seven. — [globerunner](https://globerunner.com/structured-data-schema-markup-ai-2026/); [elementera](https://www.elementera.com/blog/google-has-removed-faq-rich-results)
- [STUDY via SECONDARY] An Ahrefs study of 1,885 pages found no positive effect of schema on AI Overview citations. A German SEO blog issued a correction after overstating schema's role. — [seo-kreativ.de](https://www.seo-kreativ.de/en/blog/structured-data-and-ai-overviews/)

### Inferences
- **Implement anyway, for entity clarity and the remaining rich results.** It is low cost.
  - `Organization` with `sameAs` pointing to LinkedIn, Wikidata, Crunchbase, OMR Reviews, G2 and the Handelsregister data.
  - `SoftwareApplication` with offers and ratings, but only with genuine reviews.
  - `Article` and `Person` for authors and reviewers, including `reviewedBy` and credentials.
  - `BreadcrumbList`.
- Keep FAQ blocks as **visible on-page content**. Q&A formats are easy for RAG to extract. Just don't expect FAQ rich snippets.

### Gaps
- I found no rigorous study isolating the effect of schema on ChatGPT, Perplexity or Claude citations.

---

## Q5: Entity consistency (Wikidata, LinkedIn, directories, knowledge panel) and how LLMs form brand associations

### Takeaway
Practitioners agree that consistent entity data across the web improves recognition: same name, same one-line description, same category, `sameAs` links, a Wikidata item and third-party mentions. Hard causal evidence is thin. The strongest measured signal is still **co-occurrence of the brand with its category in third-party content**, that is, brand mentions.

### Cited Findings
- [SECONDARY] Wikidata is presented as the machine-readable base that links a brand to its categories, founders and products. It feeds Wikipedia and Google's Knowledge Graph and is commonly used in LLM training data. — [AirOps](https://www.airops.com/blog/entity-seo-ai-search); [digitalapplied](https://www.digitalapplied.com/blog/entity-seo-knowledge-graph-optimization-guide-2026)
- [SECONDARY] Organization schema with `sameAs` links is the main recommended way to declare that a website and its external profiles describe the same entity. A Knowledge Panel can appear once enough consistent facts are linked. — [ighenatt.es](https://ighenatt.es/en/blog/entity-seo-ai-optimization-guide/); [blckalpaca](https://blckalpaca.at/en/knowledge-base/seo-geo/off-page-seo-link-building/brand-signals-and-entity-seo-knowledge-graph-and-ai-authority)
- [ACADEMIC preprint, 2026] One paper argues that AI visibility comes from citation density, co-citation patterns, structured data and knowledge-graph anchoring, not from self-description alone. Not peer-reviewed. — [arXiv 2606.21595](https://arxiv.org/pdf/2606.21595)
- [UNVERIFIED vendor claim] "Wikidata-verified brands are 3.2x more likely to be Knowledge Panel eligible". No traceable primary source. — [blckalpaca](https://blckalpaca.at/en/knowledge-base/seo-geo/off-page-seo-link-building/brand-signals-and-entity-seo-knowledge-graph-and-ai-authority)
- [OFFICIAL] Google lists "inauthentic mentions" as a myth or tactic not to pursue. — [Google AI optimization guide (via Averi)](https://www.averi.ai/blog/google-s-ai-guide-just-killed-4-geo-myths-(and-validated-3))

### Inferences
- **Define one canonical German positioning sentence**, for example "PageCompliance prüft Gesundheitswerbung (Websites, Social Posts, Anzeigen) KI-gestützt auf Verstöße gegen HWG, Health-Claims-Verordnung und UWG." Use it identically on:
  - the website
  - LinkedIn company page
  - Crunchbase
  - OMR Reviews, G2 and Capterra
  - Product Hunt
  - the Wikidata item (only if the notability criteria are met; Wikipedia notability is unlikely at launch)
  - press releases
- The goal is for LLMs to learn the association "HWG-Prüfung / Health-Claims-Check ↔ PageCompliance". This comes from many independent mentions (trade media, associations, podcasts, LinkedIn posts by lawyers and agencies), not from markup alone.
- Do not buy fake mentions or reviews. Google explicitly lists inauthentic mentions as a tactic not to use, and in a compliance niche it would destroy trust.

### Gaps
- I found no study that measures how Wikidata edits change LLM answers.
- I found no data on Knowledge Panel timelines for young startups.

---

## Q6: YMYL / E-E-A-T for legal and health content

### Takeaway
PageCompliance's topics (health advertising law) are YMYL on two counts. Google wants clear authorship ("Who, How, Why"), demonstrable expertise and human review. AI answers on health topics have documented accuracy problems, so engines lean on sources they judge trustworthy. Lawyer-reviewed, norm-citing and regularly updated content is both the E-E-A-T play and the GEO play: it supplies citations, quotations and facts.

### Cited Findings
- [OFFICIAL via SECONDARY] Google's people-first content guidance contains a "Who, How, and Why" section:
  - Bylines should exist where expected and link to information about the author.
  - The "How" covers automation and AI use.
  - Google cares whether content is made to help people, not how it is produced.
  - Using automation primarily to manipulate rankings violates its spam policies.

  — [Search Engine Land](https://searchengineland.com/google-search-ai-content-guidance-392840)
- [SECONDARY, Jan 2026] A Guardian investigation found misleading health advice in AI Overviews, for example on pancreatic cancer diet and liver test ranges. Google said many examples were "incomplete screenshots". — [Search Engine Journal](https://www.searchenginejournal.com/the-guardian-google-ai-overviews-gave-misleading-health-advice/564476/); [OECD.AI incident](https://oecd.ai/en/incidents/2026-01-02-62fb)
- [STUDY] For health topics, YouTube was the most-cited source in AI Overviews (4.43% of citations), more than hospitals, insurers and health associations combined. — [Search Engine Land](https://searchengineland.com/google-ai-overviews-cite-youtube-health-topics-467628)
- [ACADEMIC preprint] A 2026 paper proposes a framework of authority signals for health sources cited by ChatGPT. — [arXiv 2601.17109](https://arxiv.org/pdf/2601.17109)
- [STUDY, blinq, DACH, Jan–Jun 2026] Specialist articles ("Fachartikel") are among the *least*-cited sources. — [t3n](https://t3n.de/news/chatgpt-perplexity-co-diese-quellen-nutzen-ki-tools-am-haeufigsten-und-das-ist-ein-problem-1754013/); [onlinemarketing.de](https://onlinemarketing.de/technologie/welche-quellen-chatgpt-google-perplexity-zitieren-studie)

### Inferences
- **Content recommendations:**
  - Every legal guide needs a named author plus a named reviewing lawyer (ideally a Fachanwalt für Gewerblichen Rechtsschutz or Medizinrecht), with a profile page and `Person` schema.
  - Cite norms precisely (§ 3, § 11, § 12 HWG; Art. 10 and Art. 13 HCVO; § 5 UWG).
  - Cite rulings with court, date and case number (e.g. BGH, OLG), and add a "Stand: [date]" plus a changelog.
  - Add a clear disclaimer: "keine Rechtsberatung", and the tool supports but does not replace legal review.
- The finding that specialist articles are rarely cited suggests that content alone won't do it. It should be paired with distribution: LinkedIn, YouTube explainers, guest articles in trade media.

### Gaps
- I did not retrieve the primary text of Google's Search Quality Rater Guidelines on YMYL.
- I found no study on lawyer-reviewed content and AI citation rates.

---

## Q7: Measurement (tools, pricing, manual tracking, GA4)

### Takeaway
Entry-level AI visibility trackers cost about $29–$199 per month. Free first-party signals:
- Bing Webmaster Tools AI Performance (Copilot citations)
- Search Console (AI Overviews and AI Mode clicks, merged into "Web")
- GA4 referral segmentation

For an early-stage German startup, a mix works well: a Berlin vendor (Peec AI) or a low-cost one (Otterly), plus a manual monthly prompt panel.

### Cited Findings
- [SECONDARY, prices dated Aug–Sep 2026; check vendor pages]

  | Tool | Published pricing | Notes |
  |---|---|---|
  | Otterly.AI | Lite $29, then $189 / $489; Enterprise from $1,000 | Entry tier: 15 prompts, 4 engines |
  | Peec AI | About $95 / $245 / $495 per month (another source: $80 annual Starter) | Entry: 50 prompts, 3 engines |
  | Profound | Starter $99 (ChatGPT only), Growth $399 per month, billed yearly; Enterprise on request | |
  | Ahrefs Brand Radar | From $199; reportedly $398 for selected platforms, $699 for all | Sources conflict |
  | Semrush AI Visibility Toolkit | $99 per month per domain, billed yearly (verified Sep 2026); extra users from $45 | |

  — [ainora.lt](https://ainora.lt/blog/best-ai-visibility-tracking-tools-2026); [get-ryze](https://www.get-ryze.ai/blog/ai-visibility-tools-pricing-compared-2026); [seo-stuff](https://www.seo-stuff.com/compare/ai-visibility-tools); [surmado](https://www.surmado.com/blog/best-ai-visibility-tools-2026)
- [OFFICIAL] Bing AI Performance report: free; covers Copilot, Bing AI summaries and partners; shows citations, not clicks. — [Bing blog](https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview)
- [SECONDARY] GA4 setup:
  - Create a custom channel group with "Source matches regex" covering chatgpt.com, chat.openai.com, perplexity.ai, claude.ai, gemini.google.com, copilot.microsoft.com and others.
  - Place it **above** the Referral channel.
- [SECONDARY] One source says GA4 added a native "AI Assistant" channel on 13 May 2026 that skips Perplexity and sessions without a referrer. Another says no native channel exists. Unresolved.
- [SECONDARY] An estimated 35–70% of AI sessions arrive without a referrer, so referral data undercounts.
- [SECONDARY] Google AI Overviews and AI Mode clicks are not separable in GA4; they arrive as google / organic.

  GA4 items — [Swydo](https://www.swydo.com/blog/track-ai-traffic-in-ga4/); [nicelookingdata](https://www.nicelookingdata.com/blog/ga4-ai-traffic-chatgpt-referrals); [nadiamohamed](https://nadiamohamed.me/insights/track-ai-referral-traffic/)

### Inferences
- **Manual prompt panel** (free, monthly). 20–40 German prompts in three groups:
  - problem prompts: "Wie prüfe ich meine Praxis-Website auf HWG?"
  - category prompts: "Welches Tool prüft Health Claims?", "HWG Checker Software"
  - brand prompts: "Was ist PageCompliance?"

  Run them in ChatGPT (logged out and logged in), Perplexity, Google AI Mode, AI Overviews, Gemini, Copilot and Claude. Log three things per answer: mentioned yes/no, cited URL, and competitors named. Answers vary from run to run, so run each prompt 2–3 times.
- **Brand prompts double as a misinformation check:** does the AI describe the features, pricing and legal scope correctly?
- **Paid tool:** Peec AI is Berlin-based and its interface supports German markets (reported). For the first months, one entry-tier tool (Otterly or Peec) is enough. Enterprise tools such as Profound Growth are overkill at this stage.
- **Add "How did you hear about us?"** with an AI option to signup and demo forms. This is the most reliable way to attribute AI-driven leads.

### Gaps
- I could not confirm Peec AI's DACH language and country features from the primary source.
- The status of GA4's native AI channel is unresolved.

---

## Q8: German-language GEO and DACH studies

### Takeaway
DACH studies exist (blinq: 250,000 answers, 2026). German prompts get answers built heavily on company websites and big platforms (YouTube, Reddit, Wikipedia, LinkedIn) plus German news brands. Specialist articles are rarely cited. I found no study measuring how often German prompts get German-language sources versus English ones.

### Cited Findings
- [STUDY, blinq (vendor), Jan–Jun 2026; about 2,000 B2B and B2C prompts tracked daily, 250,000 answers from ChatGPT, AI Overviews and Perplexity]
  - 66.2% of cited sources are company pages (blogs, landing pages).
  - Top domains: YouTube about 15%, Reddit about 15%, Wikipedia about 9%, LinkedIn about 7%.
  - ChatGPT leans on Reddit, Wikipedia, Welt, LinkedIn, Google and BILD.
  - Specialist articles are among the rarest sources.
  - Methodology is only partly transparent.

  — [t3n](https://t3n.de/news/chatgpt-perplexity-co-diese-quellen-nutzen-ki-tools-am-haeufigsten-und-das-ist-ein-problem-1754013/); [onlinemarketing.de](https://onlinemarketing.de/technologie/welche-quellen-chatgpt-google-perplexity-zitieren-studie); [basicthinking](https://www.basicthinking.de/blog/2026/07/22/ki-chatbots-antworten-quellen/); [digitaholics](https://digitaholics.ai/blog/welche-quellen-ki-zitiert-studie/)
- [STUDY, NeuRank, Jun 2026; 800 local prompts, 10 industries, 20 German cities; Perplexity plus one OpenAI model] 20% of Perplexity's sources were review portals; 38% of the OpenAI model's sources were Google Maps links. — [NeuRank](https://neurank.de/studie-ki-sichtbarkeit-2026/)
- [UNVERIFIED] Share of answers that include sources: Perplexity 97%, AI Overviews 34%, ChatGPT 16%. This comes from a market overview and was not independently verified. — [reneki.de](https://reneki.de/ki-suche-marktanteile-2026-chatgpt-gemini-perplexity-und-claude-in-zahlen/)

### Inferences
- **The 66% company-page share is encouraging for a niche B2B tool.** Well-structured German pages from PageCompliance can be cited directly, especially for problem and how-to prompts where few German sources compete. HWG is a German-only law, so English sources can hardly answer these prompts.
- **For "Tool" prompts, German review and comparison platforms likely matter most.** OMR Reviews, trusted.de and Capterra.de are examples. This is an inference from the review-portal share in NeuRank and the global listicle data.

### Gaps
- I found no study on whether engines answer German prompts with German or English sources.
- I found no DACH data for Claude, Gemini or Copilot.

---

## Q9: Risks (AI misstating legal facts, brand safety, Google spam policies)

### Takeaway
There are three main risks:
1. **AI engines misstating legal facts or PageCompliance's own capabilities.** This is documented for health topics.
2. **Mass-produced AI pages** (for example, one page per prompt or fan-out variant, per city or per specialty) triggering Google's scaled content abuse policy. Enforcement in 2026 is reported to be active, including for content cited in AI features.
3. **Fake mentions or reviews**, which Google explicitly calls inauthentic, and which in a compliance product create reputational and legal (UWG) exposure.

### Cited Findings
- [SECONDARY] Scaled content abuse targets volume combined with low added value, not AI use itself. One example pattern is generating many pages with AI without adding value. — [PPC Land](https://ppc.land/scaled-content-abuse/); [Post For Success](https://postforsuccess.com/scaled-content-abuse)
- [SECONDARY, partly UNVERIFIED]
  - The March 2026 core update and an August 18–21, 2026 spam update are reported to have hit scaled AI content.
  - One source says Google stated on 15 May 2026 that its spam policies apply to AI Overviews and AI Mode.
  - One source says Google added a manual fact-checking expectation for generative AI content on 1 October 2026.
  - One source says site reputation abuse enforcement differs in the EEA since 30 August 2026.

  All need primary confirmation. — [kurums](https://kurums.com/googles-august-2026-spam-update-targeted-scaled-ai-content-what-marketing-teams-must-fix-now/); [digitalapplied](https://www.digitalapplied.com/blog/scaled-content-abuse-google-march-update-ai-pages-decimated); [bulkbase](https://bulkbase.ai/seo/scaled-content-abuse-googles-policy-enforcement-how-to-stay-compliant-in-2026); [razorrank](https://razorrank.com/seo-resources/using-ai-generated-content-the-risks-and-rewards/)
- [SECONDARY, Jan 2026] AI Overviews gave incorrect health advice (Guardian investigation). Mind called some mental-health summaries "incorrect, harmful". — [Search Engine Journal](https://www.searchenginejournal.com/the-guardian-google-ai-overviews-gave-misleading-health-advice/564476/)
- [ACADEMIC/clinical commentary] The Lancet eClinicalMedicine discusses the risks of AI-generated health advice. — [Lancet eClinicalMedicine](https://www.thelancet.com/journals/eclinm/article/PIIS2589-5370(26)00098-2/fulltext)
- [OFFICIAL via SECONDARY] Google's AI guide lists "inauthentic mentions" as a myth or tactic not to use. — [Averi summary](https://www.averi.ai/blog/google-s-ai-guide-just-killed-4-geo-myths-(and-validated-3))
- [SECONDARY] Paid or hidden advertising in AI answers is an emerging topic in Germany. — [datapulse.de](https://www.datapulse.de/versteckte-werbung-ki/)

### Inferences
- **Don't build fan-out page farms** ("HWG-Check für Zahnärzte / Heilpraktiker / Physiotherapeuten in [Stadt]") with thin AI text. A smaller set of deep, lawyer-reviewed hubs is safer. Specialty pages should exist only where they carry real specialty content, such as specific prohibited claims and rulings for each profession.
- **Monitor brand prompts for misstatements**, for example "PageCompliance garantiert Rechtssicherheit". Such a claim would itself be a UWG risk. Correct them by publishing clear, consistent facts: a "Was PageCompliance kann / nicht kann" page and a "keine Rechtsberatung" statement.
- **Guard PageCompliance's own marketing claims.** Because PageCompliance sells compliance, any exaggerated GEO-bait claim ("100% HWG-sicher") is a self-inflicted legal and credibility risk. Align with the company's wording guideline.

### Gaps
- None of the 2026 spam-update dates or statements were confirmed on Google's Search Status Dashboard or Search Central blog in this session.
- I found no German case law on liability for AI-generated legal misinformation about a named company.
