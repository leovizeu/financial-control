"use client"

import { useState, createContext } from "react";

const financeContext = createContext({
    income: [],
    addIncomeItem: async () => {},
    removeIncomeItem: async () => {},
})

export default function FinanceContextProvider(children){
    const [income, setIncome] = useState([])

    const addIncomeItem = async (newIncome) => {
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
        } catch (error) {
            console.log(error.message)
        }
    }
    const removeIncomeItem = async (incomeId) => {
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
    }

    const values = { income, addIncomeItem, removeIncomeItem }

    return (
    <FinanceContext.Provider 
    value={values}
    >
        {children}
    </FinanceContext.Provider>
    )
}