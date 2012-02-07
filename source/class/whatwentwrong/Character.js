qx.Class.define("whatwentwrong.Character", {
    extend: qx.core.Object,
    type: "singleton",

    properties: {
        name: {
            check: "String",
            event: "changeName",
            init: ""
        },
        clazz: {
            check: "String",
            event: "changeClass",
            init: ""
        },
        level: {
            check: "Number",
            event: "changeLevel",
            init: 0
        },
        xp: {
            check: "Number",
            event: "changeXp",
            init: 0
        },
        age: {
            check: "Number",
            event: "changeAge",
            init: 0
        },
        race: {
            check: "String",
            event: "changeRace",
            init: ""
        },
        sex: {
            check: "String",
            event: "changeSex",
            init: ""
        },
        pref: {
            check: "String",
            event: "changePref",
            init: ""
        },
        techLevel: {
            check: "String",
            event: "changeTechLevel",
            init: ""
        },
        stuff: {
            check: "Array",
            event: "changeStuff",
            init: [] 
        },
        background: {
            check: "String",
            event: "changeBackground",
            init: ""
        },
        CHA: {
            check: "Number",
            event: "changeCHA",
            init: 0
        },
        CON: {
            check: "Number",
            event: "changeCON",
            init: 0
        },
        DEX: {
            check: "Number",
            event: "changeDEX",
            init: 0
        },
        INT: {
            check: "Number",
            event: "changeINT",
            init: 0
        },
        STR: {
            check: "Number",
            event: "changeSTR",
            init: 0
        },
        WIS: {
            check: "Number",
            event: "changeWIS",
            init: 0
        },
        CHAmod: {
            check: "Number",
            event: "changeCHAmod",
            init: -1000
        },
        CONmod: {
            check: "Number",
            event: "changeCONmod",
            init: -1000
        },
        DEXmod: {
            check: "Number",
            event: "changeDEXmod",
            init: -1000
        },
        INTmod: {
            check: "Number",
            event: "changeINTmod",
            init: -1000
        },
        STRmod: {
            check: "Number",
            event: "changeSTRmod",
            init: -1000
        },
        WISmod: {
            check: "Number",
            event: "changeWISmod",
            init: -1000
        },
        psionic: {
            check: "Boolean",
            event: "changePsionic",
            nullable: true,
            init: null
        }
    },

    construct: function() {
        //this.base(arguments);
        var options = {
            converter: function(data, model, src, target) {
                return whatwentwrong.Table.getInstance().statmods[data];
            }
        };
        this.bind("CHA", this, "CHAmod", options);
        this.bind("CON", this, "CONmod", options);
        this.bind("DEX", this, "DEXmod", options);
        this.bind("INT", this, "INTmod", options);
        this.bind("STR", this, "STRmod", options);
        this.bind("WIS", this, "WISmod", options);
        this.generate();
    },

    members: {
        toString: function() {
            var outstring = "";
            outstring += this.stringName();
            outstring += this.stringRace();
            outstring += this.stringAge();
            outstring += this.stringSex();
            outstring += this.stringPref();
            outstring += this.stringTechLevel();
            outstring += this.stringStats();
            outstring += this.stringDerivedStats();
            outstring += this.stringStuff();
            outstring += this.stringBackground();
            outstring += this.stringPsionic();
            return outstring;
        },
        stringPsionic: function() {
            if (this.getPsionic()) {
                return "You are psionic!\n";
            } else {
                return "";
            }
        },
        stringStats: function() {
            var outstring = "";
            outstring += "CHA\tCON\tDEX\tINT\tSTR\tWIS\n";
            outstring += this.getCHA() + "\t" + this.getCON() + "\t" + this.getDEX() + "\t" + this.getINT() + "\t" + this.getSTR() + "\t" + this.getWIS() + "\n";
            outstring += this.getCHAmod() + "\t" + this.getCONmod() + "\t" + this.getDEXmod() + "\t" + this.getINTmod() + "\t" + this.getSTRmod() + "\t" + this.getWISmod() + "\n";
            return outstring;
        },
        stringDerivedStats: function() {
            var outstring = "";
            outstring += "AC\n";
            outstring += this.getAC() + "\n";
            return outstring;
        },
        stringName: function() {
            return "Name: " + this.getName() + "\n";
        },
        stringRace: function() {
            var outstring = "Race: " + this.getRace();
            if (this.getAge() <= 16) {
                if (this.getSex() == "Male") {
                    outstring += " Boy";
                } else if (this.getSex() == "Female") {
                    outstring += " Girl";
                } else {
                    outstring += " Person";
                }
            } else {
                if (this.getSex() == "Male") {
                    outstring += " Man";
                } else if (this.getSex() == "Female") {
                    outstring += " Woman";
                } else {
                    outstring += " Person";
                }
            }
            outstring += "\n";
            return outstring;
        },
        stringAge: function() {
            return "Age: " + this.getAge() + "\n";
        },
        stringTechLevel: function() {
            return "Tech Level: " + this.getTechLevel() + "\n";
        },
        stringSex: function() {
            return "Sex: " + this.getSex() + "\n";
        },
        stringPref: function() {
            return "Sexual Preference: " + this.getPref() + "\n";
        },
        stringStuff: function() {
            var outstring = "Stuff:\n";
            for (var i=0; i<this.getStuff().length; i++) {
                outstring += this.getStuff()[i].toString();
            }
            return outstring;
        },
        stringBackground: function() {
            return this.getBackground() + "\n";
        },
        generate: function() {
            var table = whatwentwrong.Table.getInstance();
            this.setLevel(1);
            this.setXp(0);

            this.generatestats();

            this.setAge(10 + table.dieroll(4, 3));

            if (table.chanceroll(table.racechance)) {
                this.setRace(table.select(table.lowchanceraces));
            } else {
                this.setRace(table.select(table.highchanceraces));
            }
    
            if (table.chanceroll(table.sexchance)) {
                this.setSex(table.select(table.lowchancesexes));
            } else {
                this.setSex(table.select(table.highchancesexes));
            }
    
            if (table.chanceroll(table.prefchance)) {
                this.setPref(table.select(table.lowchanceprefs));
            } else {
                this.setPref(table.select(table.highchanceprefs));
            }

            this.setTechLevel(table.select(table.techlevels));
            this.debug(this.getTechLevel());
    
            this.setStuff(qx.lang.Array.clone(table.stuffbytechlevel[this.getTechLevel()]));
            this.getStuff().push(table.select(table.deckostuff));
    
            this.setBackground(table.select(table.backgrounds));
            this.setPsionic(table.checkforpsionics(this.getCHA(), this.getINT(), this.getWIS()));
        },
        generatestats: function() {
            var totalmod = -1000;
            var table = whatwentwrong.Table.getInstance();

            while (totalmod < 0) {
                this.setCHA(table.dieroll(6, 3));
                this.setCON(table.dieroll(6, 3));
                this.setDEX(table.dieroll(6, 3));
                this.setINT(table.dieroll(6, 3));
                this.setSTR(table.dieroll(6, 3));
                this.setWIS(table.dieroll(6, 3));
                totalmod = this.getCHAmod() + this.getCONmod() + this.getDEXmod() + this.getINTmod() + this.getSTRmod() + this.getWIS();
            }
        },
        getAC: function() {
            var AC = 12 + this.getDEXmod();
            var table = whatwentwrong.Table.getInstance();
            var shield = false;

            this.debug(this.getStuff());
            this.debug(this.getStuff()[0]);

            for (var i=0; i<this.getStuff().length; i++) {
                var thing = this.getStuff()[i];
                if (thing.getArmor() && table.AC[thing.getArmor()] > AC) {
                    AC = table.AC[thing.getArmor()];
                }
                if (thing.getShield()) {
                    shield = true;
                }
            }

            if (shield) {
                AC += 1;
            }
            
            return AC;
        }
    }
});
