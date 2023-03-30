import frappe
def get_context(context):
    
    context.agents_list=frappe.db.get_list('Agents')
    context.location_list=frappe.db.get_list('Location')
    return context