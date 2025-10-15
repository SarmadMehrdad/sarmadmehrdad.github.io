---
title: "Minimal Observations Inverse Reinforcement Learning for Predicting Human Box-Lifting Motions"
collection: publications
permalink: /publication/2025-mo-irl-box-lift
category: recent
excerpt: '**Elevator Pitch:** We used MO-IRL to identify the underlying cost function for a human box-lifting task. The data was collected from six healthy male adults. We found that MO-IRL outperformed previously proposed methods in estimating the optimal cost function. We also used multi-section weights, as it appears that human subjects tend to favor different features throughout the execution of a task. <br>**Spoiler Alert**: Humans love to tune their joint acceleration depending on where they are in the task!!'
date: 2025-09-30
venue: 'IEEE - International Conference on Humanoid Robots'
paperurl: 'http://sarmadmehrdad.github.io/files/mo-irl-box-lift.pdf'
---

Abstract: Heavy-load manual lifting poses a significant risk of injury, motivating the need for personalized robotic assistance. The Minimal Observations Inverse Reinforcement Learning (MO-IRL) algorithm has recently demonstrated strong capabilities in recovering underlying optimality principles from very few demonstrations of simulated robotic motions, and at a very reasonable computational cost. Building on this, the present study integrates ten biomechanically informed cost functions into a direct optimal control formulation to predict human motion during heavy-load manual box-lifting tasks. Contrary to previous literature, thanks to the computational efficiency of MO-IRL, we allow time-varying optimal weights and include a collision-avoidance constraint within the set of cost functions. This constraint represents the subject's apprehension of hitting the target table, As MO-IRL requires careful tuning of multiple hyperparameters, we employ a grid search to identify the optimal set. With this configuration, the predicted motion achieves an average accuracy of 11.5 ± 6.2deg across all joint angles, outperforming comparable methods. The inferred cost weights reveal a time-varying control strategy: initially minimizing lower-limb torques, then smoothing the motion through reduced joint accelerations and load velocity, and finally adjusting to avoid table collision. These findings show that biomechanically guided MO-IRL, coupled with direct optimal control, can accurately recover complex, constrained lifting motions while providing interpretable insights into human motor objectives, paving the way for adaptive and userspecific robotic assistance.

Cite: 

Sabbah, Maxime, Filip Bečanović, Sarmad Mehrdad, Ludovic Righetti, Bruno Watier, and Vincent Bonnet. "Minimal Observations Inverse Reinforcement Learning for Predicting Human Box-Lifting Motions." In <i>International Conference on Humanoid Robots 2025</i>. 2025.