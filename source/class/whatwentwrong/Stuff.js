qx.Class.define("whatwentwrong.Stuff", {
    extend: qx.core.Object,
    
    properties: {
        description: {
            check: "String",
            init: ""
        },
        weight: {
            init: "normal"
        },
        armor: {
            init: null,
            nullable: true
        },
        shield: {
            init: null,
            nullable: true
        },
        breakable: {
            init: null,
            nullable: true
        },
        damage: {
            init: null,
            nullable: true
        },
        reach: {
            init: null,
            nullable: true
        },
        range: {
            init: null,
            nullable: true
        }
    },

    construct: function(description, weight, kwargs) {
        if (description) {
            this.setDescription(description);
        }
        if (weight) {
            this.setWeight(weight);
        }
        if (kwargs) {
            this.set(kwargs);
        }
    },

    members: {
        toString: function() {
            var outstring = "";
            var table = whatwentwrong.Table.getInstance();
            if (this.getWeight() == "light" || this.getWeight() == "." || this.getWeight() == 0) {
                outstring += ". ";
            } else if (this.getWeight() == "normal" || this.getWeight() == "+" || this.getWeight() == 1) {
                outstring += "+ ";
            } else if (this.getWeight() == "heavy" || this.getWeight() == "*") {
                outstring += "* ";
            } else {
                outstring += this.getWeight();
            }
            outstring += this.getDescription();
            var stats = [];
            if (this.getArmor()) {
                stats.push("AC " + table.AC[this.getArmor()]);
            }
            if (this.getShield()) {
                stats.push("+1 AC");
                stats.push("breakable");
            }
            if (this.getBreakable() && !this.getShield()) {
                stats.push("breakable");
            }
            if (this.getDamage()) {
                stats.push(this.getDamage() + " damage")
            }
            if (this.getReach()) {
                stats.push("reach");
            }
            if (this.getRange()) {
                stats.push("range " + this.getRange());
            }
            if (stats.length > 0) {
                outstring += " [";
                outstring += stats.join(", ");
                outstring += "]"; 
            }
            outstring += "\n";
            return outstring;
        }
    }
});
