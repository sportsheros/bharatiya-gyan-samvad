/*
 * All site copy in Hindi (hi) and English (en).
 * Keep both languages in the same shape — App.jsx reads `content[lang]`.
 * Brand name, Hindi tagline and the Sanskrit verse intentionally stay in Devanagari in both.
 */

export const content = {
  hi: {
    meta: {
      title: 'भारतीय ज्ञान संवाद | जहाँ शास्त्र मिलते हैं जीवन से',
      description:
        'भारतीय ज्ञान संवाद — वेद, उपनिषद, भगवद्गीता, रामायण, महाभारत, भारतीय दर्शन और आध्यात्मिक परंपराओं पर सरल, संदर्भपूर्ण संवाद और पॉडकास्ट।',
    },
    skip: 'मुख्य सामग्री पर जाएँ',
    brand: { tagline: 'जहाँ शास्त्र मिलते हैं जीवन से', home: 'भारतीय ज्ञान संवाद — होम' },
    lang: { label: 'भाषा चुनें', hi: 'हिं', en: 'EN', hiFull: 'हिन्दी', enFull: 'English' },
    nav: [
      ['होम', '#home'],
      ['हमारे बारे में', '#about'],
      ['ज्ञान-विषय', '#knowledge'],
      ['संवाद', '#podcasts'],
      ['हमारा दृष्टिकोण', '#approach'],
      ['संपर्क', '#contact'],
    ],
    navLabel: 'मुख्य नेविगेशन',
    navCta: 'YouTube पर देखें',
    menuOpen: 'मेन्यू खोलें',
    menuClose: 'मेन्यू बंद करें',
    topbar: { tagline: 'भारत की ज्ञान-परंपरा से एक संवाद' },

    hero: {
      eyebrow: 'भारत की ज्ञान-परंपरा से एक संवाद',
      line1: 'प्राचीन ज्ञान।',
      line2Em: 'आज के जीवन',
      line2Rest: ' के लिए।',
      lead:
        'वेदों, उपनिषदों, भगवद्गीता, भारतीय दर्शन और आध्यात्मिक परंपराओं को समझने का एक खुला मंच — प्रश्नों, संदर्भों और सार्थक संवाद के साथ।',
      ctaPrimary: 'हमारे संवाद देखें',
      ctaSecondary: 'हमारे बारे में जानें',
      note: 'श्रद्धा के साथ जिज्ञासा। परंपरा के साथ विवेक।',
      bottom: '01 / ज्ञान की यात्रा',
      scroll: 'नीचे पढ़ें',
    },
    art: {
      label: 'उगते सूर्य और कमल से प्रेरित भारतीय ज्ञान का प्रतीकात्मक चित्र',
      top: 'ज्ञान • संवाद • चिंतन',
      translation: 'सत्य बोलो। धर्म के मार्ग पर चलो।',
      brand: 'भारतीय ज्ञान संवाद',
      est: 'स्थापित २०२६',
      stampTop: 'मूल स्रोत',
      stampBottom: 'जीवन से जुड़ा ज्ञान',
    },
    strip: ['वेद', 'उपनिषद', 'भगवद्गीता', 'रामायण', 'महाभारत', 'भारतीय दर्शन', 'आयुर्वेद', 'भक्ति'],

    about: {
      kicker: 'हम कौन हैं',
      title: ['एक मंच, जहाँ ', 'प्रश्नों का स्वागत', ' है।'],
      paragraphs: [
        'भारतीय ज्ञान संवाद एक उभरता हुआ ज्ञान एवं आध्यात्मिकता मीडिया मंच है। हमारा उद्देश्य भारत की समृद्ध ज्ञान-परंपराओं को आज की पीढ़ी के लिए सरल, रोचक और संदर्भपूर्ण बातचीत के माध्यम से प्रस्तुत करना है।',
        'वेद, उपनिषद, गीता, रामायण, महाभारत और भारतीय दर्शन केवल अतीत की धरोहर नहीं हैं — तनाव, निर्णय, रिश्तों और जीवन के उद्देश्य जैसे आज के प्रश्नों पर भी वे गहरी दृष्टि देते हैं। हम इन्हीं प्रश्नों को लेकर शास्त्रों तक जाते हैं।',
        'हम मानते हैं कि किसी भी विषय को समझने के लिए जिज्ञासा, मूल स्रोतों का सम्मान और अलग-अलग विचारों को सुनने की तैयारी ज़रूरी है।',
      ],
      quote: 'ज्ञान केवल जानने के लिए नहीं, जीवन को बेहतर समझने के लिए भी है।',
      quoteCaption: 'हमारी सोच',
      sutraSource: 'बृहदारण्यक उपनिषद',
      principles: [
        ['स्रोत-आधारित संवाद', 'जहाँ संभव हो, मूल ग्रंथ और संदर्भ।'],
        ['सरल भाषा', 'गंभीर विषय, सहज बातचीत में।'],
        ['सम्मान और विवेक', 'आस्था के साथ प्रश्न और विचार।'],
      ],
      link: 'हमारे विषय जानें',
    },

    knowledge: {
      kicker: 'ज्ञान के आयाम',
      title: ['भारत की ज्ञान-परंपरा के ', 'अनेक स्वर', ''],
      desc: 'हम अलग-अलग ग्रंथों, परंपराओं और विचारधाराओं को उनके संदर्भ में समझने की कोशिश करेंगे।',
      link: 'संवाद देखें',
      topics: [
        ['वेद एवं उपनिषद', 'प्राचीन भारतीय चिंतन के मूल स्रोतों को समझना।', 'मूल ग्रंथ'],
        ['श्रीमद्भगवद्गीता', 'कर्म, कर्तव्य, जीवन और आत्मबोध पर संवाद।', 'शास्त्रीय ज्ञान'],
        ['रामायण एवं महाभारत', 'कथाओं से आगे बढ़कर उनके विचार और जीवन-दृष्टि।', 'इतिहास एवं परंपरा'],
        ['भारतीय दर्शन', 'दर्शन की विविध परंपराओं और उनके प्रश्नों की पड़ताल।', 'विचार एवं दर्शन'],
        ['आयुर्वेद एवं पारंपरिक ज्ञान', 'पारंपरिक अवधारणाओं को संदर्भ और विवेक के साथ देखना।', 'भारतीय परंपरा'],
        ['भक्ति एवं आध्यात्मिकता', 'आस्था, साधना और आत्मचिंतन पर सार्थक बातचीत।', 'आध्यात्मिकता'],
      ],
    },

    verse: {
      label: 'चिंतन के लिए एक श्लोक',
      translation:
        'मनुष्य स्वयं अपना उद्धार करे, स्वयं को गिरने न दे; क्योंकि मनुष्य स्वयं ही अपना मित्र है और स्वयं ही अपना शत्रु।',
      source: 'श्रीमद्भगवद्गीता 6.5',
    },

    podcasts: {
      kicker: 'संवाद · पॉडकास्ट',
      title: ['संवाद की ', 'शुरुआत', ''],
      desc: 'हमारे पॉडकास्ट एपिसोड, विशेषज्ञों के साथ बातचीत और विचारों की श्रृंखला यहाँ मिलेगी।',
      pill: 'नए एपिसोड जल्द',
      coverLabel: 'आने वाला पहला एपिसोड',
      category: 'विशेष संवाद · प्रारंभिक श्रृंखला',
      featureTitle: 'भगवद्गीता आज के जीवन से कैसे जुड़ती है?',
      featureDesc: 'कर्म, निर्णय, दुविधा और जीवन के कठिन प्रश्न — गीता के संदर्भ में एक सहज और विचारपूर्ण बातचीत।',
      meta: ['विशेषज्ञ अतिथि के साथ', 'एपिसोड जल्द प्रकाशित होगा'],
      subscribe: 'YouTube पर सब्सक्राइब करें',
      contactCta: 'अपडेट के लिए संपर्क करें',
      formatTitle: 'संवाद का स्वरूप',
      formatLead: 'हर संवाद में तीन आवाज़ें — ताकि विषय गहराई से भी समझा जाए और जीवन से भी जुड़े।',
      roles: [
        ['सूत्रधार', 'Host', 'बातचीत की दिशा तय करते हैं और विषय को क्रम से खोलते हैं।'],
        ['विषय-विशेषज्ञ अतिथि', 'Expert Guest', 'ग्रंथों और परंपरा की गहरी समझ के साथ संदर्भ देते हैं।'],
        ['सह-प्रस्तोता', 'Co-host', 'रोज़मर्रा के जीवन से जुड़े व्यावहारिक प्रश्न पूछते हैं।'],
      ],
      upcomingTitle: 'आने वाले विषय',
      upcomingLead: 'कुछ प्रश्न, जिन पर हम आने वाले संवादों में चर्चा करना चाहते हैं।',
      themes: [
        ['गीता और जीवन के निर्णय', 'भगवद्गीता'],
        ['आज के जीवन में उपनिषदों की प्रासंगिकता', 'उपनिषद'],
        ['रामायण से नेतृत्व और रिश्तों की सीख', 'रामायण'],
        ['भारतीय दर्शन में आत्मज्ञान का अर्थ', 'भारतीय दर्शन'],
      ],
      themeLabel: 'प्रस्तावित विषय',
      voicesNote: 'तीन आवाज़ें · एक संवाद',
      proposed: 'प्रस्तावित',
      footnote: 'अभी यह एक लॉन्च-पूर्व वेबसाइट है। आधिकारिक एपिसोड प्रकाशित होने पर यहाँ उनके वास्तविक वीडियो जोड़े जाएँगे।',
    },

    approach: {
      kicker: 'हमारा दृष्टिकोण',
      title: ['आस्था के साथ अध्ययन,', 'परंपरा के साथ तर्क।'],
      lead: 'सिर्फ सुनें नहीं। समझें, पूछें, परखें।',
      layersIntro: 'हर संवाद में हम यह स्पष्ट करने का प्रयास करेंगे कि कोई बात किस आधार पर कही जा रही है —',
      layers: ['शास्त्रीय संदर्भ', 'पारंपरिक व्याख्या', 'व्यक्तिगत मत', 'वैज्ञानिक प्रमाण'],
      methods: [
        ['मूल संदर्भ', 'ग्रंथ, अध्याय, श्लोक और विश्वसनीय अध्ययन का उल्लेख।'],
        ['विशेषज्ञों की भागीदारी', 'विषय के जानकारों और विद्वानों से बातचीत।'],
        ['सरल प्रस्तुति', 'जटिल विचारों को सहज भाषा में, बिना उनका अर्थ बदले।'],
        ['आधुनिक जीवन से संबंध', 'विचारों को आज के सवालों और अनुभवों से जोड़ना।'],
        ['ईमानदार प्रस्तुति', 'जहाँ मतभेद या व्याख्या हो, उसे स्पष्ट बताना — भ्रामक दावों से दूरी।'],
        ['विविधता का सम्मान', 'अलग-अलग परंपराओं और दृष्टिकोणों के प्रति आदर।'],
      ],
    },

    founder: {
      kicker: 'संस्थापक की ओर से',
      title: ['एक जिज्ञासा से', 'शुरू हुई यात्रा।'],
      paragraphs: [
        'भारतीय ज्ञान संवाद की शुरुआत इस विचार से हुई कि भारत की ज्ञान-परंपराओं पर ऐसी बातचीत हो जो सम्मानजनक, शोध-आधारित और आज के जीवन से जुड़ी हो। यह मंच सीखने, सवाल पूछने और अलग-अलग विशेषज्ञों से समझने की एक सामूहिक यात्रा है।',
        'एक जिज्ञासु शोधार्थी और संवादों के होस्ट के रूप में मेरा काम सही प्रश्न पूछना और बातचीत को ईमानदारी से आगे बढ़ाना है। विषयों की गहराई उन विद्वानों और जानकारों से आएगी, जिन्हें हम संवाद में आमंत्रित करेंगे।',
      ],
      pullQuote: 'मैं स्वयं को इस यात्रा का एक विद्यार्थी मानता हूँ — हर विषय का विशेषज्ञ नहीं।',
      cta: 'संवाद से जुड़ें',
      roles: ['विद्यार्थी', 'शोधार्थी', 'होस्ट'],
      name: 'Jeet Beniwal',
      nameLocal: 'जीत बेनीवाल',
      designation: 'Founder & Host',
      designationLocal: 'संस्थापक एवं होस्ट',
      alt: 'जीत बेनीवाल — संस्थापक एवं होस्ट, भारतीय ज्ञान संवाद',
    },

    channels: {
      kicker: 'हमारे मंच',
      title: ['जहाँ हमारे ', 'संवाद', ' मिलेंगे'],
      desc: 'हमारे संवाद, झलकियाँ और अपडेट इन आधिकारिक मंचों पर प्रकाशित होंगे।',
      soon: 'लिंक जल्द',
      youtube: ['पूर्ण संवाद, पॉडकास्ट एपिसोड और विस्तृत चर्चाएँ।', 'चैनल सब्सक्राइब करें'],
      instagram: ['संवादों की झलकियाँ, विचार और छोटे वीडियो।', 'फ़ॉलो करें'],
      facebook: ['नए संवादों की सूचना, अपडेट और समुदाय से जुड़ाव।', 'पेज से जुड़ें'],
    },

    contact: {
      kicker: 'जुड़े रहें',
      title: ['संवाद में ', 'शामिल हों।'],
      desc: 'सुझाव, विषय, विशेषज्ञों के नाम या सहयोग के लिए हमसे जुड़ें।',
      reasons: ['सहयोग', 'सुझाव', 'अतिथि संवाद', 'सामान्य जानकारी'],
      email: 'ईमेल करें',
      whatsapp: 'WhatsApp पर बात करें',
      whatsappText: 'नमस्ते, मैं भारतीय ज्ञान संवाद के बारे में जानना चाहता/चाहती हूँ।',
      emailLabel: 'ईमेल',
      phoneLabel: 'WhatsApp',
    },

    footer: {
      bandTitle: 'जहाँ शास्त्र मिलते हैं जीवन से।',
      bandSub: 'हर संवाद, एक नया प्रश्न। हर प्रश्न, एक नई समझ।',
      about:
        'भारत की ज्ञान-परंपरा को आज के जीवन से जोड़ता संवाद — शास्त्र, दर्शन और परंपरा पर सरल, संदर्भपूर्ण बातचीत।',
      explore: 'पृष्ठ',
      topics: 'ज्ञान-विषय',
      connect: 'संपर्क एवं मंच',
      navLabel: 'फ़ुटर नेविगेशन',
      rights: 'सर्वाधिकार सुरक्षित।',
      top: 'ऊपर जाएँ',
    },
  },

  en: {
    meta: {
      title: 'Bharatiya Gyan Samvad | Where Scriptures Meet Life',
      description:
        'Bharatiya Gyan Samvad — simple, well-referenced conversations and podcasts on the Vedas, Upanishads, Bhagavad Gita, Ramayana, Mahabharata, Indian philosophy and spiritual traditions.',
    },
    skip: 'Skip to main content',
    brand: { tagline: 'Where scriptures meet life', home: 'Bharatiya Gyan Samvad — Home' },
    lang: { label: 'Choose language', hi: 'हिं', en: 'EN', hiFull: 'हिन्दी', enFull: 'English' },
    nav: [
      ['Home', '#home'],
      ['About', '#about'],
      ['Topics', '#knowledge'],
      ['Samvad', '#podcasts'],
      ['Our Approach', '#approach'],
      ['Contact', '#contact'],
    ],
    navLabel: 'Main navigation',
    navCta: 'Watch on YouTube',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    topbar: { tagline: 'A dialogue with India’s knowledge traditions' },

    hero: {
      eyebrow: 'A dialogue with India’s knowledge traditions',
      line1: 'Ancient wisdom.',
      line2Em: 'For the life',
      line2Rest: ' we live today.',
      lead:
        'An open platform to understand the Vedas, Upanishads, Bhagavad Gita, Indian philosophy and spiritual traditions — through questions, references and meaningful dialogue.',
      ctaPrimary: 'Watch our Samvad',
      ctaSecondary: 'About us',
      note: 'Curiosity with reverence. Tradition with reason.',
      bottom: '01 / A journey of knowledge',
      scroll: 'Scroll',
    },
    art: {
      label: 'A symbolic illustration of Indian knowledge, inspired by the rising sun and the lotus',
      top: 'Knowledge • Dialogue • Reflection',
      translation: 'Speak the truth. Walk the path of dharma.',
      brand: 'Bharatiya Gyan Samvad',
      est: 'Est. 2026',
      stampTop: 'Original sources',
      stampBottom: 'Wisdom for life',
    },
    strip: ['Vedas', 'Upanishads', 'Bhagavad Gita', 'Ramayana', 'Mahabharata', 'Indian Philosophy', 'Ayurveda', 'Bhakti'],

    about: {
      kicker: 'Who we are',
      title: ['A platform where ', 'questions are welcome', '.'],
      paragraphs: [
        'Bharatiya Gyan Samvad is an emerging knowledge and spirituality media platform. Our aim is to present India’s rich knowledge traditions to today’s generation through simple, engaging and well-referenced conversations.',
        'The Vedas, Upanishads, Gita, Ramayana, Mahabharata and Indian philosophy are not just a heritage of the past — they offer deep insight into today’s questions of stress, decisions, relationships and life’s purpose. We take these very questions back to the scriptures.',
        'We believe that understanding any subject needs curiosity, respect for original sources and a willingness to listen to different viewpoints.',
      ],
      quote: 'Knowledge is not only for knowing — it is for understanding life better.',
      quoteCaption: 'Our belief',
      sutraSource: 'Brihadaranyaka Upanishad',
      principles: [
        ['Source-based dialogue', 'Original texts and references wherever possible.'],
        ['Simple language', 'Serious subjects, in easy conversation.'],
        ['Respect and reason', 'Questions and ideas, alongside faith.'],
      ],
      link: 'Explore our topics',
    },

    knowledge: {
      kicker: 'Dimensions of knowledge',
      title: ['The many voices of ', 'India’s knowledge tradition', ''],
      desc: 'We will try to understand different texts, traditions and schools of thought in their proper context.',
      link: 'Watch Samvad',
      topics: [
        ['Vedas & Upanishads', 'Understanding the original sources of ancient Indian thought.', 'Foundational texts'],
        ['Shrimad Bhagavad Gita', 'Dialogues on action, duty, life and self-realisation.', 'Classical wisdom'],
        ['Ramayana & Mahabharata', 'Beyond the stories — their ideas and vision of life.', 'History & tradition'],
        ['Indian Philosophy', 'Exploring the diverse schools of darshana and their questions.', 'Ideas & philosophy'],
        ['Ayurveda & Traditional Knowledge', 'Looking at traditional concepts with context and discernment.', 'Indian tradition'],
        ['Bhakti & Spirituality', 'Meaningful conversations on faith, practice and self-reflection.', 'Spirituality'],
      ],
    },

    verse: {
      label: 'A verse to reflect on',
      translation:
        'Lift yourself by your own self; do not let yourself sink. For the self alone is one’s friend, and the self alone is one’s enemy.',
      source: 'Bhagavad Gita 6.5',
    },

    podcasts: {
      kicker: 'Samvad · Podcast',
      title: ['The ', 'beginning', ' of Samvad'],
      desc: 'Our podcast episodes, conversations with experts and series of ideas will be available here.',
      pill: 'New episodes soon',
      coverLabel: 'First episode coming soon',
      category: 'Special Samvad · Opening series',
      featureTitle: 'How does the Bhagavad Gita connect with life today?',
      featureDesc:
        'Action, decisions, dilemmas and life’s hard questions — a natural, thoughtful conversation in the light of the Gita.',
      meta: ['With an expert guest', 'Episode releasing soon'],
      subscribe: 'Subscribe on YouTube',
      contactCta: 'Contact us for updates',
      formatTitle: 'The Samvad format',
      formatLead: 'Three voices in every conversation — so a subject is understood in depth and connected to life.',
      roles: [
        ['Host', null, 'Guides the conversation and opens up the subject step by step.'],
        ['Expert Guest', null, 'Brings context with a deep understanding of the texts and tradition.'],
        ['Co-host', null, 'Asks practical questions drawn from everyday life.'],
      ],
      upcomingTitle: 'Upcoming themes',
      upcomingLead: 'A few questions we hope to explore in upcoming conversations.',
      themes: [
        ['The Gita and life’s decisions', 'Bhagavad Gita'],
        ['The relevance of the Upanishads today', 'Upanishads'],
        ['Leadership and relationships: lessons from the Ramayana', 'Ramayana'],
        ['The meaning of self-knowledge in Indian philosophy', 'Indian Philosophy'],
      ],
      themeLabel: 'Proposed theme',
      voicesNote: 'Three voices · One conversation',
      proposed: 'Proposed',
      footnote: 'This is a pre-launch website. Official episodes will be added here once they are published.',
    },

    approach: {
      kicker: 'Our approach',
      title: ['Study with faith,', 'reason with tradition.'],
      lead: 'Don’t just listen. Understand, ask, examine.',
      layersIntro: 'In every conversation, we will try to make clear on what basis something is being said —',
      layers: ['Scriptural reference', 'Traditional interpretation', 'Personal opinion', 'Scientific evidence'],
      methods: [
        ['Original references', 'Citing the text, chapter, verse and credible scholarship.'],
        ['Expert participation', 'Conversations with scholars and people who know the subject.'],
        ['Simple presentation', 'Complex ideas in plain language, without changing their meaning.'],
        ['Connection to modern life', 'Linking ideas to today’s questions and experiences.'],
        ['Honest presentation', 'Being clear where there is disagreement or interpretation — and avoiding misleading claims.'],
        ['Respect for diversity', 'Respect for different traditions and viewpoints.'],
      ],
    },

    founder: {
      kicker: 'From the founder',
      title: ['A journey that', 'began with curiosity.'],
      paragraphs: [
        'Bharatiya Gyan Samvad began with a simple idea: conversations about India’s knowledge traditions should be respectful, research-based and connected to life today. This platform is a shared journey of learning, asking questions and understanding from different experts.',
        'As a curious researcher and the host of these conversations, my role is to ask the right questions and carry the dialogue forward honestly. The depth will come from the scholars and experts we invite into the conversation.',
      ],
      pullQuote: 'I see myself as a student on this journey — not an expert on every subject.',
      cta: 'Join the conversation',
      roles: ['Student', 'Researcher', 'Host'],
      name: 'Jeet Beniwal',
      nameLocal: null,
      designation: 'Founder & Host',
      designationLocal: null,
      alt: 'Jeet Beniwal — Founder & Host, Bharatiya Gyan Samvad',
    },

    channels: {
      kicker: 'Our platforms',
      title: ['Where to find ', 'our conversations', ''],
      desc: 'Our conversations, highlights and updates will be published on these official platforms.',
      soon: 'Link coming soon',
      youtube: ['Full conversations, podcast episodes and in-depth discussions.', 'Subscribe to the channel'],
      instagram: ['Highlights, ideas and short videos from our conversations.', 'Follow us'],
      facebook: ['Updates on new conversations and community engagement.', 'Join the page'],
    },

    contact: {
      kicker: 'Stay connected',
      title: ['Join the ', 'conversation.'],
      desc: 'Reach out with suggestions, topics, names of experts or ideas for collaboration.',
      reasons: ['Collaboration', 'Suggestions', 'Guest conversations', 'General enquiries'],
      email: 'Send an email',
      whatsapp: 'Chat on WhatsApp',
      whatsappText: 'Hello, I would like to know more about Bharatiya Gyan Samvad.',
      emailLabel: 'Email',
      phoneLabel: 'WhatsApp',
    },

    footer: {
      bandTitle: 'जहाँ शास्त्र मिलते हैं जीवन से।',
      bandSub: 'Where scriptures meet life — every conversation a new question, every question a new understanding.',
      about:
        'A dialogue connecting India’s knowledge traditions with life today — simple, well-referenced conversations on scripture, philosophy and tradition.',
      explore: 'Explore',
      topics: 'Topics',
      connect: 'Contact & channels',
      navLabel: 'Footer navigation',
      rights: 'All rights reserved.',
      top: 'Back to top',
    },
  },
};
