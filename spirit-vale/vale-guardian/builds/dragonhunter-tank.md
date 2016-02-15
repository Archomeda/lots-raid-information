---
layout: default
title: "Vale Guardian: Dragonhunter Tank"
breadcrumb_title: Dragonhunter Tank

build_weight: "001.1.1.dragonhunter-tank"
build:
    visible: true
    name: Dragonhunter Tank
    type: Tank
    profession: Dragonhunter
---
{% assign variants = "" | split: "|" %}
{% assign variant_titles = "" | split: "|" %}

# Vale Guardian: Builds &ndash; Dragonhunter Tank
The tank's job is to kite to Vale Guardian around the arena.
The tank has to be careful with the Vale Guardian's attacks and needs to keep it facing away from the rest of the players as much as possible.
You can see the direction the Vale Guardian is facing by its marker on the ground.
Its attacks can be negated by dodging, blocking, evading or becoming invulnerable.

During the split phases, the tank goes to the **Blue Guardian**.

When rotating around the arena, make sure to position the Vale Guardian near the edge of the next sector (but not too close!), somewhere near the middle of the separation line.

## Build
{% capture variant_title %}Default{% endcapture %}
{% capture variant %}
The tank should get **between 1400 and 1500 toughness** by any possible stat type that gives toughness (e.g. Knight's).
The rest should be filled in with Berserker's gear.

### Armor
Ideally all the armor pieces have Superior Runes of the Scholar.

### Weapons
{% include templates/builds/weapon-skills.html profession="Guardian" mainhand="Hammer" %}
{% include templates/builds/weapon-skills.html profession="Guardian" mainhand="Mace" offhand="Shield" %}
Ideally these weapons have Sigils of Force and Sigils of Accuracy.

### Utilities
{% include templates/builds/utility-skills.html healing="Shelter" utility1="Procession of Blades" utility2="Bane Signet" utility3="Test of Faith" elite="Renewed Focus" %}

### Traits
{% include templates/builds/specialization.html name="Zeal" major1="2" major2="3" major3="3" %}
{% include templates/builds/specialization.html name="Honor" major1="2" major2="2" major3="2" %}
{% include templates/builds/specialization.html name="Dragonhunter" major1="1" major2="2" major3="3" %}

## Consumables
The stats that should be included in your food and utilities are:

- Toughness if survivability is an issue
- Power/Precision
{% endcapture %}
{% assign variants = variants | push: variant %}
{% assign variant_titles = variant_titles | push: variant_title %}
{% comment %}===================================================================================================={% endcomment %}

{% capture variant_title %}Survivability{% endcapture %}
{% capture variant %}
*This variant is meant for players who can't survive during the fight or who are low on health most of the time.
The Zeal specialization is swapped out in favor of Virtues.*

The tank should get **between 1400 and 1500 toughness** by any possible stat type that gives toughness (e.g. Knight's).
The rest should be filled in with Berserker's gear.

### Armor
Ideally all the armor pieces have Superior Runes of the Scholar.

### Weapons
{% include templates/builds/weapon-skills.html profession="Guardian" mainhand="Hammer" %}
{% include templates/builds/weapon-skills.html profession="Guardian" mainhand="Mace" offhand="Shield" %}
Ideally these weapons have Sigils of Force and Sigils of Accuracy.

### Utilities
{% include templates/builds/utility-skills.html healing="Shelter" utility1="Procession of Blades" utility2="Bane Signet" utility3="Test of Faith" elite="Renewed Focus" %}

### Traits
{% include templates/builds/specialization.html name="Virtues" major1="1" major2="2" major3="2" %}
{% include templates/builds/specialization.html name="Honor" major1="2" major2="2" major3="2" %}
{% include templates/builds/specialization.html name="Dragonhunter" major1="1" major2="2" major3="3" %}

## Consumables
The stats that should be included in your food and utilities are:

- Toughness if survivability is an issue
- Power/Precision
{% endcapture %}
{% assign variants = variants | push: variant %}
{% assign variant_titles = variant_titles | push: variant_title %}

{% include templates/builds/print-variants.html variants=variants variant_titles=variant_titles %}

## Change history
15 February 2016 *(Archomeda)*:
: - Initial draft
