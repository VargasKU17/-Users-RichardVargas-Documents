  //just some of the facts
  const Facts = [
    {section: 'weapons', category: 'M4', question: 'What are the different types of M4?', answer: 'M4, M4A1, M4MWS(Modular Wepons System)'}, 
    {section: 'weapons', category: 'M4', question: 'What is the overall Length (closed and opened) of an M4?', answer: '29.75" buttstock closed and 33" buttstock open'}, 
    {section: 'weapons', category: 'M4', question: 'What is the weight of an M4 without magazine and sling?', answer: '6.49 lbs'}, 
    {section: 'weapons', category: 'M4', question: 'What is the weight of an M4 with sling and a loaded 20 round magazine?', answer: '7.19 lbs'},
    {section: 'weapons', category: 'M4', question: `What is the M4?`, answer: `The M4 is a 5.56x45mm NATO fired, air-cooled, direct impingement gas-operated, magazine fed carbine that has a 14.5 inch (370mm) barrel and telescopic stock. It is a hand-held and shoulder fired weapon.`}, 
    {section: 'weapons', category: 'M4', question: 'Name the 7 types of ammunitino for the M4', answer: 'M193 (Ball), M196 (Trace), M199 (Dummy), M200 (Blank-violet tip), M855 (Ball-green tip), M856 (Tracer-red tip), M862 (CCMK-plastic with blue'}, 
    {section: 'weapons', category: 'M4', question: 'The M193 is one of the 7 types of M4 ammunition. What kind is it?', answer: 'Ball'},
    {section: 'weapons', category: 'M4', question: 'The M196 is one of the 7 types of M4 ammunition. What kind is it?', answer: 'Trace'},
    {section: 'weapons', category: 'M4', question: 'The M199 is one of the 7 types of M4 ammunition. What kind is it?', answer: 'Dummy'},
    {section: 'weapons', category: 'M4', question: 'The M200 is one of the 7 types of M4 ammunition. What kind is it?', answer: 'Blank (Violet Tip)'},
    {section: 'weapons', category: 'M4', question: 'The M855 is one of the 7 types of M4 ammunition. What kind is it?', answer: 'Ball (Green Tip)'},
    {section: 'weapons', category: 'M4', question: 'The M856 is one of the 7 types of M4 ammunition. What kind is it?', answer: 'Tracer (Red Tip)'},
    {section: 'weapons', category: 'M4', question: 'The M862 is one of the 7 types of M4 ammunition. What kind is it?', answer: 'CCMK (Plastic with blue tip)'},
    {section: 'weapons', category: 'M4', question: 'What are the rates of fire for the M4?', answer: 'Sustained, semiautomatic, 3-round burst and automatic'},
    {section: 'weapons', category: 'M4', question: `How fast is the M4's sustained fire? `, answer: '12-15 RPM'}, 
    {section: 'weapons', category: 'M4', question: `How fast is the M4's semiautomatic fire? `, answer: '45 RPM'}, 
    {section: 'weapons', category: 'M4', question: `How fast is the M4's 3-round burst rate of fire? `, answer: '90 RPM'}, 
    {section: 'weapons', category: 'M4', question: `How fast is the M4's automatic fire? `, answer: '150-200 RPM'}, 
    {section: 'weapons', category: 'M4', question: `What is the range of the Elevation Aim Adjustment Knob of the M4?`, answer: '300-600 meters'}, 
    {section: 'weapons', category: 'M4', question: `What is the M4's muzzle velocity?`, answer: '2,970 FPS'}, 
    {section: 'weapons', category: 'M4', question: `How many rounds are in the M4's basic loadout?`, answer: `210 rounds`}, 
    {section: 'weapons', category: 'M4', question: `What's the M4's barrel rifling? `, answer: `1/7 inch right hand twist`}, 
    {section: 'weapons', category: 'M4', question: `What's the max range of the M4`, answer: `3,600 meters`}, 
    {section: 'weapons', category: 'M4', question: `What's the point target range of the M4?`, answer: `500 meters`}, 
    {section: 'weapons', category: 'M4', question: `What's the Area range of the M4?`, answer: `600 meters`}, 
    {section: 'weapons', category: 'M4', question: `List the positions of the M4 buttstock`, answer: `Closed, 1/2 open, 3/4 open and Fully Open`},
    {section: 'weapons', category: 'M4', question: `How do you perform immediate action with the M4?`, answer: `SPORTS: Slap, Pull, Observe, Release, Tap, Squeeze (Shoot)`},  
    {section: 'weapons', category: 'M4', question: 'What is the weight of an M4 with sling and a loaded 30 round magazine?', answer: '7.50 lbs' }, 
    {section: 'weapons', category: 'M249', question: `What is the M249 SAW (Squad Automatic Weapon)?`, answer: `The M249 SAW is a 5.56X45mm NATO fired, air-cooled, gas-operated, disintegrating belt or magazine, automatic weapon that fires from the open bolt position.` },
    {section: 'weapons', category: 'M249', question: 'How much does an M249 weigh?', answer: '17 lbs' },
    {section: 'weapons', category: 'M249', question: 'What is the basic loadout of an M249?', answer: '1000 rounds (200 round drums)' },
    {section: 'weapons', category: 'M249', question: 'How much does each M249 drum weigh?', answer: '6.92 lbs' },
    {section: 'weapons', category: 'M249', question: `How long is the M249?`, answer: `40.75 inches` },
    {section: 'weapons', category: 'M249', question: `What's the M249's tracer burnout?`, answer: `900 meters` },
    {section: 'weapons', category: 'M249', question: `What's the muzzle velocity of the M249`, answer: `2,970 FPS` },
    {section: 'weapons', category: 'M249', question: `What are the rates of fire for the M249?`, answer: `Sustained, Rapid and Cyclic`},
    {section: 'weapons', category: 'M249', question: `What is the M249's sustained rate of fire?`, answer: `100 RPM, 6-9 round burst and 4-5 second between bursts. (Barrel change every 10 min)` },
    {section: 'weapons', category: 'M249', question: `What is the M249's rapid rate of fire?`, answer: `200 RPM, 10-13 round burst and 2-3 second between bursts. (Barrel change every two min)` },
    {section: 'weapons', category: 'M249', question: `What is the M249's cyclic rate of fire?`, answer: `650-850 RPM, continuous burst. (Barrel change every minute)` },
    {section: 'weapons', category: 'M249', question: `What is the max range of the M249?`, answer: `3,600 meters` },
    {section: 'weapons', category: 'M249', question: `What is the max effective range of the M249?`, answer: `1,000 meters` },
    {section: 'weapons', category: 'M249', question: `What is the area target (tripod) range of the M249?`, answer: `1,000 meters` },
    {section: 'weapons', category: 'M249', question: `What is the point target (tripod) range of the M249?`, answer: `800 meters` },
    {section: 'weapons', category: 'M249', question: `What is the area target (bipod) range of the M249?`, answer: `800 meters` },
    {section: 'weapons', category: 'M249', question: `What is the point target (bipod) range of the M249?`, answer: `600 meters` },
    {section: 'weapons', category: 'M249', question: `Describe immediate action for the M249.`, answer: `POPS: Pull, Observe, Push, Squeeze (Shoot)` },
    {section: 'weapons', category: 'M249', question: `When is the only time magazines are used on the M249?`, answer: `Magazines are only used in emergencies because this increases the chance of stoppages and Accuracy is degraded.`},
    {section: 'weapons', category: 'M249', question: `What kind of sights does the M249 have?`, answer: `Front (semi-fixed hooded post type), rear (fully adjustable peep type for elevation and windage) and auxilary sights (installed on the feed tray cover optics rail for the M145 and ACOG)` },
    {section: 'weapons', category: 'M240B', question: `What is the M240B?`, answer: `The M240B is a 7.62X51mm NATO  fired, air-cooled, gas-operated, disintegrating belt fed, fully automatic machine gun that fires from the open bolt position.` },
    {section: 'weapons', category: 'M240B', question: `How much does the M240B weigh?`, answer: `27.6 lbs` },
    {section: 'weapons', category: 'M240B', question: `How long is the M240B?`, answer: `49.7 inches` },
    {section: 'weapons', category: 'M240B', question: `What is the M240B's muzzle velocity?`, answer: `2,800 FPS` },
    {section: 'weapons', category: 'M240B', question: `What are the types of M240B ammunition?`, answer: `M80 (Ball-light materials, personnel), M62 (Tracer-red orange tip)(Observation), M61/M993 (Armor Piercing-black tip)(Lightly armored vehicles), M82 (Improved blank-Training)` },
    {section: 'weapons', category: 'M240B', question: `The M80 is one of four types of M240B ammunition. What kind is it?`, answer: `Ball (light materials, personnel)` },
    {section: 'weapons', category: 'M240B', question: `The M62 is one of four types of M240B ammunition. What kind is it?`, answer: `Tracer (red orange tip) (oberservation)` },
    {section: 'weapons', category: 'M240B', question: `The M61/M993 is one of four types of M240B ammunition. What kind is it?`, answer: `Armor Piercing (black tip) (lightly armored vehicles)` },
    {section: 'weapons', category: 'M240B', question: `The M82 is one of four types of M240B ammunition. What kind is it?`, answer: `Improved blank (training)` },
    {section: 'weapons', category: 'M240B', question: `What is the max range of the M240B?`, answer: `3,725 meters` },
    {section: 'weapons', category: 'M240B', question: `What is the max effective range of the M240B?`, answer: `1,100 meters` },
    {section: 'weapons', category: 'M240B', question: `What is the area target (tripod) range of the M240B?`, answer: `1,100 meters` },
    {section: 'weapons', category: 'M240B', question: `What is the point target (tripod) range of the M240B?`, answer: `800 meters` },
    {section: 'weapons', category: 'M240B', question: `What is the area target (bipod) range of the M240B?`, answer: `800 meters` },
    {section: 'weapons', category: 'M240B', question: `What is the point target (bipod) range of the M240B?`, answer: `600 meters` },
    {section: 'weapons', category: 'M240B', question: `What are the rates of fire for the M249?`, answer: `Sustained, Rapid and Cyclic`},
    {section: 'weapons', category: 'M240B', question: `What is the M240B's sustained rate of fire?`, answer: `100 RPM, 6-9 round burst and 4-5 second between bursts. (Barrel change every 10 min)` },
    {section: 'weapons', category: 'M240B', question: `What is the M240B's rapid rate of fire?`, answer: `200 RPM, 10-13 round burst and 2-3 second between bursts. (Barrel change every two min)` },
    {section: 'weapons', category: 'M240B', question: `What is the M240B's cyclic rate of fire?`, answer: `650-950 RPM, continuous burst. (Barrel change every minute)` },
    {section: 'weapons', category: 'M240B', question: `What's the basic loadout for the M240B?`, answer: `1,200 rounds (split up betweenthe Gunner (100), Assisting Gunner (400), Ammo Bearer (700))` },
    {section: 'weapons', category: 'M240B', question: `How many rounds does the Gunner for the M240B carry?`, answer: `100 rounds` },
    {section: 'weapons', category: 'M240B', question: `How many rounds does the Assisting Gunner for the M240B carry?`, answer: `400 rounds` },
    {section: 'weapons', category: 'M240B', question: `How many rounds does the Ammo Bearer for the M240B carry?`, answer: `700 rounds` },
    {section: 'weapons', category: 'M240B', question: `How much does a 100 round belt of 7.62X51mm weight?`, answer: `5 lbs` },
    {section: 'weapons', category: 'M2', question: `What is the Browning M2 .50 Caliber?`, answer: `The Browning M2 .50 Caliber is a belt-fed, recoil operated, air-cooled, crew-served machine gun that can fire single-shot and automatic, and fired from the closed bolt position is capable of right and left-hand feed.` },
    {section: 'weapons', category: 'M2', question: `How much does the Browning M2 .50 Caliber weigh with the barrel?`, answer: `82 lbs` },
    {section: 'weapons', category: 'M2', question: `How long is the Browning M2 .50 Caliber with the barrel?`, answer: `67.75 inches` },
    {section: 'weapons', category: 'M2', question: `How much does the Browning M2 .50 Caliber barrel weigh?`, answer: `25.6 lbs` },
    {section: 'weapons', category: 'M2', question: `How long is the Browning M2 .50 Caliber barrel?`, answer: `47 inches` },
    {section: 'weapons', category: 'M2', question: `What is the barrel rifing of the Browning M2 .50 Caliber?`, answer: `Right-hand twist 1/15 inches` },
    {section: 'weapons', category: 'M2', question: `What is the muzzle velocity of the Browning M2 .50 Caliber?`, answer: `3050 FPS` },
    {section: 'weapons', category: 'M2', question: `The Browning M2 .50 Caliber's loadout is how many rounds?`, answer: `1,000 rounds` },
    {section: 'weapons', category: 'M2', question: `How far is the max range of the Browning M2 .50 Caliber?`, answer: `6,764 meters` },
    {section: 'weapons', category: 'M2', question: `How far is the max effective point range of the Browning M2 .50 Caliber?`, answer: `1,500 meters` },
    {section: 'weapons', category: 'M2', question: `How far is the max area range of the Browning M2 .50 Caliber?`, answer: `1,830 meters` },
    {section: 'weapons', category: 'M2', question: `What are the M2 .50 Caliber's methods and rate of fire?`, answer: `Single shot, slow (less than 40 RPM), rapid (more than 40 RPM) and cyclic (450-550 RPM)` },
    {section: 'weapons', category: 'M2', question: `How fast is the Browning M2 .50 Caliber's slow rate of fire?`, answer: `Less than 40 RPM` },    
    {section: 'weapons', category: 'M2', question: `How fast is the Browning M2 .50 Caliber's rapid rate of fire?`, answer: `More than 40 RPM` }, 
    {section: 'weapons', category: 'M2', question: `How fast is the Browning M2 .50 Caliber's cycic rate of fire?`, answer: `450-550 RPM` }, 
    {section: 'weapons', category: 'M2', question: `What are the Browning M2 .50 Caliber's sights?`, answer: `A front sight-a semi-fixed blade type with cover and a rear sight- a leaf type sight graduated in both yards and mils` }, 
    {section: 'weapons', category: 'M2', question: `What are the types of ammunition for the Browning M2 .50 Caliber?`, answer: `M430 HEDP and M383 HE` },
    {section: 'weapons', category: 'M2', question: `What is the Browning M2 .50 Caliber's M430 HEDP usded for?`, answer: `Lightly-armored targets, light material targets and personnel` }, 
    {section: 'weapons', category: 'M2', question: `What is the Browning M2 .50 Caliber's M383 HE used for?`, answer: `Unarmored vehicles, light material targets and personnel` },
    {section: 'weapons', category: 'M2', question: `What's the M2 .50 Caliber's assignment?`, answer: `Defend against low-flying aircraft (ony engage when approx. 800m), support the infantryman in both attack and defense, destroy lightly armored vehicles, provide protection for motor movements and reconnaisance by fire on suspected enemy positions` },
    {section: 'weapons', category: 'MK19', question: `What is the MK 19 grenade Launcher?`, answer: `The MK 19 is a 40X53mm grenade belt-fed, blowback operated, air-cooled, crew served, fully automatic weapon that is designed to not cook off.` },
    {section: 'weapons', category: 'MK19', question: `How much does the MK 19 weigh?`, answer: `77.6 lbs` },
    {section: 'weapons', category: 'MK19', question: `How long is the MK 19?`, answer: `43.1 inches` },
    {section: 'weapons', category: 'MK19', question: `What is the MK 19's width?`, answer: `14 inches` },
    {section: 'weapons', category: 'MK19', question: `What is the MK 19's height?`, answer: `8.8 inches` },
    {section: 'weapons', category: 'MK19', question: `What is the weight of the MK64 mount?`, answer: `21 lbs` },
    {section: 'weapons', category: 'MK19', question: `What is the height of the MK64 mount?`, answer: `9.5 inches` },
    {section: 'weapons', category: 'MK19', question: `What is the length of the MK64 mount?`, answer: `17.5 inches` },
    {section: 'weapons', category: 'MK19', question: `What's the length of the MK 19's barrel?`, answer: `16.25 inches` },
    {section: 'weapons', category: 'MK19', question: `What's the MK 19's sustained rate of fire?`, answer: `40 RPM` },
    {section: 'weapons', category: 'MK19', question: `What's the MK 19's rapid rate of fire?`, answer: `60 RPM` },
    {section: 'weapons', category: 'MK19', question: `What's the MK 19's cylic rate of fire?`, answer: `325-375 RPM` },
    {section: 'weapons', category: 'MK19', question: `What's the muzzle velocity of the MK 19?`, answer: `798 FPS` },
    {section: 'weapons', category: 'MK19', question: `The MK 19's max range is how far?`, answer: `2,212 meters` },
    {section: 'weapons', category: 'MK19', question: `The MK 19's point target range is how far?`, answer: `1,500 meters` },
    {section: 'weapons', category: 'MK19', question: `The MK 19's area target range is how far?`, answer: `2,212 meters`},
    {section: 'weapons', category: 'MK19', question: `List the two common malfunctions of the MK 19`, answer: `Runaway Gun and Sluggish Action` },
    {section: 'weapons', category: 'MK19', question: `List the 6 cycles of operation for the MK 19`, answer: `1. Charging, 2. Extracting (delinking), 3. Cocking, 4. Firing, 5. Blowback, 6. Automatic Feeding` },
    {section: 'weapons', category: 'MK19', question: `Can you use CLP on the MK 19?`, answer: `No` },
    {section: 'weapons', category: 'MK19', question: `List authorized lubricants for the MK 19`, answer: `L.A.W., L.S.A., L.S.A.T., R.B.C. and G.M.D` },
    {section: 'weapons', category: 'MK19', question: `What are the MK 19's types of ammunition?`, answer: `M430, M383, M918 and M922` },
    {section: 'weapons', category: 'MK19', question: `The MK 19's M430 round is used for what?`, answer: `HEDP (High-Explosive, Dual-Purpose)` },
    {section: 'weapons', category: 'MK19', question: `The MK 19's M383 round is used for what?`, answer: `HE` },
    {section: 'weapons', category: 'MK19', question: `The MK 19's M918 round is used for what?`, answer: `Training Practice` },
    {section: 'weapons', category: 'MK19', question: `The MK 19's M922 round is used for what?`, answer: `Dummy` },
    {section: 'weapons', category: 'MK19', question: `The MK 19's basic load is how many rounds?`, answer: `240 rounds with 48 rounds per can` },
    {section: 'weapons', category: 'M320', question: `What is the M320?`, answer: `The Heckler & Koch M320 is a 40X53mm Grenade launcher that is breach loaded and can either be attached to a Modular Rail System on an M4 or be fired by itself wit hbuttstock attached.` },
    {section: 'weapons', category: 'M320', question: `How much does the M320 weight?`, answer: `3.1 lbs` },
    {section: 'weapons', category: 'M320', question: `How long is the M320 weight?`, answer: `15.5 inches` },
    {section: 'weapons', category: 'M320', question: `What is the muzzle velocity of the M320?`, answer: `250 FPS` },
    {section: 'weapons', category: 'M320', question: `How many rounds is the basic load of the M320?`, answer: `36 HE rounds` },
    {section: 'weapons', category: 'M320', question: `What is the M320's rate of fire?`, answer: `5-7 RPM` },
    {section: 'weapons', category: 'M320', question: `How far is the M320's max range?`, answer: `400 meters` },
    {section: 'weapons', category: 'M320', question: `How far is the M320's area target range?`, answer: `350 meters` },
    {section: 'weapons', category: 'M320', question: `How far is the M320's point target range?`, answer: `150 meters` },
    {section: 'weapons', category: 'M320', question: `How far is the M320's arming distance?`, answer: `14 meters` },
    {section: 'weapons', category: 'M320', question: `How far is the M320's minimum safe distance?`, answer: `31 meters` },
    {section: 'weapons', category: 'M136AT4', question: `What is the AT4?`, answer: `The AT4 is an 84mm HEAT unguided, portable, disposable single-shot, recoilless smoothbore weapon that is shoulder fired.` },
    {section: 'weapons', category: 'M136AT4', question: `How much does the AT4 weigh?`, answer: `4 lbs` },
    {section: 'weapons', category: 'M136AT4', question: `What is the AT4's length?`, answer: `40 inches` },
    {section: 'weapons', category: 'M136AT4', question: `What is the muzzle velocity of the AT4?`, answer: `950 FPS` },
    {section: 'weapons', category: 'M136AT4', question: `How far is the max range of the AT4?`, answer: `2,100 meters` },
    {section: 'weapons', category: 'M136AT4', question: `How far is the max effective range of the AT4?`, answer: `300 meters` },
    {section: 'weapons', category: 'M136AT4', question: `What is the AT4's penetration?`, answer: `400mm` },
    {section: 'weapons', category: 'M136AT4', question: `At 90 degrees how far is the AT4's back blast area?`, answer: `65 meters` },
    {section: 'weapons', category: 'M136AT4', question: `What is the safe arming distance of the AT4?`, answer: `10 meters` },
    {section: 'weapons', category: 'grenades', question: `What is the M67`, answer: `Frag grenade` },
    {section: 'weapons', category: 'grenades', question: `What is kill radius of the M67`, answer: `5 meters` },
    {section: 'weapons', category: 'grenades', question: `What is casualty radius of the M67`, answer: `15 meters` },
    {section: 'weapons', category: 'grenades', question: `How long is the M67's fuse?`, answer: `4-5 seconds` },
    {section: 'weapons', category: 'grenades', question: `How far is the average thrown distance of the M67`, answer: `35 meters` },
    {section: 'weapons', category: 'grenades', question: `What is the M18 used for?`, answer: `Used to signal color of smoke on top of grenade` },
    {section: 'weapons', category: 'grenades', question: `How long does the M18 burn?`, answer: `50-90 seconds` },
    {section: 'weapons', category: 'grenades', question: `What does the AN-M8HC do?`, answer: `Emits dense cloud of white smoke. Used for concealment.` },
    {section: 'weapons', category: 'grenades', question: `How long does the AN-M8HC burn?`, answer: `105-150 seconds` },    
    {section: 'weapons', category: 'grenades', question: `What is the AN-M14 TH3 used for?`, answer: `Used to destroy equipment and start fires. Can burn through 1/2 in steel plate and can burn underwater` },
    {section: 'weapons', category: 'grenades', question: `How long does the AN-M14 TH3 burn?`, answer: `40 seconds` },
    {section: 'weapons', category: 'grenades', question: `What is the ABC M7A2/M7A3 used for?`, answer: `Used to produce a cloud irritant agent for 15-30 seconds` },
    {section: 'weapons', category: 'grenades', question: `List the six types of grenades`, answer: `Fragmentation, Illuminating, Chemical, Offensive, Practical & Training, Non-Lethal` },
    {section: 'medical', category: 'medical', question: `What does HABC stand for?`, answer: `Hemorrhaging, Airway, Breathing, Ciculation` },
    {section: 'medical', category: 'medical', question: `How do you identify and use a Gen 6 tourniquet?`, answer: `Label will be white and will have two friction adapters. Use high and tight and place over clothing.` },
    {section: 'medical', category: 'medical', question: `How do you identify and use a Gen 7 tourniquet?`, answer: `Label will be grey, with a thicker band and will have one friction adapter. Use high and tight and place over clothing.` },
    {section: 'medical', category: 'medical', question: `What should you do in a case of hemorrhaging?`, answer: `For junctional wounds: apply approx. pressure to arteries, apply combat gauze, should come out of a wound at least two in., apply pressure for three minutes` },
    {section: 'medical', category: 'medical', question: `How do you check for a clear airway?`, answer: `Head-lift/chin-tilt, listen for signs of breathing, if not breathing apply NPA to right nostril, use blood/spit of the casualty for lube, real lube can also be used if provided` },
    {section: 'medical', category: 'medical', question: `What do you do in the event of a chest wound?`, answer: `If casualty has collapsed lung or unilateral breathing apply an NCD to affected side of chest, primary site is located between the second andn third rib, alternate site is located on flank between the fourth and fifth, if casualty has wounds to the chest apply a chest seal over wound insuring that the casualty exhales first, then tape down all four sides.` },
    {section: 'medical', category: 'medical', question: `How do you check for propper circulation?`, answer: `Only thing to do is check the casualties vitals located on the radius (thumb side) right at the wrist. If casualty does not have a pulse there, check the carotid artery in neck.` },
    {section: 'medical', category: 'medical', question: `What should be in an IFAK?`, answer: `Tourniquet, combat gauze, NPA, casualty feeder card, tape, five shield, rubber gloves, trauma wound dressing.` },
    {section: 'medical', category: 'medical', question: `How do you evaluate a casualty?`, answer: `Check for responsiveness, Check for breathing, Check for bleeding, Check for burns, Check for head injuries, Check for shock, Check for fractures`},
    {section: 'formations', category: 'formations', question: `Which formation is the main squad formation?`, answer: `Squad column fireteam wedge` },
    {section: 'formations', category: 'formations', question: `Which formation is used for maximum firepower to the front?`, answer: `Squad line` },
    {section: 'formations', category: 'formations', question: `Which formation is used for close terrain, dense vegetations and limited visibility conditions?`, answer: `Squad file` },
    {section: 'formations', category: 'formations', question: `Which formation offers the easiest control of a squad?`, answer: `Squad file` },
    {section: 'formations', category: 'formations', question: `Which formation offers the best maneuverability`, answer: `Squad column fireteam wedge` },
    {section: 'formations', category: 'formations', question: `Which formation is the least maneuverable?`, answer: `Squad line` },
    {section: 'formations', category: 'formations', question: `Which formation allows immediate fires to the flanks, but mask most fires to the rear?`, answer: `Squad file` },
    {section: 'formations', category: 'formations', question: `Which formation is used to have fires in all directions?`, answer: `Squad column fireteam wedge` },
    {section: 'terminology', category: 'landnav', question: `Blue on a map signifies what?`, answer: `water` },
    {section: 'terminology', category: 'landnav', question: `Red on a map signifies what?`, answer: `roads` },
    {section: 'terminology', category: 'landnav', question: `Black on a map signifies what?`, answer: `man made objects` },
    {section: 'terminology', category: 'landnav', question: `Green on a map signifies what?`, answer: `vegetation` },
    {section: 'terminology', category: 'landnav', question: `Brown on a map signifies what?`, answer: `contour lines` },
    {section: 'terminology', category: 'landnav', question: `List all the major terrain features on a map`, answer: `Ridge, hilltop, valley, depression, saddle` },
    {section: 'terminology', category: 'landnav', question: `List all the minor terrain features on a map`, answer: `Draw, cliff and spur` },
    {section: 'terminology', category: 'landnav', question: `What are the three norths?`, answer: `Grid, magnetic and true` },
    {section: 'terminology', category: 'landnav', question: `10 digits is how many meters from point?`, answer: `1 meter` },
    {section: 'terminology', category: 'landnav', question: `8 digits is how many meters from point?`, answer: `10 meters` },
    {section: 'terminology', category: 'landnav', question: `6 digits is how many meters from point?`, answer: `100 meters` },
    {section: 'terminology', category: 'landnav', question: `4 digits is how many meters from point?`, answer: `1,000 meters`}, 
    {section: 'terminology', category: 'tactical', question: `List the 8 Troop Leading Procedures`, answer: `Receive the Mission, Issue the Warning Order, Make a Tentative Plan, Start Necessary Movement, Recon, Complete the Plan, Issue the Complete Op Order, Supervise`},
    {section: 'terminology', category: 'tactical', question: `What does SURVIVAL stand for?`, answer: `Size up the situation, Undo haste makes waste, Remember where you are, Vanquish panic and fear, Improvise the situation, Value living, Act like the natives, Live by your wits`},
    {section: 'terminology', category: 'tactical', question: `What does ANPRC stand for?`, answer: `Army Navy Portable Radio Communicator`},  
    {section: 'terminology', category: 'tactical', question: `What does SINCGAR stand for?`, answer: `SINgel Channel Ground Air Radio`}, 
    {section: 'terminology', category: 'tactical', question: `What does ASIP stand for?`, answer: `Advanced Sincar Improvement Program`},
    {section: 'terminology', category: 'tactical', question: `What does MBITR stand for?`, answer: `Multi Band Inter Team Radio`},   
    {section: 'terminology', category: 'tactical', question: `What does ANCD stand for?`, answer: `Automated Net Control Device`},
    {section: 'terminology', category: 'tactical', question: `What does NCS stand for?`, answer: `Net Control System`},     
    {section: 'terminology', category: 'tactical', question: `What does SOI stand for?`, answer: `Signal Operating Instructions`},    
    {section: 'terminology', category: 'tactical', question: `What does FITY stand for?`, answer: `Frequency Intensity Time Type`},
    {section: 'terminology', category: 'tactical', question: `What does PIR stand for?`, answer: `Primary Intel Requirement`},
    {section: 'terminology', category: 'tactical', question: `What does CCIR stand for?`, answer: `Commanders' Critical Intel Requirement`},
    {section: 'terminology', category: 'tactical', question: `What does PACE stand for?`, answer: `Primary Alternate Contingency Emergency`},
    {section: 'terminology', category: 'tactical', question: `What does ATEA stand for?`, answer: `Avenue Target Enemy Approach`},
    {section: 'terminology', category: 'tactical', question: `What does PCI stand for?`, answer: `Pre Combat Inspection`},
    {section: 'terminology', category: 'tactical', question: `What does PCC stand for?`, answer: `Pre Combat Check`}, 
    {section: 'terminology', category: 'tactical', question: `What does TTP stand for?`, answer: `Tactics Techniques Procedures`},
    {section: 'terminology', category: 'tactical', question: `What does TRP stand for?`, answer: `Target Reference Point`}, 
    {section: 'terminology', category: 'tactical', question: `What does BMNT stand for?`, answer: `Before Morning Nocturnal Twilight`},
    {section: 'terminology', category: 'tactical', question: `What does EENT stand for?`, answer: `End Evening Nocturnal Twilight`},
    {section: 'terminology', category: 'tactical', question: `What does HMMWV stand for?`, answer: `High Mobility Multi Wheeled Vehicle`},
    {section: 'terminology', category: 'tactical', question: `What does ORP stand for?`, answer: `Objective Rally Point`},
    {section: 'terminology', category: 'tactical', question: `List the Four elements of Combat Power`, answer: `Firepower, Maneuvering, Protection (physical/personal hygiene), Leadership (Command/Control)`},
    {section: 'terminology', category: 'tactical', question: `List the Three Movement Tactics`, answer: `Traveling, Traveling Overwatch and Bounding`}, 
    {section: 'terminology', category: 'tactical', question: `What does SALUTE stand for?`, answer: `Size, Activity, Location, Unit/Uniform, Time, Equipment`},
    {section: 'terminology', category: 'tactical', question: `What does METTT-C stand for?`, answer: `Mission, Enemy, Time, Terrain, Troops Available, Civilians on the Battlefield`},
    {section: 'terminology', category: 'tactical', question: `What does OACOK stand for?`, answer: `Observations/Fields of Fire, Avenues of Approuch, Cover and Concealment, Obstacles, Key Terrain`},
    {section: 'terminology', category: 'tactical', question: `List the five parts of an Operation Order`, answer: `Situation, Mission, Execution, Service and Support, Command and Signal`},
    {section: 'terminology', category: 'tactical', question: `What is included in a Warning Order?`, answer: `Situation, Mission, Special Instructions, General Instructions`},     
    {section: 'terminology', category: 'tactical', question: `List the Principles of Patrolling`, answer: `Planning, Recon, Security, Control, Common Sense`},
    {section: 'terminology', category: 'tactical', question: `What are the Five S's of EPW?`, answer: `Search, Silence, Segregate, Safeguard, Speed to the Rear`}, 
    {section: 'terminology', category: 'tactical', question: `What are the types of ambush?`, answer: `Hasty, Deliberte, Point and Area`},
    {section: 'terminology', category: 'tactical', question: `What are the principals of Ambush?`, answer: `Speed, Surprise and Violence of Action`},  
    {section: 'terminology', category: 'tactical', question: `List the types of recon`, answer: `Area Unkown, Zone-Establish and Route`},
    {section: 'terminology', category: 'tactical', question: `What are the types of patrols?`, answer: `Recon, combat and tracking`},
    {section: 'terminology', category: 'tactical', question: `What are the types of attack?`, answer: `Hasty, Deliberte, Ambush and Raid`},
    {section: 'terminology', category: 'tactical', question: `GOTWA or a Five Point Contingency Plan stands for what?`, answer: `Going, Others taking with you, Time you'll be back, What to do if not back and Actions taken on contact`},
    {section: 'terminology', category: 'tactical', question: `What do you wear at MOPP Level Zero?`, answer: `Promask carried`},
    {section: 'terminology', category: 'tactical', question: `What do you wear at MOPP Level One?`, answer: `Overgarments`},
    {section: 'terminology', category: 'tactical', question: `What do you wear at MOPP Level Two?`, answer: `Overgarments and boots`},
    {section: 'terminology', category: 'tactical', question: `What do you wear at MOPP Level Three?`, answer: `Overgarments, boots and mask`},
    {section: 'terminology', category: 'tactical', question: `What do you wear at MOPP Level Four?`, answer: `Overgarments, boots, mask and gloves`},
    {section: 'terminology', category: 'tactical', question: `Name the Battle Drills`, answer: `1) squad attack, 2) react to contact, 3) break contact, 4) react to ambush, 5) knock out bunkers, 6) clear a room, 7) clear a trench and 8) breach a mined wire obstacle.`},
    {section: 'terminology', category: 'general', question: `What are the Five Steps to a Battle Drill`, answer: `1) React, 2) Locate, 3) Suppress, 4) Attack, 5) Consolidate and Reorganize`},
    {section: 'terminology', category: 'general', question: `What are the Principles of Work?`, answer: `Security, Weapon Maintenance, Personal Hygiene, Food/Water and Rest Plan`}, 
    {section: 'terminology', category: 'general', question: `List the Army Values`, answer: `Loyalty, Duty, Respect, Selfless Service, Honor, Integrity, Personal Courage`},
    {section: 'terminology', category: 'general', question: `What are the Four Pillars of Living Standards?`, answer: `Clean, Safe, Functional and Secure`},
    {section: 'terminology', category: 'general', question: `What is the First General Order?`, answer: `I will guard everything in the limits of my post and quit my post only when properly relieved.`},
    {section: 'terminology', category: 'general', question: `What is the Second General Order?`, answer: `I will obey my special orders and perform all my duties in a military manner.`},
    {section: 'terminology', category: 'general', question: `What is the Third General Order`, answer: `I will report violations of my special orders, emergencies, and anything not covered in my instructions to the commander of the relief`},
          

    


]


export default Facts