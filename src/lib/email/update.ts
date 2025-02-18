import { BASE_URL } from "$env/static/private";
import { SAAS_NAME, FOUNDER, X_LINK, YOUTUBE_LINK, INSTAGRAM_LINK } from "@/constants/constants";
import type { profileTable } from "@/server/db/schema";


export const updateEmail = async (user: any) => {
  return `
  <!DOCTYPE html>
<html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
 <meta charset="UTF-8" />
 <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
 <meta http-equiv="X-UA-Compatible" content="IE=edge" />
 <meta name="viewport" content="width=device-width, initial-scale=1.0" />
 <meta name="format-detection" content="telephone=no, date=no, address=no, email=no" />
 <meta name="x-apple-disable-message-reformatting" />
 <link href="https://fonts.googleapis.com/css?family=Fira+Sans:ital,wght@0,400;0,500;0,800" rel="stylesheet" />
 <title>Subscription Updated</title>
 
 <style>
   html, body { margin: 0 !important; padding: 0 !important; min-height: 100% !important; width: 100% !important; -webkit-font-smoothing: antialiased; }
   * { -ms-text-size-adjust: 100%; }
   .ExternalClass { width: 100%; }
   .ExternalClass, .ExternalClass p, .ExternalClass td, .ExternalClass div, .ExternalClass span, .ExternalClass font { line-height: 100%; }
   table, td { mso-table-lspace: 0 !important; mso-table-rspace: 0 !important; border-collapse: collapse; }
   img { border: 0; outline: 0; line-height: 100%; text-decoration: none; -ms-interpolation-mode: bicubic; }
   .pc-font-alt { font-family: 'Fira Sans', Arial, Helvetica, sans-serif !important; }
 </style>
</head>

<body class="pc-font-alt" style="width: 100% !important; min-height: 100% !important; margin: 0 !important; padding: 0 !important; line-height: 1.5; color: #2D3A41; background-color: #f4f4f4;">
 <table style="width: 100%; background-color: #f4f4f4;" border="0" cellspacing="0" cellpadding="0">
  <tr>
   <td align="center" valign="top">
    <table align="center" style="width: 600px; max-width: 600px;" border="0" cellpadding="0" cellspacing="0">
     <tr>
      <td style="padding: 20px 0px 20px 0px;" align="left" valign="top">
       <table width="100%" border="0" cellspacing="0" cellpadding="0">
        <tr>
         <td valign="top" style="padding: 40px 40px 40px 40px; background-color: #ffffff;">
          <table width="100%" border="0" cellpadding="0" cellspacing="0">
           <tr>
            <td align="left" style="padding: 0px 0px 15px 0px;">
             <div style="font-size: 36px; line-height: 128%; color: #151515; font-weight: 800;">
              Subscription Updated
             </div>
            </td>
           </tr>
           <tr>
            <td align="left" style="padding: 0px 0px 20px 0px;">
             <div style="font-size: 20px; line-height: 150%; color: #9b9b9b;">
              Your subscription to ${SAAS_NAME} has been updated to ${user.planType}.
             </div>
            </td>
           </tr>
           <tr>
            <td align="left">
             <a href="${BASE_URL}/profile" style="display: inline-block; padding: 14px 15px; background-color: #1595e7; color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: 500;">
              View Subscription Details
             </a>
            </td>
           </tr>
          </table>
         </td>
        </tr>
        <tr>
         <td valign="top" style="padding: 36px 40px 36px 40px; background-color: #1b1b1b;">
          <table width="100%" border="0" cellpadding="0" cellspacing="0">
           <tr>
            <td align="center" style="padding: 0px 0px 21px 0px;">
             <div style="font-size: 16px; line-height: 150%; color: #ffffff;">
              ${SAAS_NAME}
             </div>
            </td>
           </tr>
           <tr>
            <td align="center">
             <table align="center" border="0" cellpadding="0" cellspacing="0">
              <tr>
               <td valign="middle" style="padding: 0 10px;">
                <a href="${YOUTUBE_LINK}" target="_blank" style="text-decoration: none;">
                 <svg width="15" height="15" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                              <path d="M23.498 6.186a2.955 2.955 0 00-2.078-2.092C19.1 3.5 12 3.5 12 3.5s-7.1 0-9.42.594A2.955 2.955 0 00.502 6.186C0 8.528 0 12 0 12s0 3.472.502 5.814a2.955 2.955 0 002.078 2.092C4.9 20.5 12 20.5 12 20.5s7.1 0 9.42-.594a2.955 2.955 0 002.078-2.092C24 15.472 24 12 24 12s0-3.472-.502-5.814zM9.75 15.75v-7.5l6.5 3.75-6.5 3.75z" />
                            </svg>
                </a>
               </td>
               <td valign="middle" style="padding: 0 10px;">
                <a href="${X_LINK}" target="_blank" style="text-decoration: none;">
                 <svg width="15" height="15" viewBox="0 0 1200 1227" fill="white" xmlns="http://www.w3.org/2000/svg">
                              <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" fill="white" />
                            </svg>
                </a>
               </td>
               <td valign="middle" style="padding: 0 10px;">
                <a href="${INSTAGRAM_LINK}" target="_blank" style="text-decoration: none;">
                 <svg id="instagram" fill="rgb(217, 50, 117)" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="15" height="15" viewBox="0 0 169.063 169.063" style="enable-background:new 0 0 169.063 169.063;" xml:space="preserve">
                              <g>
                                <path fill="white" d="M122.406,0H46.654C20.929,0,0,20.93,0,46.655v75.752c0,25.726,20.929,46.655,46.654,46.655h75.752c25.727,0,46.656-20.93,46.656-46.655V46.655C169.063,20.93,148.133,0,122.406,0z M154.063,122.407c0,17.455-14.201,31.655-31.656,31.655H46.654C29.2,154.063,15,139.862,15,122.407V46.655C15,29.201,29.2,15,46.654,15h75.752c17.455,0,31.656,14.201,31.656,31.655V122.407z"/>
                                <path fill="white" d="M84.531,40.97c-24.021,0-43.563,19.542-43.563,43.563c0,24.02,19.542,43.561,43.563,43.561s43.563-19.541,43.563-43.561C128.094,60.512,108.552,40.97,84.531,40.97z M84.531,113.093c-15.749,0-28.563-12.812-28.563-28.561c0-15.75,12.813-28.563,28.563-28.563s28.563,12.813,28.563,28.563C113.094,100.281,100.28,113.093,84.531,113.093z"/>
                                <path fill="white" d="M129.921,28.251c-2.89,0-5.729,1.17-7.77,3.22c-2.051,2.04-3.23,4.88-3.23,7.78c0,2.891,1.18,5.73,3.23,7.78c2.04,2.04,4.88,3.22,7.77,3.22c2.9,0,5.73-1.18,7.78-3.22c2.05-2.05,3.22-4.89,3.22-7.78c0-2.9-1.17-5.74-3.22-7.78C135.661,29.421,132.821,28.251,129.921,28.251z"/>
                              </g>
                            </svg>
                </a>
               </td>
              </tr>
             </table>
            </td>
           </tr>
          </table>
         </td>
        </tr>
       </table>
      </td>
     </tr>
    </table>
   </td>
  </tr>
 </table>
</body>
</html>
  `;
};
