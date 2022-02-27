import React, { useState,useEffect, forwardRef, useImperativeHandle } from 'react'
import { Navbar, Container, Card } from 'react-bootstrap'
import classicalOpt from '../../images/Classical.png'
import histPlaceholders from '../../images/placeholders/Histo.png'
import { Column } from '@ant-design/plots';

import axios from "axios";
const QuantumStates = forwardRef((props,ref) => {
  const {showDiagram} = props
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchPost();
  }, []);

  useImperativeHandle(ref, () => ({

    setNewData() {
      setData([
        {
          'bit':'000',
          'probability':0.03
        },
        {
          'bit':'001',
          'probability':0.02
        },
        {
          'bit':'010',
          'probability':0.05
        },
        {
          'bit':'011',
          'probability':0.04
        },
        {
          'bit':'100',
          'probability':1.0
        },
        {
          'bit':'101',
          'probability':0.03
        },
        {
          'bit':'110',
          'probability':0.03
        },
        {
          'bit':'111',
          'probability':0.03
        },
      ])
    }

  }));
  // useEffect(()=>{
  //   if(showDiagram){
      
  //   }
    
  // },[showDiagram])

  const fetchPost = async () => {
    const response = await axios("http://127.0.0.1:5000/");
    console.log(response.data);
    let emptyArray=[];

    for (let i = 0; i < response.data.length; i++) {
      const element = response.data[i];
      emptyArray.push({
        'bit':i,
        'probability':element
      })
      
    }
    }

  const config = {
    data,
    style:{ height:115},
    xField: 'bit',
    yField: 'probability',
    intervalPadding:1,
    minColumnWidth: 10,
    maxColumnWidth: 10,
    xAxis: {
      
      label: {
        autoRotate: false,
      },
    },
    slider: {
      start: 0,
      end: 1,
    },
  };
  return (
    <div>
    <Card>
    <Card.Header className='d-flex justify-content-between'><img src={classicalOpt} alt='classicalOpt' width={20}></img><span>Quantum State 【Histograms】</span><br/></Card.Header>
    <Card.Body className="py-0 px-5" style={{backgroundColor:'#F6F7FC'}}>
      <blockquote className="blockquote mb-0">
      <Column {...config} />
      {/*
      <img src={histPlaceholders} alt='classicalOpt' width={620}></img>
       */}
      </blockquote>
    </Card.Body>
  </Card>
    </div>
  )
})

export default QuantumStates
