define(["jquery", "app/builds", "app/tooltip", "app/schedule", "qtip", "jquery-dateFormat.min"], function($, Builds, Tooltip, Schedule) {

    function bootstrapSchedule() {
        Schedule.get("raid", function(data) {
            var $schedule = $(".schedule");
            if (data.length > 0) {
                data.reverse();
                for (var i in data) {
                    $schedule.append($("<li>").text($.format.date(data[i].start, "ddd d MMMM, H:mm") + " (local time)"));
                }
            } else {
                $schedule.append($("<li>").text("There are no raids scheduled at the moment"));
            }
        }, function(status, text, data, event) {
            console.log("Could not load schedule from Legacy of the Six API: ", status, text, data);
        });
    }

    function bootstrapSpecializations() {
        var createLine = function(start, end) {
            return $("<span>", { "class": "line line-" + start + end });
        }
        var createMinor = function() {
            return $("<span>", { "class": "trait-icon trait-icon-minor trait-icon-background" });
        };
        var createMajor = function(isActive) {
            return $("<span>", { "class": "trait-icon trait-icon-background" })
                .append($("<span>", { "class": "trait-icon trait-icon-major" + (isActive ? " active" : "") })
            );
        };
        var createMajorSet = function(activeTrait) {
            return $("<span>", { "class": "trait-set-major" })
                .append(createMajor(activeTrait == "1"))
                .append(createMajor(activeTrait == "2"))
                .append(createMajor(activeTrait == "3"));
        };

        // Preload some layout stuff already
        $(".specialization-definition").each(function() {
            var $this = $(this);
            var name = $this.attr("data-name");
            var major1 = $this.attr("data-major1");
            var major2 = $this.attr("data-major2");
            var major3 = $this.attr("data-major3");

            $this.empty().addClass("specialization");
            $("<span>", { "class": "hover-overlay" }).appendTo($this);
            $("<span>", { "class": "name" }).text(name).appendTo($this);
            createMinor().appendTo($this);
            createLine("mid", Builds.specializations.convertNumberToLocation(major1)).appendTo($this);
            createMajorSet(major1).appendTo($this);
            createLine(Builds.specializations.convertNumberToLocation(major1), "mid").appendTo($this);
            createMinor().appendTo($this);
            createLine("mid", Builds.specializations.convertNumberToLocation(major2)).appendTo($this);
            createMajorSet(major2).appendTo($this);
            createLine(Builds.specializations.convertNumberToLocation(major2), "mid").appendTo($this);
            createMinor().appendTo($this);
            createLine("mid", Builds.specializations.convertNumberToLocation(major3)).appendTo($this);
            createMajorSet(major3).appendTo($this);
        });

        Builds.specializations.preload(function() {
            // Specializations are loaded
            var specNames = $(".specialization-definition").map(function() {
                return $(this).attr("data-name");
            });
            var specs = Builds.specializations.getByNames(specNames);

            // Populate specializations specific layout
            $(".specialization-definition").each(function() {
                var $this = $(this);
                var name = $this.attr("data-name");
                $this.css("background-image", "url(" + specs[name].background + ")");
            });

            // Get traits
            var traitIds = $.map($.map(specs, function(spec) {
                return [spec.minor_traits, spec.major_traits];
            }), function(trait) {
                return trait;
            });

            Builds.traits.getByIds(traitIds, function(traits, event) {
                // Traits are loaded
                var $tooltips = $("#tooltips");

                var applyTraitInfo = function(element, trait) {
                    $(element)
                        .attr("data-trait-id", trait.id)
                        .css("background-image", "url(" + trait.icon + ")");
                    var tooltip = Tooltip.generate(trait);
                    tooltip.appendTo($tooltips);
                    $(element).qtip({ content: { text: tooltip }});
                };

                $(".specialization-definition").each(function() {
                    var $this = $(this);
                    var name = $this.attr("data-name");
                    var major1 = $this.attr("data-major1");
                    var major2 = $this.attr("data-major2");
                    var major3 = $this.attr("data-major3");
                    var spec = specs[name];

                    $this.find(".trait-icon-minor").each(function(index) {
                        applyTraitInfo(this, traits[spec.minor_traits[index]]);
                    });
                    $this.find(".trait-icon-major").each(function(index) {
                        applyTraitInfo(this, traits[spec.major_traits[index]]);
                    });
                });
            }, function(status, text, data, event) {
                console.log("Could not load traits from API: ", status, text, data);
            });
        }, function(status, text, data, event) {
            console.log("Could not load specializations from API: ", status, text, data);
        });
    }

    function bootstrapSkills() {
        // Preload some layout stuff already
        var $tooltips = $("#tooltips");

        var applySkillInfo = function(element, skill) {
            $(element)
                .attr("data-skill-id", skill.id)
                .css("background-image", "url(" + skill.icon + ")");
            var tooltip = Tooltip.generate(skill);
            tooltip.appendTo($tooltips);
            $(element).qtip({ content: { text: tooltip }});
        };

        $(".weapon-skills-definition").each(function() {
            var $this = $(this);
            var profession = $this.attr("data-profession");
            var mainHand = $this.attr("data-mainhand");
            var offHand = $this.attr("data-offhand");

            var maxSkills = 5;
            if (profession == "Elementalist") {
                maxSkills = 20;
            }
            $this.empty().addClass("skills weapon-skills");
            $("<div>", { "class": "skills-description weapon-skills-description" }).text(mainHand + (offHand ? "/" + offHand : "")).appendTo($this);
            for (var i = 0; i < maxSkills; i++) {
                $("<span>", { "class": "skill-icon skill-icon-background weapon-skill-icon" }).appendTo($this);
                if (i > 0 && (i + 1) % 5 == 0) {
                    $("<span>", { "class": "skills-break" }).appendTo($this);
                }
            }
        });

        $(".utility-skills-definition").each(function() {
            var $this = $(this);
            var skills = [$this.attr("data-healing"), $this.attr("data-utility1"), $this.attr("data-utility2"), $this.attr("data-utility3"), $this.attr("data-elite")];

            $this.empty().addClass("skills utility-skills");
            for (var i = 0; i < skills.length; i++) {
                $("<span>", { "class": "skill-icon skill-icon-background utility-skill-icon" }).appendTo($this);
            }
            $("<div>", { "class": "skills-description utility-skills-description" }).text(skills.join(", ")).appendTo($this);
        });

        Builds.skills.preload(function() {
            // Skills are loaded
            $(".weapon-skills-definition").each(function() {
                var $this = $(this);
                var profession = $this.attr("data-profession");
                var mainHand = $this.attr("data-mainhand");
                var offHand = $this.attr("data-offhand");
                var extraParam = $this.attr("data-extra");

                var weaponSkills = [];
                if (profession == "Elementalist") {
                    // Exception for elementalist skills
                    var fireSkills = Builds.skills.getWeaponSkills(profession, mainHand, offHand, "Fire");
                    var airSkills = Builds.skills.getWeaponSkills(profession, mainHand, offHand, "Air");
                    var waterSkills = Builds.skills.getWeaponSkills(profession, mainHand, offHand, "Water");
                    var earthSkills = Builds.skills.getWeaponSkills(profession, mainHand, offHand, "Earth");
                    weaponSkills = fireSkills.concat(airSkills, waterSkills, earthSkills);
                } else {
                    weaponSkills = Builds.skills.getWeaponSkills(profession, mainHand, offHand, extraParam);
                }
                $this.find(".weapon-skill-icon").each(function(index) {
                    if (weaponSkills[index]) {
                        applySkillInfo(this, weaponSkills[index]);
                    } else {
                        console.log("Missing skill", index + 1, "from the list of weapon skills from the API");
                    }
                });
            });

            $(".utility-skills-definition").each(function() {
                var $this = $(this);
                var $tooltips = $("#tooltips");
                var skills = [$this.attr("data-healing"), $this.attr("data-utility1"), $this.attr("data-utility2"), $this.attr("data-utility3"), $this.attr("data-elite")];

                var utilitySkills = Builds.skills.getByNames(skills);
                $this.find(".utility-skill-icon").each(function(index) {
                    if (utilitySkills[skills[index]]) {
                        applySkillInfo(this, utilitySkills[skills[index]]);
                    } else {
                        console.log("Missing skill", index + 1, "from the list of utility skills from the API");
                    }
                });
            });
        }, function(status, text, data, event) {
            console.log("Could not load skills from API: ", status, text, data);
        });
    }

    $(function() {
        // No documentation on how to do this "properly"...
        $.fn.qtip.defaults.show.effect = false;
        $.fn.qtip.defaults.hide.effect = false;
        $.fn.qtip.defaults.position.target = "mouse";
        $.fn.qtip.defaults.position.my = "top left";
        $.fn.qtip.defaults.position.adjust.x = 20;
        $.fn.qtip.defaults.style.classes = "tooltip-gw2";

        // Check if we have to load the schedule
        if ($(".schedule").length > 0) {
            // Enable this when it's ready™
            //bootstrapSchedule();
        }

        // Check if we have to load specializations
        if ($(".specialization-definition").length > 0) {
            bootstrapSpecializations();
        }

        // Check if we have to load skills
        if ($(".weapon-skills-definition").length > 0 || $(".utility-skills-definition").length > 0) {
            bootstrapSkills();
        }
    });

});
