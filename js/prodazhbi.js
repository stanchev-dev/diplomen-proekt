document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('salesChart');

    if (!canvas) {
        return;
    }

    const ctx = canvas.getContext('2d');

    const labels = ['Ян', 'Фев', 'Мар', 'Апр', 'Май', 'Юни', 'Юли', 'Авг', 'Сеп', 'Окт', 'Ное', 'Дек'];
    const values = [95, 110, 128, 136, 150, 165, 190, 182, 170, 156, 144, 104];

    const width = canvas.width;
    const height = canvas.height;

    const paddingLeft = 60;
    const paddingRight = 30;
    const paddingTop = 30;
    const paddingBottom = 60;

    const chartWidth = width - paddingLeft - paddingRight;
    const chartHeight = height - paddingTop - paddingBottom;

    const maxValue = 200;
    const stepY = 50;

    ctx.clearRect(0, 0, width, height);

    ctx.fillStyle = '#16202a';
    ctx.font = '16px Arial';
    ctx.fillText('Брой продажби', paddingLeft, 20);

    ctx.strokeStyle = '#d7e1ea';
    ctx.lineWidth = 1;

    for (let y = 0; y <= maxValue; y += stepY) {
        const yPos = paddingTop + chartHeight - (y / maxValue) * chartHeight;

        ctx.beginPath();
        ctx.moveTo(paddingLeft, yPos);
        ctx.lineTo(width - paddingRight, yPos);
        ctx.stroke();

        ctx.fillStyle = '#4d5b68';
        ctx.font = '13px Arial';
        ctx.fillText(y.toString(), 20, yPos + 4);
    }

    ctx.strokeStyle = '#16202a';
    ctx.lineWidth = 2;

    ctx.beginPath();
    ctx.moveTo(paddingLeft, paddingTop);
    ctx.lineTo(paddingLeft, height - paddingBottom);
    ctx.lineTo(width - paddingRight, height - paddingBottom);
    ctx.stroke();

    const barWidth = chartWidth / values.length * 0.58;
    const gap = chartWidth / values.length;

    values.forEach((value, index) => {
        const x = paddingLeft + index * gap + (gap - barWidth) / 2;
        const barHeight = (value / maxValue) * chartHeight;
        const y = paddingTop + chartHeight - barHeight;

        ctx.fillStyle = '#0f4c81';
        ctx.fillRect(x, y, barWidth, barHeight);

        ctx.fillStyle = '#16202a';
        ctx.font = '12px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(labels[index], x + barWidth / 2, height - 30);
        ctx.fillText(value.toString(), x + barWidth / 2, y - 8);
    });

    ctx.textAlign = 'start';
});