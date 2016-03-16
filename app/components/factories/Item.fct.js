'use strict';

angular.module('OSFitter').factory('ItemFactory', [function () {
    var slots = [
        'Head',         //0
        'Chest',        //1
        'Legs',         //2
        'Back',         //3
        'Gloves',       //4
        'Boots',        //5
        'Main Hand',    //6
        'Off Hand',     //7
        'Ammo',         //8
        'Ring',         //9
        'Neck'          //10
    ];

    var skills = [
        'Attack',
        'Strength',
        'Defence',
        'Ranged',
        'Prayer',
        'Magic',
        'Runecrafting',
        'Construction',
        'Hitpoints',
        'Agility',
        'Herbalore',
        'Thieving','Crafting',
        'Fletching',
        'Slayer',
        'Hunter',
        'Mining',
        'Smithing',
        'Fishing',
        'Cooking',
        'Firemaking',
        'Woodcutting',
        'Farming'
    ];

    var items = [
        //MED HELM
        {
            name: 'Bronze Med Helm',
            slot: 0,
            image: 'http://vignette2.wikia.nocookie.net/2007scape/images/5/52/Bronze_med_helm.png/revision/latest?cb=20131218082527',
            stats: {
                attack: {
                    stab: 0,
                    slash: 0,
                    crush: 0,
                    magic: -3,
                    ranged: -1
                },
                defence: {
                    stab: 3,
                    slash: 4,
                    crush: 2,
                    magic: -1,
                    ranged: 4
                },
                other: {
                    strength: 0,
                    rangedStrength: 0,
                    magicStrength: 0,
                    prayer: 0
                }
            },
            requirements: [
                0,          //attack
                0,          //strength
                0,          //defence
                0,          //ranged
                0,          //prayer
                0,          //magic
                0,          //runecrafting
                0,          //construction
                0,          //hitpoints
                0,          //agility
                0,          //herbalore
                0,          //thieving
                0,          //crafting
                0,          //fletching
                0,          //slayer
                0,          //hunter
                0,          //mining
                0,          //smithing
                0,          //fishing
                0,          //cooking
                0,          //firemaking
                0,          //woodcutting
                0,          //farming
            ]
        },
        {
            name: 'Iron Med Helm',
            slot: 0,
            image: 'http://vignette2.wikia.nocookie.net/2007scape/images/3/3e/Iron_med_helm.png/revision/latest?cb=20140308032543',
            stats: {
                attack: {
                    stab: 0,
                    slash: 0,
                    crush: 0,
                    magic: -3,
                    ranged: -1
                },
                defence: {
                    stab: 4,
                    slash: 5,
                    crush: 3,
                    magic: -1,
                    ranged: 4
                },
                other: {
                    strength: 0,
                    rangedStrength: 0,
                    magicStrength: 0,
                    prayer: 0
                }
            },
            requirements: [
                0,          //attack
                0,          //strength
                0,          //defence
                0,          //ranged
                0,          //prayer
                0,          //magic
                0,          //runecrafting
                0,          //construction
                0,          //hitpoints
                0,          //agility
                0,          //herbalore
                0,          //thieving
                0,          //crafting
                0,          //fletching
                0,          //slayer
                0,          //hunter
                0,          //mining
                0,          //smithing
                0,          //fishing
                0,          //cooking
                0,          //firemaking
                0,          //woodcutting
                0,          //farming
            ]
        },
        {
            name: 'Steel Med Helm',
            slot: 0,
            image: 'http://vignette4.wikia.nocookie.net/2007scape/images/d/d5/Steel_med_helm.png/revision/latest?cb=20130928053157',
            stats: {
                attack: {
                    stab: 0,
                    slash: 0,
                    crush: 0,
                    magic: -3,
                    ranged: -1
                },
                defence: {
                    stab: 7,
                    slash: 8,
                    crush: 6,
                    magic: -1,
                    ranged: 7
                },
                other: {
                    strength: 0,
                    rangedStrength: 0,
                    magicStrength: 0,
                    prayer: 0
                }
            },
            requirements: [
                0,          //attack
                0,          //strength
                5,          //defence
                0,          //ranged
                0,          //prayer
                0,          //magic
                0,          //runecrafting
                0,          //construction
                0,          //hitpoints
                0,          //agility
                0,          //herbalore
                0,          //thieving
                0,          //crafting
                0,          //fletching
                0,          //slayer
                0,          //hunter
                0,          //mining
                0,          //smithing
                0,          //fishing
                0,          //cooking
                0,          //firemaking
                0,          //woodcutting
                0,          //farming
            ]
        },
        {
            name: 'Black Med Helm',
            slot: 0,
            image: 'http://vignette2.wikia.nocookie.net/2007scape/images/4/4c/Black_med_helm.png/revision/latest?cb=20131106213953',
            stats: {
                attack: {
                    stab: 0,
                    slash: 0,
                    crush: 0,
                    magic: -3,
                    ranged: -1
                },
                defence: {
                    stab: 9,
                    slash: 10,
                    crush: 8,
                    magic: -1,
                    ranged: 9
                },
                other: {
                    strength: 0,
                    rangedStrength: 0,
                    magicStrength: 0,
                    prayer: 0
                }
            },
            requirements: [
                0,          //attack
                0,          //strength
                10,          //defence
                0,          //ranged
                0,          //prayer
                0,          //magic
                0,          //runecrafting
                0,          //construction
                0,          //hitpoints
                0,          //agility
                0,          //herbalore
                0,          //thieving
                0,          //crafting
                0,          //fletching
                0,          //slayer
                0,          //hunter
                0,          //mining
                0,          //smithing
                0,          //fishing
                0,          //cooking
                0,          //firemaking
                0,          //woodcutting
                0,          //farming
            ]
        },
        {
            name: 'White Med Helm',
            slot: 0,
            image: 'http://vignette2.wikia.nocookie.net/2007scape/images/d/d1/White_med_helm.png/revision/latest?cb=20140120051552',
            stats: {
                attack: {
                    stab: 0,
                    slash: 0,
                    crush: 0,
                    magic: -3,
                    ranged: -1
                },
                defence: {
                    stab: 3,
                    slash: 4,
                    crush: 2,
                    magic: -1,
                    ranged: 4
                },
                other: {
                    strength: 0,
                    rangedStrength: 0,
                    magicStrength: 0,
                    prayer: 0
                }
            },
            requirements: [
                0,          //attack
                0,          //strength
                10,          //defence
                0,          //ranged
                0,          //prayer
                0,          //magic
                0,          //runecrafting
                0,          //construction
                0,          //hitpoints
                0,          //agility
                0,          //herbalore
                0,          //thieving
                0,          //crafting
                0,          //fletching
                0,          //slayer
                0,          //hunter
                0,          //mining
                0,          //smithing
                0,          //fishing
                0,          //cooking
                0,          //firemaking
                0,          //woodcutting
                0,          //farming
            ]
        },
        {
            name: 'Mithril Med Helm',
            slot: 0,
            image: 'http://vignette2.wikia.nocookie.net/2007scape/images/3/3a/Mithril_med_helm.png/revision/latest?cb=20140520131808',
            stats: {
                attack: {
                    stab: 0,
                    slash: 0,
                    crush: 0,
                    magic: -3,
                    ranged: -1
                },
                defence: {
                    stab: 10,
                    slash: 11,
                    crush: 9,
                    magic: -1,
                    ranged: 10
                },
                other: {
                    strength: 0,
                    rangedStrength: 0,
                    magicStrength: 0,
                    prayer: 0
                }
            },
            requirements: [
                0,          //attack
                0,          //strength
                20,          //defence
                0,          //ranged
                0,          //prayer
                0,          //magic
                0,          //runecrafting
                0,          //construction
                0,          //hitpoints
                0,          //agility
                0,          //herbalore
                0,          //thieving
                0,          //crafting
                0,          //fletching
                0,          //slayer
                0,          //hunter
                0,          //mining
                0,          //smithing
                0,          //fishing
                0,          //cooking
                0,          //firemaking
                0,          //woodcutting
                0          //farming
            ]
        },
        {
            name: 'Adamant Med Helm',
            slot: 0,
            image: 'http://vignette2.wikia.nocookie.net/2007scape/images/f/fc/Adamant_med_helm.png/revision/latest?cb=20130802173626',
            stats: {
                attack: {
                    stab: 0,
                    slash: 0,
                    crush: 0,
                    magic: -3,
                    ranged: -1
                },
                defence: {
                    stab: 14,
                    slash: 15,
                    crush: 13,
                    magic: -1,
                    ranged: 14
                },
                other: {
                    strength: 0,
                    rangedStrength: 0,
                    magicStrength: 0,
                    prayer: 0
                }
            },
            requirements: [
                0,          //attack
                0,          //strength
                30,          //defence
                0,          //ranged
                0,          //prayer
                0,          //magic
                0,          //runecrafting
                0,          //construction
                0,          //hitpoints
                0,          //agility
                0,          //herbalore
                0,          //thieving
                0,          //crafting
                0,          //fletching
                0,          //slayer
                0,          //hunter
                0,          //mining
                0,          //smithing
                0,          //fishing
                0,          //cooking
                0,          //firemaking
                0,          //woodcutting
                0,          //farming
            ]
        },
        {
            name: 'Rune Med Helm',
            slot: 0,
            image: 'http://vignette1.wikia.nocookie.net/2007scape/images/c/c9/Rune_med_helm.png/revision/latest?cb=20140806031750',
            stats: {
                attack: {
                    stab: 0,
                    slash: 0,
                    crush: 0,
                    magic: -3,
                    ranged: -1
                },
                defence: {
                    stab: 22,
                    slash: 23,
                    crush: 21,
                    magic: -1,
                    ranged: 22
                },
                other: {
                    strength: 0,
                    rangedStrength: 0,
                    magicStrength: 0,
                    prayer: 0
                }
            },
            requirements: [
                0,          //attack
                0,          //strength
                40,          //defence
                0,          //ranged
                0,          //prayer
                0,          //magic
                0,          //runecrafting
                0,          //construction
                0,          //hitpoints
                0,          //agility
                0,          //herbalore
                0,          //thieving
                0,          //crafting
                0,          //fletching
                0,          //slayer
                0,          //hunter
                0,          //mining
                0,          //smithing
                0,          //fishing
                0,          //cooking
                0,          //firemaking
                0,          //woodcutting
                0,          //farming
            ]
        },
        {
            name: 'Dragon Med Helm',
            slot: 0,
            image: 'http://vignette1.wikia.nocookie.net/2007scape/images/c/cf/Dragon_med_helm.png/revision/latest?cb=20140327221834',
            stats: {
                attack: {
                    stab: 0,
                    slash: 0,
                    crush: 0,
                    magic: -3,
                    ranged: -1
                },
                defence: {
                    stab: 33,
                    slash: 35,
                    crush: 32,
                    magic: -1,
                    ranged: 34
                },
                other: {
                    strength: 0,
                    rangedStrength: 0,
                    magicStrength: 0,
                    prayer: 0
                }
            },
            requirements: [
                0,          //attack
                0,          //strength
                60,          //defence
                0,          //ranged
                0,          //prayer
                0,          //magic
                0,          //runecrafting
                0,          //construction
                0,          //hitpoints
                0,          //agility
                0,          //herbalore
                0,          //thieving
                0,          //crafting
                0,          //fletching
                0,          //slayer
                0,          //hunter
                0,          //mining
                0,          //smithing
                0,          //fishing
                0,          //cooking
                0,          //firemaking
                0,          //woodcutting
                0,          //farming
            ]
        },
        //FULL HELM
        {
            name: 'Bronze Full Helm',
            slot: 0,
            image: 'http://vignette1.wikia.nocookie.net/2007scape/images/e/ef/Bronze_full_helm.png/revision/latest?cb=20131218080719',
            stats: {
                attack: {
                    stab: 0,
                    slash: 0,
                    crush: 0,
                    magic: -6,
                    ranged: -2
                },
                defence: {
                    stab: 4,
                    slash: 5,
                    crush: 3,
                    magic: -1,
                    ranged: 4
                },
                other: {
                    strength: 0,
                    rangedStrength: 0,
                    magicStrength: 0,
                    prayer: 0
                }
            },
            requirements: [
                0,          //attack
                0,          //strength
                0,          //defence
                0,          //ranged
                0,          //prayer
                0,          //magic
                0,          //runecrafting
                0,          //construction
                0,          //hitpoints
                0,          //agility
                0,          //herbalore
                0,          //thieving
                0,          //crafting
                0,          //fletching
                0,          //slayer
                0,          //hunter
                0,          //mining
                0,          //smithing
                0,          //fishing
                0,          //cooking
                0,          //firemaking
                0,          //woodcutting
                0,          //farming
            ]
        },
        {
            name: 'Iron Full Helm',
            slot: 0,
            image: 'http://vignette2.wikia.nocookie.net/2007scape/images/0/00/Iron_full_helm.png/revision/latest?cb=20140309033528',
            stats: {
                attack: {
                    stab: 0,
                    slash: 0,
                    crush: 0,
                    magic: -6,
                    ranged: -2
                },
                defence: {
                    stab: 6,
                    slash: 7,
                    crush: 5,
                    magic: -1,
                    ranged: 6
                },
                other: {
                    strength: 0,
                    rangedStrength: 0,
                    magicStrength: 0,
                    prayer: 0
                }
            },
            requirements: [
                0,          //attack
                0,          //strength
                0,          //defence
                0,          //ranged
                0,          //prayer
                0,          //magic
                0,          //runecrafting
                0,          //construction
                0,          //hitpoints
                0,          //agility
                0,          //herbalore
                0,          //thieving
                0,          //crafting
                0,          //fletching
                0,          //slayer
                0,          //hunter
                0,          //mining
                0,          //smithing
                0,          //fishing
                0,          //cooking
                0,          //firemaking
                0,          //woodcutting
                0,          //farming
            ]
        },
        {
            name: 'Steel Full Helm',
            slot: 0,
            image: 'http://vignette1.wikia.nocookie.net/2007scape/images/a/ae/Steel_full_helm.png/revision/latest?cb=20140309032758',
            stats: {
                attack: {
                    stab: 0,
                    slash: 0,
                    crush: 0,
                    magic: -6,
                    ranged: -2
                },
                defence: {
                    stab: 9,
                    slash: 10,
                    crush: 7,
                    magic: -1,
                    ranged: 9
                },
                other: {
                    strength: 0,
                    rangedStrength: 0,
                    magicStrength: 0,
                    prayer: 0
                }
            },
            requirements: [
                0,          //attack
                0,          //strength
                5,          //defence
                0,          //ranged
                0,          //prayer
                0,          //magic
                0,          //runecrafting
                0,          //construction
                0,          //hitpoints
                0,          //agility
                0,          //herbalore
                0,          //thieving
                0,          //crafting
                0,          //fletching
                0,          //slayer
                0,          //hunter
                0,          //mining
                0,          //smithing
                0,          //fishing
                0,          //cooking
                0,          //firemaking
                0,          //woodcutting
                0,          //farming
            ]
        },
        {
            name: 'Black Full Helm',
            slot: 0,
            image: 'http://vignette3.wikia.nocookie.net/2007scape/images/4/4b/Black_full_helm.png/revision/latest?cb=20130702123810',
            stats: {
                attack: {
                    stab: 0,
                    slash: 0,
                    crush: 0,
                    magic: -6,
                    ranged: -2
                },
                defence: {
                    stab: 12,
                    slash: 13,
                    crush: 10,
                    magic: -1,
                    ranged: 12
                },
                other: {
                    strength: 0,
                    rangedStrength: 0,
                    magicStrength: 0,
                    prayer: 0
                }
            },
            requirements: [
                0,          //attack
                0,          //strength
                10,          //defence
                0,          //ranged
                0,          //prayer
                0,          //magic
                0,          //runecrafting
                0,          //construction
                0,          //hitpoints
                0,          //agility
                0,          //herbalore
                0,          //thieving
                0,          //crafting
                0,          //fletching
                0,          //slayer
                0,          //hunter
                0,          //mining
                0,          //smithing
                0,          //fishing
                0,          //cooking
                0,          //firemaking
                0,          //woodcutting
                0,          //farming
            ]
        },
        {
            name: 'White Full Helm',
            slot: 0,
            image: 'http://vignette3.wikia.nocookie.net/2007scape/images/d/de/White_full_helm.png/revision/latest?cb=20140120051724',
            stats: {
                attack: {
                    stab: 0,
                    slash: 0,
                    crush: 0,
                    magic: -6,
                    ranged: -2
                },
                defence: {
                    stab: 12,
                    slash: 13,
                    crush: 10,
                    magic: -1,
                    ranged: 12
                },
                other: {
                    strength: 0,
                    rangedStrength: 0,
                    magicStrength: 0,
                    prayer: 1
                }
            },
            requirements: [
                0,          //attack
                0,          //strength
                10,          //defence
                0,          //ranged
                0,          //prayer
                0,          //magic
                0,          //runecrafting
                0,          //construction
                0,          //hitpoints
                0,          //agility
                0,          //herbalore
                0,          //thieving
                0,          //crafting
                0,          //fletching
                0,          //slayer
                0,          //hunter
                0,          //mining
                0,          //smithing
                0,          //fishing
                0,          //cooking
                0,          //firemaking
                0,          //woodcutting
                0,          //farming
            ]
        },
        {
            name: 'Initiate Sallet',
            slot: 0,
            image: 'http://vignette1.wikia.nocookie.net/2007scape/images/2/2b/Initiate_sallet.png/revision/latest?cb=20130407033235',
            stats: {
                attack: {
                    stab: 0,
                    slash: 0,
                    crush: 0,
                    magic: -6,
                    ranged: -2
                },
                defence: {
                    stab: 19,
                    slash: 21,
                    crush: 16,
                    magic: -1,
                    ranged: 19
                },
                other: {
                    strength: 0,
                    rangedStrength: 0,
                    magicStrength: 0,
                    prayer: 4
                }
            },
            requirements: [
                0,          //attack
                0,          //strength
                30,          //defence
                0,          //ranged
                20,          //prayer
                0,          //magic
                0,          //runecrafting
                0,          //construction
                0,          //hitpoints
                0,          //agility
                0,          //herbalore
                0,          //thieving
                0,          //crafting
                0,          //fletching
                0,          //slayer
                0,          //hunter
                0,          //mining
                0,          //smithing
                0,          //fishing
                0,          //cooking
                0,          //firemaking
                0,          //woodcutting
                0,          //farming
            ]
        },
        {
            name: 'Mithril Full Helm',
            slot: 0,
            image: 'http://vignette2.wikia.nocookie.net/2007scape/images/6/63/Mithril_full_helm.png/revision/latest?cb=20131119025847',
            stats: {
                attack: {
                    stab: 0,
                    slash: 0,
                    crush: 0,
                    magic: -6,
                    ranged: -2
                },
                defence: {
                    stab: 13,
                    slash: 14,
                    crush: 11,
                    magic: -1,
                    ranged: 13
                },
                other: {
                    strength: 0,
                    rangedStrength: 0,
                    magicStrength: 0,
                    prayer: 0
                }
            },
            requirements: [
                0,          //attack
                0,          //strength
                20,          //defence
                0,          //ranged
                0,          //prayer
                0,          //magic
                0,          //runecrafting
                0,          //construction
                0,          //hitpoints
                0,          //agility
                0,          //herbalore
                0,          //thieving
                0,          //crafting
                0,          //fletching
                0,          //slayer
                0,          //hunter
                0,          //mining
                0,          //smithing
                0,          //fishing
                0,          //cooking
                0,          //firemaking
                0,          //woodcutting
                0,          //farming
            ]
        },
        {
            name: 'Proselyte Sallet',
            slot: 0,
            image: 'http://vignette2.wikia.nocookie.net/2007scape/images/b/b4/Proselyte_sallet.png/revision/latest?cb=20131006012510',
            stats: {
                attack: {
                    stab: 0,
                    slash: 0,
                    crush: 0,
                    magic: -6,
                    ranged: -2
                },
                defence: {
                    stab: 13,
                    slash: 14,
                    crush: 11,
                    magic: -1,
                    ranged: 13
                },
                other: {
                    strength: 0,
                    rangedStrength: 0,
                    magicStrength: 0,
                    prayer: 3
                }
            },
            requirements: [
                0,          //attack
                0,          //strength
                20,          //defence
                0,          //ranged
                10,          //prayer
                0,          //magic
                0,          //runecrafting
                0,          //construction
                0,          //hitpoints
                0,          //agility
                0,          //herbalore
                0,          //thieving
                0,          //crafting
                0,          //fletching
                0,          //slayer
                0,          //hunter
                0,          //mining
                0,          //smithing
                0,          //fishing
                0,          //cooking
                0,          //firemaking
                0,          //woodcutting
                0,          //farming
            ]
        },
        {
            name: 'Adamant Full Helm',
            slot: 0,
            image: 'http://vignette1.wikia.nocookie.net/2007scape/images/b/b6/Adamant_full_helm.png/revision/latest?cb=20130703005453',
            stats: {
                attack: {
                    stab: 0,
                    slash: 0,
                    crush: 0,
                    magic: -6,
                    ranged: -2
                },
                defence: {
                    stab: 19,
                    slash: 21,
                    crush: 16,
                    magic: -1,
                    ranged: 19
                },
                other: {
                    strength: 0,
                    rangedStrength: 0,
                    magicStrength: 0,
                    prayer: 0
                }
            },
            requirements: [
                0,          //attack
                0,          //strength
                30,          //defence
                0,          //ranged
                0,          //prayer
                0,          //magic
                0,          //runecrafting
                0,          //construction
                0,          //hitpoints
                0,          //agility
                0,          //herbalore
                0,          //thieving
                0,          //crafting
                0,          //fletching
                0,          //slayer
                0,          //hunter
                0,          //mining
                0,          //smithing
                0,          //fishing
                0,          //cooking
                0,          //firemaking
                0,          //woodcutting
                0,          //farming
            ]
        },
        {
            name: 'Rune Full Helm',
            slot: 0,
            image: 'http://vignette1.wikia.nocookie.net/2007scape/images/7/73/Rune_full_helm.png/revision/latest?cb=20130301062650',
            stats: {
                attack: {
                    stab: 0,
                    slash: 0,
                    crush: 0,
                    magic: -6,
                    ranged: -2
                },
                defence: {
                    stab: 30,
                    slash: 32,
                    crush: 27,
                    magic: -1,
                    ranged: 30
                },
                other: {
                    strength: 0,
                    rangedStrength: 0,
                    magicStrength: 0,
                    prayer: 0
                }
            },
            requirements: [
                0,          //attack
                0,          //strength
                40,          //defence
                0,          //ranged
                0,          //prayer
                0,          //magic
                0,          //runecrafting
                0,          //construction
                0,          //hitpoints
                0,          //agility
                0,          //herbalore
                0,          //thieving
                0,          //crafting
                0,          //fletching
                0,          //slayer
                0,          //hunter
                0,          //mining
                0,          //smithing
                0,          //fishing
                0,          //cooking
                0,          //firemaking
                0,          //woodcutting
                0,          //farming
            ]
        },
        {
            name: 'Dragon Full Helm',
            slot: 0,
            image: 'http://vignette3.wikia.nocookie.net/2007scape/images/1/19/Dragon_full_helm.png/revision/latest?cb=20130726044609',
            stats: {
                attack: {
                    stab: 0,
                    slash: 0,
                    crush: 0,
                    magic: -6,
                    ranged: -2
                },
                defence: {
                    stab: 45,
                    slash: 48,
                    crush: 41,
                    magic: -1,
                    ranged: 46
                },
                other: {
                    strength: 0,
                    rangedStrength: 0,
                    magicStrength: 0,
                    prayer: 0
                }
            },
            requirements: [
                0,          //attack
                0,          //strength
                60,          //defence
                0,          //ranged
                0,          //prayer
                0,          //magic
                0,          //runecrafting
                0,          //construction
                0,          //hitpoints
                0,          //agility
                0,          //herbalore
                0,          //thieving
                0,          //crafting
                0,          //fletching
                0,          //slayer
                0,          //hunter
                0,          //mining
                0,          //smithing
                0,          //fishing
                0,          //cooking
                0,          //firemaking
                0,          //woodcutting
                0,          //farming
            ]
        },
        //OTHER HELM,
        {
            name: 'Serpentine Helm',
            slot: 0,
            image: 'http://vignette2.wikia.nocookie.net/2007scape/images/0/0b/Serpentine_helm_%28uncharged%29.png/revision/latest?cb=20150108113144',
            stats: {
                attack: {
                    stab: 0,
                    slash: 0,
                    crush: 0,
                    magic: -5,
                    ranged: -5
                },
                defence: {
                    stab: 0,
                    slash: 0,
                    crush: 0,
                    magic: 0,
                    ranged: 0
                },
                other: {
                    strength: 0,
                    rangedStrength: 0,
                    magicStrength: 0,
                    prayer: 0
                }
            },
            requirements: [
                0,          //attack
                0,          //strength
                30,          //defence
                0,          //ranged
                20,          //prayer
                0,          //magic
                0,          //runecrafting
                0,          //construction
                0,          //hitpoints
                0,          //agility
                0,          //herbalore
                0,          //thieving
                0,          //crafting
                0,          //fletching
                0,          //slayer
                0,          //hunter
                0,          //mining
                0,          //smithing
                0,          //fishing
                0,          //cooking
                0,          //firemaking
                0,          //woodcutting
                0,          //farming
            ]
        },
        //BOOTS
        {
            name: 'Rock-shell Boots',
            slot: 5,
            image: 'http://vignette3.wikia.nocookie.net/2007scape/images/8/8d/Rock-shell_boots.png/revision/latest?cb=20131213001902',
            stats: {
                attack: {
                    stab: 0,
                    slash: 0,
                    crush: 0,
                    magic: 0,
                    ranged: 0
                },
                defence: {
                    stab: 0,
                    slash: 1,
                    crush: 1,
                    magic: 0,
                    ranged: 0
                },
                other: {
                    strength: 0,
                    rangedStrength: 0,
                    magicStrength: 0,
                    prayer: 0
                }
            },
            requirements: [
                0,          //attack
                0,          //strength
                0,          //defence
                0,          //ranged
                0,          //prayer
                0,          //magic
                0,          //runecrafting
                0,          //construction
                0,          //hitpoints
                0,          //agility
                0,          //herbalore
                0,          //thieving
                0,          //crafting
                0,          //fletching
                0,          //slayer
                0,          //hunter
                0,          //mining
                0,          //smithing
                0,          //fishing
                0,          //cooking
                0,          //firemaking
                0,          //woodcutting
                0,          //farming
            ]
        },
        {
            name: 'Fighting Boots',
            slot: 5,
            image: 'http://vignette3.wikia.nocookie.net/2007scape/images/f/f5/Fighting_boots.png/revision/latest?cb=20130629091541',
            stats: {
                attack: {
                    stab: 0,
                    slash: 0,
                    crush: 0,
                    magic: -3,
                    ranged: -1
                },
                defence: {
                    stab: 1,
                    slash: 2,
                    crush: 3,
                    magic: 0,
                    ranged: 0
                },
                other: {
                    strength: 0,
                    rangedStrength: 0,
                    magicStrength: 0,
                    prayer: 0
                }
            },
            requirements: [
                0,          //attack
                0,          //strength
                0,          //defence
                0,          //ranged
                0,          //prayer
                0,          //magic
                0,          //runecrafting
                0,          //construction
                0,          //hitpoints
                0,          //agility
                0,          //herbalore
                0,          //thieving
                0,          //crafting
                0,          //fletching
                0,          //slayer
                0,          //hunter
                0,          //mining
                0,          //smithing
                0,          //fishing
                0,          //cooking
                0,          //firemaking
                0,          //woodcutting
                0,          //farming
            ]
        },
        {
            name: 'Fancy Boots',
            slot: 5,
            image: 'http://vignette4.wikia.nocookie.net/2007scape/images/8/8f/Fancy_boots.png/revision/latest?cb=20130226182655',
            stats: {
                attack: {
                    stab: 0,
                    slash: 0,
                    crush: 0,
                    magic: -3,
                    ranged: -1
                },
                defence: {
                    stab: 1,
                    slash: 2,
                    crush: 3,
                    magic: 0,
                    ranged: 0
                },
                other: {
                    strength: 0,
                    rangedStrength: 0,
                    magicStrength: 0,
                    prayer: 0
                }
            },
            requirements: [
                0,          //attack
                0,          //strength
                0,          //defence
                0,          //ranged
                0,          //prayer
                0,          //magic
                0,          //runecrafting
                0,          //construction
                0,          //hitpoints
                0,          //agility
                0,          //herbalore
                0,          //thieving
                0,          //crafting
                0,          //fletching
                0,          //slayer
                0,          //hunter
                0,          //mining
                0,          //smithing
                0,          //fishing
                0,          //cooking
                0,          //firemaking
                0,          //woodcutting
                0,          //farming
            ]
        },
        {
            name: 'Bronze Boots',
            slot: 5,
            image: 'http://vignette4.wikia.nocookie.net/2007scape/images/5/5e/Bronze_boots.png/revision/latest?cb=20140328031805',
            stats: {
                attack: {
                    stab: 0,
                    slash: 0,
                    crush: 0,
                    magic: -3,
                    ranged: -1
                },
                defence: {
                    stab: 1,
                    slash: 2,
                    crush: 3,
                    magic: 0,
                    ranged: 0
                },
                other: {
                    strength: 0,
                    rangedStrength: 0,
                    magicStrength: 0,
                    prayer: 0
                }
            },
            requirements: [
                0,          //attack
                0,          //strength
                0,          //defence
                0,          //ranged
                0,          //prayer
                0,          //magic
                0,          //runecrafting
                0,          //construction
                0,          //hitpoints
                0,          //agility
                0,          //herbalore
                0,          //thieving
                0,          //crafting
                0,          //fletching
                0,          //slayer
                0,          //hunter
                0,          //mining
                0,          //smithing
                0,          //fishing
                0,          //cooking
                0,          //firemaking
                0,          //woodcutting
                0,          //farming
            ]
        },
        {
            name: 'Iron Boots',
            slot: 5,
            image: 'http://vignette4.wikia.nocookie.net/2007scape/images/b/b4/Iron_boots.png/revision/latest?cb=20131120171149',
            stats: {
                attack: {
                    stab: 0,
                    slash: 0,
                    crush: 0,
                    magic: -3,
                    ranged: -1
                },
                defence: {
                    stab: 2,
                    slash: 3,
                    crush: 4,
                    magic: 0,
                    ranged: 0
                },
                other: {
                    strength: 0,
                    rangedStrength: 0,
                    magicStrength: 0,
                    prayer: 0
                }
            },
            requirements: [
                0,          //attack
                0,          //strength
                0,          //defence
                0,          //ranged
                0,          //prayer
                0,          //magic
                0,          //runecrafting
                0,          //construction
                0,          //hitpoints
                0,          //agility
                0,          //herbalore
                0,          //thieving
                0,          //crafting
                0,          //fletching
                0,          //slayer
                0,          //hunter
                0,          //mining
                0,          //smithing
                0,          //fishing
                0,          //cooking
                0,          //firemaking
                0,          //woodcutting
                0,          //farming
            ]
        },
        {
            name: 'Steel Boots',
            slot: 5,
            image: 'http://vignette2.wikia.nocookie.net/2007scape/images/9/98/Steel_boots.png/revision/latest?cb=20140309032657',
            stats: {
                attack: {
                    stab: 0,
                    slash: 0,
                    crush: 0,
                    magic: -3,
                    ranged: -1
                },
                defence: {
                    stab: 5,
                    slash: 6,
                    crush: 7,
                    magic: 0,
                    ranged: 0
                },
                other: {
                    strength: 0,
                    rangedStrength: 0,
                    magicStrength: 0,
                    prayer: 0
                }
            },
            requirements: [
                0,          //attack
                0,          //strength
                5,          //defence
                0,          //ranged
                0,          //prayer
                0,          //magic
                0,          //runecrafting
                0,          //construction
                0,          //hitpoints
                0,          //agility
                0,          //herbalore
                0,          //thieving
                0,          //crafting
                0,          //fletching
                0,          //slayer
                0,          //hunter
                0,          //mining
                0,          //smithing
                0,          //fishing
                0,          //cooking
                0,          //firemaking
                0,          //woodcutting
                0,          //farming
            ]
        },
        {
            name: 'Black Boots',
            slot: 5,
            image: 'http://vignette2.wikia.nocookie.net/2007scape/images/1/1f/Black_boots.png/revision/latest?cb=20131107214234',
            stats: {
                attack: {
                    stab: 0,
                    slash: 0,
                    crush: 0,
                    magic: -3,
                    ranged: -1
                },
                defence: {
                    stab: 7,
                    slash: 8,
                    crush: 9,
                    magic: 0,
                    ranged: 0
                },
                other: {
                    strength: 0,
                    rangedStrength: 0,
                    magicStrength: 0,
                    prayer: 0
                }
            },
            requirements: [
                0,          //attack
                0,          //strength
                10,          //defence
                0,          //ranged
                0,          //prayer
                0,          //magic
                0,          //runecrafting
                0,          //construction
                0,          //hitpoints
                0,          //agility
                0,          //herbalore
                0,          //thieving
                0,          //crafting
                0,          //fletching
                0,          //slayer
                0,          //hunter
                0,          //mining
                0,          //smithing
                0,          //fishing
                0,          //cooking
                0,          //firemaking
                0,          //woodcutting
                0,          //farming
            ]
        },
        {
            name: 'Mithril Boots',
            slot: 5,
            image: 'http://vignette4.wikia.nocookie.net/2007scape/images/e/e1/Mithril_boots.png/revision/latest?cb=20131119025839',
            stats: {
                attack: {
                    stab: 0,
                    slash: 0,
                    crush: 0,
                    magic: -3,
                    ranged: -1
                },
                defence: {
                    stab: 8,
                    slash: 9,
                    crush: 10,
                    magic: 0,
                    ranged: 0
                },
                other: {
                    strength: 0,
                    rangedStrength: 0,
                    magicStrength: 0,
                    prayer: 0
                }
            },
            requirements: [
                0,          //attack
                0,          //strength
                20,          //defence
                0,          //ranged
                0,          //prayer
                0,          //magic
                0,          //runecrafting
                0,          //construction
                0,          //hitpoints
                0,          //agility
                0,          //herbalore
                0,          //thieving
                0,          //crafting
                0,          //fletching
                0,          //slayer
                0,          //hunter
                0,          //mining
                0,          //smithing
                0,          //fishing
                0,          //cooking
                0,          //firemaking
                0,          //woodcutting
                0,          //farming
            ]
        },
        {
            name: 'Adamant Boots',
            slot: 5,
            image: 'http://vignette4.wikia.nocookie.net/2007scape/images/e/e5/Adamant_boots.png/revision/latest?cb=20131120171018',
            stats: {
                attack: {
                    stab: 0,
                    slash: 0,
                    crush: 0,
                    magic: -3,
                    ranged: -1
                },
                defence: {
                    stab: 10,
                    slash: 11,
                    crush: 12,
                    magic: 0,
                    ranged: 0
                },
                other: {
                    strength: 1,
                    rangedStrength: 0,
                    magicStrength: 0,
                    prayer: 0
                }
            },
            requirements: [
                0,          //attack
                0,          //strength
                30,          //defence
                0,          //ranged
                0,          //prayer
                0,          //magic
                0,          //runecrafting
                0,          //construction
                0,          //hitpoints
                0,          //agility
                0,          //herbalore
                0,          //thieving
                0,          //crafting
                0,          //fletching
                0,          //slayer
                0,          //hunter
                0,          //mining
                0,          //smithing
                0,          //fishing
                0,          //cooking
                0,          //firemaking
                0,          //woodcutting
                0,          //farming
            ]
        },
        {
            name: 'Rune Boots',
            slot: 5,
            image: 'http://vignette1.wikia.nocookie.net/2007scape/images/e/e8/Rune_boots.png/revision/latest?cb=20140806031749',
            stats: {
                attack: {
                    stab: 0,
                    slash: 0,
                    crush: 0,
                    magic: -3,
                    ranged: -1
                },
                defence: {
                    stab: 12,
                    slash: 13,
                    crush: 14,
                    magic: 0,
                    ranged: 0
                },
                other: {
                    strength: 2,
                    rangedStrength: 0,
                    magicStrength: 0,
                    prayer: 0
                }
            },
            requirements: [
                0,          //attack
                0,          //strength
                40,          //defence
                0,          //ranged
                0,          //prayer
                0,          //magic
                0,          //runecrafting
                0,          //construction
                0,          //hitpoints
                0,          //agility
                0,          //herbalore
                0,          //thieving
                0,          //crafting
                0,          //fletching
                0,          //slayer
                0,          //hunter
                0,          //mining
                0,          //smithing
                0,          //fishing
                0,          //cooking
                0,          //firemaking
                0,          //woodcutting
                0,          //farming
            ]
        },
        {
            name: 'Dragon Boots',
            slot: 5,
            image: 'http://vignette4.wikia.nocookie.net/2007scape/images/d/d7/Dragon_boots.png/revision/latest?cb=20131017220618',
            stats: {
                attack: {
                    stab: 0,
                    slash: 0,
                    crush: 0,
                    magic: -3,
                    ranged: -1
                },
                defence: {
                    stab: 16,
                    slash: 17,
                    crush: 18,
                    magic: 0,
                    ranged: 0
                },
                other: {
                    strength: 4,
                    rangedStrength: 0,
                    magicStrength: 0,
                    prayer: 0
                }
            },
            requirements: [
                0,          //attack
                0,          //strength
                60,          //defence
                0,          //ranged
                0,          //prayer
                0,          //magic
                0,          //runecrafting
                0,          //construction
                0,          //hitpoints
                0,          //agility
                0,          //herbalore
                0,          //thieving
                0,          //crafting
                0,          //fletching
                0,          //slayer
                0,          //hunter
                0,          //mining
                0,          //smithing
                0,          //fishing
                0,          //cooking
                0,          //firemaking
                0,          //woodcutting
                0,          //farming
            ]
        },
        {
            name: 'Bandos Boots',
            slot: 5,
            image: 'http://vignette1.wikia.nocookie.net/2007scape/images/0/0c/Bandos_boots.png/revision/latest?cb=20140814154330',
            stats: {
                attack: {
                    stab: 0,
                    slash: 0,
                    crush: 0,
                    magic: -5,
                    ranged: -3
                },
                defence: {
                    stab: 17,
                    slash: 18,
                    crush: 19,
                    magic: 0,
                    ranged: 15
                },
                other: {
                    strength: 0,
                    rangedStrength: 0,
                    magicStrength: 0,
                    prayer: 1
                }
            },
            requirements: [
                0,          //attack
                0,          //strength
                65,          //defence
                0,          //ranged
                0,          //prayer
                0,          //magic
                0,          //runecrafting
                0,          //construction
                0,          //hitpoints
                0,          //agility
                0,          //herbalore
                0,          //thieving
                0,          //crafting
                0,          //fletching
                0,          //slayer
                0,          //hunter
                0,          //mining
                0,          //smithing
                0,          //fishing
                0,          //cooking
                0,          //firemaking
                0,          //woodcutting
                0,          //farming
            ]
        },
        {
            name: 'Primordial Boots',
            slot: 5,
            image: 'http://vignette3.wikia.nocookie.net/2007scape/images/4/42/Primordial_boots.png/revision/latest?cb=20150903194749',
            stats: {
                attack: {
                    stab: 2,
                    slash: 2,
                    crush: 2,
                    magic: -4,
                    ranged: -1
                },
                defence: {
                    stab: 22,
                    slash: 22,
                    crush: 22,
                    magic: 0,
                    ranged: 0
                },
                other: {
                    strength: 5,
                    rangedStrength: 0,
                    magicStrength: 0,
                    prayer: 0
                }
            },
            requirements: [
                0,          //attack
                75,          //strength
                75,          //defence
                0,          //ranged
                0,          //prayer
                0,          //magic
                0,          //runecrafting
                0,          //construction
                0,          //hitpoints
                0,          //agility
                0,          //herbalore
                0,          //thieving
                0,          //crafting
                0,          //fletching
                0,          //slayer
                0,          //hunter
                0,          //mining
                0,          //smithing
                0,          //fishing
                0,          //cooking
                0,          //firemaking
                0,          //woodcutting
                0,          //farming
            ]
        },
        {
            name: 'Spined Boots',
            slot: 5,
            image: 'http://vignette4.wikia.nocookie.net/2007scape/images/d/d3/Spined_boots.png/revision/latest?cb=20131213002101',
            stats: {
                attack: {
                    stab: 0,
                    slash: 0,
                    crush: 0,
                    magic: 0,
                    ranged: 0
                },
                defence: {
                    stab: 0,
                    slash: 1,
                    crush: 1,
                    magic: 0,
                    ranged: 0
                },
                other: {
                    strength: 0,
                    rangedStrength: 0,
                    magicStrength: 0,
                    prayer: 0
                }
            },
            requirements: [
                0,          //attack
                0,          //strength
                0,          //defence
                0,          //ranged
                0,          //prayer
                0,          //magic
                0,          //runecrafting
                0,          //construction
                0,          //hitpoints
                0,          //agility
                0,          //herbalore
                0,          //thieving
                0,          //crafting
                0,          //fletching
                0,          //slayer
                0,          //hunter
                0,          //mining
                0,          //smithing
                0,          //fishing
                0,          //cooking
                0,          //firemaking
                0,          //woodcutting
                0,          //farming
            ]
        },
        {
            name: 'Leather Boots',
            slot: 5,
            image: 'http://vignette4.wikia.nocookie.net/2007scape/images/e/ea/Leather_boots.png/revision/latest?cb=20131027015116',
            stats: {
                attack: {
                    stab: 0,
                    slash: 0,
                    crush: 0,
                    magic: 0,
                    ranged: 0
                },
                defence: {
                    stab: 0,
                    slash: 1,
                    crush: 1,
                    magic: 0,
                    ranged: 0
                },
                other: {
                    strength: 0,
                    rangedStrength: 0,
                    magicStrength: 0,
                    prayer: 0
                }
            },
            requirements: [
                0,          //attack
                0,          //strength
                0,          //defence
                0,          //ranged
                0,          //prayer
                0,          //magic
                0,          //runecrafting
                0,          //construction
                0,          //hitpoints
                0,          //agility
                0,          //herbalore
                0,          //thieving
                0,          //crafting
                0,          //fletching
                0,          //slayer
                0,          //hunter
                0,          //mining
                0,          //smithing
                0,          //fishing
                0,          //cooking
                0,          //firemaking
                0,          //woodcutting
                0,          //farming
            ]
        },
        {
            name: 'Frog-leather Boots',
            slot: 5,
            image: 'http://vignette4.wikia.nocookie.net/2007scape/images/8/8c/Frog-leather_boots.png/revision/latest?cb=20131228052922',
            stats: {
                attack: {
                    stab: 0,
                    slash: 0,
                    crush: 0,
                    magic: -8,
                    ranged: 0
                },
                defence: {
                    stab: 1,
                    slash: 1,
                    crush: 1,
                    magic: 0,
                    ranged: 1
                },
                other: {
                    strength: 0,
                    rangedStrength: 0,
                    magicStrength: 0,
                    prayer: 0
                }
            },
            requirements: [
                0,          //attack
                0,          //strength
                25,          //defence
                25,          //ranged
                0,          //prayer
                0,          //magic
                0,          //runecrafting
                0,          //construction
                0,          //hitpoints
                0,          //agility
                0,          //herbalore
                0,          //thieving
                0,          //crafting
                0,          //fletching
                0,          //slayer
                0,          //hunter
                0,          //mining
                0,          //smithing
                0,          //fishing
                0,          //cooking
                0,          //firemaking
                0,          //woodcutting
                0,          //farming
            ]
        },
        {
            name: 'Snakeskin Boots',
            slot: 5,
            image: 'http://vignette3.wikia.nocookie.net/2007scape/images/4/42/Snakeskin_boots.png/revision/latest?cb=20140709193627',
            stats: {
                attack: {
                    stab: 0,
                    slash: 0,
                    crush: 0,
                    magic: -10,
                    ranged: 3
                },
                defence: {
                    stab: 1,
                    slash: 1,
                    crush: 2,
                    magic: 1,
                    ranged: 0
                },
                other: {
                    strength: 0,
                    rangedStrength: 0,
                    magicStrength: 0,
                    prayer: 0
                }
            },
            requirements: [
                0,          //attack
                0,          //strength
                30,          //defence
                30,          //ranged
                0,          //prayer
                0,          //magic
                0,          //runecrafting
                0,          //construction
                0,          //hitpoints
                0,          //agility
                0,          //herbalore
                0,          //thieving
                0,          //crafting
                0,          //fletching
                0,          //slayer
                0,          //hunter
                0,          //mining
                0,          //smithing
                0,          //fishing
                0,          //cooking
                0,          //firemaking
                0,          //woodcutting
                0,          //farming
            ]
        },
        {
            name: 'Ranger Boots',
            slot: 5,
            image: 'http://vignette2.wikia.nocookie.net/2007scape/images/f/f3/Ranger_boots.png/revision/latest?cb=20150330173511',
            stats: {
                attack: {
                    stab: 0,
                    slash: 0,
                    crush: 0,
                    magic: -10,
                    ranged: 8
                },
                defence: {
                    stab: 2,
                    slash: 3,
                    crush: 4,
                    magic: 2,
                    ranged: 0
                },
                other: {
                    strength: 0,
                    rangedStrength: 0,
                    magicStrength: 0,
                    prayer: 0
                }
            },
            requirements: [
                0,          //attack
                0,          //strength
                0,          //defence
                40,          //ranged
                0,          //prayer
                0,          //magic
                0,          //runecrafting
                0,          //construction
                0,          //hitpoints
                0,          //agility
                0,          //herbalore
                0,          //thieving
                0,          //crafting
                0,          //fletching
                0,          //slayer
                0,          //hunter
                0,          //mining
                0,          //smithing
                0,          //fishing
                0,          //cooking
                0,          //firemaking
                0,          //woodcutting
                0,          //farming
            ]
        },
        {
            name: 'Pegasian Boots',
            slot: 5,
            image: 'http://vignette1.wikia.nocookie.net/2007scape/images/7/71/Pegasian_boots.png/revision/latest?cb=20150903194749',
            stats: {
                attack: {
                    stab: 0,
                    slash: 0,
                    crush: 0,
                    magic: -12,
                    ranged: 12
                },
                defence: {
                    stab: 5,
                    slash: 5,
                    crush: 5,
                    magic: 5,
                    ranged: 5
                },
                other: {
                    strength: 0,
                    rangedStrength: 0,
                    magicStrength: 0,
                    prayer: 0
                }
            },
            requirements: [
                0,          //attack
                0,          //strength
                75,          //defence
                75,          //ranged
                0,          //prayer
                0,          //magic
                0,          //runecrafting
                0,          //construction
                0,          //hitpoints
                0,          //agility
                0,          //herbalore
                0,          //thieving
                0,          //crafting
                0,          //fletching
                0,          //slayer
                0,          //hunter
                0,          //mining
                0,          //smithing
                0,          //fishing
                0,          //cooking
                0,          //firemaking
                0,          //woodcutting
                0,          //farming
            ]
        },
        {
            name: 'Skeletal Boots',
            slot: 5,
            image: 'http://vignette3.wikia.nocookie.net/2007scape/images/0/0e/Skeletal_boots.png/revision/latest?cb=20131207055617',
            stats: {
                attack: {
                    stab: 0,
                    slash: 0,
                    crush: 0,
                    magic: 0,
                    ranged: 0
                },
                defence: {
                    stab: 0,
                    slash: 1,
                    crush: 1,
                    magic: 0,
                    ranged: 0
                },
                other: {
                    strength: 0,
                    rangedStrength: 0,
                    magicStrength: 0,
                    prayer: 0
                }
            },
            requirements: [
                0,          //attack
                0,          //strength
                0,          //defence
                0,          //ranged
                0,          //prayer
                0,          //magic
                0,          //runecrafting
                0,          //construction
                0,          //hitpoints
                0,          //agility
                0,          //herbalore
                0,          //thieving
                0,          //crafting
                0,          //fletching
                0,          //slayer
                0,          //hunter
                0,          //mining
                0,          //smithing
                0,          //fishing
                0,          //cooking
                0,          //firemaking
                0,          //woodcutting
                0,          //farming
            ]
        },
        {
            name: 'Ghostly Boots',
            slot: 5,
            image: 'http://vignette3.wikia.nocookie.net/2007scape/images/a/a2/Ghostly_boots.png/revision/latest?cb=20130401221213',
            stats: {
                attack: {
                    stab: 0,
                    slash: 0,
                    crush: 0,
                    magic: 2,
                    ranged: 0
                },
                defence: {
                    stab: 0,
                    slash: 0,
                    crush: 0,
                    magic: 2,
                    ranged: 0
                },
                other: {
                    strength: 0,
                    rangedStrength: 0,
                    magicStrength: 0,
                    prayer: 0
                }
            },
            requirements: [
                0,          //attack
                0,          //strength
                0,          //defence
                0,          //ranged
                0,          //prayer
                0,          //magic
                0,          //runecrafting
                0,          //construction
                0,          //hitpoints
                0,          //agility
                0,          //herbalore
                0,          //thieving
                0,          //crafting
                0,          //fletching
                0,          //slayer
                0,          //hunter
                0,          //mining
                0,          //smithing
                0,          //fishing
                0,          //cooking
                0,          //firemaking
                0,          //woodcutting
                0,          //farming
            ]
        },
        {
            name: 'Moonclan Boots',
            slot: 5,
            image: 'http://vignette4.wikia.nocookie.net/2007scape/images/3/3a/Moonclan_boots.png/revision/latest?cb=20140330015311',
            stats: {
                attack: {
                    stab: 0,
                    slash: 0,
                    crush: 0,
                    magic: 2,
                    ranged: -5
                },
                defence: {
                    stab: 2,
                    slash: 2,
                    crush: 2,
                    magic: 2,
                    ranged: -5
                },
                other: {
                    strength: 0,
                    rangedStrength: 0,
                    magicStrength: 0,
                    prayer: 0
                }
            },
            requirements: [
                0,          //attack
                0,          //strength
                0,          //defence
                0,          //ranged
                0,          //prayer
                0,          //magic
                0,          //runecrafting
                0,          //construction
                0,          //hitpoints
                0,          //agility
                0,          //herbalore
                0,          //thieving
                0,          //crafting
                0,          //fletching
                0,          //slayer
                0,          //hunter
                0,          //mining
                0,          //smithing
                0,          //fishing
                0,          //cooking
                0,          //firemaking
                0,          //woodcutting
                0,          //farming
            ]
        },
        {
            name: 'Splitbark Boots',
            slot: 5,
            image: 'http://vignette2.wikia.nocookie.net/2007scape/images/4/43/Splitbark_boots.png/revision/latest?cb=20140726051921',
            stats: {
                attack: {
                    stab: 0,
                    slash: 0,
                    crush: 0,
                    magic: 2,
                    ranged: -1
                },
                defence: {
                    stab: 3,
                    slash: 2,
                    crush: 4,
                    magic: 2,
                    ranged: 0
                },
                other: {
                    strength: 0,
                    rangedStrength: 0,
                    magicStrength: 0,
                    prayer: 0
                }
            },
            requirements: [
                0,          //attack
                0,          //strength
                40,          //defence
                0,          //ranged
                0,          //prayer
                40,          //magic
                0,          //runecrafting
                0,          //construction
                0,          //hitpoints
                0,          //agility
                0,          //herbalore
                0,          //thieving
                0,          //crafting
                0,          //fletching
                0,          //slayer
                0,          //hunter
                0,          //mining
                0,          //smithing
                0,          //fishing
                0,          //cooking
                0,          //firemaking
                0,          //woodcutting
                0,          //farming
            ]
        },
        {
            name: 'Wizard Boots',
            slot: 5,
            image: 'http://vignette3.wikia.nocookie.net/2007scape/images/9/99/Wizard_boots.png/revision/latest?cb=20130801125841',
            stats: {
                attack: {
                    stab: 0,
                    slash: 0,
                    crush: 0,
                    magic: 4,
                    ranged: 0
                },
                defence: {
                    stab: 0,
                    slash: 0,
                    crush: 0,
                    magic: 4,
                    ranged: 0
                },
                other: {
                    strength: 0,
                    rangedStrength: 0,
                    magicStrength: 0,
                    prayer: 0
                }
            },
            requirements: [
                0,          //attack
                0,          //strength
                0,          //defence
                0,          //ranged
                0,          //prayer
                20,          //magic
                0,          //runecrafting
                0,          //construction
                0,          //hitpoints
                0,          //agility
                0,          //herbalore
                0,          //thieving
                0,          //crafting
                0,          //fletching
                0,          //slayer
                0,          //hunter
                0,          //mining
                0,          //smithing
                0,          //fishing
                0,          //cooking
                0,          //firemaking
                0,          //woodcutting
                0,          //farming
            ]
        },
        {
            name: 'Mystic Boots',
            slot: 5,
            image: 'http://vignette3.wikia.nocookie.net/2007scape/images/7/7f/Mystic_boots_%28blue%29.png/revision/latest?cb=20131117221734',
            stats: {
                attack: {
                    stab: 0,
                    slash: 0,
                    crush: 0,
                    magic: 3,
                    ranged: 0
                },
                defence: {
                    stab: 0,
                    slash: 0,
                    crush: 0,
                    magic: 3,
                    ranged: 0
                },
                other: {
                    strength: 0,
                    rangedStrength: 0,
                    magicStrength: 0,
                    prayer: 0
                }
            },
            requirements: [
                0,          //attack
                0,          //strength
                20,          //defence
                0,          //ranged
                0,          //prayer
                40,          //magic
                0,          //runecrafting
                0,          //construction
                0,          //hitpoints
                0,          //agility
                0,          //herbalore
                0,          //thieving
                0,          //crafting
                0,          //fletching
                0,          //slayer
                0,          //hunter
                0,          //mining
                0,          //smithing
                0,          //fishing
                0,          //cooking
                0,          //firemaking
                0,          //woodcutting
                0,          //farming
            ]
        },
        {
            name: 'Infinity Boots',
            slot: 5,
            image: 'http://vignette1.wikia.nocookie.net/2007scape/images/d/d8/Infinity_boots.png/revision/latest?cb=20131206213324',
            stats: {
                attack: {
                    stab: 0,
                    slash: 0,
                    crush: 0,
                    magic: 5,
                    ranged: 0
                },
                defence: {
                    stab: 0,
                    slash: 0,
                    crush: 0,
                    magic: 5,
                    ranged: 0
                },
                other: {
                    strength: 0,
                    rangedStrength: 0,
                    magicStrength: 0,
                    prayer: 0
                }
            },
            requirements: [
                0,          //attack
                0,          //strength
                25,          //defence
                0,          //ranged
                0,          //prayer
                50,          //magic
                0,          //runecrafting
                0,          //construction
                0,          //hitpoints
                0,          //agility
                0,          //herbalore
                0,          //thieving
                0,          //crafting
                0,          //fletching
                0,          //slayer
                0,          //hunter
                0,          //mining
                0,          //smithing
                0,          //fishing
                0,          //cooking
                0,          //firemaking
                0,          //woodcutting
                0,          //farming
            ]
        },
        {
            name: 'Lunar Boots',
            slot: 5,
            image: 'http://vignette2.wikia.nocookie.net/2007scape/images/8/84/Lunar_boots.png/revision/latest?cb=20140102213716',
            stats: {
                attack: {
                    stab: 0,
                    slash: 0,
                    crush: 0,
                    magic: 2,
                    ranged: -1
                },
                defence: {
                    stab: 0,
                    slash: 1,
                    crush: 1,
                    magic: 1,
                    ranged: 0
                },
                other: {
                    strength: 0,
                    rangedStrength: 0,
                    magicStrength: 0,
                    prayer: 0
                }
            },
            requirements: [
                0,          //attack
                0,          //strength
                40,          //defence
                0,          //ranged
                0,          //prayer
                65,          //magic
                0,          //runecrafting
                0,          //construction
                0,          //hitpoints
                0,          //agility
                0,          //herbalore
                0,          //thieving
                0,          //crafting
                0,          //fletching
                0,          //slayer
                0,          //hunter
                0,          //mining
                0,          //smithing
                0,          //fishing
                0,          //cooking
                0,          //firemaking
                0,          //woodcutting
                0,          //farming
            ]
        },
        {
            name: 'Eternal Boots',
            slot: 5,
            image: 'http://vignette4.wikia.nocookie.net/2007scape/images/e/ee/Eternal_boots.png/revision/latest?cb=20150903194748',
            stats: {
                attack: {
                    stab: 0,
                    slash: 0,
                    crush: 0,
                    magic: 8,
                    ranged: 0
                },
                defence: {
                    stab: 5,
                    slash: 5,
                    crush: 5,
                    magic: 8,
                    ranged: 5
                },
                other: {
                    strength: 0,
                    rangedStrength: 0,
                    magicStrength: 0,
                    prayer: 0
                }
            },
            requirements: [
                0,          //attack
                0,          //strength
                75,          //defence
                0,          //ranged
                0,          //prayer
                75,          //magic
                0,          //runecrafting
                0,          //construction
                0,          //hitpoints
                0,          //agility
                0,          //herbalore
                0,          //thieving
                0,          //crafting
                0,          //fletching
                0,          //slayer
                0,          //hunter
                0,          //mining
                0,          //smithing
                0,          //fishing
                0,          //cooking
                0,          //firemaking
                0,          //woodcutting
                0,          //farming
            ]
        },
    ];

    var service = {
        'items': items,
        'slots': slots,
        'skills': skills
    };

    return service;
}]);