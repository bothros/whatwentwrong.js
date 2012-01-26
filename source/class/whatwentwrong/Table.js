qx.Class.define("whatwentwrong.Table", {
    extend: Object,
    type: "singleton",

    members: {
        stats: [
            "Charisma",
            "Constitution",
            "Dexterity",
            "Intelligence",
            "Strength",
            "Wisdom"
        ], 
        statmods: [
            -1000, //0
            -1000, //1
            -1000, //2
            -3, //3
            -2, //4
            -2, //5
            -1, //6
            -1, //7
            -1, //8
            0,  //9
            0,  //10
            0,  //11
            0,  //12
            1,  //13
            1,  //14
            1,  //15
            2,  //16
            2,  //17
            3   //18
        ],
        highchanceraces: [
            "Black",
            "Blue",
            "Brown",
            "Dolm",
            "Green",
            "Jale",
            "Orange",
            "Purple",
            "Red",
            "Bone",
            "Ulfire",
            "White",
            "Yellow"
        ],
        lowchanceraces: [
            "Earth"
        ],
        racechance: 0.01,
        highchancesexes: [
            "Male",
            "Female"
        ],
        lowchancesexes: [
            "Hermaphrodite",
            "Hard to say"
        ],
        sexchance: 0.02,
        highchanceprefs: [
            "Into dudes",
            "Into dudes, but once in a while when you get drunk...",
            "Bi. You have got no preference either way.",
            "Into ladies, but this one time at band camp...",
            "Into ladies.",
            "Into something kinky, please fill in."
        ],
        lowchanceprefs: [
            "No interest.",
            "Into robots.",
            "Into tentacled horrors.",
            "Into greys.",
            "Into neogi.",
            "Into dinosaurs.",
            "Into really sexy plants.",
            "Into everything."
        ],
        prefchance: 0.05,
        techlevels: [
            "Total Throwback",
            "Cave Dweller",
            "Cave Dweller",
            "Cave Dweller",
            "Cave Dweller",
            "Savage Tribesman",
            "Savage Tribesman",
            "Savage Tribesman",
            "Savage Tribesman",
            "Savage Tribesman",
            "Nyarlathotepite",
            "Nyarlathotepite",
            "Nyarlathotepite",
            "Nyarlathotepite",
            "Badass Metal Viking",
            "Badass Metal Viking",
            "Arcology Fugitive"
        ],
        stuffbytechlevel: {
            "Total Throwback": [],
            "Cave Dweller": [
                new whatwentwrong.Stuff("club", "+"), //TODO: weapon
                new whatwentwrong.Stuff("stinky panther pelt", ".")
            ],
            "Savage Tribesman": [
                new whatwentwrong.Stuff("stone-tipped spear", "+"), //TODO: weapon
                new whatwentwrong.Stuff("big wicker shield", "."), //TODO: shield
                new whatwentwrong.Stuff("loincloth", ".")
            ],
            "Nyarlathotepite": [
                new whatwentwrong.Stuff("bronze khopesh", "+"), //TODO: weapon
                new whatwentwrong.Stuff("bronze shield", "."), //TODO: shield
                new whatwentwrong.Stuff("shortbow", "+"), //TODO: ranged weapon
                new whatwentwrong.Stuff("20 arrows in a quiver", "+"),
                new whatwentwrong.Stuff("linen skirt", "."),
                new whatwentwrong.Stuff("head-dress", "."),
                new whatwentwrong.Stuff("sandals", ".")
            ],
            "Badass Metal Viking": [
                new whatwentwrong.Stuff("iron horned helmet", "."), //TODO: weapon?
                new whatwentwrong.Stuff("iron battle-ax", "+"), //TODO: weapon
                new whatwentwrong.Stuff("leather armor", "."), //TODO: armor
                new whatwentwrong.Stuff("shaggy cloak", "."),
                new whatwentwrong.Stuff("wool tunic", "."),
                new whatwentwrong.Stuff("wool leggings", "."),
                new whatwentwrong.Stuff("leather shoes", ".")
            ],
            "Arcology Fugitive": [
                new whatwentwrong.Stuff("polyester jumpsuit", "."),
                new whatwentwrong.Stuff("random ray pistol", "+"), //TODO: incorporate raygun tables
                new whatwentwrong.Stuff("vanadium collar", "+"),
                new whatwentwrong.Stuff("sneakers", ".")
            ]
        },
        deckostuff: [
            new whatwentwrong.Stuff("5 poorly made torches (only burn 4 or 5 turns each)", 5),
            new whatwentwrong.Stuff("45 feet of rope made of human hair", "+"),
            new whatwentwrong.Stuff("skin full of brackish water", "+"),
            new whatwentwrong.Stuff("cool necklace of animal fangs and claws", "."),
            new whatwentwrong.Stuff("stick of red ochre", "."), //TODO: roll for color?
            new whatwentwrong.Stuff("flea-ridden cloak", "."),
            new whatwentwrong.Stuff("a gourd full of some putrid alcoholic beverage", "+"),
            new whatwentwrong.Stuff("a copper bracer with some useless \"anti-demon\" rune on it", "."),
            new whatwentwrong.Stuff("3 doses of hallucinogenic mushrooms", "+"),
            new whatwentwrong.Stuff("a dozen small lumpy purple pear-like fruits wrapped in a bit of weaseloid fur (maybe enough for two or three small meals)", "+"),
            new whatwentwrong.Stuff("a chunk of flint and a small bit of alien metal that works almost as well as steel would", "+"),
            new whatwentwrong.Stuff("the skull of your brother (long story)", "+"),
            new whatwentwrong.Stuff("a rotten old pterodactyl egg (makes a great stink bomb)", "+"),
            new whatwentwrong.Stuff("a largish lump of low grade gold (worth d100gp if buyer can be found)", "+"),
            new whatwentwrong.Stuff("alien computer access medallion (looks like you wear it to the disco)", "."),
            new whatwentwrong.Stuff("a sealed clay pot containing a few hundred deathmaggots (do not fall while carrying!)", "+"),
            new whatwentwrong.Stuff("pet lizardwolf (2 HD, 14 AC, loyal unto death)", "."),
            new whatwentwrong.Stuff("a small sphere (2\" diameter) made of a hard translucent substance, origin unknown", "."),
            new whatwentwrong.Stuff("wooden flute", "+"),
            new whatwentwrong.Stuff("net (designed for fishing but maybe could hold a monster)", "+"), //TODO: weapon?
            //"7 foot length of stout iron chain",
            new whatwentwrong.Stuff("Zardoz mask", "."),
            new whatwentwrong.Stuff("riding lizard", "."),
            new whatwentwrong.Stuff("lantern holding some sort of slug-like bio-luminescent lifeform", "+"),
            new whatwentwrong.Stuff("small bag filled with fine white sand", "+"),
            new whatwentwrong.Stuff("the right hand of an unknown stone statue", "+"),
            new whatwentwrong.Stuff("a bunch of dried witchroot", "+"),
            new whatwentwrong.Stuff("dowsing rod", "+"),
            new whatwentwrong.Stuff("9 foot pole of fibrous fungal matter", "*"),
            new whatwentwrong.Stuff("partially functional head of an ancient, insane robot", "+"),
            //New stuff starts here
            new whatwentwrong.Stuff("a strangely elliptical gold diadem, it doesn't quite fit a human head", "+"),
            new whatwentwrong.Stuff("an air-bladder, removed from the gizzard of a dinosaur", "."),
            new whatwentwrong.Stuff("a bear-skin", "."),
            new whatwentwrong.Stuff("the severed arm of a Voormi, one of the hairy men of the mountains", "+"),
            new whatwentwrong.Stuff("a space alien grenade. Roll on the table", "+"), //TODO: incorporate grenade table
            new whatwentwrong.Stuff("a child slave", "."),
            new whatwentwrong.Stuff("a bone whistle", ".")
        ],
        backgrounds: [
            "You saved this one dudes life and now hes your loyal follower.",
            "Your hair is a funky color like pink or green or something.",
            "You are an excellent dino-rider.",
            "Your blood runs green. You dont know why.",
            //"You are a minor psychic: You get one Psionic power a day at half level."
            "You can see into the infrared, but anything purple is invisible to you.",
            "You hear voices sometimes, horrid alien whisperings.",
            "Some sort of terminator robot is hunting your sorry ass.",
            "You are an excellent tracker.",
            "This crazy old man keeps showing up, proclaming you some sort of messiah.",
            "You are a mutant. Roll one Mutation out of the book.", //TODO: have generator do this
            "You have got this wicked scar from a bad run-in with a carnosaur.",
            "You were an alien abductee. Your butthole is still sore.",
            "You have got some wicked awesome tattoos.",
            "You do not know how to swim.",
            "You know where some sorcerer stashed a scroll describing a ritual.",
            "You have got this awesome silvery cyborg arm. (long story)",
            "You have got a knack for figuring out alien technology.",
            //new ones start here
            "You want to see the Lost City of Carcosa, before you die.",
            "Your father was a Deep One."
        ],
        
        //random generation functions
        checkforpsionics: function(CHA, INT, WIS) {
            var chance = 0;
            if (INT == 15) {
                chance += .01;
            } else if (INT == 16) {
                chance += .02;
            } else if (INT == 17) {
                chance += .03;
            } else if (INT == 18) {
                chance += .04;
            }
            if (WIS == 15) {
                chance += .005;
            } else if (WIS == 16) {
                chance += .01;
            } else if (WIS == 17) {
                chance += .015;
            } else if (WIS == 18) {
                chance += .02;
            }
            if (CHA == 15) {
                chance += .015;
            } else if (CHA == 16) {
                chance += .03;
            } else if (CHA == 17) {
                chance += .045;
            } else if (CHA == 18) {
                chance += .06;
            }
            return this.chanceroll(chance);
        },

        chanceroll: function(threshold) {
            var roll = Math.random();

            return (roll <= threshold);
        },

        dieroll: function(size, number) {
            if (!number) {
                number = 1;
            }

            var accumulator = 0;
            for (var i=0; i<number; i++) {
                var roll = Math.ceil(Math.random()*size);

                accumulator += roll;
            }

            return accumulator;
        },

        select: function(arr) {
            var roll = Math.floor(Math.random()*arr.length);

            return arr[roll];
        }
    }
});
