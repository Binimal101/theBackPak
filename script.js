function updatePostureStatus(posture) {
    const postureMessage = document.getElementById('postureMessage');
    const postureContainer = document.getElementById('postureContainer');

    switch(posture) {
        case 'good':
            postureMessage.textContent = "Good Posture!";
            postureContainer.className = 'green';
            break;
        case 'bad':
            postureMessage.textContent = "Bad Posture! Please adjust your position.";
            postureContainer.className = 'red';
            break;
        default:
            postureMessage.textContent = "Monitoring your posture...";
            postureContainer.className = ''; 
    }
}
    
setInterval(() => {
    const postures = ['good', 'bad'];
    const randomPosture = postures[Math.floor(Math.random() * postures.length)];
    updatePostureStatus(randomPosture);
}, 3000);