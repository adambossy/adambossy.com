---
title: "dot-sync: Effortless Bidirectional Sync for Your dotfiles"
description: "A lightweight bash utility that keeps your dotfiles mirrored across machines with GitHub as the source of truth."
pubDate: 2025-11-12
author: "Adam Bossy-Mendoza"
showToc: false
emoji: "🌀"
---

I’ve wanted to build this tiny utility for over 15 years, but it never felt worth the effort until now.

Like most developers, I’ve got a handful of dotfiles (my <code>.bashrc</code>, <code>.vimrc</code>, and friends) that evolve naturally and somewhat chaotically as I try new tools and iterate on my setup. Over time, they grow annoying to track and they fall out of sync across machines. Inevitably, they break or I have to start over when I get a new machine.

I finally built **dot-sync**, a tiny bash utility that keeps my development environments tidy and consistent. Plot twist: it was written perfectly by AI.

## What dot-sync does

- Syncs dotfiles between your local system and GitHub
- Pulls updates back down cleanly
- Shows diffs before applying any changes
- Confirms every action before syncing
- Makes it almost impossible to lose track of your setup again

## The trickle-down effects of AI

This type of mundane problem is far from the bullseye of what AI labs are trying to solve. AI made it trivial to write, debug, and enhance something I’d postponed for over a decade. I just couldn’t have justified the time to dig into bash to achieve this level of quality. Not only did it get the shell logic right on the first pass, it even added features I wouldn’t have bothered to code myself. It _dramatically_ improved my developer experience as a result, and it’s led me to iterate on this about two-dozen times since initiating it.

## Why it matters

It’s a small project, but it’s made a big difference in how I work. If you’ve ever lost your favorite shell alias to a new laptop, this might save you some pain.

🌀 **Repo:** [github.com/adambossy/dot-sync](https://github.com/adambossy/dot-sync)

Feel free to fork it, swap in your own dotfiles, and make it your own.
