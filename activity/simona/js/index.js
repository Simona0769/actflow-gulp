(function() {
    // FastClick.attach(document.body);
	    //do your thing.

	 let awaitFunc = async (progress, api, param) => {
	 	this.setState({progressPercent: progress})
	 	const res = await postData(api, !!param? param : '')
	 	return res
	 }
	 
	 let param = this.state.page.toJS();
	 let pageName = param.name;

	 awaitFunc(5, WRITE_API, param).then((res) => {
	 	if (res.data.state !== 0) {
	 		this.errorFunc(res.data.msg);
	 	} else {
	 		eventSourceFun();
	 	}
	 })
})();