export interface Pokemon {
    abilities: [
      {
        "ability": {
          "name": "cute-charm",
          "url": "https://pokeapi.co/api/v2/ability/56/"
        },
        "is_hidden": false,
        "slot": 1
      },
      {
        "ability": {
          "name": "magic-guard",
          "url": "https://pokeapi.co/api/v2/ability/98/"
        },
        "is_hidden": false,
        "slot": 2
      },
      {
        "ability": {
          "name": "friend-guard",
          "url": "https://pokeapi.co/api/v2/ability/132/"
        },
        "is_hidden": true,
        "slot": 3
      }
    ],
    base_experience: number,
    forms: [
      {
        name: string,
        url: string
      }
    ],
    game_indices: {
        game_index: number,
        version: {
          name: string,
          url: string
        }
    }[],
    height: number,
    "held_items": [
      {
        item: {
          name: string,
          url: string
        },
        version_details: {
            rarity: number,
            version: {
              name: string,
              url: string
            }
        }[],
          
      },
      {
        "item": {
          "name": "leppa-berry",
          "url": "https://pokeapi.co/api/v2/item/131/"
        },
        "version_details": [
          {
            "rarity": 50,
            "version": {
              "name": "ruby",
              "url": "https://pokeapi.co/api/v2/version/7/"
            }
          },
          {
            "rarity": 50,
            "version": {
              "name": "sapphire",
              "url": "https://pokeapi.co/api/v2/version/8/"
            }
          },
          {
            "rarity": 50,
            "version": {
              "name": "emerald",
              "url": "https://pokeapi.co/api/v2/version/9/"
            }
          },
          {
            "rarity": 50,
            "version": {
              "name": "diamond",
              "url": "https://pokeapi.co/api/v2/version/12/"
            }
          },
          {
            "rarity": 50,
            "version": {
              "name": "pearl",
              "url": "https://pokeapi.co/api/v2/version/13/"
            }
          },
          {
            "rarity": 50,
            "version": {
              "name": "platinum",
              "url": "https://pokeapi.co/api/v2/version/14/"
            }
          },
          {
            "rarity": 50,
            "version": {
              "name": "heartgold",
              "url": "https://pokeapi.co/api/v2/version/15/"
            }
          },
          {
            "rarity": 50,
            "version": {
              "name": "soulsilver",
              "url": "https://pokeapi.co/api/v2/version/16/"
            }
          },
          {
            "rarity": 50,
            "version": {
              "name": "black",
              "url": "https://pokeapi.co/api/v2/version/17/"
            }
          },
          {
            "rarity": 50,
            "version": {
              "name": "white",
              "url": "https://pokeapi.co/api/v2/version/18/"
            }
          },
          {
            "rarity": 50,
            "version": {
              "name": "black-2",
              "url": "https://pokeapi.co/api/v2/version/21/"
            }
          },
          {
            "rarity": 50,
            "version": {
              "name": "white-2",
              "url": "https://pokeapi.co/api/v2/version/22/"
            }
          }
        ]
      },
      {
        "item": {
          "name": "comet-shard",
          "url": "https://pokeapi.co/api/v2/item/624/"
        },
        "version_details": [
          {
            "rarity": 1,
            "version": {
              "name": "black",
              "url": "https://pokeapi.co/api/v2/version/17/"
            }
          },
          {
            "rarity": 1,
            "version": {
              "name": "white",
              "url": "https://pokeapi.co/api/v2/version/18/"
            }
          },
          {
            "rarity": 1,
            "version": {
              "name": "black-2",
              "url": "https://pokeapi.co/api/v2/version/21/"
            }
          },
          {
            "rarity": 1,
            "version": {
              "name": "white-2",
              "url": "https://pokeapi.co/api/v2/version/22/"
            }
          }
        ]
      }
    ],
    "id": 35,
    "is_default": true,
    "location_area_encounters": "https://pokeapi.co/api/v2/pokemon/35/encounters",
    "moves": [
      {
        "move": {
          "name": "pound",
          "url": "https://pokeapi.co/api/v2/move/1/"
        },
        "version_group_details": [
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "red-blue",
              "url": "https://pokeapi.co/api/v2/version-group/1/"
            }
          },
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "yellow",
              "url": "https://pokeapi.co/api/v2/version-group/2/"
            }
          },
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "gold-silver",
              "url": "https://pokeapi.co/api/v2/version-group/3/"
            }
          },
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "crystal",
              "url": "https://pokeapi.co/api/v2/version-group/4/"
            }
          },
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "ruby-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/5/"
            }
          },
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "emerald",
              "url": "https://pokeapi.co/api/v2/version-group/6/"
            }
          },
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "firered-leafgreen",
              "url": "https://pokeapi.co/api/v2/version-group/7/"
            }
          },
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "diamond-pearl",
              "url": "https://pokeapi.co/api/v2/version-group/8/"
            }
          },
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "platinum",
              "url": "https://pokeapi.co/api/v2/version-group/9/"
            }
          },
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "heartgold-soulsilver",
              "url": "https://pokeapi.co/api/v2/version-group/10/"
            }
          },
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "black-white",
              "url": "https://pokeapi.co/api/v2/version-group/11/"
            }
          },
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "colosseum",
              "url": "https://pokeapi.co/api/v2/version-group/12/"
            }
          },
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "xd",
              "url": "https://pokeapi.co/api/v2/version-group/13/"
            }
          },
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "black-2-white-2",
              "url": "https://pokeapi.co/api/v2/version-group/14/"
            }
          },
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "x-y",
              "url": "https://pokeapi.co/api/v2/version-group/15/"
            }
          },
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          },
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "sun-moon",
              "url": "https://pokeapi.co/api/v2/version-group/17/"
            }
          },
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "ultra-sun-ultra-moon",
              "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
          },
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "lets-go-pikachu-lets-go-eevee",
              "url": "https://pokeapi.co/api/v2/version-group/19/"
            }
          },
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "sword-shield",
              "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "double-slap",
          "url": "https://pokeapi.co/api/v2/move/3/"
        },
        "version_group_details": [
          {
            "level_learned_at": 18,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "red-blue",
              "url": "https://pokeapi.co/api/v2/version-group/1/"
            }
          },
          {
            "level_learned_at": 18,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "yellow",
              "url": "https://pokeapi.co/api/v2/version-group/2/"
            }
          },
          {
            "level_learned_at": 13,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "gold-silver",
              "url": "https://pokeapi.co/api/v2/version-group/3/"
            }
          },
          {
            "level_learned_at": 13,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "crystal",
              "url": "https://pokeapi.co/api/v2/version-group/4/"
            }
          },
          {
            "level_learned_at": 13,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "ruby-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/5/"
            }
          },
          {
            "level_learned_at": 13,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "emerald",
              "url": "https://pokeapi.co/api/v2/version-group/6/"
            }
          },
          {
            "level_learned_at": 13,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "firered-leafgreen",
              "url": "https://pokeapi.co/api/v2/version-group/7/"
            }
          },
          {
            "level_learned_at": 10,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "diamond-pearl",
              "url": "https://pokeapi.co/api/v2/version-group/8/"
            }
          },
          {
            "level_learned_at": 10,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "platinum",
              "url": "https://pokeapi.co/api/v2/version-group/9/"
            }
          },
          {
            "level_learned_at": 10,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "heartgold-soulsilver",
              "url": "https://pokeapi.co/api/v2/version-group/10/"
            }
          },
          {
            "level_learned_at": 10,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "black-white",
              "url": "https://pokeapi.co/api/v2/version-group/11/"
            }
          },
          {
            "level_learned_at": 13,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "colosseum",
              "url": "https://pokeapi.co/api/v2/version-group/12/"
            }
          },
          {
            "level_learned_at": 13,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "xd",
              "url": "https://pokeapi.co/api/v2/version-group/13/"
            }
          },
          {
            "level_learned_at": 10,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "black-2-white-2",
              "url": "https://pokeapi.co/api/v2/version-group/14/"
            }
          },
          {
            "level_learned_at": 10,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "x-y",
              "url": "https://pokeapi.co/api/v2/version-group/15/"
            }
          },
          {
            "level_learned_at": 10,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          },
          {
            "level_learned_at": 10,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "sun-moon",
              "url": "https://pokeapi.co/api/v2/version-group/17/"
            }
          },
          {
            "level_learned_at": 10,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "ultra-sun-ultra-moon",
              "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
          },
          {
            "level_learned_at": 12,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "lets-go-pikachu-lets-go-eevee",
              "url": "https://pokeapi.co/api/v2/version-group/19/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "mega-punch",
          "url": "https://pokeapi.co/api/v2/move/5/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "red-blue",
              "url": "https://pokeapi.co/api/v2/version-group/1/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "yellow",
              "url": "https://pokeapi.co/api/v2/version-group/2/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "emerald",
              "url": "https://pokeapi.co/api/v2/version-group/6/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "firered-leafgreen",
              "url": "https://pokeapi.co/api/v2/version-group/7/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sword-shield",
              "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "fire-punch",
          "url": "https://pokeapi.co/api/v2/move/7/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "gold-silver",
              "url": "https://pokeapi.co/api/v2/version-group/3/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "crystal",
              "url": "https://pokeapi.co/api/v2/version-group/4/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "emerald",
              "url": "https://pokeapi.co/api/v2/version-group/6/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "platinum",
              "url": "https://pokeapi.co/api/v2/version-group/9/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "heartgold-soulsilver",
              "url": "https://pokeapi.co/api/v2/version-group/10/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "black-2-white-2",
              "url": "https://pokeapi.co/api/v2/version-group/14/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "ultra-sun-ultra-moon",
              "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "lets-go-pikachu-lets-go-eevee",
              "url": "https://pokeapi.co/api/v2/version-group/19/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sword-shield",
              "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "ice-punch",
          "url": "https://pokeapi.co/api/v2/move/8/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "gold-silver",
              "url": "https://pokeapi.co/api/v2/version-group/3/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "crystal",
              "url": "https://pokeapi.co/api/v2/version-group/4/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "emerald",
              "url": "https://pokeapi.co/api/v2/version-group/6/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "platinum",
              "url": "https://pokeapi.co/api/v2/version-group/9/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "heartgold-soulsilver",
              "url": "https://pokeapi.co/api/v2/version-group/10/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "black-2-white-2",
              "url": "https://pokeapi.co/api/v2/version-group/14/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "ultra-sun-ultra-moon",
              "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "lets-go-pikachu-lets-go-eevee",
              "url": "https://pokeapi.co/api/v2/version-group/19/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sword-shield",
              "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "thunder-punch",
          "url": "https://pokeapi.co/api/v2/move/9/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "gold-silver",
              "url": "https://pokeapi.co/api/v2/version-group/3/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "crystal",
              "url": "https://pokeapi.co/api/v2/version-group/4/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "emerald",
              "url": "https://pokeapi.co/api/v2/version-group/6/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "platinum",
              "url": "https://pokeapi.co/api/v2/version-group/9/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "heartgold-soulsilver",
              "url": "https://pokeapi.co/api/v2/version-group/10/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "black-2-white-2",
              "url": "https://pokeapi.co/api/v2/version-group/14/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "ultra-sun-ultra-moon",
              "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "lets-go-pikachu-lets-go-eevee",
              "url": "https://pokeapi.co/api/v2/version-group/19/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sword-shield",
              "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "mega-kick",
          "url": "https://pokeapi.co/api/v2/move/25/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "red-blue",
              "url": "https://pokeapi.co/api/v2/version-group/1/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "yellow",
              "url": "https://pokeapi.co/api/v2/version-group/2/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "emerald",
              "url": "https://pokeapi.co/api/v2/version-group/6/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "firered-leafgreen",
              "url": "https://pokeapi.co/api/v2/version-group/7/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sword-shield",
              "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "headbutt",
          "url": "https://pokeapi.co/api/v2/move/29/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "gold-silver",
              "url": "https://pokeapi.co/api/v2/version-group/3/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "crystal",
              "url": "https://pokeapi.co/api/v2/version-group/4/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "heartgold-soulsilver",
              "url": "https://pokeapi.co/api/v2/version-group/10/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "lets-go-pikachu-lets-go-eevee",
              "url": "https://pokeapi.co/api/v2/version-group/19/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "body-slam",
          "url": "https://pokeapi.co/api/v2/move/34/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "red-blue",
              "url": "https://pokeapi.co/api/v2/version-group/1/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "yellow",
              "url": "https://pokeapi.co/api/v2/version-group/2/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "emerald",
              "url": "https://pokeapi.co/api/v2/version-group/6/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "firered-leafgreen",
              "url": "https://pokeapi.co/api/v2/version-group/7/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "xd",
              "url": "https://pokeapi.co/api/v2/version-group/13/"
            }
          },
          {
            "level_learned_at": 40,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "black-2-white-2",
              "url": "https://pokeapi.co/api/v2/version-group/14/"
            }
          },
          {
            "level_learned_at": 40,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "x-y",
              "url": "https://pokeapi.co/api/v2/version-group/15/"
            }
          },
          {
            "level_learned_at": 40,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          },
          {
            "level_learned_at": 40,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "sun-moon",
              "url": "https://pokeapi.co/api/v2/version-group/17/"
            }
          },
          {
            "level_learned_at": 40,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "ultra-sun-ultra-moon",
              "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
          },
          {
            "level_learned_at": 24,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "lets-go-pikachu-lets-go-eevee",
              "url": "https://pokeapi.co/api/v2/version-group/19/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sword-shield",
              "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "take-down",
          "url": "https://pokeapi.co/api/v2/move/36/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "red-blue",
              "url": "https://pokeapi.co/api/v2/version-group/1/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "yellow",
              "url": "https://pokeapi.co/api/v2/version-group/2/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "double-edge",
          "url": "https://pokeapi.co/api/v2/move/38/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "red-blue",
              "url": "https://pokeapi.co/api/v2/version-group/1/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "yellow",
              "url": "https://pokeapi.co/api/v2/version-group/2/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "emerald",
              "url": "https://pokeapi.co/api/v2/version-group/6/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "firered-leafgreen",
              "url": "https://pokeapi.co/api/v2/version-group/7/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "xd",
              "url": "https://pokeapi.co/api/v2/version-group/13/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "growl",
          "url": "https://pokeapi.co/api/v2/move/45/"
        },
        "version_group_details": [
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "red-blue",
              "url": "https://pokeapi.co/api/v2/version-group/1/"
            }
          },
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "yellow",
              "url": "https://pokeapi.co/api/v2/version-group/2/"
            }
          },
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "gold-silver",
              "url": "https://pokeapi.co/api/v2/version-group/3/"
            }
          },
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "crystal",
              "url": "https://pokeapi.co/api/v2/version-group/4/"
            }
          },
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "ruby-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/5/"
            }
          },
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "emerald",
              "url": "https://pokeapi.co/api/v2/version-group/6/"
            }
          },
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "firered-leafgreen",
              "url": "https://pokeapi.co/api/v2/version-group/7/"
            }
          },
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "diamond-pearl",
              "url": "https://pokeapi.co/api/v2/version-group/8/"
            }
          },
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "platinum",
              "url": "https://pokeapi.co/api/v2/version-group/9/"
            }
          },
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "heartgold-soulsilver",
              "url": "https://pokeapi.co/api/v2/version-group/10/"
            }
          },
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "black-white",
              "url": "https://pokeapi.co/api/v2/version-group/11/"
            }
          },
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "colosseum",
              "url": "https://pokeapi.co/api/v2/version-group/12/"
            }
          },
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "xd",
              "url": "https://pokeapi.co/api/v2/version-group/13/"
            }
          },
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "black-2-white-2",
              "url": "https://pokeapi.co/api/v2/version-group/14/"
            }
          },
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "x-y",
              "url": "https://pokeapi.co/api/v2/version-group/15/"
            }
          },
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          },
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "sun-moon",
              "url": "https://pokeapi.co/api/v2/version-group/17/"
            }
          },
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "ultra-sun-ultra-moon",
              "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
          },
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "lets-go-pikachu-lets-go-eevee",
              "url": "https://pokeapi.co/api/v2/version-group/19/"
            }
          },
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "sword-shield",
              "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "sing",
          "url": "https://pokeapi.co/api/v2/move/47/"
        },
        "version_group_details": [
          {
            "level_learned_at": 13,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "red-blue",
              "url": "https://pokeapi.co/api/v2/version-group/1/"
            }
          },
          {
            "level_learned_at": 13,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "yellow",
              "url": "https://pokeapi.co/api/v2/version-group/2/"
            }
          },
          {
            "level_learned_at": 8,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "gold-silver",
              "url": "https://pokeapi.co/api/v2/version-group/3/"
            }
          },
          {
            "level_learned_at": 8,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "crystal",
              "url": "https://pokeapi.co/api/v2/version-group/4/"
            }
          },
          {
            "level_learned_at": 9,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "ruby-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/5/"
            }
          },
          {
            "level_learned_at": 9,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "emerald",
              "url": "https://pokeapi.co/api/v2/version-group/6/"
            }
          },
          {
            "level_learned_at": 9,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "firered-leafgreen",
              "url": "https://pokeapi.co/api/v2/version-group/7/"
            }
          },
          {
            "level_learned_at": 7,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "diamond-pearl",
              "url": "https://pokeapi.co/api/v2/version-group/8/"
            }
          },
          {
            "level_learned_at": 7,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "platinum",
              "url": "https://pokeapi.co/api/v2/version-group/9/"
            }
          },
          {
            "level_learned_at": 7,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "heartgold-soulsilver",
              "url": "https://pokeapi.co/api/v2/version-group/10/"
            }
          },
          {
            "level_learned_at": 7,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "black-white",
              "url": "https://pokeapi.co/api/v2/version-group/11/"
            }
          },
          {
            "level_learned_at": 9,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "colosseum",
              "url": "https://pokeapi.co/api/v2/version-group/12/"
            }
          },
          {
            "level_learned_at": 9,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "xd",
              "url": "https://pokeapi.co/api/v2/version-group/13/"
            }
          },
          {
            "level_learned_at": 7,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "black-2-white-2",
              "url": "https://pokeapi.co/api/v2/version-group/14/"
            }
          },
          {
            "level_learned_at": 7,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "x-y",
              "url": "https://pokeapi.co/api/v2/version-group/15/"
            }
          },
          {
            "level_learned_at": 7,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          },
          {
            "level_learned_at": 7,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "sun-moon",
              "url": "https://pokeapi.co/api/v2/version-group/17/"
            }
          },
          {
            "level_learned_at": 7,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "ultra-sun-ultra-moon",
              "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
          },
          {
            "level_learned_at": 6,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "lets-go-pikachu-lets-go-eevee",
              "url": "https://pokeapi.co/api/v2/version-group/19/"
            }
          },
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "sword-shield",
              "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "flamethrower",
          "url": "https://pokeapi.co/api/v2/move/53/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "crystal",
              "url": "https://pokeapi.co/api/v2/version-group/4/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "ruby-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/5/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "emerald",
              "url": "https://pokeapi.co/api/v2/version-group/6/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "firered-leafgreen",
              "url": "https://pokeapi.co/api/v2/version-group/7/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "diamond-pearl",
              "url": "https://pokeapi.co/api/v2/version-group/8/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "platinum",
              "url": "https://pokeapi.co/api/v2/version-group/9/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "heartgold-soulsilver",
              "url": "https://pokeapi.co/api/v2/version-group/10/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "black-white",
              "url": "https://pokeapi.co/api/v2/version-group/11/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "colosseum",
              "url": "https://pokeapi.co/api/v2/version-group/12/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "xd",
              "url": "https://pokeapi.co/api/v2/version-group/13/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "black-2-white-2",
              "url": "https://pokeapi.co/api/v2/version-group/14/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "x-y",
              "url": "https://pokeapi.co/api/v2/version-group/15/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sun-moon",
              "url": "https://pokeapi.co/api/v2/version-group/17/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "ultra-sun-ultra-moon",
              "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "lets-go-pikachu-lets-go-eevee",
              "url": "https://pokeapi.co/api/v2/version-group/19/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sword-shield",
              "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "water-gun",
          "url": "https://pokeapi.co/api/v2/move/55/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "red-blue",
              "url": "https://pokeapi.co/api/v2/version-group/1/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "yellow",
              "url": "https://pokeapi.co/api/v2/version-group/2/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "ice-beam",
          "url": "https://pokeapi.co/api/v2/move/58/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "red-blue",
              "url": "https://pokeapi.co/api/v2/version-group/1/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "yellow",
              "url": "https://pokeapi.co/api/v2/version-group/2/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "crystal",
              "url": "https://pokeapi.co/api/v2/version-group/4/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "ruby-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/5/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "emerald",
              "url": "https://pokeapi.co/api/v2/version-group/6/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "firered-leafgreen",
              "url": "https://pokeapi.co/api/v2/version-group/7/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "diamond-pearl",
              "url": "https://pokeapi.co/api/v2/version-group/8/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "platinum",
              "url": "https://pokeapi.co/api/v2/version-group/9/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "heartgold-soulsilver",
              "url": "https://pokeapi.co/api/v2/version-group/10/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "black-white",
              "url": "https://pokeapi.co/api/v2/version-group/11/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "colosseum",
              "url": "https://pokeapi.co/api/v2/version-group/12/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "xd",
              "url": "https://pokeapi.co/api/v2/version-group/13/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "black-2-white-2",
              "url": "https://pokeapi.co/api/v2/version-group/14/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "x-y",
              "url": "https://pokeapi.co/api/v2/version-group/15/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sun-moon",
              "url": "https://pokeapi.co/api/v2/version-group/17/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "ultra-sun-ultra-moon",
              "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "lets-go-pikachu-lets-go-eevee",
              "url": "https://pokeapi.co/api/v2/version-group/19/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sword-shield",
              "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "blizzard",
          "url": "https://pokeapi.co/api/v2/move/59/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "red-blue",
              "url": "https://pokeapi.co/api/v2/version-group/1/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "yellow",
              "url": "https://pokeapi.co/api/v2/version-group/2/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "gold-silver",
              "url": "https://pokeapi.co/api/v2/version-group/3/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "crystal",
              "url": "https://pokeapi.co/api/v2/version-group/4/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "ruby-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/5/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "emerald",
              "url": "https://pokeapi.co/api/v2/version-group/6/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "firered-leafgreen",
              "url": "https://pokeapi.co/api/v2/version-group/7/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "diamond-pearl",
              "url": "https://pokeapi.co/api/v2/version-group/8/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "platinum",
              "url": "https://pokeapi.co/api/v2/version-group/9/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "heartgold-soulsilver",
              "url": "https://pokeapi.co/api/v2/version-group/10/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "black-white",
              "url": "https://pokeapi.co/api/v2/version-group/11/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "colosseum",
              "url": "https://pokeapi.co/api/v2/version-group/12/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "xd",
              "url": "https://pokeapi.co/api/v2/version-group/13/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "black-2-white-2",
              "url": "https://pokeapi.co/api/v2/version-group/14/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "x-y",
              "url": "https://pokeapi.co/api/v2/version-group/15/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sun-moon",
              "url": "https://pokeapi.co/api/v2/version-group/17/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "ultra-sun-ultra-moon",
              "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "lets-go-pikachu-lets-go-eevee",
              "url": "https://pokeapi.co/api/v2/version-group/19/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sword-shield",
              "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "bubble-beam",
          "url": "https://pokeapi.co/api/v2/move/61/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "red-blue",
              "url": "https://pokeapi.co/api/v2/version-group/1/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "yellow",
              "url": "https://pokeapi.co/api/v2/version-group/2/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "submission",
          "url": "https://pokeapi.co/api/v2/move/66/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "red-blue",
              "url": "https://pokeapi.co/api/v2/version-group/1/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "yellow",
              "url": "https://pokeapi.co/api/v2/version-group/2/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "counter",
          "url": "https://pokeapi.co/api/v2/move/68/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "red-blue",
              "url": "https://pokeapi.co/api/v2/version-group/1/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "yellow",
              "url": "https://pokeapi.co/api/v2/version-group/2/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "emerald",
              "url": "https://pokeapi.co/api/v2/version-group/6/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "firered-leafgreen",
              "url": "https://pokeapi.co/api/v2/version-group/7/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "seismic-toss",
          "url": "https://pokeapi.co/api/v2/move/69/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "red-blue",
              "url": "https://pokeapi.co/api/v2/version-group/1/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "yellow",
              "url": "https://pokeapi.co/api/v2/version-group/2/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "emerald",
              "url": "https://pokeapi.co/api/v2/version-group/6/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "firered-leafgreen",
              "url": "https://pokeapi.co/api/v2/version-group/7/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "xd",
              "url": "https://pokeapi.co/api/v2/version-group/13/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "lets-go-pikachu-lets-go-eevee",
              "url": "https://pokeapi.co/api/v2/version-group/19/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "strength",
          "url": "https://pokeapi.co/api/v2/move/70/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "red-blue",
              "url": "https://pokeapi.co/api/v2/version-group/1/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "yellow",
              "url": "https://pokeapi.co/api/v2/version-group/2/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "gold-silver",
              "url": "https://pokeapi.co/api/v2/version-group/3/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "crystal",
              "url": "https://pokeapi.co/api/v2/version-group/4/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "ruby-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/5/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "emerald",
              "url": "https://pokeapi.co/api/v2/version-group/6/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "firered-leafgreen",
              "url": "https://pokeapi.co/api/v2/version-group/7/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "diamond-pearl",
              "url": "https://pokeapi.co/api/v2/version-group/8/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "platinum",
              "url": "https://pokeapi.co/api/v2/version-group/9/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "heartgold-soulsilver",
              "url": "https://pokeapi.co/api/v2/version-group/10/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "black-white",
              "url": "https://pokeapi.co/api/v2/version-group/11/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "colosseum",
              "url": "https://pokeapi.co/api/v2/version-group/12/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "xd",
              "url": "https://pokeapi.co/api/v2/version-group/13/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "black-2-white-2",
              "url": "https://pokeapi.co/api/v2/version-group/14/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "x-y",
              "url": "https://pokeapi.co/api/v2/version-group/15/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "solar-beam",
          "url": "https://pokeapi.co/api/v2/move/76/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "red-blue",
              "url": "https://pokeapi.co/api/v2/version-group/1/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "yellow",
              "url": "https://pokeapi.co/api/v2/version-group/2/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "gold-silver",
              "url": "https://pokeapi.co/api/v2/version-group/3/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "crystal",
              "url": "https://pokeapi.co/api/v2/version-group/4/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "ruby-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/5/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "emerald",
              "url": "https://pokeapi.co/api/v2/version-group/6/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "firered-leafgreen",
              "url": "https://pokeapi.co/api/v2/version-group/7/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "diamond-pearl",
              "url": "https://pokeapi.co/api/v2/version-group/8/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "platinum",
              "url": "https://pokeapi.co/api/v2/version-group/9/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "heartgold-soulsilver",
              "url": "https://pokeapi.co/api/v2/version-group/10/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "black-white",
              "url": "https://pokeapi.co/api/v2/version-group/11/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "colosseum",
              "url": "https://pokeapi.co/api/v2/version-group/12/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "xd",
              "url": "https://pokeapi.co/api/v2/version-group/13/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "black-2-white-2",
              "url": "https://pokeapi.co/api/v2/version-group/14/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "x-y",
              "url": "https://pokeapi.co/api/v2/version-group/15/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sun-moon",
              "url": "https://pokeapi.co/api/v2/version-group/17/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "ultra-sun-ultra-moon",
              "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "lets-go-pikachu-lets-go-eevee",
              "url": "https://pokeapi.co/api/v2/version-group/19/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sword-shield",
              "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "thunderbolt",
          "url": "https://pokeapi.co/api/v2/move/85/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "red-blue",
              "url": "https://pokeapi.co/api/v2/version-group/1/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "yellow",
              "url": "https://pokeapi.co/api/v2/version-group/2/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "crystal",
              "url": "https://pokeapi.co/api/v2/version-group/4/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "ruby-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/5/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "emerald",
              "url": "https://pokeapi.co/api/v2/version-group/6/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "firered-leafgreen",
              "url": "https://pokeapi.co/api/v2/version-group/7/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "diamond-pearl",
              "url": "https://pokeapi.co/api/v2/version-group/8/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "platinum",
              "url": "https://pokeapi.co/api/v2/version-group/9/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "heartgold-soulsilver",
              "url": "https://pokeapi.co/api/v2/version-group/10/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "black-white",
              "url": "https://pokeapi.co/api/v2/version-group/11/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "colosseum",
              "url": "https://pokeapi.co/api/v2/version-group/12/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "xd",
              "url": "https://pokeapi.co/api/v2/version-group/13/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "black-2-white-2",
              "url": "https://pokeapi.co/api/v2/version-group/14/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "x-y",
              "url": "https://pokeapi.co/api/v2/version-group/15/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sun-moon",
              "url": "https://pokeapi.co/api/v2/version-group/17/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "ultra-sun-ultra-moon",
              "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "lets-go-pikachu-lets-go-eevee",
              "url": "https://pokeapi.co/api/v2/version-group/19/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sword-shield",
              "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "thunder-wave",
          "url": "https://pokeapi.co/api/v2/move/86/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "red-blue",
              "url": "https://pokeapi.co/api/v2/version-group/1/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "yellow",
              "url": "https://pokeapi.co/api/v2/version-group/2/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "emerald",
              "url": "https://pokeapi.co/api/v2/version-group/6/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "firered-leafgreen",
              "url": "https://pokeapi.co/api/v2/version-group/7/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "diamond-pearl",
              "url": "https://pokeapi.co/api/v2/version-group/8/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "platinum",
              "url": "https://pokeapi.co/api/v2/version-group/9/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "heartgold-soulsilver",
              "url": "https://pokeapi.co/api/v2/version-group/10/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "black-white",
              "url": "https://pokeapi.co/api/v2/version-group/11/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "xd",
              "url": "https://pokeapi.co/api/v2/version-group/13/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "black-2-white-2",
              "url": "https://pokeapi.co/api/v2/version-group/14/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "x-y",
              "url": "https://pokeapi.co/api/v2/version-group/15/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sun-moon",
              "url": "https://pokeapi.co/api/v2/version-group/17/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "ultra-sun-ultra-moon",
              "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "lets-go-pikachu-lets-go-eevee",
              "url": "https://pokeapi.co/api/v2/version-group/19/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sword-shield",
              "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "thunder",
          "url": "https://pokeapi.co/api/v2/move/87/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "red-blue",
              "url": "https://pokeapi.co/api/v2/version-group/1/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "yellow",
              "url": "https://pokeapi.co/api/v2/version-group/2/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "gold-silver",
              "url": "https://pokeapi.co/api/v2/version-group/3/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "crystal",
              "url": "https://pokeapi.co/api/v2/version-group/4/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "ruby-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/5/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "emerald",
              "url": "https://pokeapi.co/api/v2/version-group/6/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "firered-leafgreen",
              "url": "https://pokeapi.co/api/v2/version-group/7/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "diamond-pearl",
              "url": "https://pokeapi.co/api/v2/version-group/8/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "platinum",
              "url": "https://pokeapi.co/api/v2/version-group/9/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "heartgold-soulsilver",
              "url": "https://pokeapi.co/api/v2/version-group/10/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "black-white",
              "url": "https://pokeapi.co/api/v2/version-group/11/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "colosseum",
              "url": "https://pokeapi.co/api/v2/version-group/12/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "xd",
              "url": "https://pokeapi.co/api/v2/version-group/13/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "black-2-white-2",
              "url": "https://pokeapi.co/api/v2/version-group/14/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "x-y",
              "url": "https://pokeapi.co/api/v2/version-group/15/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sun-moon",
              "url": "https://pokeapi.co/api/v2/version-group/17/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "ultra-sun-ultra-moon",
              "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "lets-go-pikachu-lets-go-eevee",
              "url": "https://pokeapi.co/api/v2/version-group/19/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sword-shield",
              "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "dig",
          "url": "https://pokeapi.co/api/v2/move/91/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "ruby-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/5/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "emerald",
              "url": "https://pokeapi.co/api/v2/version-group/6/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "firered-leafgreen",
              "url": "https://pokeapi.co/api/v2/version-group/7/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "diamond-pearl",
              "url": "https://pokeapi.co/api/v2/version-group/8/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "platinum",
              "url": "https://pokeapi.co/api/v2/version-group/9/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "heartgold-soulsilver",
              "url": "https://pokeapi.co/api/v2/version-group/10/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "black-white",
              "url": "https://pokeapi.co/api/v2/version-group/11/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "colosseum",
              "url": "https://pokeapi.co/api/v2/version-group/12/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "xd",
              "url": "https://pokeapi.co/api/v2/version-group/13/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "black-2-white-2",
              "url": "https://pokeapi.co/api/v2/version-group/14/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "x-y",
              "url": "https://pokeapi.co/api/v2/version-group/15/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "lets-go-pikachu-lets-go-eevee",
              "url": "https://pokeapi.co/api/v2/version-group/19/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sword-shield",
              "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "toxic",
          "url": "https://pokeapi.co/api/v2/move/92/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "red-blue",
              "url": "https://pokeapi.co/api/v2/version-group/1/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "yellow",
              "url": "https://pokeapi.co/api/v2/version-group/2/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "gold-silver",
              "url": "https://pokeapi.co/api/v2/version-group/3/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "crystal",
              "url": "https://pokeapi.co/api/v2/version-group/4/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "ruby-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/5/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "emerald",
              "url": "https://pokeapi.co/api/v2/version-group/6/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "firered-leafgreen",
              "url": "https://pokeapi.co/api/v2/version-group/7/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "diamond-pearl",
              "url": "https://pokeapi.co/api/v2/version-group/8/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "platinum",
              "url": "https://pokeapi.co/api/v2/version-group/9/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "heartgold-soulsilver",
              "url": "https://pokeapi.co/api/v2/version-group/10/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "black-white",
              "url": "https://pokeapi.co/api/v2/version-group/11/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "colosseum",
              "url": "https://pokeapi.co/api/v2/version-group/12/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "xd",
              "url": "https://pokeapi.co/api/v2/version-group/13/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "black-2-white-2",
              "url": "https://pokeapi.co/api/v2/version-group/14/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "x-y",
              "url": "https://pokeapi.co/api/v2/version-group/15/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sun-moon",
              "url": "https://pokeapi.co/api/v2/version-group/17/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "ultra-sun-ultra-moon",
              "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "lets-go-pikachu-lets-go-eevee",
              "url": "https://pokeapi.co/api/v2/version-group/19/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "psychic",
          "url": "https://pokeapi.co/api/v2/move/94/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "red-blue",
              "url": "https://pokeapi.co/api/v2/version-group/1/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "yellow",
              "url": "https://pokeapi.co/api/v2/version-group/2/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "gold-silver",
              "url": "https://pokeapi.co/api/v2/version-group/3/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "crystal",
              "url": "https://pokeapi.co/api/v2/version-group/4/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "ruby-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/5/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "emerald",
              "url": "https://pokeapi.co/api/v2/version-group/6/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "firered-leafgreen",
              "url": "https://pokeapi.co/api/v2/version-group/7/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "diamond-pearl",
              "url": "https://pokeapi.co/api/v2/version-group/8/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "platinum",
              "url": "https://pokeapi.co/api/v2/version-group/9/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "heartgold-soulsilver",
              "url": "https://pokeapi.co/api/v2/version-group/10/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "black-white",
              "url": "https://pokeapi.co/api/v2/version-group/11/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "colosseum",
              "url": "https://pokeapi.co/api/v2/version-group/12/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "xd",
              "url": "https://pokeapi.co/api/v2/version-group/13/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "black-2-white-2",
              "url": "https://pokeapi.co/api/v2/version-group/14/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "x-y",
              "url": "https://pokeapi.co/api/v2/version-group/15/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sun-moon",
              "url": "https://pokeapi.co/api/v2/version-group/17/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "ultra-sun-ultra-moon",
              "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "lets-go-pikachu-lets-go-eevee",
              "url": "https://pokeapi.co/api/v2/version-group/19/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sword-shield",
              "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "rage",
          "url": "https://pokeapi.co/api/v2/move/99/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "red-blue",
              "url": "https://pokeapi.co/api/v2/version-group/1/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "yellow",
              "url": "https://pokeapi.co/api/v2/version-group/2/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "teleport",
          "url": "https://pokeapi.co/api/v2/move/100/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "red-blue",
              "url": "https://pokeapi.co/api/v2/version-group/1/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "yellow",
              "url": "https://pokeapi.co/api/v2/version-group/2/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "lets-go-pikachu-lets-go-eevee",
              "url": "https://pokeapi.co/api/v2/version-group/19/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "mimic",
          "url": "https://pokeapi.co/api/v2/move/102/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "red-blue",
              "url": "https://pokeapi.co/api/v2/version-group/1/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "yellow",
              "url": "https://pokeapi.co/api/v2/version-group/2/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "emerald",
              "url": "https://pokeapi.co/api/v2/version-group/6/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "firered-leafgreen",
              "url": "https://pokeapi.co/api/v2/version-group/7/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "xd",
              "url": "https://pokeapi.co/api/v2/version-group/13/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "double-team",
          "url": "https://pokeapi.co/api/v2/move/104/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "red-blue",
              "url": "https://pokeapi.co/api/v2/version-group/1/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "yellow",
              "url": "https://pokeapi.co/api/v2/version-group/2/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "gold-silver",
              "url": "https://pokeapi.co/api/v2/version-group/3/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "crystal",
              "url": "https://pokeapi.co/api/v2/version-group/4/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "ruby-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/5/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "emerald",
              "url": "https://pokeapi.co/api/v2/version-group/6/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "firered-leafgreen",
              "url": "https://pokeapi.co/api/v2/version-group/7/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "diamond-pearl",
              "url": "https://pokeapi.co/api/v2/version-group/8/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "platinum",
              "url": "https://pokeapi.co/api/v2/version-group/9/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "heartgold-soulsilver",
              "url": "https://pokeapi.co/api/v2/version-group/10/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "black-white",
              "url": "https://pokeapi.co/api/v2/version-group/11/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "colosseum",
              "url": "https://pokeapi.co/api/v2/version-group/12/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "xd",
              "url": "https://pokeapi.co/api/v2/version-group/13/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "black-2-white-2",
              "url": "https://pokeapi.co/api/v2/version-group/14/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "x-y",
              "url": "https://pokeapi.co/api/v2/version-group/15/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sun-moon",
              "url": "https://pokeapi.co/api/v2/version-group/17/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "ultra-sun-ultra-moon",
              "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "minimize",
          "url": "https://pokeapi.co/api/v2/move/107/"
        },
        "version_group_details": [
          {
            "level_learned_at": 24,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "red-blue",
              "url": "https://pokeapi.co/api/v2/version-group/1/"
            }
          },
          {
            "level_learned_at": 24,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "yellow",
              "url": "https://pokeapi.co/api/v2/version-group/2/"
            }
          },
          {
            "level_learned_at": 19,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "gold-silver",
              "url": "https://pokeapi.co/api/v2/version-group/3/"
            }
          },
          {
            "level_learned_at": 19,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "crystal",
              "url": "https://pokeapi.co/api/v2/version-group/4/"
            }
          },
          {
            "level_learned_at": 21,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "ruby-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/5/"
            }
          },
          {
            "level_learned_at": 21,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "emerald",
              "url": "https://pokeapi.co/api/v2/version-group/6/"
            }
          },
          {
            "level_learned_at": 21,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "firered-leafgreen",
              "url": "https://pokeapi.co/api/v2/version-group/7/"
            }
          },
          {
            "level_learned_at": 19,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "diamond-pearl",
              "url": "https://pokeapi.co/api/v2/version-group/8/"
            }
          },
          {
            "level_learned_at": 19,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "platinum",
              "url": "https://pokeapi.co/api/v2/version-group/9/"
            }
          },
          {
            "level_learned_at": 19,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "heartgold-soulsilver",
              "url": "https://pokeapi.co/api/v2/version-group/10/"
            }
          },
          {
            "level_learned_at": 19,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "black-white",
              "url": "https://pokeapi.co/api/v2/version-group/11/"
            }
          },
          {
            "level_learned_at": 21,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "colosseum",
              "url": "https://pokeapi.co/api/v2/version-group/12/"
            }
          },
          {
            "level_learned_at": 21,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "xd",
              "url": "https://pokeapi.co/api/v2/version-group/13/"
            }
          },
          {
            "level_learned_at": 25,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "black-2-white-2",
              "url": "https://pokeapi.co/api/v2/version-group/14/"
            }
          },
          {
            "level_learned_at": 25,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "x-y",
              "url": "https://pokeapi.co/api/v2/version-group/15/"
            }
          },
          {
            "level_learned_at": 25,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          },
          {
            "level_learned_at": 25,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "sun-moon",
              "url": "https://pokeapi.co/api/v2/version-group/17/"
            }
          },
          {
            "level_learned_at": 25,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "ultra-sun-ultra-moon",
              "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
          },
          {
            "level_learned_at": 10,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "lets-go-pikachu-lets-go-eevee",
              "url": "https://pokeapi.co/api/v2/version-group/19/"
            }
          },
          {
            "level_learned_at": 8,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "sword-shield",
              "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "defense-curl",
          "url": "https://pokeapi.co/api/v2/move/111/"
        },
        "version_group_details": [
          {
            "level_learned_at": 39,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "red-blue",
              "url": "https://pokeapi.co/api/v2/version-group/1/"
            }
          },
          {
            "level_learned_at": 39,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "yellow",
              "url": "https://pokeapi.co/api/v2/version-group/2/"
            }
          },
          {
            "level_learned_at": 26,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "gold-silver",
              "url": "https://pokeapi.co/api/v2/version-group/3/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "gold-silver",
              "url": "https://pokeapi.co/api/v2/version-group/3/"
            }
          },
          {
            "level_learned_at": 26,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "crystal",
              "url": "https://pokeapi.co/api/v2/version-group/4/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "crystal",
              "url": "https://pokeapi.co/api/v2/version-group/4/"
            }
          },
          {
            "level_learned_at": 25,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "ruby-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/5/"
            }
          },
          {
            "level_learned_at": 25,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "emerald",
              "url": "https://pokeapi.co/api/v2/version-group/6/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "emerald",
              "url": "https://pokeapi.co/api/v2/version-group/6/"
            }
          },
          {
            "level_learned_at": 25,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "firered-leafgreen",
              "url": "https://pokeapi.co/api/v2/version-group/7/"
            }
          },
          {
            "level_learned_at": 13,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "diamond-pearl",
              "url": "https://pokeapi.co/api/v2/version-group/8/"
            }
          },
          {
            "level_learned_at": 13,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "platinum",
              "url": "https://pokeapi.co/api/v2/version-group/9/"
            }
          },
          {
            "level_learned_at": 13,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "heartgold-soulsilver",
              "url": "https://pokeapi.co/api/v2/version-group/10/"
            }
          },
          {
            "level_learned_at": 13,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "black-white",
              "url": "https://pokeapi.co/api/v2/version-group/11/"
            }
          },
          {
            "level_learned_at": 25,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "colosseum",
              "url": "https://pokeapi.co/api/v2/version-group/12/"
            }
          },
          {
            "level_learned_at": 25,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "xd",
              "url": "https://pokeapi.co/api/v2/version-group/13/"
            }
          },
          {
            "level_learned_at": 13,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "black-2-white-2",
              "url": "https://pokeapi.co/api/v2/version-group/14/"
            }
          },
          {
            "level_learned_at": 13,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "x-y",
              "url": "https://pokeapi.co/api/v2/version-group/15/"
            }
          },
          {
            "level_learned_at": 13,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          },
          {
            "level_learned_at": 13,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "sun-moon",
              "url": "https://pokeapi.co/api/v2/version-group/17/"
            }
          },
          {
            "level_learned_at": 13,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "ultra-sun-ultra-moon",
              "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
          },
          {
            "level_learned_at": 4,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "lets-go-pikachu-lets-go-eevee",
              "url": "https://pokeapi.co/api/v2/version-group/19/"
            }
          },
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "sword-shield",
              "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "light-screen",
          "url": "https://pokeapi.co/api/v2/move/113/"
        },
        "version_group_details": [
          {
            "level_learned_at": 48,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "red-blue",
              "url": "https://pokeapi.co/api/v2/version-group/1/"
            }
          },
          {
            "level_learned_at": 48,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "yellow",
              "url": "https://pokeapi.co/api/v2/version-group/2/"
            }
          },
          {
            "level_learned_at": 53,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "gold-silver",
              "url": "https://pokeapi.co/api/v2/version-group/3/"
            }
          },
          {
            "level_learned_at": 53,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "crystal",
              "url": "https://pokeapi.co/api/v2/version-group/4/"
            }
          },
          {
            "level_learned_at": 41,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "ruby-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/5/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "ruby-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/5/"
            }
          },
          {
            "level_learned_at": 41,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "emerald",
              "url": "https://pokeapi.co/api/v2/version-group/6/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "emerald",
              "url": "https://pokeapi.co/api/v2/version-group/6/"
            }
          },
          {
            "level_learned_at": 41,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "firered-leafgreen",
              "url": "https://pokeapi.co/api/v2/version-group/7/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "firered-leafgreen",
              "url": "https://pokeapi.co/api/v2/version-group/7/"
            }
          },
          {
            "level_learned_at": 40,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "diamond-pearl",
              "url": "https://pokeapi.co/api/v2/version-group/8/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "diamond-pearl",
              "url": "https://pokeapi.co/api/v2/version-group/8/"
            }
          },
          {
            "level_learned_at": 40,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "platinum",
              "url": "https://pokeapi.co/api/v2/version-group/9/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "platinum",
              "url": "https://pokeapi.co/api/v2/version-group/9/"
            }
          },
          {
            "level_learned_at": 40,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "heartgold-soulsilver",
              "url": "https://pokeapi.co/api/v2/version-group/10/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "heartgold-soulsilver",
              "url": "https://pokeapi.co/api/v2/version-group/10/"
            }
          },
          {
            "level_learned_at": 46,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "black-white",
              "url": "https://pokeapi.co/api/v2/version-group/11/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "black-white",
              "url": "https://pokeapi.co/api/v2/version-group/11/"
            }
          },
          {
            "level_learned_at": 41,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "colosseum",
              "url": "https://pokeapi.co/api/v2/version-group/12/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "colosseum",
              "url": "https://pokeapi.co/api/v2/version-group/12/"
            }
          },
          {
            "level_learned_at": 41,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "xd",
              "url": "https://pokeapi.co/api/v2/version-group/13/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "xd",
              "url": "https://pokeapi.co/api/v2/version-group/13/"
            }
          },
          {
            "level_learned_at": 46,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "black-2-white-2",
              "url": "https://pokeapi.co/api/v2/version-group/14/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "black-2-white-2",
              "url": "https://pokeapi.co/api/v2/version-group/14/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "x-y",
              "url": "https://pokeapi.co/api/v2/version-group/15/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sun-moon",
              "url": "https://pokeapi.co/api/v2/version-group/17/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "ultra-sun-ultra-moon",
              "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "lets-go-pikachu-lets-go-eevee",
              "url": "https://pokeapi.co/api/v2/version-group/19/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sword-shield",
              "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "reflect",
          "url": "https://pokeapi.co/api/v2/move/115/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "red-blue",
              "url": "https://pokeapi.co/api/v2/version-group/1/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "yellow",
              "url": "https://pokeapi.co/api/v2/version-group/2/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "ruby-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/5/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "emerald",
              "url": "https://pokeapi.co/api/v2/version-group/6/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "firered-leafgreen",
              "url": "https://pokeapi.co/api/v2/version-group/7/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "diamond-pearl",
              "url": "https://pokeapi.co/api/v2/version-group/8/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "platinum",
              "url": "https://pokeapi.co/api/v2/version-group/9/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "heartgold-soulsilver",
              "url": "https://pokeapi.co/api/v2/version-group/10/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "black-white",
              "url": "https://pokeapi.co/api/v2/version-group/11/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "colosseum",
              "url": "https://pokeapi.co/api/v2/version-group/12/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "xd",
              "url": "https://pokeapi.co/api/v2/version-group/13/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "black-2-white-2",
              "url": "https://pokeapi.co/api/v2/version-group/14/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "x-y",
              "url": "https://pokeapi.co/api/v2/version-group/15/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sun-moon",
              "url": "https://pokeapi.co/api/v2/version-group/17/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "ultra-sun-ultra-moon",
              "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "lets-go-pikachu-lets-go-eevee",
              "url": "https://pokeapi.co/api/v2/version-group/19/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sword-shield",
              "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "bide",
          "url": "https://pokeapi.co/api/v2/move/117/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "red-blue",
              "url": "https://pokeapi.co/api/v2/version-group/1/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "yellow",
              "url": "https://pokeapi.co/api/v2/version-group/2/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "metronome",
          "url": "https://pokeapi.co/api/v2/move/118/"
        },
        "version_group_details": [
          {
            "level_learned_at": 31,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "red-blue",
              "url": "https://pokeapi.co/api/v2/version-group/1/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "red-blue",
              "url": "https://pokeapi.co/api/v2/version-group/1/"
            }
          },
          {
            "level_learned_at": 31,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "yellow",
              "url": "https://pokeapi.co/api/v2/version-group/2/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "yellow",
              "url": "https://pokeapi.co/api/v2/version-group/2/"
            }
          },
          {
            "level_learned_at": 34,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "gold-silver",
              "url": "https://pokeapi.co/api/v2/version-group/3/"
            }
          },
          {
            "level_learned_at": 34,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "crystal",
              "url": "https://pokeapi.co/api/v2/version-group/4/"
            }
          },
          {
            "level_learned_at": 29,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "ruby-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/5/"
            }
          },
          {
            "level_learned_at": 29,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "emerald",
              "url": "https://pokeapi.co/api/v2/version-group/6/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "emerald",
              "url": "https://pokeapi.co/api/v2/version-group/6/"
            }
          },
          {
            "level_learned_at": 29,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "firered-leafgreen",
              "url": "https://pokeapi.co/api/v2/version-group/7/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "firered-leafgreen",
              "url": "https://pokeapi.co/api/v2/version-group/7/"
            }
          },
          {
            "level_learned_at": 31,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "diamond-pearl",
              "url": "https://pokeapi.co/api/v2/version-group/8/"
            }
          },
          {
            "level_learned_at": 31,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "platinum",
              "url": "https://pokeapi.co/api/v2/version-group/9/"
            }
          },
          {
            "level_learned_at": 31,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "heartgold-soulsilver",
              "url": "https://pokeapi.co/api/v2/version-group/10/"
            }
          },
          {
            "level_learned_at": 34,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "black-white",
              "url": "https://pokeapi.co/api/v2/version-group/11/"
            }
          },
          {
            "level_learned_at": 29,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "colosseum",
              "url": "https://pokeapi.co/api/v2/version-group/12/"
            }
          },
          {
            "level_learned_at": 29,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "xd",
              "url": "https://pokeapi.co/api/v2/version-group/13/"
            }
          },
          {
            "level_learned_at": 31,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "black-2-white-2",
              "url": "https://pokeapi.co/api/v2/version-group/14/"
            }
          },
          {
            "level_learned_at": 31,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "x-y",
              "url": "https://pokeapi.co/api/v2/version-group/15/"
            }
          },
          {
            "level_learned_at": 31,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          },
          {
            "level_learned_at": 31,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "sun-moon",
              "url": "https://pokeapi.co/api/v2/version-group/17/"
            }
          },
          {
            "level_learned_at": 31,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "ultra-sun-ultra-moon",
              "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
          },
          {
            "level_learned_at": 18,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "lets-go-pikachu-lets-go-eevee",
              "url": "https://pokeapi.co/api/v2/version-group/19/"
            }
          },
          {
            "level_learned_at": 20,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "sword-shield",
              "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sword-shield",
              "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "fire-blast",
          "url": "https://pokeapi.co/api/v2/move/126/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "red-blue",
              "url": "https://pokeapi.co/api/v2/version-group/1/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "yellow",
              "url": "https://pokeapi.co/api/v2/version-group/2/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "gold-silver",
              "url": "https://pokeapi.co/api/v2/version-group/3/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "crystal",
              "url": "https://pokeapi.co/api/v2/version-group/4/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "ruby-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/5/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "emerald",
              "url": "https://pokeapi.co/api/v2/version-group/6/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "firered-leafgreen",
              "url": "https://pokeapi.co/api/v2/version-group/7/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "diamond-pearl",
              "url": "https://pokeapi.co/api/v2/version-group/8/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "platinum",
              "url": "https://pokeapi.co/api/v2/version-group/9/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "heartgold-soulsilver",
              "url": "https://pokeapi.co/api/v2/version-group/10/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "black-white",
              "url": "https://pokeapi.co/api/v2/version-group/11/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "colosseum",
              "url": "https://pokeapi.co/api/v2/version-group/12/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "xd",
              "url": "https://pokeapi.co/api/v2/version-group/13/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "black-2-white-2",
              "url": "https://pokeapi.co/api/v2/version-group/14/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "x-y",
              "url": "https://pokeapi.co/api/v2/version-group/15/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sun-moon",
              "url": "https://pokeapi.co/api/v2/version-group/17/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "ultra-sun-ultra-moon",
              "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "lets-go-pikachu-lets-go-eevee",
              "url": "https://pokeapi.co/api/v2/version-group/19/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sword-shield",
              "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "skull-bash",
          "url": "https://pokeapi.co/api/v2/move/130/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "red-blue",
              "url": "https://pokeapi.co/api/v2/version-group/1/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "yellow",
              "url": "https://pokeapi.co/api/v2/version-group/2/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "amnesia",
          "url": "https://pokeapi.co/api/v2/move/133/"
        },
        "version_group_details": [
          {
            "level_learned_at": 16,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "lets-go-pikachu-lets-go-eevee",
              "url": "https://pokeapi.co/api/v2/version-group/19/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sword-shield",
              "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "soft-boiled",
          "url": "https://pokeapi.co/api/v2/move/135/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "emerald",
              "url": "https://pokeapi.co/api/v2/version-group/6/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "firered-leafgreen",
              "url": "https://pokeapi.co/api/v2/version-group/7/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "dream-eater",
          "url": "https://pokeapi.co/api/v2/move/138/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "gold-silver",
              "url": "https://pokeapi.co/api/v2/version-group/3/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "crystal",
              "url": "https://pokeapi.co/api/v2/version-group/4/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "emerald",
              "url": "https://pokeapi.co/api/v2/version-group/6/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "firered-leafgreen",
              "url": "https://pokeapi.co/api/v2/version-group/7/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "diamond-pearl",
              "url": "https://pokeapi.co/api/v2/version-group/8/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "platinum",
              "url": "https://pokeapi.co/api/v2/version-group/9/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "heartgold-soulsilver",
              "url": "https://pokeapi.co/api/v2/version-group/10/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "black-white",
              "url": "https://pokeapi.co/api/v2/version-group/11/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "xd",
              "url": "https://pokeapi.co/api/v2/version-group/13/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "black-2-white-2",
              "url": "https://pokeapi.co/api/v2/version-group/14/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "x-y",
              "url": "https://pokeapi.co/api/v2/version-group/15/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sun-moon",
              "url": "https://pokeapi.co/api/v2/version-group/17/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "ultra-sun-ultra-moon",
              "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "lets-go-pikachu-lets-go-eevee",
              "url": "https://pokeapi.co/api/v2/version-group/19/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "flash",
          "url": "https://pokeapi.co/api/v2/move/148/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "red-blue",
              "url": "https://pokeapi.co/api/v2/version-group/1/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "yellow",
              "url": "https://pokeapi.co/api/v2/version-group/2/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "gold-silver",
              "url": "https://pokeapi.co/api/v2/version-group/3/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "crystal",
              "url": "https://pokeapi.co/api/v2/version-group/4/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "ruby-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/5/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "emerald",
              "url": "https://pokeapi.co/api/v2/version-group/6/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "firered-leafgreen",
              "url": "https://pokeapi.co/api/v2/version-group/7/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "diamond-pearl",
              "url": "https://pokeapi.co/api/v2/version-group/8/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "platinum",
              "url": "https://pokeapi.co/api/v2/version-group/9/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "heartgold-soulsilver",
              "url": "https://pokeapi.co/api/v2/version-group/10/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "black-white",
              "url": "https://pokeapi.co/api/v2/version-group/11/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "colosseum",
              "url": "https://pokeapi.co/api/v2/version-group/12/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "xd",
              "url": "https://pokeapi.co/api/v2/version-group/13/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "black-2-white-2",
              "url": "https://pokeapi.co/api/v2/version-group/14/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "x-y",
              "url": "https://pokeapi.co/api/v2/version-group/15/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "psywave",
          "url": "https://pokeapi.co/api/v2/move/149/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "red-blue",
              "url": "https://pokeapi.co/api/v2/version-group/1/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "yellow",
              "url": "https://pokeapi.co/api/v2/version-group/2/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "splash",
          "url": "https://pokeapi.co/api/v2/move/150/"
        },
        "version_group_details": [
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "sword-shield",
              "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "rest",
          "url": "https://pokeapi.co/api/v2/move/156/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "red-blue",
              "url": "https://pokeapi.co/api/v2/version-group/1/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "yellow",
              "url": "https://pokeapi.co/api/v2/version-group/2/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "gold-silver",
              "url": "https://pokeapi.co/api/v2/version-group/3/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "crystal",
              "url": "https://pokeapi.co/api/v2/version-group/4/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "ruby-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/5/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "emerald",
              "url": "https://pokeapi.co/api/v2/version-group/6/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "firered-leafgreen",
              "url": "https://pokeapi.co/api/v2/version-group/7/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "diamond-pearl",
              "url": "https://pokeapi.co/api/v2/version-group/8/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "platinum",
              "url": "https://pokeapi.co/api/v2/version-group/9/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "heartgold-soulsilver",
              "url": "https://pokeapi.co/api/v2/version-group/10/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "black-white",
              "url": "https://pokeapi.co/api/v2/version-group/11/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "colosseum",
              "url": "https://pokeapi.co/api/v2/version-group/12/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "xd",
              "url": "https://pokeapi.co/api/v2/version-group/13/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "black-2-white-2",
              "url": "https://pokeapi.co/api/v2/version-group/14/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "x-y",
              "url": "https://pokeapi.co/api/v2/version-group/15/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sun-moon",
              "url": "https://pokeapi.co/api/v2/version-group/17/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "ultra-sun-ultra-moon",
              "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "lets-go-pikachu-lets-go-eevee",
              "url": "https://pokeapi.co/api/v2/version-group/19/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sword-shield",
              "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "tri-attack",
          "url": "https://pokeapi.co/api/v2/move/161/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "red-blue",
              "url": "https://pokeapi.co/api/v2/version-group/1/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "yellow",
              "url": "https://pokeapi.co/api/v2/version-group/2/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "lets-go-pikachu-lets-go-eevee",
              "url": "https://pokeapi.co/api/v2/version-group/19/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sword-shield",
              "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "substitute",
          "url": "https://pokeapi.co/api/v2/move/164/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "red-blue",
              "url": "https://pokeapi.co/api/v2/version-group/1/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "yellow",
              "url": "https://pokeapi.co/api/v2/version-group/2/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "emerald",
              "url": "https://pokeapi.co/api/v2/version-group/6/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "firered-leafgreen",
              "url": "https://pokeapi.co/api/v2/version-group/7/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "diamond-pearl",
              "url": "https://pokeapi.co/api/v2/version-group/8/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "platinum",
              "url": "https://pokeapi.co/api/v2/version-group/9/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "heartgold-soulsilver",
              "url": "https://pokeapi.co/api/v2/version-group/10/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "black-white",
              "url": "https://pokeapi.co/api/v2/version-group/11/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "xd",
              "url": "https://pokeapi.co/api/v2/version-group/13/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "black-2-white-2",
              "url": "https://pokeapi.co/api/v2/version-group/14/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "x-y",
              "url": "https://pokeapi.co/api/v2/version-group/15/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sun-moon",
              "url": "https://pokeapi.co/api/v2/version-group/17/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "ultra-sun-ultra-moon",
              "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "lets-go-pikachu-lets-go-eevee",
              "url": "https://pokeapi.co/api/v2/version-group/19/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sword-shield",
              "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "nightmare",
          "url": "https://pokeapi.co/api/v2/move/171/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "gold-silver",
              "url": "https://pokeapi.co/api/v2/version-group/3/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "crystal",
              "url": "https://pokeapi.co/api/v2/version-group/4/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "xd",
              "url": "https://pokeapi.co/api/v2/version-group/13/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "snore",
          "url": "https://pokeapi.co/api/v2/move/173/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "gold-silver",
              "url": "https://pokeapi.co/api/v2/version-group/3/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "crystal",
              "url": "https://pokeapi.co/api/v2/version-group/4/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "emerald",
              "url": "https://pokeapi.co/api/v2/version-group/6/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "platinum",
              "url": "https://pokeapi.co/api/v2/version-group/9/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "heartgold-soulsilver",
              "url": "https://pokeapi.co/api/v2/version-group/10/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "black-2-white-2",
              "url": "https://pokeapi.co/api/v2/version-group/14/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "ultra-sun-ultra-moon",
              "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sword-shield",
              "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "curse",
          "url": "https://pokeapi.co/api/v2/move/174/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "gold-silver",
              "url": "https://pokeapi.co/api/v2/version-group/3/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "crystal",
              "url": "https://pokeapi.co/api/v2/version-group/4/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "protect",
          "url": "https://pokeapi.co/api/v2/move/182/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "gold-silver",
              "url": "https://pokeapi.co/api/v2/version-group/3/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "crystal",
              "url": "https://pokeapi.co/api/v2/version-group/4/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "ruby-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/5/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "emerald",
              "url": "https://pokeapi.co/api/v2/version-group/6/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "firered-leafgreen",
              "url": "https://pokeapi.co/api/v2/version-group/7/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "diamond-pearl",
              "url": "https://pokeapi.co/api/v2/version-group/8/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "platinum",
              "url": "https://pokeapi.co/api/v2/version-group/9/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "heartgold-soulsilver",
              "url": "https://pokeapi.co/api/v2/version-group/10/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "black-white",
              "url": "https://pokeapi.co/api/v2/version-group/11/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "colosseum",
              "url": "https://pokeapi.co/api/v2/version-group/12/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "xd",
              "url": "https://pokeapi.co/api/v2/version-group/13/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "black-2-white-2",
              "url": "https://pokeapi.co/api/v2/version-group/14/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "x-y",
              "url": "https://pokeapi.co/api/v2/version-group/15/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sun-moon",
              "url": "https://pokeapi.co/api/v2/version-group/17/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "ultra-sun-ultra-moon",
              "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "lets-go-pikachu-lets-go-eevee",
              "url": "https://pokeapi.co/api/v2/version-group/19/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sword-shield",
              "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "sweet-kiss",
          "url": "https://pokeapi.co/api/v2/move/186/"
        },
        "version_group_details": [
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "sword-shield",
              "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "mud-slap",
          "url": "https://pokeapi.co/api/v2/move/189/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "gold-silver",
              "url": "https://pokeapi.co/api/v2/version-group/3/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "crystal",
              "url": "https://pokeapi.co/api/v2/version-group/4/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "emerald",
              "url": "https://pokeapi.co/api/v2/version-group/6/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "platinum",
              "url": "https://pokeapi.co/api/v2/version-group/9/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "heartgold-soulsilver",
              "url": "https://pokeapi.co/api/v2/version-group/10/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "zap-cannon",
          "url": "https://pokeapi.co/api/v2/move/192/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "gold-silver",
              "url": "https://pokeapi.co/api/v2/version-group/3/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "crystal",
              "url": "https://pokeapi.co/api/v2/version-group/4/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "icy-wind",
          "url": "https://pokeapi.co/api/v2/move/196/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "platinum",
              "url": "https://pokeapi.co/api/v2/version-group/9/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "heartgold-soulsilver",
              "url": "https://pokeapi.co/api/v2/version-group/10/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "black-2-white-2",
              "url": "https://pokeapi.co/api/v2/version-group/14/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "ultra-sun-ultra-moon",
              "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sword-shield",
              "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "detect",
          "url": "https://pokeapi.co/api/v2/move/197/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "gold-silver",
              "url": "https://pokeapi.co/api/v2/version-group/3/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "crystal",
              "url": "https://pokeapi.co/api/v2/version-group/4/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "endure",
          "url": "https://pokeapi.co/api/v2/move/203/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "gold-silver",
              "url": "https://pokeapi.co/api/v2/version-group/3/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "crystal",
              "url": "https://pokeapi.co/api/v2/version-group/4/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "emerald",
              "url": "https://pokeapi.co/api/v2/version-group/6/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "diamond-pearl",
              "url": "https://pokeapi.co/api/v2/version-group/8/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "platinum",
              "url": "https://pokeapi.co/api/v2/version-group/9/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "heartgold-soulsilver",
              "url": "https://pokeapi.co/api/v2/version-group/10/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sword-shield",
              "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "charm",
          "url": "https://pokeapi.co/api/v2/move/204/"
        },
        "version_group_details": [
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "sword-shield",
              "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sword-shield",
              "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "rollout",
          "url": "https://pokeapi.co/api/v2/move/205/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "gold-silver",
              "url": "https://pokeapi.co/api/v2/version-group/3/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "crystal",
              "url": "https://pokeapi.co/api/v2/version-group/4/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "emerald",
              "url": "https://pokeapi.co/api/v2/version-group/6/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "platinum",
              "url": "https://pokeapi.co/api/v2/version-group/9/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "heartgold-soulsilver",
              "url": "https://pokeapi.co/api/v2/version-group/10/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "swagger",
          "url": "https://pokeapi.co/api/v2/move/207/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "gold-silver",
              "url": "https://pokeapi.co/api/v2/version-group/3/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "crystal",
              "url": "https://pokeapi.co/api/v2/version-group/4/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "emerald",
              "url": "https://pokeapi.co/api/v2/version-group/6/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "diamond-pearl",
              "url": "https://pokeapi.co/api/v2/version-group/8/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "platinum",
              "url": "https://pokeapi.co/api/v2/version-group/9/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "heartgold-soulsilver",
              "url": "https://pokeapi.co/api/v2/version-group/10/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "black-white",
              "url": "https://pokeapi.co/api/v2/version-group/11/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "xd",
              "url": "https://pokeapi.co/api/v2/version-group/13/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "black-2-white-2",
              "url": "https://pokeapi.co/api/v2/version-group/14/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "x-y",
              "url": "https://pokeapi.co/api/v2/version-group/15/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sun-moon",
              "url": "https://pokeapi.co/api/v2/version-group/17/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "ultra-sun-ultra-moon",
              "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "attract",
          "url": "https://pokeapi.co/api/v2/move/213/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "gold-silver",
              "url": "https://pokeapi.co/api/v2/version-group/3/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "crystal",
              "url": "https://pokeapi.co/api/v2/version-group/4/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "ruby-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/5/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "emerald",
              "url": "https://pokeapi.co/api/v2/version-group/6/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "firered-leafgreen",
              "url": "https://pokeapi.co/api/v2/version-group/7/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "diamond-pearl",
              "url": "https://pokeapi.co/api/v2/version-group/8/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "platinum",
              "url": "https://pokeapi.co/api/v2/version-group/9/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "heartgold-soulsilver",
              "url": "https://pokeapi.co/api/v2/version-group/10/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "black-white",
              "url": "https://pokeapi.co/api/v2/version-group/11/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "colosseum",
              "url": "https://pokeapi.co/api/v2/version-group/12/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "xd",
              "url": "https://pokeapi.co/api/v2/version-group/13/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "black-2-white-2",
              "url": "https://pokeapi.co/api/v2/version-group/14/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "x-y",
              "url": "https://pokeapi.co/api/v2/version-group/15/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sun-moon",
              "url": "https://pokeapi.co/api/v2/version-group/17/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "ultra-sun-ultra-moon",
              "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sword-shield",
              "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "sleep-talk",
          "url": "https://pokeapi.co/api/v2/move/214/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "gold-silver",
              "url": "https://pokeapi.co/api/v2/version-group/3/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "crystal",
              "url": "https://pokeapi.co/api/v2/version-group/4/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "emerald",
              "url": "https://pokeapi.co/api/v2/version-group/6/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "diamond-pearl",
              "url": "https://pokeapi.co/api/v2/version-group/8/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "platinum",
              "url": "https://pokeapi.co/api/v2/version-group/9/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "heartgold-soulsilver",
              "url": "https://pokeapi.co/api/v2/version-group/10/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "black-2-white-2",
              "url": "https://pokeapi.co/api/v2/version-group/14/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "x-y",
              "url": "https://pokeapi.co/api/v2/version-group/15/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sun-moon",
              "url": "https://pokeapi.co/api/v2/version-group/17/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "ultra-sun-ultra-moon",
              "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sword-shield",
              "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "heal-bell",
          "url": "https://pokeapi.co/api/v2/move/215/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "heartgold-soulsilver",
              "url": "https://pokeapi.co/api/v2/version-group/10/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "black-2-white-2",
              "url": "https://pokeapi.co/api/v2/version-group/14/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "ultra-sun-ultra-moon",
              "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "return",
          "url": "https://pokeapi.co/api/v2/move/216/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "gold-silver",
              "url": "https://pokeapi.co/api/v2/version-group/3/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "crystal",
              "url": "https://pokeapi.co/api/v2/version-group/4/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "ruby-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/5/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "emerald",
              "url": "https://pokeapi.co/api/v2/version-group/6/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "firered-leafgreen",
              "url": "https://pokeapi.co/api/v2/version-group/7/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "diamond-pearl",
              "url": "https://pokeapi.co/api/v2/version-group/8/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "platinum",
              "url": "https://pokeapi.co/api/v2/version-group/9/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "heartgold-soulsilver",
              "url": "https://pokeapi.co/api/v2/version-group/10/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "black-white",
              "url": "https://pokeapi.co/api/v2/version-group/11/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "colosseum",
              "url": "https://pokeapi.co/api/v2/version-group/12/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "xd",
              "url": "https://pokeapi.co/api/v2/version-group/13/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "black-2-white-2",
              "url": "https://pokeapi.co/api/v2/version-group/14/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "x-y",
              "url": "https://pokeapi.co/api/v2/version-group/15/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sun-moon",
              "url": "https://pokeapi.co/api/v2/version-group/17/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "ultra-sun-ultra-moon",
              "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "frustration",
          "url": "https://pokeapi.co/api/v2/move/218/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "gold-silver",
              "url": "https://pokeapi.co/api/v2/version-group/3/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "crystal",
              "url": "https://pokeapi.co/api/v2/version-group/4/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "ruby-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/5/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "emerald",
              "url": "https://pokeapi.co/api/v2/version-group/6/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "firered-leafgreen",
              "url": "https://pokeapi.co/api/v2/version-group/7/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "diamond-pearl",
              "url": "https://pokeapi.co/api/v2/version-group/8/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "platinum",
              "url": "https://pokeapi.co/api/v2/version-group/9/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "heartgold-soulsilver",
              "url": "https://pokeapi.co/api/v2/version-group/10/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "black-white",
              "url": "https://pokeapi.co/api/v2/version-group/11/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "colosseum",
              "url": "https://pokeapi.co/api/v2/version-group/12/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "xd",
              "url": "https://pokeapi.co/api/v2/version-group/13/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "black-2-white-2",
              "url": "https://pokeapi.co/api/v2/version-group/14/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "x-y",
              "url": "https://pokeapi.co/api/v2/version-group/15/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sun-moon",
              "url": "https://pokeapi.co/api/v2/version-group/17/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "ultra-sun-ultra-moon",
              "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "safeguard",
          "url": "https://pokeapi.co/api/v2/move/219/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "ruby-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/5/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "emerald",
              "url": "https://pokeapi.co/api/v2/version-group/6/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "firered-leafgreen",
              "url": "https://pokeapi.co/api/v2/version-group/7/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "diamond-pearl",
              "url": "https://pokeapi.co/api/v2/version-group/8/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "platinum",
              "url": "https://pokeapi.co/api/v2/version-group/9/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "heartgold-soulsilver",
              "url": "https://pokeapi.co/api/v2/version-group/10/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "black-white",
              "url": "https://pokeapi.co/api/v2/version-group/11/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "colosseum",
              "url": "https://pokeapi.co/api/v2/version-group/12/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "xd",
              "url": "https://pokeapi.co/api/v2/version-group/13/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "black-2-white-2",
              "url": "https://pokeapi.co/api/v2/version-group/14/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "x-y",
              "url": "https://pokeapi.co/api/v2/version-group/15/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sun-moon",
              "url": "https://pokeapi.co/api/v2/version-group/17/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "ultra-sun-ultra-moon",
              "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sword-shield",
              "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "dynamic-punch",
          "url": "https://pokeapi.co/api/v2/move/223/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "gold-silver",
              "url": "https://pokeapi.co/api/v2/version-group/3/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "crystal",
              "url": "https://pokeapi.co/api/v2/version-group/4/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "emerald",
              "url": "https://pokeapi.co/api/v2/version-group/6/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "baton-pass",
          "url": "https://pokeapi.co/api/v2/move/226/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sword-shield",
              "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "encore",
          "url": "https://pokeapi.co/api/v2/move/227/"
        },
        "version_group_details": [
          {
            "level_learned_at": 4,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "gold-silver",
              "url": "https://pokeapi.co/api/v2/version-group/3/"
            }
          },
          {
            "level_learned_at": 4,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "crystal",
              "url": "https://pokeapi.co/api/v2/version-group/4/"
            }
          },
          {
            "level_learned_at": 5,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "ruby-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/5/"
            }
          },
          {
            "level_learned_at": 5,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "emerald",
              "url": "https://pokeapi.co/api/v2/version-group/6/"
            }
          },
          {
            "level_learned_at": 5,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "firered-leafgreen",
              "url": "https://pokeapi.co/api/v2/version-group/7/"
            }
          },
          {
            "level_learned_at": 4,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "diamond-pearl",
              "url": "https://pokeapi.co/api/v2/version-group/8/"
            }
          },
          {
            "level_learned_at": 4,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "platinum",
              "url": "https://pokeapi.co/api/v2/version-group/9/"
            }
          },
          {
            "level_learned_at": 4,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "heartgold-soulsilver",
              "url": "https://pokeapi.co/api/v2/version-group/10/"
            }
          },
          {
            "level_learned_at": 4,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "black-white",
              "url": "https://pokeapi.co/api/v2/version-group/11/"
            }
          },
          {
            "level_learned_at": 5,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "colosseum",
              "url": "https://pokeapi.co/api/v2/version-group/12/"
            }
          },
          {
            "level_learned_at": 5,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "xd",
              "url": "https://pokeapi.co/api/v2/version-group/13/"
            }
          },
          {
            "level_learned_at": 4,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "black-2-white-2",
              "url": "https://pokeapi.co/api/v2/version-group/14/"
            }
          },
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "x-y",
              "url": "https://pokeapi.co/api/v2/version-group/15/"
            }
          },
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          },
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "sun-moon",
              "url": "https://pokeapi.co/api/v2/version-group/17/"
            }
          },
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "ultra-sun-ultra-moon",
              "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
          },
          {
            "level_learned_at": 22,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "lets-go-pikachu-lets-go-eevee",
              "url": "https://pokeapi.co/api/v2/version-group/19/"
            }
          },
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "sword-shield",
              "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sword-shield",
              "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "iron-tail",
          "url": "https://pokeapi.co/api/v2/move/231/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "gold-silver",
              "url": "https://pokeapi.co/api/v2/version-group/3/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "crystal",
              "url": "https://pokeapi.co/api/v2/version-group/4/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "ruby-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/5/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "emerald",
              "url": "https://pokeapi.co/api/v2/version-group/6/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "firered-leafgreen",
              "url": "https://pokeapi.co/api/v2/version-group/7/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "diamond-pearl",
              "url": "https://pokeapi.co/api/v2/version-group/8/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "platinum",
              "url": "https://pokeapi.co/api/v2/version-group/9/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "heartgold-soulsilver",
              "url": "https://pokeapi.co/api/v2/version-group/10/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "colosseum",
              "url": "https://pokeapi.co/api/v2/version-group/12/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "xd",
              "url": "https://pokeapi.co/api/v2/version-group/13/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "black-2-white-2",
              "url": "https://pokeapi.co/api/v2/version-group/14/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "ultra-sun-ultra-moon",
              "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "lets-go-pikachu-lets-go-eevee",
              "url": "https://pokeapi.co/api/v2/version-group/19/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sword-shield",
              "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "moonlight",
          "url": "https://pokeapi.co/api/v2/move/236/"
        },
        "version_group_details": [
          {
            "level_learned_at": 43,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "gold-silver",
              "url": "https://pokeapi.co/api/v2/version-group/3/"
            }
          },
          {
            "level_learned_at": 43,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "crystal",
              "url": "https://pokeapi.co/api/v2/version-group/4/"
            }
          },
          {
            "level_learned_at": 37,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "ruby-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/5/"
            }
          },
          {
            "level_learned_at": 37,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "emerald",
              "url": "https://pokeapi.co/api/v2/version-group/6/"
            }
          },
          {
            "level_learned_at": 37,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "firered-leafgreen",
              "url": "https://pokeapi.co/api/v2/version-group/7/"
            }
          },
          {
            "level_learned_at": 37,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "diamond-pearl",
              "url": "https://pokeapi.co/api/v2/version-group/8/"
            }
          },
          {
            "level_learned_at": 37,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "platinum",
              "url": "https://pokeapi.co/api/v2/version-group/9/"
            }
          },
          {
            "level_learned_at": 37,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "heartgold-soulsilver",
              "url": "https://pokeapi.co/api/v2/version-group/10/"
            }
          },
          {
            "level_learned_at": 40,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "black-white",
              "url": "https://pokeapi.co/api/v2/version-group/11/"
            }
          },
          {
            "level_learned_at": 37,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "colosseum",
              "url": "https://pokeapi.co/api/v2/version-group/12/"
            }
          },
          {
            "level_learned_at": 37,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "xd",
              "url": "https://pokeapi.co/api/v2/version-group/13/"
            }
          },
          {
            "level_learned_at": 43,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "black-2-white-2",
              "url": "https://pokeapi.co/api/v2/version-group/14/"
            }
          },
          {
            "level_learned_at": 43,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "x-y",
              "url": "https://pokeapi.co/api/v2/version-group/15/"
            }
          },
          {
            "level_learned_at": 43,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          },
          {
            "level_learned_at": 43,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "sun-moon",
              "url": "https://pokeapi.co/api/v2/version-group/17/"
            }
          },
          {
            "level_learned_at": 43,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "ultra-sun-ultra-moon",
              "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
          },
          {
            "level_learned_at": 24,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "sword-shield",
              "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "hidden-power",
          "url": "https://pokeapi.co/api/v2/move/237/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "gold-silver",
              "url": "https://pokeapi.co/api/v2/version-group/3/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "crystal",
              "url": "https://pokeapi.co/api/v2/version-group/4/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "ruby-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/5/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "emerald",
              "url": "https://pokeapi.co/api/v2/version-group/6/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "firered-leafgreen",
              "url": "https://pokeapi.co/api/v2/version-group/7/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "diamond-pearl",
              "url": "https://pokeapi.co/api/v2/version-group/8/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "platinum",
              "url": "https://pokeapi.co/api/v2/version-group/9/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "heartgold-soulsilver",
              "url": "https://pokeapi.co/api/v2/version-group/10/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "black-white",
              "url": "https://pokeapi.co/api/v2/version-group/11/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "colosseum",
              "url": "https://pokeapi.co/api/v2/version-group/12/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "xd",
              "url": "https://pokeapi.co/api/v2/version-group/13/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "black-2-white-2",
              "url": "https://pokeapi.co/api/v2/version-group/14/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "x-y",
              "url": "https://pokeapi.co/api/v2/version-group/15/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sun-moon",
              "url": "https://pokeapi.co/api/v2/version-group/17/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "ultra-sun-ultra-moon",
              "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "rain-dance",
          "url": "https://pokeapi.co/api/v2/move/240/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "gold-silver",
              "url": "https://pokeapi.co/api/v2/version-group/3/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "crystal",
              "url": "https://pokeapi.co/api/v2/version-group/4/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "ruby-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/5/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "emerald",
              "url": "https://pokeapi.co/api/v2/version-group/6/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "firered-leafgreen",
              "url": "https://pokeapi.co/api/v2/version-group/7/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "diamond-pearl",
              "url": "https://pokeapi.co/api/v2/version-group/8/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "platinum",
              "url": "https://pokeapi.co/api/v2/version-group/9/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "heartgold-soulsilver",
              "url": "https://pokeapi.co/api/v2/version-group/10/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "black-white",
              "url": "https://pokeapi.co/api/v2/version-group/11/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "colosseum",
              "url": "https://pokeapi.co/api/v2/version-group/12/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "xd",
              "url": "https://pokeapi.co/api/v2/version-group/13/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "black-2-white-2",
              "url": "https://pokeapi.co/api/v2/version-group/14/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "x-y",
              "url": "https://pokeapi.co/api/v2/version-group/15/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sun-moon",
              "url": "https://pokeapi.co/api/v2/version-group/17/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "ultra-sun-ultra-moon",
              "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sword-shield",
              "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "sunny-day",
          "url": "https://pokeapi.co/api/v2/move/241/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "gold-silver",
              "url": "https://pokeapi.co/api/v2/version-group/3/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "crystal",
              "url": "https://pokeapi.co/api/v2/version-group/4/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "ruby-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/5/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "emerald",
              "url": "https://pokeapi.co/api/v2/version-group/6/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "firered-leafgreen",
              "url": "https://pokeapi.co/api/v2/version-group/7/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "diamond-pearl",
              "url": "https://pokeapi.co/api/v2/version-group/8/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "platinum",
              "url": "https://pokeapi.co/api/v2/version-group/9/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "heartgold-soulsilver",
              "url": "https://pokeapi.co/api/v2/version-group/10/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "black-white",
              "url": "https://pokeapi.co/api/v2/version-group/11/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "colosseum",
              "url": "https://pokeapi.co/api/v2/version-group/12/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "xd",
              "url": "https://pokeapi.co/api/v2/version-group/13/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "black-2-white-2",
              "url": "https://pokeapi.co/api/v2/version-group/14/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "x-y",
              "url": "https://pokeapi.co/api/v2/version-group/15/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sun-moon",
              "url": "https://pokeapi.co/api/v2/version-group/17/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "ultra-sun-ultra-moon",
              "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sword-shield",
              "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "psych-up",
          "url": "https://pokeapi.co/api/v2/move/244/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "gold-silver",
              "url": "https://pokeapi.co/api/v2/version-group/3/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "crystal",
              "url": "https://pokeapi.co/api/v2/version-group/4/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "emerald",
              "url": "https://pokeapi.co/api/v2/version-group/6/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "diamond-pearl",
              "url": "https://pokeapi.co/api/v2/version-group/8/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "platinum",
              "url": "https://pokeapi.co/api/v2/version-group/9/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "heartgold-soulsilver",
              "url": "https://pokeapi.co/api/v2/version-group/10/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "black-white",
              "url": "https://pokeapi.co/api/v2/version-group/11/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "black-2-white-2",
              "url": "https://pokeapi.co/api/v2/version-group/14/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "x-y",
              "url": "https://pokeapi.co/api/v2/version-group/15/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sun-moon",
              "url": "https://pokeapi.co/api/v2/version-group/17/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "ultra-sun-ultra-moon",
              "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "shadow-ball",
          "url": "https://pokeapi.co/api/v2/move/247/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "gold-silver",
              "url": "https://pokeapi.co/api/v2/version-group/3/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "crystal",
              "url": "https://pokeapi.co/api/v2/version-group/4/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "ruby-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/5/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "emerald",
              "url": "https://pokeapi.co/api/v2/version-group/6/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "firered-leafgreen",
              "url": "https://pokeapi.co/api/v2/version-group/7/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "diamond-pearl",
              "url": "https://pokeapi.co/api/v2/version-group/8/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "platinum",
              "url": "https://pokeapi.co/api/v2/version-group/9/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "heartgold-soulsilver",
              "url": "https://pokeapi.co/api/v2/version-group/10/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "black-white",
              "url": "https://pokeapi.co/api/v2/version-group/11/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "colosseum",
              "url": "https://pokeapi.co/api/v2/version-group/12/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "xd",
              "url": "https://pokeapi.co/api/v2/version-group/13/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "black-2-white-2",
              "url": "https://pokeapi.co/api/v2/version-group/14/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "x-y",
              "url": "https://pokeapi.co/api/v2/version-group/15/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sun-moon",
              "url": "https://pokeapi.co/api/v2/version-group/17/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "ultra-sun-ultra-moon",
              "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "lets-go-pikachu-lets-go-eevee",
              "url": "https://pokeapi.co/api/v2/version-group/19/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sword-shield",
              "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "rock-smash",
          "url": "https://pokeapi.co/api/v2/move/249/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "diamond-pearl",
              "url": "https://pokeapi.co/api/v2/version-group/8/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "platinum",
              "url": "https://pokeapi.co/api/v2/version-group/9/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "heartgold-soulsilver",
              "url": "https://pokeapi.co/api/v2/version-group/10/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "black-white",
              "url": "https://pokeapi.co/api/v2/version-group/11/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "black-2-white-2",
              "url": "https://pokeapi.co/api/v2/version-group/14/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "x-y",
              "url": "https://pokeapi.co/api/v2/version-group/15/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "uproar",
          "url": "https://pokeapi.co/api/v2/move/253/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sword-shield",
              "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "facade",
          "url": "https://pokeapi.co/api/v2/move/263/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "ruby-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/5/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "emerald",
              "url": "https://pokeapi.co/api/v2/version-group/6/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "firered-leafgreen",
              "url": "https://pokeapi.co/api/v2/version-group/7/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "diamond-pearl",
              "url": "https://pokeapi.co/api/v2/version-group/8/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "platinum",
              "url": "https://pokeapi.co/api/v2/version-group/9/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "heartgold-soulsilver",
              "url": "https://pokeapi.co/api/v2/version-group/10/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "black-white",
              "url": "https://pokeapi.co/api/v2/version-group/11/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "colosseum",
              "url": "https://pokeapi.co/api/v2/version-group/12/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "xd",
              "url": "https://pokeapi.co/api/v2/version-group/13/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "black-2-white-2",
              "url": "https://pokeapi.co/api/v2/version-group/14/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "x-y",
              "url": "https://pokeapi.co/api/v2/version-group/15/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sun-moon",
              "url": "https://pokeapi.co/api/v2/version-group/17/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "ultra-sun-ultra-moon",
              "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "lets-go-pikachu-lets-go-eevee",
              "url": "https://pokeapi.co/api/v2/version-group/19/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sword-shield",
              "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "focus-punch",
          "url": "https://pokeapi.co/api/v2/move/264/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "ruby-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/5/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "emerald",
              "url": "https://pokeapi.co/api/v2/version-group/6/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "firered-leafgreen",
              "url": "https://pokeapi.co/api/v2/version-group/7/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "diamond-pearl",
              "url": "https://pokeapi.co/api/v2/version-group/8/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "platinum",
              "url": "https://pokeapi.co/api/v2/version-group/9/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "heartgold-soulsilver",
              "url": "https://pokeapi.co/api/v2/version-group/10/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "colosseum",
              "url": "https://pokeapi.co/api/v2/version-group/12/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "xd",
              "url": "https://pokeapi.co/api/v2/version-group/13/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "ultra-sun-ultra-moon",
              "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "follow-me",
          "url": "https://pokeapi.co/api/v2/move/266/"
        },
        "version_group_details": [
          {
            "level_learned_at": 17,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "ruby-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/5/"
            }
          },
          {
            "level_learned_at": 17,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "emerald",
              "url": "https://pokeapi.co/api/v2/version-group/6/"
            }
          },
          {
            "level_learned_at": 17,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "firered-leafgreen",
              "url": "https://pokeapi.co/api/v2/version-group/7/"
            }
          },
          {
            "level_learned_at": 16,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "diamond-pearl",
              "url": "https://pokeapi.co/api/v2/version-group/8/"
            }
          },
          {
            "level_learned_at": 16,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "platinum",
              "url": "https://pokeapi.co/api/v2/version-group/9/"
            }
          },
          {
            "level_learned_at": 16,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "heartgold-soulsilver",
              "url": "https://pokeapi.co/api/v2/version-group/10/"
            }
          },
          {
            "level_learned_at": 16,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "black-white",
              "url": "https://pokeapi.co/api/v2/version-group/11/"
            }
          },
          {
            "level_learned_at": 17,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "colosseum",
              "url": "https://pokeapi.co/api/v2/version-group/12/"
            }
          },
          {
            "level_learned_at": 17,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "xd",
              "url": "https://pokeapi.co/api/v2/version-group/13/"
            }
          },
          {
            "level_learned_at": 16,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "black-2-white-2",
              "url": "https://pokeapi.co/api/v2/version-group/14/"
            }
          },
          {
            "level_learned_at": 16,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "x-y",
              "url": "https://pokeapi.co/api/v2/version-group/15/"
            }
          },
          {
            "level_learned_at": 16,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          },
          {
            "level_learned_at": 16,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "sun-moon",
              "url": "https://pokeapi.co/api/v2/version-group/17/"
            }
          },
          {
            "level_learned_at": 16,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "ultra-sun-ultra-moon",
              "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
          },
          {
            "level_learned_at": 36,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "sword-shield",
              "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "helping-hand",
          "url": "https://pokeapi.co/api/v2/move/270/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "platinum",
              "url": "https://pokeapi.co/api/v2/version-group/9/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "heartgold-soulsilver",
              "url": "https://pokeapi.co/api/v2/version-group/10/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "black-2-white-2",
              "url": "https://pokeapi.co/api/v2/version-group/14/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "ultra-sun-ultra-moon",
              "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "lets-go-pikachu-lets-go-eevee",
              "url": "https://pokeapi.co/api/v2/version-group/19/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sword-shield",
              "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "trick",
          "url": "https://pokeapi.co/api/v2/move/271/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "platinum",
              "url": "https://pokeapi.co/api/v2/version-group/9/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "heartgold-soulsilver",
              "url": "https://pokeapi.co/api/v2/version-group/10/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "black-2-white-2",
              "url": "https://pokeapi.co/api/v2/version-group/14/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "ultra-sun-ultra-moon",
              "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sword-shield",
              "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "role-play",
          "url": "https://pokeapi.co/api/v2/move/272/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "heartgold-soulsilver",
              "url": "https://pokeapi.co/api/v2/version-group/10/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "black-2-white-2",
              "url": "https://pokeapi.co/api/v2/version-group/14/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "ultra-sun-ultra-moon",
              "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "magic-coat",
          "url": "https://pokeapi.co/api/v2/move/277/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "heartgold-soulsilver",
              "url": "https://pokeapi.co/api/v2/version-group/10/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "black-2-white-2",
              "url": "https://pokeapi.co/api/v2/version-group/14/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "ultra-sun-ultra-moon",
              "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "recycle",
          "url": "https://pokeapi.co/api/v2/move/278/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "diamond-pearl",
              "url": "https://pokeapi.co/api/v2/version-group/8/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "platinum",
              "url": "https://pokeapi.co/api/v2/version-group/9/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "heartgold-soulsilver",
              "url": "https://pokeapi.co/api/v2/version-group/10/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "black-2-white-2",
              "url": "https://pokeapi.co/api/v2/version-group/14/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "ultra-sun-ultra-moon",
              "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "brick-break",
          "url": "https://pokeapi.co/api/v2/move/280/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "ruby-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/5/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "emerald",
              "url": "https://pokeapi.co/api/v2/version-group/6/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "firered-leafgreen",
              "url": "https://pokeapi.co/api/v2/version-group/7/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "diamond-pearl",
              "url": "https://pokeapi.co/api/v2/version-group/8/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "platinum",
              "url": "https://pokeapi.co/api/v2/version-group/9/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "heartgold-soulsilver",
              "url": "https://pokeapi.co/api/v2/version-group/10/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "black-white",
              "url": "https://pokeapi.co/api/v2/version-group/11/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "colosseum",
              "url": "https://pokeapi.co/api/v2/version-group/12/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "xd",
              "url": "https://pokeapi.co/api/v2/version-group/13/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "black-2-white-2",
              "url": "https://pokeapi.co/api/v2/version-group/14/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "x-y",
              "url": "https://pokeapi.co/api/v2/version-group/15/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sun-moon",
              "url": "https://pokeapi.co/api/v2/version-group/17/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "ultra-sun-ultra-moon",
              "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "lets-go-pikachu-lets-go-eevee",
              "url": "https://pokeapi.co/api/v2/version-group/19/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sword-shield",
              "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "knock-off",
          "url": "https://pokeapi.co/api/v2/move/282/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "platinum",
              "url": "https://pokeapi.co/api/v2/version-group/9/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "heartgold-soulsilver",
              "url": "https://pokeapi.co/api/v2/version-group/10/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "black-2-white-2",
              "url": "https://pokeapi.co/api/v2/version-group/14/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "ultra-sun-ultra-moon",
              "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "endeavor",
          "url": "https://pokeapi.co/api/v2/move/283/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "platinum",
              "url": "https://pokeapi.co/api/v2/version-group/9/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "heartgold-soulsilver",
              "url": "https://pokeapi.co/api/v2/version-group/10/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "black-2-white-2",
              "url": "https://pokeapi.co/api/v2/version-group/14/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "ultra-sun-ultra-moon",
              "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "imprison",
          "url": "https://pokeapi.co/api/v2/move/286/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sword-shield",
              "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "snatch",
          "url": "https://pokeapi.co/api/v2/move/289/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "ruby-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/5/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "emerald",
              "url": "https://pokeapi.co/api/v2/version-group/6/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "firered-leafgreen",
              "url": "https://pokeapi.co/api/v2/version-group/7/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "diamond-pearl",
              "url": "https://pokeapi.co/api/v2/version-group/8/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "platinum",
              "url": "https://pokeapi.co/api/v2/version-group/9/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "heartgold-soulsilver",
              "url": "https://pokeapi.co/api/v2/version-group/10/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "colosseum",
              "url": "https://pokeapi.co/api/v2/version-group/12/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "xd",
              "url": "https://pokeapi.co/api/v2/version-group/13/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "black-2-white-2",
              "url": "https://pokeapi.co/api/v2/version-group/14/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "ultra-sun-ultra-moon",
              "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "secret-power",
          "url": "https://pokeapi.co/api/v2/move/290/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "ruby-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/5/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "emerald",
              "url": "https://pokeapi.co/api/v2/version-group/6/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "firered-leafgreen",
              "url": "https://pokeapi.co/api/v2/version-group/7/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "diamond-pearl",
              "url": "https://pokeapi.co/api/v2/version-group/8/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "platinum",
              "url": "https://pokeapi.co/api/v2/version-group/9/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "heartgold-soulsilver",
              "url": "https://pokeapi.co/api/v2/version-group/10/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "colosseum",
              "url": "https://pokeapi.co/api/v2/version-group/12/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "xd",
              "url": "https://pokeapi.co/api/v2/version-group/13/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "hyper-voice",
          "url": "https://pokeapi.co/api/v2/move/304/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "black-2-white-2",
              "url": "https://pokeapi.co/api/v2/version-group/14/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "ultra-sun-ultra-moon",
              "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sword-shield",
              "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "meteor-mash",
          "url": "https://pokeapi.co/api/v2/move/309/"
        },
        "version_group_details": [
          {
            "level_learned_at": 45,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "ruby-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/5/"
            }
          },
          {
            "level_learned_at": 45,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "emerald",
              "url": "https://pokeapi.co/api/v2/version-group/6/"
            }
          },
          {
            "level_learned_at": 45,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "firered-leafgreen",
              "url": "https://pokeapi.co/api/v2/version-group/7/"
            }
          },
          {
            "level_learned_at": 43,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "diamond-pearl",
              "url": "https://pokeapi.co/api/v2/version-group/8/"
            }
          },
          {
            "level_learned_at": 43,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "platinum",
              "url": "https://pokeapi.co/api/v2/version-group/9/"
            }
          },
          {
            "level_learned_at": 43,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "heartgold-soulsilver",
              "url": "https://pokeapi.co/api/v2/version-group/10/"
            }
          },
          {
            "level_learned_at": 55,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "black-white",
              "url": "https://pokeapi.co/api/v2/version-group/11/"
            }
          },
          {
            "level_learned_at": 45,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "colosseum",
              "url": "https://pokeapi.co/api/v2/version-group/12/"
            }
          },
          {
            "level_learned_at": 45,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "xd",
              "url": "https://pokeapi.co/api/v2/version-group/13/"
            }
          },
          {
            "level_learned_at": 52,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "black-2-white-2",
              "url": "https://pokeapi.co/api/v2/version-group/14/"
            }
          },
          {
            "level_learned_at": 50,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "x-y",
              "url": "https://pokeapi.co/api/v2/version-group/15/"
            }
          },
          {
            "level_learned_at": 50,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          },
          {
            "level_learned_at": 50,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "sun-moon",
              "url": "https://pokeapi.co/api/v2/version-group/17/"
            }
          },
          {
            "level_learned_at": 50,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "ultra-sun-ultra-moon",
              "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
          },
          {
            "level_learned_at": 32,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "sword-shield",
              "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "fake-tears",
          "url": "https://pokeapi.co/api/v2/move/313/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sword-shield",
              "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "cosmic-power",
          "url": "https://pokeapi.co/api/v2/move/322/"
        },
        "version_group_details": [
          {
            "level_learned_at": 33,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "ruby-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/5/"
            }
          },
          {
            "level_learned_at": 33,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "emerald",
              "url": "https://pokeapi.co/api/v2/version-group/6/"
            }
          },
          {
            "level_learned_at": 33,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "firered-leafgreen",
              "url": "https://pokeapi.co/api/v2/version-group/7/"
            }
          },
          {
            "level_learned_at": 25,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "diamond-pearl",
              "url": "https://pokeapi.co/api/v2/version-group/8/"
            }
          },
          {
            "level_learned_at": 25,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "platinum",
              "url": "https://pokeapi.co/api/v2/version-group/9/"
            }
          },
          {
            "level_learned_at": 25,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "heartgold-soulsilver",
              "url": "https://pokeapi.co/api/v2/version-group/10/"
            }
          },
          {
            "level_learned_at": 28,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "black-white",
              "url": "https://pokeapi.co/api/v2/version-group/11/"
            }
          },
          {
            "level_learned_at": 33,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "colosseum",
              "url": "https://pokeapi.co/api/v2/version-group/12/"
            }
          },
          {
            "level_learned_at": 33,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "xd",
              "url": "https://pokeapi.co/api/v2/version-group/13/"
            }
          },
          {
            "level_learned_at": 34,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "black-2-white-2",
              "url": "https://pokeapi.co/api/v2/version-group/14/"
            }
          },
          {
            "level_learned_at": 34,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "x-y",
              "url": "https://pokeapi.co/api/v2/version-group/15/"
            }
          },
          {
            "level_learned_at": 34,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          },
          {
            "level_learned_at": 34,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "sun-moon",
              "url": "https://pokeapi.co/api/v2/version-group/17/"
            }
          },
          {
            "level_learned_at": 34,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "ultra-sun-ultra-moon",
              "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
          },
          {
            "level_learned_at": 40,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "sword-shield",
              "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sword-shield",
              "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "signal-beam",
          "url": "https://pokeapi.co/api/v2/move/324/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "platinum",
              "url": "https://pokeapi.co/api/v2/version-group/9/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "heartgold-soulsilver",
              "url": "https://pokeapi.co/api/v2/version-group/10/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "black-2-white-2",
              "url": "https://pokeapi.co/api/v2/version-group/14/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "ultra-sun-ultra-moon",
              "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "bounce",
          "url": "https://pokeapi.co/api/v2/move/340/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "platinum",
              "url": "https://pokeapi.co/api/v2/version-group/9/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "heartgold-soulsilver",
              "url": "https://pokeapi.co/api/v2/version-group/10/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "black-2-white-2",
              "url": "https://pokeapi.co/api/v2/version-group/14/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "ultra-sun-ultra-moon",
              "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sword-shield",
              "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "covet",
          "url": "https://pokeapi.co/api/v2/move/343/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "black-2-white-2",
              "url": "https://pokeapi.co/api/v2/version-group/14/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "ultra-sun-ultra-moon",
              "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "magical-leaf",
          "url": "https://pokeapi.co/api/v2/move/345/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sword-shield",
              "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "calm-mind",
          "url": "https://pokeapi.co/api/v2/move/347/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "ruby-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/5/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "emerald",
              "url": "https://pokeapi.co/api/v2/version-group/6/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "firered-leafgreen",
              "url": "https://pokeapi.co/api/v2/version-group/7/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "diamond-pearl",
              "url": "https://pokeapi.co/api/v2/version-group/8/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "platinum",
              "url": "https://pokeapi.co/api/v2/version-group/9/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "heartgold-soulsilver",
              "url": "https://pokeapi.co/api/v2/version-group/10/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "black-white",
              "url": "https://pokeapi.co/api/v2/version-group/11/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "colosseum",
              "url": "https://pokeapi.co/api/v2/version-group/12/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "xd",
              "url": "https://pokeapi.co/api/v2/version-group/13/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "black-2-white-2",
              "url": "https://pokeapi.co/api/v2/version-group/14/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "x-y",
              "url": "https://pokeapi.co/api/v2/version-group/15/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sun-moon",
              "url": "https://pokeapi.co/api/v2/version-group/17/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "ultra-sun-ultra-moon",
              "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "lets-go-pikachu-lets-go-eevee",
              "url": "https://pokeapi.co/api/v2/version-group/19/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sword-shield",
              "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "shock-wave",
          "url": "https://pokeapi.co/api/v2/move/351/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "ruby-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/5/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "emerald",
              "url": "https://pokeapi.co/api/v2/version-group/6/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "firered-leafgreen",
              "url": "https://pokeapi.co/api/v2/version-group/7/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "diamond-pearl",
              "url": "https://pokeapi.co/api/v2/version-group/8/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "platinum",
              "url": "https://pokeapi.co/api/v2/version-group/9/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "heartgold-soulsilver",
              "url": "https://pokeapi.co/api/v2/version-group/10/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "colosseum",
              "url": "https://pokeapi.co/api/v2/version-group/12/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "xd",
              "url": "https://pokeapi.co/api/v2/version-group/13/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "ultra-sun-ultra-moon",
              "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "water-pulse",
          "url": "https://pokeapi.co/api/v2/move/352/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "ruby-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/5/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "emerald",
              "url": "https://pokeapi.co/api/v2/version-group/6/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "firered-leafgreen",
              "url": "https://pokeapi.co/api/v2/version-group/7/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "diamond-pearl",
              "url": "https://pokeapi.co/api/v2/version-group/8/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "platinum",
              "url": "https://pokeapi.co/api/v2/version-group/9/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "heartgold-soulsilver",
              "url": "https://pokeapi.co/api/v2/version-group/10/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "colosseum",
              "url": "https://pokeapi.co/api/v2/version-group/12/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "xd",
              "url": "https://pokeapi.co/api/v2/version-group/13/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "ultra-sun-ultra-moon",
              "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "gravity",
          "url": "https://pokeapi.co/api/v2/move/356/"
        },
        "version_group_details": [
          {
            "level_learned_at": 34,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "diamond-pearl",
              "url": "https://pokeapi.co/api/v2/version-group/8/"
            }
          },
          {
            "level_learned_at": 34,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "platinum",
              "url": "https://pokeapi.co/api/v2/version-group/9/"
            }
          },
          {
            "level_learned_at": 34,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "heartgold-soulsilver",
              "url": "https://pokeapi.co/api/v2/version-group/10/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "heartgold-soulsilver",
              "url": "https://pokeapi.co/api/v2/version-group/10/"
            }
          },
          {
            "level_learned_at": 37,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "black-white",
              "url": "https://pokeapi.co/api/v2/version-group/11/"
            }
          },
          {
            "level_learned_at": 49,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "black-2-white-2",
              "url": "https://pokeapi.co/api/v2/version-group/14/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "black-2-white-2",
              "url": "https://pokeapi.co/api/v2/version-group/14/"
            }
          },
          {
            "level_learned_at": 49,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "x-y",
              "url": "https://pokeapi.co/api/v2/version-group/15/"
            }
          },
          {
            "level_learned_at": 49,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          },
          {
            "level_learned_at": 49,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "sun-moon",
              "url": "https://pokeapi.co/api/v2/version-group/17/"
            }
          },
          {
            "level_learned_at": 49,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "ultra-sun-ultra-moon",
              "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "ultra-sun-ultra-moon",
              "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
          },
          {
            "level_learned_at": 28,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "sword-shield",
              "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "wake-up-slap",
          "url": "https://pokeapi.co/api/v2/move/358/"
        },
        "version_group_details": [
          {
            "level_learned_at": 22,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "diamond-pearl",
              "url": "https://pokeapi.co/api/v2/version-group/8/"
            }
          },
          {
            "level_learned_at": 22,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "platinum",
              "url": "https://pokeapi.co/api/v2/version-group/9/"
            }
          },
          {
            "level_learned_at": 22,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "heartgold-soulsilver",
              "url": "https://pokeapi.co/api/v2/version-group/10/"
            }
          },
          {
            "level_learned_at": 22,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "black-white",
              "url": "https://pokeapi.co/api/v2/version-group/11/"
            }
          },
          {
            "level_learned_at": 22,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "black-2-white-2",
              "url": "https://pokeapi.co/api/v2/version-group/14/"
            }
          },
          {
            "level_learned_at": 22,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "x-y",
              "url": "https://pokeapi.co/api/v2/version-group/15/"
            }
          },
          {
            "level_learned_at": 22,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          },
          {
            "level_learned_at": 22,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "sun-moon",
              "url": "https://pokeapi.co/api/v2/version-group/17/"
            }
          },
          {
            "level_learned_at": 22,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "ultra-sun-ultra-moon",
              "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "healing-wish",
          "url": "https://pokeapi.co/api/v2/move/361/"
        },
        "version_group_details": [
          {
            "level_learned_at": 46,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "diamond-pearl",
              "url": "https://pokeapi.co/api/v2/version-group/8/"
            }
          },
          {
            "level_learned_at": 46,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "platinum",
              "url": "https://pokeapi.co/api/v2/version-group/9/"
            }
          },
          {
            "level_learned_at": 46,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "heartgold-soulsilver",
              "url": "https://pokeapi.co/api/v2/version-group/10/"
            }
          },
          {
            "level_learned_at": 49,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "black-white",
              "url": "https://pokeapi.co/api/v2/version-group/11/"
            }
          },
          {
            "level_learned_at": 55,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "black-2-white-2",
              "url": "https://pokeapi.co/api/v2/version-group/14/"
            }
          },
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "x-y",
              "url": "https://pokeapi.co/api/v2/version-group/15/"
            }
          },
          {
            "level_learned_at": 55,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "x-y",
              "url": "https://pokeapi.co/api/v2/version-group/15/"
            }
          },
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          },
          {
            "level_learned_at": 55,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          },
          {
            "level_learned_at": 55,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "sun-moon",
              "url": "https://pokeapi.co/api/v2/version-group/17/"
            }
          },
          {
            "level_learned_at": 55,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "ultra-sun-ultra-moon",
              "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
          },
          {
            "level_learned_at": 48,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "sword-shield",
              "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "natural-gift",
          "url": "https://pokeapi.co/api/v2/move/363/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "diamond-pearl",
              "url": "https://pokeapi.co/api/v2/version-group/8/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "platinum",
              "url": "https://pokeapi.co/api/v2/version-group/9/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "heartgold-soulsilver",
              "url": "https://pokeapi.co/api/v2/version-group/10/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "fling",
          "url": "https://pokeapi.co/api/v2/move/374/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "diamond-pearl",
              "url": "https://pokeapi.co/api/v2/version-group/8/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "platinum",
              "url": "https://pokeapi.co/api/v2/version-group/9/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "heartgold-soulsilver",
              "url": "https://pokeapi.co/api/v2/version-group/10/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "black-white",
              "url": "https://pokeapi.co/api/v2/version-group/11/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "black-2-white-2",
              "url": "https://pokeapi.co/api/v2/version-group/14/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "x-y",
              "url": "https://pokeapi.co/api/v2/version-group/15/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sun-moon",
              "url": "https://pokeapi.co/api/v2/version-group/17/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "ultra-sun-ultra-moon",
              "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sword-shield",
              "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "lucky-chant",
          "url": "https://pokeapi.co/api/v2/move/381/"
        },
        "version_group_details": [
          {
            "level_learned_at": 28,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "diamond-pearl",
              "url": "https://pokeapi.co/api/v2/version-group/8/"
            }
          },
          {
            "level_learned_at": 28,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "platinum",
              "url": "https://pokeapi.co/api/v2/version-group/9/"
            }
          },
          {
            "level_learned_at": 28,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "heartgold-soulsilver",
              "url": "https://pokeapi.co/api/v2/version-group/10/"
            }
          },
          {
            "level_learned_at": 31,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "black-white",
              "url": "https://pokeapi.co/api/v2/version-group/11/"
            }
          },
          {
            "level_learned_at": 37,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "black-2-white-2",
              "url": "https://pokeapi.co/api/v2/version-group/14/"
            }
          },
          {
            "level_learned_at": 37,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "x-y",
              "url": "https://pokeapi.co/api/v2/version-group/15/"
            }
          },
          {
            "level_learned_at": 37,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          },
          {
            "level_learned_at": 37,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "sun-moon",
              "url": "https://pokeapi.co/api/v2/version-group/17/"
            }
          },
          {
            "level_learned_at": 37,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "ultra-sun-ultra-moon",
              "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "copycat",
          "url": "https://pokeapi.co/api/v2/move/383/"
        },
        "version_group_details": [
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "sword-shield",
              "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "last-resort",
          "url": "https://pokeapi.co/api/v2/move/387/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "platinum",
              "url": "https://pokeapi.co/api/v2/version-group/9/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "heartgold-soulsilver",
              "url": "https://pokeapi.co/api/v2/version-group/10/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "black-2-white-2",
              "url": "https://pokeapi.co/api/v2/version-group/14/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "ultra-sun-ultra-moon",
              "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "drain-punch",
          "url": "https://pokeapi.co/api/v2/move/409/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "diamond-pearl",
              "url": "https://pokeapi.co/api/v2/version-group/8/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "platinum",
              "url": "https://pokeapi.co/api/v2/version-group/9/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "heartgold-soulsilver",
              "url": "https://pokeapi.co/api/v2/version-group/10/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "black-2-white-2",
              "url": "https://pokeapi.co/api/v2/version-group/14/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "ultra-sun-ultra-moon",
              "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sword-shield",
              "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "zen-headbutt",
          "url": "https://pokeapi.co/api/v2/move/428/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "platinum",
              "url": "https://pokeapi.co/api/v2/version-group/9/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "heartgold-soulsilver",
              "url": "https://pokeapi.co/api/v2/version-group/10/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "black-2-white-2",
              "url": "https://pokeapi.co/api/v2/version-group/14/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "ultra-sun-ultra-moon",
              "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sword-shield",
              "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "captivate",
          "url": "https://pokeapi.co/api/v2/move/445/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "diamond-pearl",
              "url": "https://pokeapi.co/api/v2/version-group/8/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "platinum",
              "url": "https://pokeapi.co/api/v2/version-group/9/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "heartgold-soulsilver",
              "url": "https://pokeapi.co/api/v2/version-group/10/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "stealth-rock",
          "url": "https://pokeapi.co/api/v2/move/446/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "diamond-pearl",
              "url": "https://pokeapi.co/api/v2/version-group/8/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "platinum",
              "url": "https://pokeapi.co/api/v2/version-group/9/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "heartgold-soulsilver",
              "url": "https://pokeapi.co/api/v2/version-group/10/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "black-2-white-2",
              "url": "https://pokeapi.co/api/v2/version-group/14/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "ultra-sun-ultra-moon",
              "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "lets-go-pikachu-lets-go-eevee",
              "url": "https://pokeapi.co/api/v2/version-group/19/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sword-shield",
              "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "grass-knot",
          "url": "https://pokeapi.co/api/v2/move/447/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "diamond-pearl",
              "url": "https://pokeapi.co/api/v2/version-group/8/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "platinum",
              "url": "https://pokeapi.co/api/v2/version-group/9/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "heartgold-soulsilver",
              "url": "https://pokeapi.co/api/v2/version-group/10/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "black-white",
              "url": "https://pokeapi.co/api/v2/version-group/11/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "black-2-white-2",
              "url": "https://pokeapi.co/api/v2/version-group/14/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "x-y",
              "url": "https://pokeapi.co/api/v2/version-group/15/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sun-moon",
              "url": "https://pokeapi.co/api/v2/version-group/17/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "ultra-sun-ultra-moon",
              "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sword-shield",
              "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "charge-beam",
          "url": "https://pokeapi.co/api/v2/move/451/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "diamond-pearl",
              "url": "https://pokeapi.co/api/v2/version-group/8/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "platinum",
              "url": "https://pokeapi.co/api/v2/version-group/9/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "heartgold-soulsilver",
              "url": "https://pokeapi.co/api/v2/version-group/10/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "black-white",
              "url": "https://pokeapi.co/api/v2/version-group/11/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "black-2-white-2",
              "url": "https://pokeapi.co/api/v2/version-group/14/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "x-y",
              "url": "https://pokeapi.co/api/v2/version-group/15/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sun-moon",
              "url": "https://pokeapi.co/api/v2/version-group/17/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "ultra-sun-ultra-moon",
              "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "wonder-room",
          "url": "https://pokeapi.co/api/v2/move/472/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "black-2-white-2",
              "url": "https://pokeapi.co/api/v2/version-group/14/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "ultra-sun-ultra-moon",
              "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sword-shield",
              "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "psyshock",
          "url": "https://pokeapi.co/api/v2/move/473/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "black-white",
              "url": "https://pokeapi.co/api/v2/version-group/11/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "black-2-white-2",
              "url": "https://pokeapi.co/api/v2/version-group/14/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "x-y",
              "url": "https://pokeapi.co/api/v2/version-group/15/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sun-moon",
              "url": "https://pokeapi.co/api/v2/version-group/17/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "ultra-sun-ultra-moon",
              "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sword-shield",
              "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "telekinesis",
          "url": "https://pokeapi.co/api/v2/move/477/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "black-white",
              "url": "https://pokeapi.co/api/v2/version-group/11/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "black-2-white-2",
              "url": "https://pokeapi.co/api/v2/version-group/14/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "ultra-sun-ultra-moon",
              "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "after-you",
          "url": "https://pokeapi.co/api/v2/move/495/"
        },
        "version_group_details": [
          {
            "level_learned_at": 52,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "black-white",
              "url": "https://pokeapi.co/api/v2/version-group/11/"
            }
          },
          {
            "level_learned_at": 58,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "black-2-white-2",
              "url": "https://pokeapi.co/api/v2/version-group/14/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "black-2-white-2",
              "url": "https://pokeapi.co/api/v2/version-group/14/"
            }
          },
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "x-y",
              "url": "https://pokeapi.co/api/v2/version-group/15/"
            }
          },
          {
            "level_learned_at": 58,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "x-y",
              "url": "https://pokeapi.co/api/v2/version-group/15/"
            }
          },
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          },
          {
            "level_learned_at": 58,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          },
          {
            "level_learned_at": 58,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "sun-moon",
              "url": "https://pokeapi.co/api/v2/version-group/17/"
            }
          },
          {
            "level_learned_at": 58,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "ultra-sun-ultra-moon",
              "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "ultra-sun-ultra-moon",
              "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
          },
          {
            "level_learned_at": 12,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "sword-shield",
              "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "round",
          "url": "https://pokeapi.co/api/v2/move/496/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "black-white",
              "url": "https://pokeapi.co/api/v2/version-group/11/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "black-2-white-2",
              "url": "https://pokeapi.co/api/v2/version-group/14/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "x-y",
              "url": "https://pokeapi.co/api/v2/version-group/15/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sun-moon",
              "url": "https://pokeapi.co/api/v2/version-group/17/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "ultra-sun-ultra-moon",
              "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sword-shield",
              "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "echoed-voice",
          "url": "https://pokeapi.co/api/v2/move/497/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "black-white",
              "url": "https://pokeapi.co/api/v2/version-group/11/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "black-2-white-2",
              "url": "https://pokeapi.co/api/v2/version-group/14/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "x-y",
              "url": "https://pokeapi.co/api/v2/version-group/15/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sun-moon",
              "url": "https://pokeapi.co/api/v2/version-group/17/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "ultra-sun-ultra-moon",
              "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "stored-power",
          "url": "https://pokeapi.co/api/v2/move/500/"
        },
        "version_group_details": [
          {
            "level_learned_at": 43,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "black-white",
              "url": "https://pokeapi.co/api/v2/version-group/11/"
            }
          },
          {
            "level_learned_at": 28,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "black-2-white-2",
              "url": "https://pokeapi.co/api/v2/version-group/14/"
            }
          },
          {
            "level_learned_at": 28,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "x-y",
              "url": "https://pokeapi.co/api/v2/version-group/15/"
            }
          },
          {
            "level_learned_at": 28,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          },
          {
            "level_learned_at": 28,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "sun-moon",
              "url": "https://pokeapi.co/api/v2/version-group/17/"
            }
          },
          {
            "level_learned_at": 28,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "ultra-sun-ultra-moon",
              "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
          },
          {
            "level_learned_at": 4,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "sword-shield",
              "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sword-shield",
              "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "ally-switch",
          "url": "https://pokeapi.co/api/v2/move/502/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sword-shield",
              "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "incinerate",
          "url": "https://pokeapi.co/api/v2/move/510/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "black-white",
              "url": "https://pokeapi.co/api/v2/version-group/11/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "black-2-white-2",
              "url": "https://pokeapi.co/api/v2/version-group/14/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "x-y",
              "url": "https://pokeapi.co/api/v2/version-group/15/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "retaliate",
          "url": "https://pokeapi.co/api/v2/move/514/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "black-white",
              "url": "https://pokeapi.co/api/v2/version-group/11/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "black-2-white-2",
              "url": "https://pokeapi.co/api/v2/version-group/14/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "x-y",
              "url": "https://pokeapi.co/api/v2/version-group/15/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sword-shield",
              "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "bestow",
          "url": "https://pokeapi.co/api/v2/move/516/"
        },
        "version_group_details": [
          {
            "level_learned_at": 25,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "black-white",
              "url": "https://pokeapi.co/api/v2/version-group/11/"
            }
          },
          {
            "level_learned_at": 19,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "black-2-white-2",
              "url": "https://pokeapi.co/api/v2/version-group/14/"
            }
          },
          {
            "level_learned_at": 19,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "x-y",
              "url": "https://pokeapi.co/api/v2/version-group/15/"
            }
          },
          {
            "level_learned_at": 19,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          },
          {
            "level_learned_at": 19,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "sun-moon",
              "url": "https://pokeapi.co/api/v2/version-group/17/"
            }
          },
          {
            "level_learned_at": 19,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "ultra-sun-ultra-moon",
              "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "work-up",
          "url": "https://pokeapi.co/api/v2/move/526/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "black-white",
              "url": "https://pokeapi.co/api/v2/version-group/11/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "black-2-white-2",
              "url": "https://pokeapi.co/api/v2/version-group/14/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sun-moon",
              "url": "https://pokeapi.co/api/v2/version-group/17/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "ultra-sun-ultra-moon",
              "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sword-shield",
              "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "disarming-voice",
          "url": "https://pokeapi.co/api/v2/move/574/"
        },
        "version_group_details": [
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "x-y",
              "url": "https://pokeapi.co/api/v2/version-group/15/"
            }
          },
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          },
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "sun-moon",
              "url": "https://pokeapi.co/api/v2/version-group/17/"
            }
          },
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "ultra-sun-ultra-moon",
              "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
          },
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "sword-shield",
              "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "draining-kiss",
          "url": "https://pokeapi.co/api/v2/move/577/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sword-shield",
              "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "misty-terrain",
          "url": "https://pokeapi.co/api/v2/move/581/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sword-shield",
              "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "play-rough",
          "url": "https://pokeapi.co/api/v2/move/583/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "lets-go-pikachu-lets-go-eevee",
              "url": "https://pokeapi.co/api/v2/version-group/19/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sword-shield",
              "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "moonblast",
          "url": "https://pokeapi.co/api/v2/move/585/"
        },
        "version_group_details": [
          {
            "level_learned_at": 46,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "x-y",
              "url": "https://pokeapi.co/api/v2/version-group/15/"
            }
          },
          {
            "level_learned_at": 46,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          },
          {
            "level_learned_at": 46,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "sun-moon",
              "url": "https://pokeapi.co/api/v2/version-group/17/"
            }
          },
          {
            "level_learned_at": 46,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "ultra-sun-ultra-moon",
              "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
          },
          {
            "level_learned_at": 28,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "lets-go-pikachu-lets-go-eevee",
              "url": "https://pokeapi.co/api/v2/version-group/19/"
            }
          },
          {
            "level_learned_at": 44,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "sword-shield",
              "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "confide",
          "url": "https://pokeapi.co/api/v2/move/590/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "x-y",
              "url": "https://pokeapi.co/api/v2/version-group/15/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sun-moon",
              "url": "https://pokeapi.co/api/v2/version-group/17/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "ultra-sun-ultra-moon",
              "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "mystical-fire",
          "url": "https://pokeapi.co/api/v2/move/595/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sword-shield",
              "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "dazzling-gleam",
          "url": "https://pokeapi.co/api/v2/move/605/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "x-y",
              "url": "https://pokeapi.co/api/v2/version-group/15/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sun-moon",
              "url": "https://pokeapi.co/api/v2/version-group/17/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "ultra-sun-ultra-moon",
              "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "lets-go-pikachu-lets-go-eevee",
              "url": "https://pokeapi.co/api/v2/version-group/19/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "sword-shield",
              "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "power-up-punch",
          "url": "https://pokeapi.co/api/v2/move/612/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "x-y",
              "url": "https://pokeapi.co/api/v2/version-group/15/"
            }
          },
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "machine",
              "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "spotlight",
          "url": "https://pokeapi.co/api/v2/move/671/"
        },
        "version_group_details": [
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "sun-moon",
              "url": "https://pokeapi.co/api/v2/version-group/17/"
            }
          },
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "ultra-sun-ultra-moon",
              "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "life-dew",
          "url": "https://pokeapi.co/api/v2/move/791/"
        },
        "version_group_details": [
          {
            "level_learned_at": 16,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "sword-shield",
              "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "meteor-beam",
          "url": "https://pokeapi.co/api/v2/move/800/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "sword-shield",
              "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "misty-explosion",
          "url": "https://pokeapi.co/api/v2/move/802/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "sword-shield",
              "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
          }
        ]
      },
      {
        "move": {
          "name": "dual-wingbeat",
          "url": "https://pokeapi.co/api/v2/move/814/"
        },
        "version_group_details": [
          {
            "level_learned_at": 0,
            "move_learn_method": {
              "name": "tutor",
              "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
            },
            "version_group": {
              "name": "sword-shield",
              "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
          }
        ]
      }
    ],
    "name": "clefairy",
    "order": 64,
    "past_types": [
      {
        "generation": {
          "name": "generation-v",
          "url": "https://pokeapi.co/api/v2/generation/5/"
        },
        "types": [
          {
            "slot": 1,
            "type": {
              "name": "normal",
              "url": "https://pokeapi.co/api/v2/type/1/"
            }
          }
        ]
      }
    ],
    "species": {
      "name": "clefairy",
      "url": "https://pokeapi.co/api/v2/pokemon-species/35/"
    },
    "sprites": {
      "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/35.png",
      "back_female": null,
      "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/35.png",
      "back_shiny_female": null,
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png",
      "front_female": null,
      "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/35.png",
      "front_shiny_female": null,
      "other": {
        "dream_world": {
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/35.svg",
          "front_female": null
        },
        "home": {
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/35.png",
          "front_female": null,
          "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/35.png",
          "front_shiny_female": null
        },
        "official-artwork": {
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/35.png"
        }
      },
      "versions": {
        "generation-i": {
          "red-blue": {
            "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/35.png",
            "back_gray": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/gray/35.png",
            "back_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/back/35.png",
            "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/35.png",
            "front_gray": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/35.png",
            "front_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/35.png"
          },
          "yellow": {
            "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/35.png",
            "back_gray": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/gray/35.png",
            "back_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/transparent/back/35.png",
            "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/35.png",
            "front_gray": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/gray/35.png",
            "front_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/transparent/35.png"
          }
        },
        "generation-ii": {
          "crystal": {
            "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/35.png",
            "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/35.png",
            "back_shiny_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/back/shiny/35.png",
            "back_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/back/35.png",
            "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/35.png",
            "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/35.png",
            "front_shiny_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/shiny/35.png",
            "front_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/35.png"
          },
          "gold": {
            "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/35.png",
            "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/shiny/35.png",
            "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/35.png",
            "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/shiny/35.png",
            "front_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/transparent/35.png"
          },
          "silver": {
            "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/35.png",
            "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/shiny/35.png",
            "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/35.png",
            "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/shiny/35.png",
            "front_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/transparent/35.png"
          }
        },
        "generation-iii": {
          "emerald": {
            "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/35.png",
            "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/35.png"
          },
          "firered-leafgreen": {
            "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/35.png",
            "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/35.png",
            "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/35.png",
            "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/35.png"
          },
          "ruby-sapphire": {
            "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/35.png",
            "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/35.png",
            "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/35.png",
            "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/35.png"
          }
        },
        "generation-iv": {
          "diamond-pearl": {
            "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/35.png",
            "back_female": null,
            "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/35.png",
            "back_shiny_female": null,
            "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/35.png",
            "front_female": null,
            "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/35.png",
            "front_shiny_female": null
          },
          "heartgold-soulsilver": {
            "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/35.png",
            "back_female": null,
            "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/35.png",
            "back_shiny_female": null,
            "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/35.png",
            "front_female": null,
            "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/35.png",
            "front_shiny_female": null
          },
          "platinum": {
            "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/35.png",
            "back_female": null,
            "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/35.png",
            "back_shiny_female": null,
            "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/35.png",
            "front_female": null,
            "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/35.png",
            "front_shiny_female": null
          }
        },
        "generation-v": {
          "black-white": {
            "animated": {
              "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/35.gif",
              "back_female": null,
              "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/35.gif",
              "back_shiny_female": null,
              "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/35.gif",
              "front_female": null,
              "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/35.gif",
              "front_shiny_female": null
            },
            "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/35.png",
            "back_female": null,
            "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/35.png",
            "back_shiny_female": null,
            "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/35.png",
            "front_female": null,
            "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/35.png",
            "front_shiny_female": null
          }
        },
        "generation-vi": {
          "omegaruby-alphasapphire": {
            "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/35.png",
            "front_female": null,
            "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/35.png",
            "front_shiny_female": null
          },
          "x-y": {
            "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/35.png",
            "front_female": null,
            "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/35.png",
            "front_shiny_female": null
          }
        },
        "generation-vii": {
          "icons": {
            "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/35.png",
            "front_female": null
          },
          "ultra-sun-ultra-moon": {
            "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/35.png",
            "front_female": null,
            "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/35.png",
            "front_shiny_female": null
          }
        },
        "generation-viii": {
          "icons": {
            "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/35.png",
            "front_female": null
          }
        }
      }
    },
    "stats": [
      {
        "base_stat": 70,
        "effort": 2,
        "stat": {
          "name": "hp",
          "url": "https://pokeapi.co/api/v2/stat/1/"
        }
      },
      {
        "base_stat": 45,
        "effort": 0,
        "stat": {
          "name": "attack",
          "url": "https://pokeapi.co/api/v2/stat/2/"
        }
      },
      {
        "base_stat": 48,
        "effort": 0,
        "stat": {
          "name": "defense",
          "url": "https://pokeapi.co/api/v2/stat/3/"
        }
      },
      {
        "base_stat": 60,
        "effort": 0,
        "stat": {
          "name": "special-attack",
          "url": "https://pokeapi.co/api/v2/stat/4/"
        }
      },
      {
        "base_stat": 65,
        "effort": 0,
        "stat": {
          "name": "special-defense",
          "url": "https://pokeapi.co/api/v2/stat/5/"
        }
      },
      {
        "base_stat": 35,
        "effort": 0,
        "stat": {
          "name": "speed",
          "url": "https://pokeapi.co/api/v2/stat/6/"
        }
      }
    ],
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "fairy",
          "url": "https://pokeapi.co/api/v2/type/18/"
        }
      }
    ],
    weight: number
}