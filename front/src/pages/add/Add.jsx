import React, { useEffect, useState } from "react";
import "./add.scss";
import Footer from "../../components/homepages/footer/Footer";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Navbar from "../../components/navbar/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { postData, getData, delData } from "../../redux/slice/slice";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Input } from "@mui/material";
const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  detail: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  price: Yup.number().required("Required"),
  image: Yup.string().url().required("Required"),

  //   .matches(
  //     /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
  //     'Enter correct url!'
  // )
});

const Add = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);

  const [inp, setinp] = useState("");

  let searchedData = products.filter((p)=>p.name.toLowerCase().includes(inp))
  return (
    <section id="add">
      <div className="add">
        <div className="nav">
          <Navbar />
        </div>
        <div className="container">
          <div className="my">
            <div className="add_data">
              <Formik
                initialValues={{
                  name: "",
                  detail: "",
                  price: 0,
                  image: "",
                }}
                validationSchema={SignupSchema}
                onSubmit={(values, { resetForm }) => {
                  dispatch(postData(values));
                  console.log(values);
                  alert("added");
                  resetForm();
                }}
              >
                {({ errors, touched }) => (
                  <Form className="form">
                    <Field className="inp" name="name" placeholder="Name" />
                    {errors.name && touched.name ? (
                      <p>{errors.name}</p>
                    ) : null}
                    <Field className="inp" name="detail" placeholder="Detail" />
                    {errors.detail && touched.detail ? (
                      <div>{errors.detail}</div>
                    ) : null}
                    <Field
                      className="inp"
                      name="price"
                      type="number"
                      placeholder="Price"
                    />
                    {errors.price && touched.price ? (
                      <div>{errors.price}</div>
                    ) : null}
                    <Field className="inp" name="image" placeholder="Image" />
                    {errors.image && touched.image ? (
                      <div>{errors.image}</div>
                    ) : null}
                    <button type="submit">Add</button>
                  </Form>
                )}
              </Formik>
            </div>

            <div className="table">
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 900 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>ID</TableCell>
                      <TableCell align="left">Name</TableCell>
                      <TableCell align="left">Detail</TableCell>
                      <TableCell align="left">Price</TableCell>
                      <TableCell align="left">Delete</TableCell>
                      <TableCell align="left">
                        <Input
                          placeholder="Search"
                          onChange={(e) => {
                            setinp(e.target.value);
                          }}
                        />
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {searchedData
                      ? searchedData.map((row) => (
                          <TableRow
                            key={row._id}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell component="th" scope="row">
                              {row._id}
                            </TableCell>
                            <TableCell align="left">{row.name}</TableCell>
                            <TableCell align="left">{row.detail}</TableCell>
                            <TableCell align="left">{row.price}</TableCell>
                            <TableCell align="left">
                              <Button
                                onClick={() => {
                                  dispatch(delData(row._id));
                                }}
                              >
                                Delete
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))
                      : products.map((row) => (
                          <TableRow
                            key={row._id}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell component="th" scope="row">
                              {row._id}
                            </TableCell>
                            <TableCell align="left">{row.name}</TableCell>
                            <TableCell align="left">{row.detail}</TableCell>
                            <TableCell align="left">{row.price}</TableCell>
                            <TableCell align="left">
                              <Button
                                onClick={() => {
                                  dispatch(delData(row._id));
                                }}
                              >
                                Delete
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </section>
  );
};

export default Add;
