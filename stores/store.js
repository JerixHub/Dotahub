import { defineStore } from 'pinia'
import { useToast } from 'vue-toastification'

export const useStore = defineStore('store', () => {
    const toast = useToast()
    const loading = ref(false)
    const searchedUserData = ref(null)

    const getSearchUser = async(term) => {
        loading.value = true
        const { data, status, error } = await useCustomFetch(`/search?q=${term}`, {
            method: 'GET'
        })
        
        if(error.value) {
            const error_message = toRaw(error.value.data.error)
            return toast.error(error_message)
        }

        const rawData = toRaw(data.value)
        searchedUserData.value = rawData
        loading.value = false
    }

    const getUserData = async(id) => {
        loading.value = true
        const { data, status, error } = await useCustomFetch(`/players/${id}`, {
            method: 'GET'
        })

        if(error.value) {
            const error_message = toRaw(error.value.data.error)
            return toast.error(error_message)
        }

        const rawData = toRaw(data.value)
        loading.value = false
        return rawData
    }

    const getWinloss = async(id) => {
        loading.value = true
        const { data, status, error } = await useCustomFetch(`/players/${id}/wl`, {
            method: 'GET'
        })

        if(error.value) {
            const error_message = toRaw(error.value.data.error)
            return toast.error(error_message)
        }

        const rawData = toRaw(data.value)
        loading.value = false
        return rawData
    }

    const getMatches = async(id) => {
        loading.value = true
        const { data, status, error } = await useCustomFetch(`/players/${id}/matches?limit=50`, {
            method: 'GET'
        })

        if(error.value) {
            const error_message = toRaw(error.value.data.error)
            return toast.error(error_message)
        }

        const rawData = toRaw(data.value)
        loading.value = false
        return rawData
    }

    const getRecentMatches = async(id) => {
        loading.value = true
        const { data, status, error } = await useCustomFetch(`/players/${id}/recentMatches`, {
            method: 'GET'
        })

        if(error.value) {
            const error_message = toRaw(error.value.data.error)
            return toast.error(error_message)
        }

        const rawData = toRaw(data.value)
        loading.value = false
        return rawData
    }

    const getFriends = async(id) => {
        loading.value = true
        const { data, status, error } = await useCustomFetch(`/players/${id}/peers`, {
            method: 'GET'
        })

        if(error.value) {
            const error_message = toRaw(error.value.data.error)
            return toast.error(error_message)
        }

        const rawData = toRaw(data.value)
        loading.value = false
        return rawData
    }

    const getUserHeroes = async(id) => {
        loading.value = true
        const { data, status, error } = await useCustomFetch(`/players/${id}/heroes`, {
            method: 'GET'
        })

        if(error.value) {
            const error_message = toRaw(error.value.data.error)
            return toast.error(error_message)
        }

        const rawData = toRaw(data.value)
        loading.value = false
        return rawData
    }
    
    const getWordcloud = async(id) => {
        loading.value = true
        const { data, status, error } = await useCustomFetch(`/players/${id}/wordcloud`, {
            method: 'GET'
        })

        if(error.value) {
            const error_message = toRaw(error.value.data.error)
            return toast.error(error_message)
        }

        const rawData = toRaw(data.value)
        loading.value = false
        return rawData
    }

    const getHeroStats = async() => {
        loading.value = true
        const { data, status, error } = await useCustomFetch(`/heroStats`, {
            method: 'GET'
        })

        if(error.value) {
            const error_message = toRaw(error.value.data.error)
            return toast.error(error_message)
        }

        const rawData = toRaw(data.value)
        const parsedHeroes = parseHeroesFn(rawData, 'id')
        loading.value = false
        return parsedHeroes
    }

    function parseHeroesFn (array, keyField) {
        const object = array.reduce((obj, item) => {
            obj[item[keyField]] = item
            return obj
        }, {})
        return object
    }

    return {
        searchedUserData,
        getSearchUser,
        getUserData,
        getWinloss,
        getMatches,
        getRecentMatches,
        getFriends,
        getUserHeroes,
        getWordcloud,
        getHeroStats
    }

})

