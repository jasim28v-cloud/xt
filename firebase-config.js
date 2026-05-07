// ✨ CRYSTAL SPHERE - Configuration
const firebaseConfig = {
    apiKey: "AIzaSyASIOfZgoPfKFsk5Tto-4Erkkh4XoN26nc",
    authDomain: "some-d8f18.firebaseapp.com",
    databaseURL: "https://some-d8f18-default-rtdb.firebaseio.com",
    projectId: "some-d8f18",
    storageBucket: "some-d8f18.firebasestorage.app",
    messagingSenderId: "720303687414",
    appId: "1:720303687414:web:3dbb5bb3eefe4aa89c8ed7",
    measurementId: "G-36MDY5ZJBZ"
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.database();
const CLOUD_NAME = "dtugqcpam";
const UPLOAD_PRESET = "so_6km";
const ADMIN_EMAILS = ['jasim28v@gmail.com'];
const DICEBEAR_URL = "https://api.dicebear.com/7.x/bottts-neutral/svg";
const COVER_COLORS = [
    "linear-gradient(135deg, #667eea, #764ba2)",
    "linear-gradient(135deg, #f093fb, #f5576c)",
    "linear-gradient(135deg, #4facfe, #00f2fe)",
    "linear-gradient(135deg, #43e97b, #38f9d7)",
    "linear-gradient(135deg, #fa709a, #fee140)",
    "linear-gradient(135deg, #a18cd1, #fbc2eb)",
    "linear-gradient(135deg, #fccb90, #d57eeb)",
    "linear-gradient(135deg, #e0c3fc, #8ec5fc)",
    "linear-gradient(135deg, #f5576c, #ff6b6b)",
    "linear-gradient(135deg, #667eea, #48c6ef)"
];
const APP_NAME = "CRYSTAL SPHERE";
const APP_VERSION = "2.0.0";
console.log('✨ %c'+APP_NAME+' v'+APP_VERSION+' Ready', 'color: #667eea; font-size: 16px; font-weight: bold;');
