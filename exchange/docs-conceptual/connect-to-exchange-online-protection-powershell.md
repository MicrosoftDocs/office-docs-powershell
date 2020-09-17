---
title: Connect to Exchange Online Protection PowerShell
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
description: "Learn how to use the Exchange Online PowerShell V2 module to connect to standalone Exchange Online Protection PowerShell with modern authentication and/or multi-factor authentication (MFA)."
---

# Connect to Exchange Online Protection PowerShell

The Exchange Online PowerShell V2 module (abbreviated as the EXO V2 module) uses modern authentication and works with multi-factor authentication (MFA) for connecting to all Exchange-related PowerShell environments in Microsoft 365: Exchange Online PowerShell, Security & Compliance PowerShell, and standalone Exchange Online Protection (EOP) PowerShell. For more information about the EXO V2 module, see [About the Exchange Online PowerShell V2 module](exchange-online-powershell-v2.md).

**This topic contains instructions for how to connect to Exchange Online Protection PowerShell using the EXO V2 module with or without using MFA.**

To use the older, less secure remote PowerShell connection instructions that [will eventually be deprecated](https://techcommunity.microsoft.com/t5/exchange-team-blog/basic-authentication-and-exchange-online-july-update/ba-p/1530163), see [Basic auth - Connect to Exchange Online Protection PowerShell](basic-auth-connect-to-eop-powershell.md).

## What do you need to know before you begin?

- **The procedures in this topic are only for Microsoft 365 organizations that don't have Exchange Online mailboxes**. For example, you have a standalone EOP subscription that protects your on-premises email environment. If your Microsoft 365 subscription includes Exchange Online mailboxes, you can't connect to EOP PowerShell; instead, you [connect to Exchange Online PowerShell](connect-to-exchange-online-powershell.md).

  If your organization is on-premises Exchange, and you have Exchange Enterprise CAL with Services licenses for EOP, your EOP PowerShell connection instructions are the same as Exchange Online PowerShell. Use the Exchange Online PowerShell connection instructions in [Connect to Exchange Online PowerShell](connect-to-exchange-online-powershell.md) instead of the instructions in this topic.

- The requirements for installing and using the EXO V2 module are described in [Install and maintain the EXO V2 module](exchange-online-powershell-v2.md#install-and-maintain-the-exo-v2-module).

> [!TIP]
> Having problems? Ask for help in the [Exchange Online Protection](https://go.microsoft.com/fwlink/p/?linkId=285351) forum.

## Connect to Exchange Online Protection PowerShell using MFA

If you account uses multi-factor authentication, use the steps in this section. Otherwise, skip to the [Connect to Exchange Online Protection PowerShell without using MFA](#connect-to-exchange-online-protection-powershell-without-using-mfa) section.

1. In a Windows PowerShell window, load the EXO V2 module by running the following command:

   ```powershell
   Import-Module ExchangeOnlineManagement
   ```

2. The command that you need to run uses the following syntax:

   ```powershell
   Connect-IPPSSession -UserPrincipalName <UPN> [-ConnectionUri <URL>] [-AzureADAuthorizationEndPointUri <URL>]
   ```

   - _\<UPN\>_ is your account in user principal name format (for example, `navin@contoso.com`).
   - The required _ConnectionUri_ and _AzureADAuthorizationEndPointUrl_ values depend on the nature of your Microsoft 365 organization. For more information, see the parameter descriptions in [Connect-IPPSSession](https://docs.microsoft.com/powershell/module/exchange/connect-ippssession).

   **This example connects to Exchange Online Protection PowerShell in a Microsoft 365 organization**:

   ```powershell
   Connect-IPPSSession -UserPrincipalName navin@contoso.com -ConnectionUri https://ps.protection.outlook.com/powershell-liveid/
   ```

   **This example connects to Exchange Online Protection PowerShell in an Office 365 Germany organization**:

   ```powershell
   Connect-IPPSSession -UserPrincipalName lukas@fabrikam.com -ConnectionUri https://ps.protection.outlook.de/powershell-liveid/ -AzureADAuthorizationEndPointUri https://login.microsoftonline.de/common
   ```

For detailed syntax and parameter information, see [Connect-IPPSSession](https://docs.microsoft.com/powershell/module/exchange/connect-exchangeonline).

> [!NOTE]
> Be sure to disconnect the remote PowerShell session when you're finished. If you close the Windows PowerShell window without disconnecting the session, you could use up all the remote PowerShell sessions available to you, and you'll need to wait for the sessions to expire. To disconnect the remote PowerShell session, run the following command.

```powershell
Disconnect-ExchangeOnline
```

## Connect to Exchange Online Protection PowerShell without using MFA

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

3. The command that you need to run uses the following syntax:

   ```powershell
   Connect-IPPSSession -Credential $UserCredential -ConnectionUri <URL>
   ```

   The required _ConnectionUri_ value depends on the nature of your Microsoft 365 organization. For more information, see the parameter description in [Connect-IPPSSession](https://docs.microsoft.com/powershell/module/exchange/connect-ippssession).

   **This example connects to Exchange Online Protection PowerShell in a Microsoft 365 organization**:

   ```powershell
   Connect-IPPSSession -Credential $UserCredential -ConnectionUri https://ps.protection.outlook.com/powershell-liveid/
   ```

   **This example connects to Exchange Online Protection PowerShell in an Office 365 Germany organization**:

   ```powershell
   Connect-IPPSSession -Credential $UserCredential -ConnectionUri https://ps.protection.outlook.de/powershell-liveid/
   ```

For detailed syntax and parameter information, see [Connect-IPPSSession](https://docs.microsoft.com/powershell/module/exchange/connect-exchangeonline).

> [!NOTE]
> Be sure to disconnect the remote PowerShell session when you're finished. If you close the Windows PowerShell window without disconnecting the session, you could use up all the remote PowerShell sessions available to you, and you'll need to wait for the sessions to expire. To disconnect the remote PowerShell session, run the following command.

```powershell
Disconnect-ExchangeOnline
```

## How do you know this worked?

The Exchange Online Protection Protection cmdlets are imported into your local Windows PowerShell session and tracked by a progress bar. If you don't receive any errors, you connected successfully. A quick test is to run an Exchange Online Protection cmdlet, for example, **Get-TransportRule**, and see the results.

If you receive errors, check the following requirements:

- A common problem is an incorrect password. Run the three steps again and pay close attention to the user name and password you enter in Step 1.

- To help prevent denial-of-service (DoS) attacks, you're limited to three open remote PowerShell connections to your Exchange Online Protection organization.

- TCP port 80 traffic needs to be open between your local computer and Microsoft 365. It's probably open, but it's something to consider if your organization has a restrictive Internet access policy.

- The account you use to connect to Exchange Online Protection PowerShell must be represented as a [mail user in EOP](https://docs.microsoft.com/microsoft-365/security/office-365-security/manage-mail-users-in-eop) (created manually or by directory synchronization). If the account is not visible in the Exchange admin center (EAC) as a mail user at **Recipients** \> **Contacts**, you'll receive the following error when you try to connect:

  > Import-PSSession : Running the Get-Command command in a remote session reported the following error: Processing data for a remote command failed with the following error message: The request for the Windows Remote Shell with ShellId <GUID> failed because the shell was not found on the server. Possible causes are: the specified ShellId is incorrect or the shell no longer exists on the server. Provide the correct ShellId or create a new shell and retry the operation.

- You might fail to connect if your client IP address changes during the connection request. This can happen if your organization uses a source network address translation (SNAT) pool that contains multiple IP addresses. The connection error looks like this:

  > The request for the Windows Remote Shell with ShellId <ID> failed because the shell was not found on the server. Possible causes are: the specified ShellId is incorrect or the shell no longer exists on the server. Provide the correct ShellId or create a new shell and retry the operation.

  To fix the issue, use an SNAT pool that contains a single IP address, or force the use of a specific IP address for connections to the Exchange Online Protection PowerShell endpoint.
