const useLocalStorage = () => {
  
    const setLocalStorageItem = (itemName: string, itemData: unknown) => {
        try {
            const dataToStore = typeof itemData === "string" ? itemData : JSON.stringify(itemData);
            localStorage.setItem(itemName, dataToStore);
        } catch (error) {
            console.log(error);
        }
    }
    
    const getLocalStorageItem = (itemName: string) => {
        try {
            const data = localStorage.getItem(itemName);    
            if (!data) return null;
            try {
                return JSON.parse(data);
            } catch {
                return data;
            }      
        } catch (error) {
            console.log(error);
        }
    }
    
    const clearLocalStorageItem = (itemName: string) => {
        try {
            localStorage.removeItem(itemName);            
        } catch (error) {
            console.log(error);
        }
    }
    
    // in here if we are using all the items int the same place return type is array should e great
    // if we are using only one or two then better to return as a object
    return { getLocalStorageItem, setLocalStorageItem, clearLocalStorageItem };
}

export default useLocalStorage;