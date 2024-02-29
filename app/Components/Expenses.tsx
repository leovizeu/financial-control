"use client"

import React from 'react'
import {useState, useRef} from 'react'
import ExpenseCategoryItem from '@/app/Components/ExpenseCategoryItem'
import Modal from "@/app/Components/Modal"

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import { Doughnut } from "react-chartjs-2"
import { currencyFormatter } from '../Controller/utils'

ChartJS.register(ArcElement, Tooltip, Legend);

const DUMMY_DATA = [
    {
        id: 1,
        title: "Entertainment",
        color: '#FFD200',
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
        color: '#C33764',
        total: 100
    },
    {
        id: 4,
        title: "Vacation",
        color: '#34e89e',
        total: 800
    },
    {
        id: 5,
        title: "Grossures",
        color: '#A7BFE8',
        total: 250
    },
]

const Expenses = () => {

    const [showAddIncomeModal, setShowAddIncomeModal] = useState(false);
    const amountRef = useRef();
    const descriptionRef = useRef();

    // Handler Functions
    const addIncomeHandler = (e: any) => {
        e.preventDefault();

        const newIncome = {
            amount: amountRef.current.value,
            description: descriptionRef.current.value,
            createdAt: new Date(),
        }

        console.log(newIncome)
    }

    return (
    /* Expenses */
    <>
        {/* Add Income Modal */}
        <Modal show={showAddIncomeModal} onClose={setShowAddIncomeModal}>
            <form className='flex flex-col gap-4'>
                <div className='form-group'>
                    <label htmlFor="amount">Income Amount</label>
                    <input
                    type="number"
                    name='amount'
                    ref={amountRef}
                    min={0.01} 
                    step={0.01} 
                    placeholder='Enter income amount'
                    required
                    />
                </div>

                <div className='form-group'>
                    <label htmlFor="description">Description</label>
                    <input
                    type="text"
                    name='description'
                    ref={descriptionRef}
                    placeholder='Enter income description'
                    required
                    />
                </div>

                <button type='submit' className='btn btn-primary'>Add entry</button>
            </form>
        </Modal>

        {/* Current Balance and Buttons to Add Income/Expenses */}
        <section className='w-full py-5 uppercase'>
            <small>
                Current Balance
            </small>
            <h2 className='text-blue-500 font-sans font-bold text-4xl py-3'>
            {currencyFormatter(10000)}
            </h2>
        </section>

        <section className='flex items-center gap-4 py-3'>
            <button className='btn btn-primary ' onClick={() => {setShowAddIncomeModal (true)}}>+ Income</button>
            <button className='btn btn-primary-outline'>+ Expenses</button>
        </section>

        {/* Show Income/Expenses tab */}
        <div className='bg-gray-800 grid grid-cols-2 divide-x shadow-md drop-shadow-md rounded w-full py-8'>
            <div className='flex justify-around'>
                <div className='w-full flex-col flex items-center justify-center'>
                    <h1 className='uppercase'>Income</h1>
                    <p className='text-green-500 font-sans text-xl'>{currencyFormatter(10000)}</p>
                </div>
                
            </div>
            <div className='flex justify-between'>
                <div className='w-full flex-col flex items-center justify-center'>
                    <h1 className='uppercase'>Expences</h1>
                    <p className='text-red-500 font-sans text-xl'>{currencyFormatter(0)}</p>
                </div>
            </div>
        </div>

        {/* Finance Data */}
        <section className='w-full py-6'>
            <h3 className='text-2xl'>My Expenses</h3>

            <div className='flex flex-col gap-4 mt-6'>
                {DUMMY_DATA.map(expense => {
                    return (
                        <ExpenseCategoryItem 
                        color= {expense.color}
                        title= {expense.title} 
                        total={expense.total}
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