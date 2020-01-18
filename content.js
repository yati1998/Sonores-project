var labels = document.getElementsByTagName('label');
var output_labels=[]

for (var i = 0, l = labels.length; i < l; i++) {
  output_labels[i] = labels[i].innerText;
}
console.log(labels)
console.log(output_labels)

