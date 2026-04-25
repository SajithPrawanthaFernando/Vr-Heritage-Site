export const DOMAIN_CONTENT = {
  "lit-survey":
    "Extensive academic research into digital cultural heritage highlights a persistent limitation in current interpretation methods: the reliance on static, single-era visualizations. While Virtual Reality has matured into a robust tool for architectural visualization, existing literature suggests that most heritage systems fail to provide spatial accuracy or temporal consistency across multiple historical periods simultaneously. Conventional resources including scripted guidebooks, static museum displays, and generalized digital platforms often deliver fragmented information that is disconnected from a visitor's immediate physical context or curiosity. Furthermore, current studies identify a critical 'value misalignment' in generic Large Language Models (LLMs); these systems frequently lack the specialized regional knowledge and cultural common sense required for meaningful historical discourse, often failing to generate accurate cultural reasoning specific to localized Sri Lankan heritage narratives.",

  "research-gap":
    "The primary research gap identified is the technical and conceptual disconnect between real-time spatial proximity and dynamic temporal relevance; most heritage systems handle these dimensions in isolation, relying on predefined narratives rather than offering adaptive, user-controlled experiences. There is a marked absence of sophisticated recommendation engines capable of dynamically adapting high-fidelity VR content based on exact GPS coordinates and individual user interests. Additionally, while Retrieval-Augmented Generation (RAG) is recognized for improving factual reliability, its application in generating structured, personalized post-visit session reports remains largely unexplored in the heritage domain. On the technical front, a significant barrier exists in deploying dual-era synchronized environments on standalone mobile VR hardware; standard pipelines struggle to maintain the required frame rates and multi-resolution asset streaming necessary to prevent cybersickness while ensuring deep user immersion on mid-range chipsets.",

  problem:
    "The Sri Lankan tourism and education sectors currently face a significant 'authenticity gap' and a 'destination image gap,' where the lived experience of cultural explorers does not align with the depth of understanding or emotional connection they expect. Traditional tourism methods are inherently passive, providing standardized, commodified content that ignores the contingent intelligence available via modern mobile sensors and GPS technology. Visitors and learners currently have no mechanism to 'time travel' through historical sites in a location-specific, interactive manner, leading to a superficial understanding of cultural evolution. This research addresses the lack of dynamic, context-aware educational tools by creating an intelligent platform that overcomes the constraints of static content delivery, enabling users to engage deeply with the 'historical soul' of a location through active exploration and interactive, emotionally intelligent storytelling.",

  objectives: [
    "Develop a geo-temporal personalization module using K-Means clustering to provide context-aware recommendations based on real-time GPS data.",
    "Build a hybrid AI conversational architecture combining RAG and LoRA fine-tuning (Mistral-7B) to ensure factually accurate and culturally sensitive dialogue.",
    "Engineer a dual-era virtual environment system in Unity that supports spatially synchronized transitions between modern and historical states.",
    "Establish an emotionally intelligent character framework that utilizes neural speech synthesis and generative gesture synthesis to eliminate the 'uncanny valley'.",
    "Implement an automated session reporting mechanism to console post-visit learning through personalized timelines and summaries.",
  ],

  methodology:
    "The platform is architected as a sophisticated real-time multi-modal system that separates environmental intelligence, knowledge retrieval, and embodied performance into specialized operational layers. The process begins with fetching Global Positioning System (GPS) coordinates via mobile device sensors, which are then mapped to nearby heritage sites using spatial distance calculations and the Haversine formula to ensure high-precision geolocation. Location-event recommendation is optimized through K-Means clustering, grouping 2,046 Sri Lankan historical events into geographically coherent groupings to reduce search space and improve recommendation relevance for the user. The immersive VR layer utilizes a 'Dual-Scene' pipeline in Unity, where modern environments created through photogrammetry-based reconstruction are spatially synchronized with historical scenes built from archival references. A dedicated spatial synchronization engine and anchor framework maintain camera pose and positional continuity during era transitions, utilizing fade and ripple effects to minimize user discomfort. The conversational core employs a Natural Language Understanding (NLU) pipeline for intent classification and named entity recognition, dynamically injecting verified historical document chunks into a fine-tuned Mistral-7B model. This model was adapted using Low-Rank Adaptation (LoRA) and optimized through Reinforcement Learning from Human Feedback (RLHF) and Q-Learning to ensure culturally aligned, factual, and multi-turn dialogue. Finally, a central 'Animation Director' orchestration engine aligns the resulting semantic input with high-fidelity performance; it concurrently queries the Fish Speech model for historically authentic vocal delivery and the Language of Motion framework (using SMPL-X and Motion-X datasets) to generate semantically aligned, non-verbal body gestures. ",

  technologies: [
    "Unity 2022 LTS & Unity Addressables ",
    "Mistral-7B & LLaMA Language Models",
    "Retrieval-Augmented Generation (RAG) ",
    "Low-Rank Adaptation (LoRA) ",
    "ChromaDB (Vector Store) ",
    "Fish Speech Neural TTS ",
    "Language of Motion & SMPL-X Rigging ",
    "Scikit-learn (K-Means Clustering) ",
    "Meta Quest 2 (Standalone VR) ",
    "Python & FastAPI (Backend) ",
  ],
};
