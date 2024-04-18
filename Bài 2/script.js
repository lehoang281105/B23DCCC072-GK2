document.addEventListener("DOMContentLoaded", function() {
    const minutesInput = document.querySelector("#minutes");
    const secondsInput = document.querySelector("#seconds");
    const startBtn = document.querySelector("#start");
    const resetBtn = document.querySelector("#reset");
    const timerDisplay = document.querySelector("#timer");
    const audio = new Audio("/Bài 2/assets/Bao Thuc iPhone 6.mp3"); // Thay đường dẫn tới file âm thanh của bạn
    
    let countdown;
    
    function startTimer() {
        const minutes = parseInt(minutesInput.value);
        const seconds = parseInt(secondsInput.value);
        let totalSeconds = minutes * 60 + seconds;
        
        function updateTimer() {
            const minutesLeft = Math.floor(totalSeconds / 60);
            const secondsLeft = totalSeconds % 60;
            
            timerDisplay.textContent = `${minutesLeft.toString().padStart(2, "0")}:${secondsLeft.toString().padStart(2, "0")}`;
            
            if (totalSeconds <= 0) {
                timerDisplay.textContent = "00:00";
                repeatSound(); // Phát lại âm thanh khi hết giờ
            } else {
                totalSeconds--;
                countdown = setTimeout(updateTimer, 1000); // Gọi lại hàm sau mỗi giây
            }
        }
        
        updateTimer();
    }
    
    function resetTimer() {
        clearTimeout(countdown); // Dừng đếm ngược
        timerDisplay.textContent = "00:00";
        audio.pause(); // Dừng âm thanh khi reset
        audio.currentTime = 0; // Đặt lại thời gian của âm thanh về 0 để phát lại từ đầu khi bắt đầu lại
    }
    
    function repeatSound() {
        audio.loop = true; 
        audio.play(); 
    }
    
    startBtn.addEventListener("click", startTimer);
    resetBtn.addEventListener("click", resetTimer);
});
