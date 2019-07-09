export const state = () => ({
    page: 'index',
    articles: require('@/data/articles.json'),
  })
  
  export const mutations = {
    updatePage(state, pageName){
        state.page = pageName
    }
  }