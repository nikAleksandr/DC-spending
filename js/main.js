// if I want the whole dataset...
//// https://openspending.org/api/2/aggregate?format=xml&dataset=dc-vendors-contractors&drilldown=time.week&pagesize=100&order=amount:desc

var url = 'https://openspending.org/api/2/aggregate';

var params = {
	format: 'xml',
	dataset: 'dc-vendors-contractors',
	drilldown: 'time.week',
	pagesize: 100,
	order: 'amount:desc'
};

function callback(data) {
	// do things here
	console.log(data);
}

$.get(url, params, callback);
