let timerInterval = null;

    function startTimer() {
      const hours = parseInt(document.getElementById('hours').value);
      const minutes = parseInt(document.getElementById('minutes').value);
      const seconds = parseInt(document.getElementById('seconds').value);
      console.log(hours, minutes, seconds);
      
      let totalSeconds = hours * 3600 + minutes * 60 + seconds;
        console.log(totalSeconds);    
      
      if (totalSeconds <= 0) {
        alert('Please enter a valid time');
        return;
      }

      timerInterval = setInterval(() => {
        const hoursLeft = Math.floor(totalSeconds / 3600);
        const minutesLeft = Math.floor((totalSeconds % 3600) / 60);
        const secondsLeft = totalSeconds % 60;

        document.getElementById('timer').textContent = `${hoursLeft.toString().padStart(2, '0')}:${minutesLeft.toString().padStart(2, '0')}:${secondsLeft.toString().padStart(2, '0')}`;

        if (totalSeconds <= 0) {
          clearInterval(timerInterval);
          document.getElementById('timer').textContent = 'Time\'s up!';
          document.getElementById('audio').play();
        } else {
          totalSeconds--;
        }
      }, 1000);
    }

    function stopTimer() {
      clearInterval(timerInterval);
      document.getElementById('timer').textContent = '';
    }

    document.getElementById('start-button').addEventListener('click', startTimer);
    document.getElementById('stop-button').addEventListener('click', stopTimer);