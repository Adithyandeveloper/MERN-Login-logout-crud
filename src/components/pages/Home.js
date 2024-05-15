// Homes.js
import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { UserDetailsService } from '../../service/userlist';

const Homes = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [department, setDepartment] = useState('');
  const [employeeData, setEmployeeData] = useState([]);
  const { createEmployee, getEmployeeDetails, editEmployee, deleteEmployee } = UserDetailsService();
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  useEffect(() => {
    getEmployee();
  }, []);

  const getEmployee = () => {
    getEmployeeDetails().then((res) => {
      setEmployeeData(res?.data?.data);
     
    }, error => {
      console.error('Error fetching employee data:', error);
    });
  };

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setSelectedEmployee(null);
  };

  const handleSave = () => {
    const newEmployee = {
      name,
      phonenumber: phoneNumber,
      department,
    };

    const editEmployees = {
      _id: selectId,
      name,
      phonenumber: phoneNumber,
      department,
    }
    console.log(editEmployees)
    if (selectedEmployee) {
      editEmployee(editEmployees).then((res) => {
        if (res?.data?.data.success) {
          getEmployee()

        }
      })
    } else {
      // Create new employee
      createEmployee(newEmployee).then((res) => {
        if (res?.data?.success) {
          console.log(res.message);
          setEmployeeData([...employeeData, newEmployee]); // Update table data
         
        } else {
          console.error('Error:', res.message);
        }
      });
    }

    handleCloseDialog();
  };

  const [selectId, setSelectId] = useState()
  const handleEdit = (employee) => {
    console.log(employee)
    setSelectedEmployee(employee);
    setSelectId(employee._id)
    setName(employee.name);
    setPhoneNumber(employee.phonenumber);
    setDepartment(employee.department);
    handleOpenDialog();

  };

  const handleDelete = (employeeId) => {
    deleteEmployee(employeeId).then((res) => {
      if (res?.data?.success) {
        console.log(res.message);
        setEmployeeData(employeeData.filter((employee) => employee._id !== employeeId)); // Update table data
      } else {
        console.error('Error:', res.message);
      }
    });
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpenDialog}>
        Add Employee
      </Button>

      <Dialog open={dialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>{selectedEmployee ? 'Edit Employee' : 'Add Employee'}</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="Phone Number"
            fullWidth
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <TextField
            label="Department"
            fullWidth
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />
        </DialogContent>
        <div style={{ padding: 16 }}>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary" variant="contained">
            {selectedEmployee ? 'Save Changes' : 'Submit'}
          </Button>
        </div>
      </Dialog>

      <TableContainer component={Paper} style={{ marginTop: 20 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Phone Number</TableCell>
              <TableCell>Department</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employeeData.map((employee, index) => (
              <TableRow key={index}>
                <TableCell>{employee.name}</TableCell>
                <TableCell>{employee.phonenumber}</TableCell>
                <TableCell>{employee.department}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleEdit(employee)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(employee._id)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Homes;
