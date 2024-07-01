---
title: Connect to Exchange Online Protection PowerShell
author: chrisda
manager: deniseb
ms.date: 8/21/2023
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
description: "Learn how to use the Exchange Online PowerShell V3 module to connect to standalone Exchange Online Protection PowerShell with modern authentication and/or multi-factor authentication (MFA)."
---

# Connect to Exchange Online Protection PowerShell

This article contains instructions for how to connect to Exchange Online Protection PowerShell using the Exchange Online PowerShell module with or without using multi-factor authentication (MFA).

The Exchange Online PowerShell module uses modern authentication for connecting to all Exchange-related PowerShell environments in Microsoft 365: Exchange Online PowerShell, Security & Compliance PowerShell, and standalone Exchange Online Protection (EOP) PowerShell. For more information about the module, see [About the Exchange Online PowerShell module](exchange-online-powershell-v2.md).

For more information about Exchange Online Protection PowerShell, see [Exchange Online Protection PowerShell](exchange-online-protection-powershell.md).

> [!NOTE]
> As of June 2020, the instructions for connecting to standalone Exchange Online Protection PowerShell and Exchange Online PowerShell are basically the same. If you use the **Connect-IPPSSession** cmdlet with the _ConnectionUri_ parameter value `https://ps.protection.outlook.com/powershell-liveid/`, you're redirected to the same `https://outlook.office365.com/powershell-liveid/` endpoint that's used by **Connect-ExchangeOnline** for Exchange Online PowerShell connections.
>
> Remote PowerShell connections in Exchange Online PowerShell are deprecated. For more information, see [Deprecation of Remote PowerShell in Exchange Online](https://techcommunity.microsoft.com/t5/exchange-team-blog/deprecation-of-remote-powershell-in-exchange-online-re-enabling/ba-p/3779692).
>
> REST API connections in the Exchange Online PowerShell V3 module require the PowerShellGet and PackageManagement modules. For more information, see [PowerShellGet for REST-based connections in Windows](exchange-online-powershell-v2.md#powershellget-for-rest-api-connections-in-windows).

## What do you need to know before you begin?

- The requirements for installing and using the module are described in [Install and maintain the Exchange Online PowerShell module](exchange-online-powershell-v2.md#install-and-maintain-the-exchange-online-powershell-module).

- After you connect, the cmdlets and parameters that you have or don't have access to is controlled by role-based access control (RBAC). For more information, see [Permissions in standalone EOP](/exchange/standalone-eop/manage-admin-role-group-permissions-in-eop).

> [!TIP]
> Having problems? Ask for help in the [Exchange Online Protection](https://go.microsoft.com/fwlink/p/?linkId=285351) forum.

## Connect to Exchange Online Protection PowerShell using modern authentication with or without MFA

These connection instructions use modern authentication and work with or without multi-factor authentication (MFA).

## Step 1: Load the Exchange Online PowerShell module

> [!NOTE]
> If the module is already installed, you can typically skip this step and run **Connect-ExchangeOnline** without manually loading the module first.

After you've [installed the module](exchange-online-powershell-v2.md#install-and-maintain-the-exchange-online-powershell-module), open a PowerShell window and load the module by running the following command:

```powershell
Import-Module ExchangeOnlineManagement
```

## Step 2: Connect and authenticate

> [!NOTE]
> Connect commands will likely fail if the profile path of the account that you used to connect contains special PowerShell characters (for example, `$`). The workaround is to connect using a different account that doesn't have special characters in the profile path.

The command that you need to run uses the following syntax:

```powershell
Connect-ExchangeOnline -UserPrincipalName <UPN> [-ShowBanner:$false]
```

For detailed syntax and parameter information, see [Connect-IPPSSession](/powershell/module/exchange/connect-ippssession).

- _\<UPN\>_ is your account in user principal name format (for example, `navin@contoso.onmicrosoft.com`).

- With the EXO V3 module (v3.0.0 or later) and the [demise of Basic authentication (remote PowerShell) connections to Exchange Online](https://techcommunity.microsoft.com/t5/exchange-team-blog/deprecation-of-remote-powershell-rps-protocol-in-security-and/ba-p/3815432), you're using REST API cmdlets only. For more information, see [REST API connections in the EXO V3 module](exchange-online-powershell-v2.md#rest-api-connections-in-the-exo-v3-module).

### Connect to Exchange Online Protection PowerShell with an interactive login prompt

This example works in Windows PowerShell 5.1 and PowerShell 7 for accounts with or without MFA:

```powershell
Connect-ExchangeOnline -UserPrincipalName navin@contoso.onmicrosoft.com
```

## Step 3: Disconnect when you're finished

Be sure to disconnect the session when you're finished. If you close the PowerShell window without disconnecting the session, you could use up all the sessions available to you, and you need to wait for the sessions to expire. To disconnect the session, run the following command:

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

- TCP port 80 traffic needs to be open between your local computer and Microsoft 365. It's probably open, but it's something to consider if your organization has a restrictive Internet access policy.

- You might fail to connect if your client IP address changes during the connection request. This can happen if your organization uses a source network address translation (SNAT) pool that contains multiple IP addresses. The connection error looks like this:

  > The request for the Windows Remote Shell with ShellId \<ID\> failed because the shell was not found on the server. Possible causes are: the specified ShellId is incorrect or the shell no longer exists on the server. Provide the correct ShellId or create a new shell and retry the operation.

  To fix the issue, use an SNAT pool that contains a single IP address, or force the use of a specific IP address for connections to the Exchange Online Protection PowerShell endpoint.
