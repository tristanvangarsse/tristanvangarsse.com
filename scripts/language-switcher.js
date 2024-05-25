const translations = {
    en: {
        mobnav1: "Work",
        mobnav2: "Contact",
        mobnav3: "Events",
        nav1: "Work",
        nav2: "Contact",
        nav3: "Events",
        heading1: "Own a business?",
        heading2: "You need a website.",
        collab1: "Collaboration.",
        collab2: "I collaborate with ambitious people.",
        collab3: "Let's grow your business together.",
    },
    nl: {
        mobnav1: "Werk",
        mobnav2: "Contact",
        mobnav3: "Evenementen",
        nav1: "Werk",
        nav2: "Contact",
        nav3: "Evenementen",
        heading1: "Ondernemer?",
        heading2: "Jij hebt een website nodig.",
        collab1: "Samenwerking.",
        collab2: "Ik werk samen met ambitieuze mensen.",
        collab3: "Laten we samen jouw bedrijf ontwikkelen."

    },
    fr: {
        mobnav1: "Travail",
        mobnav2: "Contact",
        mobnav3: "Événements",
        nav1: "Travail",
        nav2: "Contact",
        nav3: "Événements",
        heading1: "Enterpreneur?",
        heading2: "Un site web pour vous.",
        collab1: "Collaboration.",
        collab2: "Je collabore avec des personnes ambitieuses.",
        collab3:  "Développons ensemble votre entreprise."
    }
};

function changeLanguage() {
    const language = document.getElementById('language').value;
    document.getElementById('mobnav1').innerText = translations[language].mobnav1;
    document.getElementById('mobnav2').innerText = translations[language].mobnav2;
    document.getElementById('mobnav3').innerText = translations[language].mobnav3;
    document.getElementById('nav1').innerText = translations[language].nav1;
    document.getElementById('nav2').innerText = translations[language].nav2;
    document.getElementById('nav3').innerText = translations[language].nav3;
    document.getElementById('collab1').innerText = translations[language].collab1;
    document.getElementById('collab2').innerText = translations[language].collab2;
    document.getElementById('collab3').innerText = translations[language].collab3;
    document.getElementById('heading1').innerText = translations[language].heading1;
    document.getElementById('heading2').innerText = translations[language].heading2;
}

// Set default language to English on page load
window.onload = function() {
    changeLanguage();
};