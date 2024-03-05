import { useRef, useEffect } from 'react'
import { currencyFormatter } from '../Controller/utils'
import Modal from "@/app/Components/Modal"

// Database
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import { Doughnut } from "react-chartjs-2"
import { currencyFormatter } from '../Controller/utils'

// Firebase
import { db } from '@/app/Controller/Firebase'
import { collection, addDoc, getDocs, doc, deleteDoc } from 'firebase/firestore'

// Icons
import { FaRegTrashAlt } from 'react-icons/fa'

function AddIncomeModal ({ show, onClose }) {

    const amoutRef = useRef()
    const descriptionRef = useRef()

    // Handler Function 
    const addIncomeHandler = async (e) => {
        e.preventDefault();

        const newIncome = {
            amount: amountRef.current.value,
            description: descriptionRef.current.value,
            createdAt: new Date(),
        } 

        const collectionRef = collection(db, 'income')
        
        try {
            const docSnap = await addDoc(collectionRef, newIncome)

            // Update State
            setIncome((prevState) => {
                return [
                    ...prevState,
                    {
                        id: docSnap.id,
                        ...newIncome,
                    },
                ]
            })

            descriptionRef.current.value = ""
            amountRef.current.value = ""
        } catch (error) {
            console.log(error.message)
        }
    }

    const deleteIncomeEntryHandler = async (incomeId) => {
        const docRef = doc(db, 'income', incomeId)
        try {
            await deleteDoc(docRef)

            // Update State
            setIncome((prevState) => {
                return prevState.filter((i) => i.id !== incomeId)
            })
        } catch (error) {
            console.log(error.message)
        }}

        useEffect(() => {
            const getIncomeData = async () => {
                const collectionRef = collection(db, 'income')
                const docsSnap = await getDocs(collectionRef)
    
                const data = docsSnap.docs.map(doc => {
                    return {
                        id: doc.id,
                        ...doc.data(),
                        createdAt: new Date(doc.data().createdAt.toMillis())
                    }
                })
    
                setIncome(data)
            }
    
            getIncomeData()
        }, [])
    return (
        <Modal show={show} onClose={onClose}>
            <form onSubmit={addIncomeHandler} className='flex flex-col gap-4'>
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

            <div className='flex flex-col gap-3 mt-6 bg-contain border'>
                <h3 className='text-2xl font-bold'>Income History</h3>

                {income.map((i) => {
                    return (
                        <div className='flex items-center justify-between' key={i.id}>
                            <div>
                                <p className='font-semibold'>{i.description}</p>
                                <small className='text-xs'>{i.createdAt.toISOString()}</small>
                            </div>
                            <p className='flex items-center gap-2'>
                                {currencyFormatter(i.amount)}
                                <button onClick={() => {deleteIncomeEntryHandler(i.id)}}>
                                    <FaRegTrashAlt />
                                </button>
                            </p>
                        </div>
                    )
                })}
            </div>
        </Modal>
    )
}