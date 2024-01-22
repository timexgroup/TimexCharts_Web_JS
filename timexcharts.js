const TimeInterval = {
    ONE_SECOND: 86400,
    ONE_MINUTE: 1440,
    FIVE_MINUTES: 288,
    TEN_MINUTES: 144,
    FIFTEEN_MINUTES: 96,
    TWENTY_MINUTES: 72,
    THIRTY_MINUTES: 48,
    ONE_HOUR: 24,
};

const TimeDisplayFormat = {
    USE_12HR_FORMAT: 0,
    USE_24HR_FORMAT: 1,
    USE_SYSTEM_FORMAT: 2,
};

class StepCountBarChart {
    constructor(ctx, data) {
        this.ctx = ctx;

        console.log("Hello");
        console.log(TimeInterval.ONE_MINUTE);
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
    module.exports = { TimeInterval, TimeDisplayFormat, StepCountBarChart, SleepQualityBarChart };
} else {
    window.TimeInterval = TimeInterval;
    window.TimeDisplayFormat = TimeDisplayFormat;
    window.StepCountBarChart = StepCountBarChart;
    window.SleepQualityBarChart = SleepQualityBarChart;
}
