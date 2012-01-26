qx.Class.define("whatwentwrong.Outbox", {
    extend: qx.ui.form.TextArea,

    properties: {
        character: {
            apply: "_applyCharacter"
        }
    },

    construct: function() {
        this.base(arguments);
        this.setReadOnly(true);
        this.setWidth(500);
        this.setHeight(500);
    },

    members: {
        _applyCharacter: function(character, oldcharacter) {
            var outstring = "";
            outstring += "Name: " + character.name + "\n";
            outstring += "Race: " + character.race;
            if (character.age <= 16) {
                if (character.sex == "Male") {
                    outstring += " Boy";
                } else if (character.sex == "Female") {
                    outstring += " Girl";
                } else {
                    outstring += " Person";
                }
            } else {
                if (character.sex == "Male") {
                    outstring += " Man";
                } else if (character.sex == "Female") {
                    outstring += " Woman";
                } else {
                    outstring += " Person";
                }
            }
            outstring += "\n";
            outstring += "Age: " + character.age + "\n";
            outstring += "Tech Level: " + character.techlevel + "\n";

            for (var stat in character.stats) {
                outstring += stat + ": " + character.stats[stat] + "   " + whatwentwrong.Table.getInstance().statmods[character.stats[stat]] + "\n"; //TODO: print mods 
            }

            outstring += "Sex: " + character.sex + "\n";
            outstring += "Sexual Preference: " + character.pref + "\n";
            
            outstring += "Stuff: \n";
            for (var i=0; i<character.stuff.length; i++) {
                outstring += "\t" + character.stuff[i] + "\n";
            }

            outstring += "Background: " + character.background + "\n";

            this.setValue(outstring);
        }
    }
});
