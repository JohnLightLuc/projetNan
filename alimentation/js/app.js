$(document).ready(function(){



    $("#ecrire").focus(function(){
      
    window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
    let finalTranscript = ''; 
    let recognition = new window.SpeechRecognition();
    recognition.interimResults = true;
    recognition.maxAlternatives = 10;
    recognition.continuous = true;
    recognition.onresult = (event) => {
      let interimTranscript = '';
      for (let i = event.resultIndex, len = event.results.length; i < len; i++) {
        let transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          finalTranscript += transcript;
        } else {
          interimTranscript += transcript;
        }
      }
      $("").interimTranscript += transcript;;
    }
    recognition.start();


    });

    $(".card-img-top").hover(function(){
        $(this).background-size= cover;
        $(this).width= 300px;
        $(this).height: 200px;
        
    });

    











  }); 