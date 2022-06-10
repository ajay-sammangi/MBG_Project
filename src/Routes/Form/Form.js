import React from 'react';
import Sidemenu from '../../dashboard-components/Sidemenu/Sidemenu';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FormComponent from '../../form-component/form-component';
import '../Form/Form.css';
const Form = () => {
    return (
        <div className="form-container d-flex flex-row">
        <div>
          <Sidemenu />
        </div>
        <div className="wrapper ml-2 mr-2">
          <div className="header">
            <div className='d-flex flex-column align-items-center'>
              <h3 className='m-0'>Services</h3>
              <span>Service title</span>
            </div>
            <div>
                <FontAwesomeIcon icon={faCommentDots}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faPaperclip}></FontAwesomeIcon>
            </div>
        
          </div>
         <FormComponent />
        </div>
      </div>
    );
};

export default Form;