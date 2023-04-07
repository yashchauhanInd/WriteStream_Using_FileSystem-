var filesystem=require('fs');
var data_to_write='Madara is god shinobi';
var stream=filesystem.createWriteStream("uchiha.txt");
stream.write(data_to_write,'utf-8');
stream.end();
stream.on('finished',function(){
console.log("Data_written");
});
console.log("stream closed and data written");