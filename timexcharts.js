class StepCountBarChart {
    constructor(ctx, data) {
        this.ctx = ctx;

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

class SleepQualityBarChart {
    constructor(ctx, data) {
        this.ctx = ctx;

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
    module.exports = { StepCountBarChart, SleepQualityBarChart };
} else {
    window.StepCountBarChart = StepCountBarChart;
    window.SleepQualityBarChart = SleepQualityBarChart;
}
