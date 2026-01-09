---
title: "Building Transactoid: The Shift Away From Determinism"
pubDate: 2026-01-09
author: "Adam Bossy-Mendoza"
showToc: false
emoji: "🤖"
description: "How I built Transactoid by stripping away deterministic guardrails and let the model be free."
headerImage: "/transactoid-icon.png"
---

I set out to write [Transactoid](https://github.com/adambossy/transactoid) because I wanted a better Mint.com.  

As you probably know, reader, every tool in the history of personal finances is terrible at correctly categorizing your expenses. This in turn poisons the well for any meaningful analysis. If your coffee spend ends up hidden inside "General Merchandise," you'll never truly know where your money is going.

When I was younger and extremely budget-conscious, I solved this by brute force. I would painstakingly review every single transaction, one by one, recategorizing them until they reflected my personal truth. It was tedious, but it was correct, and gave me insights I needed to make behavioral changes and save money. So when I started building Transactoid, my instinct was to build a tool that made a better first pass at categorization using LLMs, expediting my review process.

I quickly realized I was just building a job for myself. I don't have time for this shit anymore! And then I realized that every decision I was making could be automated, not by traditional ML classifiers, but by LLMs with Web Search tools.

## The Search for Ground Truth

Personal finance tools, such as those that your bank provides, often have cryptic merchant descriptors such as `CHECKCARD 0802 NOTD NYC WWW.NOTDNYC.CNY XXXXX1642XXXXXXXXXX7235`. In the old paradigm, I would Google these to find out what they are (they typically don't contain a domain name!). I'd find the vendor page, deduce the category, and tag it.

It turns out, this is trivial to automate. I enabled the web search tool that every LLM provider now offers and gave it a simple instruction: *If you aren't sure, Google it.*

The results were apparent right away. Much of the time, the merchant descriptor exists in the model's parametric knowledge and it knows exactly what to do with it. But not always.

When in doubt, the agent would see a cryptic string, search the web, find the merchant, make a determination, and categorize it. I tracked confidence scores before and after the search capability was added, and it categorized correctly virtually every time. The "categorization problem" was solved not by traditional techniques, but by letting the model be curious.

Interestingly, a tool named Tally got traction on [Hacker News](https://news.ycombinator.com/item?id=46475218) while I was building this. Their approach was to have humans hand-write every "rule" for categorization that they care about. Not much better. Not only that, but the post gave way to a long discussion about the correct implementation strategy, and not a single person proposed this approach—most of them were stuck in a *deterministic* mindset.

## The Architecture of "Lazy"

My initial architecture suffered from the same "control freak" tendency. I started by manually exporting CSVs from 7 or 8 different accounts to get a snapshot of my finances. The data steadily grew stale as I developed. I couldn't ask up-to-the-minute questions like, "hey, am I spending too much on inference to build this thing?"

I was writing complex upserting logic to transform these CSVs into database rows and handling duplicates to preserve idempotency.

I got tired of exporting CSVs so I decided to be lazy and connect Plaid. As it turns out, Plaid's sync logic is nearly identical to the code I had written—it fetches the delta since the user's last sync, handling the upsert for me. I added Plaid Link support (which covers all the accounts I care about, including Venmo!), and suddenly I chopped the sync code down to about 50 lines. So, of course, I added complexity back to it by parallelizing it to improve performance. But all in all, victory!

I made similar mistakes with the query layer. I had this rigid mental model that every user question required two distinct queries:

1. **The Aggregate:** "You spent $100 on coffee."
2. **The Drill-Down:** "Here are all the $5 transactions that make up that $100."

I planned to build a specialized tool to generate these SQL queries, and then—because I was terrified of the embarrassing prospect of deleting data—I planned a separate verifier to judge the SQL (or perhaps merely just check for the `DELETE` keyword) before it ran, ensuring I didn't nuke my database.

This turned out to be shortsighted over-engineering. I didn't need a dedicated SQL generator or one thing judging another. I just pushed SQL generation to the top-level agent loop. When the agent needs data, it writes the SQL parameters for a `RunSQL` tool. The tool just connects to the database (Supabase) and returns the rows.

I stripped away the guardrails. I removed the "safety" checks. I stopped trying to force the agent into a deterministic box. I had it use Markdown tables to render reports and they turned out perfectly.

As I removed these constraints, I noticed the agent's latent capabilities began to emerge. I realized it had an extreme amount of fidelity into my financial life, and it could make startingly precise budget recommendations, well beyond what ChatGPT will ever give you, since ChatGPT likely won't integrate bank access any time in the future. The next logical step is to have this running as an ambient agent, so that it yells at me when I've gone overbudget.

## Custom Taxonomy and The "Treat" Index

The result is something that feels illegal to have in a personal finance app: **maximum customization.**

Another limitation of these tools is that they lock you into their their taxonomy. Not always. Mint.com allowed you to add categories, but the UI was a little painful and porting over old transactions to the new category was a little painful.

In Transactoid, I have a category called "Treats" because the amount of treats my wife and I purchase for ourselves living in New York City is a problem (of all its merits, NYC is best described as a city of treats, and I will fight you on this).

No bank knows what a "treat" is. It's a context-dependent purchase that I define based on my lifestyle. Because of how fluidly categorization is set up, it can fluidly map the rigid financial world to my personal reality, and it's as easy as having the agent make the right tool calls. And as a result, Transactoid allows me to apply this category to transactions uniformly across **all** bank accounts.

## Conclusion

It is almost embarrassing how simple the final architecture ended up being. An agent is really just a system prompt and a handful of tools, and with just this, agents surpass the capabilities of their SaaS equivalents by extraordinary margins. To be sure, I need to tune it quite a bit, and that'll take time. But the baseline result is far, far better than I expected.

Of course, I probably could have gotten from point A->Z much quicker from the outset if I knew precisely what I was going to build. But with the time-cost of engineering collapsing, I spent most of my energy discovering what the product should be. Given the recent advances in reasoning models, "an agent" will likely be the default choice for many of my future projects, and I've begun to write detailed [Claude Skills](https://github.com/adambossy/ai-skills-library) to spin up agents on a whim.

I don't know how much credit I can take for the agent's intelligence. I am simply letting the model run wild on interesting data. But I do know that by stripping away the deterministic guardrails and embracing the "fuzzy" nature of LLMs, I've stumbled upon what I can only call the unreasonable effectiveness of unstructured finance—a tool that offers deeper insight into my life than any disciplined, hard-coded software ever could and berates me when I spend so much damn money at Radio Bakery.

🗂️ Repo: (github.com/adambossy/transactoid)[https://github.com/adambossy/transactoid]
