frappe.pages['kerala-real-estate'].on_page_load = function(wrapper) {
	

	MyDeskPageObj=new deskpage(wrapper)
	MyDeskPageObj.page=frappe.ui.make_app_page({
		parent: wrapper,
		title: 'Kerala Real Estate',
		single_column: true
	});
	MyDeskPageObj.buildPage()
	//MyDeskPageObj.getNumberofAgents();
}


class deskpage
{

	getNumberofAgents=	function(){

		frappe.call({
			method: "realestate.realestate.page.kerala_real_estate.kerala_real_estate.getNumberofAgents", //dotted path to server method
			callback: function(r) {
				console.log(r.message)
                $('#Agent-count')[0].innerHTML=r.message
			}
		});
	}

	buildPage()
	{ 

	this.getNumberofAgents()
     	
	
	let body=``;
	
	
	$(frappe.render_template('agents', {data:'Hi message'})).appendTo( this.page.main );	
	

}




}

