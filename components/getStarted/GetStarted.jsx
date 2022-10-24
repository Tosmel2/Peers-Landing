import GetStartedStyle from "./GetStartedStyle";

const GetStarted = () => {
  return (
    <GetStartedStyle>
      <h2 className='text-center my-3 text-2xl font-semibold'>
        Get started in 3 simple steps
      </h2>
      <h4>1. Download the app</h4>
      <ul>
        <li>
          Log into Google Play Store for Android users and Apple App Store for
          IOS users
        </li>
        <li>
          Download and install the app <span className='bold'>PeersApp</span>
        </li>
      </ul>
      <h4>2. Create your account</h4>
      <ul>
        <li>Create your account using your email address and password</li>
        <li>Log in and Register your details.</li>
      </ul>
      <h4>3. Start peering!</h4>
      <ul>
        <li>Congrats, you've now downloaded the app.</li>
        <li>
          Now use it to learn, make new friends and most importantly have fun
          while doing it.
        </li>
      </ul>
    </GetStartedStyle>
  );
};

export default GetStarted;
