---
title: "What Programming Language Should I Learn First"
date: 2023-06-27
draft: true
---

_First, **a disclaimer**. I'm not a polyglot programmer. I've touched a few languages in my career, read a few more, but professionally, I've only spent time with two'ish. It's also worth noting there are individuals who are incredibly passionate about their language of choice and have no problems telling you why the language you've chose is garbage. They will spend an inordinate amount of time during their career doing this. The rest of us will be off enjoying our time programming in a language that brings us joy, regardless of some stranger's opinion It's likely we're strangers. So do with this what you will._

---

##### Million Dollar Question

Someone asked me what programming language should they learn if they wanted to learn to code. It came with the caveat of "to make the most money possible". I don't know the answer to that last part, though the first thing that came to mind having heard multiple times throughout my career, _very_ good Java developers can get paid a lot of money to build Android apps. And I can't necessarily answer the first question either, at least not definitively, because as I've gotten older, even as much as I dislike this answer _very_ much, the answer is _"it depends"_. I know, like I said, I don't like it either. _But_ I think I can shed some light on some languages and at the end, I will give my biased opinion.

---

#### The Fundamentals

##### Types

It's been my experience, when learning a new language, after the ["Hello World"](https://en.wikipedia.org/wiki/%22Hello,_World!%22_program), languages dive into [types](https://en.wikipedia.org/wiki/Type_system). These are often `strings` or `integers` or `dicts` or `booleans` and many more. And in my experience, every language has them, they _might_ call them something different and that's the [syntatic sugar](https://en.wikipedia.org/wiki/Syntactic_sugar). It is my belief and I know this is shared among others based on past conversations, that once you learn the fundamentals, regardless of the language, to learn the new language you just need to learn the language's _syntatic sugar_. This often contributes to learning new languages faster going forward.

---

##### Static vs Dynamic

Beyond types, in my mind, the two differentiators are a static type language or a dynamic type language. (as I type this, there's probably value in talking about functional vs OOP). Everybody's mind works a little differently. And it's those differences that may make you enjoy a dynamic language and despise a static language or vice versa. I learned with a dynamic language (Python), then moved to a static language (Golang) and I have to say, I _really_ like declaring types rather than the wishy-washy nature of a dynamic language. But I work with individuals who are very vocal about having to declare types. I see the value in types, they do not. There's a time and place for both. Only advice I can give here is dip your toes in the water of both a dynamic language and a static language and see what fits your brain.

---

##### OOP vs Functional

Insert things here

---

##### So Which Language Should You Learn

It still depends. My list goes like this in no particular order, for now.

- Python
  - After many failed attempts at various Microsoft languages (Visual Basic, .Net), Python was the first language that I sort of got. It didn't immediately click, I fought like hell to wrap my head around it and wrangle it, but the day finally came with things _did_ click. Python is dynamically typed and is often done is in an Object Oriented Manner, though it can be written in a Functional pattern (I've never done this).
- Ruby
  - Ruby _can_ be like Python. It can also be like Perl. Don't write Ruby like Perl, write Ruby like Python. Ruby is a dynamically typed language with a lof of similarities to Python. I got hurt by Ruby's package management too many times and spent my entire career avoiding it.
- TypeScript
  - TypeScript is JavaScript with static types. I can't recommend JavaScript, but I will recommend TypeScript because of the static types.
- Golang
  - I know many individuals who started their career in Python and made the jump to Golang to never look back. Golang is statically typed. This was likely driven by (at the time), Python's poor concurrency support. Go (short for Golang) does this really well. Also, Go is a compiled language which in the end gives you a _single_ file to run. Python and Ruby are not compiled languages and this can have some rough edges around packaging for a production environment.
- Elixir
- PHP

A short list of languages I can't recommend. Also, so it's said, just because a language isn't on the above list or the list below, doesn't mean that it isn't a good or bad language, it simply means I have no exposure or experience with it and can't say one way or the other.

- Java
- Perl

---

##### Resources

- Commonly referred to as the [Pickaxe Book](https://pragprog.com/titles/ruby5/programming-ruby-3-2-5th-edition/), this book was the first programming book I read that made things "click". And while I was learning Python at the time, it helped me better learn and understand Python (Ruby and Python have a lot in common). I needed to learn enough Ruby to be competent with [Chef](https://en.wikipedia.org/wiki/Progress_Chef) and this book was recommended by a coworker at the time.
