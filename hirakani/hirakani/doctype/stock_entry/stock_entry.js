// Copyright (c) 2024, Akshay Khade and contributors
// For license information, please see license.txt

frappe.ui.form.on('Stock Entry', {
    before_save(frm) {
        frm.doc.items.forEach((item) => {
            item.total_amount = item.price * item.quantity
        })
        frm.doc.total_quantity = frm.doc.items.reduce((acc, item) => acc + item.quantity, 0)
        frm.doc.total_amount = frm.doc.items.reduce((acc, item) => acc + item.total_amount, 0)
    },
})
