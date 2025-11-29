/**
 * Creates a beautiful, modern welcome email template
 * @param {string} name - The user's name
 * @param {string} clientURL - The application's client URL
 * @returns {string} Complete HTML email as a string
 */
export const createWelcomeEmailTemplate = (name, clientURL) => {
  const currentYear = new Date().getFullYear();
  const firstName = name.split(" ")[0];

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="color-scheme" content="light dark">
  <meta name="supported-color-schemes" content="light dark">
  <title>Welcome to Wisphera</title>
  <!--[if mso]>
  <noscript>
    <xml>
      <o:OfficeDocumentSettings>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
  </noscript>
  <![endif]-->
  <style>
    :root {
      color-scheme: light dark;
      supported-color-schemes: light dark;
    }
    @media (prefers-color-scheme: dark) {
      .email-bg { background-color: #1a1a2e !important; }
      .email-card { background-color: #16213e !important; }
      .text-dark { color: #e4e4e7 !important; }
      .text-muted { color: #a1a1aa !important; }
      .divider { border-color: #3f3f46 !important; }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f0f4f8; -webkit-font-smoothing: antialiased;">
  
  <!-- Email Container -->
  <table class="email-bg" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f0f4f8;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        
        <!-- Email Card -->
        <table class="email-card" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width: 560px; background-color: #ffffff; border-radius: 16px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1); overflow: hidden;">
          
          <!-- Header with Gradient -->
          <tr>
            <td style="background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 50%, #1e40af 100%); padding: 48px 40px; text-align: center;">
              <!-- Logo/Icon -->
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td align="center">
                    <div style="width: 72px; height: 72px; background-color: rgba(255, 255, 255, 0.2); border-radius: 50%; display: inline-block; line-height: 72px;">
                      <span style="font-size: 36px;">✨</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td align="center" style="padding-top: 24px;">
                    <h1 style="margin: 0; font-size: 28px; font-weight: 700; color: #ffffff; letter-spacing: -0.5px;">
                      Welcome to Wisphera
                    </h1>
                  </td>
                </tr>
                <tr>
                  <td align="center" style="padding-top: 8px;">
                    <p style="margin: 0; font-size: 16px; color: rgba(255, 255, 255, 0.9);">
                      We're thrilled to have you on board
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Main Content -->
          <tr>
            <td style="padding: 40px;">
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                
                <!-- Greeting -->
                <tr>
                  <td>
                    <h2 class="text-dark" style="margin: 0 0 16px 0; font-size: 22px; font-weight: 600; color: #1e293b;">
                      Hi ${firstName}! 👋
                    </h2>
                    <p class="text-muted" style="margin: 0 0 24px 0; font-size: 16px; line-height: 1.6; color: #64748b;">
                      Thank you for joining Wisphera! Your account has been successfully created and you're all set to explore everything we have to offer.
                    </p>
                  </td>
                </tr>
                
                <!-- CTA Button -->
                <tr>
                  <td align="center" style="padding: 16px 0 32px 0;">
                    <a href="${clientURL}" target="_blank" style="display: inline-block; background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%); color: #ffffff; text-decoration: none; font-size: 16px; font-weight: 600; padding: 14px 32px; border-radius: 8px; box-shadow: 0 4px 14px rgba(37, 99, 235, 0.4); transition: all 0.2s ease;">
                      Get Started →
                    </a>
                  </td>
                </tr>
                
                <!-- Divider -->
                <tr>
                  <td>
                    <hr class="divider" style="border: none; border-top: 1px solid #e2e8f0; margin: 0 0 24px 0;">
                  </td>
                </tr>
                
                <!-- Features Section -->
                <tr>
                  <td>
                    <p class="text-dark" style="margin: 0 0 20px 0; font-size: 15px; font-weight: 600; color: #1e293b;">
                      Here's what you can do:
                    </p>
                  </td>
                </tr>
                
                <!-- Feature 1 -->
                <tr>
                  <td style="padding-bottom: 16px;">
                    <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                      <tr>
                        <td width="40" valign="top">
                          <div style="width: 32px; height: 32px; background-color: #dbeafe; border-radius: 8px; text-align: center; line-height: 32px;">
                            <span style="font-size: 16px;">🚀</span>
                          </div>
                        </td>
                        <td style="padding-left: 12px;">
                          <p class="text-dark" style="margin: 0 0 2px 0; font-size: 14px; font-weight: 600; color: #1e293b;">Quick Setup</p>
                          <p class="text-muted" style="margin: 0; font-size: 13px; color: #64748b;">Get up and running in minutes</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                
                <!-- Feature 2 -->
                <tr>
                  <td style="padding-bottom: 16px;">
                    <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                      <tr>
                        <td width="40" valign="top">
                          <div style="width: 32px; height: 32px; background-color: #dbeafe; border-radius: 8px; text-align: center; line-height: 32px;">
                            <span style="font-size: 16px;">💬</span>
                          </div>
                        </td>
                        <td style="padding-left: 12px;">
                          <p class="text-dark" style="margin: 0 0 2px 0; font-size: 14px; font-weight: 600; color: #1e293b;">Connect & Chat</p>
                          <p class="text-muted" style="margin: 0; font-size: 13px; color: #64748b;">Start meaningful conversations</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                
                <!-- Feature 3 -->
                <tr>
                  <td style="padding-bottom: 24px;">
                    <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                      <tr>
                        <td width="40" valign="top">
                          <div style="width: 32px; height: 32px; background-color: #dbeafe; border-radius: 8px; text-align: center; line-height: 32px;">
                            <span style="font-size: 16px;">🔒</span>
                          </div>
                        </td>
                        <td style="padding-left: 12px;">
                          <p class="text-dark" style="margin: 0 0 2px 0; font-size: 14px; font-weight: 600; color: #1e293b;">Secure & Private</p>
                          <p class="text-muted" style="margin: 0; font-size: 13px; color: #64748b;">Your data is always protected</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                
                <!-- Help Text -->
                <tr>
                  <td style="background-color: #f8fafc; border-radius: 8px; padding: 20px;">
                    <p class="text-muted" style="margin: 0; font-size: 14px; line-height: 1.6; color: #64748b; text-align: center;">
                      Need help getting started? Just reply to this email — we're here to help! 💙
                    </p>
                  </td>
                </tr>
                
              </table>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #f8fafc; padding: 24px 40px; border-top: 1px solid #e2e8f0;">
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td align="center">
                    <p style="margin: 0 0 8px 0; font-size: 14px; font-weight: 600; color: #2563eb;">
                      Wisphera
                    </p>
                    <p class="text-muted" style="margin: 0 0 12px 0; font-size: 12px; color: #94a3b8;">
                      Making connections seamless
                    </p>
                    <p class="text-muted" style="margin: 0; font-size: 11px; color: #94a3b8;">
                      © ${currentYear} Wisphera. All rights reserved.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
        </table>
        
        <!-- Unsubscribe Footer -->
        <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width: 560px;">
          <tr>
            <td align="center" style="padding: 24px 20px;">
              <p class="text-muted" style="margin: 0; font-size: 11px; color: #94a3b8; line-height: 1.5;">
                You're receiving this email because you signed up for Wisphera.<br>
                <a href="${clientURL}/unsubscribe" style="color: #64748b; text-decoration: underline;">Unsubscribe</a> from future emails.
              </p>
            </td>
          </tr>
        </table>
        
      </td>
    </tr>
  </table>
  
</body>
</html>
  `.trim();
};
