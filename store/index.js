export const state = () => ({
    page: 'index',
    articles: require('@/data/articles.json'),
    texts: require('@/data/text.json')
  })
  
  export const mutations = {
    updatePage(state, pageName){
        state.page = pageName
    }
  }