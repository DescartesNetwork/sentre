import { Fragment, useEffect, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'

import { Col, Divider, Row, Space, Typography, Grid, Empty } from 'antd'
import Icon from 'components/icon'

import Articles from './articles'
import { RootState } from 'store'

const ArticleDetail = () => {
  const {
    articles: { data: articleData },
  } = useSelector((state: RootState) => state)
  const { articleId } = useParams<{ articleId: string }>()
  const { xl } = Grid.useBreakpoint() || {}

  const maxPost = useMemo(() => {
    return xl ? 3 : 2
  }, [xl])

  const article = useMemo(() => {
    return articleData?.find(
      ({ title }) => title === decodeURIComponent(articleId),
    )
  }, [articleData, articleId])

  const onClick = (type?: string) => {
    let telegramURL = 'https://telegram.me/share/url?'
    let twitterURL = 'http://twitter.com/intent/tweet?'
    if (type === 'logo-twitter') return onShareArticle(twitterURL)
    if (type === 'paper-plane') return onShareArticle(telegramURL)
  }
  const onShareArticle = (url?: string) => {
    const params: any = {
      // url: window.location.href,
      url: article?.guid,
      text: article?.title,
    }
    for (var prop in params)
      url += '&' + prop + '=' + encodeURIComponent(params[prop])
    window.open(
      url,
      '_blank',
      'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0',
    )
  }

  useEffect(() => {
    // scroll to top
    window.scrollTo(0, 0)
  }, [article])

  const formatDate = new Date(article?.pubDate).toDateString()

  return (
    <Row gutter={[16, 16]} justify="center" className="blogs">
      {article ? (
        <Fragment>
          <Col xs={24} lg={18}>
            <Typography.Title style={{ margin: 0, fontWeight: 700 }}>
              {article?.title || 'Article'}
            </Typography.Title>
          </Col>
          <Col xs={24} lg={18}>
            <Row gutter={[16, 16]}>
              <Col span={24} flex="auto">
                <Space style={{ fontSize: 12 }}>
                  <Typography.Text type="secondary">
                    {formatDate}
                  </Typography.Text>
                </Space>
              </Col>
              <Col>
                <Space size={20} className="ico-social">
                  {['paper-plane', 'logo-twitter'].map((icon, index) => {
                    return (
                      <Icon
                        name={icon}
                        onClick={() => onClick(icon)}
                        key={icon + index}
                      />
                    )
                  })}
                </Space>
              </Col>
            </Row>
          </Col>
          <Col lg={18} className="article-content">
            <div dangerouslySetInnerHTML={{ __html: article?.content }} />
          </Col>
        </Fragment>
      ) : (
        <Col xs={24} lg={18}>
          <Empty />
        </Col>
      )}
      <Col span={24}>
        <Divider />
      </Col>
      <Col span={24}>
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Typography.Title level={3}>Related</Typography.Title>
          </Col>
          <Col span={24}>
            <Articles maxPost={maxPost} />
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default ArticleDetail
