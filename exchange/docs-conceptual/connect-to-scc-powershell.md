---
title: Connect to Security & Compliance PowerShell
author: chrisda
manager: dansimp
ms.date:
ms.audience: Admin
audience: Admin
ms.topic: article
ms.service: exchange-powershell
ms.reviewer: navgupta
ms.localizationpriority: high
ms.collection: Strat_EX_Admin
ms.custom:
ms.assetid:
search.appverid: MET150
description: "Learn how to use the Exchange Online PowerShell V2 module and V3 module to connect to Security & Compliance PowerShell with modern authentication and/or multi-factor authentication (MFA)."
---

# Connect to Security & Compliance PowerShell

The Exchange Online PowerShell module uses modern authentication and works with multi-factor authentication (MFA) for connecting to all Exchange-related PowerShell environments in Microsoft 365: Exchange Online PowerShell, Security & Compliance PowerShell, and standalone Exchange Online Protection (EOP) PowerShell. For more information about the module, see [About the Exchange Online PowerShell module](exchange-online-powershell-v2.md).

> [!NOTE]
> Version 2.0.5 and earlier versions of module are known as the Exchange Online PowerShell V2 module (abbreviated as the EXO V2 module). Version 3.0.0 and later is known as the Exchange Online PowerShell V3 module (abbreviated as the EXO V3 module).

This article contains instructions for how to connect to Security & Compliance PowerShell using the Exchange Online PowerShell module with or without MFA.

To connect to Security & Compliance PowerShell for automation, see [App-only authentication for unattended scripts](app-only-auth-powershell-v2.md).

