---
title: "Promptorium: A Versioning System for LLM Prompts"
description: "Promptorium keeps prompts organized, versioned, and reproducible without creating Git noise."
pubDate: 2025-11-17
author: "Adam Bossy-Mendoza"
showToc: false
emoji: "📜"
---

After 2+ years of AI engineering, my prompts consistently end up in utter chaos; they're randomly strewn across code, markdown files, YAML, and stray .txt files; changes get buried in git history and it becomes hard to track which prompt produced which output in a systematic way. I often end up wasting valuable cycles doing the bookkeeping just to keep everything organized. 

[Promptorium](https://github.com/adambossy/promptorium-python) solves this. It versions, stores, and organizes your prompts as you iterate, independent of Git, so prompt changes don’t disappear into commit noise. It helps your prompts evolve in a transparent, intentional way, making them easy to reference and improve for evals, A/B tests and other analytics.

### Why it matters

* **Reproducibility**: Know *exactly* which prompt version generated which output.
* **Explicit, reliable history**: Refine prompts without losing the evolution.
* **Organization by default**: No more scattered `.md`, `.yaml`, `.txt`, and inline strings.
* **Separation of concerns**: Prompts live apart from deterministic code.
* **Developer ergonomics**: Remove chaos; gain clarity, structure, and consistency.

### How it was built

A very cool thing about this project is how the library came together. I had the architecture building in my mind for months, and after I finally sat down with an AI coding assistant to firm it up, the components came together quickly. I gave those pieces to GPT-5 Pro and about 45 minutes later, voila! It had one-shot the implementation, with the code quality you see today.

It's well-decomposed and easy to reason about, unlike a lot of AI-generated slop, and roughly scoped to my liking. Before AI, I would have let my opinion of the architecture evolve as I wrote the library, but now, it's essential to lock a great architecture in place first, investing the upfront time to shape it. It shows how providing AI with the right boundaries can lead to a superior result, since without AI, I probably would never have had the time to write it, let alone make it neat enough to publish.

I focused on the architecture and design level and trusted that the AI would handle the implementation. Ultimately, I did the thinking, making a lot of tiny decisions along the way that AI would have gotten wrong and trusted it to do the rest.

### Tiny usage example

```bash
uv pip install promptorium-python

# Add a prompt
prompts add --key fetch-and-summarize-news

# Create new versions
prompts update fetch-and-summarize-news --edit
echo "new version" | prompts update fetch-and-summarize-news

# Compare versions
prompts diff fetch-and-summarize-news 1 2
```

```python
from promptorium import load_prompt

instructions = load_prompt("onboarding")
```

### What’s coming next

* **A full TypeScript port** for parity across Python and TS codebases.
* **AI Refinement** that modify your prompts based on real data, using itself for its own prompt bookkeeping. What could go wrong?

🗂️ **Repo:** [github.com/adambossy/promptorium-python](https://github.com/adambossy/promptorium-python)