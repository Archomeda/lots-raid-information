---
layout: default
title: "Gorseval: Strategy"
breadcrumb_title: Strategy

raid_encounter_name: Gorseval the Multifarious
raid_encounter_page_name: Strategy
raid_encounter_page_weight: 2
---

# Gorseval: Strategy
Since we want to help everyone getting their Gorseval kill, we have listed our strategy here for easy reading.
The strategy is explained chronologically.

{% assign phases_width = "" | split: "|" %}
{% assign phases_title = "" | split: "|" %}
{% assign phases_class = "" | split: "|" %}
{% assign phases_details = "" | split: "|" %}


{% assign phase_width = "6%" %}
{% assign phase_title = "Setup" %}
{% assign phase_class = "phase-purple" %}
{% capture phase_details %}
## Setup
The commander places squad markers in the NW, NE, SE and SW area of the arena.
These markers do not only indicate where the updrafts are, but also where the Charged Souls will spawn.
{% endcapture %}
{% assign phases_width = phases_width | push: phase_width %}
{% assign phases_title = phases_title | push: phase_title %}
{% assign phases_class = phases_class | push: phase_class %}
{% assign phases_details = phases_details | push: phase_details %}


{% assign phase_width = "28%" %}
{% assign phase_title = "Phase 1" %}
{% assign phase_class = "phase-green" %}
{% capture phase_details %}
## Phase 1
This phase is the easiest.
During this phase, the only mechanics that are active, are: **stomp attack**, **CC phase**, **spirits** and **channel phase**.

### Course of battle
- DPS phase
- CC phase
- Spirits
- Channel phase
- DPS phase
- CC phase
- Spirits
- Channel phase

During the DPS phases, the tank keeps Gorseval at one spot, facing away from the rest of the group, so that everyone can unload their DPS on Gorseval without having to worry about running after it.
Be aware that Gorseval has to reach its **Charged Soul phase** before the last channel has been finished (ideally way before that).

### Stomp attack
Occasionally Gorseval does its stomp attack.
Gorseval swings its arm up in the air, right before smashing it down on the ground.
This attack deals some damage which can be healed pretty easily, but it has to be dodged **always**.
If a player does not dodge and gets hit by it, the player is knocked back for a few seconds.
During that time the group will miss the DPS from that player.

### CC phase
Right before Gorseval goes into its CC phase, it yells a particular line of text and teleports back to the center.
It keeps stomping on the ground until broken, while also spawning **dark blue rings** on top or around itself.
These rings have to be avoided at all times.
While it's stomping, be aware of his special boon that works similar as **retaliation**, so wait until it's broken before fully unloading your skills.

### Spirits
After the CC phase, Gorseval spawns spirits around him.
They can cause knockbacks, so be careful around the edges of the arena when the wall has been broken.

### Channel phase
After Gorseval has spawned the spirits, the tank has to move Gorseval to the **NW corner of the arena** while everyone follows.
When at the right position, the spirits have to be pulled if they are not yet near the rest of the group.
Everyone has to prioritize killing the spirits and the barrier, and when that's done, damaging Gorseval as much as possible.
Gorseval should start channeling soon if it hasn't started already.
When the channel is almost done, everyone should **glide towards the updraft and back again**.
This will cause the NW updraft to disappear, so it can't be used again.
{% endcapture %}
{% assign phases_width = phases_width | push: phase_width %}
{% assign phases_title = phases_title | push: phase_title %}
{% assign phases_class = phases_class | push: phase_class %}
{% assign phases_details = phases_details | push: phase_details %}


{% assign phase_width = "5%" %}
{% assign phase_title = "Souls" %}
{% assign phase_class = "phase-blue-striped" %}
{% capture phase_details_split %}
## Charged Soul phase
In this phase, 4 Charged Souls will spawn, while Gorseval becomes invulnerable.
These Charged Souls have to be killed before they reach Gorseval.

### Player assignment
3 players with a permanent upkeep of a combination of *immobilize*, *chill* and *cripple* have to go to the **NE**, **SE** and **SW Charged Souls**.
The rest of the players go to the **NW Charged Soul**.

### Charged Souls
The group has to kill the Charged Soul they are at as fast as possible.
When one has been killed, the group moves to the next one in a **clockwise manner**.
If, for some reason, a player needs help to slow down a Charged Soul, an extra player has to go and help.
{% endcapture %}
{% assign phases_width = phases_width | push: phase_width %}
{% assign phases_title = phases_title | push: phase_title %}
{% assign phases_class = phases_class | push: phase_class %}
{% assign phases_details = phases_details | push: phase_details_split %}