To use the older, less secure remote PowerShell connection instructions that [will eventually be deprecated](https://techcommunity.microsoft.com/t5/exchange-team-blog/basic-authentication-deprecation-in-exchange-online-september/ba-p/3609437), see [Basic auth - Connect to Security & Compliance PowerShell](basic-auth-connect-to-scc-powershell.md).

To use the older Exchange Online Remote PowerShell Module to connect to Security & Compliance PowerShell using MFA, see [V1 module - Connect to Security & Compliance PowerShell using MFA](v1-module-mfa-connect-to-scc-powershell.md). Note that this older version of the module will eventually be retired.

## What do you need to know before you begin?

- The requirements for installing and using the module are described in [Install and maintain the Exchange Online PowerShell module](exchange-online-powershell-v2.md#install-and-maintain-the-exchange-online-powershell-module). The rest of the instructions in the article assume that you've already installed the module.

  > [!NOTE]
  > Security & Compliance PowerShell still requires Basic authentication in WinRM as described [Prerequisites for the Exchange Online PowerShell module](exchange-online-powershell-v2.md#turn-on-basic-authentication-in-winrm). REST API cmdlets that allow you to turn off Basic authentication in WinRM are not yet available for the **Connect-IPPSSession** cmdlet. For more information, see [Updates for version 3.0.0 (the EXO V3 module)](exchange-online-powershell-v2.md#updates-for-version-300-the-exo-v3-module).

- After you connect, the cmdlets and parameters that you have or don't have access to is controlled by role-based access control (RBAC). For more information, see [Permissions in the Microsoft 365 Defender portal](/microsoft-365/security/office-365-security/permissions-microsoft-365-security-center) and [Permissions in the Microsoft Purview compliance portal](/microsoft-365/compliance/microsoft-365-compliance-center-permissions).

## Connect to Exchange Online PowerShell using modern authentication with or without MFA

These connection instructions use modern authentication and work with or without multi-factor authentication (MFA).

1. After you've [installed the module](exchange-online-powershell-v2.md#install-and-maintain-the-exchange-online-powershell-module), open a PowerShell window and load the module by running the following command<sup>\*</sup>:

   ```powershell
   Import-Module ExchangeOnlineManagement
   ```

   <sup>\*</sup> In modern versions of PowerShell, you can typically skip this step and run **Connect-IPPSSession** without loading the module first.

2. The command that you need to run uses the following syntax:

   ```powershell
   Connect-IPPSSession -UserPrincipalName <UPN> [-ConnectionUri <URL>] [-AzureADAuthorizationEndpointUri <URL>] [-PSSessionOption $ProxyOptions]
   ```

   - _\<UPN\>_ is your account in user principal name format (for example, `navin@contoso.com`).
   - The required _ConnectionUri_ value depends on the nature of your Microsoft 365 organization. For more information, see the following examples or the parameter description in [Connect-IPPSSession](/powershell/module/exchange/connect-ippssession).
   - The _AzureADAuthorizationEndpointUri_ parameter is required in some environments and not in others. For more information, see the following examples or the parameter description in [Connect-IPPSSession](/powershell/module/exchange/connect-ippssession).
   - If you're behind a proxy server, run this command first: `$ProxyOptions = New-PSSessionOption -ProxyAccessType <Value>`, where \<Value\> is `IEConfig`, `WinHttpConfig`, or `AutoDetect`. Then, use the _PSSessionOption_ parameter with the value `$ProxyOptions`. For more information, see [New-PSSessionOption](/powershell/module/microsoft.powershell.core/new-pssessionoption).
   - Depending on the nature of your organization, you might be able to omit the _UserPrincipalName_ parameter in the next step. Instead, you enter the username and password or select stored credentials after you run the **Connect-IPPSSession** command. If it doesn't work, then you need to use the _UserPrincipalName_ parameter.
   - If you aren't using MFA, you should be able to use the _Credential_ parameter instead of the _UserPrincipalName_ parameter. First, run the command `$Credential = Get-Credential`, enter your username and password, and then use the variable name for the _Credential_ parameter (`-Credential $Credential`). If it doesn't work, then you need to use the _UserPrincipalName_ parameter.

   **This example connects to Security & Compliance PowerShell in a Microsoft 365 or Microsoft 365 GCC organization**:

   ```powershell
   Connect-IPPSSession -UserPrincipalName navin@contoso.com
   ```

   **This example connects to Security & Compliance PowerShell in an Office 365 operated by 21Vianet organization**:

   ```powershell
   Connect-IPPSSession -UserPrincipalName li@fabrikam.cn -ConnectionUri https://ps.compliance.protection.partner.outlook.cn/powershell-liveid
   ```

   **This example connects to Security & Compliance PowerShell in a Microsoft GCC High organization**:

   ```powershell
   Connect-IPPSSession -UserPrincipalName chris@govt.us -ConnectionUri https://ps.compliance.protection.office365.us/powershell-liveid/ -AzureADAuthorizationEndpointUri https://login.microsoftonline.us/common
   ```

   **This example connects to Security & Compliance PowerShell in a Microsoft 365 DoD organization**:

   ```powershell
   Connect-IPPSSession -UserPrincipalName michelle@govt.mil -ConnectionUri https://l5.ps.compliance.protection.office365.us/powershell-liveid/ -AzureADAuthorizationEndpointUri https://login.microsoftonline.us/common
   ```

For detailed syntax and parameter information, see [Connect-IPPSSession](/powershell/module/exchange/connect-ippssession).

> [!NOTE]
> Be sure to disconnect the remote PowerShell session when you're finished. If you close the Windows PowerShell window without disconnecting the session, you could use up all the remote PowerShell sessions available to you, and you'll need to wait for the sessions to expire. To disconnect the remote PowerShell session, run the following command.

```powershell
Disconnect-ExchangeOnline
```

## How do you know you've connected successfully?

The Security & Compliance PowerShell cmdlets are imported into your local Windows PowerShell session and tracked by a progress bar. If you don't receive any errors, you connected successfully. A quick test is to run a Security & Compliance PowerShell cmdlet, for example, **Get-RetentionCompliancePolicy**, and see the results.

If you receive errors, check the following requirements:

- A common problem is an incorrect password. Run the three steps again and pay close attention to the username and password that you use.

- To help prevent denial-of-service (DoS) attacks, you're limited to five open remote PowerShell connections to Security & Compliance PowerShell.

- The account that you use to connect must be enabled for remote PowerShell. For more information, see [Enable or disable access to Exchange Online PowerShell](disable-access-to-exchange-online-powershell.md).

- TCP port 80 traffic needs to be open between your local computer and Microsoft 365. It's probably open, but it's something to consider if your organization has a restrictive internet access policy.

- You might fail to connect if your client IP address changes during the connection request. This can happen if your organization uses a source network address translation (SNAT) pool that contains multiple IP addresses. The connection error looks like this:

  > The request for the Windows Remote Shell with ShellId \<ID\> failed because the shell was not found on the server. Possible causes are: the specified ShellId is incorrect or the shell no longer exists on the server. Provide the correct ShellId or create a new shell and retry the operation.

  To fix the issue, use an SNAT pool that contains a single IP address, or force the use of a specific IP address for connections to the Security & Compliance PowerShell endpoint.
