const sampleJson = Object.freeze({
  squadName: "Ben 10 Alien Force",
  homeTown: "Bellwood",
  formed: 2005,
  secretBase: "Rustbucket",
  active: true,
  leader: {
    name: "Ben Tennyson",
    age: 16,
    secretIdentity: "Ben 10",
    powers: [
      "Omnitrix transformation",
      "Super strength",
      "Alien abilities",
      "Rapid adaptation",
    ],
  },
  members: [
    {
      name: "Heatblast",
      age: 1,
      secretIdentity: "Pyronite from Pyros",
      powers: [
        "Fire manipulation",
        "Heat immunity",
        "Fireballs",
        "Flight using fire jets",
      ],
    },
    {
      name: "Four Arms",
      age: 1,
      secretIdentity: "Tetramand from Khoros",
      powers: [
        "Super strength",
        "Shockwave claps",
        "Enhanced jumping",
        "Combat mastery",
      ],
    },
    {
      name: "XLR8",
      age: 1,
      secretIdentity: "Kineceleran from Kinet",
      powers: [
        "Super speed",
        "Enhanced reflexes",
        "Wall running",
        "Cyclone generation",
      ],
    },
    {
      name: "Diamondhead",
      age: 1,
      secretIdentity: "Petrosapien from Petropia",
      powers: [
        "Crystal manipulation",
        "Diamond-hard body",
        "Energy reflection",
        "Weapon formation",
      ],
    },
  ],
});

export const JSON_TEMPLATE = JSON.stringify(sampleJson, null, 2);

// const sampleJson = Object.freeze({
//   squadName: "Super hero squad",
//   homeTown: "Metro City",
//   formed: 2016,
//   secretBase: "Super tower",
//   active: true,
//   leader: {
//     name: "Iron Man",
//     age: 54,
//     secretIdentity: "Tony stark",
//     powers: ["Nano tech suit", "Speed", "Jetpack", "Missiles"],
//   },
//   members: [
//     {
//       name: "Molecule Man",
//       age: 29,
//       secretIdentity: "Dan Jukes",
//       powers: ["Radiation resistance", "Turning tiny", "Radiation blast"],
//     },
//     {
//       name: "Madame Uppercut",
//       age: 39,
//       secretIdentity: "Jane Wilson",
//       powers: [
//         "Million tonne punch",
//         "Damage resistance",
//         "Superhuman reflexes",
//       ],
//     },
//     {
//       name: "Eternal Flame",
//       age: 1000000,
//       secretIdentity: "Unknown",
//       powers: [
//         "Immortality",
//         "Heat Immunity",
//         "Inferno",
//         "Teleportation",
//         "Interdimensional travel",
//       ],
//     },
//   ],
// });

// export const JSON_TEMPLATE = JSON.stringify(sampleJson, null, 2);
