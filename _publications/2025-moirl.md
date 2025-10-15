---
title: "Cost Function Estimation Using Inverse Reinforcement Learning with Minimal Observations"
collection: publications
permalink: /publication/mo-irl
category: recent
excerpt: '**Elevator Pitch:**  In this study, we took MaxEnt IRL and made it iterative. Similar to optimal control, where a step direction and size are computed and taken at each iteration until convergence, we update the cost function weights in the same fashion. The plot twist is that we compute the step direction for the weights using MaxEnt IRL and determine the step size through a step-acceptance scheme (similar to a filter line search). <br>**Spoiler Alert:** When we compute the weight changes using MaxEnt IRL, the non-optimal trajectories get naturally weighted based on <i>how</i> non-optimal they are!! Cool, right?! <br> **Personal Note:** I really like this work.'
date: 2025-05-13
venue: 'IEEE/RSJ International Conference on Intelligent Robots and Systems 2025'
paperurl: 'http://sarmadmehrdad.github.io/files/mo-irl.pdf'
---

Abstract: 

We present an iterative inverse reinforcement learning algorithm to infer optimal cost functions in continuous spaces. Based on a popular maximum entropy criteria, our approach iteratively finds a weight improvement step and proposes a method to find an appropriate step size that ensures learned cost function features remain similar to the demonstrated trajectory features. In contrast to similar approaches, our algorithm can individually tune the effectiveness of each observation for the partition function and does not need a large sample set, enabling faster learning. We generate sample trajectories by solving an optimal control problem instead of random sampling, leading to more informative trajectories. The performance of our method is compared to two state of the art algorithms to demonstrate its benefits in several simulated environments.

Cite: 

Mehrdad, Sarmad, Avadesh Meduri, and Ludovic Righetti. "Cost Function Estimation Using Inverse Reinforcement Learning with Minimal Observations." arXiv preprint arXiv:2505.08619 (2025).