const features = [
    {
        id: 0,
        name: "Pons",
        path: "/mesh/Pons.glb",
        description: "Relays sensory and motor information between the cerebrum and the cerebellum, and plays a role in controlling functions such as breathing and sleep.",
        keywords: "Pons"
    },
    {
        id: 1,
        name: "Corpus Callosum",
        path: "/mesh/Corpus Callosum.glb",
        description: "Facilitates communication and information transfer between the left and right cerebral hemispheres.",
        keywords: "Corpus Callosum"
    },
    {
        id: 2,
        name: "Cerebellum",
        path: "/mesh/Cerebellum.glb",
        description: "Coordinates voluntary movements, maintains balance, regulates posture, and facilitates motor learning.",
        keywords: "Cerebellum"
    },
    {
        id: 3,
        name: "Cerebrum",
        path: "/mesh/Cerebrum.glb",
        description: "Responsible for higher cognitive functions such as thinking, memory, perception, and voluntary motor movements.",
        keywords: "Cerebrum"
    },
    {
        id: 5,
        name: "Frontal Lobe",
        path: "/mesh/Frontal Lobe.glb",
        description: "Involved in decision-making, problem-solving, reasoning, and controlling voluntary movements.",
        keywords: "Frontal Lobe"
    },
    {
        id: 6,
        name: "Temporal Lobe",
        path: "/mesh/Temporal Lobe.glb",
        description: "Plays a key role in auditory processing, language comprehension, and memory.",
        keywords: "Temporal Lobe"
    },
    {
        id: 7,
        name: "Parietal Lobe",
        path: "/mesh/Parietal Lobe.glb",
        description: "Processes sensory information, including touch, temperature, and pain, as well as spatial awareness.",
        keywords: "Parietal Lobe"
    },
    {
        id: 8,
        name: "Occipital Lobe",
        path: "/mesh/Occipital Lobe.glb",
        description: "Primarily responsible for visual processing and interpreting visual stimuli.",
        keywords: "Occipital Lobe"
    },
    {
        id: 9,
        name: "Hippocampus",
        path: "/mesh/Hippocampus.glb",
        description: "Plays a crucial role in memory formation and spatial navigation.",
        keywords: "Hippocampus"
    },
    {
        id: 10,
        name: "Amygdala",
        path: "/mesh/Amygdala.glb",
        description: "Involved in the processing and regulation of emotions, particularly fear and aggression.",
        keywords: "Amygdala"
    },
    {
        id: 11,
        name: "Thalamus",
        path: "/mesh/Thalamus.glb",
        description: "Relays sensory and motor signals to the cerebral cortex, playing a role in perception, attention, and consciousness.",
        keywords: "Thalamus"
    },
    {
        id: 12,
        name: "Hypothalamus",
        path: "/mesh/Hypothalamus.glb",
        description: "Regulates various bodily functions, including temperature, hunger, thirst, sleep, and hormone production.",
        keywords: "Hypothalamus"
    },
    {
        id: 14,
        name: "Medulla Oblongata",
        path: "/mesh/Medulla Oblongata.glb",
        description: "Controls vital autonomic functions such as breathing, heart rate, blood pressure, and swallowing.",
        keywords: "Medulla Oblongata"
    },
    {
        id: 15,
        name: "Pituitary Gland",
        path: "/mesh/Pituitary Gland.glb",
        description: "Produces and releases hormones that regulate various bodily functions and control the activities of other endocrine glands.",
        keywords: "Pituitary Gland"
    },
    {
        id: 16,
        name: "Pineal Gland",
        path: "/mesh/Pineal Gland.glb",
        description: "Secretes melatonin, a hormone that regulates sleep-wake cycles and has various other biological effects.",
        keywords: "Pineal Gland"
    },
    {
        id: 17,
        name: "Prefrontal Cortex",
        path: "/mesh/Prefrontal Cortex.glb",
        description: "Involved in complex cognitive functions, such as decision-making, planning, personality expression, and social behavior.",
        keywords: "Prefrontal Cortex"
    },
    {
        id: 18,
        name: "Primary Motor Cortex",
        path: "/mesh/Primary Motor Cortex.glb",
        description: "Controls voluntary muscle movements and is involved in planning, executing, and coordinating motor actions.",
        keywords: "Primary Motor Cortex, Precentral Gyrus, Area 4"
    },
    {
        id: 19,
        name: "Primary Somatosensory Cortex",
        path: "/mesh/Primary Somatosensory Cortex.glb",
        description: "Processes sensory information related to touch, temperature, pain, and body position.",
        keywords: "Primary Somatosensory Cortex, Postcentral Gyrus, Area 1, Area 2, Area 3"
    },
    {
        id: 20,
        name: "Primary Visual Cortex",
        path: "/mesh/Primary Visual Cortex.glb",
        description: "Responsible for processing visual information received from the eyes and interpreting it as visual perception.",
        keywords: "Primary Visual Cortex, Area 17"
    },
    {
        id: 21,
        name: "Auditory Cortex",
        path: "/mesh/Auditory Cortex.glb",
        description: "Processes auditory information received from the ears, allowing for sound perception and interpretation.",
        keywords: "Auditory Cortex, Area 41, Area 42"
    },
    {
        id: 22,
        name: "Olfactory Bulb",
        path: "/mesh/Olfactory Bulb.glb",
        description: "Receives and processes olfactory signals, contributing to the sense of smell.",
        keywords: "Olfactory Bulb"
    },
    {
        id: 23,
        name: "Midbrain",
        path: "/mesh/Midbrain.glb",
        description: "Acts as a relay station for auditory and visual information and plays a role in motor control and eye movement.",
        keywords: "Midbrain"
    },
    {
        id: 24,
        name: "Superior Colliculus",
        path: "/mesh/Superior Colliculus.glb",
        description: "Involved in visual attention, eye movement, and the coordination of visual and auditory reflexes.",
        keywords: "Superior Colliculus"
    },
    {
        id: 25,
        name: "Inferior Colliculus",
        path: "/mesh/Inferior Colliculus.glb",
        description: "Processes and integrates auditory information, contributing to sound localization and reflexive responses to sound.",
        keywords: "Inferior Colliculus"
    },
    {
        id: 26,
        name: "Olfactory Cortex",
        path: "/mesh/Olfactory Cortex.glb",
        description: "Processes and interprets olfactory information received from the olfactory bulb, contributing to the sense of smell.",
        keywords: "Olfactory Cortex"
    },
    {
        id: 27,
        name: "Suprachiasmatic Nucleus",
        path: "/mesh/Suprachiasmatic Nucleus.glb",
        description: "Functions as the body's biological clock, regulating circadian rhythms and the sleep-wake cycle.",
        keywords: "Suprachiasmatic Nucleus"
    },
    {
        id: 28,
        name: "Fornix",
        path: "/mesh/Fornix.glb",
        description: "A fiber bundle that connects the hippocampus to other brain regions, playing a role in memory and emotional processing.",
        keywords: "Fornix"
    },
    {
        id: 31,
        name: "Caudate Nucleus",
        path: "/mesh/Caudate Nucleus.glb",
        description: "Part of the basal ganglia, the caudate nucleus plays a role in movement control, reward processing, and learning. It is involved in coordinating voluntary motor movements and forming habits.",
        keywords: "Caudate Nucleus"
    },
    {
        id: 32,
        name: "Stria Terminalis",
        path: "/mesh/Stria Terminalis.glb",
        description: "A bundle of fibers that connects the amygdala and hypothalamus, playing a role in the regulation of stress and emotions.",
        keywords: "Stria Terminalis"
    },
    {
        id: 33,
        name: "Choroid Plexus",
        path: "/mesh/Choroid Plexus.glb",
        description: "Produces cerebrospinal fluid (CSF) and helps regulate the chemical environment within the brain.",
        keywords: "Choroid Plexus"
    },
    {
        id: 34,
        name: "Stria Medullaris",
        path: "/mesh/Stria Medullaris.glb",
        description: "A pathway that connects the habenular nucleus and the septal area, playing a role in the regulation of emotions and reward processing.",
        keywords: "Stria Medullaris"
    },
    {
        id: 35,
        name: "Habenular Nucleus",
        path: "/mesh/Habenular Nucleus.glb",
        description: "Involved in the modulation of various behaviors and functions, including reward processing, stress response, and circadian rhythms.",
        keywords: "Habenular Nucleus"
    },
    {
        id: 36,
        name: "Subthalamic Nucleus",
        path: "/mesh/Subthalamic Nucleus.glb",
        description: "Part of the basal ganglia, the subthalamic nucleus plays a role in motor control and is involved in the regulation of movement, particularly the initiation and termination of voluntary movements.",
        keywords: "Subthalamic Nucleus, STN"
    },
    {
        id: 37,
        name: "Internal Globus Pallidus",
        path: "/mesh/Internal Globus Pallidus.glb",
        description: "Part of the basal ganglia, the internal globus pallidus is involved in motor control and plays a role in inhibiting unwanted movements.",
        keywords: "Medial Globus Pallidus, Internal Globus Pallidus, GPi"
    },
    {
        id: 38,
        name: "External Globus Pallidus",
        path: "/mesh/External Globus Pallidus.glb",
        description: "Part of the basal ganglia, the external globus pallidus is involved in motor control and plays a role in facilitating desired movements.",
        keywords: "Lateral Globus Pallidus, External Globus Pallidus, GPe"
    },
    {
        id: 39,
        name: "Putamen",
        path: "/mesh/Putamen.glb",
        description: "Part of the basal ganglia, the putamen is involved in motor control and plays a role in regulating movement coordination and learning.",
        keywords: "Putamen"
    },
    {
        id: 40,
        name: "Striatum",
        path: "/mesh/Striatum.glb",
        description: "A composite structure consisting of the caudate nucleus, putamen, and nucleus accumbens. The striatum is involved in motor control, reward processing, and action selection.",
        keywords: "Striatum"
    },
    {
        id: 41,
        name: "Substantia Nigra",
        path: "/mesh/Substantia Nigra.glb",
        description: "Part of the midbrain, the substantia nigra produces dopamine and plays a crucial role in movement control, reward processing, and motor coordination.",
        keywords: "Substantia Nigra"
    },
    {
        id: 42,
        name: "Nucleus Accumbens",
        path: "/mesh/Nucleus Accumbens.glb",
        description: "Part of the ventral striatum, the nucleus accumbens is involved in reward, motivation, and addiction. It plays a role in reinforcing pleasurable behaviors and mediating the effects of drugs and natural rewards.",
        keywords: "Nucleus Accumbens"
    },
    {
        id: 43,
        name: "Cingulate Gyrus",
        path: "/mesh/Cingulate Gyrus.glb",
        description: "Part of the cerebral cortex, the cingulate gyrus is involved in pain perception, learning, social cognition, emotional processing, and attentional control.",
        keywords: "Cingulate Gyrus, Area 31, Area 32, Area 33"
    },
    {
        id: 44,
        name: "Superior Colliculus Brachium",
        path: "/mesh/Superior Colliculus Brachium.glb",
        description: "A fiber pathway that connects the superior colliculus, a midbrain structure involved in visual processing and eye movement, to other brain regions, facilitating the transmission of visual information.",
        keywords: "Superior Colliculus Brachium, Brachia"
    },
    {
        id: 45,
        name: "Inferior Colliculus Brachium",
        path: "/mesh/Inferior Colliculus Brachium.glb",
        description: "A fiber pathway that connects the inferior colliculus, a midbrain structure involved in auditory processing and sound localization, to other brain regions, enabling the transmission of auditory information.",
        keywords: "Inferior Colliculus Brachium, Brachia"
    },
    {
        id: 46,
        name: "Secondary Visual Cortex",
        path: "/mesh/Secondary Visual Cortex.glb",
        description: "A region of the cerebral cortex located in the occipital lobe, adjacent to the primary visual cortex. It plays a role in higher-level visual processing, such as object recognition, visual integration, and perception of visual motion.",
        keywords: "Secondary Visual Cortex, Area 18"
    },
    {
        id: 47,
        name: "Associative Visual Cortex",
        path: "/mesh/Associative Visual Cortex.glb",
        description: "A network of interconnected regions in the cerebral cortex that are involved in complex visual processing tasks, including visual attention, visual memory, and the integration of visual information with other sensory modalities.",
        keywords: "Associative Visual Cortex, Area 19"
    },
    {
        id: 48,
        name: "Lateral Geniculate Nucleus",
        path: "/mesh/Lateral Geniculate Nucleus.glb",
        description: "A relay center in the thalamus for the visual pathway. It receives a major sensory input from the retina.",
        keywords: "Lateral Geniculate Nucleus, LGN"
    },
    {
        id: 49,
        name: "Medial Geniculate Nucleus",
        path: "/mesh/Medial Geniculate Nucleus.glb",
        description: "A part of the auditory thalamus and represents the thalamic relay between the inferior colliculus and the auditory cortex.",
        keywords: "Medial Geniculate Nucleus, MGN"
    },
    {
        id: 50,
        name: "Cerebral Peduncle",
        path: "/mesh/Cerebral Peduncle.glb",
        description: "Two stalks located in the midbrain that contain the large ascending (sensory) and descending (motor) nerve tracts that run to and from the cerebrum.",
        keywords: "Cerebral Peduncle"
    },
    {
        id: 51,
        name: "Optic Tract",
        path: "/mesh/Optic Tract.glb",
        description: "A part of the visual system in the brain. It is a continuation of the optic nerve that relays information from the optic chiasma to the lateral geniculate nucleus, pretectal nuclei, and superior colliculus.",
        keywords: "Optic Tract"
    },
    {
        id: 52,
        name: "Optic Chiasm",
        path: "/mesh/Optic Chiasm.glb",
        description: "The part of the brain where the optic nerves partially cross. It is located at the bottom of the brain immediately below the hypothalamus.",
        keywords: "Optic Chiasm"
    },
    {
        id: 53,
        name: "Mammillary Nucleus",
        path: "/mesh/Mammillary Nucleus.glb",
        description: "One of the main nuclei of the hypothalamus which is part of the limbic system and is involved in the consolidation of memory.",
        keywords: "Mammillary Nucleus"
    },
    {
        id: 54,
        name: "Basal Ganglia",
        members: [31, 38, 37, 39, 41, 36],
        description: "Regulate and modulate voluntary movements, facilitating the initiation, coordination, and execution of motor actions. It is involved in various cognitive processes, including decision-making, habit formation, and reward-based learning",
        keywords: "Basal Ganglia"
    }
];

export default features;