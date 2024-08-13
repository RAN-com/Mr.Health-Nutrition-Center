import React, { useState } from 'react';

const translations = {
  en: {
    title: 'What is a Wellness Coach?',
    intro: `A wellness coach is a professional who helps individuals improve their overall well-being through a holistic approach. They focus on various aspects of health, including physical fitness, nutrition, mental health, and lifestyle habits. Here’s an overview of what a wellness coach does and how they can help:`,
    rolesTitle: 'Roles and Responsibilities of a Wellness Coach',
    roles: [
      {
        title: 'Personalized Guidance',
        items: [
          'Assessment: Evaluate your current health status, lifestyle, and goals.',
          'Goal Setting: Work with you to set realistic and achievable health and wellness goals.'
        ]
      },
      {
        title: 'Health and Nutrition Advice',
        items: [
          'Diet Plans: Provide tailored nutrition advice and meal plans to improve eating habits.',
          'Exercise Routines: Design exercise programs that fit your fitness level and goals.'
        ]
      },
      {
        title: 'Behavioral Change',
        items: [
          'Motivation: Help you stay motivated and accountable for your progress.',
          'Habit Formation: Assist in developing healthy habits and breaking unhealthy ones.'
        ]
      },
      {
        title: 'Stress Management',
        items: [
          'Techniques: Teach stress management techniques such as mindfulness, meditation, and relaxation exercises.'
        ]
      },
      {
        title: 'Lifestyle Management',
        items: [
          'Sleep: Offer strategies to improve sleep quality and manage sleep disorders.',
          'Work-Life Balance: Help you create a balance between work, personal life, and self-care.'
        ]
      },
      {
        title: 'Educational Support',
        items: [
          'Workshops and Resources: Provide educational resources and conduct workshops on various wellness topics.'
        ]
      },
      {
        title: 'Health Monitoring',
        items: [
          'Progress Tracking: Monitor your progress towards your goals and make adjustments to plans as needed.',
          'Feedback: Offer constructive feedback and celebrate milestones.'
        ]
      }
    ],
    benefitsTitle: 'Benefits of Working with a Wellness Coach',
    benefits: [
      'Personalized Support: Receive individualized attention and support tailored to your unique needs and goals.',
      'Holistic Approach: Address multiple aspects of health, including physical, emotional, and mental well-being.',
      'Increased Motivation: Stay motivated and on track with your health goals through regular check-ins and encouragement.',
      'Improved Lifestyle: Develop healthier habits that can lead to long-term improvements in quality of life.',
      'Expert Guidance: Access professional advice and knowledge on health and wellness topics.'
    ],
    whenTitle: 'When to Consider a Wellness Coach',
    when: [
      'Starting a New Health Journey: When beginning a new fitness or nutrition plan.',
      'Seeking Lifestyle Changes: When aiming to improve overall lifestyle habits and wellness.',
      'Managing Chronic Conditions: When looking for support in managing chronic health conditions through lifestyle changes.',
      'Overcoming Obstacles: When facing challenges in maintaining motivation or making lasting changes.'
    ],
    conclusion: `A wellness coach can play a crucial role in guiding you towards a healthier and more balanced life, offering support and expertise to help you achieve your wellness goals.`
  },
  ta: {
    title: 'ஒரு நலன்நிலை பயிற்சியாளர் யார்?',
    intro: `ஒரு நலன்நிலை பயிற்சியாளர் ஒரு நபரின் மொத்த நலன்நிலையை முழுமையான அணுகுமுறையுடன் மேம்படுத்த உதவும் நிபுணர். அவர்கள் உடல் உடற்பயிற்சி, ஊட்டசத்து, மன நலன்நிலை மற்றும் வாழ்க்கை முறை பழக்கங்களை உட்பட பல்வேறு நலன்நிலை அம்சங்களில் கவனம் செலுத்துகிறார்கள். ஒரு நலன்நிலை பயிற்சியாளர் என்ன செய்கிறார் மற்றும் அவர்கள் எவ்வாறு உதவ முடியும் என்பதற்கான மேலோட்டம்:`,
    rolesTitle: 'ஒரு நலன்நிலை பயிற்சியாளரின் பங்கு மற்றும் பொறுப்புகள்',
    roles: [
      {
        title: 'தனிப்பயன் வழிகாட்டுதல்',
        items: [
          'மதிப்பீடு: உங்கள் தற்போதைய நலன்நிலை, வாழ்க்கை முறை மற்றும் குறிக்கோள்களை மதிப்பீடு செய்யவும்.',
          'குறிக்கோள் அமைத்தல்: நலன்நிலை மற்றும் ஆரோக்கிய குறிக்கோள்களை யதார்த்தமாக மற்றும் அடையக்கூடியதாக அமைக்க உங்களுடன் வேலை செய்யவும்.'
        ]
      },
      {
        title: 'ஆரோக்கிய மற்றும் ஊட்டசத்து ஆலோசனை',
        items: [
          'அம்மீளாத திட்டங்கள்: உணவு பழக்கங்களை மேம்படுத்த தனிப்பயனாக்கிய ஊட்டசத்து ஆலோசனையும் உணவுப்பட்டியல்களையும் வழங்கவும்.',
          'உடற்பயிற்சி முறை: உங்கள் உடற்பயிற்சி அளவிற்கு மற்றும் குறிக்கோள்களுக்கு ஏற்ற உடற்பயிற்சி திட்டங்களை வடிவமைக்கவும்.'
        ]
      },
      {
        title: 'பொருத்து மாற்றம்',
        items: [
          'முடிவுசெய்தல்: உங்கள் முன்னேற்றத்திற்கு ஊக்கமளிக்கவும், பொறுப்பாற்றும் அளவுக்கு உதவவும்.',
          'அழகிய பழக்கங்களை உருவாக்க: ஆரோக்கியமான பழக்கங்களை உருவாக்கவும், ஆரோக்கியமற்றவற்றை உடைப்பதற்கு உதவவும்.'
        ]
      },
      {
        title: 'அதிகாரமாக்கல் மேலாண்மை',
        items: [
          'செயல்முறை: மனதை அமைதியாக்கல், தியானம் மற்றும் சாந்தி பயிற்சிகள் போன்ற நெருக்கடியை மேலாண்மை செய்யும் நுண்ணறிவுகளை கற்பிக்கவும்.'
        ]
      },
      {
        title: 'வாழ்க்கை முறை மேலாண்மை',
        items: [
          'நினைவு: உறக்கத்தின் தரத்தை மேம்படுத்தவும் மற்றும் உறக்கப் பிழைகளை மேலாண்மை செய்யும் திட்டங்களை வழங்கவும்.',
          'வேலை-வாழ்க்கை சமநிலை: வேலை, தனிப்பட்ட வாழ்க்கை மற்றும் சுய பராமரிப்பு இடையே சமநிலையை உருவாக்க உதவவும்.'
        ]
      },
      {
        title: 'கல்வி ஆதரவு',
        items: [
          'சிறந்த செயலிகள் மற்றும் வளங்கள்: பல்வேறு நலன்நிலை தலைப்புகளில் கல்வி ஆதரவு மற்றும் கருத்தரங்குகளை வழங்கவும்.'
        ]
      },
      {
        title: 'ஆரோக்கியம் கண்காணிப்பு',
        items: [
          'முன்னேற்ற கண்காணிப்பு: உங்கள் குறிக்கோள்களுக்கான முன்னேற்றத்தை கண்காணிக்கவும், திட்டங்களில் மாற்றங்களை செய்யவும்.',
          'பதிலளிப்பு: முறையாக முறைப்படுத்திய கருத்துக்களை வழங்கவும் மற்றும் முக்கியமான அம்சங்களை கொண்டாடவும்.'
        ]
      }
    ],
    benefitsTitle: 'ஒரு நலன்நிலை பயிற்சியாளர் உடன் வேலை செய்வதன் பயன்கள்',
    benefits: [
      'தனிப்பயன் ஆதரவு: உங்கள் தனிப்பட்ட தேவைகள் மற்றும் குறிக்கோள்களுக்கு அமைவாக தனிப்பயனாக்கிய கவனமும் ஆதரவும் பெறவும்.',
      'முழுமையான அணுகுமுறை: உடல், உணர்ச்சி மற்றும் மனநலன்களை அடிப்படையாகக் கொண்டு பல்வேறு நலன்நிலைகளை கையாளவும்.',
      'மூன்று உதவியை அதிகரிக்கவும்: உங்கள் ஆரோக்கிய குறிக்கோள்களுக்கு நிச்சயமாகவும், ஊக்கமளிக்கவும்.',
      'முடிவுசெய்தல் வாழ்க்கை: நீண்ட காலமாக மேம்படுத்தும் ஆரோக்கியமான பழக்கங்களை உருவாக்கவும்.',
      'தொழில்நுட்ப வழிகாட்டி: ஆரோக்கியம் மற்றும் நலன்நிலை தலைப்புகளில் தொழில்நுட்ப ஆலோசனையும் அறிவையும் அணுகவும்.'
    ],
    whenTitle: 'எப்போது ஒரு நலன்நிலை பயிற்சியாளரை பரிசீலிக்க வேண்டும்',
    when: [
      'புதிய ஆரோக்கிய பயணத்தை துவங்குதல்: புதிய உடற்பயிற்சி அல்லது உணவுப்பட்டியல்களைத் தொடங்கும் போது.',
      'வாழ்க்கை முறை மாற்றங்களை தேவைப்படுகிறது: மொத்த வாழ்க்கை முறையை மற்றும் நலன்நிலையை மேம்படுத்தும் போது.',
      'தீவிர நிலைகளை மேலாண்மை: வாழ்க்கை முறை மாற்றங்கள் மூலம் தீவிர ஆரோக்கிய நிலைகளை மேலாண்மை செய்ய ஆதரவை தேவைப்படும் போது.',
      'எதிர்ப்புகளை மீறுதல்: ஊக்கமளிக்க அல்லது நீண்ட கால மாற்றங்களை உருவாக்குவதில் சவால்களை எதிர்கொள்கின்ற போது.'
    ],
    conclusion: `ஒரு நலன்நிலை பயிற்சியாளர் உங்கள் ஆரோக்கியமான மற்றும் சமநிலையான வாழ்க்கைக்கான வழிகாட்டியில் முக்கிய பங்கு வகிக்கலாம், உங்கள் நலன்நிலை குறிக்கோள்களை அடைவதில் ஆதரவு மற்றும் நிபுணத்துவத்தை வழங்கலாம்.`
  }
};

