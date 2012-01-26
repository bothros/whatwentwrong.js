qx.Class.define("whatwentwrong.Stuff", {
    extend: qx.core.Object,
    
    properties: {
        description: {
            check: "String",
            init: ""
        },
        weight: {
            init: "normal"
        }
    },

    construct: function(description, weight) {
        if (description) {
            this.setDescription(description);
        }
        if (weight) {
            this.setWeight(weight);
        }
    },

    members: {
        toString: function() {
            var outstring = "";
            if (this.getWeight() == "light" || this.getWeight() == "." || this.getWeight() == 0) {
                outstring += ". ";
            } else if (this.getWeight() == "normal" || this.getWeight() == "+" || this.getWeight() == 1) {
                outstring += "+ ";
            } else if (this.getWeight() == "heavy" || this.getWeight() == "*") {
                outstring += "* ";
            } else {
                outstring += this.getWeight();
            }
            outstring += this.getDescription() + "\n";
            return outstring;
        }
    }
});
