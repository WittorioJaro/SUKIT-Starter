import { BASE_URL } from "$env/static/private";
import { SAAS_NAME, FOUNDER, X_LINK, YOUTUBE_LINK, INSTAGRAM_LINK } from "@/constants/constants";


export const welcomeEmail = (user: any) => {
  const name = user.firstName;
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
  <link href="https://fonts.googleapis.com/css?family=Fira+Sans:ital,wght@0,400;0,400;0,500;0,800" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css?family=Rubik:ital,wght@0,400;0,900" rel="stylesheet" />
  <title>Welcome to ${SAAS_NAME}</title> 
  <style>
    @font-face {
      font-family: 'Fira Sans';
      font-style: normal;
      font-weight: 400;
      src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v10/va9E4kDNxMZdWfMOD5VvmojLazX3dGTP.woff2) format('woff2');
      unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
    }

    @font-face {
      font-family: 'Fira Sans';
      font-style: normal;
      font-weight: 400;
      src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v10/va9E4kDNxMZdWfMOD5Vvk4jLazX3dGTP.woff2) format('woff2');
      unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }

    @font-face {
      font-family: 'Fira Sans';
      font-style: normal;
      font-weight: 400;
      src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v10/va9E4kDNxMZdWfMOD5VvmYjLazX3dGTP.woff2) format('woff2');
      unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }

    @font-face {
      font-family: 'Fira Sans';
      font-style: normal;
      font-weight: 400;
      src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v10/va9E4kDNxMZdWfMOD5Vvl4jLazX3dA.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }

    @font-face {
      font-family: 'Fira Sans';
      font-style: normal;
      font-weight: 500;
      src: local('Fira Sans Medium'), local('FiraSans-Medium'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnZKveSxf6Xl7Gl3LX.woff2) format('woff2');
      unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
    }

    @font-face {
      font-family: 'Fira Sans';
      font-style: normal;
      font-weight: 500;
      src: local('Fira Sans Medium'), local('FiraSans-Medium'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnZKveQhf6Xl7Gl3LX.woff2) format('woff2');
      unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }

    @font-face {
      font-family: 'Fira Sans';
      font-style: normal;
      font-weight: 500;
      src: local('Fira Sans Medium'), local('FiraSans-Medium'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnZKveSBf6Xl7Gl3LX.woff2) format('woff2');
      unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }

    @font-face {
      font-family: 'Fira Sans';
      font-style: normal;
      font-weight: 500;
      src: local('Fira Sans Medium'), local('FiraSans-Medium'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnZKveRhf6Xl7Glw.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }

    @font-face {
      font-family: 'Fira Sans';
      font-style: normal;
      font-weight: 800;
      font-display: swap;
      src: local('Fira Sans ExtraBold'), local('FiraSans-ExtraBold'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnMK7eSxf6Xl7Gl3LX.woff2) format('woff2');
      unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
    }

    @font-face {
      font-family: 'Fira Sans';
      font-style: normal;
      font-weight: 800;
      font-display: swap;
      src: local('Fira Sans ExtraBold'), local('FiraSans-ExtraBold'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnMK7eQhf6Xl7Gl3LX.woff2) format('woff2');
      unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }

    @font-face {
      font-family: 'Fira Sans';
      font-style: normal;
      font-weight: 800;
      font-display: swap;
      src: local('Fira Sans ExtraBold'), local('FiraSans-ExtraBold'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnMK7eSBf6Xl7Gl3LX.woff2) format('woff2');
      unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }

    @font-face {
      font-family: 'Fira Sans';
      font-style: normal;
      font-weight: 800;
      font-display: swap;
      src: local('Fira Sans ExtraBold'), local('FiraSans-ExtraBold'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnMK7eRhf6Xl7Glw.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
  </style> <!--<![endif]-->
  <style>
    html,
    body {
      margin: 0 !important;
      padding: 0 !important;
      min-height: 100% !important;
      width: 100% !important;
      -webkit-font-smoothing: antialiased;
    }

    * {
      -ms-text-size-adjust: 100%;
    }

    #outlook a {
      padding: 0;
    }

    .ReadMsgBody,
    .ExternalClass {
      width: 100%;
    }

    .ExternalClass,
    .ExternalClass p,
    .ExternalClass td,
    .ExternalClass div,
    .ExternalClass span,
    .ExternalClass font {
      line-height: 100%;
    }

    table,
    td,
    

    u+.body table,
    u+.body td,
    u+.body th {
      will-change: transform;
    }

    body,
    td,
    th,
    p,
    div,
    li,
    a,
    span {
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
    }

    img {
      border: 0;
      outline: 0;
      line-height: 100%;
      text-decoration: none;
      -ms-interpolation-mode: bicubic;
    }

    a[x-apple-data-detectors] {
      color: inherit !important;
      text-decoration: none !important;
    }

    .body .pc-project-body {
      background-color: transparent !important;
    }

    @media (min-width: 621px) {
      .pc-lg-hide {
        display: none;
      }

      .pc-lg-bg-img-hide {
        background-image: none !important;
      }
    }
  </style>
  <style>
    @media (max-width: 620px) {
      .pc-project-body {
        min-width: 0px !important;
      }

      .pc-project-container {
        width: 100% !important;
      }

      .pc-sm-hide,
      .pc-w620-gridCollapsed-1>tbody>tr>.pc-sm-hide {
        display: none !important;
      }

      .pc-sm-bg-img-hide {
        background-image: none !important;
      }

      .pc-w620-font-size-30px {
        font-size: 30px !important;
      }

      .pc-w620-line-height-133pc {
        line-height: 133% !important;
      }

      .pc-w620-padding-35-35-35-35 {
        padding: 35px 35px 35px 35px !important;
      }

      .pc-w620-itemsSpacings-10-0 {
        padding-left: 5px !important;
        padding-right: 5px !important;
        padding-top: 0px !important;
        padding-bottom: 0px !important;
      }

      .pc-w620-padding-30-30-30-30 {
        padding: 30px 30px 30px 30px !important;
      }

      .pc-w620-gridCollapsed-1>tbody,
      .pc-w620-gridCollapsed-1>tbody>tr,
      .pc-w620-gridCollapsed-1>tr {
        display: inline-block !important;
      }

      .pc-w620-gridCollapsed-1.pc-width-fill>tbody,
      .pc-w620-gridCollapsed-1.pc-width-fill>tbody>tr,
      .pc-w620-gridCollapsed-1.pc-width-fill>tr {
        width: 100% !important;
      }

      .pc-w620-gridCollapsed-1.pc-w620-width-fill>tbody,
      .pc-w620-gridCollapsed-1.pc-w620-width-fill>tbody>tr,
      .pc-w620-gridCollapsed-1.pc-w620-width-fill>tr {
        width: 100% !important;
      }

      .pc-w620-gridCollapsed-1>tbody>tr>td,
      .pc-w620-gridCollapsed-1>tr>td {
        display: block !important;
        width: auto !important;
        padding-left: 0 !important;
        padding-right: 0 !important;
        margin-left: 0 !important;
      }

      .pc-w620-gridCollapsed-1.pc-width-fill>tbody>tr>td,
      .pc-w620-gridCollapsed-1.pc-width-fill>tr>td {
        width: 100% !important;
      }

      .pc-w620-gridCollapsed-1.pc-w620-width-fill>tbody>tr>td,
      .pc-w620-gridCollapsed-1.pc-w620-width-fill>tr>td {
        width: 100% !important;
      }

      .pc-w620-gridCollapsed-1>tbody>.pc-grid-tr-first>.pc-grid-td-first,
      .pc-w620-gridCollapsed-1>.pc-grid-tr-first>.pc-grid-td-first {
        padding-top: 0 !important;
      }

      .pc-w620-gridCollapsed-1>tbody>.pc-grid-tr-last>.pc-grid-td-last,
      .pc-w620-gridCollapsed-1>.pc-grid-tr-last>.pc-grid-td-last {
        padding-bottom: 0 !important;
      }

      .pc-w620-gridCollapsed-0>tbody>.pc-grid-tr-first>td,
      .pc-w620-gridCollapsed-0>.pc-grid-tr-first>td {
        padding-top: 0 !important;
      }

      .pc-w620-gridCollapsed-0>tbody>.pc-grid-tr-last>td,
      .pc-w620-gridCollapsed-0>.pc-grid-tr-last>td {
        padding-bottom: 0 !important;
      }

      .pc-w620-gridCollapsed-0>tbody>tr>.pc-grid-td-first,
      .pc-w620-gridCollapsed-0>tr>.pc-grid-td-first {
        padding-left: 0 !important;
      }

      .pc-w620-gridCollapsed-0>tbody>tr>.pc-grid-td-last,
      .pc-w620-gridCollapsed-0>tr>.pc-grid-td-last {
        padding-right: 0 !important;
      }

      .pc-w620-tableCollapsed-1>tbody,
      .pc-w620-tableCollapsed-1>tbody>tr,
      .pc-w620-tableCollapsed-1>tr {
        display: block !important;
      }

      .pc-w620-tableCollapsed-1.pc-width-fill>tbody,
      .pc-w620-tableCollapsed-1.pc-width-fill>tbody>tr,
      .pc-w620-tableCollapsed-1.pc-width-fill>tr {
        width: 100% !important;
      }

      .pc-w620-tableCollapsed-1.pc-w620-width-fill>tbody,
      .pc-w620-tableCollapsed-1.pc-w620-width-fill>tbody>tr,
      .pc-w620-tableCollapsed-1.pc-w620-width-fill>tr {
        width: 100% !important;
      }

      .pc-w620-tableCollapsed-1>tbody>tr>td,
      .pc-w620-tableCollapsed-1>tr>td {
        display: block !important;
        width: auto !important;
      }

      .pc-w620-tableCollapsed-1.pc-width-fill>tbody>tr>td,
      .pc-w620-tableCollapsed-1.pc-width-fill>tr>td {
        width: 100% !important;
        box-sizing: border-box !important;
      }

      .pc-w620-tableCollapsed-1.pc-w620-width-fill>tbody>tr>td,
      .pc-w620-tableCollapsed-1.pc-w620-width-fill>tr>td {
        width: 100% !important;
        box-sizing: border-box !important;
      }
    }

    @media (max-width: 520px) {
      .pc-w520-padding-30-30-30-30 {
        padding: 30px 30px 30px 30px !important;
      }

      .pc-w520-padding-25-25-25-25 {
        padding: 25px 25px 25px 25px !important;
      }
    }
  </style> <!--[if !mso]><!-- -->
  <style>
    @font-face {
      font-family: 'Fira Sans';
      font-style: normal;
      font-weight: 400;
      src: url('https://fonts.gstatic.com/s/firasans/v17/va9E4kDNxMZdWfMOD5VvmYjN.woff') format('woff'), url('https://fonts.gstatic.com/s/firasans/v17/va9E4kDNxMZdWfMOD5VvmYjL.woff2') format('woff2');
    }

    @font-face {
      font-family: 'Fira Sans';
      font-style: normal;
      font-weight: 500;
      src: url('https://fonts.gstatic.com/s/firasans/v17/va9B4kDNxMZdWfMOD5VnZKveSBf8.woff') format('woff'), url('https://fonts.gstatic.com/s/firasans/v17/va9B4kDNxMZdWfMOD5VnZKveSBf6.woff2') format('woff2');
    }

    @font-face {
      font-family: 'Fira Sans';
      font-style: normal;
      font-weight: 800;
      src: url('https://fonts.gstatic.com/s/firasans/v17/va9B4kDNxMZdWfMOD5VnMK7eSBf8.woff') format('woff'), url('https://fonts.gstatic.com/s/firasans/v17/va9B4kDNxMZdWfMOD5VnMK7eSBf6.woff2') format('woff2');
    }

    @font-face {
      font-family: 'Rubik';
      font-style: normal;
      font-weight: 400;
      src: url('https://fonts.gstatic.com/s/rubik/v28/iJWZBXyIfDnIV5PNhY1KTN7Z-Yh-B4iFWUUz.woff') format('woff'), url('https://fonts.gstatic.com/s/rubik/v28/iJWZBXyIfDnIV5PNhY1KTN7Z-Yh-B4iFWUU1.woff2') format('woff2');
    }

    @font-face {
      font-family: 'Rubik';
      font-style: normal;
      font-weight: 900;
      src: url('https://fonts.gstatic.com/s/rubik/v28/iJWZBXyIfDnIV5PNhY1KTN7Z-Yh-ro-FWUUz.woff') format('woff'), url('https://fonts.gstatic.com/s/rubik/v28/iJWZBXyIfDnIV5PNhY1KTN7Z-Yh-ro-FWUU1.woff2') format('woff2');
    }
  </style> <!--<![endif]-->
  <!--[if mso]> <style type="text/css"> .pc-font-alt { font-family: Arial, Helvetica, sans-serif !important; } </style> <![endif]-->
  <!--[if gte mso 9]> <xml> <o:OfficeDocumentSettings> <o:AllowPNG/> <o:PixelsPerInch>96</o:PixelsPerInch> </o:OfficeDocumentSettings> </xml> <![endif]-->
</head>

<body class="body pc-font-alt"
  style="width: 100% !important; min-height: 100% !important; margin: 0 !important; padding: 0 !important; line-height: 1.5; font-weight: normal; color: #2D3A41; -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; font-variant-ligatures: normal; text-rendering: optimizeLegibility; -moz-osx-font-smoothing: grayscale; background-color: #f4f4f4;"
  bgcolor="#f4f4f4">
  <table class="pc-project-body" style="table-layout: fixed; width: 100%; min-width: 600px; background-color: #f4f4f4;"
    bgcolor="#f4f4f4" border="0" cellspacing="0" cellpadding="0" role="presentation">
    <tr>
      <td align="center" valign="top">
        <table class="pc-project-container" align="center" style="width: 600px; max-width: 600px;" border="0"
          cellpadding="0" cellspacing="0" role="presentation">
          <tr>
            <td style="padding: 20px 0px 20px 0px;" align="left" valign="top">
              <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                <tr>
                  <td valign="top">
                    <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                      <tr>
                        <td valign="top" class="pc-w520-padding-30-30-30-30 pc-w620-padding-35-35-35-35"
                          style="padding: 40px 40px 40px 40px; height: unset; background-color: #ffffff;"
                          bgcolor="#ffffff">
                          <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                            <tr>
                              <td align="1" valign="top" style="padding: 0px 0px 15px 0px;">
                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                  <tr>
                                    <td valign="top" align="left">
                                      <div class="pc-font-alt" style="text-decoration: none;">
                                        <div
                                          style="font-size: 30px;line-height: 39.9px;text-align:left;text-align-last:left;color:#151515;letter-spacing:-0.6px;font-weight:800;font-style:normal;">
                                          <div><span
                                              style="font-family: 'Fira Sans', Arial, Helvetica, sans-serif; font-size: 36px; line-height: 128%;"
                                              class="pc-w620-font-size-30px pc-w620-line-height-133pc">Hey
                                              ${name}!</span> </div>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                          <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                            <tr>
                              <td align="1" valign="top" style="padding: 0px 0px 20px 0px;">
                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                  <tr>
                                    <td valign="top" align="left">
                                      <div class="pc-font-alt" style="text-decoration: none;">
                                        <div
                                          style="font-size: 20px;line-height: 30px;text-align:left;text-align-last:left;color:#9b9b9b;letter-spacing:-0.2px;font-weight:400;font-style:normal;">
                                          <div><span
                                              style="font-family: 'Fira Sans', Arial, Helvetica, sans-serif;line-height: 150%;">I'm Victor and I'm the founder of ${SAAS_NAME}! If you have any questions, issues or suggestions, just hit reply! </span> </div>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                          <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                            <tr>
                              <th valign="top" align="left" style="text-align: left;">
                                <!--[if mso]> <table border="0" cellpadding="0" cellspacing="0" role="presentation" align="left" style="border-collapse: separate; border-spacing: 0;"> <tr> <td valign="middle" align="center" style="border-radius: 8px; background-color: #1595e7; text-align:center; color: #ffffff; padding: 14px 15px 14px 15px; mso-padding-left-alt: 0; margin-left:15px;" bgcolor="#1595e7"> <a class="pc-font-alt" style="display: inline-block; text-decoration: none; font-family: 'Fira Sans', Arial, Helvetica, sans-serif; text-align: center;" href="https://postcards.email/" target="_blank"><span style="font-size: 16px;line-height: 24px;color:#ffffff;letter-spacing:-0.2px;font-weight:500;font-style:normal;display:inline-block;"><span style="display:inline-block;"><span style="font-family: 'Fira Sans', Arial, Helvetica, sans-serif;line-height: 150%;">Let's go!</span></span></span></a> </td> </tr> </table> <![endif]-->
                                <!--[if !mso]><!-- --> <a
                                  style="display: inline-block; box-sizing: border-box; border-radius: 8px; background-color: #1595e7; padding: 14px 15px 14px 15px; font-family: 'Fira Sans', Arial, Helvetica, sans-serif; vertical-align: top; text-align: center; text-align-last: center; text-decoration: none; -webkit-text-size-adjust: none;"
                                  href="${BASE_URL}" target="_blank"><span
                                    style="font-size: 16px;line-height: 24px;color:#ffffff;letter-spacing:-0.2px;font-weight:500;font-style:normal;display:inline-block;"><span
                                      style="display:inline-block;"><span
                                        style="font-family: 'Fira Sans', Arial, Helvetica, sans-serif;line-height: 150%;">Let's
                                        go!</span></span></span></a> <!--<![endif]--> </th>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td valign="top">
                    <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                      <tr>
                        <td valign="top" class="pc-w520-padding-25-25-25-25 pc-w620-padding-30-30-30-30"
                          style="padding: 36px 40px 36px 40px; height: unset; background-color: #1b1b1b;"
                          bgcolor="#1b1b1b">
                          <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                            <tr>
                              <td align="1" valign="top">
                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%"
                                  align="1">
                                  <tr>
                                    <td valign="top" align="left">
                                      <div class="pc-font-alt" style="text-decoration: none;">
                                        <div
                                          style="font-size: 15px;line-height: 57px;text-align:center;text-align-last:center;color:#ffffff;letter-spacing:-0.2px;font-weight:900;font-style:normal;">
                                          <div><span style="font-family: 'Rubik', Arial, Helvetica, sans-serif;">By ${FOUNDER}</span> </div>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                          <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                            <tr>
                              <td align="center">
                                <table class="pc-width-hug pc-w620-gridCollapsed-0" align="center" border="0" cellpadding="0" cellspacing="0"
                                  role="presentation">
                                  <tr class="pc-grid-tr-first pc-grid-tr-last">
                                    <!-- YouTube -->
                                    <td class="pc-grid-td-first pc-w620-itemsSpacings-10-0" valign="middle" style="padding: 0 10px 0 0;">
                                      <a href="${YOUTUBE_LINK}" target="_blank" style="text-decoration: none;">
                                        <svg width="15" height="15" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                                          <path
                                            d="M23.498 6.186a2.955 2.955 0 00-2.078-2.092C19.1 3.5 12 3.5 12 3.5s-7.1 0-9.42.594A2.955 2.955 0 00.502 6.186C0 8.528 0 12 0 12s0 3.472.502 5.814a2.955 2.955 0 002.078 2.092C4.9 20.5 12 20.5 12 20.5s7.1 0 9.42-.594a2.955 2.955 0 002.078-2.092C24 15.472 24 12 24 12s0-3.472-.502-5.814zM9.75 15.75v-7.5l6.5 3.75-6.5 3.75z" />
                                        </svg>
                                      </a>
                                    </td>
                                    <!-- X (Twitter) -->
                                    <td class="pc-w620-itemsSpacings-10-0" valign="middle" style="padding: 0 10px;">
                                      <a href="${X_LINK}" target="_blank" style="text-decoration: none;">
                                        <svg width="15" height="15" viewBox="0 0 1200 1227" fill="white" xmlns="http://www.w3.org/2000/svg">
                                          <path
                                            d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
                                            fill="white" />
                                        </svg>
                                      </a>
                                    </td>
                                    <!-- Instagram -->
                                    <td class="pc-grid-td-last pc-w620-itemsSpacings-10-0" valign="middle" style="padding: 0 0 0 10px;">
                                      <a href="${INSTAGRAM_LINK}" target="_blank" style="text-decoration: none;">
                                        <svg id="instagram" fill="rgb(217, 50, 117)" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                          xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="15" height="15"
                                          viewBox="0 0 169.063 169.063" style="enable-background:new 0 0 169.063 169.063;" xml:space="preserve">
                                          <g>
                                            <path fill="white" d="M122.406,0H46.654C20.929,0,0,20.93,0,46.655v75.752c0,25.726,20.929,46.655,46.654,46.655h75.752
                                                                  c25.727,0,46.656-20.93,46.656-46.655V46.655C169.063,20.93,148.133,0,122.406,0z M154.063,122.407
                                                                  c0,17.455-14.201,31.655-31.656,31.655H46.654C29.2,154.063,15,139.862,15,122.407V46.655C15,29.201,29.2,15,46.654,15h75.752
                                                                  c17.455,0,31.656,14.201,31.656,31.655V122.407z" />
                                            <path
                                              fill="white"
                                              d="M84.531,40.97c-24.021,0-43.563,19.542-43.563,43.563c0,24.02,19.542,43.561,43.563,43.561s43.563-19.541,43.563-43.561
                                                                  C128.094,60.512,108.552,40.97,84.531,40.97z M84.531,113.093c-15.749,0-28.563-12.812-28.563-28.561
                                                                  c0-15.75,12.813-28.563,28.563-28.563s28.563,12.813,28.563,28.563C113.094,100.281,100.28,113.093,84.531,113.093z" />
                                            <path fill="white" d="M129.921,28.251c-2.89,0-5.729,1.17-7.77,3.22c-2.051,2.04-3.23,4.88-3.23,7.78c0,2.891,1.18,5.73,3.23,7.78
                                                                  c2.04,2.04,4.88,3.22,7.77,3.22c2.9,0,5.73-1.18,7.78-3.22c2.05-2.05,3.22-4.89,3.22-7.78c0-2.9-1.17-5.74-3.22-7.78
                                                                  C135.661,29.421,132.821,28.251,129.921,28.251z" />
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
  `
}