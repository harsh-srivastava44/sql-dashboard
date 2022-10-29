// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import tables from 'mocks/index'
import type { NextApiRequest, NextApiResponse } from 'next'


const tableMapping = (name: string) => {
  switch (name) {
    case 'categories': return tables['categories']
    case 'employees': return tables.employees
    case 'customers': return tables.customers
    case 'orders': return tables.orders
    case 'products': return tables.products
    case 'regions': return tables.regions
    case 'shippers': return tables.shippers
    case 'suppliers': return tables.suppliers
    default: return []
  }
}
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let data = []
  const { pagination, table }: Partial<{ pagination: string, table: string }> = req.query
 

  if (!table) return res.status(400).send('No table name provided')
  if (pagination) {
    data = [...tableMapping(table)].filter((item, idx) => idx < parseInt(pagination as string))
  }
  else data = tables['categories'].filter((item, idx) => idx < 10)
  res.status(200).json(data)
}
