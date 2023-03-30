import re
import frappe
from frappe.email.doctype.email_account.email_account import EmailAccount


class RealestateEmail(EmailAccount):
    def validate(self):
        domain = re.search("@[\w.]+", self.email_id)     
        mydomain=re.search("@[\w.]+", self.email_id)
        if((mydomain.group())!=("@"+(self.domain))):
            frappe.throw("You cannot add any email other than jerometechsolutions.com")
    
    def before_save(self):
        print(' === === === ===  BEFORE SAVE  === === === === === ')
    

