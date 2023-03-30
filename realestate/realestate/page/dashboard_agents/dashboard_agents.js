
frappe.pages['dashboard-agents'].on_page_load = function(wrapper) {

	new MyPage(wrapper);
	

}
// Page content
MyPage=Class.extend({
	init: function(wrapper){
		this.page = frappe.ui.make_app_page({
			parent: wrapper,
			title: __('Agent Dashboard'),
			single_column: true
		});
		//make page
		this.make();
     
	},

	make: function(){
		//grab class
		let me=$(this);

		//body
		//let body='<h1>Hellow there</h1><div id="Chart">test</div>'

		//push dom elements to page
		$(frappe.render_template('dashboard_agents',{})).appendTo(this.page.main)
 
		 propertyStatistics()
		

		
         
	}
// end of class
})

function propertyStatistics()
{
	getTotalPropertyCountByAgent()

}

// All statistics funcitons here below
function getTotalPropertyCountByAgent()
{


	frappe.call('realestate.realestate.page.dashboard_agents.dashboard_agents.getTotalPropertyCountByAgent')
    .then(r => {
        console.log(r)
		
        $('#property-count').append(r.message)
    })
	
}


	