<template>
  <h1>Privacy Policy</h1>
  <br />

  <p>
    <strong>Notify It</strong> ("we," "our," or "us") values your privacy. This Privacy Policy explains how we collect,
    use, and protect your information when you use our application (the "App"). By using the App, you agree to the
    practices described in this Privacy Policy.
  </p>
  <br />

  <p><strong>Effective Date:</strong>4th September 2025</p>
  <p><strong>Last Updated:</strong>4th September 2025</p>
  <br />

  <h2>1. Scope</h2>
  <p>This Policy applies to the App, related websites, and services that link to it.</p>
  <br />

  <h2>2. Information We Collect</h2>
  <ul>
    <li>Discord User ID, username, and avatar</li>
    <li>Subscriptions to stores and notification preferences</li>
    <li>Device tokens from FCM and APNs</li>
    <li>Logs of notification delivery and failures (including User ID and notification token)</li>
    <li>IP address, timestamps, device/browser metadata, and webserver activity logs</li>
  </ul>
  <br />

  <h2>3. Sources of Personal Information</h2>
  <ul>
    <li>You, when you authenticate with Discord or configure subscriptions</li>
    <li>Discord, via OAuth</li>
    <li>Device/OS providers for push delivery tokens</li>
  </ul>
  <br />

  <h2>4. How We Use Information</h2>
  <ul>
    <li>Authenticate you through Discord</li>
    <li>Send restock notifications based on your subscriptions</li>
    <li>Maintain and improve the App</li>
    <li>Monitor performance, debug issues, and prevent abuse</li>
    <li>Comply with legal obligations</li>
  </ul>
  <br />

  <h2>5. Legal Bases (GDPR/UK GDPR)</h2>
  <ul>
    <li>Contract: To provide the App and deliver notifications</li>
    <li>Legitimate Interests: To secure services and improve reliability</li>
    <li>Legal Obligation: To comply with applicable laws</li>
    <li>Consent: Where required, with the option to withdraw</li>
  </ul>
  <br />

  <h2>6. Disclosure of Information</h2>
  <p>We disclose information only as needed to:</p>
  <ul>
    <li>Deliver notifications via FCM and APNs</li>
    <li>Service providers who host or process data</li>
    <li>Comply with legal requirements</li>
    <li>Protect safety and prevent abuse</li>
  </ul>
  <br />

  <h2>7. Data Retention</h2>
  <ul>
    <li>Discord account information is retained while your account is active</li>
    <li>Notification tokens and delivery logs are retained as needed for delivery and troubleshooting</li>
    <li>Webserver logs are retained for 30 days</li>
  </ul>
  <br />

  <h2>8. Security</h2>
  <p>
    We implement measures to safeguard your information, but no method of transmission or storage is completely secure.
  </p>
  <br />

  <h2>9. Your Rights</h2>
  <h3>GDPR/UK GDPR</h3>
  <ul>
    <li>Access, rectify, or erase your data</li>
    <li>Restrict or object to processing</li>
    <li>Data portability</li>
    <li>Withdraw consent</li>
    <li>Lodge a complaint with a supervisory authority</li>
  </ul>
  <br />

  <h3>CCPA/CPRA (California)</h3>
  <ul>
    <li>Know what personal data we collect</li>
    <li>Request deletion of personal data</li>
    <li>Correct inaccuracies</li>
    <li>Data portability</li>
    <li>Not be discriminated against for exercising rights</li>
  </ul>

  <h2>10. International Data Transfers</h2>
  <p>
    Your information may be processed outside your country. Where required, we use safeguards such as Standard
    Contractual Clauses.
  </p>
  <br />

  <h2>11. Children’s Privacy</h2>
  <p>
    The App is not designed for children under 13. We do not knowingly collect personal information from children under
    13.
  </p>
  <br />

  <h2>12. Changes to This Policy</h2>
  <p>We may update this Policy. The "Last Updated" date will reflect the latest version.</p>
  <br />

  <h2>13. Contact Us</h2>
  <p>If you have questions or wish to exercise your rights, contact us:</p>
  <ul>
    <li>Email: kontakt@soheilnazari.de</li>
    <li>Address: Oldachstr. 8, 22307 Hamburg</li>
  </ul>
  <br />

  <p>&copy; {{ currentYear }} Rock Science. All rights reserved.</p>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>
