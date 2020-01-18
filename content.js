var labels = document.getElementsByTagName('label');
var output_labels=[]

for (let i = 0, l = labels.length; i < l; i++) {
  output_labels[i] = labels[i].innerText;
}

// TODOs : Have the original labels stored such that we dont need to hit
// APIs while toggling between languages.

$.ajax({
  url: "https://hackapi.reverieinc.com/nmt",
  headers: { 
    'Content-Type':'application/json',
    'token': '106c1c674bd9b81ece4194667167f68ba46fbe03'
  },
  method: 'POST',
  dataType: 'json',
  "data": JSON.stringify({
    "data" : output_labels,
    "tgt" : "hi",
    "src" : "en"
  }),
  success: function(res){
    console.log(res.data.result.flat(1));
    var translatedLabels = res.data.result.flat(1);
    for (let i = 0, l = labels.length; i < l; i++) {
      labels[i].innerText = translatedLabels[i];
    }
    console.log(labels);
  }
});

