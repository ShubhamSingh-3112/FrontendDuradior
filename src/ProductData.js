const productData = [
  {//kitchen
    itemId: "kitchen-cleaner",
    title: "Kitchen Cleaner",
    image: "/kitchen cleaner.png",
    price: "300",
    netContent: "500mL / 16.9 fl oz",
    description: "Powerful Formula for Sparkling Clean Surfaces",
    direction: [
      "1. Shake well before use.",
      "2. Spray directly onto surface.",
      "3. Wipe clean with a cloth or sponge.",
      "4. For stubborn stains, let sit for a few minutes before wiping."
    ],
    features: [
      "Cuts through grease and grime.",
      "Leaves surfaces streak-free.",
      "Fresh citrus scent.",
      "Suitable for use on countertops, sinks, stovetops and more."
    ],
    safetyInfo: [
      "Keep out of reach of children.",
      "Avoid contact with eyes and skin. If contact occurs rinse immediately with plenty of water.",
      "Store in cool and dry place."
    ],
    ingredients: "Water, Surfactants, Citric acid, Fragrance, Colorant.",
    manufacturer: {
      name: "FILL HERE.",
      address: "FILL HERE",
      phone: "FILL HERE",
      website: "https://abccleaners.com"
    }
  },
  {//lime 
    itemId: "Lime scale remover",
    title: "Lime Scale Remover",
    image: "/limescale.jpeg",
    price: "500",
    netContent: "500mL / 16.9 fl oz",
    description: "Powerful Formula for Tough Lime Scale",
    direction: [
      "Shake well before use.",
      "Apply directly on affected area.",
      "Leave for 5-10 minutes to penetrate lime scale.",
      "Wipe or rinse thoroughly with water.",
      "Ideal for Use On: Sinks, Faucets, Showerheads, Tiles, Toilet bowls"
    ],
    features: [
      "Dissolves and removes stubborn lime scale deposits",
      "Helps restore shine to surfaces",
      "Fresh citrus scent",
      "Suitable for use in bathrooms and kitchens"
    ],
    safetyInfo: [
      "Keep out of reach of children.",
      "Avoid contact with eyes and skin. If contact occurs rinse immediately with plenty of water.",
      "Store in cool and dry place away from direct sunlight."
    ],
    ingredients: "Water, Hydrochloric acid, Surfactants, Fragrance.",
    manufacturer: {
      name: "FILL HERE.",
      address: "FILL HERE",
      phone: "FILL HERE",
      website: "https://abccleaners.com"
    }
  },
  {//all purpose cleaner
    itemId: "All purpose cleaner",
    title: "All purpose cleaner",
    image: "/All Purpose Cleaner.png",
    price: "200",
    netContent: "750mL / 25.4 fl oz",
    description: "Effective Cleaning Power for Every Room",
    direction: [
      "Shake well before use.",
      "Spray directly onto surface.",
      "Wipe clean with a cloth or sponge.",
      "For stubborn stains, let sit for a few minutes before wiping.",
      "Suitable to use on: Countertops, Sinks, Tiles, Appliances, Glass surfaces, Bathroom fixtures"
    ],
    features: [
      "Removes dirt, grease, and grime",
      "Leaves surfaces sparkling clean",
      "Pleasant fragrance",
      "Non-abrasive formula"
    ],
    safetyInfo: [
      "Keep out of reach of children.",
      "Avoid contact with eyes and skin. If contact occurs rinse immediately with plenty of water.",
      "Store in cool and dry place away from direct sunlight."
    ],
    ingredients: "Water, Surfactants, Fragrance, Colorant.",
    manufacturer: {
      name: "FILL HERE.",
      address: "FILL HERE",
      phone: "FILL HERE",
      website: "https://abccleaners.com"
    }
  },
  {//dish cleaner
    itemId: "Dish cleaner",
    title: "Dish cleaner",
    image: "/dishcleaner.jpeg",
    price: "150",
    netContent: "750mL / 25.4 fl oz",
    description: "Powerful Cleaning for Sparkling Dishes",
    direction: [
      "Cuts through grease and stuck-on food",
      "Washes dishes thoroughly.",
      "Rinse dishes with water and dry"
    ],
    features: [
      "Cuts through grease and stuck-on food",
      "Gentle on hands",
      "Leaves dishes sparkling clean",
      "Fresh lemon scent"
    ],
    safetyInfo: [
      "Keep out of reach of children.",
      "Avoid contact with eyes and skin. If contact occurs rinse immediately with plenty of water.",
      "Store in cool and dry place away from direct sunlight."
    ],
    ingredients: "Water, Surfactants, Sodium Lauryl Ether Sulfate, Citric acid Fragrance.",
    manufacturer: {
      name: "FILL HERE.",
      address: "FILL HERE",
      phone: "FILL HERE",
      website: "https://abccleaners.com"
    }
  },
  {//hand wash
    itemId: "Liquid Hand wash",
    title: "Liquid Hand wash",
    image: "/liquidhandwash.jpeg",
    price: "200",
    netContent: "500mL / 16.9 fl oz",
    description: "Gentle Care for Clean and Soft Hands",
    direction: [
      "Pump a small amount onto wet hands.",
      "Rub hands together to lather.",
      "Rinse thoroughly with water."
    ],
    features: [
      "Cleans effectively without drying out skin",
      "Refreshing fragrance",
      "Dermatologically tested",
      "Suitable for daily use"
    ],
    safetyInfo: [
      "For external use only.",
      "Avoid contact with eyes. If contact occurs, rinse thoroughly with water.",
      "Keep out of reach of children."
    ],
    ingredients: "Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Glycerin, Fragrance, Citric Acid",
    manufacturer: {
      name: "FILL HERE.",
      address: "FILL HERE",
      phone: "FILL HERE",
      website: "https://abccleaners.com"
    }
  },
  {// All-Purpose Liquid Detergent
    itemId: "All purpose liquid detergent",
    title: "All-Purpose Liquid Detergent",
    image: "/allpurposeliqdetergent.jpeg",
    price: "300",
    netContent: "1 liter / 33.8 fl oz",
    description: "Powerful Cleaning for Every Household Task",
    direction: [
      "For normal loads, use 1 capful (30 ml).",
      "For heavily soiled loads, use 1.5 capfuls (45 ml).",
      "Pour directly into washing machine dispenser or drum.",
      "Follow garment care instructions for water temperature."
    ],
    suitableFor: [
      "Clothes",
      "Bedding",
      "Towels",
      "Delicates"
    ],
    features: [
      "Removes tough stains and dirt",
      "Leaves fabrics fresh and clean",
      "High-efficiency formula",
      "Pleasant fragrance"
    ],
    safetyInfo: [
      "Keep out of reach of children and pets.",
      "Avoid contact with eyes and skin. If contact occurs, rinse immediately with plenty of water.",
      "Store in a cool, dry place away from direct sunlight."
    ],
    ingredients: "Water, Surfactants, Sodium Laureth Sulfate, Sodium Chloride, Fragrance, Colorant",
    manufacturer: {
      name: "FILL HERE.",
      address: "FILL HERE",
      phone: "FILL HERE",
      website: "https://abccleaners.com"
    }
  },
  {// Top Load Liquid Detergent
    itemId: "Top Load liquid Detergent",
    title: "Top Load Liquid Detergent",
    image: "/toploadliqdetergent.jpeg",
    price: "150",
    netContent: "1.5 liters / 50.7 fl oz",
    description: "Powerful Cleaning for Top-Loading Washing Machines",
    direction: [
      "For regular loads, use 1 capful (30 ml).",
      "For heavily soiled loads, use 1.5 capfuls (45 ml).",
      "Pour directly into the washing machine dispenser or drum.",
      "Follow garment care instructions for water temperature."
    ],
    features: [
      "Effectively cleans and removes stains",
      "Designed for top-loading washing machines",
      "Leaves clothes fresh and soft",
      "Economical and efficient"
    ],
    safetyInfo: [
      "Keep out of reach of children and pets.",
      "Avoid contact with eyes and skin. If contact occurs, rinse immediately with plenty of water.",
      "Store in a cool, dry place away from direct sunlight."
    ],
    ingredients: "Water, Surfactants, Sodium Laureth Sulfate, Sodium Chloride, Fragrance, Colorant",
    manufacturer: {
      name: "FILL HERE.",
      address: "FILL HERE",
      phone: "FILL HERE",
      website: "https://abccleaners.com"
    }
  },
  {// Front Load Liquid Detergent
    itemId: "Front Load liquid Detergent",
    title: "Front Load Liquid Detergent",
    image: "/frontload.jpeg",
    price: "150",
    netContent: "1.5 liters / 50.7 fl oz",
    description: "Effective Cleaning for Front-Loading Washing Machines",
    direction: [
      "For regular loads, use 1 capful (30 ml).",
      "For heavily soiled loads, use 1.5 capfuls (45 ml).",
      "Pour directly into the washing machine dispenser drawer or drum.",
      "Follow garment care instructions for water temperature."
    ],
    features: [
      "Formulated for front-loading washing machines",
      "Removes dirt and stains effectively",
      "Gentle on fabrics",
      "Leaves clothes smelling fresh"
    ],
    safetyInfo: [
      "Keep out of reach of children and pets.",
      "Avoid contact with eyes and skin. If contact occurs, rinse immediately with plenty of water.",
      "Store in a cool, dry place away from direct sunlight."
    ],
    ingredients: "Water, Surfactants, Sodium Laureth Sulfate, Sodium Chloride, Fragrance, Colorant",
    manufacturer: {
      name: "FILL HERE.",
      address: "FILL HERE",
      phone: "FILL HERE",
      website: "https://abccleaners.com"
    }
  },
  {// Floor Disinfectant
    itemId: "Floor disinfectant",
    title: "Floor Disinfectant",
    image: "/floor.jpeg",
    price: "100",
    netContent: "1 liter / 33.8 fl oz",
    description: "Powerful Protection for Clean and Safe Floors",
    direction: [
      "Dilute 1 capful (30 ml) in 1 liter of water.",
      "Apply solution to the floor surface using a mop or sponge.",
      "Allow to air dry. No rinsing required."
    ],
    idealFor: [
      "Tile",
      "Vinyl",
      "Hardwood",
      "Laminate"
    ],
    features: [
      "Kills 99.9% of germs and bacteria",
      "Fresh, clean scent",
      "Leaves floors streak-free",
      "Suitable for household and commercial use"
    ],
    safetyInfo: [
      "Keep out of reach of children and pets.",
      "Avoid contact with eyes and skin. If contact occurs, rinse immediately with plenty of water.",
      "Store in a cool, dry place away from direct sunlight."
    ],
    ingredients: "Water, Quaternary Ammonium Compounds, Fragrance, Colorant",
    manufacturer: {
      name: "FILL HERE.",
      address: "FILL HERE",
      phone: "FILL HERE",
      website: "https://abccleaners.com"
    }
  },
  {// Toilet Cleaner
    itemId: "Toilet cleaner",
    title: "Toilet Cleaner",
    image: "/toiletcleaner.jpeg",
    price: "250",
    netContent: "Not specified (assuming similar to others)",
    description: "Powerful Cleaning for a Sparkling Toilet",
    features: [
      "Kills 99.9% of Germs and Bacteria",
      "Removes Tough Stains and Limescale",
      "Leaves a Fresh, Long-lasting Fragrance"
    ],
    direction: [
      "Lift the toilet seat.",
      "Squeeze the bottle to direct liquid around the bowl and under the rim.",
      "Leave for 10 minutes.",
      "Brush thoroughly and flush.",
      "For tough stains, leave for 30 minutes before brushing and flushing."
    ],
    ingredients: "Water, Hydrochloric Acid, Surfactants, Fragrance, Dye",
    safetyInfo: [
      "Keep out of reach of children.",
      "Avoid contact with eyes and skin.",
      "In case of contact, rinse immediately with plenty of water and seek medical advice.",
      "Do not mix with other cleaning products."
    ],
    storage: "Store in a cool, dry place away from direct sunlight.",
    environmentalInfo: "Bottle and cap are recyclable. Please dispose of responsibly.",
    manufacturer: {
      name: "FILL HERE.",
      address: "FILL HERE",
      phone: "FILL HERE",
      website: "https://abccleaners.com"
    }
  },
  {// Car Dashboard and Seat Cleaner
    itemId: "Car dashboard and seat cleaner",
    title: "Car Dashboard and Seat Cleaner",
    image: "/carwash.jpeg",
    price: "fill here",
    netContent: "Not specified (assuming similar to others)",
    description: "For a Pristine, Fresh Interior",
    features: [
      "Cleans and Protects Dashboard and Seats",
      "Removes Dust, Dirt, and Grime",
      "Leaves a Non-Greasy, Matte Finish",
      "Suitable for Leather, Vinyl, and Fabric",
      "Fresh, Long-lasting Fragrance"
    ],
    direction: [
      "Shake well before use.",
      "Spray directly onto the surface or onto a clean, soft cloth.",
      "Wipe the surface evenly.",
      "Buff with a dry cloth for a brilliant finish.",
      "For stubborn stains, repeat as necessary."
    ],
    ingredients: "Water, Surfactants, Solvents, Fragrance, Preservatives",
    safetyInfo: [    
      "Keep out of reach of children.",
      "Avoid contact with eyes and skin.",
      "In case of contact, rinse immediately with plenty of water and seek medical advice.",
      "Test on an inconspicuous area before use."
    ],
    storage: "Store in a cool, dry place away from direct sunlight.",
    environmentalInfo: "Bottle and cap are recyclable. Please dispose of responsibly.",
    manufacturer: {
      name: "FILL HERE.",
      address: "FILL HERE",
      phone: "FILL HERE",
      website: "https://abccleaners.com"
    }
  },
  {// Car Windshield Cleaner
    itemId: "Car windsheild cleaner",
    title: "Car Windshield Cleaner",
    image: "/carwind.jpeg",
    price: "fill here",
    netContent: "Not specified (assuming similar to others)",
    description: "Crystal Clear Vision, Every Drive",
    features: [
      "Streak-Free Formula for a Pristine View",
      "Quickly Removes Bugs, Dirt, and Grime",
      "Repels Water for Improved Visibility",
      "Safe for All Glass and Tint Films"
    ],
    direction: [
      "Shake well before use.",
      "Spray directly onto the windshield or a clean cloth.",
      "Wipe the surface evenly with a microfiber cloth.",
      "Buff with a dry cloth for a streak-free finish.",
      "For best results, use regularly."
    ],
    ingredients: "Water, Surfactants, Isopropyl Alcohol, Fragrance, Preservatives",
    safetyInfo: [
      "Keep out of reach of children.",
      "Avoid contact with eyes and skin.",
      "In case of contact, rinse immediately with plenty of water and seek medical advice.",
      "Do not ingest. If swallowed, seek medical attention immediately."
    ],
    storage: "Store in a cool, dry place away from direct sunlight.",
    environmentalInfo: "Bottle and cap are recyclable. Please dispose of responsibly.",
    manufacturer: {
      name: "FILL HERE.",
      address: "FILL HERE",
      phone: "FILL HERE",
      website: "https://abccleaners.com"
    }
  },
  {// Car Wiper Fluid
    itemId: "Car wiper fluid",
    title: "Car Wiper Fluid",
    image: "/carwiper.jpeg",
    price: "fill here",
    netContent: "Not specified (assuming similar to others)",
    description: "For a Clear, Streak-Free Windshield",
    features: [
      "Superior Cleaning Power",
      "Streak-Free Formula",
      "Effectively Removes Dirt, Bugs, and Grime",
      "Prevents Freezing and Smearing",
      "Safe for All Vehicle Finishes"
    ],
    direction: [
      "Pour AquaBlade directly into the wiper fluid reservoir.",
      "Use wiper controls to apply fluid to the windshield.",
      "Activate wipers to clean the windshield.",
      "For best results, use regularly and refill as needed."
    ],
    ingredients: "Water, Ethanol, Surfactants, Cleaning Agents, Dye",
    safetyInfo: [
      "Keep out of reach of children.",
      "Avoid contact with eyes and skin.",
      "In case of contact, rinse immediately with plenty of water and seek medical advice.",
      "Do not ingest. If swallowed, seek medical attention immediately."
    ],
    storage: "Store in a cool, dry place away from direct sunlight and heat sources.",
    environmentalInfo: "Bottle and cap are recyclable. Please dispose of responsibly.",
    manufacturer: {
      name: "FILL HERE.",
      address: "FILL HERE",
      phone: "FILL HERE",
      website: "https://abccleaners.com"
    }
  },
  {// Hand Sanitizer
    itemId: "Hand sanitizer",
    title: "Hand Sanitizer",
    image: "/handsanitizer.png",
    price: "fill here",
    netContent: "Not specified (assuming similar to others)",
    description: "Kills 99.9% of Germs and Bacteria",
    features: [
      "Quick-Drying, Non-Sticky Formula",
      "Moisturizes with Aloe Vera and Vitamin E",
      "Effective Against a Broad Spectrum of Microorganisms",
      "No Water Required"
    ],
    direction: [
      "Apply a small amount of sanitizer to the palm of one hand.",
      "Rub hands together, covering all surfaces, until dry.",
      "Use as needed."
    ],
    ingredients: "Active Ingredient: Ethyl Alcohol 70% (Antiseptic) Inactive Ingredients: Water, Glycerin, Aloe Vera, Vitamin E, Fragrance",
    safetyInfo: [
      "For external use only.",
      "Keep out of reach of children.",
      "Avoid contact with eyes. In case of contact, rinse immediately with plenty of water.",
      "Flammable. Keep away from heat and open flame.",
      "If swallowed, seek medical attention immediately."
    ],
    storage: "Store at room temperature. Do not freeze or expose to excessive heat.",
    environmentalInfo: "Bottle and cap are recyclable. Please dispose of responsibly.",
    manufacturer: {
      name: "FILL HERE.",
      address: "FILL HERE",
      phone: "FILL HERE",
      website: "https://abccleaners.com"
    }
  },
  {// Travel Backpack
    itemId: "Travel Backpack",
    title: "Travel Backpack",
    image: "/schoolbagpack.jpeg",
    price: "Price",
    netContent: "Not specified (assuming similar to others)",
    description: "Description",
    features: [
      "Feature1- example laptop compartment",
      "Feature2- fabric",
      "Feature3- warranty etc",
      "Feature4"
    ],
    direction: [
      "Direction1",
      "Direction2.",
      "Direction3"
    ],
    ingredients: "outer fabric, inner fabric , etc",
    safetyInfo: [
      "Info1- like maximum load",

    ],
    storage: "Instead of storage like washing instructions etc",
    environmentalInfo: "If needed",
    manufacturer: {
      name: "FILL HERE.",
      address: "FILL HERE",
      phone: "FILL HERE",
      website: "https://abccleaners.com"
    }
  },
  {// SChool backpack
    itemId: "School Backpack",
    title: "Travel Backpack",
    image: "/schoolbagpack.jpeg",
    price: "Price",
    netContent: "Not specified (assuming similar to others)",
    description: "Description",
    features: [
      "Feature1- example laptop compartment",
      "Feature2- fabric",
      "Feature3- warranty etc",
      "Feature4"
    ],
    direction: [
      "Direction1",
      "Direction2.",
      "Direction3"
    ],
    ingredients: "outer fabric, inner fabric , etc",
    safetyInfo: [
      "Info1- like maximum load",

    ],
    storage: "Instead of storage like washing instructions etc",
    environmentalInfo: "If needed",
    manufacturer: {
      name: "FILL HERE.",
      address: "FILL HERE",
      phone: "FILL HERE",
      website: "https://abccleaners.com"
    }
  }
  
]
export default productData