{% assign phase_width = "28%" %}
{% assign phase_title = "Phase 2" %}
{% assign phase_class = "phase-yellow" %}
{% capture phase_details %}
## Phase 2
This is where it gets a little bit harder.
During this phase, the following mechanics are active: **stomp attack**, **blue orbs**, **CC phase**, **spirits** and **channel phase**.
The mechanics of the stomp attack, CC phase and spirits are still the same (as explained in phase 1).
Also, the course of the battle is still the same as phase 1.

### Blue orbs
These orbs will spawn randomly in the arena.
Their AoE will slowly expand until it covers a quarter of the arena.
If a player happens to get caught in the AoE, that player will have a major debuff which is indicated by an icon above their head and in their boon icons area.
Grabbing a golden orb will clear 5 stacks.

One or two ranged players will have to kill these orbs in the following priority areas:

- During first DPS phase: **center** (for the CC phase)
- When clear, until channel phase: **NE** (for the next updraft)
- After gliding: **center** (for the CC phase)
- When clear: **NW** (for the Charged Soul phase)
- When clear and if needed: **NE**, **SE**, **SW**

### Channel phase
The channel phase is the same as in phase 1, with the only exception being that the tank has to move Gorseval to the **NE corner of the arena**.

{% endcapture %}
{% assign phases_width = phases_width | push: phase_width %}
{% assign phases_title = phases_title | push: phase_title %}
{% assign phases_class = phases_class | push: phase_class %}
{% assign phases_details = phases_details | push: phase_details %}


{% assign phase_width = "5%" %}
{% assign phase_title = "Souls" %}
{% assign phase_class = "phase-blue-striped" %}
{% assign phases_width = phases_width | push: phase_width %}
{% assign phases_title = phases_title | push: phase_title %}
{% assign phases_class = phases_class | push: phase_class %}
{% assign phases_details = phases_details | push: phase_details_split %}


{% assign phase_width = "28%" %}
{% assign phase_title = "Phase 3" %}
{% assign phase_class = "phase-orange" %}
{% capture phase_details %}
## Phase 3
This is the hardest phase.
During this phase, the following mechanics are active: **stomp attack**, **blue orbs**, **traps**, **CC phase**, **spirits** and **channel phase**.
The mechanics of the stomp attack, CC phase and spirits are still the same (as explained in phase 1).

### Course of battle
The course of battle is generally the same as phase 1, but, depending on the group DPS, there are two variations.

#### Variation 1
If Gorseval's HP does not fall below 10-15% when coming back from the **SE updraft**, the group has to make use of the **SW updraft** after the second CC phase (as can be seen in phase 1).

#### Variation 2
If Gorseval's HP is below 10-15% after coming back from the **SE updraft**, the group can try and kill Gorseval before his next channel finishes.

### Blue orbs
This mechanic is the same as in phase 2, but with a different priority:

- During first DPS phase: **center** (for the CC phase)
- When clear, until channel phase: **SE** (for the next updraft)
- After gliding: **center** (for the CC phase)
- If going for the 4th updraft: **SW**
- Ignore orbs and deal as much damage to Gorseval as you can

### Traps
Traps are AoE circles that will occasionally spawn under every player's feet.
They are indicated by red/orange circles and, as long as you are standing in it, an arrow is visible above you pointing downwards.

A player has to get out of it as fast as possible before getting caught.
If caught, the special action key (by default '-') must be pressed repeatedly in order to get out.
Additionally, other players can help an encased player by killing the cage.

### Channel phase
The channel phase is the same as in phase 1, with the only exception being that the tank has to move Gorseval to the **SE corner of the arena**.
And optionally, as noted in the course of battle, the second time to the **SW corner of the arena**.

{% endcapture %}
{% assign phases_width = phases_width | push: phase_width %}
{% assign phases_title = phases_title | push: phase_title %}
{% assign phases_class = phases_class | push: phase_class %}
{% assign phases_details = phases_details | push: phase_details %}

{% include templates/strategy.html phases_width=phases_width phases_title=phases_title phases_class=phases_class phases_details=phases_details %}


## Change history
17 March 2016 *(Archomeda)*:
: - Initial draft
