class SleepQualityBarChart {
    constructor(ctx, data) {
        this.ctx = ctx;

        console.log("Hello");
        this.chart = new Chart(this.ctx, {
            type: 'bar',
            data: data,
            options: this.chartOptions
        });
    }

    update(newData) {
        this.chart.data = newData;
        this.chart.update();
    }

    // Other methods...

    chartOptions = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };
}

// Export both classes for use in other scripts
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = SleepQualityBarChart;
} else {
    window.SleepQualityBarChart = SleepQualityBarChart;
}
