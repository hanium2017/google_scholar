
/*
const axios = require('axios')

axios({
  method:'get',
  url:'http://www.naver.com',
  responseType:'document'
})
.then((response)=> {
  console.log('==============================')
  console.log(response.data);
});
*/

const client = require('cheerio-httpcli')
let data = {
  q : "데이터베이스 시스템"
}

client.fetch('http://www.google.com/search', data, function (err, $, res, body) {
  console.log(res.headers)
  let result_list = $('#gs_ccl_results');
  result_list.each((a,b,c,d,e)=>{
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(e);

  })
  console.log(result_list.html())
})



