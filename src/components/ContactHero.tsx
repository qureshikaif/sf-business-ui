import { Button } from "./ui/button";

const ContactHero = () => {
  return (
    <section className="lg:h-screen w-screen flex flex-col lg:flex-row items-center justify-between">
      <div className="lg:w-1/2 h-screen flex flex-col items-center justify-center">
        <div className="w-11/12 lg:w-2/3 px-3 space-y-3 lg:space-y-8">
          <h1 className="text-blue-700 font-medium">Let&apos;s Connect</h1>
          <div className="space-y-4">
            <p className="text-3xl leading-10 font-medium">
              Get in touch to streamline your financial operations. Get
              Complimentary consultation.
            </p>

            <div className="h-full flex space-x-5">
              <Button className="font-normal bg-blue-700">
                Book a meeting
              </Button>
              <Button
                variant={"ghost"}
                className="text-blue-700 font-normal border border-blue-700"
              >
                Drop a message
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 w-screen bg-blue-700 h-screen lg:pt-20 hidden lg:block"></div>
    </section>
  );
};

export default ContactHero;
