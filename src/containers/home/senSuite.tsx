import { Button, Col, Image, Row, Space, Typography } from 'antd'
import { ballBluePng, senSuite } from 'static/images/systems'

const SenSuite = () => {
  return (
      <>
        
   <Row className='sen-suite' gutter={[68,68]} style={{textAlign:"center"}}>
       <Col span={24} className="title">
   <Image className='ball-blue' src={ballBluePng} preview={false}/>

           <Space direction='vertical' size={16}>
           <Typography.Title level={1}>
               The Sen <span style={{color:"#F9575E"}}>Suite</span>
           </Typography.Title>
           <Typography.Text style={{fontSize:20}} type='secondary'>The limit breaker for projects on Solana.</Typography.Text>
           </Space>
       </Col>
       <Col span={24}>
           <Image src={senSuite} preview={false}/>
       </Col>
       <Col span={24}>
           <Button type='ghost'>Read more</Button>
       </Col>
   </Row>

</>
  )
}

export default SenSuite