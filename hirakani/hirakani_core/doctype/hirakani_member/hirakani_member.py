# Copyright (c) 2024, Akshay Khade and contributors
# For license information, please see license.txt
from faker import Faker

import frappe
from frappe.model.document import Document


class HirakaniMember(Document):

	@frappe.whitelist()
	def generate_users(args):
		fake = Faker('en_IN')
		number_created = 0
		number_of_users = 10
		for i in range(number_of_users):
			try:
				first_name = fake.first_name()
				last_name = fake.last_name()
				mobile_number = fake.msisdn()[3:]
				user = frappe.new_doc("User")
				user.email = "{}@hirakani.com".format(mobile_number).lower()
				user.send_welcome_email = 0
				user.first_name = first_name
				user.last_name = last_name
				user.phone = mobile_number

				# Add a profile image
				user.user_image = "https://i.pravatar.cc/300?u={}".format(user.email)

				# Add the role
				user.append_roles("Hirakani Admin")

				# Save the user
				user.insert()

				member = frappe.new_doc("Hirakani Member")
				member.user = user.name
				member.type = "User"
				member.active = True
				member.collection_center = "Jashi - Patil Vasti"
				member.insert()


				# Commit since there might be duplicates
				frappe.db.commit()

				number_created += 1

			except:
				continue
			frappe.publish_progress(percent=(i + 1/number_of_users)*100, title="Creating Users", description="Creating user {}".format(i + 1))
			
		frappe.msgprint("{} Users created successfully".format(number_created), title="Success", indicator="green", alert=True)
	
	pass
