
export const getTasks = (state)=>{ console.log(state ); return state.tasks.items}
export const getFiltersStatus = state => state.filers.status
export const getIsLoading = state => state.tasks.isLoading
export const geterror = state=> state.task.error
