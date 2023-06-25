import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";

export default function Favorites() {
  return (
    <section>
      <div className="container-fluid fav-container ">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="card-container">
                <div className="row mt-4">
                  <div className="col-12 text-center">
                    <h1>Our Favorites</h1>
                  </div>
                </div>

                <div className="row text-center">
                  <div className="tabs border mt-3">
                    <ChakraProvider>
                      <Tabs className="justify-content-center">
                        <TabList className="justify-content-center pb-4">
                          <Tab>Tab 1</Tab>
                          <Tab>Tab 2</Tab>
                          <Tab>Tab 3</Tab>
                        </TabList>

                        <TabPanels>
                          <TabPanel>
                            <div className="row justify-content-center">
                              <div className="col-lg-4 col-md-4 col-sm-12border border-primary d-flex justify-content-center">
                                <div className="card">
                                  <img
                                    src="	https://www.3sixteen.com/cdn/shop/files/Pic_52_of_96_900x.jpg?v=1680202393"
                                    className="card-img-top"
                                    alt="..."
                                  />
                                  <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <div className="btn-div2">
                                      <a
                                        href="/"
                                        className="main-btn btn shop-men px-5 mb-2"
                                      >
                                        <p className="text">SHOP MEN</p>
                                      </a>
                                      <a
                                        href="/"
                                        className="main-btn btn shop-women"
                                      >
                                        <p className="text">SHOP WOMEN</p>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4 col-sm-12border border-primary d-flex justify-content-center">
                                <div className="card">
                                  <img
                                    src="	https://www.3sixteen.com/cdn/shop/files/Pic_52_of_96_900x.jpg?v=1680202393"
                                    className="card-img-top"
                                    alt="..."
                                  />
                                  <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <div className="btn-div2">
                                      <a
                                        href="/"
                                        className="main-btn btn shop-men px-5 mb-2"
                                      >
                                        <p className="text">SHOP MEN</p>
                                      </a>
                                      <a
                                        href="/"
                                        className="main-btn btn shop-women"
                                      >
                                        <p className="text">SHOP WOMEN</p>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4 col-sm-12border border-primary d-flex justify-content-center">
                                <div className="card">
                                  <img
                                    src="	https://www.3sixteen.com/cdn/shop/files/Pic_52_of_96_900x.jpg?v=1680202393"
                                    className="card-img-top"
                                    alt="..."
                                  />
                                  <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <div className="btn-div2">
                                      <a
                                        href="/"
                                        className="main-btn btn shop-men px-5 mb-2"
                                      >
                                        <p className="text">SHOP MEN</p>
                                      </a>
                                      <a
                                        href="/"
                                        className="main-btn btn shop-women"
                                      >
                                        <p className="text">SHOP WOMEN</p>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </TabPanel>
                          <TabPanel>
                            <div className="row justify-content-center">
                              <div className="col-lg-4 col-md-4 col-sm-12border border-primary d-flex justify-content-center">
                                <div className="card">
                                  <img
                                    src="https://southernmarsh.com/cdn/shop/files/SS23_SubBanner2_Tees_fb61310c-bf4e-4119-b6e1-a2ea3923f5e6_1024x1024_crop_center.jpg?v=1687204332"
                                    className="card-img-top"
                                    alt="..."
                                  />
                                  <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <div className="btn-div2">
                                      <a
                                        href="/"
                                        className="main-btn btn shop-men px-5 mb-2"
                                      >
                                        <p className="text">SHOP MEN</p>
                                      </a>
                                      <a
                                        href="/"
                                        className="main-btn btn shop-women"
                                      >
                                        <p className="text">SHOP WOMEN</p>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4 col-sm-12border border-primary d-flex justify-content-center">
                                <div className="card">
                                  <img
                                    src="https://southernmarsh.com/cdn/shop/files/SS23_SubBanner2_Tees_fb61310c-bf4e-4119-b6e1-a2ea3923f5e6_1024x1024_crop_center.jpg?v=1687204332"
                                    className="card-img-top"
                                    alt="..."
                                  />
                                  <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <div className="btn-div2">
                                      <a
                                        href="/"
                                        className="main-btn btn shop-men px-5 mb-2"
                                      >
                                        <p className="text">SHOP MEN</p>
                                      </a>
                                      <a
                                        href="/"
                                        className="main-btn btn shop-women"
                                      >
                                        <p className="text">SHOP WOMEN</p>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4 col-sm-12border border-primary d-flex justify-content-center">
                                <div className="card">
                                  <img
                                    src="https://southernmarsh.com/cdn/shop/files/SS23_SubBanner2_Tees_fb61310c-bf4e-4119-b6e1-a2ea3923f5e6_1024x1024_crop_center.jpg?v=1687204332"
                                    className="card-img-top"
                                    alt="..."
                                  />
                                  <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <div className="btn-div2">
                                      <a
                                        href="/"
                                        className="main-btn btn shop-men px-5 mb-2"
                                      >
                                        <p className="text">SHOP MEN</p>
                                      </a>
                                      <a
                                        href="/"
                                        className="main-btn btn shop-women"
                                      >
                                        <p className="text">SHOP WOMEN</p>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </TabPanel>
                          <TabPanel>
                            <div className="row justify-content-center">
                              <div className="col-lg-4 col-md-4 col-sm-12border border-primary d-flex justify-content-center">
                                <div className="card">
                                  <img
                                    src="	https://www.3sixteen.com/cdn/shop/files/Pic_52_of_96_900x.jpg?v=1680202393"
                                    className="card-img-top"
                                    alt="..."
                                  />
                                  <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <div className="btn-div2">
                                      <a
                                        href="/"
                                        className="main-btn btn shop-men px-5 mb-2"
                                      >
                                        <p className="text">SHOP MEN</p>
                                      </a>
                                      <a
                                        href="/"
                                        className="main-btn btn shop-women"
                                      >
                                        <p className="text">SHOP WOMEN</p>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4 col-sm-12border border-primary d-flex justify-content-center">
                                <div className="card">
                                  <img
                                    src="	https://www.3sixteen.com/cdn/shop/files/Pic_52_of_96_900x.jpg?v=1680202393"
                                    className="card-img-top"
                                    alt="..."
                                  />
                                  <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <div className="btn-div2">
                                      <a
                                        href="/"
                                        className="main-btn btn shop-men px-5 mb-2"
                                      >
                                        <p className="text">SHOP MEN</p>
                                      </a>
                                      <a
                                        href="/"
                                        className="main-btn btn shop-women"
                                      >
                                        <p className="text">SHOP WOMEN</p>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4 col-sm-12border border-primary d-flex justify-content-center">
                                <div className="card">
                                  <img
                                    src="	https://www.3sixteen.com/cdn/shop/files/Pic_52_of_96_900x.jpg?v=1680202393"
                                    className="card-img-top"
                                    alt="..."
                                  />
                                  <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <div className="btn-div2">
                                      <a
                                        href="/"
                                        className="main-btn btn shop-men px-5 mb-2"
                                      >
                                        <p className="text">SHOP MEN</p>
                                      </a>
                                      <a
                                        href="/"
                                        className="main-btn btn shop-women"
                                      >
                                        <p className="text">SHOP WOMEN</p>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </TabPanel>
                        </TabPanels>
                      </Tabs>
                    </ChakraProvider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
