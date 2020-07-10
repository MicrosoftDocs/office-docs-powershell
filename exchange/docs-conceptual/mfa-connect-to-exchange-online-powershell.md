---
title: "Connect to Exchange Online PowerShell using multi-factor authentication"
ms.author: chrisda
author: chrisda
manager: dansimp
ms.date:
ms.audience: Admin
ms.topic: article
ms.service: exchange-online
localization_priority: Normal
ms.assetid: 04dae4ce-34a7-49c5-bf75-11e72452e04a
search.appverid: MET150
description: "Learn how to connect to Exchange Online PowerShell by using multi-factor authentication (MFA)."
---

# Connect to Exchange Online PowerShell using multi-factor authentication

> [!NOTE]
> We recommend that you use the Exchange Online PowerShell V2 module to connect to Exchange Online PowerShell using MFA. For instructions, see [Use the Exchange Online PowerShell V2 module](exchange-online-powershell-v2.md).

If you want to use multi-factor authentication (MFA) to connect to Exchange Online PowerShell, you can't use the instructions at [Connect to Exchange Online PowerShell](connect-to-exchange-online-powershell.md) to use remote PowerShell to connect to Exchange Online. MFA requires you to install the Exchange Online Remote PowerShell Module, and use the **Connect-EXOPSSession** cmdlet to connect.

## What do you need to know before you begin?

- Estimated time to complete: 5 minutes

