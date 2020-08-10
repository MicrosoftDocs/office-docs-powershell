---
title: Connect to Exchange Online PowerShell
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
description: "Learn how to use the Exchange Online PowerShell V2 module to connect to Exchange Online PowerShell with modern authentication and/or multi-factor authentication (MFA)."
---

# Connect to Exchange Online PowerShell using the EXO V2 module

The Exchange Online PowerShell V2 module (abbreviated as the EXO V2 module) uses modern authentication and works with multi-factor authentication (MFA) for connecting to all Exchange-related PowerShell environments in Microsoft 365: Exchange Online PowerShell, Security & Compliance PowerShell, and standalone Exchange Online Protection (EOP) PowerShell. For more information about the EXO V2 module, see [About the Exchange Online PowerShell V2 module](exchange-online-powershell-v2.md).

**This topic contains instructions for how to connect to Exchange Online PowerShell using the EXO V2 module with or without MFA.**

To use the older, less secure remote PowerShell connection instructions that [will eventually be deprecated](https://techcommunity.microsoft.com/t5/exchange-team-blog/basic-authentication-and-exchange-online-april-2020-update/ba-p/1275508), see [Basic auth - Connect to Exchange Online PowerShell](basic-auth-connect-to-exo-powershell.md).

To use the older Exchange Online Remote PowerShell Module to connect to Exchange Online PowerShell using MFA, see [V1 module - Connect to Exchange Online PowerShell using MFA](v1-module-mfa-connect-to-exo-powershell.md). Note that this older version of the module will eventually be retired.

## What do you need to know before you begin?

- The requirements for installing and using the EXO V2 module are described in [Install and maintain the EXO V2 module](exchange-online-powershell-v2.md#install-and-maintain-the-exo-v2-module).

- The required _ConnectionUri_ and _AzureADAuthorizationEndPointUri_ parameter values depend on the nature of your Microsoft 365 organization as described in the following table:

  ****

  |Microsoft 365 offering|_ConnectionUri_ value|_AzureADAuthorizationEndPointUri_ value|
  |---|---|---|
  |Microsoft 365 or Microsoft 365 GCC|Not used|Not used|
  |Office 365 Germany|`https://outlook.office.de/PowerShell-LiveID`|`https://login.microsoftonline.de/common`|
  |Office 365 operated by 21Vianet|`https://partner.outlook.cn/PowerShell`|n/a|
  |Microsoft 365 GCC High|`https://outlook.office365.us/powershell-liveid`|`https://login.microsoftonline.us/common`|
  |Microsoft 365 DoD|`https://webmail.apps.mil/powershell-liveid`|`https://login.microsoftonline.us/common`|
  |

- The _DelegatedOrganization_ parameter specifies the customer organization that you want to manage as an authorized Microsoft Partner. For more information, see [Partners](https://docs.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/partners).

> [!TIP]
> Having problems? Ask in the [Exchange Online](https://go.microsoft.com/fwlink/p/?linkId=267542) forum.

## Connect to Exchange Online PowerShell using MFA

If you account uses multi-factor authentication, use the steps in this section. Otherwise, skip to the [Connect to Exchange Online PowerShell without using MFA](#connect-to-exchange-online-powershell-without-using-mfa) section.

1. In a Windows PowerShell window, load the EXO V2 module by running the following command:

   ```powershell
   Import-Module ExchangeOnlineManagement
   ```

2. The command that you need to run uses the following syntax:

   ```powershell
   Connect-ExchangeOnline -UserPrincipalName <UPN> -ShowProgress $true [-ConnectionUri <URL>] [-AzureADAuthorizationEndPointUri <URL>] [-DelegatedOrganization <String>]
   ```

   - _\<UPN\>_ is your account in user principal name format (for example, `navin@contoso.com`).
   - The _ConnectionUri_ and _AzureADAuthorizationEndPointUrl_ values are described in the table in the [What do you need to know before you begin?](#what-do-you-need-to-know-before-you-begin) section.

   **This example connects to Exchange Online PowerShell in a Microsoft 365 or Microsoft 365 GCC organization**:

   ```powershell
   Connect-ExchangeOnline -UserPrincipalName navin@contoso.com -ShowProgress $true
   ```

   **This example connects to Exchange Online PowerShell in an Office 365 Germany organization**:

   ```powershell
   Connect-ExchangeOnline -UserPrincipalName lukas@fabrikam.de -ShowProgress $true -ConnectionUri https://outlook.office.de/PowerShell-LiveID -AzureADAuthorizationEndPointUri https://login.microsoftonline.de/common
   ```

   **This example connects to Exchange Online PowerShell in a Microsoft GCC High organization**:

   ```powershell
   Connect-ExchangeOnline -UserPrincipalName laura@blueyonderairlines.us -ShowProgress $true -ConnectionUri https://outlook.office365.us/powershell-liveid -AzureADAuthorizationEndPointUri https://login.microsoftonline.us/common
   ```

   **This example connects to Exchange Online PowerShell in a Microsoft 365 DoD organization**:

   ```powershell
   Connect-ExchangeOnline -UserPrincipalName julia@adatum.mil -ShowProgress $true -ConnectionUri https://webmail.apps.mil/powershell-liveid -AzureADAuthorizationEndPointUri https://login.microsoftonline.us/common
   ```

   **This example connects to Exchange Online PowerShell to manage another tenant**:

   ```powershell
   Connect-ExchangeOnline -UserPrincipalName chris@contoso.com -DelegatedOrganization adatum.onmicrosoft.com
   ```

For detailed syntax and parameter information, see [Connect-ExchangeOnline](https://docs.microsoft.com/powershell/module/exchange/connect-exchangeonline).

> [!NOTE]
> Be sure to disconnect the remote PowerShell session when you're finished. If you close the Windows PowerShell window without disconnecting the session, you could use up all the remote PowerShell sessions available to you, and you'll need to wait for the sessions to expire. To disconnect the remote PowerShell session, run the following command.

```powershell
Disconnect-ExchangeOnline
```

## Connect to Exchange Online PowerShell without using MFA

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
   Connect-ExchangeOnline -Credential $UserCredential = Get-Credential -ShowProgress $true [-ConnectionUri <URL>] [-DelegatedOrganization <String>]
   ```

   The _ConnectionUri_ values are described in the table in the [What do you need to know before you begin?](#what-do-you-need-to-know-before-you-begin) section.

   **Connect to Exchange Online PowerShell in a Microsoft 365 or Microsoft 365 GCC organization**:

   ```powershell
   Connect-ExchangeOnline -Credential $UserCredential -ShowProgress $true
   ```

   **Connect to Exchange Online PowerShell in an Office 365 Germany organization**:

   ```powershell
   Connect-ExchangeOnline -Credential $UserCredential -ShowProgress $true -ConnectionUri https://outlook.office.de/powershell-liveid/
   ```

   **Connect to Exchange Online PowerShell in an Office 365 operated by 21Vianet organization**:

   ```powershell
   Connect-ExchangeOnline -Credential $UserCredential -ShowProgress $true -ConnectionUri https://partner.outlook.cn/PowerShell
   ```

   **Connect to Exchange Online PowerShell in a Microsoft 365 GCC High organization**:

   ```powershell
   Connect-ExchangeOnline -Credential $UserCredential -ShowProgress $true -ConnectionUri https://outlook.office365.us/powershell-liveid/
   ```

   **Connect to Exchange Online PowerShell in a Microsoft 365 DoD organization**:

   ```powershell
   Connect-ExchangeOnline -Credential $UserCredential -ShowProgress $true -ConnectionUri https://webmail.apps.mil/powershell-liveid
   ```

For detailed syntax and parameter information, see [Connect-ExchangeOnline](https://docs.microsoft.com/powershell/module/exchange/connect-exchangeonline).

> [!NOTE]
> Be sure to disconnect the remote PowerShell session when you're finished. If you close the Windows PowerShell window without disconnecting the session, you could use up all the remote PowerShell sessions available to you, and you'll need to wait for the sessions to expire. To disconnect the remote PowerShell session, run the following command.

```powershell
Disconnect-ExchangeOnline
```

## How do you know this worked?

The Exchange Online cmdlets are imported into your local Windows PowerShell session and tracked by a progress bar. If you don't receive any errors, you connected successfully. A quick test is to run an Exchange Online PowerShell cmdlet, for example, **Get-Mailbox**, and see the results.

If you receive errors, check the following requirements:

- A common problem is an incorrect password. Run the three steps again and pay close attention to the user name and password you enter in Step 1.

- To help prevent denial-of-service (DoS) attacks, you're limited to three open remote PowerShell connections to your Exchange Online organization.

- The account you use to connect to must be enabled for remote PowerShell. For more information, see [Enable or disable access to Exchange Online PowerShell](disable-access-to-exchange-online-powershell.md).

- TCP port 80 traffic needs to be open between your local computer and Microsoft 365. It's probably open, but it's something to consider if your organization has a restrictive internet access policy.

- If your organization uses federated authentication, and your identity provider (IDP) and/or security token service (STS) isn't publicly available, you can't use a federated account to connect to Exchange Online PowerShell. Instead, create and use a non-federated account in Microsoft 365 to connect to Exchange Online PowerShell.
