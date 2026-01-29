---
title: "Kalshi Alpha Agent"
excerpt: "Natural language to prediction market trades with human-in-the-loop approval"
collection: portfolio
order: 6
---

[Try the Demo](https://huggingface.co/spaces/lzheng35/kalshi-alpha-agent) | [View on GitHub](https://github.com/lucas-j-zheng/kalshi-agent)

## Overview

An AI agent that converts natural language convictions into actionable prediction market trades on Kalshi—with mandatory human approval for every transaction.

## How It Works

1. **Analyze** - Extract trading intent from natural language (e.g., "I think BTC hits 100k by March")
2. **Search** - Semantic search across 30,000+ Kalshi markets using embeddings to find relevant contracts
3. **Propose** - Generate trade proposals with recommended position sizing
4. **Approve** - Human reviews and clicks [APPROVE] to execute (Ghost Token validation)
5. **Execute** - Trade placed on Kalshi

## Key Design Decision

**Not an auto-trading bot.** Every trade requires explicit human approval via the Ghost Token security pattern. This ensures the agent assists decision-making without autonomously risking capital.

## Technical Highlights

- **Semantic Market Search:** Embedding-based retrieval over 30k+ prediction markets
- **Intent Extraction:** NLP pipeline to parse trading convictions from free-form text
- **Ghost Token Pattern:** Security mechanism requiring human confirmation before any trade execution
