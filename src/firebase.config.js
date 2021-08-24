import firebase from 'firebase'
import FIREBASE_AUTH from './firebase.auth';

var firebaseConfig = {
    apiKey: FIREBASE_AUTH.apiKey,
    authDomain: FIREBASE_AUTH.authDomain,
    projectId: FIREBASE_AUTH.projectId,
    storageBucket: FIREBASE_AUTH.storageBucket,
    messagingSenderId: FIREBASE_AUTH.messagingSenderId,
    appId: FIREBASE_AUTH.appId
};

firebase.initializeApp(firebaseConfig);
let database = firebase.firestore();

let isWritten = false;
let doWrite = false;

if(doWrite && !isWritten)
{
    console.log("IMPORTING FIREBASE DATA")
    const projectTemplate = (title, description, images, source, tags, enabled, sort) => {
        return {
            "title": title,
            "description": description,
            "images": images,
            "source": source,
            "tags": tags,
            "enabled": enabled,
            "sort": sort
        }
    }

    let projects = [
        {
            "id": "boum93",
            "data": projectTemplate(
                "BOUM93 Portfolio",
                "Mijn portfolio gemaakt met behulp van React en Firebase.",
                [ "https://i.imgur.com/atnzRNd.png" ],
                "https://github.com/thebma/boum93",
                [ "React", "Firebase", "HTML", "CSS" ],
                true, 0
            )
        },
        {
            "id": "utt",
            "data": projectTemplate(
                "Ultimate Tic Tac Toe Bot",
                "Een kunstmatige intelligentie om een speciale versie van tic tac toe te spelen (via https://www.codingame.com/multiplayer/bot-programming/tic-tac-toe).",
                [ "https://i.imgur.com/qMCvZAH.png" ],
                "https://github.com/thebma/boum93-projects/tree/main/UltimateTicTacToeBot",
                [ "C/C++", "AI" ],
                true, 1
            )
        },
        {
            "id": "cot",
            "data": projectTemplate(
                "Campus of Tanks",
                "Een browser spel waar je je vrienden kunt neer knallen!",
                [ "https://i.imgur.com/k1wv4VD.png" ],
                "https://github.com/thebma/boum93-projects/tree/main/CampusOfTanks",
                [ "Javascript", "C#", "Netwerk", "HTML", "CSS"],
                true, 3
            )
        },
        {
            "id": "sak",
            "data": projectTemplate(
                "Slimme Alarm Klok",
                "Een Arduino project om een slimme wekker te maken op basis van je dag indeling, inclusief telefoon app. Nee, het is geen bom.",
                [ "https://i.imgur.com/Nw1spk5.png" ],
                "https://github.com/thebma/boum93-projects/tree/main/SmartAlarmClock",
                [ "C/C++", "Arduino", "Xamarin", "WPF" ],
                true, 2
            )
        },
        {
            "id": "toetsenmaker",
            "data": projectTemplate(
                "Toetsen Maker",
                "Een platform voor leraren om toetsen op te stellen en om deze voor hun leerlingen af te nemen.",
                [ "https://i.imgur.com/6W1jCpk.png" ],
                "https://github.com/thebma/boum93-projects/tree/main/Toetsenmaker",
                [ "PHP", "Phalcon", "MVC" ],
                true, 4
            )
        },
        {
            "id": "million",
            "data": projectTemplate(
                "Million-Store",
                "Million-Store is een website op basis van magento met een eigen frontend (thema) en aantal modules.",
                [ "https://i.imgur.com/H6f1ZJ0.png" ],
                "https://github.com/thebma/boum93-projects/tree/main/MillionStore",
                [ "PHP", "Magento", "NGINX", "Webshop", "LESS" ],
                true, 6
            )
        },
        {
            "id": "hb",
            "data": projectTemplate(
                "Hebberige Bruiden",
                "Hebberige Bruiden is een applicatie om gezamelijk een schenkingen voor een bruiloft te organizeren.",
                [ "https://i.imgur.com/rKV4giK.png" ],
                "https://github.com/thebma/boum93-projects/tree/main/HebberigeBruiden",
                [ "C#", "ASP.net", "MVC", "HTML", "CSS", "LESS"],
                true, 5
            )
        },
        {
            "id": "hp",
            "data": projectTemplate(
                "Harry Potter",
                "Volg mee met de lessen op Hogwarts, deze website geeft je de mogelijheid om dit the doen.",
                [ "https://i.imgur.com/86PauJP.png" ],
                "https://github.com/thebma/boum93-projects/tree/main/HarryPotter",
                [ "C#", "ASP.net", "MVC", "HTML", "CSS"],
                true, 7
            )
        },
    ]
    
    projects.forEach(proj => {
        database.collection("projects").doc(proj.id).set(proj.data)
    });

    isWritten = true;
}

export default database;