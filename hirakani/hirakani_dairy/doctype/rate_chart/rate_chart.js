// Copyright (c) 2024, Akshay Khade and contributors
// For license information, please see license.txt
frappe.ui.form.on('Rate Chart', {
    onload: function (frm) {
        // Clear existing rows to avoid duplicates
        frm.clear_table('rate_chart')

        // Mocked data for child table rows
        const mocked_rows = []

        // Add mocked rows to the child table
        mocked_rows.forEach((row) => {
            const child = frm.add_child('rate_chart')
            frappe.model.set_value(child.doctype, child.name, 'fat', row.fat)
            frappe.model.set_value(child.doctype, child.name, 'snf', row.snf)
            frappe.model.set_value(child.doctype, child.name, 'rate', row.rate)
        })

        // Refresh the child table to reflect changes
        frm.refresh_field('rate_chart')
    },
})
