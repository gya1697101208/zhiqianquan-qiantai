const Mock = require('mockjs')
const Random = Mock.Random

const newsData = function() {

    let data = []
    
    for(let i = 0; i < 100; i++) {
    
    let newsObj = {
    
    name: Random.csentence(2,3),
    
    date: Random.date()
    
    }
    
    articles.push(newsObj)
    
    }
    
        return {
    
        data: data
    
        }
    
    }
    Mock.mock('/news/api', 'get', newsData)