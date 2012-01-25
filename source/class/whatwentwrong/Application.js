/* ************************************************************************

   Copyright:

   License:

   Authors:

 ************************************************************************ */

/* ************************************************************************

#asset(whatwentwrong/*)

 ************************************************************************ */

/**
 * This is the main application class of your custom application "whatwentwrong"
 */
qx.Class.define("whatwentwrong.Application",
        {
            extend : qx.application.Standalone,



/*
 *****************************************************************************
 MEMBERS
 *****************************************************************************
 */

members :
{
    /**
     * This method contains the initial application code and gets called 
     * during startup of the application
     * 
     * @lint ignoreDeprecated(alert)
     */
    main : function()
    {
        // Call super class
        this.base(arguments);

        // Enable logging in debug variant
        if (qx.core.Environment.get("qx.debug"))
        {
            // support native logging capabilities, e.g. Firebug for Firefox
            qx.log.appender.Native;
            // support additional cross-browser console. Press F7 to toggle visibility
            qx.log.appender.Console;
        }

        /*
           -------------------------------------------------------------------------
           Below is your actual application code...
           -------------------------------------------------------------------------
           */

        var character = {};

        character.stats = {};

        for (var i=0; i<this.stats.length; i++) {
            character.stats[this.stats[i]] = this.dieroll(6, 3);
            this.debug(this.stats[i] + ": " + character.stats[this.stats[i]]);
        }     

        if (this.chanceroll(this.racechance)) {
            character.race = this.select(this.lowchanceraces);
        } else {
            character.race = this.select(this.highchanceraces);
        }

        this.debug(character.race);

        if (this.chanceroll(this.sexchance)) {
            character.sex = this.select(this.lowchancesexes);
        } else {
            character.sex = this.select(this.highchancesexes);
        }

        this.debug(character.sex);

        if (this.chanceroll(this.prefchance)) {
            character.pref = this.select(this.lowchanceprefs);
        } else {
            character.pref = this.select(this.highchanceprefs);
        }

        this.debug(character.pref);

        character.techlevel = this.select(this.techlevels);

        this.debug(character.techlevel);

        character.stuff = this.stuffbytechlevel[character.techlevel];
        character.stuff.push(this.select(this.deckostuff));

        this.debug(character.stuff);

        character.background = this.select(this.backgrounds);

        this.debug(character.background);

        this.debug(character);

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
        },

    stats: [
        "Charisma",
        "Constitution",
        "Dexterity",
        "Intelligence",
        "Strength",
        "Wisdom"
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
    "Earthman"
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
    "Savage Tribesman",
    "Savage Tribesman",
    "Savage Tribesman",
    "Nyarlathotepan",
    "Nyarlathotepan",
    "Nyarlathotepan",
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
    "Nyarlathotepan": [
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
    "partially functional head of an ancient, insane robot"
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
    ]
    }
});
