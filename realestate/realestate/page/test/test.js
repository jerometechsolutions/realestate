frappe.pages['test'].on_page_load = function(wrapper) {
	
	
	MyAgentObj=new MyAgent(wrapper);
	MyAgentObj.page= frappe.ui.make_app_page({
		parent: wrapper,
		title: 'Test',
		single_column: true
	});
	
	MyAgentObj.make()
}


class MyAgent
{



	make() {
        let TotalAgents=function(){

			frappe.call({
				method: "realestate.realestate.page.test.test.get_total_no_properties", //dotted path to server method
				callback: function(r) {
					console.log(r.message)
			
                    $('#Agent-count')[0].innerHTML=r.message
				}
			});

		}
		// execute methods
		TotalAgents()

		let body=`<div class="widget-group ">
		<div class="widget-group-head">
			
			<div class="widget-group-control"></div>
		</div>
		<div class="widget-group-body grid-col-3"><div class="widget number-widget-box" data-widget-name="Total Declaration Submitted">
	<div class="widget-head">
		<div class="widget-label">
			<div class="widget-title"><div class="number-label">Total Declaration Submitted</div></div>
			<div class="widget-subtitle"></div>
		</div>
		<div class="widget-control"><div class="card-actions dropdown pull-right">
		<a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		...
		</a>
		<ul class="dropdown-menu" style="max-height: 300px; overflow-y: auto;">
			<li class="dropdown-item">
							<a data-action="action-refresh">Refresh</a>
						</li><li class="dropdown-item">
							<a data-action="action-edit">Edit</a>
						</li>
		</ul>
	</div></div>
	</div>
	<div class="widget-body"><div class="widget-content">
		<div class="number" style="color:undefined" id="Agent-count"></div>
		</div></div>
	<div class="widget-footer"></div>
</div><div class="widget number-widget-box" data-widget-name="Total Salary Structure">
	<div class="widget-head">
		<div class="widget-label">
			<div class="widget-title"><div class="number-label">Total Salary Structure</div></div>
			<div class="widget-subtitle"></div>
		</div>
		<div class="widget-control"><div class="card-actions dropdown pull-right">
		<a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		...
		</a>
		<ul class="dropdown-menu" style="max-height: 300px; overflow-y: auto;">
			<li class="dropdown-item">
							<a data-action="action-refresh">Refresh</a>
						</li><li class="dropdown-item">
							<a data-action="action-edit">Edit</a>
						</li>
		</ul>
	</div></div>
	</div>
	<div class="widget-body"><div class="widget-content">
		<div class="number" style="color:undefined">0</div>
		</div></div>
	<div class="widget-footer"></div>
</div><div class="widget number-widget-box" data-widget-name="Total Incentive Given(Last month)">
	<div class="widget-head">
		<div class="widget-label">
			<div class="widget-title"><div class="number-label">Total Incentive Given(Last month)</div></div>
			<div class="widget-subtitle"></div>
		</div>
		<div class="widget-control"><div class="card-actions dropdown pull-right">
		<a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		...
		</a>
		<ul class="dropdown-menu" style="max-height: 300px; overflow-y: auto;">
			<li class="dropdown-item">
							<a data-action="action-refresh">Refresh</a>
						</li><li class="dropdown-item">
							<a data-action="action-edit">Edit</a>
						</li>
		</ul>
	</div></div>
	</div>
	<div class="widget-body"><div class="widget-content">
		<div class="number" style="color:undefined">₹ 0.00 </div>
		</div></div>
	<div class="widget-footer"></div>
</div><div class="widget number-widget-box" data-widget-name="Total Outgoing Salary(Last month)">
	<div class="widget-head">
		<div class="widget-label">
			<div class="widget-title"><div class="number-label">Total Outgoing Salary(Last month)</div></div>
			<div class="widget-subtitle"></div>
		</div>
		<div class="widget-control"><div class="card-actions dropdown pull-right">
		<a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		...
		</a>
		<ul class="dropdown-menu" style="max-height: 300px; overflow-y: auto;">
			<li class="dropdown-item">
							<a data-action="action-refresh">Refresh</a>
						</li><li class="dropdown-item">
							<a data-action="action-edit">Edit</a>
						</li>
		</ul>
	</div></div>
	</div>
	<div class="widget-body"><div class="widget-content">
		<div class="number" style="color:undefined">₹ 0.00 </div>
		</div></div>
	<div class="widget-footer"></div>
</div></div>
	</div>`;
		
		
		$(frappe.render_template(body, this)).appendTo( this.page.main );	
		//$( body ).appendTo( this.page.main );
	
	}
 
	


}

