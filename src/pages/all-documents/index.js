import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "../../components/layout"
import Seo from "../../components/seo"

import AllDocuments from './components/all-documents';


import "./all-documents.scss"

const Document = () => {
  return (
    <Layout>
    <Seo title="Home" />
    <div className='all-documents'>
       <AllDocuments />
    </div>
    </Layout>
  );
};

export default Document;