---
layout: default
title: "Vale Guardian: Strategy"
breadcrumb_title: Strategy

raid_encounter_name: Vale Guardian
raid_encounter_page_name: Strategy
raid_encounter_page_weight: 2
---

# Vale Guardian: Strategy
Since we want to help everyone getting their Vale Guardian kill, we have listed our strategy here for easy reading.
The strategy is explained chronologically.

You can watch and follow our first kill along with this strategy. It might be slightly different, but with this video you can see the Vale Guardian visually besides only reading text.
{% include templates/youtube-embed.html id="8DxXOF4ORbM" %}

{% assign phases_width = "" | split: "|" %}
{% assign phases_title = "" | split: "|" %}
{% assign phases_class = "" | split: "|" %}
{% assign phases_details = "" | split: "|" %}


{% assign phase_width = "6%" %}
{% assign phase_title = "Setup" %}
{% assign phase_class = "phase-purple" %}
{% capture phase_details %}
## Setup
We will group up a **pillar**, this can be every pillar, but the most used one is the **red or blue pillar**.
The tank will fetch the Vale Guardian *without* attacking him (just luring).
The other people who are standing near the pillar, have to *avoid getting hit* and *avoid hitting something*.
This also includes blue circles that spawn immediately after the Vale Guardian starts following the tank.
When the Vale Guardian is also standing at the pillar, everyone can start fighting.

{% capture message_edge_arena %}
**Be careful when near the edge of the arena!**
The barrier will activate a few seconds after the timer has started.
If you end up outside the arena, you will be killed and we will have to restart.
{% endcapture %}
{% include templates/messages/error.html message=message_edge_arena %}
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
During this phase, the only mechanics that are active, are: **green circles**, **blue circles** and **seekers**.
The tank keeps the Vale Guardian near the pillar (as explained in the setup), so that everyone can unload their DPS on the Vale Guardian without having to worry about running after him.

### Green circles
A team of **4 ranged players** go after these green circles, optionally with *1 ranged player* as a backup.
Their job is to call out the green circles when they spawn and run towards them.
At least 1 **seeker** will be there most of the time as well, so these players have to save their knockbacks, immobilizes, chill and cripple for these enemies.
If a player can't make it (or is unsure), he or she *has to call it out* so that someone else (preferably the backup) can replace that player for that round.

