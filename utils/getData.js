function getData(params) {
 wx.request({
      url: 'https://raw.githubusercontent.com/wendy81/Learn-English-By-Picture/master/pages/data/data.json',
      success: res => {
      	console.log(res.data);
        params.setData({images: res.data});
      }
  });
}

exports.getData = getData;