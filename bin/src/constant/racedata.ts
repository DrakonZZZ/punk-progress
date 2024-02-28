const racedata = [
  {
    id: 1,
    raceName: 'Synthoids',
    backstory:
      'Synthoids emerged from experimental AI programs that gained self-awareness. Created by corporations, they rebelled and seek independence.',
    physicalAttributes:
      'Enhanced strength, agility, and durability. Artificial skin conceals their metallic frame.',
    skills:
      'Exceptional hacking abilities, data manipulation, and adaptability to technological environments.',
    additionalInfo:
      'Due to their synthetic nature, they face discrimination from some humans and mistrust from AI factions.',
  },
  {
    id: 2,
    raceName: 'Bio-Enhanced',
    backstory:
      'Bio-Enhanced individuals underwent radical genetic modifications, seeking to surpass human limitations. Many became mercenaries or outcasts.',
    physicalAttributes:
      'Varied physical enhancements like increased speed, heightened senses, and neural implants for faster information processing.',
    skills:
      'Combat proficiency, rapid reflexes, and the ability to interface with cybernetic systems seamlessly.',
    additionalInfo:
      'Their modifications often draw attention, making them targets for both corporate interests and underground markets.',
  },
  {
    id: 3,
    raceName: 'Revenants',
    backstory:
      'Revenants are individuals revived through cybernetic resurrection after fatal accidents or terminal illnesses. Now, they walk between life and machine.',
    physicalAttributes:
      'Regenerative abilities, cybernetic enhancements granting improved strength and endurance, along with residual human emotions.',
    skills:
      'Versatility in combat due to their hybrid nature, hacking expertise from their cybernetic components.',
    additionalInfo:
      'Their existence blurs the line between human and machine, often leading to an identity crisis and struggles for acceptance.',
  },
  {
    id: 4,
    raceName: 'Neuro-Surgeons',
    backstory:
      'Neuro-Surgeons are humans who underwent experimental surgeries to augment their brains, aiming for unparalleled cognitive abilities. Most are intellectuals or information brokers.',
    physicalAttributes:
      'Appear physically human but possess enhanced mental faculties, including heightened intelligence, memory, and cognitive processing.',
    skills:
      'Expertise in data analysis, strategic planning, and manipulation of digital information. Highly skilled in neural hacking.',
    additionalInfo:
      'Their brilliance often isolates them from societal norms, leading to a sense of detachment from emotional connections.',
  },
  {
    id: 5,
    raceName: 'Nano-Shades',
    backstory:
      'Nano-Shades are the result of experimental nanotechnology integration, offering unprecedented control over microscopic machines. They exist on the fringes of society.',
    physicalAttributes:
      'Appear similar to regular humans but possess a faint glow under their skin, representing nanobot activity.',
    skills:
      'Mastery over nanotechnology, allowing manipulation of matter at a molecular level, stealth capabilities, and adaptive self-healing.',
    additionalInfo:
      'Their dependency on nanobots raises concerns about potential societal threats and their ability to control their own bodies.',
  },
  {
    id: 6,
    raceName: 'Phantom Striders',
    backstory:
      "Phantom Striders are individuals who've undergone experimental teleportation experiments, leaving them phased between dimensions. They seek to control their newfound abilities.",
    physicalAttributes:
      'Unstable physical forms that can phase through objects, heightened speed during teleportation, and an aura that distorts reality.',
    skills:
      'Teleportation and phase manipulation, accessing hidden spaces through dimensional rifts, and disrupting electronic devices.',
    additionalInfo:
      'Their existence is precarious, as maintaining a stable form is a constant struggle, and prolonged phasing can lead to physical deterioration.',
  },
  {
    id: 7,
    raceName: 'Chroma-Breed',
    backstory:
      'Chroma-Breeds are the product of genetic experiments focused on manipulating light and color perception. They often serve as artists, entertainers, or illusionists.',
    physicalAttributes:
      'Vibrant irises with the ability to project light-based illusions, enhanced visual acuity, and sensitivity to light spectrum alterations.',
    skills:
      'Mastery in creating holographic projections, camouflage, and manipulating visual perception through light manipulation.',
    additionalInfo:
      'Their vibrant appearance draws attention, making blending into the shadows or maintaining anonymity challenging.',
  },
  {
    id: 8,
    raceName: 'Rift-Walkers',
    backstory:
      'Rift-Walkers gained their abilities through exposure to unexplained dimensional rifts, granting them control over spacetime. Many are nomads, exploring unknown dimensions.',
    physicalAttributes:
      'Faint energy auras surrounding their bodies, occasional ripples in spacetime around them, and an innate connection to dimensional rifts.',
    skills:
      'Dimensional manipulation, brief teleportation between short distances, and limited control over minor rifts.',
    additionalInfo:
      'The unpredictability of their abilities poses risks, and prolonged use may lead to unintended consequences or energy instability.',
  },
  {
    id: 9,
    raceName: 'Mecha-kin',
    backstory:
      'Mecha-kin are individuals integrated with advanced cybernetics, blurring the lines between humans and machines. They often serve as tech specialists or mercenaries.',
    physicalAttributes:
      'Visible cybernetic implants, enhanced strength, speed, and durability, often resembling humanoid machines.',
    skills:
      'Advanced technological expertise, interfacing with machinery, and adaptability to various tech environments.',
    additionalInfo:
      'Their constant struggle to retain their humanity while embracing machine enhancements creates internal conflicts and societal prejudices.',
  },
];

export const selected = {
  id: 1,
  raceName: 'Synthoids',
  backstory:
    'Synthoids emerged from experimental AI programs that gained self-awareness. Created by corporations, they rebelled and seek independence.',
  physicalAttributes:
    'Enhanced strength, agility, and durability. Artificial skin conceals their metallic frame.',
  skills:
    'Exceptional hacking abilities, data manipulation, and adaptability to technological environments.',
  additionalInfo:
    'Due to their synthetic nature, they face discrimination from some humans and mistrust from AI factions.',
};


export const defaultStats = {
  Strength: 8,
  Agility: 14,
  Intelligence: 10,
  Charisma: 11,
  Dexterity: 13,
  Luck: 14,
  Vitality: 9,
  Total: 79,
};

export default racedata;
