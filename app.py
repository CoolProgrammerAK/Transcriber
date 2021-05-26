from flask import Flask, redirect, url_for, render_template, request
import speech_recognition as sr
import pyttsx3

app = Flask(__name__)

def speak(text):
            engine = pyttsx3.init()
            engine.setProperty('volume',.8)
            engine.setProperty('rate',125)
            voices = engine.getProperty('voices')
            engine.setProperty('voice', voices[1].id)
            engine.say(text)
             
            engine.runAndWait()

@app.route('/', methods=['GET', 'POST'])
def home():
    transcript = ''
    errors = ''
    if request.method == 'POST':
        if "file" in request.files:

            file = request.files["file"]

            if file:
                recognizer = sr.Recognizer()
                audioFile = sr.AudioFile(file)
                with audioFile as source:
                    data = recognizer.record(source)
                try:
                    transcript = recognizer.recognize_google(
                        data, language='en-IN')

                except Exception as e:

                    errors = "File can't be processed"
            
            return render_template('index.html', transcript=transcript, error=errors)
        else:
            speak(request.form["text"])
            return render_template('index.html', transcript=transcript, error=errors)
    
             
    return render_template('index.html', transcript=transcript, error=errors)


if __name__ == '__main__':
    # DEBUG is SET to TRUE. CHANGE FOR PROD
    app.run()
