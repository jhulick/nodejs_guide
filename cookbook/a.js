var sys = require("sys"),
st = process.openStdin();

st.addListener("data", function(d) {
	var output = "Square of " + d + " is " + d * d;
	sys.puts(output);
	process.exit(0);
}).addListener("end", function() {});

sys.print('> Enter a number ');
