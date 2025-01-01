// Copyright (c) 2024, Akshay Khade and contributors
// For license information, please see license.txt

frappe.ui.form.on('Milk Collections', {
    refresh(frm) {
        // frm.add_custom_button(__('generate users'), () => {
        //     frappe.msgprint('Button clicked!');
        // });
    },
    collection_center(frm) {
        console.log(frm.doc)
        frm.set_query('member', function (doc) {
            return {
                filters: {
                    collection_center: doc.collection_center,
                },
            }
        })
    },
})
