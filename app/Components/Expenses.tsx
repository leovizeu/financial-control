import React from 'react'
import ExpenseCategoryItem from '@/app/Components/ExpenseCategoryItem'

const DUMMY_DATA = [
    {
        id: 1,
        title: "Entertainment",
        color: '#000',
        amount: 500
    },
    {
        id: 2,
        title: "Fuel",
        color: '#009',
        amount: 200
    },
    {
        id: 3,
        title: "Netflix",
        color: '#ffff',
        amount: 25
    },
    {
        id: 4,
        title: "Vacation",
        color: '#000',
        amount: 2000
    }
]

const Expenses = () => {
  return (
    /* Expenses */
    <section className='w-full py-6'>
        <h3 className='text-2xl'>My Expenses</h3>

        <div className='flex flex-col gap-4 mt-6'>
            {DUMMY_DATA.map(expense => {
                return (
                    <ExpenseCategoryItem 
                    color= {expense.color}
                    title= {expense.title} 
                    amount={expense.amount}
                    />
                )
            })}
        </div>
    </section>
  )
}

export default Expenses