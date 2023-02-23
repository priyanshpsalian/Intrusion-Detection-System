import React,{useState} from 'react';
import {Link}  from "react-router-dom";
import {Modal} from 'react-bootstrap';
import {nanoid} from 'nanoid';
import swal from "sweetalert";
import PageTitle from "../layouts/PageTitle";
import pic1 from './../../images/profile/small/pic1.jpg';
import Editable from './Editable';

const tableList = [
	{
		id:"1", name:'Tiger Nixon', department:'Architect',gender:'Male', 
		education:'M.COM., M.B.A', mobile:'12345 67890', email:'info1@example.com'
	},
	{	
		id:"2", name:'Gloria Little', department:' Administrator',gender:'Male', 
		education:'BTech, MTech', mobile:'09876 54321', email:'info2@example.com'
	},
	{	
		id:"3", name:'Bradley Greer', department:'Software Engineer',gender:'Male', 
		education:'B.CA M.CA', mobile:'98765 67890', email:'info3@example.com'
	},
	{	
		id:"4", name:'Gloria Little', department:' Administrator',gender:'Male', 
		education:'BTech, MTech', mobile:'09876 54321', email:'info4@example.com'
	},
	{
		id:"5", name:'Tiger Nixon', department:'Architect',gender:'Male', 
		education:'M.COM., M.B.A', mobile:'12345 67890', email:'info5@example.com'
	},
	{	
		id:"6", name:'Bradley Greer', department:'Software Engineer',gender:'Male', 
		education:'B.CA M.CA', mobile:'98765 67890', email:'info6@example.com'
	},
]; 

