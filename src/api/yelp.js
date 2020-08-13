 import axios from 'axios'

 export default axios.create({
     baseURL: 'https://api.yelp.com/v3/businesses',
     headers: {
         Authorization: 'Bearer o_qFlTdowV-9qNQPebOcj_dVtgR019hwNoWhqz7nQChbgGxCMA9skZvlHqGmTwvSJCU_R7P27ogn_j52v98GpaIpKgOVPNIBwPuTwYKND4gCS11kBv01Njc8m5syX3Yx'
     }
 })