import React, { ReactNode } from "react";

import Contribution from '../Contribution/Contribution'
import Footer from '../Footer/Footer'

interface ILayoutProps {
  children?: ReactNode
}

const Layout = (props: ILayoutProps) => {
  return (
    <React.Fragment>
      { props.children }
      <Contribution />
      <Footer />
    </React.Fragment>
  );
}

export default Layout;