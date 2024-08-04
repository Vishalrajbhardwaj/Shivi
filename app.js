const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

// Function to speak text
function speak(text) {
    const textSpeak = new SpeechSynthesisUtterance(text);
    const allVoices = speechSynthesis.getVoices();
    textSpeak.rate = 0.8;
    textSpeak.volume = 1;
    textSpeak.pitch = 1;
    textSpeak.voice = allVoices[6];
    window.speechSynthesis.speak(textSpeak);
}

// Function to wish the user
function wishMe() {
    const day = new Date();
    const hour = day.getHours();

    if (hour >= 0 && hour < 12) {
        speak("Good Morning Boss...");
    } else if (hour > 12 && hour < 17) {
        speak("Good Afternoon Master...");
    } else {
        speak("Good Evening Sir...");
    }
}

// Event listener for window load
window.addEventListener('load', () => {
    speak("Initializing SHIVI..");
    wishMe();
});

// Initialize SpeechRecognition
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

// Event listener for speech recognition results
recognition.onresult = (event) => {
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());
};

// Event listener for button click
btn.addEventListener('click', () => {
    content.textContent = "Listening....";
    recognition.start();
});

// Function to take command from user
function takeCommand(message) {
    if (message.includes('hey') || message.includes('hello')) {
        speak("Hello Sir, How May I Help You?");
    } else if (message.includes("open google")) {
        window.open("https://google.com", "_blank");
        speak("Opening Google...");
    } else if (message.includes("open youtube")) {
        window.open("https://youtube.com", "_blank");
        speak("Opening Youtube...");
    } else if (message.includes("open facebook")) {
        window.open("https://facebook.com", "_blank");
        speak("Opening Facebook...");
    }
    else if (message.includes("open whatsapp")) {
        window.open("https://web.whatsapp.com/", "_blank");
        speak("Opening Whatsapp boss...");
    }
    else if (message.includes("tell me about yourself") || message.includes("tell me about")) {
        speak("sir, i am a SHIVI: Smart Humanistic Interface Virtual Intelligence, a voice asistant made for browsers using javascript by vishal Raj Bhardwaj. I can do anything which can be done from a browser.");
    }
    else if (message.includes("will you marry me") || message.includes("Vil u Mary MI")) {
        speak("yes ofcourse sir , i am ready to marry with you.");
    }
    else if (message.includes("i love u") || message.includes("i love") || message.includes("love u")) {
        speak("Sorry sir i am a humanoid robot , i have no feeling sir , i am here to assist you, anything else sir");
    }

    else if (message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what I found on the internet regarding " + message;
        speak(finalText);
    }

    else if (message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "This is what I found on Wikipedia regarding " + message;
        speak(finalText);
    }

    else if (message.includes('time')) {
        const time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
        const finalText = time;
        speak(finalText);
    }

    else if (message.includes('date')) {
        const date = new Date().toLocaleString(undefined, { month: "short", day: "numeric" });
        const finalText = date;
        speak(finalText);
    }

    else if (message.includes('day')) {
        const day = new Date().toLocaleString(undefined, { weekday: "long" });
        const finalText = day;
        speak(finalText);
    }

    else if (message.includes('calculator')) {
        window.open('Calculator:///');
        const finalText = "Opening Calculator";
        speak(finalText);
    }

    else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on Google";
        speak(finalText);
    }
}