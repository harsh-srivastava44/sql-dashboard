const tables = [
    {
        name: 'Category',
        schema: {
            categoryID: 'number',
            description: 'string',
            name: 'string'
        }
    },
    {
        name: 'Customer',
        schema: {
            customerID: 'string',
            companyName: 'string',
            contactName: 'string',
            contactTitle: 'string',
            address: 'Address'
        }
    },
    {
        name: 'Address',
        schema: {
            street: 'string',
            city: 'string',
            region: 'string',
            postalCode: 'string',
            country: 'string',
            phone: 'string'
        }
    },
    {
        name: 'Employee',
        schema: {
            employeeID: 'number',
            lastName: 'string',
            firstName: 'string',
            title: 'string',
            titleOfCourtesy: 'string',
            birthDate: 'string',
            hireDate: 'string',
            address: 'Address',
            notes: 'string',
            reportsTo: 'string',
            territoryIDs: 'number[]'
        }
    },
    {
        name: "Order",
        schema: {
            orderID: 'number',
            customerID: 'string',
            employeeID: 'number',
            orderDate: 'string',
            requiredDate: 'string',
            shippedDate: 'string',
            shipVia: 'number',
            freight: 'number',
            shipName: 'string',
            shipAddress: 'ShipAddress',
            details: 'Detail[]'
        }
    },
    {
        name: 'ShipAddress',
        schema: {
            street: 'string',
            city: 'string',
            region: 'string',
            postalCode: 'number',
            country: 'string',
        }
    },
    {
        name: 'Detail',
        schema: {
            productID: 'number',
            unitPrice: 'number',
            quantity: 'number',
            discount: 'number'
        }
    },
    {
        name: 'Product',
        schema: {
            productID: 'number',
            supplierID: 'number',
            categoryID: 'number',
            quantityPerUnit: 'string',
            unitPrice: 'number',
            unitsInStock: 'number',
            unitsOnOrder: 'number',
            reorderLevel: 'number',
            discontinued: 'boolean',
            name: 'string',
        }
    },
    {
        name: 'Region',
        schema: {
            territoryID: 'number',
            name: 'string'
        }
    },
    {
        name: 'Shipper',
        schema: {
            shipperID: 'number',
            companyName: 'string',
            phone: 'string'
        }
    },
    {
        name: 'Supplier',
        schema: {
            supplierID: 'number',
            companyName: 'string',
            contactName: 'string',
            contactTitle: 'string',
            address: 'Address'
        }
    }
];

export default tables