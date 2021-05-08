import { Grid } from '@material-ui/core'

export default function FooterRowTwo() {
    return (
        <Grid container className="flex pb-12">
        <Grid item xs={12} sm={4}>
            <div className="flex sm:justify-center items-center">
            <div className="flex flex-col pb-10  pl-10 sm:pl-0">
            <h3 className="font-medium text-lg pb-2 font-medium">CONTACT US </h3>

            <div className="py-4">
            <p className="text-sm font-normal leading-loose">PHONE:</p>
            <p className="text-sm font-normal leading-loose">+1832-614-1954</p>
            </div>
            
            <div className="py-4">
            <p className="text-sm font-normal leading-loose">EMAIL:</p>
            <p className="text-sm font-normal leading-loose">info@awesumedge.com</p>
            </div>

            <div className="py-4">
            <p className="text-sm font-normal leading-loose">WORKING DAYS/HOURS:</p>
            <p className="text-sm font-normal leading-loose">Mon - Fri / 9:00AM - 5:00PM</p>
            </div>
            
            <div className="py-4">
            <p className="text-sm font-normal leading-loose">WORKING DAYS/HOURS:</p>
            <p className="text-sm font-normal leading-loose">Mon - Fri / 9:00AM - 5:00PM</p>
            </div>

            <div className="py-4">
            <p className="text-sm font-normal leading-loose">ADDRESS:</p>
            <p className="text-sm font-normal leading-loose">P.O Box 243, Beaverton, 0regon, 97075 USA</p>
            </div>

          </div>
            </div>
          
        </Grid>
        <Grid item xs={12} sm={4}>
        <div className="flex sm:justify-center items-center">
          <div className="flex flex-col gap-3 pb-10  pl-10 sm:pl-0">
            <h3 className="font-medium text-lg pb-2 font-medium">WHO WE ARE</h3>
            <p className="text-sm font-normal leading-loose">About Us</p>
            <p className="text-sm font-normal leading-loose">Our Team</p>
            <p className="text-sm font-normal leading-loose">Work With Us</p>
          </div>
          </div>

        </Grid>
        <Grid item xs={12} sm={4}>
        <div className="flex sm:justify-center items-center ">
          <div className="flex flex-col gap-3 pb-10  pl-10 sm:pl-0">
            <h3 className="font-medium text-lg pb-2 font-medium">AWESUM</h3>
            <p className="text-sm font-normal leading-loose">Awesum Quiz</p>
            <p className="text-sm font-normal leading-loose">Refer a Friend</p>
            <p className="text-sm font-normal leading-loose">Feedback</p>
            <p className="text-sm font-normal leading-loose">Help</p>
          </div>
          </div>
        </Grid>
      </Grid>
   
    )
}
