import logo from "../../../assets/images/hm_logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-2 border-t">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">

        <div className="text-gray-700 text-sm text-center md:text-left">
          © Hotspot Mobile – All Rights Reserved.
        </div>

        <div className="flex justify-center">
          <img alt="logo" src={logo} width={24} height={24} />
        </div>

        <div className="text-gray-700 text-sm text-center md:text-right">
          Developed by{' '}
          <a href='https://ajmalnasumudeen.in/' target='_blank' className="underline hover:text-secondary">
            Ajmal Nasumudeen
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
