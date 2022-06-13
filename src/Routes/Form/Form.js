import React, { useState } from 'react';

import Sidemenu from '../../dashboard-components/Sidemenu/Sidemenu';
import Comments from '../../form-component/Comments/Comments';
import Preview from '../../form-component/Preview/Preview';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FormComponent from '../../form-component/form-component';
import '../Form/Form.css';

const Form = () => {
  const [showComments,setShowComments]=useState(true);
  const [showPreview, setShowPreview]=useState(false);
  
  const openComments=() =>{
    setShowComments(true);
    setShowPreview(false);
  }
  const openPreview=() =>{
    setShowPreview(true);
    setShowComments(false);
  }
    return (
        <div className="form-container d-flex flex-row">
        <div>
          <Sidemenu />
        </div>
        <div className="form-wrapper ml-2 mr-2">
          <div className="header">
            <div className='d-flex flex-column align-items-center'>
              <h3 className='m-0'>Services</h3>
              <span>Service title</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faCommentDots} onClick={openComments} className='selected'></FontAwesomeIcon>
              <FontAwesomeIcon className='selected ml-3' icon={faPaperclip} onClick={openPreview}></FontAwesomeIcon>
            </div>
        
          </div>
         <FormComponent />
        </div>
        <div className='comments-section'>
          <div style={{display: showComments ? 'block': 'none'}}>
          <Comments />
          </div>
          <div style={{display:showPreview ? 'block' : 'none'}}>
          <Preview />
          </div>
        </div>
      </div>
    );
};

export default Form;