---
layout: default
title: "Vale Guardian: Condition Reaper"
breadcrumb_title: Condition Reaper
navigation:
    visible: false

build_weight: "004.reaper-condition"
build:
    visible: false
    name: Condition Reaper
    type: Conditions
    profession: Reaper
---
{% comment %}
TODO: This build is missing weapons, ask Zero to fix this. After it's been fixed, set "build -> visible" above to true
{% endcomment %}

# Vale Guardian: Builds &ndash; Condition Reaper
{% include templates/messages/build-unfinished.html %}

Detailed information about this build is not yet available. Ask Zero for more information.

## Build
The Reaper uses Viper gear.
If Viper's is not available, use Sinister.
If Sinister is not available on a trinket, use Rampager's.

### Weapons
{% include templates/builds/weapon-skills.html profession="Necromancer" mainhand="Scepter" offhand="Dagger" %}
Ideally these weapons have Sigils of Agony and Sigils of Geomancy.

### Utilities
{% include templates/builds/utility-skills.html healing="&quot;Your Soul Is Mine!&quot;" utility1="Well of Suffering" utility2="Well of Corruption" utility3="Signet of Spite" elite="&quot;Chilled to the Bone!&quot;" %}

### Traits
{% include templates/builds/specialization.html name="Curses" major1="3" major2="1" major3="3" %}
{% include templates/builds/specialization.html name="Death Magic" major1="1" major2="1" major3="1" %}
{% include templates/builds/specialization.html name="Reaper" major1="2" major2="3" major3="2" %}

## Consumables
The stats that should be included in your food and utilities are:

- Power
- Precision

## Change history
13 February 2016 *(Zero)*:
: - Initial draft
