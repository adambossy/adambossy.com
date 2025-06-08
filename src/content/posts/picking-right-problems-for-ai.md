---
title: "Picking the Right Problems for AI"
pubDate: 2025-02-25
author: "Adam Bossy-Mendoza"
showToc: false
emoji: "🎯"
description: "Not every problem is an AI problem. Learn how to identify which challenges are best suited for LLM solutions and which are better solved with traditional approaches."
---

A few months after ChatGPT first made waves, I joined a very early-stage startup briefly as CTO. They insisted I help them use large language models (LLMs) to make compliance decisions that were critical to making their overall business work. Specifically, they wanted to analyze products and determine, with a simple yes or no, whether they were compliant with U.S. tax regulations.

I gave it a shot with GPT-3.5, and the results were abysmal. No matter how much I fine-tuned the model or curated the dataset, the LLM wasn't performing any better than off-the-shelf classifier software. Plus, there wasn't any clear correlation between product features and the tax code because the tax code was fundamentally ambiguous. It was a clear case of using AI for the wrong kind of problem.

![Walking through the right door](https://res.cloudinary.com/dwt45tvzy/image/upload/v1740602602/walking-through-the-right-door_h5rlpn.jpg)

### Picking the Right Problem

Ignoring that the tax code is ambiguous, a core problem with this application is that LLMs are inherently stochastic. They introduce randomness, and in a high-stakes domain like compliance, you can't afford incorrect answers. Every mistake introduces business risk. Worse, the problem we were trying to automate wasn't even that big. The product catalog was small, and manual review wouldn't have been prohibitively expensive. We were using AI to solve a problem that didn't need solving.

The first wave of mainstream LLM adoption has felt like a massive game of trial and error—companies throwing AI at everything to see what sticks. Now, two years in, we're starting to see real success stories emerge. But unsurprisingly, many of these early wins are in crowded spaces, where dozens of companies rushed to the same idea at the same time. 

Fear not; there's a vast world of untapped ideas out there. As I heard recently, *"There's a lot left to invent."* The key is building a solid framework for identifying problems worth solving.

### Problems That Already Use Human Review

One of the most obvious applications of LLMs is content creation—writing, design, image editing, coding, email drafting. Anywhere a human benefits from a solid first draft, AI is a natural fit. The workflow remains the same: humans review and refine, but AI speeds up the process.

But what about domains where human review isn't the default? That's where things get more interesting.

In my current role, we've starting injecting LLMs into many places, and for each one, I ask myself: *How do we verify the output?* Can a human be in the loop? Should they be? LLMs are black boxes, capable of producing wildly varied outputs, which makes verification critical. If you can't confidently validate the output, you're in dangerous territory.

### The Discreteness Spectrum

I’m bullish on AI solving problems where the answers are discrete—or as close as possible to it. The more concrete and verifiable an AI-generated output is, the easier it is to trust and scale.

Of course, open-ended problems are still valuable. There’s plenty of room for AI to enhance creative or exploratory work. But the most transformative AI applications will likely be in areas where clear, verifiable answers can be produced—answers that were previously impossible or impractical to generate with traditional computing techniques.

### AI in Enterprise Codebases

One domain where verification is built-in is coding—especially in large, enterprise-scale codebases that have established test suites, and that's why I think the AI advances in coding will trump nearly everything else. 

Most AI coding tools today focus on greenfield development, helping engineers start new projects. But real value will come in integrating AI into existing, large-scale systems. Here, test suites act as an automated verification system. AI-generated code can be run against existing, human-verified tests, making LLMs far more viable for enterprise development than for, say, compliance decisions where errors are costly and hard to catch. Testing like this is unique to coding—as far as I know, no other field has built-in verification in quite the same way.

### The Takeaway

Not every problem is an AI problem. **The best applications of LLMs are those where there's an implicit or explicit verification step that involves humans.** The primary exception is code, which can be verified with tests.