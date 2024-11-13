document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 60, // adjust for the navbar height
            behavior: 'smooth'
// FAFSA Completion Chart
const fafsaCtx = document.getElementById('fafsaChart').getContext('2d');
const fafsaChart = new Chart(fafsaCtx, {
    type: 'doughnut',
    data: {
        labels: ['Completed', 'Incomplete'],
        datasets: [{
            data: [0, 100], // No progress
            backgroundColor: ['#4CAF50', '#e0e0e0'],
            hoverBackgroundColor: ['#66bb6a', '#e0e0e0']
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '70%',
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return tooltipItem.label + ': ' + tooltipItem.raw + '%';
                    }
                }
            }
        }
    }
});

google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawCharts);

function drawCharts() {
    // FAFSA Completion Chart
    const fafsaData = google.visualization.arrayToDataTable([
        ['Status', 'Percentage'],
        ['Completed', 0],
        ['Not Completed', 100]
    ]);

    const fafsaOptions = {
        title: 'FAFSA Completion',
        pieHole: 0.4,
        colors: ['#4caf50', '#ddd']
    };

    const fafsaChart = new google.visualization.PieChart(document.getElementById('fafsa_chart'));
    fafsaChart.draw(fafsaData, fafsaOptions);

    // College Application Completion Chart
    const collegeAppData = google.visualization.arrayToDataTable([
        ['Status', 'Percentage'],
        ['Completed', 82],
        ['Not Completed', 18]
    ]);

    const collegeAppOptions = {
        title: 'College Application Completion',
        pieHole: 0.4,
        colors: ['#4caf50', '#ddd']
    };

    const collegeAppChart = new google.visualization.PieChart(document.getElementById('college_app_chart'));
    collegeAppChart.draw(collegeAppData, collegeAppOptions);
}
});
