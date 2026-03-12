---
layout: page
permalink: /thesis/
title: Thesis
description: Dissertation overview and downloadable PDF.
nav: true
nav_order: 4
page_pdf: /files/thesis.pdf
toc:
  sidebar: left
---

You can download the full dissertation PDF using the button above.

---
### How I would describe my thesis

During my PhD, my research took many shapes and turns, but the unifying thread across most of my work has been **Machine Learning**, especially in *human-related* settings. With that, my thesis spans in three parts-- distinct enough to warrant their own focus, yet logically connected to form a coherent narrative.

**Learning Human Signals**: I started during the COVID-19 pandemic, working on identifying patterns in human biosignals that could support early detection of health deterioration in COVID-19 patients (such as ICU admission, intubation, or mortality).

**Learning Human Behavior**: Over time, my focus shifted from **Learning about Humans** to **Learning from Humans**. I worked on Learning from Demonstration (LfD) using probabilistic modeling, where I contributed to improving both the modeling and regression stages of mixture-model-based LfD methods. I also proposed ways to inject task information directly into these probabilistic models, enabling more contextual and task-aware learning.

**Learning Human Intent**: Building on this foundation, I moved toward learning the *Objective and Intent* underlying human demonstrations, framing learning in a more interpretable and principled way. This direction not only supports human intent and behavioral analysis, but also enables cost inference for robotic systems through physical Human–Robot Interaction—ultimately benefiting Learning from Demonstration in a more comprehensive and grounded manner.

---

### Abstract

This thesis investigates how intelligent systems can understand human state, behavior, and intent under conditions of data scarcity, variability, and suboptimality. Robots operating alongside humans must infer internal state, interpret behavioral patterns, and anticipate future actions despite limited sensing and incomplete demonstrations. To address these challenges, this work develops data-efficient machine learning methods across three complementary axes of human-centered modeling: **learning human states**, **learning human behavior**, and **learning human intent**.

First, we study the problem of physiological state inference using minimal temporal data. Based on dilated LSTMs and Temporal Convolutional Networks, we design deep sequence models that predict imminent health deterioration of COVID-19 patients from only three vital signs and basic demographic information. Trained on 37,006 patients, these models achieve high prognostic performance across 3- to 24-hour horizons, demonstrating that clinically meaningful patterns can be extracted from extremely low-dimensional inputs.

Second, we develop statistically expressive probabilistic models to learn human behavior from small sets of demonstrations. We introduce FiMReSt, a regulated finite mixture of multivariate skew-t kernels, enabling stable, flexible modeling of skewed, heavy-tailed motion data. We also propose Skew-Normal Mixture Regression (SNMR) for learning compact, generalizable trajectory representations, and extend classical Learning-from-Demonstration frameworks by incorporating context-aware optimality scores that mitigate the impact of suboptimal or inconsistent demonstrations. These methods allow robots to learn behavior distributions more accurately, especially in few-shot conditions.

Finally, we address the challenge of inferring human intent through Inverse Reinforcement Learning (IRL). We propose Minimum Observation IRL (MO-IRL), an iterative algorithm capable of recovering latent cost functions using sparse, partially observed human trajectories while exploiting natural non-optimality. Applied to both synthetic systems and biomechanical human-arm models, MO-IRL uncovers meaningful cost structures and enables accurate prediction of human demonstration and motion. We further demonstrate subject-independent cost inference, revealing shared behavioral principles across individuals.

Together, these contributions establish a unified framework for data-efficient learning in embodied intelligence to support robust inference of human states, behaviors, and intents under real-world constraints. The methods developed here help move robotics closer to truly human-centered, adaptive, and interpretable interaction capabilities.