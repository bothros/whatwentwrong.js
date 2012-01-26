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
                "club",
                "stinky panther pelt"
            ],
            "Savage Tribesman": [
                "stone-tipped spear",
                "big wicker shield",
                "loincloth"
            ],
            "Nyarlathotepite": [
                "bronze khopesh",
                "bronze shield",
                "shortbow",
                "20 arrows",
                "linen skirt",
                "head-dress",
                "sandals"
            ],
            "Badass Metal Viking": [
                "iron horned helmet",
                "iron battle-ax",
                "leather armor",
                "shaggy cloak",
                "wool tunic",
                "wool leggings",
                "leather shoes"
            ],
            "Arcology Fugitive": [
                "polyester jumpsuit",
                "random ray pistol", //TODO: incorporate raygun tables
                "vanadium collar",
                "sneakers"
            ]
        },
        deckostuff: [
            "5 poorly made torches (only burn 4 or 5 turns each)",
            "45 feet of rope made of human hair",
            "skin full of brackish water",
            "cool necklace of animal fangs and claws",
            "stick of red ochre",
            "flea-ridden cloak",
            "a gourd full of some putrid alcoholic beverage",
            "a copper bracer with some useless \"anti-demon\" rune on it",
            "3 doses of hallucinogenic mushrooms",
            "a dozen small lumpy purple pear-like fruits wrapped in a bit of weaseloid fur (maybe enough for two or three small meals)",
            "a chunk of flint and a small bit of alien metal that works almost as well as steel would",
            "the skull of your brother (long story)",
            "a rotten old pterodactyl egg (makes a great stink bomb)",
            "a largish lump of low grade gold (worth d100gp if buyer can be found)",
            "alien computer access medallion (looks like you wear it to the disco)",
            "a sealed clay pot containing a few hundred deathmaggots (do not fall while carrying!)",
            "pet lizardwolf (2 HD, 14 AC, loyal unto death)",
            "a small sphere (2\" diameter) made of a hard translucent substance, origin unknown",
            "wooden flute",
            "net (designed for fishing but maybe could hold a monster)",
            //"7 foot length of stout iron chain",
            "Zardoz mask",
            "riding lizard",
            "lantern holding some sort of slug-like bio-luminescent lifeform",
            "small bag filled with fine white sand",
            "the right hand of an unknown stone statue",
            "a bunch of dried witchroot",
            "dowsing rod",
            "9 foot pole of fibrous fungal matter",
            "partially functional head of an ancient, insane robot",
            //New stuff starts here
            "a strangely elliptical gold diadem, it doesn't quite fit a human head",
            "an air-bladder, removed from the gizzard of a dinosaur",
            "a bear-skin",
            "the severed arm of a Voormi, one of the hairy men of the mountains",
            "a space alien grenade. Roll on the table", //TODO: incorporate grenade table
            "a child slave",
            "a bone whistle"
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
