// Получаем доступ к видео-элементу в HTML
const video = document.createElement('video');
const divForResult = document.getElementById('result'); // Див для вывода результата

// Определяем, какой источник использовать (камера)



document.getElementById('startButton').addEventListener('click', async function() {
    try {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(function(stream) {
                video.srcObject = stream;
                video.play();
            })
            .catch(function(err) {
                console.log("Ошибка: " + err);
            });

// Отображаем результат в диве
        video.addEventListener('play', function() {
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            setInterval(function() {
                context.drawImage(video, 0, 0, 640, 480);
                const imageData = canvas.toDataURL('image/png');
                divForResult.innerHTML = '<img src="' +  imageData + '"  alt="">';
            }, 1000 / 30); // Обновляем изображение каждую 30-ю часть секунды
        });

    } catch (error) {
        console.error('Ошибка при получении доступа к камере:', error);
    }
});
