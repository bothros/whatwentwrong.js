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
        AC: {
            "leather": 14,
            "chain": 16,
            "plate": 18
        },
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
            "Into dudes and ladies.",
            "Into ladies, but once in a while when you get drunk...",
            "Into ladies.",
            "Into something kinky, please fill in." //TODO: fix this one
        ],
        lowchanceprefs: [
            "No interest.",
            "Into robots.",
            "Into tentacled horrors.",
            "Into grey aliens.",
            "Into dinosaurs.",
            "Into really sexy plants.",
            "Into everything."
        ],
        prefchance: 0.05,
        techlevels: [
            "Total Throwback",
            "Total Throwback",
            "Cave Dweller",
            "Cave Dweller",
            "Cave Dweller",
            "Savage Tribesman",
            "Savage Tribesman",
            "Savage Tribesman",
            "Savage Tribesman",
            "Cultist",
            "Cultist",
            "Cultist",
            "Damned Isles Sailor",
            "Damned Isles Sailor",
            "Nyarlathotepite Citizen",
            "Nyarlathotepite Citizen",
            "Nyarlathotepite Citizen",
            "Nyarlathotepite Citizen",
            "Nyarlathotepite Soldier",
            "Nyarlathotepite Soldier",
            "Badass Metal Viking",
            "Badass Metal Viking",
            "Kethelneshi Gladiator",
            "Chevalier Hurlant",
            "Chevalier Hurlant",
            "Arcology Fugitive"
        ],
        stuffbytechlevel: {
            "Total Throwback": [],
            "Cave Dweller": [
                new whatwentwrong.Stuff("club", "+", {"damage": "1d6"}),
                new whatwentwrong.Stuff("stinky panther pelt", ".")
            ],
            "Savage Tribesman": [
                new whatwentwrong.Stuff("stone-tipped spear", "+", {"damage": "1d6", "reach": true}),
                new whatwentwrong.Stuff("big wicker shield", ".", {"shield": true}), 
                new whatwentwrong.Stuff("loincloth", ".")
            ],
            "Nyarlathotepite Soldier": [
                new whatwentwrong.Stuff("bronze khopesh", "+", {"damage": "1d6"}), //Maybe 1d8 damage?
                new whatwentwrong.Stuff("bronze shield", ".", {"shield": true}),
                new whatwentwrong.Stuff("shortbow", "+", {"damage": "1d6"}), //TODO: ranged weapon
                new whatwentwrong.Stuff("20 arrows in a quiver", "+"),
                new whatwentwrong.Stuff("linen skirt", "."),
                new whatwentwrong.Stuff("head-dress", "."),
                new whatwentwrong.Stuff("sandals", ".")
            ],
            "Nyarlathotepite Citizen": [
                new whatwentwrong.Stuff("bronze dagger", "+", {"damage": "1d4"}),
                new whatwentwrong.Stuff("clay bead jewelry everywhere", "."),
                new whatwentwrong.Stuff("linen skirt", "."),
                new whatwentwrong.Stuff("head-dress", "."),
                new whatwentwrong.Stuff("sandals", ".")
            ],
            "Cultist": [
                new whatwentwrong.Stuff("ceremonial staff", "+", {"damage": "1d8"}),
                new whatwentwrong.Stuff("bronze knife", "+", {"damage": "1d4"}),
                new whatwentwrong.Stuff("hooded linen robe", "."),
                new whatwentwrong.Stuff("sandals", ".")
            ],
            "Damned Isles Sailor": [
                new whatwentwrong.Stuff("bronze cutlass", "+", {"damage": "1d8"}),
                new whatwentwrong.Stuff("canvas vest", "."),
                new whatwentwrong.Stuff("canvas trousers", "."),
                new whatwentwrong.Stuff("sick boots", ".")
            ],
            "Badass Metal Viking": [
                new whatwentwrong.Stuff("iron horned helmet", ".", {"breakable": true, "damage": "1d3"}),
                new whatwentwrong.Stuff("iron battle-ax", "+", {"damage": "1d8"}),
                new whatwentwrong.Stuff("ring mail", ".", {"armor": "chain"}), 
                new whatwentwrong.Stuff("shaggy cloak", "."),
                new whatwentwrong.Stuff("wool tunic", "."),
                new whatwentwrong.Stuff("wool leggings", "."),
                new whatwentwrong.Stuff("leather shoes", ".")
            ],
            "Chevalier Hurlant": [
                new whatwentwrong.Stuff("brass lance", "*", {"damage": "1d10", "reach": true}),
                new whatwentwrong.Stuff("chrome steel plate armor", "+", {"armor": "plate"}), 
                new whatwentwrong.Stuff("skull-face helmet", ".", {"breakable": true}),
                new whatwentwrong.Stuff("wooden targe, (detail arms)", ".", {"shield": true}),
                new whatwentwrong.Stuff("black gambeson", "."),
                new whatwentwrong.Stuff("death machine", ".")
            ],
            "Kethelneshi Gladiator": [
                new whatwentwrong.Stuff("bronze gladius", "+", {"damage": "1d6"}), //1d8?
                new whatwentwrong.Stuff("bronze grilled helmet", ".", {"breakable": true}),
                new whatwentwrong.Stuff("leather battle-harness", "."), //Probably not armor?
                new whatwentwrong.Stuff("bronze scale sleeve", "+", {"breakable": true}),
                new whatwentwrong.Stuff("bronze shield", ".", {"shield": true})
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
            new whatwentwrong.Stuff("a sealed clay pot containing a few hundred deathmaggots (do not fall while carrying!)", "+", {"breakable": true}),
            new whatwentwrong.Stuff("pet lizardwolf (2 HD, 14 AC, loyal unto death)", "."),
            new whatwentwrong.Stuff("a small sphere (2\" diameter) made of a hard translucent substance, origin unknown", "."),
            new whatwentwrong.Stuff("wooden flute", "+"),
            new whatwentwrong.Stuff("net (designed for fishing but maybe could hold a monster)", "+"),
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
            new whatwentwrong.Stuff("a bone whistle", "."),
            new whatwentwrong.Stuff("2 doses of Black Lotus, 3 doses of Blue Lotus", "."),
            new whatwentwrong.Stuff("2 doses of Jale Lotus", "."),
            new whatwentwrong.Stuff("5 doses of White Lotus", "."),
            new whatwentwrong.Stuff("a rowan wood shield, from another world", ".", {"shield": true}),
            new whatwentwrong.Stuff("the tooth of a smilodon", "+", {"damage": "1d4"}),
            new whatwentwrong.Stuff("ultratelluric steel helm, with velociraptor plume", ".", {"breakable": true}),
            new whatwentwrong.Stuff("alien plastic sword that whistles music through the air as it swings", "+", {"damage": "1d8"}),
            new whatwentwrong.Stuff("a wooden Nyarlathotepite barque, 75' long", "."),
            new whatwentwrong.Stuff("plate armor made from a broken robot", "+", {"armor": "plate"}), 
            new whatwentwrong.Stuff("a black basalt icon of the goddess Abhoth in the form of a billy-goat", "+"),
            new whatwentwrong.Stuff("a dolm meteorite", "+"),
            new whatwentwrong.Stuff("a Kethelneshite razor shield", ".", {"shield": true, "damage": "1d6"}),
            new whatwentwrong.Stuff("a bronze helmet shaped like an ant's head", ".", {"breakable": true}),
            new whatwentwrong.Stuff("a stick of chalk", "."),
            new whatwentwrong.Stuff("a wicker cage", "+"),
            new whatwentwrong.Stuff("a bronze saw", "+"),
            new whatwentwrong.Stuff("a mummified male member", "."),
            new whatwentwrong.Stuff("a huge club made from a thagomizer", "*", {"damage": "1d8"}),
            new whatwentwrong.Stuff("leather and iron cestus", ".", {"damage": "1d4"}),
            new whatwentwrong.Stuff("steel helmet, with no opening for the eyes", ".", {"breakable": true})
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
            //"You were an alien abductee. Your butthole is still sore.",
            "You have got some wicked awesome tattoos.",
            "You do not know how to swim.",
            "You know where some sorcerer stashed a scroll describing a ritual.",
            "You have got this awesome silvery cyborg arm. (long story)",
            "You have got a knack for figuring out alien technology.",
            //new ones start here
            "You want to see the Lost City of Carcosa, before you die.",
            "Your father was a Deep One.",
            "Your father was a tribal Chieftan.",
            "Your father was Master Grim, one of the seven sorcerers of Kethelnesh."
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
