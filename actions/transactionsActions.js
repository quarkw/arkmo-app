export const addTransaction = (data) => ({
	type:'ADD_TRANSACTION',
	payload: {data},
})

export const softUpdateTransaction = (data) => ({
	type: 'SOFT_UPDATE_TRANSACTION',
	payload: {data},
})

export const hardUpdateTransaction = (data) => ({
	type:'HARD_UPDATE_TRANSACTION',
	payload: {data}
})

export const finalizeTransaction = (hash, amount,target_address, direction ) => ({
	type:'FINALIZE_TRANSACTION',
	payload: {hash,amount,target_address,direction},
})

export const removeTransaction = (data) => ({
	type:'REMOVE_TRANSACTION',
	payload: {data},
})