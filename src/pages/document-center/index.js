import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import DocumentCenter from './components/document-center';


import "./document-center.scss"

const Document = () => {
  return (
    <div className='doc-center-body'>
       <DocumentCenter />
    </div>
  );
};

export default Document;