# Copyright (c) 2023, Romeo Antony and contributors
# For license information, please see license.txt

import frappe


from frappe.website.website_generator import WebsiteGenerator

class Agents(WebsiteGenerator):
    @frappe.whitelist(allow_guest=True)
    def createUserFromWebform():
        return "pong"
    

	


	
pass
