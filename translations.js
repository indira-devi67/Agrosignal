// Comprehensive translations for AgroSignal V1.5 (English, Hindi, Telugu)

export const translations = {
  en: {
    appTitle: "AgroSignal",
    appSubtitle: "Precision Agricultural Agronomist & Crop Diagnostics",
    tagline: "FIELD INSTRUMENT V1.5",
    
    // Navigation & Header
    selectLanguage: "Language",
    selectStatePrompt: "Select your state...",
    detectLocation: "Detect Location",
    locationDetected: "Location Resolved",
    locationError: "Location Unavailable",
    
    // Indian States
    states: {
      "Andhra Pradesh": "Andhra Pradesh",
      "Telangana": "Telangana",
      "Tamil Nadu": "Tamil Nadu",
      "Karnataka": "Karnataka",
      "Kerala": "Kerala",
      "Maharashtra": "Maharashtra",
      "Gujarat": "Gujarat",
      "Rajasthan": "Rajasthan",
      "Punjab": "Punjab",
      "Haryana": "Haryana",
      "Uttar Pradesh": "Uttar Pradesh",
      "Madhya Pradesh": "Madhya Pradesh",
      "Odisha": "Odisha",
      "West Bengal": "West Bengal",
      "Bihar": "Bihar",
      "Chhattisgarh": "Chhattisgarh",
      "Assam": "Assam"
    },

    // Weather Section
    weatherTitle: "Microclimate & Spray Safety",
    weatherUnavailable: "Weather unavailable",
    temp: "Temperature",
    humidity: "Humidity",
    rainProb: "Rain Risk",
    windSpeed: "Wind Speed",
    safeToAct: "WEATHER SAFE: Ideal conditions for pesticide/fertilizer spray",
    notSafeToAct: "ACTION ALERT: High wind or rain expected within 24h — Delay spraying",
    regionRequiredWeather: "Select state to load microclimate data",

    // Upload & Input Section
    uploadTitle: "Crop Image Diagnosis",
    uploadSubtitle: "Upload a clear photo of infected leaf, stem, or fruit",
    dragDropText: "Drag & drop image here or click to browse",
    selectFileBtn: "Choose File",
    takePhotoBtn: "Use Camera",
    analyzeBtn: "Diagnose Crop",
    analyzingText: "Analyzing plant pathology features...",
    sampleTitle: "Or select a test sample leaf:",
    sampleHighConf: "Tomato Early Blight (High Conf. 92%)",
    sampleMedConf: "Rice Leaf Blight (Med Conf. 74%)",
    sampleLowConf: "Blurred Cotton Leaf (Low Conf. 48%)",
    sampleRust: "Wheat Yellow Rust (High Conf. 88%)",
    sampleCorn: "Corn Common Rust (Med Conf. 68%)",

    // Diagnosis Results Card (Single Vertical Scroll)
    resultsTitle: "Agronomic Diagnostic Report",
    cropLabel: "Crop Identified",
    diseaseLabel: "Problem Identified",
    confidenceLabel: "Pathology Confidence",
    confidenceHigh: "High Confidence — Direct Action Recommended",
    confidenceMed: "Moderate Confidence — Monitor Closely & Verify Symptoms",
    confidenceLow: "Possible Issue Detected — Low Confidence",
    confidenceLowAdvice: "Image quality or lighting is low. Please capture a clear, close-up photo of the affected leaf in good sunlight for accurate diagnosis.",
    
    symptomsSection: "Observed Symptoms",
    immediateActionSection: "Immediate Recommended Action",
    whyRecommendationSection: "Agronomic Rationale & Cause",
    weatherImpactSection: "Weather & Environmental Impact",
    futureRiskSection: "Future Risk Assessment",
    preventionSection: "Long-Term Prevention Strategy",
    
    // Explore Section
    exploreTitle: "Explore Common Agricultural Problems",
    exploreSubtitle: "Select any issue to view symptoms, causes, and immediate treatment guidance",
    exploreMoreTitle: "Additional Agricultural Challenges",
    viewDetailsBtn: "View Full Guide",
    closeModalBtn: "Close Guide",

    // Explore Cards Data
    exploreCards: [
      {
        id: "yellowing",
        title: "Leaf Yellowing (Chlorosis)",
        tag: "Nutrient / Water",
        summary: "Yellowing of leaves caused by nitrogen deficiency, overwatering, or root damage.",
        symptoms: "Older lower leaves turn pale yellow while veins remain green; stunted crop growth.",
        causes: "Nitrogen leach from excessive rain, soil compaction, root rot, or high pH blockages.",
        prevention: "Apply balanced NPK fertilizer, improve drainage, and run soil pH testing."
      },
      {
        id: "pest_damage",
        title: "Pest Damage & Infestation",
        tag: "Insects",
        summary: "Physical foliage destruction by chewing, sucking insects like aphids, thrips, and stem borers.",
        symptoms: "Holes in leaves, curled leaf margins, sticky honeydew deposits, wilting shoots.",
        causes: "High temperatures, dry spells accelerating insect breeding, lack of natural predators.",
        prevention: "Deploy yellow sticky traps, introduce neem oil sprays, use recommended targeted bio-pesticides."
      },
      {
        id: "water_stress",
        title: "Water Stress (Drought / Waterlogging)",
        tag: "Irrigation",
        summary: "Cellular stress caused by deficit moisture or prolonged root submergence.",
        symptoms: "Wilting during midday sun, crispy brown leaf tips (drought) or yellow droopy leaves (waterlogging).",
        causes: "Irregular irrigation schedules, clay soil compaction, unexpected heatwaves.",
        prevention: "Adopt drip irrigation, apply organic straw mulch, ensure field drainage channels."
      },
      {
        id: "nutrient_def",
        title: "Nutrient Deficiency (N-P-K & Zinc)",
        tag: "Soil Health",
        summary: "Lack of essential macro or micro minerals preventing healthy canopy formation.",
        symptoms: "Purple leaf undersides (Phosphorus deficit), marginal tip leaf burn (Potassium deficit), interveinal chlorosis (Zinc deficit).",
        causes: "Depleted soil organic matter, improper pH balance, imbalanced fertilizer application.",
        prevention: "Soil testing before sowing, application of farmyard manure, zinc sulfate foliar sprays."
      },
      {
        id: "fungal_disease",
        title: "Fungal Blight & Rust",
        tag: "Pathogen",
        summary: "Spores germinating on wet leaf surfaces causing rapid tissue necrosis and yield loss.",
        symptoms: "Concentric brown spots with yellow halos, powdery white patches, rusty orange pustules.",
        causes: "High humidity (>80%), leaf wetness over 6 hours, overcrowded crop planting.",
        prevention: "Ensure crop spacing for airflow, apply copper-based fungicides early, destroy infected crop residues."
      }
    ],

    exploreMoreCards: [
      {
        id: "bacterial_spot",
        title: "Bacterial Leaf Spot",
        tag: "Bacterial",
        summary: "Water-soaked dark angular spots on foliage and fruits.",
        symptoms: "Small water-soaked lesions that turn dark brown with dry centers.",
        causes: "Splashing rain, contaminated tools, high heat combined with moisture.",
        prevention: "Use certified disease-free seeds, avoid overhead sprinkler irrigation."
      },
      {
        id: "root_rot",
        title: "Root Rot & Vascular Wilt",
        tag: "Soil Fungi",
        summary: "Fungal pathogens attacking plant root systems and clogging water transport channels.",
        symptoms: "Sudden wilting despite moist soil, blackened soft taproots.",
        causes: "Poor field drainage, Pythium/Fusarium fungi buildup in soil.",
        prevention: "Seed treatment with Trichoderma viride, crop rotation with non-host crops."
      },
      {
        id: "viral_curl",
        title: "Viral Leaf Curl",
        tag: "Virus",
        summary: "Systemic viral infection transmitted by whiteflies and thrips.",
        symptoms: "Severe leaf curling, puckering, reduced leaf size, stunted growth.",
        causes: "High whitefly population carrying Gemini virus.",
        prevention: "Control vector insects with insect net covers and systemic insecticides."
      },
      {
        id: "salinity",
        title: "Soil Salinity & Alkali Stress",
        tag: "Soil Chemistry",
        summary: "Excess salt accumulation in root zone restricting water uptake.",
        symptoms: "Leaf margin scorching, stunted seedlings, white salt crust on soil surface.",
        causes: "Over-use of chemical fertilizers, saline groundwater irrigation.",
        prevention: "Leach salts with fresh water, apply agricultural gypsum."
      },
      {
        id: "weed_competition",
        title: "Weed Infestation & Competition",
        tag: "Agronomy",
        summary: "Invasive weeds competing for soil nutrients, sunlight, and moisture.",
        symptoms: "Stunted main crop growth, canopy shading by weeds.",
        causes: "Delayed weeding, weed seed bank accumulation in soil.",
        prevention: "Pre-emergence herbicide application, mechanical inter-cultivation."
      }
    ],

    // UI Messages & Errors
    errorNoImage: "Please upload or select a crop image first.",
    errorNoRegion: "Please select your state or enable location to proceed with diagnosis.",
    errorWeatherFetch: "Unable to connect to weather services.",
    notAvailable: "Not available",
    resetBtn: "Reset Analysis",
    footerText: "AgroSignal Precision Platform • V1.5 Field Prototype"
  },

  hi: {
    appTitle: "एग्रोसिग्नल (AgroSignal)",
    appSubtitle: "सटीक कृषि फसल निदान प्रणाली",
    tagline: "फील्ड इंस्ट्रूमेंट V1.5",
    
    // Navigation & Header
    selectLanguage: "भाषा",
    selectStatePrompt: "अपना राज्य चुनें...",
    detectLocation: "स्थान खोजें",
    locationDetected: "स्थान मिला",
    locationError: "स्थान उपलब्ध नहीं",
    
    // Indian States
    states: {
      "Andhra Pradesh": "आंध्र प्रदेश",
      "Telangana": "तेलंगाना",
      "Tamil Nadu": "तमिलनाडु",
      "Karnataka": "कर्नाटक",
      "Kerala": "केरल",
      "Maharashtra": "महाराष्ट्र",
      "Gujarat": "गुजरात",
      "Rajasthan": "राजस्थान",
      "Punjab": "पंजाब",
      "Haryana": "हरियाणा",
      "Uttar Pradesh": "उत्तर प्रदेश",
      "Madhya Pradesh": "मध्य प्रदेश",
      "Odisha": "ओडिशा",
      "West Bengal": "पश्चिम बंगाल",
      "Bihar": "बिहार",
      "Chhattisgarh": "छत्तीसगढ़",
      "Assam": "असम"
    },

    // Weather Section
    weatherTitle: "मौसम व छिड़काव सुरक्षा",
    weatherUnavailable: "मौसम उपलब्ध नहीं",
    temp: "तापमान",
    humidity: "नमी",
    rainProb: "बारिश की संभावना",
    windSpeed: "हवा की गति",
    safeToAct: "मौसम सुरक्षित: कीटनाशक/उर्वरक छिड़काव के लिए अनुकूल स्थितियां",
    notSafeToAct: "चेतावनी: अगले 24 घंटों में तेज हवा या बारिश की संभावना — छिड़काव रोकें",
    regionRequiredWeather: "मौसम डेटा लोड करने के लिए राज्य चुनें",

    // Upload & Input Section
    uploadTitle: "फसल रोग निदान",
    uploadSubtitle: "प्रभावित पत्ती, तने या फल की स्पष्ट तस्वीर अपलोड करें",
    dragDropText: "यहाँ फोटो खींचकर छोड़ें या ब्राउज़ करें",
    selectFileBtn: "फ़ाइल चुनें",
    takePhotoBtn: "कैमरा खोलें",
    analyzeBtn: "फसल की जाँच करें",
    analyzingText: "पौधे के लक्षणों का विश्लेषण किया जा रहा है...",
    sampleTitle: "या नमूना पत्ती चुनें:",
    sampleHighConf: "टमाटर अगेती झुलसा (उच्च विश्वास 92%)",
    sampleMedConf: "धान पत्ती झुलसा (मध्यम विश्वास 74%)",
    sampleLowConf: "धुंधली कपास पत्ती (कम विश्वास 48%)",
    sampleRust: "गेहूं पीला रतुआ (उच्च विश्वास 88%)",
    sampleCorn: "मक्का सामान्य रतुआ (मध्यम विश्वास 68%)",

    // Diagnosis Results Card
    resultsTitle: "कृषि निदान रिपोर्ट",
    cropLabel: "पहचानी गई फसल",
    diseaseLabel: "पहचानी गई समस्या/बीमारी",
    confidenceLabel: "निदान सटीकता (विश्वास प्रतिशत)",
    confidenceHigh: "उच्च सटीकता — सीधी सिफारिश का पालन करें",
    confidenceMed: "मध्यम सटीकता — लक्षणों की सावधानीपूर्वक पुष्टि करें",
    confidenceLow: "संभावित समस्या पाई गई — कम सटीकता",
    confidenceLowAdvice: "तस्वीर की गुणवत्ता कम है। कृपया अच्छी धूप में प्रभावित पत्ती की साफ़ और पास की फोटो लेकर दोबारा प्रयास करें।",
    
    symptomsSection: "देखे गए लक्षण",
    immediateActionSection: "तत्काल अनुशंसित उपाय",
    whyRecommendationSection: "कृषि कारण व वैज्ञानिक आधार",
    weatherImpactSection: "मौसम का प्रभाव व सुरक्षा",
    futureRiskSection: "भविष्य का जोखिम आकलन",
    preventionSection: "दीर्घकालिक रोकथाम सलाह",
    
    // Explore Section
    exploreTitle: "सामान्य कृषि समस्याओं की जानकारी",
    exploreSubtitle: "लक्षण, कारण और उपचार देखने के लिए किसी भी विषय पर क्लिक करें",
    exploreMoreTitle: "अन्य कृषि चुनौतियाँ व समाधान",
    viewDetailsBtn: "पूरा विवरण देखें",
    closeModalBtn: "बंद करें",

    // Explore Cards Data
    exploreCards: [
      {
        id: "yellowing",
        title: "पत्तियों का पीला पड़ना (Chlorosis)",
        tag: "पोषक तत्व / जल",
        summary: "नाइट्रोजन की कमी, अत्यधिक पानी या जड़ों की क्षति के कारण पत्तियों का पीला पड़ना।",
        symptoms: "पुरानी निचली पत्तियां पीली पड़ जाती हैं जबकि नसें हरी रहती हैं; फसल की वृद्धि रुकना।",
        causes: "भारी बारिश से नाइट्रोजन का बह जाना, मिट्टी का कड़ा होना, जड़ सड़न।",
        prevention: "संतुलित NPK उर्वरक का प्रयोग करें, जल निकासी में सुधार करें।"
      },
      {
        id: "pest_damage",
        title: "कीट प्रकोप व क्षति",
        tag: "कीट",
        summary: "माहू (Aphids), थ्रिप्स और तना छेदक कीटों द्वारा पत्तियों और तनों का विनाश।",
        symptoms: "पत्तियों में छेद, मुड़ी हुई पत्तियां, चिपचिपा द्रव, मुड़ती हुई कोपलें।",
        causes: "उच्च तापमान, शुष्क मौसम से कीटों का तेजी से प्रजनन।",
        prevention: "पीले चिपचिपे जाल (Yellow Sticky Traps) लगाएं, नीम तेल का छिड़काव करें।"
      },
      {
        id: "water_stress",
        title: "जल तनाव (सूखा या जलभराव)",
        tag: "सिंचाई",
        summary: "नमी की कमी या अधिक समय तक जड़ों में पानी भरे रहने से तनाव।",
        symptoms: "दोपहर में पत्तियों का मुरझाना, किनारे सूखकर भूरे होना।",
        causes: "अनियमित सिंचाई, चिकनी मिट्टी में जलभराव, अचानक गर्मी।",
        prevention: "ड्रिप सिंचाई अपनाएं, मल्चिंग का उपयोग करें, जल निकासी नाली बनाएं।"
      },
      {
        id: "nutrient_def",
        title: "पोषक तत्वों की कमी (N-P-K व जिंक)",
        tag: "मृदा स्वास्थ्य",
        summary: "आवश्यक मुख्य और सूक्ष्म खनिजों की कमी से फसल का कमजोर होना।",
        symptoms: "बैंगनी पत्तियां (फास्फोरस कमी), किनारों का जलना (पोटेशियम कमी), सफेद/पीली नसें (जिंक कमी)।",
        causes: "मिट्टी में जैविक कार्बन की कमी, अनुचित pH स्तर।",
        prevention: "बुवाई से पहले मिट्टी परीक्षण कराएं, देसी खाद का प्रयोग करें।"
      },
      {
        id: "fungal_disease",
        title: "फफूंद जनित रोग (झुलसा व रतुआ)",
        tag: "रोगजनक फफूंद",
        summary: "गीली पत्तियों पर फफूंद के बीजाणु अंकुरित होकर उपज को नुकसान पहुंचाते हैं।",
        symptoms: "पत्तियों पर भूरे धब्बे, सफेद चूर्ण जैसी परत, नारंगी रंग के फफोले।",
        causes: "अधिक नमी (>80%), पत्तियों पर देर तक पानी रहना।",
        prevention: "पौधों के बीच उचित दूरी रखें, कॉपर युक्त फफूंदनाशी का उपयोग करें।"
      }
    ],

    exploreMoreCards: [
      {
        id: "bacterial_spot",
        title: "जीवाणु धब्बा रोग (Bacterial Spot)",
        tag: "जीवाणु",
        summary: "पत्तियों और फलों पर पानी से भीगे हुए काले कोणीय धब्बे।",
        symptoms: "छोटे जल-शोषित धब्बे जो बाद में गहरे भूरे और सूखे हो जाते हैं।",
        causes: "बारिश के छींटे, दूषित औजार, गर्मी और नमी का संयोजन।",
        prevention: "प्रमाणित रोग-मुक्त बीजों का उपयोग करें, ऊपर से छिड़काव सिंचाई से बचें।"
      },
      {
        id: "root_rot",
        title: "जड़ सड़न व उकठा रोग (Root Rot)",
        tag: "मृदा फफूंद",
        summary: "मृदा जनित फफूंद जो पौधे की जड़ों को नष्ट कर देती है।",
        symptoms: "गीली मिट्टी के बावजूद पौधा अचानक मुरझा जाता है, जड़ें काली पड़ जाती हैं।",
        causes: "खराब जल निकासी, मिट्टी में पिथियम/फ्यूजेरियम फफूंद।",
        prevention: "ट्राइकोडर्मा विरिडी से बीज उपचार करें, फसल चक्र अपनाएं।"
      },
      {
        id: "viral_curl",
        title: "विषाणु जनित पर्ण कुंचन (Leaf Curl)",
        tag: "वायरस",
        summary: "सफेद मक्खी और थ्रिप्स द्वारा फैलने वाला भयानक वायरस रोग।",
        symptoms: "पत्तियां अत्यधिक मुड़ जाती हैं, छोटी रह जाती हैं, पौधा बौना हो जाता है।",
        causes: "सफेद मक्खी (Whitefly) की बढ़ती आबादी।",
        prevention: "सफेद मक्खी को नियंत्रित करने के लिए येलो स्टिकी ट्रैप और कीटनाशक का प्रयोग करें।"
      },
      {
        id: "salinity",
        title: "मिट्टी का खारापन (Salinity)",
        tag: "मृदा रसायन",
        summary: "जड़ क्षेत्र में अत्यधिक लवण जमा होने से पानी का अवशोषण रुकना।",
        symptoms: "पत्तियों के किनारे जलना, पौधों का बौनापन, मिट्टी पर सफेद नमक की परत।",
        causes: "रासायनिक उर्वरकों का अत्यधिक प्रयोग, खारे पानी से सिंचाई।",
        prevention: "साफ पानी से लवणों को बहाएं, कृषि जिप्सम का प्रयोग करें।"
      },
      {
        id: "weed_competition",
        title: "खरपतवार प्रकोप व प्रतिस्पर्धा",
        tag: "कृषि विज्ञान",
        summary: "अवांछित खरपतवार जो फसल के धूप, पानी और खाद को छीन लेते हैं।",
        symptoms: "मुख्य फसल की वृद्धि रुकना, खरपतवारों से ढक जाना।",
        causes: "समय पर निराई न करना, मिट्टी में खरपतवार बीजों का जमाव।",
        prevention: "बुवाई के तुरंत बाद खरपतवारनाशक का प्रयोग करें, समय पर निराई-गुड़ाई करें।"
      }
    ],

    // UI Messages & Errors
    errorNoImage: "कृपया पहले एक फसल की फोटो अपलोड या चयन करें।",
    errorNoRegion: "निदान शुरू करने के लिए कृपया अपना राज्य चुनें।",
    errorWeatherFetch: "मौसम सेवा से जुड़ने में असमर्थ।",
    notAvailable: "उपलब्ध नहीं",
    resetBtn: "दोबारा जाँच करें",
    footerText: "एग्रोसिग्नल प्रिसिजन प्लेटफॉर्म • V1.5 फील्ड प्रोटोटाइप"
  },

  te: {
    appTitle: "ఆగ్రోసిగ్నల్ (AgroSignal)",
    appSubtitle: "ఖచ్చితమైన వ్యవసాయ పంట వ్యాధి నిర్ధారణ వేదిక",
    tagline: "ఫీల్డ్ ఇన్స్ట్రుమెంట్ V1.5",
    
    // Navigation & Header
    selectLanguage: "భాష",
    selectStatePrompt: "మీ రాష్ట్రం ఎంచుకోండి...",
    detectLocation: "నగరం/ప్రాంతం గుర్తించు",
    locationDetected: "ప్రాంతం గుర్తించబడింది",
    locationError: "ప్రాంతం లభించలేదు",
    
    // Indian States
    states: {
      "Andhra Pradesh": "ఆంధ్రప్రదేశ్",
      "Telangana": "తెలంగాణ",
      "Tamil Nadu": "తమిళనాడు",
      "Karnataka": "కర్ణాటక",
      "Kerala": "కేరళ",
      "Maharashtra": "మహారాష్ట్ర",
      "Gujarat": "గుజరాత్",
      "Rajasthan": "రాజస్థాన్",
      "Punjab": "పంజాబ్",
      "Haryana": "హర్యానా",
      "Uttar Pradesh": "ఉత్తరప్రదేశ్",
      "Madhya Pradesh": "మధ్యప్రదేశ్",
      "Odisha": "ఒడిశా",
      "West Bengal": "పశ్చిమ బెంగాల్",
      "Bihar": "బీహార్",
      "Chhattisgarh": "ఛత్తీస్‌గఢ్",
      "Assam": "అస్సాం"
    },

    // Weather Section
    weatherTitle: "వాతావరణం & పిచికారీ భద్రత",
    weatherUnavailable: "వాతావరణ డేటా అందుబాటులో లేదు",
    temp: "ఉష్ణోగ్రత",
    humidity: "తేమ శాతం",
    rainProb: "వర్షపాతం అవకాశం",
    windSpeed: "గాలి వేగం",
    safeToAct: "వాతావరణం సురక్షితం: పురుగుమందులు/ఎరువుల పిచికారీకి అనుకూలం",
    notSafeToAct: "హెచ్చరిక: రాబోయే 24 గంటల్లో ఈదురుగాలులు లేదా వర్షం సూచన — పిచికారీ వాయిదా వేయండి",
    regionRequiredWeather: "వాతావరణ వివరాల కోసం రాష్ట్రాన్ని ఎంచుకోండి",

    // Upload & Input Section
    uploadTitle: "పంట వ్యాధి నిర్ధారణ",
    uploadSubtitle: "వ్యాధి సోకిన ఆకు లేదా పండు స్పష్టమైన చిత్రాన్ని అప్‌లోడ్ చేయండి",
    dragDropText: "ఇక్కడ ఫొటో డ్రాప్ చేయండి లేదా క్లిక్ చేసి ఎంచుకోండి",
    selectFileBtn: "ఫైల్ ఎంచుకోండి",
    takePhotoBtn: "కెమెరా ఉపయోగించండి",
    analyzeBtn: "పంట పరీక్షించండి",
    analyzingText: "పంట వ్యాధి లక్షణాలను విశ్లేషిస్తోంది...",
    sampleTitle: "లేదా నమూనా ఆకును ఎంచుకోండి:",
    sampleHighConf: "టమోటా ముందస్తు తెగులు (అధిక ఖచ్చితత్వం 92%)",
    sampleMedConf: "వరి ఆకు ఎండు తెగులు (మధ్యస్థ ఖచ్చితత్వం 74%)",
    sampleLowConf: "మసకగా ఉన్న పత్తి ఆకు (తక్కువ ఖచ్చితత్వం 48%)",
    sampleRust: "గోధుమ పసుపు తుప్పు తెగులు (అధిక ఖచ్చితత్వం 88%)",
    sampleCorn: "జొన్న/మొక్కజొన్న సాధారణ తెగులు (మధ్యస్థ ఖచ్చితత్వం 68%)",

    // Diagnosis Results Card
    resultsTitle: "వ్యవసాయ వ్యాధి నిర్ధారణ నివేదిక",
    cropLabel: "గుర్తించిన పంట",
    diseaseLabel: "గుర్తించిన తెగులు/సమస్య",
    confidenceLabel: "నిర్ధారణ ఖచ్చితత్వం (కాన్ఫిడెన్స్ %)",
    confidenceHigh: "అధిక ఖచ్చితత్వం — సిఫార్సును నేరుగా పాటించండి",
    confidenceMed: "మధ్యస్థ ఖచ్చితత్వం — లక్షణాలను పరిశీలించి నిర్ధారించుకోండి",
    confidenceLow: "సాధ్యమైన సమస్య గుర్తించబడింది — తక్కువ ఖచ్చితత్వం",
    confidenceLowAdvice: "ఫొటో స్పష్టత తక్కువగా ఉంది. దయచేసి మంచి వెలుతురులో వ్యాధి సోకిన ఆకును దగ్గరగా స్పష్టంగా ఫొటో తీసి మళ్లీ ప్రయత్నించండి.",
    
    symptomsSection: "గమనించిన లక్షణాలు",
    immediateActionSection: "వెంటనే తీసుకోవాల్సిన చర్యలు",
    whyRecommendationSection: "శాస్త్రీయ కారణం & సైంటిఫిక్ ఆధారం",
    weatherImpactSection: "వాతావరణ ప్రభావం & జాగ్రత్తలు",
    futureRiskSection: "భవిష్యత్ ప్రమాద అంచనా",
    preventionSection: "దీర్ఘకాలిక నివారణ చర్యలు",
    
    // Explore Section
    exploreTitle: "సాధారణ వ్యవసాయ సమస్యల అవగాహన",
    exploreSubtitle: "లక్షణాలు, కారణాలు మరియు నివారణ తెలుసుకోవడానికి ఏదైనా కార్డుపై క్లిక్ చేయండి",
    exploreMoreTitle: "మరిన్ని వ్యవసాయ సమస్యలు & పరిష్కారాలు",
    viewDetailsBtn: "పూర్తి వివరాలు చూడండి",
    closeModalBtn: "మూసివేయి",

    // Explore Cards Data
    exploreCards: [
      {
        id: "yellowing",
        title: "ఆకులు పసుపు రంగులోకి మారడం (Chlorosis)",
        tag: "పోషకాలు / నీరు",
        summary: "నత్రజని లోపం, ఎక్కువ నీరు నిలవడం లేదా వేర్లు దెబ్బతినడం వల్ల ఆకులు పసుపు రంగులోకి మారతాయి.",
        symptoms: "కింది పాత ఆకులు పసుపు పడతాయి, ఈనెలు పచ్చగా ఉంటాయి; మొక్క ఎదుగుదల ఆగిపోతుంది.",
        causes: "వర్షాలకు నత్రజని కొట్టుకుపోవడం, నేల గట్టిపడటం, వేరు కుళ్ళు.",
        prevention: "సమతుల్య NPK ఎరువులు వాడండి, నీటి పారుదల సౌకర్యం కల్పించండి."
      },
      {
        id: "pest_damage",
        title: "పురుగుల ఉధృతి & నష్టం",
        tag: "కీటకాలు",
        summary: "పేనుబంక (Aphids), తామర పురుగులు, కాండం తొలిచే పురుగుల ద్వారా పంట దెబ్బతినడం.",
        symptoms: "ఆకులకు రంధ్రాలు పడటం, ముడుచుకుపోవడం, జిగట పదార్థం చేరడం.",
        causes: "ఎక్కువ వేడి, పొడి వాతావరణం వల్ల పురుగులు వేగంగా పెరగడం.",
        prevention: "పసుపు రంగు జిగురు అట్టలు (Yellow Sticky Traps) ఉపయోగించండి, వేపనూనె పిచికారీ చేయండి."
      },
      {
        id: "water_stress",
        title: "నీటి ఎద్దడి (ఎండ తీవ్రత / నీరు నిలవడం)",
        tag: "నీటి యాజమాన్యం",
        summary: "తేమ లేకపోవడం లేదా వేర్ల వద్ద నీరు ఎక్కువ రోజులు నిలవడం వల్ల వచ్చే ఒత్తిడి.",
        symptoms: "మధ్యాహ్నపు ఎండకు ఆకులు వాడిపోవడం, అంచులు ఎండిపోవడం.",
        causes: "క్రమం లేని తడులు, మట్టిలో గాలి ఆడకపోవడం, ఎండ తీవ్రత.",
        prevention: "బిందు సేద్యం (Drip Irrigation) వాడండి, మల్చింగ్ చేయండి, నీరు బయటకు పోయేలా చూడండి."
      },
      {
        id: "nutrient_def",
        title: "పోషకాహార లోపాలు (N-P-K & జింక్)",
        tag: "నేల ఆరోగ్యం",
        summary: "ముఖ్యమైన పోషకాలు లభించకపోవడం వల్ల పంట బలహీనపడటం.",
        symptoms: "ఆకుల వెనుక ఊదా రంగు (భాస్వరం లోపం), ఆకుల అంచులు కాలినట్లు ఉండటం (పొటాషియం లోపం).",
        causes: "నేలలో సేంద్రీయ కర్బనం తగ్గడం, అసమతుల్య ఎరువుల వాడకం.",
        prevention: "నేల పరీక్షలు చేయించండి, పశువుల ఎరువు వాడండి, జింక్ సల్ఫేట్ పిచికారీ చేయండి."
      },
      {
        id: "fungal_disease",
        title: "శిలీంధ్ర తెగుళ్లు (ఆకు మచ్చ & తుప్పు)",
        tag: "ఫంగస్ తెగులు",
        summary: "తేమ ఉన్న ఆకులపై శిలీంధ్ర బీజాలు వ్యాపించి పంట దిగుబడిని తగ్గిస్తాయి.",
        symptoms: "ఆకులపై గుండ్రటి గోధుమ మచ్చలు, తెల్లటి బూజు, నారింజ రంగు పొక్కులు.",
        causes: "గాలిలో తేమ 80% కంటే ఎక్కువ ఉండటం, ఆకులపై నీరు నిలవడం.",
        prevention: "మొక్కల మధ్య తగిన దూరం పాటించండి, కాపర్ ఫంగిసైడ్ పిచికారీ చేయండి."
      }
    ],

    exploreMoreCards: [
      {
        id: "bacterial_spot",
        title: "బ్యాక్టీరియా ఆకు మచ్చ తెగులు (Bacterial Spot)",
        tag: "బ్యాక్టీరియా",
        summary: "ఆకులు మరియు కాయలపై నీటి మచ్చలు కలిగి నల్లగా మారడం.",
        symptoms: "చిన్న నీటి మచ్చలు తర్వాత నల్లగా ఎండిపోతాయి.",
        causes: "వర్షపు చినుకులు, వ్యాధి సోకిన పనిముట్లు, వేడి మరియు తేమ.",
        prevention: "ధృవీకరించబడిన విత్తనాలు వాడండి, పైన నీరు చల్లే సేద్యం తగ్గించండి."
      },
      {
        id: "root_rot",
        title: "వేరు కుళ్ళు & ఎండు తెగులు (Root Rot)",
        tag: "నేల ఫంగస్",
        summary: "నేలలోని ఫంగస్ వేర్లకు హాని చేసి మొక్కకు నీటి సరఫరా నిలిపివేస్తుంది.",
        symptoms: "తేమ ఉన్నప్పటికీ మొక్క హఠాత్తుగా వాడిపోవడం, వేర్లు నల్లగా మారడం.",
        causes: "నీరు నిలవడం, పిథియం/ఫ్యూజేరియం ఫంగస్ ఉనికి.",
        prevention: "ట్రైకోడెర్మా విరిడేతో విత్తన శుద్ధి చేయండి, పంట మార్పిడి పాటించండి."
      },
      {
        id: "viral_curl",
        title: "వైరస్ ఆకు ముడత తెగులు (Leaf Curl)",
        tag: "వైరస్",
        summary: "తెల్ల ఈగలు మరియు తామర పురుగుల ద్వారా వ్యాపించే తీవ్రమైన వైరస్.",
        symptoms: "ఆకులు బాగా ముడుచుకుపోవడం, చిన్నవిగా మారడం, మొక్క ఎదుగుదల ఆగడం.",
        causes: "జెమిని వైరస్ వ్యాప్తి చేసే తెల్ల ఈగల సంఖ్య పెరగడం.",
        prevention: "తెల్ల ఈగల నివారణకు పసుపు అట్టలు మరియు సిస్టమిక్ పురుగుమందులు వాడండి."
      },
      {
        id: "salinity",
        title: "నేల చౌడు / ఉప్పు శాతం పెరగడం",
        tag: "నేల కెమిస్ట్రీ",
        summary: "వేర్ల వద్ద ఉప్పు శాతం పెరిగి నీటిని పీల్చుకునే సామర్థ్యం తగ్గడం.",
        symptoms: "ఆకుల అంచులు కాలడం, తెల్లటి ఉప్పు పొర నేలపై కనిపించడం.",
        causes: "రసాయన ఎరువుల అతి వాడకం, చౌడు నీటితో సేద్యం.",
        prevention: "మంచి నీటితో చౌడును కడిగివేయండి, వ్యవసాయ జిప్సం వాడండి."
      },
      {
        id: "weed_competition",
        title: "కలుపు మొక్కల ఉధృతి",
        tag: "అగ్రోనమీ",
        summary: "అవాంఛిత కలుపు మొక్కలు పంటకు సేంద్రీయ పోషకాలు లభించకుండా పోటీ పడటం.",
        symptoms: "ముఖ్య పంట ఎదుగుదల మందగించడం.",
        causes: "సమయానికి కలుపు తీయకపోవడం.",
        prevention: "మొలకెత్తే ముందే కలుపునాశిని వాడటం, క్రమం తప్పకుండా గుంటక తోలడం."
      }
    ],

    // UI Messages & Errors
    errorNoImage: "దయచేసి మొదట పంట చిత్రాన్ని అప్‌లోడ్ చేయండి లేదా ఎంచుకోండి.",
    errorNoRegion: "నిర్ధారణ ప్రారంభించడానికి దయచేసి మీ రాష్ట్రాన్ని ఎంచుకోండి.",
    errorWeatherFetch: "వాతావరణ సర్వర్ కనెక్ట్ కాలేదు.",
    notAvailable: "అందుబాటులో లేదు",
    resetBtn: "మళ్లీ పరీక్షించండి",
    footerText: "ఆగ్రోసిగ్నల్ ప్రెసిషన్ ప్లాట్‌ఫాం • V1.5 ఫీల్డ్ ప్రోటోటైప్"
  }
};
