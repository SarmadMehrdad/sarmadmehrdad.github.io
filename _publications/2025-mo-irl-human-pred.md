---
title: "Learning Human Reaching Optimality Principles from Minimal Observation Inverse Reinforcement Learning"
collection: publications
permalink: /publication/2025-mo-irl-human-pred
category: recent
excerpt: '**Elevator Pitch:** We used MO-IRL on human-subject data for reaching tasks initiated from various postures to see how the assumed cost features would factor into a human’s motion for reaching — basically, what a human is trying to optimize. Another important avenue we pursued was using multiple weight sections throughout the course of human-generated trajectories instead of constant weights (as in MPC, for example). <br>**Spoiler Alert:** Joint acceleration is the most important feature for a human to modulate in a reaching task.' 
date: 2025-09-30
venue: 'arXiv'
paperurl: 'http://sarmadmehrdad.github.io/files/mo-irl-human-pred.pdf'
---

Abstract: This paper investigates the application of Minimal Observation Inverse Reinforcement Learning (MO-IRL) to model and predict human arm-reaching movements with time-varying cost weights. Using a planar two-link biomechanical model and high-resolution motion-capture data from subjects performing a pointing task, we segment each trajectory into multiple phases and learn phase-specific combinations of seven candidate cost functions. MO-IRL iteratively refines cost weights by scaling observed and generated trajectories in the maximum entropy IRL formulation, greatly reducing the number of required demonstrations and convergence time compared to classical IRL approaches. Training on ten trials per posture yields average joint-angle Root Mean Squared Errors (RMSE) of 6.4 deg and 5.6 deg for six- and eight-segment weight divisions, respectively, versus 10.4 deg using a single static weight. Cross-validation on remaining trials and, for the first time, inter-subject validation on an unseen subject's 20 trials, demonstrates comparable predictive accuracy, around 8 deg RMSE, indicating robust generalization. Learned weights emphasize joint acceleration minimization during movement onset and termination, aligning with smoothness principles observed in biological motion. These results suggest that MO-IRL can efficiently uncover dynamic, subject-independent cost structures underlying human motor control, with potential applications for humanoid robots.

Cite: 

Mehrdad, Sarmad, Maxime Sabbah, Vincent Bonnet, and Ludovic Righetti. "Learning Human Reaching Optimality Principles from Minimal Observation Inverse Reinforcement Learning." arXiv preprint arXiv:2510.00329 (2025).