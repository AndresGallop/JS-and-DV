//First chart - A polarArea chart

new Chart(document.getElementById('polarchart'), {
	type: 'polarArea',
	data: {
		labels: ['Canada', 'Finland', 'Germany', 'United States', 'Norway', 'Austria', 'Switzerland', 'Sweden', 'Soviet Union', 'Russia' ],
		datasets: [{
			label: 'Amount of medals',
			data: [ 625,434,452,648,453,272,285,433,440,263],
			backgroundColor: [
			       'rgba(255, 87, 51, 0.2)',
			       'rgba(255, 193, 51, 0.2)',
			       'rgba(150, 255, 51, 0.2)',
			       'rgba(59, 243, 145, 0.2)',
			       'rgba(38, 225, 234, 0.2)',
			       'rgba(32, 137, 236, 0.2)',
			       'rgba(147, 32, 236, 0.2)',
			       'rgba(236, 32, 212, 0.2)',
			       'rgba(229, 56, 56, 0.2)',
			       'rgba(148, 169, 11, 0.2)'
			],
			borderColor: [
			       'rgba(255, 87, 51, 1)',
			       'rgba(255, 193, 51, 1)',
			       'rgba(150, 255, 51, 1)',
			       'rgba(59, 243, 145, 1)',
			       'rgba(38, 225, 234, 1)',
			       'rgba(32, 137, 236, 1)',
			       'rgba(147, 32, 236, 1)',
			       'rgba(236, 32, 212, 1)',
			       'rgba(229, 56, 56, 1)',
			       'rgba(148, 169, 11, 1)'
			],
			borderwidth: 0
		}]
	},
	options: {
		animation: {
			duration: '3000'
		}
	}
});

//Second chart - Horizontal bar chart

var updatingChart = new Chart(document.getElementById('barchart'), {
	type: 'horizontalBar',
	data: {
		labels: ['Vladimir', 'Thomas', 'Aleksandr', 'Viktor', 'Sergei'],
		datasets:[{
			label: 'The best athletes',
			backgroundColor: ['#BF6511', '#6BBF11', '#11BF72', '#560E99', '#45A38C'],
			data: [0,0,0,0,0,0]
		}]
	},
	options: {
		legend: {
			display: true
		},
		title: {
			display: true,
			text: 'Amount of medals each athlete has'
		}
	}



});

function addData(chart, label, data, background) {
	chart.data.labels.push(label);
	chart.data.datasets[0].data.push(data);
	chart.data.datasets[0].backgroundColor.push(backgroundColor);
	chart.update();
}

function updateAllData(chart, data) {
	chart.data.datasets[0].data = data;
	chart.update();
}

setTimeout(function () {
	updateAllData(updatingChart, [59,46,40,18,15,0]);
},1000)

// Third Chart - Pie chart

new Chart(document.getElementById('piechart'), {
	type:'pie',
	data: {
		labels: ['Women','Men'],
		datasets: [
		{
			data:[3915,1826],
			backgroundColor: ['#23A4D4', '#D42371']

		}
	  ]
	},
	options: {
		title: {
			display: true,
			text: 'Global amount of medals by gender'
		}

	}


});

new Chart(document.getElementById('linechart'), {
	type: 'line',
	data: {
		labels: ['1924', '1928', '1932', '1936', '1948', '1952', '1956', '1960', '1964', '1968', '1972', '1976', '1980', '1984', '1988', '1992', '1994', '1998', '2002', '2006', '2010', '2014'],
		datasets: [
		{
			label: 'United States',
			data: ['12', '14', '45', '16', '16', '30', '26', '27', '8', '7', '25', '11', '30', '9', '7', '14', '21', '34', '84', '56', '93', '65'],
			backgroundColor: 'rgba(147, 32, 236, 0.5)'
		},
		{
			label: 'Canada',
			data:['9', '12', '20', '13', '20', '17', '20', '21', '7', '20', '1', '3', '2', '3', '6', '37', '40', '49', '75', '68', '91', '90'],
			backgroundColor: 'rgba(255, 193, 51, 0.5)'
		}
	  ]
	}
})
