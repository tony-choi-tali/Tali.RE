import { EmailOutlined, PhoneOutlined } from "@mui/icons-material";
import { Grid } from "@mui/material";
import FullPageLoader from "../../components/FullPageLoader/FullPageLoader";
import MobileVideo from "components/MobileVideo/MobileVideo";

const Home = () => {
  return (
    <>
      <FullPageLoader />
      <Grid container spacing={3} className="mt-5">
        <Grid item xs={12} md={6}>
          <div>
            <p className="p-0 m-0 big-text">We don&apos;t sell leads;</p>
            <p className="p-0 m-0 big-text">We partner on real deals!</p>
            <p className="text-lg mt-9">
              <span>Our mission is simple;</span>
              <br />
              Our mission is simple; We target, source, and build valuable
              relationships with off market sellers and deliver best in class
              opportunities to our real estate partners. No more door knocking,
              no more wasted sales calls, just highly motivated, curated deal
              flow.
            </p>
          </div>
          <div className="mt-[6rem]">
            <p className="font-bold text-[1.8rem] p-0 m-0">We are TALI</p>
            <div className="mt-2 faded-divider" />
            <p id="#about" className="text-lg">
              For information regarding vendor sign ups, please contact Eric
              Nelson
            </p>
            <div className="flex items-end gap-4 mt-16">
              <EmailOutlined fontSize="large" />
              <span className="text-lg">e.nelson@tali.re</span>
            </div>
            <div className="flex items-end gap-4 mt-4">
              <PhoneOutlined fontSize="large" />
              <span className="text-lg">(714) 357-9992</span>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <MobileVideo />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
