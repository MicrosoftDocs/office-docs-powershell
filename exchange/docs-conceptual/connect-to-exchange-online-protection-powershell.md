---
title: Connect to Exchange Online Protection PowerShell
author: chrisda
manager: dansimp
ms.date:
ms.audience: Admin
audience: Admin
ms.topic: article
ms.service: exchange-powershell
ms.reviewer:
ms.localizationpriority: high
ms.collection: Strat_EX_Admin
ms.custom:
ms.assetid:
search.appverid: MET150
description: "Learn how to use the Exchange Online PowerShell V2 module or V3 module to connect to standalone Exchange Online Protection PowerShell with modern authentication and/or multi-factor authentication (MFA)."
---

# Connect to Exchange Online Protection PowerShell

This article contains instructions for how to connect to Exchange Online Protection PowerShell using the Exchange Online PowerShell module with or without using multi-factor authentication (MFA).

The Exchange Online PowerShell module uses modern authentication for connecting to all Exchange-related PowerShell environments in Microsoft 365: Exchange Online PowerShell, Security & Compliance PowerShell, and standalone Exchange Online Protection (EOP) PowerShell. For more information about the module, see [About the Exchange Online PowerShell module](exchange-online-powershell-v2.md).

> [!NOTE]
> Version 2.0.5 and earlier is known as the Exchange Online PowerShell V2 module (abbreviated as the EXO V2 module). Version 3.0.0 and later is known as the Exchange Online PowerShell V3 module (abbreviated as the EXO V3 module).

To use the older, less secure remote PowerShell connection instructions that [will eventually be deprecated](https://techcommunity.microsoft.com/t5/exchange-team-blog/basic-authentication-deprecation-in-exchange-online-september/ba-p/3609437), see [Basic auth - Connect to Exchange Online Protection PowerShell](basic-auth-connect-to-eop-powershell.md).

## What do you need to know before you begin?

- **The procedures in this article are only for Microsoft 365 organizations that don't have Exchange Online mailboxes**. For example, you have a standalone EOP subscription that protects your on-premises email environment. If your Microsoft 365 subscription includes Exchange Online mailboxes, you can't connect to EOP PowerShell; instead, you [connect to Exchange Online PowerShell](connect-to-exchange-online-powershell.md).

  If your organization is on-premises Exchange, and you have Exchange Enterprise CAL with Services licenses for EOP, your EOP PowerShell connection instructions are the same as Exchange Online PowerShell. Use the Exchange Online PowerShell connection instructions in [Connect to Exchange Online PowerShell](connect-to-exchange-online-powershell.md) instead of the instructions in this article.

- The requirements for installing and using the module are described in [Install and maintain the Exchange Online PowerShell module](exchange-online-powershell-v2.md#install-and-maintain-the-exchange-online-powershell-module).

- After you connect, the cmdlets and parameters that you have or don't have access to is controlled by role-based access control (RBAC). For more information, see [Permissions in standalone EOP](/exchange/standalone-eop/manage-admin-role-group-permissions-in-eop).

> [!TIP]
> Having problems? Ask for help in the [Exchange Online Protection](https://go.microsoft.com/fwlink/p/?linkId=285351) forum.

## Connect to Exchange Online Protection PowerShell using modern authentication with or without MFA

These connection instructions use modern authentication and work with or without multi-factor authentication (MFA).

## Step 1: Load the Exchange Online PowerShell module

> [!NOTE]
> If the module is already installed, you can typically skip this step and run **Connect-IPPSSession** without manually loading the module first.

After you've [installed the module](exchange-online-powershell-v2.md#install-and-maintain-the-exchange-online-powershell-module), open a PowerShell window and load the module by running the following command:

```powershell
Import-Module ExchangeOnlineManagement
```

## Step 2: Connect and authenticate

The command that you need to run uses the following syntax:

```powershell
Connect-IPPSSession -UserPrincipalName <UPN> -ConnectionUri `https://ps.protection.outlook.com/powershell-liveid/ [-PSSessionOption $ProxyOptions]
```

For detailed syntax and parameter information, see [Connect-IPPSSession](/powershell/module/exchange/connect-ippssession).

- _\<UPN\>_ is your account in user principal name format (for example, `navin@contoso.onmicrosoft.com`).

- If you're behind a proxy server, you can use the _PSSessionOption_ parameter in the connection command. First, run this command: `$ProxyOptions = New-PSSessionOption -ProxyAccessType <Value>`, where \<Value\> is `IEConfig`, `WinHttpConfig`, or `AutoDetect`. Then, use the value `$ProxyOptions` for the _PSSessionOption_ parameter. For more information, see [New-PSSessionOption](/powershell/module/microsoft.powershell.core/new-pssessionoption).


### Connect to Security & Compliance PowerShell with an interactive login prompt

This example connects to Exchange Online Protection PowerShell in a Microsoft 365 organization:

```powershell
Connect-IPPSSession -UserPrincipalName navin@contoso.onmicrosoft.com -ConnectionUri https://ps.protection.outlook.com/powershell-liveid/
```

## Step 3: Disconnect when you're finished

Be sure to disconnect the session when you're finished. If you close the PowerShell window without disconnecting the session, you could use up all the sessions available to you, and you'll need to wait for the sessions to expire. To disconnect the session, run the following command.

```powershell
Disconnect-ExchangeOnline
```

To silently disconnect without a confirmation prompt, run the following command:

```powershell
Disconnect-ExchangeOnline -Confirm:$false
```

## How do you know you've connected successfully?

The Exchange Online Protection Protection cmdlets are imported into your local Windows PowerShell session and tracked by a progress bar. If you don't receive any errors, you've connected successfully. A quick test is to run an Exchange Online Protection cmdlet, for example, **Get-AcceptedDomain**, and see the results.

If you receive errors, check the following requirements:

- A common problem is an incorrect password. Run the connection steps again and pay close attention to the username and password that you use.

- To help prevent denial-of-service (DoS) attacks, you're limited to five open remote PowerShell connections to Exchange Online Protection.

- TCP port 80 traffic needs to be open between your local computer and Microsoft 365. It's probably open, but it's something to consider if your organization has a restrictive Internet access policy.

- The account that you use to connect to Exchange Online Protection PowerShell must be represented as a [mail user in EOP](/microsoft-365/security/office-365-security/manage-mail-users-in-eop) (created manually or by directory synchronization). If the account is not visible in the Exchange admin center (EAC) as a mail user at **Recipients** \> **Contacts**, you'll receive the following error when you try to connect:

  > Import-PSSession : Running the Get-Command command in a remote session reported the following error: Processing data for a remote command failed with the following error message: The request for the Windows Remote Shell with ShellId \<GUID\> failed because the shell was not found on the server. Possible causes are: the specified ShellId is incorrect or the shell no longer exists on the server. Provide the correct ShellId or create a new shell and retry the operation.

- You might fail to connect if your client IP address changes during the connection request. This can happen if your organization uses a source network address translation (SNAT) pool that contains multiple IP addresses. The connection error looks like this:

  > The request for the Windows Remote Shell with ShellId \<ID\> failed because the shell was not found on the server. Possible causes are: the specified ShellId is incorrect or the shell no longer exists on the server. Provide the correct ShellId or create a new shell and retry the operation.

  To fix the issue, use an SNAT pool that contains a single IP address, or force the use of a specific IP address for connections to the Exchange Online Protection PowerShell endpoint.
