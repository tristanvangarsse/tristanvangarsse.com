function detectPowerSaveMode() {
    let frameCount = 0;
    const startTime = performance.now();

    function checkFrameRate() {
        frameCount++;
        const elapsedTime = performance.now() - startTime;

        // After 1 second of measurement
        if (elapsedTime >= 1000) {
            const frameRate = frameCount / (elapsedTime / 1000);
            console.log(`Frame rate detected: ${frameRate} FPS`);

            // Assume Low Power Mode if frame rate is less than 50 FPS
            if (frameRate < 50) {
                document.getElementById('power-saver').style.display = 'none';
            }
        } else {
            requestAnimationFrame(checkFrameRate);
        }
    }

    requestAnimationFrame(checkFrameRate);
}

// Start detection on page load
detectPowerSaveMode();
