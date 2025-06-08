---
title: "Engineering from 0 to 1"
pubDate: 2025-02-14
author: "Adam Bossy-Mendoza"
showToc: true
emoji: "🏁"
description: "A comprehensive guide to navigating the chaotic but exhilarating journey of building from scratch in a startup environment."
---

Building from 0 to 1 in a startup is an exhilarating, chaotic, and deeply creative process. It's fast, scrappy, and often uncomfortable—but that discomfort is a sign you're doing it right. In contrast, going from 1 to n—scaling, maintaining, and refining—comes with the weight of inherited mistakes, technical debt, and increasing process overhead.

If you're in the trenches of the 0 to 1 phase, here's what you need to know.

![Startup team collaborating](https://res.cloudinary.com/dwt45tvzy/image/upload/v1740535198/0-to-1_elnupm.jpg)

### Ask for Forgiveness, Not Permission

At a large company, the instinct is to ask first, then act. At a startup, especially in the 0 to 1 phase, the reverse is often true: default to action unless your instincts tell you otherwise.

Engineers in early-stage startups need to assess the risk, importance, and reversibility of their decisions. Many choices will be low-risk and easily reversible, so waiting for approval only slows things down. You need to trust your intuition and move forward, making adjustments as needed.

However, knowing when to pause is equally important. If a decision has long-term consequences, significant cost, or regulatory implications, that's when you step back and consult the team. Developing the ability to distinguish between when to ask and when to act is crucial in startup engineering.

### Understanding the Core of the Business

Not all parts of a startup's codebase are equally important. You need to understand what the core of the business is and how the code that serves that core will evolve over time. The core—typically essential business logic—should be the most carefully engineered and resilient to future changes. Decisions here have long-term consequences, so they should be well thought out.

By contrast, peripheral elements don't require the same level of rigor. These might include experimental features, internal tools, or other non-critical systems. These areas can be more flexible, scrappy, and disposable. Knowing the difference between core and periphery helps prioritize engineering effort and avoids over-investing in areas that may not matter long-term.

![Core of the Business](https://res.cloudinary.com/dwt45tvzy/image/upload/v1740535199/core-of-the-business_yxlq4q.jpg)

### Start Simple, But Not Too Simple

Avoid over-engineering, but also avoid under-engineering core elements like authentication, authorization, and data models. Future-proofing doesn't mean overbuilding—it means leaving room for evolution.

### Treat (almost) everything like it's in beta

The beauty of early-stage development is that nothing is set in stone. You're learning about the problem, not delivering the perfect answer. Assume that you'll return to every major decision multiple times as the product matures.

That said, not everything can be scrappy. Data integrity must always be high, and if you're working in a compliance-heavy space (e.g., fintech, healthcare), there are hard constraints you can't ignore. But in most other cases, a relentless focus on speed will beat premature optimization every time.

### Managing Technical Debt

Not all tech debt is bad, but you need a clear strategy for which shortcuts are acceptable. Quick UI hacks? Fine. Sloppy data modeling? A future nightmare. Be intentional about when to clean up and refactor.

### Feedback Loops Are Your Lifeblood

Fast iteration cycles are non-negotiable.

* Your deploys should be fast.
* Your migrations should be fast.
* Your feedback loops should be fast.

The moment these cycles start to slow down—even slightly—you need to fix them immediately. Speed compounds. A slow deploy today is a blocker for tomorrow. A slow CI pipeline is death by a thousand cuts. Keep everything as lightweight as possible for as long as possible.

![Fast-paced development](https://res.cloudinary.com/dwt45tvzy/image/upload/v1740535824/feedback-loops_ggma7j.jpg)

### Lean but Effective Testing

Many early-stage engineers abandon testing entirely for speed, but testing can actually be a way to harness speed. This may feel paradoxical because writing tests takes time, but having reliable tests allows you to move quickly and safely. Good tests give you the confidence to ship fast without fear of breaking critical functionality.

Again, referring back to the core business logic, this is where you should be strategic about investing time in testing. Instead of testing everything or testing nothing, be smart about where testing matters most. Core business functionality that will remain central to the company should have solid test coverage, while experimental features or peripheral areas can afford to have lighter testing.

### Embrace the Uncomfortable Speed

"If you're not embarrassed by your first release, you've launched too late."

Reid Hoffman's famous quote rings especially true for engineers who default to perfectionism. Your code should be just good enough to work. Polish comes later—what matters now is getting a working prototype in front of users and iterating based on real feedback.

There's no room for over-planning in the 0 to 1 phase. Your team is small, your codebase is greenfield, and you don't have legacy systems or bureaucratic processes slowing you down. Use this to your advantage—just write the damn code.

### Embracing Pivoting

Pivoting will be something you need to embrace. It can be frustrating to be working on a project only to have it interrupted because something shifted in the market or because an anchor customer is asking for something unexpected. But you should expect it. Startups pivot frequently, and the more you embrace this reality, the better you and the company will adapt.

These pivots are usually small—it's not about a full company overhaul but rather a winding road that takes more turns than you'd initially expect. The key is to build a generalizable mental model around the problem space, one that evolves with you but doesn't become so abstract that it becomes a burden. A flexible but grounded approach will make it easier to iterate without losing direction.

### Greenfield vs. Brownfield: The AI Factor

In today's world, AI can supercharge Greenfield development—you need a ton of code fast, and AI is great at generating first drafts. Brownfield development, however, is a different beast. When working with an existing codebase, you need to understand architectural patterns, conventions, and legacy behavior. AI struggles with this because it lacks the context that experienced engineers gain over time.

This is why going from 1 to n feels harder—you're not just building; you're navigating and preserving. Your role shifts from creator to maintainer, and AI alone won't save you from the complexities of an aging codebase.

### The Shift from 0 to 1 to 1 to n

You won't stay in the 0 to 1 phase forever. Gradually, you'll notice these shifts:

* Code review processes tighten. You'll spend more time waiting for approvals and ensuring changes don't break existing functionality.
* Versioning and backward compatibility become critical. Changing a data model becomes an exercise in risk mitigation.
* Deploys slow down. What was once a one-click deploy becomes a carefully orchestrated rollout.
* Reading code becomes as important as writing it. You'll spend more time understanding someone else's choices than making your own.

### Third-Party Services: A Necessary Shortcut

Early on, third-party services are a huge accelerant. Need logging? Monitoring? Error tracking? Just spin up a service and move on. Vendor lock-in is a problem for later. If your startup fails, who your vendors were won't matter—but if using the right tool today helps you survive, it's worth it.

Big companies can afford to overanalyze vendor decisions. Startups can't. The goal isn't to make the perfect choice—it's to unblock yourself and ship.

### Final Thoughts

Going from 0 to 1 is about bias toward action, ruthless prioritization, and an obsession with speed. You won't get everything right, but that's not the point—the point is to build momentum. Every mistake is a learning opportunity. Every quick iteration is a step forward. The faster you learn, the better your startup's chances of survival.

And when you do make it to 1 to n, you'll look back at those wild, chaotic days with nostalgia—before the codebase got bloated, the PR process got slow, and every decision had layers of complexity. As my friend, Mahendra Maheshwara famously says, "Coding is a luxury. Enjoy it while it lasts."