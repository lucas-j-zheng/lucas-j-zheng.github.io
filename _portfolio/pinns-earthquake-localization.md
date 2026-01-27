---
title: "Earthquake Source Localization with RL-Enhanced PINNs"
excerpt: "Combining Physics-Informed Neural Networks with reinforcement learning for seismic source prediction"
collection: portfolio
---

[View on GitHub](https://github.com/lucas-j-zheng/PINNs-2470-final)

## Overview

A deep learning approach to predict earthquake and seismic event source locations from surface sensor readings, combining physics-based constraints with intelligent sampling strategies.

## Problem

Accurately localizing the source of seismic activity—whether natural earthquakes or fracking-induced events—is critical for safety monitoring and early warning systems. Traditional methods struggle with sparse sensor data and complex geological structures.

## Approach

- **Physics-Informed Neural Networks (PINNs):** Embed the wave equation directly into the neural network loss function, ensuring predictions respect physical laws governing seismic wave propagation
- **RL-Driven Adaptive Sampling:** Use reinforcement learning to intelligently select collocation points for training, focusing computational resources where they matter most
- **Marmousi2 Dataset:** Validated on the Marmousi2 synthetic geology benchmark, a standard testbed for seismic inversion problems

## Why It Matters

This project bridges deep learning and physics simulation while addressing a real-world safety challenge. The RL-enhanced sampling approach demonstrates how intelligent training strategies can improve PINNs performance on complex inverse problems.

## Course

CSCI 2470 - Deep Learning, Brown University
