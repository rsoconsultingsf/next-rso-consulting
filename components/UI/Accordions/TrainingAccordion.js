import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function SimpleAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <p style={{ margin: "0" }}>Course Outline</p>
        </AccordionSummary>
        <AccordionDetails>
          <h2>Part 1: Google Ads</h2>
          <ol>
            <li>
              <span style={{ color: "#f26523" }}>
                <strong>Google Ads/PPC Overview</strong>
              </span>
              <ul>
                <li>Overview of Paid Search</li>
                <li>PPC Benefits</li>
                <li>Types of Google Ads campaigns</li>
                <li>Google Ads vs. Bing Ads</li>
              </ul>
            </li>
            <li>
              <span style={{ color: "#f26523" }}>
                <strong>Google Ads Search Campaigns</strong>
              </span>
              <ul>
                <li>Account structure</li>
                <li>Setting up billing</li>
                <li>Manager accounts</li>
                <li>Quality Score</li>
                <li>Ad Rank</li>
              </ul>
            </li>
            <li>
              <span style={{ color: "#f26523" }}>
                <strong>Pre-Campaign Build Activities</strong>
              </span>
              <ul>
                <li>Determining the focus of your advertising campaigns</li>
                <li>Documenting the buyer’s journey</li>
                <li>Landing pages</li>
              </ul>
            </li>
            <li>
              <span style={{ color: "#f26523" }}>
                <strong>Building Search Campaigns</strong>
              </span>
              <ul>
                <li>Exploring features of the Campaign Builder Interface</li>
                <li>
                  Understanding the role of each type of advertising network
                </li>
                <li>Creating a Search Network Campaign</li>
                <li>Applying core settings</li>
                <li>Determining budget and bidding options</li>
                <li>Setting a campaign schedule</li>
                <li>Set up of conversion tracking</li>
                <li>
                  <b>Lab:</b>&nbsp;Building your own Google Ads search campaign
                </li>
              </ul>
            </li>
            <li>
              <span style={{ color: "#f26523" }}>
                <strong>Keyword Research</strong>
              </span>
              <ul>
                <li>Keyword match types</li>
                <li>Using the Keyword Planner for keyword research</li>
                <li>Competitor research</li>
                <li>Building Ad Groups</li>
                <li>
                  <b>Lab:</b>&nbsp;Conducting keyword research
                </li>
              </ul>
            </li>
            <li>
              <span style={{ color: "#f26523" }}>
                <strong>Creating Search Ads</strong>
              </span>
              <ul>
                <li>Anatomy of a paid search ad</li>
                <li>Ad extensions</li>
                <li>Creating search ads</li>
                <li>Best practices</li>
                <li>
                  <b>Lab:</b>&nbsp;Creating powerful ads using Google Ads best
                  practices
                </li>
              </ul>
            </li>
            <li>
              <span style={{ color: "#f26523" }}>
                <strong>Advanced Features</strong>
              </span>
              <ul>
                <li>Applying audience segmentation to your campaigns</li>
                <li>Remarketing</li>
                <li>Managing Google Ads campaigns</li>
                <li>
                  Using the reporting interface and understanding the key
                  metrics used in monitoring a campaign
                </li>
                <li>
                  <b>Lab:</b>&nbsp;Managing Google Ads
                </li>
              </ul>
            </li>
            <li>
              <span style={{ color: "#f26523" }}>
                <strong>Google Display Network</strong>
              </span>
              <ul>
                <li>Overview of Google Display Network (GDN)</li>
                <li>Types of ads used in GDN</li>
                <li>Determining which placement options to use</li>
                <li>YouTube campaigns</li>
                <li>App promotion campaigns</li>
              </ul>
            </li>
            <li>
              <span style={{ color: "#f26523" }}>
                <strong>Working with Agencies</strong>
              </span>
              <ul>
                <li>Benefits of working with agencies</li>
                <li>How to connect your account to an agency’s account</li>
                <li>Managing the relationship with an agency</li>
              </ul>
            </li>
          </ol>
          <h2>Part 2: Google Analytics</h2>
          <ol>
            <li>
              <span style={{ color: "#f26523" }}>
                <strong>Introduction to Digital Analytics</strong>
              </span>
              <ul>
                <li>What digital analytics can measure</li>
                <li>Determining what you should measure</li>
                <li>
                  Preparing your website and marketing campaigns for digital
                  analytics measurement
                </li>
              </ul>
            </li>
            <li>
              <span style={{ color: "#f26523" }}>
                <strong>Introduction to Google Analytics</strong>
              </span>
              <ul>
                <li>Overview of the user interface</li>
                <li>Dimensions and metrics</li>
                <li>Common metrics used in campaign measurement</li>
                <li>
                  <b>Lab:</b>&nbsp;Determining what to measure in your digital
                  marketing campaigns
                </li>
              </ul>
            </li>
            <li>
              <span style={{ color: "#f26523" }}>
                <strong>Setting Up Google Analytics</strong>
              </span>
              <ul>
                <li>Creating your account</li>
                <li>Inserting your tracking code</li>
                <li>Accessing the Google Analytics Demo Account</li>
                <li>
                  <b>Lab:</b>&nbsp;Looking inside Google Analytics
                </li>
                <li>Connecting to Google Ads</li>
                <li>Connecting to Google Search Console</li>
                <li>
                  <b>Lab:</b>&nbsp;Connecting Google Ads and Google Search
                  Console to Google Analytics
                </li>
              </ul>
            </li>
            <li>
              <span style={{ color: "#f26523" }}>
                <strong>Inside Google Analytics</strong>
              </span>
              <ul>
                <li>Reporting orientation</li>
                <li>Adjusting reporting date ranges</li>
                <li>Creating annotations</li>
                <li>Exporting reports</li>
              </ul>
            </li>
            <li>
              <span style={{ color: "#f26523" }}>
                <strong>Exploring the 5 Main Reporting Areas</strong>
              </span>
              <ul>
                <li>Real-time reporting</li>
                <li>
                  Audience Dashboard
                  <ul>
                    <li>Demographics</li>
                    <li>Behavior</li>
                    <li>Technical details</li>
                    <li>Mobile data</li>
                    <li>Visitor flow</li>
                  </ul>
                </li>
                <li>
                  Acquisition Dashboard
                  <ul>
                    <li>Channel reporting</li>
                    <li>Creating unique tracking parameters</li>
                    <li>Google Ads reporting</li>
                  </ul>
                </li>
                <li>
                  Behavior Dashboard
                  <ul>
                    <li>Page data reporting</li>
                    <li>Event tracking</li>
                    <li>On-site search reporting</li>
                  </ul>
                </li>
                <li>
                  Conversions Dashboard
                  <ul>
                    <li>Creating goals within views</li>
                    <li>Monitoring goals</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <span style={{ color: "#f26523" }}>
                <strong>Advanced Topics</strong>
              </span>
              <ul>
                <li>Creating and applying filters</li>
                <li>
                  <b>Lab:</b>&nbsp;Filtering in Google Analytics
                </li>
                <li>Creating and applying segments</li>
                <li>
                  <b>Lab:</b>&nbsp;Applying segments in Google Analytics
                </li>
                <li>Determining KPIs &amp; Creating KPI Dashboards</li>
                <li>
                  <b>Lab:</b>&nbsp;Creating KPIs
                </li>
                <li>Setting up Enhanced eCommerce</li>
              </ul>
            </li>
          </ol>
          <h2>Part 3: Google Tag Manager</h2>
          <ol>
            <li>
              <span style={{ color: "#f26523" }}>
                <strong>Overview of Google Tag Manager</strong>
              </span>
              <ul>
                <li>Uses of GTM</li>
                <li>Creating a GTM account</li>
                <li>Basic components of GTM containers</li>
              </ul>
            </li>
            <li>
              <span style={{ color: "#f26523" }}>
                <strong>Creating a GTM Container</strong>
              </span>
              <ul>
                <li>Building a container</li>
                <li>Creating tags</li>
                <li>Creating triggers</li>
                <li>Creating custom variables</li>
                <li>Deploying your GTM container</li>
              </ul>
            </li>
            <li>
              <span style={{ color: "#f26523" }}>
                <strong>Google Tag Manager Data</strong>
              </span>
              <ul>
                <li>Types of tags you can deploy in GTM</li>
                <li>Data generated by GTM containers</li>
                <li>
                  Where to access data within Google Analytics generated by a
                  GTM container
                </li>
              </ul>
            </li>
          </ol>
          <h2>Part 4: Google Search Console</h2>
          <ol>
            <li>
              <span style={{ color: "#f26523" }}>
                <strong>Overview of Google Search Console</strong>
              </span>
              <ul>
                <li>Understanding SEO</li>
                <li>
                  Determining how your site is performing in organic search
                </li>
              </ul>
            </li>
            <li>
              <span style={{ color: "#f26523" }}>
                <strong>Creating a Google Search Console Account</strong>
              </span>
              <ul>
                <li>Creating an account</li>
                <li>Adding a property to GSC</li>
                <li>Validating your property within GSC</li>
              </ul>
            </li>
            <li>
              <span style={{ color: "#f26523" }}>
                <strong>
                  Reporting Data Available in Google Search Console
                </strong>
              </span>
              <ul>
                <li>
                  9 Primary Reporting Tools:
                  <ul>
                    <li>Performance</li>
                    <li>URL inspection</li>
                    <li>Index coverage</li>
                    <li>Sitemaps report</li>
                    <li>Speed report</li>
                    <li>Mobile usability report</li>
                    <li>Sitelinks search box</li>
                    <li>Manual actions report</li>
                    <li>Security issues report</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <span style={{ color: "#f26523" }}>
                <strong>Using Google Search Console</strong>
              </span>
              <ul>
                <li>Interpreting data from GSC reports</li>
                <li>Determining how often to review data</li>
                <li>Actions you can take based on GSC data</li>
              </ul>
            </li>
          </ol>
          <h2>Part 5: Google Optimize</h2>
          <ol>
            <li>
              <span style={{ color: "#f26523" }}>
                <strong>Overview</strong>
              </span>
              <ul>
                <li>Understanding the methodology behind testing</li>
                <li>Reviewing the user interface</li>
                <li>Introducing all of the available features</li>
              </ul>
            </li>
            <li>
              <span style={{ color: "#f26523" }}>
                <strong>Best Practices</strong>
              </span>
              <ul>
                <li>Choosing pages for potential tests</li>
              </ul>
            </li>
            <li>
              <span style={{ color: "#f26523" }}>
                <strong>Testing Strategy</strong>
              </span>
            </li>
            <li>
              <span style={{ color: "#f26523" }}>
                <strong>Types of Testing</strong>
              </span>
              <ul>
                <li>A/B</li>
                <li>Multi-Variant</li>
                <li>Redirect</li>
              </ul>
            </li>
            <li>
              <span style={{ color: "#f26523" }}>
                <strong>Designing an Experiment</strong>
              </span>
              <ul>
                <li>Hypothesis</li>
                <li>Identifying Goals/KPIs</li>
                <li>
                  <b>Lab:</b> Setting up an experiment
                </li>
              </ul>
            </li>
            <li>
              <span style={{ color: "#f26523" }}>
                <strong>Success Metrics and Reporting</strong>
              </span>
            </li>
          </ol>
          <h2>Part 6: Google Data Studio</h2>
          <ol>
            <li>
              <span style={{ color: "#f26523" }}>
                <strong>Overview</strong>
              </span>
              <ul>
                <li>The challenge of marketing data reporting</li>
                <li>Variety of data sets available to marketers</li>
                <li>
                  Understanding what Google Data Studio is and what it can do
                  for marketers
                </li>
              </ul>
            </li>
            <li>
              <span style={{ color: "#f26523" }}>
                <strong>Creating a Google Data Studio Report</strong>
              </span>
              <ul>
                <li>
                  Elements of a GDS report
                  <ul>
                    <li>Dashboard</li>
                    <li>Data sources</li>
                  </ul>
                </li>
                <li>Using existing templates vs. create your own dashboard</li>
                <li>Creating a data source for your dashboard</li>
                <li>Customizing the layout and appearance of a GDS report</li>
                <li>Sharing access to your GDS report dashboard</li>
                <li>
                  <b>Lab:</b>&nbsp;Creating your own dashboard and data source
                  in GDS
                </li>
              </ul>
            </li>
          </ol>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <p style={{ margin: "0" }}>Who Should Attend</p>
        </AccordionSummary>
        <AccordionDetails>
          Whether you are a career marketer or small business owner, if you are
          interested in learning more about Google’s tools, this course will
          provide you the opportunity to gain practical, hands-on experience
          leveraging all of the Google Marketing Platform tools in a convenient,
          virtual training environment. We welcome <b>ALL</b> interested
          attendees including:
          <ul>
            <li>Marketing professionals from entry-level to management</li>
            <li>
              Online marketers seeking credibility, authority and advantage
            </li>
            <li>Agency professionals</li>
            <li>Business owners (small, medium and large)</li>
            <li>
              Traditional marketers looking to get up-to-speed on today’s
              resources and tools
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
