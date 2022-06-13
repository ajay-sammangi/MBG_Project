import React from 'react';
import '../form-component/form-component.css'
const FormComponent = () => {
    return (
        <form>
      <div className="form-background d-flex flex-column mx-auto mt-2 mb-2">
        <div className="d-flex flex-row align-items-center mb-2">
          <div className="input-div">
            <label className="label-text">Pan Card</label>
          </div>
          <div className="ml-3 file-input">
            <input type="file" className='file-upload'></input>
          </div>
        </div>
        <div className="d-flex flex-row align-items-center mb-2">
          <div className="input-div">
            <label className="label-text">copy of Aadhar Card</label>
          </div>
          <div className="ml-3 file-input">
            <input type="file" className='file-upload'></input>
          </div>
        </div>

        <div className="d-flex flex-row justify-content-end align-items-center ml-3 mb-2">
          <textarea className="text-area" rows="2" cols="50"></textarea>
        </div>

        <div className="d-flex flex-row justify-content-center align-items-center mb-2">
          <div className="input-div">
            <label className="label-text">Copy of Password Last 10 Yrs</label>
          </div>
          <div className="ml-3 file-input">
            <input type="file" className='file-upload'></input>
          </div>
        </div>
        <div className="d-flex flex-row justify-content-end align-items-center ml-3 mb-2">
          <div className="ml-3 file-input">
            <input type="file" className='file-upload'></input>
          </div>
        </div>

        <div className="d-flex flex-row align-items-center mb-2">
          <div className="input-div">
            <label className="label-text">
              Financial Year wise stay in India during last 10 years
            </label>
          </div>
          <div className="ml-3 select-div">
            <select className="select-input">
              <option default>Financial Year</option>
              <option>Financial Year</option>
            </select>
          </div>
        </div>

        <div className="d-flex flex-row align-self-center mb-2">
          <div className="input-div">
            <label className="label-text">
              Note: Kindly include date of arrival and date of departure both
              for counting the total number of days stayed in India
            </label>
          </div>

          <div className="select-div ml-3 mt-2">
            <select className="select-input  mb-2">
              <option default>Financial Year</option>
              <option>Financial Year</option>
            </select>
            <select className="select-input">
              <option default>Financial Year</option>
              <option>Financial Year</option>
            </select>
          </div>
        </div>
        <div className="d-flex flex-row align-items-center mb-3">
          <div className="input-div">
            <label className="label-text">Source of Income</label>
          </div>
          <div className="ml-3 select-div">
            <select className="select-input">
              <option default>Salaried</option>
              <option>Financial Year</option>
            </select>
          </div>
        </div>
        <div className="d-flex flex-row justify-content-end align-items-center ml-3 mb-3">
          <div className="ml-3 select-div">
            <select className="select-input">
              <option default>Salary Slips</option>
              <option>Financial Year</option>
            </select>
          </div>
        </div>
        <div className="d-flex flex-row justify-content-end align-items-center ml-3 mb-3">
          <div className="ml-3 select-div">
            <select className="select-input">
              <option default>Form 16</option>
              <option>Financial Year</option>
            </select>
          </div>
        </div>
        <div className="d-flex flex-row justify-content-end align-items-center ml-3 mb-3">
          <div className="ml-3 select-div">
            <select className="select-input">
              <option default>Nature of Deduction</option>
              <option>Financial Year</option>
            </select>
          </div>
        </div>

        <div className="d-flex flex-row align-items-center mb-2">
          <div className="input-div">
            <label className="label-text">
              Detail of deductions, if any under section 80C, 80D, 80E, 80G,
              80TTA etc.
            </label>
          </div>
          <div className="wrapper-div mt-2 ml-3">
            <div className="text-div">
              <input type="text" className="text-input" />
            </div>
            <div className="text-input ml-3 mt-2">
              <input type="file" className='file-upload'></input>
            </div>
          </div>
        </div>
        <div className="d-flex flex-row justify-content-end align-items-center ml-3 mb-2">
          <div className="ml-3 select-div">
            <select className="select-input">
              <option default>Type of document</option>
              <option>Financial Year</option>
            </select>
          </div>
        </div>
        <div className="d-flex flex-row justify-content-end align-items-center ml-3 mt-2 mb-2">
          <div className="ml-3 file-input">
            <input type="file" className='file-upload'></input>
          </div>
        </div>

        <div className="d-flex flex-row mb-2">
          <div className="input-div">
            <label className="label-text">
              Copy of TDS/TCS Certifcates, i.e. Form 16/16A, if any
            </label>
          </div>
          <div className="select-div ml-3">
          
          <select className="select-input mb-2">
          <option default>Financial Year</option>
          <option>Financial Year</option>
        </select>
          
            
            <div className="tds-input-div">
              <input type="file" className='file-upload'></input>
            </div>
          </div>
        </div>

        <div className="d-flex flex-row mt-4 mb-2">
          <div className="input-div">
            <label className="label-text">
            Copy of challan for advance tax & 
            self-assessment tax
            </label>
          </div>
          <div className="select-div ml-3">
          
          <select className="select-input mb-2">
          <option default>Financial Year</option>
          <option>Financial Year</option>
        </select>
          
            
            <div className="tds-input-div">
              <input type="file" className='file-upload'></input>
            </div>
          </div>
        </div>
        
        <div className="d-flex flex-row align-items-center mt-4 mb-2">
          <div className="input-div">
            <label className="label-text">
            Name of the Bank
            </label>
          </div>
          <div className="wrapper-div ml-3">
            <div className="text-div">
              <input type="text" className="text-input" />
            </div>
          </div>
        </div>

        <div className="d-flex flex-row align-items-center mb-2">
          <div className="input-div">
            <label className="label-text">Bank Acconut No.</label>
          </div>
          <div className="wrapper-div ml-3">
          <div className="text-div">
            <input type="text" className="text-input" />
          </div>
        </div>
        </div>

        <div className="d-flex flex-row align-items-center mb-2">
          <div className="input-div">
            <label className="label-text">IFSC Number</label>
          </div>
          <div className="wrapper-div ml-3">
          <div className="text-div">
            <input type="text" className="text-input" />
          </div>
        </div>
        </div>

        <div className="d-flex flex-row align-items-center mb-2">
          <div className="input-div">
            <label className="label-text">Cancelled Cheque</label>
          </div>
          <div className="ml-3 file-input">
            <input type="file" className='file-upload'></input>
          </div>
        </div>

        <div className="d-flex flex-row justify-content-end align-items-center ml-3 mb-2">
          <button className='button-style' type="button">Approve</button>
        
      </div>
      </div>
      </form>
    );
};

export default FormComponent;