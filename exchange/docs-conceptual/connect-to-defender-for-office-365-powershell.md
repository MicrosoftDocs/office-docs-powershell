---
title: Connect to Microsoft Defender for Office 365 PowerShell
ms.date: 07/31/2026
ms.audience: Admin
ms.topic: how-to
ms.reviewer:
ms.localizationpriority: high
ai-usage: ai-assisted
ms.collection: Strat_EX_Admin
ms.custom: msecd-doc-authoring-1015
ms.assetid:
description: "Learn how to connect to Microsoft Defender for Office 365 PowerShell to manage Defender portal features by using Defender Unified RBAC permissions."
#customer intent: As a security admin, I want to connect to Microsoft Defender for Office 365 PowerShell so that I can manage features by using Defender Unified RBAC permissions.
---

# Connect to Microsoft Defender for Office 365 PowerShell

[Microsoft Defender for Office 365 PowerShell](defender-office-365-powershell-overview.md) provides a security-focused subset of Exchange Online PowerShell cmdlets for customers who use [Defender Unified role-based access control (RBAC)](/defender-xdr/manage-rbac) permissions in the Microsoft Defender portal. This article describes the prerequisites and connection methods and explains how to verify and disconnect the connection.

## Prerequisites

- The **Connect-DefenderForOffice365** cmdlet is available in version 3.10.2-Preview1 or later of the Exchange Online PowerShell module. For installation instructions and module prerequisites, see [About the Exchange Online PowerShell module](exchange-online-powershell-v2.md).

- Defender for Office 365 PowerShell is available in Microsoft 365, Microsoft 365 GCC, Microsoft 365 GCC High, and Microsoft 365 DoD.

- For user connections, your available cmdlets are based on your effective permissions in Defender Unified RBAC.

- App-only connections use Microsoft Entra role assignments. Unified RBAC role assignments for service principals aren't currently supported.

## Choose the correct PowerShell connection

- Use Defender for Office 365 PowerShell instead of [Exchange Online PowerShell](connect-to-exchange-online-powershell.md) to manage features in the Defender portal when the **Email & collaboration** workload is active in [Microsoft Defender Unified RBAC](/defender-xdr/manage-rbac).

- Use [Security & Compliance PowerShell](connect-to-scc-powershell.md) for Microsoft Purview compliance administration.

> [!IMPORTANT]
> If you open connections to more than one PowerShell environment in the same PowerShell window, cmdlets from the most recent connection take precedence. To avoid running a cmdlet in the wrong authorization context, use separate PowerShell windows or the _Prefix_ parameter.

## Step 1: Load the Exchange Online PowerShell module

> [!NOTE]
> If the module is already installed, you can typically skip this step and run **Connect-DefenderForOffice365** without manually loading the module first.

After you [install the module](exchange-online-powershell-v2.md#install-and-update-the-exchange-online-powershell-module), import it to make the connection cmdlets available:

```powershell
Import-Module ExchangeOnlineManagement
```

## Step 2: Connect and authenticate

For detailed syntax and parameter information, see [Connect-DefenderForOffice365](/powershell/module/exchangepowershell/connect-defenderforoffice365).

### Connect with an interactive sign-in prompt

- This example connects to Defender for Office 365 PowerShell in a Microsoft 365 or Microsoft 365 GCC organization:

  ```powershell
  Connect-DefenderForOffice365 -UserPrincipalName admin@contoso.com
  ```

- This example connects in a Microsoft 365 GCC High organization:

  ```powershell
  Connect-DefenderForOffice365 -UserPrincipalName admin@contoso.us -ConnectionUri https://ps.security.protection.office365.us/PowerShell-LiveId -AzureADAuthorizationEndpointUri https://login.microsoftonline.us/organizations
  ```

- This example connects in a Microsoft 365 DoD organization:

  ```powershell
  Connect-DefenderForOffice365 -UserPrincipalName admin@adatum.mil -ConnectionUri https://ps.security.protection.office365.us/PowerShell-LiveId -AzureADAuthorizationEndpointUri https://login.microsoftonline.us/organizations
  ```

In the sign-in window that opens, enter your password, and then select **Sign in**. If the account uses multifactor authentication (MFA), complete the verification request.

### Connect by using app-only authentication

The following command connects by using a certificate thumbprint:

```powershell
Connect-DefenderForOffice365 -AppId 36ee4c6c-0812-40a2-b820-b22ebd02bce3 -CertificateThumbprint 012THISISADEMOTHUMBPRINT -Organization contoso.onmicrosoft.com
```

For the configuration steps and other certificate methods, see [App-only authentication for unattended scripts](app-only-auth-powershell-v2.md).

> [!NOTE]
> App-only connections use Microsoft Entra role assignments. Unified RBAC role assignments for service principals aren't currently supported.

### Connect to a customer organization

The following command connects to a customer organization by using delegated administration:

```powershell
Connect-DefenderForOffice365 -UserPrincipalName admin@contoso.com -DelegatedOrganization adatum.onmicrosoft.com -AzureADAuthorizationEndpointUri https://login.microsoftonline.com/adatum.onmicrosoft.com
```

For more information about delegated administration, see [Introduction to granular delegated admin privileges (GDAP)](/partner-center/gdap-introduction).

## How do you know you connected successfully?

If you don't receive any errors, you connected successfully. Run the following command to identify Microsoft Defender for Office 365 connections:

```powershell
Get-ConnectionInformation | Where-Object {$_.IsMdoSecuritySession -eq $true}
```

You can also run a Microsoft Defender for Office 365 cmdlet available to your assigned Unified RBAC permissions and review the results.

## Step 3: Disconnect when you're finished

To disconnect the Defender for Office 365 PowerShell session, run the following command:

```powershell
Disconnect-ExchangeOnline
```

To silently disconnect without a confirmation prompt, run the following command:

```powershell
Disconnect-ExchangeOnline -Confirm:$false
```

## Related content

- [Microsoft Defender for Office 365 PowerShell overview](defender-office-365-powershell-overview.md)
- [Connect to Exchange Online PowerShell](connect-to-exchange-online-powershell.md)
- [Connect to Security & Compliance PowerShell](connect-to-scc-powershell.md)
- [About the Exchange Online PowerShell module](exchange-online-powershell-v2.md)
- [Microsoft Defender Unified RBAC](/defender-xdr/manage-rbac)
