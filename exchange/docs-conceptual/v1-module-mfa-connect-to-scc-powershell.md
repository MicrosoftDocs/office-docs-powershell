---
title: "V1 module - Connect to Security & Compliance PowerShell using MFA"
ms.author: chrisda
author: chrisda
manager: dansimp
ms.date:
ms.audience: Admin
audience: Admin
ms.topic: article
ms.service: exchange-powershell
ms.localizationpriority: medium
ms.assetid:
search.appverid: MET150
ROBOTS: NOINDEX
description: "Admins can learn how to use the older Exchange Online Remote PowerShell Module to connect to Security & Compliance PowerShell for multi-factor authentication (MFA) or federated authentication."
---

# V1 module - Connect to Security & Compliance PowerShell using MFA

> [!NOTE]
> Support for the older Exchange Online Remote PowerShell Module (the V1 module) that's described in this article will eventually end for Security & Compliance PowerShell. For more information, see [Understanding the Different Versions of Exchange Online PowerShell Modules and Basic Auth](https://techcommunity.microsoft.com/t5/exchange-team-blog/understanding-the-different-versions-of-exchange-online/ba-p/3394487).
>
> We recommend using the Exchange Online PowerShell module, which only uses modern authentication and supports accounts with or without MFA. For installation and connection instructions, see [Install and maintain the Exchange Online PowerShell module](exchange-online-powershell-v2.md#install-and-maintain-the-exchange-online-powershell-module) and [Connect to Security & Compliance PowerShell](connect-to-scc-powershell.md).

If your account uses multi-factor authentication (MFA) or federated authentication, you need to install the Exchange Online Remote PowerShell Module, and use the **Connect-IPPSSession** cmdlet to connect to Security & Compliance PowerShell.

**Notes**:

- Delegated Access Permission (DAP) partners can't use the procedures in this article to connect to their customer tenant organizations in Security & Compliance PowerShell. MFA and the Exchange Online Remote PowerShell Module don't work with delegated authentication.

- The Exchange Online Remote PowerShell Module is not supported in PowerShell Core (macOS, Linux, or Windows Nano Server). As a workaround, you can install the module on a computer that's running a supported version of Windows (physical or virtual), and use remote desktop software to connect.

## What do you need to know before you begin?

- Estimated time to complete: 5 minutes

- After you connect, the cmdlets and parameters that you have or don't have access to is controlled by role-based access control (RBAC). For more information, see After you connect, the cmdlets and parameters that you have or don't have access to is controlled by role-based access control (RBAC). For more information, see [Permissions in the Microsoft 365 Defender portal](/microsoft-365/security/office-365-security/mdo-portal-permissions) and [Permissions in the Microsoft Purview compliance portal](/microsoft-365/compliance/microsoft-365-compliance-center-permissions).

- You can use the following versions of Windows:

  - Windows 10
  - Windows 8.1
  - Windows Server 2019
  - Windows Server 2016
  - Windows Server 2012 or Windows Server 2012 R2
  - Windows 7 Service Pack 1 (SP1)<sup>*</sup>
  - Windows Server 2008 R2 SP1<sup>*</sup>

  <sup>\*</sup> This version of Windows has reached end of support, and is now supported only in Azure virtual machines. To use this version of Windows, you need to install the Microsoft .NET Framework 4.5 or later and then an updated version of the Windows Management Framework: 3.0, 4.0, or 5.1 (only one). For more information, see [Install the .NET Framework](/dotnet/framework/install/on-windows-7), [Windows Management Framework 3.0](https://aka.ms/wmf3download), [Windows Management Framework 4.0](https://aka.ms/wmf4download), and [Windows Management Framework 5.1](https://aka.ms/wmf5download).

- WinRM needs to allow Basic authentication (it's enabled by default). We don't send the username and password combination, but the Basic authentication header is required to send the session's OAuth token, since the client-side WinRM implementation has no support for OAuth.

  **Note**: The following commands require that WinRM is enabled. To enable WinRM, run the following command:  `winrm quickconfig`.

  To verify that Basic authentication is enabled for WinRM, run this command **in a Command Prompt** (not in Windows PowerShell):

  ```dos
  winrm get winrm/config/client/auth
  ```

  If you don't see the value `Basic = true`, you need to run this command **in a Command Prompt** (not in Windows PowerShell) to enable Basic authentication for WinRM:

  ```dos
  winrm set winrm/config/client/auth @{Basic="true"}
  ```

  **Note**: If you'd rather run the command in Windows PowerShell, enclose this part of the command in quotation marks: `'@{Basic="true"}'`.

  If Basic authentication for WinRM is disabled, you'll get this error when you try to connect:

  > The WinRM client cannot process the request. Basic authentication is currently disabled in the client configuration. Change the client configuration and try the request again.

## Install the Exchange Online Remote PowerShell Module

> [!NOTE]
>
> - The Exchange Online Remote PowerShell Module is not supported in PowerShell Core (macOS, Linux, or Windows Nano Server). As a workaround, you can install the module on a computer that's running a supported version of Windows (physical or virtual), and use remote desktop software to connect.
>
> - If your installed version of the Exchange Online Remote PowerShell Module doesn't have the **Connect-IPPSSession** cmdlet, you need to install the latest version of the module.

You need to do the following steps in a browser that supports ClickOnce (for example, Internet Explorer or Edge):

**Note**: ClickOnce support is available in the Chromium-based version of Edge at `edge://flags/#edge-click-once`, and might not be enabled by default.

1. Open the Exchange admin center (EAC). For instructions, see [Exchange admin center in Exchange Online](/exchange/exchange-admin-center).

2. In the EAC, go to **Hybrid** > **Setup** and click the appropriate **Configure** button to download the Exchange Online Remote PowerShell Module for multi-factor authentication.

   ![Download the Exchange Online PowerShell Module from the Hybrid tab in the EAC.](media/24645e56-8b11-4c0f-ace4-09bdb2703562.png)

3. In the **Application Install** window that opens, click **Install**.

   ![Click Install in the Exchange Online PowerShell Module window.](media/0fd389a1-a32d-4e2f-bf5f-78e9b6407d4c.png)

## Connect to Security & Compliance PowerShell by using MFA or federated authentication

1. On your local computer, open the **Exchange Online Remote PowerShell Module** (**Microsoft Corporation** > **Microsoft Exchange Online Remote PowerShell Module**).

2. The command that you need to run uses the following syntax:

   ```powershell
   Connect-IPPSSession -UserPrincipalName <UPN> [-ConnectionUri <ConnectionUri> -AzureADAuthorizationEndPointUri <AzureADUri>]
   ```

   - _\<UPN\>_ is your Microsoft 365 work or school account.

   - The _\<ConnectionUri\>_ and _\<AzureADUri\>_ values depend on the location of your Microsoft 365 organization as described in the following table:

     <br>

     ****

     |Microsoft 365 offering|_ConnectionUri_ parameter value|_AzureADAuthorizationEndPointUri_ parameter value|
     |---|---|---|
     |Microsoft 365|Not used |Not used|
     |Office 365 Germany|`https://ps.compliance.protection.outlook.de/PowerShell-LiveID`|`https://login.microsoftonline.de/common`|
     |Microsoft 365 GCC High|`https://ps.compliance.protection.office365.us/powershell-liveid/`|`https://login.microsoftonline.us/common`|
     |Microsoft 365 DoD|`https://l5.ps.compliance.protection.office365.us/powershell-liveid/`|`https://login.microsoftonline.us/common`|
     |

   This example connects to Security & Compliance PowerShell in Microsoft 365 using the account chris@contoso.com.

   ```powershell
   Connect-IPPSSession -UserPrincipalName chris@contoso.com
   ```

   This example connects to Security & Compliance PowerShell in Office 365 Germany using the account lukas@fabrikam.com.

   ```powershell
   Connect-IPPSSession -UserPrincipalName lukas@fabrikam.com -ConnectionUri https://ps.compliance.protection.outlook.de/PowerShell-LiveID -AzureADAuthorizationEndPointUri https://login.microsoftonline.de/common
   ```

3. In the sign-in window that opens, enter your password, and then click **Sign in**.

   ![Enter your password in the Exchange Online Remote PowerShell window.](media/b85d80d9-1043-4c7c-8f14-d87d8d56b188.png)

   For MFA, a verification code is generated and delivered based on the verification response option that's configured for your account (for example, a text message or the Azure Authenticator app on your mobile phone).

4. **(MFA only)**: In the verification window that opens, enter the verification code, and then click **Sign in**.

   ![Enter your verification code in the Exchange Online Remote PowerShell window.](media/d3a405ce-5364-4732-a7bb-2cc9c678da2d.png)

5. **(Optional)**: If you want to connect to an Exchange Online PowerShell module session in the same window, you need to run

   ```powershell
   $EXOSession=New-ExoPSSession -UserPrincipalName <UPN> [-ConnectionUri <ConnectionUri> -AzureADAuthorizationEndPointUri <AzureADUri>]
   ```

   and then import the Exchange Online session into the current one using an specific prefix

   ```powershell
   Import-PSSession $EXOSession -Prefix EXO
   ```

## How do you know this worked?

After you sign in, the Security & Compliance PowerShell cmdlets are imported into your Exchange Online Remote PowerShell Module session and tracked by a progress bar. If you don't receive any errors, you connected successfully. A quick test is to run an Security & Compliance PowerShell cmdlet, for example, **Get-RetentionCompliancePolicy**, and see the results.

If you receive errors, check the following requirements:

- To help prevent denial-of-service (DoS) attacks, you're limited to five open remote PowerShell connections to Security & Compliance PowerShell.

- The account you use to connect to Security & Compliance PowerShell must be enabled for remote PowerShell. For more information, see [Enable or disable access to Exchange Online PowerShell](disable-access-to-exchange-online-powershell.md).

- TCP port 80 traffic needs to be open between your local computer and Microsoft 365. It's probably open, but it's something to consider if your organization has a restrictive Internet access policy.

- The **Connect-IPPSSession** command (Step 2) might fail to connect if your client IP address changes during the connection request. This can happen if your organization uses a source network address translation (SNAT) pool that contains multiple IP addresses. The connection error looks like this:

  `The request for the Windows Remote Shell with ShellId <ID> failed because the shell was not found on the server. Possible causes are: the specified ShellId is incorrect or the shell no longer exists on the server. Provide the correct ShellId or create a new shell and retry the operation.`

  To fix the issue, use an SNAT pool that contains a single IP address, or force the use of a specific IP address for connections to the Security & Compliance PowerShell endpoint.
