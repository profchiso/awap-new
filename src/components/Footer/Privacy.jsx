import { Link } from "react-router-dom";
import useWindowDimensions from "../../Hooks/UseWindowDimension";

export default function Privacy() {
    const {width} = useWindowDimensions()
  return (
    <div className="max-w-screen-2xl mx-auto px-6 lg:px-16">
      <h3 className="text-base text-primary sm:text-lg lg:text-2xl text-center py-12 pb-20">
        PRIVACY POLICY AGREEMENT
      </h3>
      <div className="text-base  max-w-3xl mx-auto font-medium leading-7">
        <div className="opacity-75 ">
          <div className="">
            Welcome to the Awesumedge's Privacy Notice (“Notice”).
          </div>
          <br />
          <div>
            <Link
              to="/"
              className="text-primary hover:text-primary hover:underline"
            >
              www.awesumedge.com
            </Link>{" "}
            is an e-learning platform where students can access thousands of
            instructional videos, past questions and lots of practice problems
            to better prepare them for success. It is operated by AwesumEdge LLC
            and its subsidiaries.
          </div>
          <br />
          <div>
            AwesumEdge LLC values its users' privacy. This Privacy Policy
            ("Policy") will help you understand how we collect and use personal
            information from those who visit our website or make use of our
            online facilities and services, and what we will and will not do
            with the information we collect. Our Policy has been designed and
            created to ensure those affiliated with AwesumEdge LLC of our
            commitment and realization of our obligation not only to meet, but
            to exceed, most existing privacy standards.
          </div>
          <br />
          <div>
            We reserve the right to make changes to this Policy at any given
            time. If you want to make sure that you are up to date with the
            latest changes, we advise you to frequently visit this page. If at
            any point in time AwesumEdge LLC decides to make use of any
            personally identifiable information on file, in a manner vastly
            different from that which was stated when this information was
            initially collected, the user or users shall be promptly notified by
            email. Users at that time shall have the option as to whether to
            permit the use of their information in this separate manner.
          </div>
          <br />
          <div>
            This Policy applies to AwesumEdge LLC and any subsidiary company
            listed below, and it governs any and all data collection and usage
            by us. Through the use of www.awesumedge.com and any subsidiary
            website listed below, you are therefore consenting to the data
            collection procedures expressed in this Policy.
          </div>
          <br />
          <div className="flex flex-col sm:flex-row gap-5 text-center justify-around">
            <div className="flex-col">
              <div className="font-bold">Subsidiary Company</div>
              <div>AwesumEdge Nigeria Limited</div>
            </div>
            <div className="flex-col">
              <div className="font-bold">Subsidiary Website</div>
              <div>
                <Link
                  to="/"
                  className="text-primary hover:text-primary hover:underline"
                >
                  www.awesumedge.com
                </Link>
              </div>
            </div>
          </div>
          <br /> <br />
          <div>
            Please note that this Policy does not govern the collection and use
            of information by companies that AwesumEdge LLC does not control,
            nor by individuals not employed or managed by us. If you visit a
            website that we mention or link to, be sure to review its privacy
            policy before providing the site with information. It is highly
            recommended and suggested that you review the privacy policies and
            statements of any website you choose to use or frequent to better
            understand the way in which websites garner, make use of and share
            the information collected.
          </div>
          <br />
          <div className="ml-5">
            <div>
              Specifically, this Policy will inform you of the following:
            </div>
            <ol class="list-decimal pt-2 list-outside">
              <li className="pl-2">
                What personally identifiable information is collected from you
                through our website;
              </li>
              <li className="pl-2">
                Why we collect personally identifiable information and the legal
                basis for such collection;
              </li>
              <li className="pl-2">
                How we use the collected information and with whom it may be
                shared;
              </li>
              <li className="pl-2">
                What choices are available to you regarding the use of your
                data; and
              </li>
              <li className="pl-2">
                The security procedures in place to protect the misuse of your
                information
              </li>
            </ol>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div>
          <div className="text-primary text-xl">Information We Collect</div>
          <br />
          <div className="opacity-75 ">
            <div>
              It is always up to you whether to disclose personally identifiable
              information to us, although if you elect not to do so, we reserve
              the right not to register you as a user or provide you with any
              products or services. This website collects various types of
              information, such as:
            </div>
            <br />
            <div className="ml-5">
              <ul className="list-disc  pt-2 list-outside">
                <li className="pl-2">
                  Voluntarily provided information which may include your name,
                  email address, billing and/or credit card information etc.
                  which may be used when you purchase products and/or services
                  and to deliver the services you have requested.
                </li>
                <li className="pl-2">
                  Information automatically collected when visiting our website,
                  which may include cookies, third party tracking technologies
                  and server logs.
                </li>
              </ul>
            </div>
            <br />
            <div>
              In addition, AwesumEdge LLC may have the occasion to collect
              non-personal anonymous demographic information, such as age,
              gender and race, as well as the type of browser you are using, IP
              address, or type of operating system, which will assist us in
              providing and maintaining superior quality service.
            </div>
            <br />
            <div>
              AwesumEdge LLC may also deem it necessary, from time to time, to
              follow websites that our users may frequent to gleam what types of
              services and products may be the most popular to customers or the
              general public.
            </div>
            <br />
            <div>
              Please be rest assured that this site will only collect personal
              information that you knowingly and willingly provide to us by way
              of surveys, completed membership forms, and emails. It is the
              intent of this site to use personal information only for the
              purpose for which it was requested, and any additional uses
              specifically provided for on this Policy.
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div>
          <div className="text-primary text-xl">
            Why We Collect Information and For How Long
          </div>
          <br />
          <div className="opacity-75 ">
            <div>We are collecting your data for several reasons:</div>
            <br />
            <div className="ml-5">
              <ul className="list-disc  pt-2 list-outside">
                <li className="pl-2">
                  To better understand your needs and provide you with the
                  services you have requested
                </li>
                <li className="pl-2">
                  To fulfill our legitimate interest in improving our services
                  and products;
                </li>
                <li className="pl-2">
                  To send you promotional emails containing information we think
                  you may like when we have your consent to do so.
                </li>
                <li className="pl-2">
                  To contact you to fill out surveys or participate in other
                  types of market research, when we have your consent to do so;
                </li>
                <li className="pl-2">
                  To customize our website according to your online behavior and
                  personal preferences.
                </li>
              </ul>
            </div>
            <br />
            <div>
              The data we collect from you will be stored for no longer than
              necessary. The length of time we retain said information will be
              determined based upon the following criteria: the length of time
              your personal information remains relevant; the length of time it
              is reasonable to keep records to demonstrate that we have
              fulfilled our duties and obligations; any limitation periods
              within which claims might be made; any retention periods
              prescribed by law or recommended by regulators, professional
              bodies or associations; the type of contract we have with you, the
              existence of your consent, and our legitimate interest in keeping
              such information as stated in this Policy.
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div>
          <div className="text-primary text-xl">
            Use of Information Collected
          </div>
          <br />
          <div className="opacity-75 ">
            <div>
              AwesumEdge LLC does not now, nor will it in the future, sell, rent
              or lease any of its customer lists and/or names to any third
              parties.
            </div>
            <br />
            <div>
              AwesumEdge LLC may collect and may make use of personal
              information to assist in the operation of our website and to
              ensure delivery of the services you need and request. At times, we
              may find it necessary to use personally identifiable information
              as a means to keep you informed of other possible products and/or
              services that may be available to you from www.awesumedge.com and
              its subsidiaries.
            </div>
            <br />
            <div>
              AwesumEdge LLC and its subsidiaries may also be in contact with
              you with regards to completing surveys and/or research
              questionnaires related to your opinion of current or potential
              future services that may be offered.
            </div>
            <br />
            <div>
              AwesumEdge LLC may feel it necessary, from time to time, to
              contact you on behalf of our other external business partners with
              regards to a potential new offer which may be of interest to you.
              If you consent or show interest in presented offers, then, at that
              time, specific identifiable information, such as name, email
              address and/or telephone number, may be shared with the third
              party.
            </div>
            <br />
            <div>
              AwesumEdge LLC may find it beneficial to all our customers to
              share specific data with our trusted partners in an effort to
              conduct statistical analysis, provide you with email and/or postal
              mail, deliver support and/or arrange for deliveries to be made.
              Those third parties shall be strictly prohibited from making use
              of your personal information, other than to deliver those services
              which you requested, and as such they are required, in accordance
              with this agreement, to maintain the strictest of confidentiality
              with regards to all your information.
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div>
          <div className="text-primary text-xl">Disclosure of Information</div>
          <br />
          <div className="opacity-75 ">
            <div>
              AwesumEdge LLC may not use or disclose the information provided by
              you except under the following circumstances:
            </div>
            <br />
            <div className="ml-5">
              <ul className="list-disc  pt-2 list-outside">
                <li className="pl-2">
                  as necessary to provide services or products you have ordered
                </li>
                <li className="pl-2">
                  in other ways described in this Policy or to which you have
                  otherwise consented
                </li>
                <li className="pl-2">
                  in the aggregate with other information in such a way so that
                  your identity cannot reasonably be determined
                </li>
                <li className="pl-2">
                  as required by law, or in response to a subpoena or search
                  warrant;
                </li>
                <li className="pl-2">
                  to outside auditors who have agreed to keep the information
                  confidential;
                </li>
                <li className="pl-2">
                  as necessary to enforce the Terms of Service;
                </li>
                <li className="pl-2">
                  as necessary to maintain, safeguard and preserve all the
                  rights and property of AwesumEdge LLC;
                </li>
              </ul>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div>
          <div className="text-primary text-xl">Non-Marketing Purposes</div>
          <br />
          <div className="opacity-75 ">
            <div>
              AwesumEdge LLC greatly respects your privacy. We do maintain and
              reserve the right to contact you if needed for non-marketing
              purposes (such as bug alerts, security breaches, account issues,
              and/or changes in AwesumEdge LLC products and services). In
              certain circumstances, we may use our website, newspapers, or
              other public means to post a notice.
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div>
          <div className="text-primary text-xl">
            Children under the age of 18
          </div>
          <br />
          <div className="opacity-75 ">
            <div>
              AwesumEdge LLC's website is not directed to, and does not
              knowingly collect personal identifiable information from, children
              under the age of eighteen (18). If it is determined that such
              information has been inadvertently collected on anyone under the
              age of eighteen (18), we shall immediately take the necessary
              steps to ensure that such information is deleted from our system's
              database, or in the alternative, that verifiable parental consent
              is obtained for the use and storage of such information. Anyone
              under the age of eighteen (18) must seek and obtain parent or
              guardian permission to use this website. By using this website,
              you warrant that you have obtained such permission.
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div>
          <div className="text-primary text-xl">Unsubscribe or Opt-Out</div>
          <br />
          <div className="opacity-75 ">
            <div>
              All users and visitors to our website have the option to
              discontinue receiving communications from us by way of email or
              newsletters. To discontinue or unsubscribe from our website please
              send an email that you wish to unsubscribe to{" "}
              <a
                href="mailto:info@awesumedge.com"
                className="text-primary hover:text-primary hover:underline"
              >
                info@awesumedge.com
              </a>
              . If you wish to unsubscribe or opt-out from any third-party
              websites, you must go to that specific website to unsubscribe or
              opt-out. AwesumEdge LLC will continue to adhere to this Policy
              with respect to any personal information previously collected.
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div>
          <div className="text-primary text-xl">Links to Other Websites</div>
          <br />
          <div className="opacity-75 ">
            <div>
              Our website does contain links to affiliate and other websites.
              AwesumEdge LLC does not claim nor accept responsibility for any
              privacy policies, practices and/or procedures of other such
              websites. Therefore, we encourage all users and visitors to be
              aware when they leave our website and to read the privacy
              statements of every website that collects personally identifiable
              information. This Privacy Policy Agreement applies only and solely
              to the information collected by our website
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div>
          <div className="text-primary text-xl">
            Notice to European Union Users
          </div>
          <br />
          <div className="opacity-75 ">
            <div>
              AwesumEdge LLC's operations are located primarily in the United
              States and Nigeria. If you provide information to us, the
              information will be transferred out of the European Union (EU) and
              sent to the United States. (The adequacy decision on the EU-US
              Privacy became operational on August 1, 2016. This framework
              protects the fundamental rights of anyone in the EU whose personal
              data is transferred to the United States for commercial purposes.
              It allows the free transfer of data to companies that are
              certified in the US under the Privacy Shield.) By providing
              personal information to us, you are consenting to its storage and
              use as described in this Policy.{" "}
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div>
          <div className="text-primary text-xl">Security</div>
          <br />
          <div className="opacity-75 ">
            <div>
              AwesumEdge LLC takes precautions to protect your information. When
              you submit sensitive information via the website, your information
              is protected both online and offline. Wherever we collect
              sensitive information (e.g. credit card information), that
              information is encrypted and transmitted to us in a secure way.
              You can verify this by looking for a lock icon in the address bar
              and looking for "https" at the beginning of the address of the
              webpage.
            </div>
            <br />
            <div>
              While we use encryption to protect sensitive information
              transmitted online, we also protect your information offline. Only
              employees who need the information to perform a specific job (for
              example, billing or customer service) are granted access to
              personally identifiable information. The computers and servers in
              which we store personally identifiable information are kept in a
              secure environment. This is all done to prevent any loss, misuse,
              unauthorized access, disclosure or modification of the user's
              personal information under our control.
            </div>
            <br />
            <div>
              The company also uses Secure Socket Layer (SSL) for authentication
              and private communications to build users' trust and confidence in
              the internet and website use by providing simple and secure access
              and communication of credit card and personal information.
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div>
          <div className="text-primary text-xl">Acceptance of Terms </div>
          <br />
          <div className="opacity-75 ">
            <div>
              By using this website, you are hereby accepting the terms and
              conditions stipulated within the Privacy Policy Agreement. If you
              are not in agreement with our terms and conditions, then you
              should refrain from further use of our sites. In addition, your
              continued use of our website following the posting of any updates
              or changes to our terms and conditions shall mean that you agree
              and acceptance of such changes.
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div>
          <div className="text-primary text-xl">How to Contact Us </div>
          <br />
          <div className="opacity-75 ">
            <div>
              If you have any questions or concerns regarding the Privacy Policy
              Agreement related to our website, please feel free to contact us
              at the following email, telephone number or mailing address.
            </div>
            <br />

            <address className="not-italic flex gap-5">
              <div className="flex flex-col gap-5">
                <div className="font-bold pr-2"> Email:</div>
                <div className="font-bold pr-2"> Telephone {width > 640? "Number" : ""}:</div>
                <div className="font-bold"> Mailing Address:</div>
              </div>
           
              <div  className="flex flex-col gap-5">
                <div>
                  <a
                    href="mailto:info@awesumedge.com"
                    className="text-primary hover:text-primary hover:underline"
                  >
                    info@awesumedge.com
                  </a>
                </div>
                <div className="text-primary hover:text-primary">
                  +18326141954
                </div>

                <div className="text-primary">
                  <div>AwesumEdge LLC</div>
                  <div>PO Box 243</div>
                  <div>Beaverton, Oregon</div>
                  <div>97075</div>
                </div>
               
              </div>
            </address>
          </div>
        </div>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}
