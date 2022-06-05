import { useState } from 'react'

import { Col, Row, Typography, Drawer, Button } from 'antd'
import RowSpaceVertical from '../components/rowSpaceVertical'
import CardFoundation, { Foundation } from './foundation'
import CardDAppStore, { DAppStore } from './dAppStore'
import IonIcon from 'components/icon'
import CardAcceleration, { Acceleration } from './acceleration'
import { MoonMapState } from 'constant'

const MoonMap = () => {
  const [expandType, setExpandType] = useState('')

  return (
    <Row
      className="body-content"
      gutter={[64, 64]}
      style={{ textAlign: 'center' }}
      id="moon-map"
    >
      <Col span={24} className="title">
        <RowSpaceVertical
          title={
            <Typography.Title level={1}>
              The <span style={{ color: '#F9575E' }}>Moon</span> Map
            </Typography.Title>
          }
          description="Our Vision, Mission and Achievements through the eras."
        />
      </Col>
      <Col span={24}>
        <Row gutter={[12, 12]} style={{ position: 'relative' }}>
          <Col span={12}>
            <CardFoundation onClick={setExpandType} />
          </Col>
          <Col span={12}>
            <Row gutter={[12, 12]}>
              <Col span={24}>
                <CardDAppStore onClick={setExpandType} />
              </Col>
              <Col span={24}>
                <CardAcceleration onClick={setExpandType} />
              </Col>
            </Row>
          </Col>
          <Drawer
            placement="left"
            visible={!!expandType}
            getContainer={false}
            style={{ position: 'absolute' }}
            onClose={() => setExpandType('')}
            width={'100%'}
            mask={false}
            closable={false}
          >
            <Row justify="end" style={{ height: '100%' }}>
              <Col>
                <Button
                  type="text"
                  icon={<IonIcon name="close-outline" />}
                  onClick={() => setExpandType('')}
                />
              </Col>
              <Col span={24}>
                {MoonMapState.foundation === expandType && (
                  <Foundation isExpand />
                )}
                {MoonMapState.dAppStore === expandType && (
                  <DAppStore isExpand />
                )}
                {MoonMapState.acceleration === expandType && (
                  <Acceleration isExpand />
                )}
              </Col>
            </Row>
          </Drawer>
        </Row>
      </Col>
    </Row>
  )
}

export default MoonMap
