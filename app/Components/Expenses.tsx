"use client"

import React from 'react'
import ExpenseCategoryItem from '@/app/Components/ExpenseCategoryItem'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import { Doughnut } from "react-chartjs-2"

ChartJS.register(ArcElement, Tooltip, Legend);

const DUMMY_DATA = [
    {
        id: 1,
        title: "Entertainment",
        color: '#000',
        total: 500
    },
    {
        id: 2,
        title: "Fuel",
        color: '#009',
        total: 200
    },
    {
        id: 3,
        title: "Movies",
        color: '#ffff',
        total: 100
    },
    {
        id: 4,
        title: "Vacation",
        color: '#000',
        total: 800
    },
    {
        id: 5,
        title: "Grossures",
        color: '#000',
        total: 250
    },
]

const Expenses = () => {
  return (
    /* Expenses */
    <>
        <section className='w-full py-6'>
            <h3 className='text-2xl'>My Expenses</h3>

            <div className='flex flex-col gap-4 mt-6'>
                {DUMMY_DATA.map(expense => {
                    return (
                        <ExpenseCategoryItem 
                        color= {expense.color}
                        title= {expense.title} 
                        amount={expense.total}
                        />
                    )
                })}
            </div>
        </section>
        <section className='w-full py-6'>
            <h3 className='text-2xl'>
                Stats
            </h3>
            <div className='w-1/2 mx-auto'>
                <Doughnut data= {{
                    labels: DUMMY_DATA.map(expense => expense.title),
                    datasets: [{
                        label: "Expenses",
                        data: DUMMY_DATA.map(expense => expense.total),
                        backgroundColor: DUMMY_DATA.map(expense => expense.color),
                        borderColor: ['#1818lb'],
                        borderWidth: 5,
                    }],
                }}
                />
            </div>
        </section>
    </>
  )
}

export default Expenses