const Todo = () =>{
	const [contents, setContents] = useState(tableList);
	// delete data  
    const handleDeleteClick = (contentId) => {
        const newContents = [...contents];    
        const index = contents.findIndex((content)=> content.id === contentId);
        newContents.splice(index, 1);
        setContents(newContents);
    }
	
	//Modal box
	const [addCard, setAddCard] = useState(false);
	//Add data 
    const [addFormData, setAddFormData ] = useState({
        name:'',
        department:'',
        gender:'',
        education:'',
        mobile:'',
		email:'',
    }); 
    
    // Add contact function
    const handleAddFormChange = (event) => {
        event.preventDefault();    
        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;
        const newFormData = {...addFormData};
        newFormData[fieldName] = fieldValue;
        setAddFormData(newFormData);
    };
    
     //Add Submit data
    const handleAddFormSubmit = (event)=> {
        event.preventDefault();
        var error = false;
		var errorMsg = '';
        if(addFormData.name === ""){
            error = true;
			errorMsg = 'Please fill  name';
        }else if(addFormData.department === ""){
            error = true;
			errorMsg = 'Please fill department.';
        }else if(addFormData.gender === ""){
			error = true;
			errorMsg = "please fill gender";
		}
        if(!error){
            const newContent = {
                id: nanoid(),
                name: addFormData.name,
                department:  addFormData.department,
                gender:  addFormData.gender,
                education:  addFormData.education,
                mobile:  addFormData.mobile,
                email:  addFormData.email,
			};
            
            const newContents = [...contents, newContent];
            setContents(newContents);
            setAddCard(false);
            swal('Good job!', 'Successfully Added', "success");
            addFormData.name  = addFormData.department = addFormData.gender = addFormData.education = addFormData.mobile = addFormData.email = '';         
            
        }else{
			swal('Oops', errorMsg, "error");
		}
    };
	
	//Edit start 
	//const [editModal, setEditModal] = useState(false);	
	// Edit function editable page loop
    const [editContentId, setEditContentId] = useState(null);
   
    // Edit function button click to edit
    const handleEditClick = ( event, content) => {
        event.preventDefault();
        setEditContentId(content.id);
        const formValues = {
            name: content.name,
            department: content.department,  
            gender: content.gender,  
            education: content.education,  
            mobile: content.mobile,  
            email: content.email,  	
        }
        setEditFormData(formValues);
        //setEditModal(true);
    };
   
    // edit  data  
    const [editFormData, setEditFormData] = useState({
        name:'',
        department:'',
        gender:'',
        education:'',
        mobile:'',
		email:'',
    })
    
    //update data function
    const handleEditFormChange = (event) => {
        event.preventDefault();   
        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;
        const newFormData = {...editFormData};
        newFormData[fieldName] = fieldValue;
        setEditFormData(newFormData);
    };
    
    // edit form data submit
    const handleEditFormSubmit = (event) => {
        event.preventDefault();
        const editedContent = {
            id: editContentId,
            name: editFormData.name,
            department: editFormData.department,
            gender: editFormData.gender,
            education: editFormData.education,
            mobile: editFormData.mobile,
            email: editFormData.email,
        }
        const newContents = [...contents];
        const index = contents.findIndex((content)=> content.id === editContentId);
        newContents[index] = editedContent;
        setContents(newContents);
        setEditContentId(null);
       // setEditModal(false);
    }
	//Cencel button to same data
    const handleCancelClick = () => {
        setEditContentId(null);    
    };
	
	return(
		<>
			<PageTitle activeMenu="Table" motherMenu="Post" />
			<div className="col-12">
				<Modal className="modal fade"  show={addCard} onHide={setAddCard} >
					<div className="" role="document">
						<div className="">
							<form >
								<div className="modal-header">
									<h4 className="modal-title fs-20">Add Contact</h4>
									<button type="button" className="btn-close" onClick={()=> setAddCard(false)} data-dismiss="modal"><span></span></button>
								</div>
								<div className="modal-body">
									<i className="flaticon-cancel-12 close" data-dismiss="modal"></i>
									<div className="add-contact-box">
										<div className="add-contact-content">
											 <div className="form-group mb-3">
												<label className="text-black font-w500">Name</label>
												<div className="contact-name">
													<input type="text"  className="form-control"  autocomplete="off"
														name="name" required="required"
														onChange={handleAddFormChange}
														placeholder="name"
													/>
													<span className="validation-text"></span>
												</div>
											</div>
											<div className="form-group mb-3">
												<label className="text-black font-w500">Department</label>
												<div className="contact-name">
													<input type="text"  className="form-control"  autocomplete="off"
														name="department" required="required"
														onChange={handleAddFormChange}
														placeholder="department"
													/>
													<span className="validation-text"></span>
												</div>
											</div>
											<div className="form-group mb-3">
												<label className="text-black font-w500">Gender</label>
												<div className="contact-name">
													<input type="text"  className="form-control"  autocomplete="off"
														name="gender" required="required"
														onChange={handleAddFormChange}
														placeholder="gender"
													/>
													<span className="validation-text"></span>
												</div>
											</div>
											<div className="form-group mb-3">
												<label className="text-black font-w500">Education</label>
												<div className="contact-name">
													<input type="text"  className="form-control"  autocomplete="off"
														name="education" required="required"
														onChange={handleAddFormChange}
														placeholder="education"
													/>
													<span className="validation-text"></span>
												</div>
											</div>
											<div className="form-group mb-3">
												<label className="text-black font-w500">Mobile</label>
												<div className="contact-name">
													<input type="text"  className="form-control"  autocomplete="off"
														name="mobile" required="required"
														onChange={handleAddFormChange}
														placeholder="mobile"
													/>
													<span className="validation-text"></span>
												</div>
											</div>
											<div className="form-group mb-3">
												<label className="text-black font-w500">Email</label>
												<div className="contact-name">
													<input type="text"  className="form-control"  autocomplete="off"
														name="email" required="required"
														onChange={handleAddFormChange}
														placeholder="email"
													/>
													<span className="validation-text"></span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="modal-footer">
									<button type="submit" className="btn btn-primary" onClick={handleAddFormSubmit}>Add</button>   
									<button type="button" onClick={()=> setAddCard(false)} className="btn btn-danger"> <i className="flaticon-delete-1"></i> Discard</button>      
								</div>
							</form>
							
						</div>
					</div>
				</Modal>
				<div className="card">
					<div className="card-header">
						<h4 className="card-title">Profile Datatable</h4>
					</div>
					<div className="card-body">
						<div className="w-100 table-responsive">
							<div id="example_wrapper" className="dataTables_wrapper">
								<form onSubmit={handleEditFormSubmit}>
									<table id="example" className="display w-100 dataTable">
										<thead>
											<tr>
												<th></th>
												<th>Name</th>
												<th>Department</th>
												<th>Gender</th>
												<th>Education</th>
												<th>Mobile</th>
												<th>Email</th>
												<th>Action</th>
											</tr>
										</thead>
										<tbody>
											{contents.map((content)=>(
												<>
													{editContentId === content.id ? 
														( 
															<Editable editFormData={editFormData} 
																handleEditFormChange={handleEditFormChange} handleCancelClick={handleCancelClick}/> 
																) : 
														( 
															<tr>
																<td><img className="rounded-circle" width="35" src={pic1} alt="" /></td>
																<td>{content.name}</td>
																<td>{content.department}</td>
																<td>{content.gender}</td>
																<td>{content.education}</td>
																<td><strong>{content.mobile}</strong></td>
																<td><strong>{content.email}</strong></td>
																<td>
																	<div className="d-flex">
																		<Link className="btn btn-primary shadow btn-xs sharp me-2"
																			onClick={()=> setAddCard(true)}
																		>
																			<i className="fa fa-plus"></i>
																		</Link>
																		<Link  className="btn btn-secondary	 shadow btn-xs sharp me-2"
																			onClick={(event) => handleEditClick(event, content)}
																		>
																			<i className="fas fa-pen"></i>
																		</Link>
																		<Link  className="btn btn-danger shadow btn-xs sharp" 
																			onClick={()=>handleDeleteClick(content.id)}
																		> 
																			<i className="fa fa-trash"></i>
																		</Link>
																			
																	</div>												
																</td>			
															</tr>   
														)
													}
												</>    
											))}
										</tbody>
									</table>
								</form>	
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
export default Todo;