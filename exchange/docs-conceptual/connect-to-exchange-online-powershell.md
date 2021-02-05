---
title: Connect to Exchange Online PowerShell
author: chrisda
manager: dansimp
ms.date:
ms.audience: Admin
ms.topic: article
ms.service: exchange-powershell
ms.reviewer: navgupta
localization_priority: Priority
ms.collection: Strat_EX_Admin
ms.custom:
ms.assetid:
search.appverid: MET150
description: "Learn how to use the Exchange Online PowerShell V2 module to connect to Exchange Online PowerShell with modern authentication and/or multi-factor authentication (MFA)."
---

# Connect to Exchange Online PowerShell

The Exchange Online PowerShell V2 module (abbreviated as the EXO V2 module) uses modern authentication and works with multi-factor authentication (MFA) for connecting to all Exchange-related PowerShell environments in Microsoft 365: Exchange Online PowerShell, Security & Compliance PowerShell, and standalone Exchange Online Protection (EOP) PowerShell. For more information about the EXO V2 module, see [About the Exchange Online PowerShell V2 module](exchange-online-powershell-v2.md).

**This article contains instructions for how to connect to Exchange Online PowerShell using the EXO V2 module with or without MFA.**

To use the older, less secure remote PowerShell connection instructions that [will eventually be deprecated](https://techcommunity.microsoft.com/t5/exchange-team-blog/basic-authentication-and-exchange-online-july-update/ba-p/1530163), see [Basic auth - Connect to Exchange Online PowerShell](basic-auth-connect-to-exo-powershell.md).

To use the older Exchange Online Remote PowerShell Module to connect to Exchange Online PowerShell using MFA, see [V1 module - Connect to Exchange Online PowerShell using MFA](v1-module-mfa-connect-to-exo-powershell.md). Note that this older version of the module will eventually be retired.

## What do you need to know before you begin?

- The requirements for installing and using the EXO V2 module are described in [Install and maintain the EXO V2 module](exchange-online-powershell-v2.md#install-and-maintain-the-exo-v2-module). The rest of the instructions in the article assume that you've already installed the module.

- After you connect, the cmdlets and parameters that you have or don't have access to is controlled by role-based access control (RBAC). For more information, see [Permissions in Exchange Online](https://docs.microsoft.com/exchange/permissions-exo/permissions-exo).

- If your organization is on-premises Exchange, and you have Exchange Enterprise CAL with Services licenses for Exchange Online Protection (EOP), your EOP PowerShell connection instructions are the same as Exchange Online PowerShell as described in this article.

> [!TIP]
> Having problems? Ask in the [Exchange Online](https://go.microsoft.com/fwlink/p/?linkId=267542) forum.

## Connect to Exchange Online PowerShell using MFA and modern authentication

If your account uses multi-factor authentication, use the steps in this section. Otherwise, skip to the [Connect to Exchange Online PowerShell using modern authentication](#connect-to-exchange-online-powershell-using-modern-authentication) section.

1. In a Windows PowerShell window, load the EXO V2 module by running the following command:

   ```powershell
   Import-Module ExchangeOnlineManagement
   ```

   **Note**: If you've already [installed the EXO V2 module](exchange-online-powershell-v2.md#install-and-maintain-the-exo-v2-module), the previous command will work as written.

2. The command that you need to run uses the following syntax:

   ```powershell
   Connect-ExchangeOnline -UserPrincipalName <UPN> -ShowProgress $true [-ExchangeEnvironmentName <Value>] [-DelegatedOrganization <String>] [-PSSessionOption $ProxyOptions]
   ```

   - _\<UPN\>_ is your account in user principal name format (for example, `navin@contoso.com`).
   - When you use the _ExchangeEnvironmentName_ parameter, you don't need use the _ConnectionUri_ or _AzureADAuthorizationEndPointUrl_ parameters. For more information, see the parameter descriptions in [Connect-ExchangeOnline](https://docs.microsoft.com/powershell/module/exchange/connect-exchangeonline).
   - The _DelegatedOrganization_ parameter specifies the customer organization that you want to manage as an authorized Microsoft Partner. For more information, see [Partners](https://docs.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/partners).
   - If you're behind a proxy server, run this command first: `$ProxyOptions = New-PSSessionOption -ProxyAccessType <Value>`, where \<Value\> is `IEConfig`, `WinHttpConfig`, or `AutoDetect`. Then, use the _PSSessionOption_ parameter with the value `$ProxyOptions`. For more information, see [New-PSSessionOption](https://docs.microsoft.com/powershell/module/microsoft.powershell.core/new-pssessionoption).

   **This example connects to Exchange Online PowerShell in a Microsoft 365 or Microsoft 365 GCC organization**:

   ```powershell
   Connect-ExchangeOnline -UserPrincipalName navin@contoso.com -ShowProgress $true
   ```

   **This example connects to Exchange Online PowerShell in an Office 365 Germany organization**:

   ```powershell
   Connect-ExchangeOnline -UserPrincipalName lukas@fabrikam.de -ShowProgress $true -ExchangeEnvironmentName O365GermanyCloud
   ```

   **This example connects to Exchange Online PowerShell in a Microsoft GCC High organization**:

   ```powershell
   Connect-ExchangeOnline -UserPrincipalName laura@blueyonderairlines.us -ShowProgress $true -ExchangeEnvironmentName O365USGovGCCHigh
   ```

   **This example connects to Exchange Online PowerShell in a Microsoft 365 DoD organization**:

   ```powershell
   Connect-ExchangeOnline -UserPrincipalName julia@adatum.mil -ShowProgress $true -ExchangeEnvironmentName O365USGovDoD
   ```

   **This example connects to Exchange Online PowerShell to manage another tenant**:

   ```powershell
   Connect-ExchangeOnline -UserPrincipalName navin@contoso.com -ShowProgress $true -DelegatedOrganization adatum.onmicrosoft.com
   ```

For detailed syntax and parameter information, see [Connect-ExchangeOnline](https://docs.microsoft.com/powershell/module/exchange/connect-exchangeonline).

> [!NOTE]
> Be sure to disconnect the remote PowerShell session when you're finished. If you close the Windows PowerShell window without disconnecting the session, you could use up all the remote PowerShell sessions available to you, and you'll need to wait for the sessions to expire. To disconnect the remote PowerShell session, run the following command.

```powershell
Disconnect-ExchangeOnline
```

## Connect to Exchange Online PowerShell using modern authentication

If your account doesn't use multi-factor authentication, use the steps in this section.

1. In a Windows PowerShell window, load the EXO V2 module by running the following command:

   ```powershell
   Import-Module ExchangeOnlineManagement
   ```

   **Note**: If you've already [installed the EXO V2 module](exchange-online-powershell-v2.md#install-and-maintain-the-exo-v2-module), the previous command will work as written.

2. Run the following command:

   > [!NOTE]
   > You can skip this step and omit the _Credential_ parameter in the next step to be prompted to enter the username and password after you run the **Connect-ExchangeOnline** command. If you omit the _Credential_ parameter and include the _UserPrincipalName_ parameter in the next step, you're only prompted to enter the password after you run the **Connect-ExchangeOnline** command.

   ```powershell
   $UserCredential = Get-Credential
   ```

   In the **Windows PowerShell Credential Request** dialog box that appears, type your work or school account and password, and then click **OK**.

3. The last command that you need to run uses the following syntax:

   ```powershell
   Connect-ExchangeOnline [-Credential $UserCredential] -ShowProgress $true [-ShowBanner:$false] [-ExchangeEnvironmentName <Value>] [-DelegatedOrganization <String>] [-PSSessionOption $ProxyOptions]
   ```

   - When you use the _ExchangeEnvironmentName_ parameter, you don't need use the _ConnectionUri_ or _AzureADAuthorizationEndPointUrl_ parameters. For more information, see the parameter descriptions in [Connect-ExchangeOnline](https://docs.microsoft.com/powershell/module/exchange/connect-exchangeonline).
   - The _DelegatedOrganization_ parameter specifies the customer organization that you want to manage as an authorized Microsoft Partner. For more information, see [Partners](https://docs.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/partners).
   - If you're behind a proxy server, store the output of the [New-PSSessionOption](https://docs.microsoft.com/powershell/module/microsoft.powershell.core/new-pssessionoption) cmdlet in a variable (for example, `$ProxyOptions = New-PSSessionOption -ProxyAccessType <Value> [-ProxyAuthentication <Value>] [-ProxyCredential <Value>]`). Then, use the variable (`$ProxyOptions`) as the value for the _PSSessionOption_ parameter.

   **Connect to Exchange Online PowerShell in a Microsoft 365 or Microsoft 365 GCC organization**:

   ```powershell
   Connect-ExchangeOnline -Credential $UserCredential -ShowProgress $true
   ```

   **Connect to Exchange Online PowerShell in an Office 365 Germany organization**:

   ```powershell
   Connect-ExchangeOnline -Credential $UserCredential -ShowProgress $true -ExchangeEnvironmentName O365GermanyCloud
   ```

   **Connect to Exchange Online PowerShell in an Office 365 operated by 21Vianet organization**:

   ```powershell
   Connect-ExchangeOnline -Credential $UserCredential -ShowProgress $true -ExchangeEnvironmentName O365China
   ```

   **Connect to Exchange Online PowerShell in a Microsoft 365 GCC High organization**:

   ```powershell
   Connect-ExchangeOnline -Credential $UserCredential -ShowProgress $true -ExchangeEnvironmentName O365USGovGCCHigh
   ```

   **Connect to Exchange Online PowerShell in a Microsoft 365 DoD organization**:

   ```powershell
   Connect-ExchangeOnline -Credential $UserCredential -ShowProgress $true -ExchangeEnvironmentName O365USGovDoD
   ```

For detailed syntax and parameter information, see [Connect-ExchangeOnline](https://docs.microsoft.com/powershell/module/exchange/connect-exchangeonline).

> [!NOTE]
> Be sure to disconnect the remote PowerShell session when you're finished. If you close the Windows PowerShell window without disconnecting the session, you could use up all the remote PowerShell sessions available to you, and you'll need to wait for the sessions to expire. To disconnect the remote PowerShell session, run the following command:

```powershell
Disconnect-ExchangeOnline
```

## How do you know this worked?

The Exchange Online cmdlets are imported into your local Windows PowerShell session and tracked by a progress bar. If you don't receive any errors, you connected successfully. A quick test is to run an Exchange Online PowerShell cmdlet, for example, **Get-Mailbox**, and see the results.

If you receive errors, check the following requirements:

- A common problem is an incorrect password. Run the three steps again and pay close attention to the username and password that you use.

- To help prevent denial-of-service (DoS) attacks, you're limited to five open remote PowerShell connections to Exchange Online.

- The account that you use to connect to must be enabled for remote PowerShell. For more information, see [Enable or disable access to Exchange Online PowerShell](disable-access-to-exchange-online-powershell.md).

- TCP port 80 traffic needs to be open between your local computer and Microsoft 365. It's probably open, but it's something to consider if your organization has a restrictive internet access policy.

- If your organization uses federated authentication, and your identity provider (IDP) and/or security token service (STS) isn't publicly available, you can't use a federated account to connect to Exchange Online PowerShell. Instead, create and use a non-federated account in Microsoft 365 to connect to Exchange Online PowerShell.
