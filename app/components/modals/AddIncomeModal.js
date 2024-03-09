import { useRef, useEffect, useContext } from 'react'
import { currencyFormatter } from '@/app/controller/utils'
import Modal from "@/app/components/Modal"
import { financeContext } from "@/app/controller/store/finance-context"

// Icons
import { FaRegTrashAlt } from 'react-icons/fa'

function AddIncomeModal ({ show, onClose }) {

    const amoutRef = useRef()
    const descriptionRef = useRef()
    const { income } = useContext(financeContext)

    // Handler Function 
    const addIncomeHandler = async (e) => {
        e.preventDefault();

        const newIncome = {
            amount: amountRef.current.value,
            description: descriptionRef.current.value,
            createdAt: new Date(),
        } 

        descriptionRef.current.value = ""
        amountRef.current.value = ""
    }

    const deleteIncomeEntryHandler = async (incomeId) => {

        
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
}}

export default AddIncomeModal