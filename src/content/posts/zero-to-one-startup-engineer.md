---
title: "Engineering from 0 to 1"
pubDate: 2025-02-14
author: "Adam Bossy-Mendoza"
showToc: false
emoji: "🏁"
description: "A comprehensive guide to navigating the chaotic but exhilarating journey of building from scratch in a startup environment."
---

The engineering world is obsessed with best practices, clean code, and proper planning. But most of that advice assumes you're building at scale. The reality of going from 0 to 1 is much different: you don’t know what your requirements will be, and you don’t know whether you’ll even survive to your company’s next milestone.

You should assume you’re still learning what the customer problem actually is. And once you do know it, I can guarantee the solution will look very different from what you originally imagined. Recognizing and respecting these truisms must guide every move you make as a startup engineer, and will likely challenge everything you’ve been trained to do at scale.

Most engineers, myself included, have been taught to build things right. We plan, we architect, we optimize. But in the 0-to-1 phase, this instinct will destroy you faster than bad product-market fit.

![Startup team collaborating](https://res.cloudinary.com/dwt45tvzy/image/upload/v1740535198/0-to-1_elnupm.jpg)

## Perfectionism is the Root of all Evil

As engineers, we’re inclined to value our code quality as the prime indicator of our merit as engineers. But the reality of early-stage startups is that the market doesn’t care about code quality. Unfortunately, the proper modus operandi that makes perfectionist engineers (like me) deeply uncomfortable is that when going from 0 to 1, we must treat everything as though it's in beta.

Obviously, this isn't _always_ true. Data integrity has to stay high no matter what. Compliance requirements are non-negotiable constraints. But outside of those contexts, you can and _should_ be scrappy and non-perfectionist as much as possible.

As I said earlier, assume that you're learning about the problem, not writing a perfect answer. The parts of your codebase that turn out to be core to your business are those to which you’ll naturally return over and over. You'll learn what the problem actually is as you go and refine your solution iteratively, and your understanding and perspective of the appropriate solutions will evolve accordingly.

When Reid Hoffman says you should be embarrassed by your first release, I believe that this is ultimately what he means. The urgency with which you're operating should exceed the comfort you have with the quality of your code. If I sound like a perfectionist coping with this advice, that's because I am, and I think a lot of people in the industry struggle with this same tension.

## Ask for Forgiveness, Not Permission

As engineers, we've become trained to check in with stakeholders about the correct way to implement something before it's implemented. The reason for this makes sense at scale: implementation is expensive, so getting something wrong is expensive, so we must avoid doing the wrong thing.

In a startup environment, implementation is (relatively) cheap, so this caution becomes a liability. You often have direct access to customers, you might be able to contain the entire codebase in your head, and the scope of the business is constrained enough that you can have broad perspective on most decisions.

So you can make decisions for the business that are good enough and _ideally reversible_ in case they turn out to be wrong and need to be overturned. You make those decisions without needing to consult stakeholders for every single one. The trade-off is clear: you're trading speed for perfection or optimality and hoping that the cost of a few wrong decisions gets amortized across a huge amount of value creation you’re delivering.

## Fast Feedback Cycles are Sacred

During 0 to 1, _everything about building product should be fast_. Testing and deploying code should be fast. Wait times from colleagues should be fast. Getting a feature into production and getting feedback from users should be fast.

As soon as you feel these feedback cycles slowing, even just a little bit, it’s a sign that you should make a conscious effort to return them to their normal state. These fast feedback cycles let you build compounding value early in a startup's life. They let you take an idea, put it into code, put it in front of a customer, get feedback, learn from it, and iterate much faster than you can in a big company environment.

If you're failing to leverage this process advantage, you're missing out on the biggest competitive edge you have as a startup. Big companies can outspend you, they can out-hire you, but they _cannot_ move as fast as you can. Don't give up that advantage by prematurely optimizing for scale.

## When Everything Changes: The 0-1 to 1-N Transition

Nobody declares when the 0 to 1 stage is over. It happens gradually, then all at once. It happens to you, unwittingly, as product breakages mount and development speed slows, and it’s critical to notice that this is why. Continuing to operate with a 0 to 1 mindset in a 1 to N environment is bound to lead to disaster. What are the signs?

You’ll notice that you have to be much careful and precise about your changes, especially when you're changing the data model. By definition, your initial data model will be wrong as the product matures, and you’ll have to reckon with the initial design choices that were made. You’ll consistently have to do archaeology to understand how things work and how to maintain backwards compatibility, likely for the first time. You’ll find yourself adding layers of branching and conditions for special cases. Your code will started feeling bloated and annoying to maintain. The scope of your changes will likely shrink, and the cost of maintaining your test suite will grow. You’ll have to be very careful about the effect of your changes on areas of code outside your scope.

This transition is inevitable and necessary, but the key is recognizing _when_ it needs to happen and adapting your behavior (and your estimates) accordingly.

## Conclusion

The 0-1 phase requires a fundamentally different engineering mindset than what most of us are taught. It requires embracing uncertainty, moving uncomfortably fast, and being willing to throw away code that you spent days writing.

It requires taking problems and running with them without hesitating too much to get started. It means accepting that your first solution will probably be wrong, but that getting it in front of users quickly is more valuable than getting it right the first time.

Most importantly, it requires recognizing that the skills and practices that make you a great engineer at a mature company might actually make you a _liability_ in the early stages of a startup. The sooner you can embrace that discomfort, the better your chances of surviving to the point where all that conventional wisdom starts to matter again.
