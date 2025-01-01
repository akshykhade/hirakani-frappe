// Copyright (c) 2024, Akshay Khade and contributors
// For license information, please see license.txt

frappe.ui.form.on("Hirakani Member", {
	refresh(frm) {
        frm.add_custom_button(__('Generate Members'), () => {
            console.log('perform_Action');
            frm.call("generate_users");
        });
	},
});
