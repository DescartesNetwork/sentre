import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { getArticles } from 'store/articles.reducer'

const FetchArticles = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getArticles())
  }, [dispatch])

  return null
}

export default FetchArticles
