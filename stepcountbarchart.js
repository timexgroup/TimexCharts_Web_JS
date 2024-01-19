const { TimeDisplayFormat } = require('./timedisplayformat');

class StepCountBarChart {
    constructor(ctx, data) {
        this.ctx = ctx;

        console.log("Hello");
        console.log(TimeDisplayFormat.USE_24HR_FORMAT);
        
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

// Export StepCountBarChart
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = StepCountBarChart;
} else {
    window.StepCountBarChart = StepCountBarChart;
}
