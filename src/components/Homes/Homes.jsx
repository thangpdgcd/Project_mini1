import "./Homes.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import { Navbar, Container, Nav, NavDropdown, Form, Row, Col, Table, Image, Pagination, } from "react-bootstrap";
const Homes = () => {
    const data = [{
        id: 1,
        name: "code"
    },
    {
        id: 2,
        name: "thang"
    },
    {
        id: 3,
        name: "ddf"
    },
    {
        id: 4,
        name: "cxcx"
    },]
    const [array, setArray] = useState(data);
    const [save, setSave] = useState();
    const [id] = useState(0);
    const [name, setName] = useState("")
    useEffect(() => {
        if (save) {
            const filterSearch = array.filter((item) => item.name.includes(save));
            setArray(filterSearch);
        } else {
            setArray(data);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [save]);
    console.log(save)
    const handleSearch = () => {

    }
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="bg-body" data-bs-theme="white">
                <Container className="header-container">
                    <Navbar.Brand href="/">Welcome</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/home">Home</Nav.Link><NavDropdown id="collapsible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Divider /><NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider /><NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/about">About</Nav.Link>
                            <NavDropdown id="collapsible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Divider /><NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider /><NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/contact">Contact</Nav.Link>
                            <NavDropdown id="collapsible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Divider /><NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider /><NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/contact">Contact</Nav.Link>
                            <NavDropdown id="collapsible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Divider /><NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider /><NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                            <Form inline>
                                <Row>
                                    <Col xs="auto">
                                        <Form.Control
                                            type="text"
                                            placeholder="Search"
                                            className=" mr-sm-2"
                                            onChange={(e) => {
                                                handleSearch(e.target.value)
                                            }
                                            }
                                        />
                                    </Col>
                                </Row>
                            </Form>
                        </Nav>
                        {/* <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>
                        </Nav> */}

                    </Navbar.Collapse>
                </Container>

            </Navbar>
            {/* ------------ */}

            {/* slider */}
            <div className="slider">
                <Image className="image-slider" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c961d409-51a5-42f1-a372-b7f860043645/ZM+SUPERFLY+10+ELITE+MDS+FG.png" alt="image" />
            </div>
            {/* ------------ */}
            {/* content */}


            <Container className="navbar-slider">
                <button type="button" className="close" aria-label="Close">
                    <span aria-hidden="true">&times;Photo</span>
                </button>

                <button type="button" className="close" aria-label="Close">
                    <span aria-hidden="true">&times;Photo</span>
                </button>

            </Container>

            {/* content-product */}



            <Container className="content-container col-4">
                <Row className="row-content">
                    <Col xs={6} md={4} className="col-content">
                        <Image className="image-content" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c961d409-51a5-42f1-a372-b7f860043645/ZM+SUPERFLY+10+ELITE+MDS+FG.png" rounded />
                        <div className="information-product">
                            <i className="star">*****</i>
                            <h5 className="product">product1</h5>
                            <span className="dorlar">$123</span>
                            <i className="view">1.3400</i>
                        </div>
                    </Col>
                    <Col xs={6} md={4} className="col-content" >
                        <Image className="image-content" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c961d409-51a5-42f1-a372-b7f860043645/ZM+SUPERFLY+10+ELITE+MDS+FG.png" rounded />
                        <div className="information-product">
                            <i className="star">*****</i>
                            <h5 className="product">product1</h5>
                            <span className="dorlar">$123</span>
                            <i className="view">1.3400</i>
                        </div>
                    </Col>
                    <Col xs={6} md={4} className="col-content">
                        <Image className="image-content" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c961d409-51a5-42f1-a372-b7f860043645/ZM+SUPERFLY+10+ELITE+MDS+FG.png" rounded />
                        <div className="information-product">
                            <i className="star">*****</i>
                            <h5 className="product">product1</h5>
                            <span className="dorlar">$123</span>
                            <i className="view">1.3400</i>
                        </div>
                    </Col>
                    <Col xs={6} md={4} className="col-content">
                        <Image className="image-content" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c961d409-51a5-42f1-a372-b7f860043645/ZM+SUPERFLY+10+ELITE+MDS+FG.png" rounded />
                        <div className="information-product">
                            <i className="star">*****</i>
                            <h5 className="product">product1</h5>
                            <span className="dorlar">$123</span>
                            <i className="view">1.3400</i>
                        </div>
                    </Col>
                    <Col xs={6} md={4} className="col-content" >
                        <Image className="image-content" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c961d409-51a5-42f1-a372-b7f860043645/ZM+SUPERFLY+10+ELITE+MDS+FG.png" rounded />
                        <div className="information-product">
                            <i className="star">*****</i>
                            <h5 className="product">product1</h5>
                            <span className="dorlar">$123</span>
                            <i className="view">1.3400</i>
                        </div>
                    </Col>
                    <Col xs={6} md={4} className="col-content">
                        <Image className="image-content" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c961d409-51a5-42f1-a372-b7f860043645/ZM+SUPERFLY+10+ELITE+MDS+FG.png" rounded />
                        <div className="information-product">
                            <i className="star">*****</i>
                            <h5 className="product">product1</h5>
                            <span className="dorlar">$123</span>
                            <i className="view">1.3400</i>
                        </div>
                    </Col>
                    <Col xs={6} md={4} className="col-content">
                        <Image className="image-content" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c961d409-51a5-42f1-a372-b7f860043645/ZM+SUPERFLY+10+ELITE+MDS+FG.png" rounded />
                        <div className="information-product">
                            <i className="star">*****</i>
                            <h5 className="product">product1</h5>
                            <span className="dorlar">$123</span>
                            <i className="view">1.3400</i>
                        </div>
                    </Col>
                    <Col xs={6} md={4} className="col-content" >
                        <Image className="image-content" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c961d409-51a5-42f1-a372-b7f860043645/ZM+SUPERFLY+10+ELITE+MDS+FG.png" rounded />
                        <div className="information-product">
                            <i className="star">*****</i>
                            <h5 className="product">product1</h5>
                            <span className="dorlar">$123</span>
                            <i className="view">1.3400</i>
                        </div>
                    </Col>
                    <Col xs={6} md={4} className="col-content">
                        <Image className="image-content" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c961d409-51a5-42f1-a372-b7f860043645/ZM+SUPERFLY+10+ELITE+MDS+FG.png" rounded />
                        <div className="information-product">
                            <i className="star">*****</i>
                            <h5 className="product">product1</h5>
                            <span className="dorlar">$123</span>
                            <i className="view">1.3400</i>
                        </div>
                    </Col>

                </Row>
            </Container>

            {/* ------------ */}


            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th> <Row>
                            <Col xs="auto">
                                <Form.Control
                                    type="text"
                                    placeholder="Search"
                                    className=" mr-sm-2"
                                    value={save}
                                    onChange={(e) => {
                                        setSave(e.target.value)
                                    }
                                    }
                                />
                            </Col>
                        </Row></th>
                    </tr>
                </thead>
                <tbody>
                    {/* dùng hàm map bỏ id vs name vào */}
                    {array.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>

                            {item.id === id ? (<Row>
                                <Col xs="auto">
                                    <Form.Control
                                        type="text"
                                        placeholder="Search"
                                        className=" mr-sm-2"
                                        value={name}
                                        onChange={(e) => {
                                            setName(e.target.value)
                                        }
                                        }
                                    />
                                </Col>
                            </Row>) : ""}

                            <td><button>edit</button></td>
                            <td><button>delete</button></td>
                        </tr>
                    ))}

                </tbody>
            </Table>



            {/* ------------ */}


            {/* footer */}
            <Pagination className="footer-header">
                <Pagination.First />
                <Pagination.Prev />
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Ellipsis />

                <Pagination.Item>{10}</Pagination.Item>
                <Pagination.Item>{11}</Pagination.Item>
                <Pagination.Item active>{12}</Pagination.Item>
                <Pagination.Item>{13}</Pagination.Item>
                <Pagination.Item disabled>{14}</Pagination.Item>

                <Pagination.Ellipsis />
                <Pagination.Item>{20}</Pagination.Item>
                <Pagination.Next />
                <Pagination.Last />
            </Pagination>
            {/* -------------- */}
        </>
    );
}
export default Homes;