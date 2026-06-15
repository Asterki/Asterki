---
title: "Building in Public: A Week of Side Projects"
date: 2026-06-14
draft: false
description: "What happens when curiosity wins over planning — a recap of seven days, three prototypes, and two all-nighters."
tags: ["projects", "personal", "coding", "side-projects"]
categories: ["Dev"]
cover:
  image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200"
  alt: "A desk setup with multiple monitors showing code"
  caption: "The command center — where ideas turn into messy prototypes."
---

## The Setup

It started, as most things do, with a notification I should have ignored. A random GitHub issue ping about a feature request for a project I hadn't touched in six months. Instead of closing the tab, I opened the repo. Two hours later I had rewritten the entire backend, and by morning I had committed a breaking change that I'd have to fix before anyone noticed.

That's the thing about side projects — they don't follow roadmaps.

## Monday — The AI Thing

I've been experimenting with RAG (Retrieval-Augmented Generation) for a while. The idea is simple: give an LLM access to a knowledge base so it answers from your data instead of making things up.

```python
# Simplified RAG query flow
def answer_from_knowledge(query: str, documents: list[str]) -> str:
    context = retrieve_relevant(query, documents)
    prompt = f"Based on this context:\n{context}\n\nAnswer: {query}"
    return llm.generate(prompt)
```

The tricky part isn't the generation — it's the retrieval. Getting the right chunks, ranking them correctly, and keeping latency under a second. By Tuesday I had something working, but it hallucinated on 30% of queries. By Wednesday I had it down to 8%.

## Thursday — The Hardware Detour

A friend needed help with an ESP32 project. "It's simple," he said. "Just read sensor data and push it to a dashboard."

![ESP32 microcontroller on a breadboard setup](https://images.unsplash.com/photo-1553408224-b11e4f9e71f3?w=800)

Four hours of debugging later, we discovered the issue was a loose ground wire. The hardware equivalent of a missing semicolon. I love and hate embedded development in equal measure.

## Friday — The Overengineered Solution

I spent Friday building a CLI tool in Rust to rename files in bulk. It's 847 lines of code, supports regex patterns, dry-run mode, undo functionality, and Unicode normalization.

The existing tools (`rename`, `mmv`, `vidir`) already do this better. But none of them are *mine*.

```rust
// The heart of it — simple, fast, mine
fn preview_rename(entries: &[RenameEntry]) {
    for entry in entries {
        println!("{} → {}", entry.from.display(), entry.to.display());
    }
}
```

## Saturday — Burnout and Reflection

I crashed hard on Saturday. Stared at the ceiling for three hours. Scrolled Twitter. Questioned my life choices. Wrote 200 words in my journal and deleted them.

Then I remembered why I do this:

> *"It all started the day I opened a random batch script full of commands I didn't understand. Instead of ignoring it, I began experimenting, changing lines, breaking it, copying it, fixing it again."*

That's still me. I just have better tools now.

## Sunday — The Cleanup

Sunday was for closing loops. I:

- ✅ Fixed the breaking change from Monday
- ✅ Wrote proper error messages for the CLI tool
- ✅ Documented the RAG pipeline for future-me
- ✅ Ordered a new soldering iron for the next ESP32 session
- ✅ Wrote this blog post

## Lessons

1. **Start before you're ready.** The best projects I've built started with zero planning.
2. **Break things on purpose.** The fastest way to learn a system is to break it and fix it.
3. **Document for your future self.** You *will* forget why you made that decision. Write it down.
4. **Hardware is humbling.** Software bends to your will. Hardware reminds you who's boss.
5. **Rest is productive.** A crashed Saturday beats a burned-out month.

## What's Next

I'm publishing this publicly — not because it's polished, but because *building in public* keeps me accountable. Next week I'll be working on the bus route editor interface and experimenting with WebSocket-based real-time GPS tracking.

If you read this far, thanks. Feel free to [reach out](/contact) — I'd love to hear what you're building.

---

*Cover photo by [Unsplash](https://unsplash.com)*
