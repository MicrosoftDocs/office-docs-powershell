---
title: Connect to Security & Compliance Center PowerShell using the EXO V2 module
author: chrisda
manager: dansimp
ms.date:
ms.audience: Admin
ms.topic: article
ms.service: exchange-online
ms.reviewer: navgupta
localization_priority: Priority
ms.collection: Strat_EX_Admin
ms.custom:
ms.assetid:
search.appverid: MET150
description: "Learn how to use the Exchange Online PowerShell V2 module to connect to Security & Compliance Center PowerShell with modern authentication and/or multi-factor authentication (MFA)."
---

# Connect to Security & Compliance Center PowerShell

The Exchange Online PowerShell V2 module (abbreviated as the EXO V2 module) uses modern authentication and works with multi-factor authentication (MFA) for connecting to all Exchange-related PowerShell environments in Microsoft 365: Exchange Online PowerShell, Security & Compliance PowerShell, and standalone Exchange Online Protection (EOP) PowerShell. For more information about the EXO V2 module, see [About the Exchange Online PowerShell V2 module](exchange-online-powershell-v2.md).

**This topic contains instructions for how to connect to Security & Compliance Center PowerShell using the EXO V2 module with or without MFA.**

To use the older, less secure remote PowerShell connection instructions that [will eventually be deprecated](https://techcommunity.microsoft.com/t5/exchange-team-blog/basic-authentication-and-exchange-online-july-update/ba-p/1530163), see [Basic auth - Connect to Security & Compliance Center PowerShell](basic-auth-connect-to-scc-powershell.md).

To use the older Exchange Online Remote PowerShell Module to connect to Security & Compliance Center PowerShell using MFA, see [V1 module - Connect to Security & Compliance Center PowerShell using MFA](v1-module-mfa-connect-to-scc-powershell.md). Note that this older version of the module will eventually be retired.

## What do you need to know before you begin?

- The requirements for installing and using the EXO V2 module are described in [Install and maintain the EXO V2 module](exchange-online-powershell-v2.md#install-and-maintain-the-exo-v2-module).

## Connect to Security & Compliance PowerShell using MFA

If you account uses multi-factor authentication, use the steps in this section. Otherwise, skip to the [Connect to Security & Compliance Center PowerShell without using MFA](#connect-to-security--compliance-center-powershell-without-using-mfa) section.

1. In a Windows PowerShell window, load the EXO V2 module by running the following command:

   ```powershell
   Import-Module -Name ExchangeOnlineManagement
   ```

2. The command that you need to run uses the following syntax:

   ```powershell
   Connect-IPPSSession -UserPrincipalName <UPN> [-ConnectionUri <URL>] [-AzureADAuthorizationEndPointUri <URL>]
   ```

   - _\<UPN\>_ is your account in user principal name format (for example, `navin@contoso.com`).
   - The required _ConnectionUri_ and _AzureADAuthorizationEndPointUrl_ values depend on the nature of your Microsoft 365 organization. For more information, see the parameter descriptions in [Connect-IPPSSession](https://docs.microsoft.com/powershell/module/exchange/connect-ippssession).

   **This example connects to Security & Compliance Center PowerShell in a Microsoft 365 or Microsoft 365 GCC organization**.

   ```powershell
   Connect-IPPSSession -UserPrincipalName navin@contoso.com
   ```

   **This example connects to Security & Compliance Center PowerShell in an Office 365 Germany organization**.

   ```powershell
   Connect-IPPSSession -UserPrincipalName lukas@fabrikam.de -ConnectionUri https://ps.compliance.protection.outlook.de/PowerShell-LiveID -AzureADAuthorizationEndPointUri https://login.microsoftonline.de/common
   ```

   **This example connects to Security & Compliance Center PowerShell in a Microsoft GCC High organization**.

   ```powershell
   Connect-IPPSSession -UserPrincipalName laura@blueyonderairlines.us -ConnectionUri https://ps.compliance.protection.office365.us/powershell-liveid/ -AzureADAuthorizationEndPointUri https://login.microsoftonline.us/common
   ```

   **This example connects to Security & Compliance Center PowerShell in a Microsoft 365 DoD organization**.

   ```powershell
   Connect-IPPSSession -UserPrincipalName julia@adatum.mil -ConnectionUri https://l5.ps.compliance.protection.office365.us/powershell-liveid/ -AzureADAuthorizationEndPointUri https://login.microsoftonline.us/common
   ```

For detailed syntax and parameter information, see [Connect-IPPSSession](https://docs.microsoft.com/powershell/module/exchange/connect-exchangeonline).

> [!NOTE]
> Be sure to disconnect the remote PowerShell session when you're finished. If you close the Windows PowerShell window without disconnecting the session, you could use up all the remote PowerShell sessions available to you, and you'll need to wait for the sessions to expire. To disconnect the remote PowerShell session, run the following command.

```powershell
Disconnect-ExchangeOnline
```

## Connect to Security & Compliance Center PowerShell without using MFA

If your account doesn't use multi-factor authentication, use the steps in this section.

1. In a Windows PowerShell window, load the EXO V2 module by running the following command:

   ```powershell
   Import-Module -Name ExchangeOnlineManagement
   ```

2. Run the following command:

   ```powershell
   $UserCredential = Get-Credential
   ```

   In the **Windows PowerShell Credential Request** dialog box that appears, type your work or school account and password, and then click **OK**.

3. The command that you need to run uses the following syntax:

   ```powershell
   Connect-IPPSSession -Credential $UserCredential -ConnectionUri <URL>
   ```

   The required _ConnectionUri_ value depends on the nature of your Microsoft 365 organization. For more information, see the parameter description in [Connect-IPPSSession](https://docs.microsoft.com/powershell/module/exchange/connect-ippssession).

   **This example connects to Security & Compliance Center PowerShell in a Microsoft 365 or Microsoft 365 GCC organization**.

   ```powershell
   Connect-IPPSSession -Credential $UserCredential -ConnectionUri https://ps.compliance.protection.outlook.com/powershell-liveid/
   ```

   **This example connects to Security & Compliance Center PowerShell in an Office 365 Germany organization**.

   ```powershell
   Connect-IPPSSession -Credential $UserCredential -ConnectionUri https://ps.compliance.protection.outlook.de/
   ```

   **This example connects to Security & Compliance Center PowerShell in a Microsoft GCC High organization**.

   ```powershell
   Connect-IPPSSession -Credential $UserCredential -ConnectionUri https://ps.compliance.protection.office365.us/powershell-liveid/
   ```

   **This example connects to Security & Compliance Center PowerShell in a Microsoft 365 DoD organization**.

   ```powershell
   Connect-IPPSSession -Credential $UserCredential -ConnectionUri https://l5.ps.compliance.protection.office365.us/powershell-liveid/
   ```

For detailed syntax and parameter information, see [Connect-IPPSSession](https://docs.microsoft.com/powershell/module/exchange/connect-exchangeonline).

> [!NOTE]
> Be sure to disconnect the remote PowerShell session when you're finished. If you close the Windows PowerShell window without disconnecting the session, you could use up all the remote PowerShell sessions available to you, and you'll need to wait for the sessions to expire. To disconnect the remote PowerShell session, run the following command.

```powershell
Disconnect-ExchangeOnline
```

## How do you know this worked?

The Security & Compliance Center cmdlets are imported into your local Windows PowerShell session and tracked by a progress bar. If you don't receive any errors, you connected successfully. A quick test is to run a Security & Compliance Center cmdlet, for example, **Get-RetentionCompliancePolicy**, and see the results.

If you receive errors, check the following requirements:

- A common problem is an incorrect password. Run the three steps again and pay close attention to the user name and password you enter in Step 1.

- To help prevent denial-of-service (DoS) attacks, you're limited to three open remote PowerShell connections to your Exchange Online organization.

- The account you use to connect must be enabled for remote PowerShell. For more information, see [Enable or disable access to Exchange Online PowerShell](disable-access-to-exchange-online-powershell.md).

- TCP port 80 traffic needs to be open between your local computer and Microsoft 365. It's probably open, but it's something to consider if your organization has a restrictive internet access policy.

- You might fail to connect if your client IP address changes during the connection request. This can happen if your organization uses a source network address translation (SNAT) pool that contains multiple IP addresses. The connection error looks like this:

  > The request for the Windows Remote Shell with ShellId \<ID\> failed because the shell was not found on the server. Possible causes are: the specified ShellId is incorrect or the shell no longer exists on the server. Provide the correct ShellId or create a new shell and retry the operation.

  To fix the issue, use an SNAT pool that contains a single IP address, or force the use of a specific IP address for connections to the Security & Compliance PowerShell endpoint.
