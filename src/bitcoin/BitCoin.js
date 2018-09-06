import React, { Component } from 'react';
import './BitCoin.css';

class BitCoin extends Component {


  constructor(){
    super();
    this.state = {
      result:[]
    };
  }

  componentDidMount=()=>{
    fetch('https://api.coindesk.com/v1/bpi/currentprice.json').then(customers=>{     
      return customers.json();
    }).then(data=>{        
        this.setState({
          'updated_isodate':data.time.updatedISO,
          'disclaimer':data.disclaimer,
          'chartName':data.chartName,
          'usd_symbol':data.bpi.USD.code,
          'usd_desc':data.bpi.USD.description,
          'usd_rate':data.bpi.USD.rate_float,
          'eur_symbol':data.bpi.EUR.code,
          'eur_desc':data.bpi.EUR.description,
          'eur_rate':data.bpi.EUR.rate_float,
          'gbp_symbol':data.bpi.GBP.code,
          'gbp_desc':data.bpi.GBP.description,
          'gbp_rate':data.bpi.GBP.rate_float,
        });      
        console.log("Vivek Java : "+JSON.stringify(data));
    },error=>{
        console.log("Vivek Error : "+JSON.stringify(error));
    });
  }

  render() {
    return (
      <div className="bitcoin">
          <label className='head' >{this.state.chartName}</label><br/><hr/><br/>
          <label className='note' ><strong>Disclaimer  :</strong>  {this.state.disclaimer}</label><br/><br/>
          <center>
          <table border='1' className='table'>
            <thead>
              <tr>
                <th className='table-head'>Symbol</th>
                <th className='table-head'>Description</th>
                <th className='table-head'>Rate</th>
              </tr>              
            </thead>
            <tbody>
              <tr>
                <td>{this.state.usd_symbol}</td>
                <td>{this.state.usd_desc}</td>
                <td>{this.state.usd_rate}</td>
              </tr>
              <tr>
                <td>{this.state.eur_symbol}</td>
                <td>{this.state.eur_desc}</td>
                <td>{this.state.eur_rate}</td>
              </tr>
              <tr>
                <td>{this.state.gbp_symbol}</td>
                <td>{this.state.gbp_desc}</td>
                <td>{this.state.gbp_rate}</td>
              </tr>
            </tbody>
          </table>
          </center>
          
      </div>
    );
  }
}


export default BitCoin;
