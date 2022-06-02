import { Col, Row, Space, Typography } from 'antd'

const Utilities = () => {
  return (
    <Row gutter={[{xs:32,md:100},{xs:32,md:100}]} className='body-content utilities'>
<Col span={24}>
<Space direction='vertical' size={16}>
           <Typography.Title level={1}>
               SNTR <span style={{color:"#F9575E"}}>Utilities</span>
           </Typography.Title>
           <Typography.Text style={{fontSize:20}} type='secondary'>The asset growth pack for SNTR Holders.</Typography.Text>
           </Space>
</Col>
    </Row>
  )
}

export default Utilities