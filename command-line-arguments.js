// To print all command line arguments:
// console.log(process.argv);

var sum = 0;
for (var i = 2; i < process.argv.length; i++)
{
	// Or sum += Number(process.argv[i])
	sum += +process.argv[i];
}
 
console.log(sum);