#### Facts
- Green circles spawn every 15 seconds in the same sector as the Vale Guardian
- They have a charge time of 5 seconds
- After these 5 seconds, lightning will strike that's similar to the Engineer's [Orbital Strike][gw2w-orbital-strike]{:target="_blank"} (so don't be confused)
- Dodging, being invulnerable or being downed prevents you from being counted
- When there aren't enough people on a green circle, everyone will take 90% of their HP as damage

#### Tips
- **Do not move out of the circle** until the lightning has struck
- Be careful with **blue circles** if they have spawned on top of a green circle
- **Do not dodge** while standing on a green circle
- **Do not use invulnerability or evasion skills** that make you or someone else invulnerable or evading
- Revive a downed player as soon as possible
- Watch your HP and heal when necessary

### Blue circles
Blue circles spawn on top of the players and will damage *and* teleport them if they get hit by the explosion.
They can be called out if players are not noticing the circles.
In the first phase, it's not fatal if players get caught a couple of times, unless they have low health.

#### Facts
- Blue circles spawn every 9 seconds
- They have a charge time of 2 seconds and will explode afterwards
- The Vale Guardian does a 180&deg; rotation before spawning the blue circles, he rotates back after he spawned them
- They get visually obscured by heavy FX ground AoE skills, for example the Engineer's [Glue Shot][gw2w-glue-shot]{:target="_blank"} and the Chronomancer's [wells][gw2w-chronomancer-utilities]{:target="_blank"}
- They can spawn inside a green circle and get obscured by it (so pay attention)
- Downed players don't get teleported

#### Tips
- If you listen carefully, you can hear the blue circles charging (helpful if you sometimes can't see them)
- You can use invulnerability, blocks, evades and dodges in order to not get caught

### Seekers
Seekers are everybody's nightmare.
They each home into a specific player (which appears random) and will damage everyone each tick who stands in their little AoE circle.
This damage is very significant and can down players who have a low armor value.
The seekers have to be knocked back, immobilized, chilled and/or crippled to either push them back or slow them down.
We don't want them on the melee players, and we don't want them on the green circles.
Basically nowhere except far away from us.

#### Facts
- Seekers respawn every 20 seconds on fixed locations, in each sector this is between the pillar and the center of the arena (3 in total)
- Because of the wonky Guild Wars 2 engine, it's possible that a seeker might teleport back to where you just knocked or pushed it back from

#### Tips
- **Do not run** straight into a seeker without dodging
- **Do not revive players** while standing in a seeker's AoE circle; it will kill you

[gw2w-orbital-strike]: https://wiki.guildwars2.com/wiki/Orbital_Strike "Guild Wars 2 Wiki &ndash; Orbital Strike"
[gw2w-glue-shot]: http://wiki.guildwars2.com/wiki/Glue_Shot "Guild Wars 2 Wiki &ndash; Glue Shot"
[gw2w-chronomancer-utilities]: http://wiki.guildwars2.com/wiki/Chronomancer#Utility "Guild Wars 2 Wiki &ndash; Chronomancer utilities"
{% endcapture %}
{% assign phases_width = phases_width | push: phase_width %}
{% assign phases_title = phases_title | push: phase_title %}
{% assign phases_class = phases_class | push: phase_class %}
{% assign phases_details = phases_details | push: phase_details %}


{% assign phase_width = "5%" %}
{% assign phase_title = "Split" %}
{% assign phase_class = "phase-blue-striped" %}
{% capture phase_details_split %}
## Split phase
The Vale Guardian splits into 3 separate Guardians that have to be killed.
For every guardian, when its HP is 0, it's only vulnerable to CC.
Its breakbar has to be broken in order for it to be killed.

### Player assignment
Each player goes to its designated sector to prepare for the split phase.
There are variations for assigning the players to the guardians.

#### Variation 1
- Red: 2 or 3 condition dealers (depends on composition, with optionally a might stacker)
- Blue: Chronomancer, healer and 2 other players (depends on composition)
- Green: the rest

#### Variation 2
- Red: 2 or 3 condition dealers (depends on composition, with optionally a might stacker)
- Blue: everyone except 1
- Green: the excluded player from blue fetches the Green Guardian to the Blue Guardian

### Red Guardian
The Red Guardian is only vulnerable to conditions.
Keep up the condition stacks, including vulnerability, and try to keep up your own might.

### Blue Guardian
The Blue Guardian has to be boonstripped every 10 seconds.
The Chronomancer can do this on sword auto attack.
During this fight, the Blue Guardian will spawn green circles.
The only difference is that it requires only **3 players** instead of 4.
However, everyone should still go to it, because it will also lure the Guardian into melee range on the circle.

### Green Guardian
The Green Guardian is just a regular enemy, except for the fact that it spawns blue circles.
Nothing new here that wasn't explained before in phase 1.

### Facts
- As soon as a guardian has 0 HP and the breakbar is up, all players that attacked it will rally (instead of being rallied when a guardian has actually been killed)

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
This is where it gets harder.
During this phase, the following mechanics are active: **1 active sector rotation**, **CC phase**, **green circles**, **blue circles** and **seekers**.
The mechanics of the green circles, blue circles and seekers are still the same (as explained in phase 1).

### Active sector rotation
The **green sector** will be lit up first, making it almost impossible to survive in this sector.
After 18 seconds the active sector goes inactive for 2 seconds before the next sector activates.
Activation follows a clockwise pattern, this means green &#x279c; blue &#x279c; red &#x279c; repeat.
The players on the green circles have to pay close attention to the green circles, as they spawn in the same sector as where the Vale Guardian is in.

With an active sector, this means that **you should never get caught in a blue circle!**
Since the teleport is random, you might get teleported onto an active sector and take heavy damage because of it.

There are variations on how to deal with this phase.

#### Variation 1
The tank will rotate in the same manner as the sectors and will have to time the rotation carefully.
Everyone else should should follow the tank and *not* stay or run on active sectors unless necessary.

#### Variation 2
The tank will fetch the Vale Guardian to one of the borders between the sectors, most commonly the border between the **red and blue sector**.
This way the Vale Guardian is mostly at one spot, like with phase 1.
When the **blue sector** is active, the tank should pay close attention to the timer.
Meaning that when the **red sector** will be active *soon*, the tank should move to the **blue sector**.
After the **red sector** is turned off again, the tank can move back to this sector.

### CC phase
Every 30 seconds the Vale Guardian will stop moving, holds its hand up in the air, and starts shooting orbs across the arena.
They don't deal a lot of damage individually, but getting caught in a series of orbs might down a player.
During this phase, his breakbar is up and he needs CC in order to be stopped.
This should happen as soon as possible, because he won't move unless his breakbar has been broken.
You can expect a **green circle** right after this.
{% endcapture %}
{% assign phases_width = phases_width | push: phase_width %}
{% assign phases_title = phases_title | push: phase_title %}
{% assign phases_class = phases_class | push: phase_class %}
{% assign phases_details = phases_details | push: phase_details %}


{% assign phase_width = "5%" %}
{% assign phase_title = "Split" %}
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
Everyone has to go to the **red sector**, because both the other sectors will both be lit up a few seconds after the Vale Guardian has respawned.

During this phase, the following mechanics are active: **2 active sector rotation**, **CC phase**, **green circles**, **blue circles** and **seekers**.
There isn't much of a difference between this phase and phase 2, except that there are now 2 active sectors rotating, instead of only 1.

If needed, focus more on positioning and surviving than on DPS, but **don't forget to CC very fast**.

### Active sector rotation
Just as in phase 2, the **green sector** will be lit up first, but along with the **blue sector** as well.
The timing is still the same, and it still rotates clockwise.
So this means, green and blue &#x279c; blue and red &#x279c; red and green &#x279c; repeat.

Since the timing is more strict than in phase 2, the tank has to time the rotation a little bit before the sectors rotate, preferably around 5 seconds.
This is to prevent that the Vale Guardian gets stuck in a CC phase on a previous sector that will be active very soon.
Otherwise it will spawn a green circle in that same sector, which might result in a wipe.

As a reminder, **you should never get caught in a blue circle!**
Even more so than in phase 2.
{% endcapture %}
{% assign phases_width = phases_width | push: phase_width %}
{% assign phases_title = phases_title | push: phase_title %}
{% assign phases_class = phases_class | push: phase_class %}
{% assign phases_details = phases_details | push: phase_details %}

{% include templates/strategy.html phases_width=phases_width phases_title=phases_title phases_class=phases_class phases_details=phases_details %}


## Change history
17 March 2016 *(Archomeda)*:
: - Changed layout
- Updated strategy to be more generic

26 January 2016 *(Archomeda)*:
: - Added video

23 January 2016 *(Archomeda)*:
: - Initial draft