const WellnessCoachOverview = () => {
  const [language, setLanguage] = useState('en');

  const handleLanguageChange = () => {
    setLanguage(language === 'en' ? 'ta' : 'en');
  };

  const { title, intro, rolesTitle, roles, benefitsTitle, benefits, whenTitle, when, conclusion } = translations[language];

  return (
    <div className={`max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg`}>
      <button 
        onClick={handleLanguageChange}
        className={`mb-4 p-2 bg-gray-200 text-gray-800 rounded`}
      >
        {language === 'en' ? 'Translate to Tamil' : 'Translate to English'}
      </button>

      {/* About Us Section */}
      <section className={`mb-8`}>
        <h2 className={`text-2xl font-bold mb-4`}>About Us</h2>
        <div className={`flex items-center space-x-4`}>
          <img 
            src="../../../public/mr1.png" 
            alt="User" 
            className="w-24 h-24 rounded-full object-cover"
          />
          <p className={`text-lg`}>
            We are dedicated to providing professional wellness coaching to help you achieve your health and wellness goals. Our team is committed to offering personalized support and expert guidance tailored to your unique needs.
          </p>
        </div>
      </section>

      <h1 className={`text-3xl font-bold mb-6`}>{title}</h1>
      <p className={`mb-6`}>{intro}</p>

      <h2 className={`text-2xl font-semibold mb-4`}>{rolesTitle}</h2>
      <ul className={`list-disc pl-6 space-y-4`}>
        {roles.map((role, index) => (
          <li key={index}>
            <h3 className={`text-xl font-semibold`}>{role.title}</h3>
            <ul className={`list-disc pl-6`}>
              {role.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      <h2 className={`text-2xl font-semibold mt-8 mb-4`}>{benefitsTitle}</h2>
      <ul className={`list-disc pl-6 space-y-4`}>
        {benefits.map((benefit, index) => (
          <li key={index}>{benefit}</li>
        ))}
      </ul>

      <h2 className={`text-2xl font-semibold mt-8 mb-4`}>{whenTitle}</h2>
      <ul className={`list-disc pl-6 space-y-4`}>
        {when.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <p className={`mt-6`}>{conclusion}</p>
    </div>
  );
};

export default WellnessCoachOverview;
