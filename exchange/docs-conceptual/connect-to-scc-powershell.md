---
title: Connect to Security & Compliance Center PowerShell
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

# Connect to Security & Compliance Center PowerShell using the EXO V2 module

The Exchange Online PowerShell V2 module (abbreviated as the EXO V2 module) uses modern authentication and works with multi-factor authentication (MFA) for connecting to all Exchange-related PowerShell environments in Microsoft 365: Exchange Online PowerShell, Security & Compliance PowerShell, and standalone Exchange Online Protection (EOP) PowerShell. For more information about the EXO V2 module, see [About the Exchange Online PowerShell V2 module](exchange-online-powershell-v2.md).

This topic contains instructions for how to connect to Security & Compliance Center PowerShell using the EXO V2 module.

To use the older, less secure remote PowerShell connection instructions that [will eventually be deprecated](https://techcommunity.microsoft.com/t5/exchange-team-blog/basic-authentication-and-exchange-online-april-2020-update/ba-p/1275508), see [Connect to Security & Compliance Center PowerShell using Basic authentication](basic-auth-connect-to-scc-powershell.md).

## What do you need to know before you begin?

- The requirements for installing and using the EXO V2 module are described in [Install and maintain the EXO V2 module](exchange-online-powershell-v2.md#install-and-maintain-the-exo-v2-module).

- The required _ConnectionUri_ and _AzureADAuthorizationEndPointUri_ parameter values depend on the nature of your Microsoft 365 organization as described in the following table:

  |**Microsoft 365 offering**|**_ConnectionUri_ value**|**_AzureADAuthorizationEndPointUri_ value**|
  |:-----|:-----|:-----|
  |Microsoft 365 or Microsoft 365 GCC|Not used|Not used|
  |Microsoft 365 GCC High|`https://ps.compliance.protection.office365.us/powershell-liveid/`|`https://login.microsoftonline.us/common`|
  |Microsoft 365 DoD|`https://l5.ps.compliance.protection.office365.us/powershell-liveid/`|`https://login.microsoftonline.us/common`|
  |Office 365 Germany|`https://ps.compliance.protection.outlook.de/PowerShell-LiveID`|`https://login.microsoftonline.de/common`|

## Connect to Security & Compliance PowerShell using MFA

If you account uses multi-factor authentication, use the steps in this section. Otherwise, skip to the [Connect to Security & Compliance Center PowerShell without using MFA](#connect-to-security--compliance-center-powershell-without-using-mfa) section.

1. In a Windows PowerShell window, load the EXO V2 module by running the following command:

   ```powershell
   Import-Module ExchangeOnlineManagement
   ```

2. The command that you need to run uses the following syntax:

   ```powershell
   Connect-IPPSSession -UserPrincipalName <UPN> -ShowProgress $true [-ConnectionUri <Value>] [-AzureADAuthorizationEndPointUri <Value>]
   ```

   - \<UPN\> is your account in user principal name format (for example, `navin@contoso.com`).
   - The required _ConnectionUri_ and _AzureADAuthorizationEndPointUri_ parameter values are described in the table in the [What do you need to know before you begin?](#what-do-you-need-to-know-before-you-begin) section.

   **This example connects to Security & Compliance Center PowerShell in a Microsoft 365 or Microsoft 365 GCC organization**.

   ```powershell
   Connect-IPPSSession -UserPrincipalName chris@contoso.com -ShowProgress $true
   ```

   **This example connects to Security & Compliance Center PowerShell in a Microsoft GCC High organization**.

   ```powershell
   Connect-IPPSSession -UserPrincipalName laura@blueyonderairlines.us -ShowProgress $true -ConnectionUri https://l5.ps.compliance.protection.office365.us/powershell-liveid/ -AzureADAuthorizationEndPointUri https://login.microsoftonline.us/common
   ```

   **This example connects to Security & Compliance Center PowerShell in a Microsoft 365 DoD organization**.

   ```powershell
   Connect-IPPSSession -UserPrincipalName julia@adatum.mil -ShowProgress $true -ConnectionUri https://l5.ps.compliance.protection.office365.us/powershell-liveid/ -AzureADAuthorizationEndPointUri https://login.microsoftonline.us/common
   ```

   **This example connects to Security & Compliance Center PowerShell in an Office 365 Germany organization**.

   ```powershell
   Connect-IPPSSession -UserPrincipalName lukas@fabrikam.de -ShowProgress $true -ConnectionUri https://ps.compliance.protection.outlook.de/PowerShell-LiveID -AzureADAuthorizationEndPointUri https://login.microsoftonline.de/common
   ```

For detailed syntax and parameter information, see [Connect-IPPSSession](https://docs.microsoft.com/powershell/module/exchange/connect-exchangeonline).

> [!NOTE]
> Be sure to disconnect the remote PowerShell session when you're finished. If you close the Windows PowerShell window without disconnecting the session, you could use up all the remote PowerShell sessions available to you, and you'll need to wait for the sessions to expire. To disconnect the remote PowerShell session, run the following command.

```PowerShell
Disconnect-ExchangeOnline
```

## Connect to Security & Compliance Center PowerShell without using MFA

If your account doesn't use multi-factor authentication, use the steps in this section.

1. In a Windows PowerShell window, load the EXO V2 module by running the following command:

   ```powershell
   Import-Module ExchangeOnlineManagement
   ```

2. Run the following command:

   ```powershell
   $UserCredential = Get-Credential
   ```

   In the **Windows PowerShell Credential Request** dialog box that appears, type your work or school account and password, and then click **OK**.

3. Run the following command:

     ```powershell
     Connect-IPPSSession -Credential $UserCredential -ShowProgress $true
     ```

## How do you know this worked?

The Security & Compliance Center cmdlets are imported into your local Windows PowerShell session and tracked by a progress bar. If you don't receive any errors, you connected successfully. A quick test is to run a Security & Compliance Center cmdlet, for example, **Get-RetentionCompliancePolicy**, and see the results.

If you receive errors, check the following requirements:

- A common problem is an incorrect password. Run the three steps again and pay close attention to the user name and password you enter in Step 1.

- To help prevent denial-of-service (DoS) attacks, you're limited to three open remote PowerShell connections to your Exchange Online organization.

- The account you use to connect must be enabled for remote PowerShell. For more information, see [Enable or disable access to Exchange Online PowerShell](disable-access-to-exchange-online-powershell.md).

- TCP port 80 traffic needs to be open between your local computer and Microsoft 365. It's probably open, but it's something to consider if your organization has a restrictive internet access policy.

- The **Connect-IPPSSession** command might fail to connect if your client IP address changes during the connection request. This can happen if your organization uses a source network address translation (SNAT) pool that contains multiple IP addresses. The connection error looks like this:

  > The request for the Windows Remote Shell with ShellId \<ID\> failed because the shell was not found on the server. Possible causes are: the specified ShellId is incorrect or the shell no longer exists on the server. Provide the correct ShellId or create a new shell and retry the operation.

  To fix the issue, use an SNAT pool that contains a single IP address, or force the use of a specific IP address for connections to the Security & Compliance PowerShell endpoint.