- You can use the following versions of Windows:

  - Windows 10

  - Windows 8.1

  - Windows Server 2019

  - Windows Server 2016

  - Windows Server 2012 or Windows Server 2012 R2

  - Windows 7 Service Pack 1 (SP1)<sup>*</sup>

  - Windows Server 2008 R2 SP1<sup>*</sup>

  <sup>\*</sup> This version of windows has reached end of support, and is now only supported when running in Azure virtual machines. To use this version of Windows, you need to install the Microsoft .NET Framework 4.5 or later and then an updated version of the Windows Management Framework: 3.0, 4.0, or 5.1 (only one). For more information, see [Install the .NET Framework](https://docs.microsoft.com/dotnet/framework/install/on-windows-7), [Windows Management Framework 3.0](https://www.microsoft.com/download/details.aspx?id=34595), [Windows Management Framework 4.0](https://www.microsoft.com/download/details.aspx?id=40855), and [Windows Management Framework 5.1](https://aka.ms/wmf5download).

- WinRM needs to allow Basic authentication (it's enabled by default). We don't send the username and password combination, but the Basic authentication header is required to transport the session's OAuth token, since the client-side WinRM implementation has no support for OAuth.

  To verify that Basic authentication is enabled for WinRM, run this command **in a Command Prompt**:
  
  > [!NOTE]
  > You must temporarily enable WinRM to run the following commands. You can enable it by running "winrm quickconfig".

  ```dos
  winrm get winrm/config/client/auth
  ```

  If you don't see the value `Basic = true`, you need to run this command to enable Basic authentication for WinRM:

  ```dos
  winrm set winrm/config/client/auth @{Basic="true"}
  ```

  If Basic authentication for WinRM is disabled, you'll get this error when you try to connect:

  > The WinRM client cannot process the request. Basic authentication is currently disabled in the client configuration. Change the client configuration and try the request again.

## Install the Exchange Online Remote PowerShell Module

> [!NOTE]
> The Exchange Online Remote PowerShell Module is not supported in PowerShell Core (macOS, Linux, or Windows Nano Server). As a workaround, you can install the module on a computer that's running a supported version of Windows (physical or virtual), and use remote desktop software to connect.

You need to do the following steps in a browser that supports ClickOnce (for example, Internet Explorer or Edge):

  **Note**: ClickOnce support is available in the Chromium-based version of Edge at <edge://flags/#edge-click-once>, and might not be enabled by default.

  1. Open the Exchange admin center (EAC) for your Exchange Online organization. For instructions, see [Exchange admin center in Exchange Online](https://docs.microsoft.com/exchange/exchange-admin-center).

  2. In the EAC, go to **Hybrid** > **Setup** and click the appropriate **Configure** button to download the Exchange Online Remote PowerShell Module for multi-factor authentication.

     ![Download the Exchange Online PowerShell Module from the Hybrid tab in the EAC](media/24645e56-8b11-4c0f-ace4-09bdb2703562.png)

  3. In the **Application Install** window that opens, click **Install**.

     ![Click Install in the Exchange Online PowerShell Module window](media/0fd389a1-a32d-4e2f-bf5f-78e9b6407d4c.png)

- Windows Remote Management (WinRM) on your computer needs to allow Basic authentication (it's enabled by default). To verify that Basic authentication is enabled, run this command **in a Command Prompt**:

- When you use the Exchange Online Remote PowerShell Module, your session will end after one hour, which can be problematic for long-running scripts or processes. To avoid this issue, use [Trusted IPs](https://docs.microsoft.com/azure/active-directory/authentication/howto-mfa-mfasettings#trusted-ips) to bypass MFA for connections from your intranet. Trusted IPs allow you to connect to Exchange Online PowerShell from your intranet using the old instructions at [Connect to Exchange Online PowerShell](connect-to-exchange-online-powershell.md). Also, if you have servers in a datacenter, be sure to add their public IP addresses to Trusted IPs as described [here](https://docs.microsoft.com/azure/active-directory/authentication/howto-mfa-mfasettings#enable-the-trusted-ips-feature-by-using-service-settings).

> [!TIP]
> Having problems? Ask for help in the Exchange forums. Visit the forums at: [Exchange Online](https://go.microsoft.com/fwlink/p/?linkId=267542) or [Exchange Online Protection](https://go.microsoft.com/fwlink/p/?linkId=285351).

## Connect to Exchange Online PowerShell by using MFA

1. On your local computer, open the **Exchange Online Remote PowerShell Module** ( **Microsoft Corporation** > **Microsoft Exchange Online Remote PowerShell Module**).

2. The command that you need to run uses the following syntax:

   ```PowerShell
   Connect-EXOPSSession [-UserPrincipalName -ConnectionUri <ConnectionUri> -AzureADAuthorizationEndPointUri <AzureADUri> -DelegatedOrganization <String>]
   ```

   - _\<UPN\>_ is your Microsoft 365 work or school account.

   - The _\<ConnectionUri\>_ and _\<AzureADUri\>_ values depend on the nature of your Microsoft 365 organization as described in the following table:

     |**Microsoft 365 offering**|**_ConnectionUri_ parameter value**|**_AzureADAuthorizationEndPointUri_ parameter value**|
     |:-----|:-----|:-----|
     |Microsoft 365|Not used|Not used|
     |Office 365 Germany|`https://outlook.office.de/PowerShell-LiveID`|`https://login.microsoftonline.de/common`|
     |Microsoft 365 GCC High|`https://outlook.office365.us/powershell-liveid`|`https://login.microsoftonline.us/common`|
     |Microsoft 365 DoD|`https://webmail.apps.mil/powershell-liveid`|`https://login.microsoftonline.us/common`|

   This example connects to Exchange Online in Microsoft 365 using the account chris@contoso.com.

   ```PowerShell
   Connect-EXOPSSession -UserPrincipalName chris@contoso.com
   ```

   This example connects to Exchange Online Germany using the account lukas@fabrikam.com.

   ```PowerShell
   Connect-EXOPSSession -UserPrincipalName lukas@fabrikam.com -ConnectionUri https://outlook.office.de/PowerShell-LiveID -AzureADAuthorizationEndPointUri https://login.microsoftonline.de/common
   ```

   This example connects to Exchange Online to manage another tenant.

   ```PowerShell
   Connect-EXOPSSession -UserPrincipalName chris@contoso.com -DelegatedOrganization fabrikam.onmicrosoft.com
   ```

3. In the sign-in window that opens, enter your password, and then click **Sign in**.

   ![Enter your password in the Exchange Online Remote PowerShell window](media/b85d80d9-1043-4c7c-8f14-d87d8d56b188.png)

   A verification code is generated and delivered based on the verification response option that's configured for your account (for example, a text message or the Azure Authenticator app on your mobile phone).

4. In the verification window that opens, enter the verification code, and then click **Sign in**.

   ![Enter your verification code in the Exchange Online Remote PowerShell window](media/d3a405ce-5364-4732-a7bb-2cc9c678da2d.png)

> [!NOTE]
> Be sure to disconnect the remote PowerShell session when you're finished. If you close the Exchange Online Remote PowerShell Module window without disconnecting the session, you could use up all the remote PowerShell sessions available to you, and you'll need to wait for the sessions to expire. To disconnect all currently open PowerShell sessions in the current window, run the following command:

```PowerShell
Get-PSSession | Remove-PSSession
```

## Single sign-on

If your organization has single sign-on (SSO) enabled and you are logged on to a computer as a user in the SSO domain, then **Connect-EXOPSSession** may fail with the following error:

> New-EXOPSSession : User 'loggedonuser@contoso.com' returned by service does not match user 'userprincipalname@contoso.com' in the request.

This error occurs because single sign-on overrides the specified user principal name (UPN). As a work-around, use Connect-EXOPSSession without -UserPrincipalName parameter or use -Credential parameter instead.

## How do you know this worked?

After Step 4, the Exchange Online cmdlets are imported into your Exchange Online Remote PowerShell Module session and tracked by a progress bar. If you don't receive any errors, you connected successfully. A quick test is to run an Exchange Online cmdlet, for example, **Get-Mailbox**, and see the results.

If you receive errors, check the following requirements:

- To help prevent denial-of-service (DoS) attacks, you're limited to three open remote PowerShell connections to your Exchange Online organization.

- The account you use to connect to Exchange Online must be enabled for remote PowerShell. For more information, see [Enable or disable access to Exchange Online PowerShell](disable-access-to-exchange-online-powershell.md).

- TCP port 80 traffic needs to be open between your local computer and Microsoft 365. It's probably open, but it's something to consider if your organization has a restrictive Internet access policy.
