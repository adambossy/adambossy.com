---
title: "Better AI Process with Machine Learning Yearning"
pubDate: 2025-05-00
author: "Adam Bossy-Mendoza"
showToc: false
emoji: "📚"
description: "How Andrew Ng's classic book on machine learning strategy provides a solid foundation for developing reliable AI applications, even in the age of LLMs."
---

I couldn't get reliable results from LLMs until I read Andrew Ng's "Machine Learning Yearning." This book takes a refreshingly methodical approach: it focuses on the strategic decisions that actually determine whether your AI project succeeds or fails.

Reading this book made my roadmap much clearer. Instead of bouncing between (somewhat arbitrary) techniques and playing whack-a-mole, improving my output in one area while others got worse, I now have a framework for tackling novel AI problems with unique datasets.

What makes this book so valuable isn't theoretical mathematics or code, but the emphasis on decision-making processes. Ng focuses on practical questions: How do you select your test data and ensure it correctly reflects production data? How do you optimize your systems when there are multiple, and often conflicting, quality metrics you care about?

He targets teams failing to successfully harness ML and encourages an approach that's centered around data quality and clear evaluation. Caveat: the book was published in 2018 and focuses on traditional ML.

![Experience Zen with your data](https://res.cloudinary.com/dwt45tvzy/image/upload/v1746811196/robot-2_vnu74c.png)

## Curating Dev/Test Sets That Serve You

Ng argues that the conventional wisdom of randomly splitting your data into 70/30 or 80/20 train/test splits was outdated at the time and can actively harm your projects. He writes:

>Choose dev and test sets to reflect data you expect to get in the future and want to do well on.

If you're building a mobile app that detects cats, but your training data comes from professional photography websites while your users will upload blurry phone pics, your system will fail no matter how sophisticated your model is.

The book advocates that train/dev/test sets come from the same distribution and reflect the data you want to be operating on in the future. And if that data isn't available, it's imperative to find ways to attain it. 

Since the book was published in 2018 and LLM apps will likely only use training data when they're fine-tuning. But what we can take away from this is we should curate a high-quality dataset that reflects these principles in order to benchmark our LLM applications today. Anecdotally, a lot of people miss this critical step.

## Defining A Clear North Star

AI complexity spirals out of control quickly. Without clear metrics, you'll end up playing whack-a-mole by solving one problem but creating three others, delivering no actual progress.

The book hammers home the importance of having a "single-number evaluation metric" that your team can optimize. This isn't just about technical clarity, but about organizational alignment and velocity:

>Having a single-number evaluation metric allows you to sort all your models according to their performance on this metric, and quickly decide what is working best.

For complex problems with multiple objectives, Ng introduces the concept of "optimizing" and "satisficing" metrics, a framework that's helped me balance competing priorities without getting stuck in endless debates about which approach is "better." "Satisficing" metrics are those where your output must be "good enough," and often called "guardrail" metrics in other settings.

## Achieving Human Alignment

One of the book's most pragmatic insights is how to use human-level performance as a reference point. In LLM parlance, this has come to be known as achieving "human alignment." 

For example, if your image recognition system achieves 10% error while humans achieve 2%, you know your system has at least 8% "avoidable bias" to eliminate. This creates a clear debugging path rather than vague aspirations to "improve the model."

What I especially appreciated was the nuanced discussion of how to define human-level performance when different humans perform differently. Ng writes:

>When it comes to obtaining labeled data, you might not want to discuss every image with an entire team of doctors since their time is expensive. Perhaps you can have a single junior doctor label the vast majority of cases and bring only the harder cases to more experienced doctors.

This has helped me refine the sorts of questions I ask my colleagues who are experts on the subject matter, and how to more efficiently and effectively leverage their time. It also helps clarify how ambiguous a problem might be for humans to solve, and establish more realistic baselines around which to orient my expectations.

##  Building End-To-End Versus Building Components

A big question in system design for AI application is how much logic to rely on for an LLM versus how much to decompose LLM calls into multiple, verifiable steps. In my experience, I've found that decomposition in AI applications makes sense when an intermediary step can be effectively evaluated and aligned, and provide higher-quality input—and therefore yield higher-quality outputs—to the subsequent step.

For engineers building production Ai applications, the chapters on "error analysis by parts" are worth their weight in gold. By systematically attributing errors to specific components in your pipeline, you can focus your efforts where they'll have the most impact:

>By carrying out this analysis on the misclassified dev set images, you can now unambiguously attribute each error to one component. This allows you to estimate the fraction of errors due to each component of the pipeline, and therefore decide where to focus your attention.

This rigorous, disciplined process for diagnosing failures is exactly what's missing in many AI teams that jump from one approach to another without systematic analysis. This provides a structured way to think about decomposing complex problems—crucial for keeping AI complexity under control. As systems grow, complexity becomes the enemy. The book's disciplined approach to breaking down problems helps create systems that remain manageable as they scale.

## Applying This to LLMs

While the book predates the current LLM boom, most of its principles apply perfectly to prompt engineering and fine-tuning workflows. The key difference is that with LLMs, we're working with models that are already trained, so aspects regarding training can be disregarded.

However, the principles about data preparation, evaluation metrics, and error analysis remain vital. With LLMs, the non-deterministic nature of outputs can make improvement feel like a dark art. By applying Ng's systematic approach, you can cut through the chaos and make methodical progress.