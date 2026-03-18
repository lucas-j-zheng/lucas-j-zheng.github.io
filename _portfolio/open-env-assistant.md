---
title: "OpenEnv Personal Assistant"
excerpt: "An RL environment where an agent manages a team calendar under shifting rules, evolving constraints, and ambiguous inbox requests — built for the OpenEnv Hackathon (March 2026)"
collection: portfolio
order: 0
---

[View on GitHub](https://github.com/lucas-j-zheng/open-env-assistant-environment)

## Overview

An RL environment where an agent manages a team calendar under shifting rules, evolving constraints, and ambiguous inbox requests. Built with the OpenEnv framework for the OpenEnv Hackathon (March 2026).

The agent must discover tasks from natural-language inbox messages, handle schema drift mid-episode (availability changes, new policies, meeting cancellations), negotiate with attendees who push back on proposals, and schedule around immovable personal events — all while 7 randomized interrupts fire at unpredictable steps.

## How It Works

- **`reset(seed)`** generates an initial calendar + inbox (4–7 events, 11 messages, 2 personal events)
- **`step(action)`** fires interrupts (if due), dispatches a tool call, and recomputes 18 flags
- **Reward** = flags earned / 18; episode ends when all 18 flags are earned
- Actions are JSON tool calls (e.g., `{"tool": "create_event", "args": {"title": "Standup", ...}}`)
- Observations are self-contained Markov snapshots — no conversation history needed

## Schema Drift

The environment changes mid-episode through 7 randomized interrupts:

- **CEO emergency** — urgent meeting injected at 3 PM, may conflict with existing events
- **Meeting cancellation** — a lunch meeting is cancelled, opening a slot
- **Reschedule request** — attendee asks to move a meeting to a new time
- **Availability change** — Bob's Wednesday schedule gets new blocked hours
- **Inbox contradiction** — a client changes their earlier request
- **Personal event shift** — family texts that dinner moved earlier, creating new conflicts
- **Description policy** — HR activates a rule: meetings >30 min need descriptions

Interrupt timing is randomized per seed — agents can't memorize when they fire.

## Tools & Tasks

15 tools across calendar management, scheduling, constraints, communication, and personal calendar. 18 tasks weighted by difficulty (hard 1.5x, medium 1.0x, easy 0.5x), including negotiation, conflict resolution, schema drift handling, and work-life balance.

## Training

Trains a Qwen2.5-3B-Instruct model with QLoRA + GRPO (group size 3, cross-seed advantages, 40 steps/episode). Designed for ~2 hours on an H100.
