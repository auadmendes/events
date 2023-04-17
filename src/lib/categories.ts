import { prisma } from "./prisma";


export async function getCategories() {
  const categories = await prisma.category.findMany({
    orderBy: {
      name: 'asc' // replace with the field you want to order by and the direction (asc or desc)
    }
  })

  return categories
}

export async function createCategories(name: string) {
  const categories = await prisma.category.create({
    data: {
      name
    }
  })

  console.log(categories,  '************')

  return categories
}