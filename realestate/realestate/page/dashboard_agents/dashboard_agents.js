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
		let body='<h1>Hellow there</h1>'

		//push dom elements to page
		$(frappe.render_template(body, this)).appendTo(this.page.main)
	}
// end of class
})
/*
let body='<h1>I am here</h1>';
let frappe.realestate_app_body{
	body: body
}
*/


	