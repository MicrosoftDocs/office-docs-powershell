---
title: "Basic auth - Connect to Security & Compliance PowerShell"
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
ROBOTS: NOINDEX
search.appverid: MET150
description: "Learn how to connect to Security & Compliance PowerShell."
---

# Basic auth - Connect to Security & Compliance PowerShell

> [!NOTE]
> The connection instructions in this article [will be deprecated starting on October 1, 2022](https://techcommunity.microsoft.com/t5/exchange-team-blog/basic-authentication-deprecation-in-exchange-online-september/ba-p/3609437) due to the security concerns around Basic authentication. Instead, you should use the [Exchange Online PowerShell module](exchange-online-powershell-v2.md) to connect to Security & Compliance PowerShell. If you're using PowerShell for administration, see [Connect to Security & Compliance PowerShell](connect-to-scc-powershell.md). If you're using PowerShell for automation, see [App-only authentication for unattended scripts](app-only-auth-powershell-v2.md).

Security & Compliance PowerShell allows you to manage your Microsoft 365 Defender portal and Microsoft Purview compliance portal settings from the command line. You use Windows PowerShell on your local computer to create a remote PowerShell session to Security & Compliance PowerShell. It's a simple three-step process where you enter your Microsoft 365 credentials, provide the required connection settings, and then import the Security & Compliance PowerShell cmdlets into your local Windows PowerShell session so that you can use them.

> [!NOTE]
> The procedures in this article won't work if:
>
> - Your account uses multi-factor authentication (MFA).
> - Your organization uses federated authentication.
> - A location condition in an Azure Active Directory conditional access policy restricts your access to trusted IPs.
>
> In these scenarios, you need to download and use the Exchange Online PowerShell module to connect to Security & Compliance PowerShell. For instructions, see [Connect to Security & Compliance PowerShell](connect-to-scc-powershell.md).
>
> Some features in the Microsoft 365 Defender portal and Microsoft Purview compliance portal (for example, mailbox archiving) link to existing functionality in Exchange Online. To use PowerShell with these features, you need to connect to Exchange Online PowerShell instead of Security & Compliance PowerShell. For instructions, see [Connect to Exchange Online PowerShell](connect-to-exchange-online-powershell.md).

## What do you need to know before you begin?

- Estimated time to complete: 5 minutes

- After you connect, the cmdlets and parameters that you have or don't have access to is controlled by role-based access control (RBAC). For more information, see [Permissions in the Microsoft 365 Defender portal](/microsoft-365/security/office-365-security/permissions-microsoft-365-security-center) and [Permissions in the Microsoft Purview compliance portal](/microsoft-365/compliance/microsoft-365-compliance-center-permissions).

- You can use the following versions of Windows:

  - Windows 10
  - Windows 8.1
  - Windows Server 2019
  - Windows Server 2016
  - Windows Server 2012 or Windows Server 2012 R2
  - Windows 7 Service Pack 1 (SP1)<sup>*</sup>
  - Windows Server 2008 R2 SP1<sup>*</sup>

  <sup>\*</sup> This version of Windows has reached end of support, and is now supported only in Azure virtual machines. To use this version of Windows, you need to install the Microsoft .NET Framework 4.5 or later and then an updated version of the Windows Management Framework: 3.0, 4.0, or 5.1 (only one). For more information, see [Install the .NET Framework](/dotnet/framework/install/on-windows-7), [Windows Management Framework 3.0](https://aka.ms/wmf3download), [Windows Management Framework 4.0](https://aka.ms/wmf4download), and [Windows Management Framework 5.1](https://aka.ms/wmf5download).

- Windows PowerShell needs to be configured to run scripts, and by default, it isn't. You'll get the following error when you try to connect:

  > Files cannot be loaded because running scripts is disabled on this system. Provide a valid certificate with which to sign the files.

  To require all PowerShell scripts that you download from the internet are signed by a trusted publisher, run the following command in an elevated Windows PowerShell window (a Windows PowerShell window you open by selecting **Run as administrator**):

  ```powershell
  Set-ExecutionPolicy RemoteSigned
  ```

  For more information about execution policies, see [About Execution Policies](/powershell/module/microsoft.powershell.core/about/about_execution_policies).

- WinRM needs to allow Basic authentication (it's enabled by default). We don't send the username and password combination, but the Basic authentication header is required to send the session's OAuth token, since the client-side WinRM implementation has no support for OAuth.

  **Note** The following commands require that WinRM is enabled. To enable WinRM, run the following command:  `winrm quickconfig`.

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

## Connect to Security & Compliance PowerShell

1. On your local computer, open Windows PowerShell and run the following command:

   ```powershell
   $UserCredential = Get-Credential
   ```

   In the **Windows PowerShell Credential Request** dialog box that appears, type your work or school account and password, and then click **OK**.

2. Run the following command:

   ```powershell
   $Session = New-PSSession -ConfigurationName Microsoft.Exchange -ConnectionUri https://ps.compliance.protection.outlook.com/powershell-liveid/ -Credential $UserCredential -Authentication Basic -AllowRedirection
   ```

   **Notes**:

   - For Office 365 Germany, use the _ConnectionUri_ value: `https://ps.compliance.protection.outlook.de/powershell-liveid/`.
   - For Microsoft 365 GCC High, use the _ConnectionUri_ value: `https://ps.compliance.protection.office365.us/powershell-liveid/`.
   - For Microsoft 365 DoD, use the _ConnectionUri_ value: `https://l5.ps.compliance.protection.office365.us/powershell-liveid/`.

3. Run the following command:

   ```powershell
   Import-PSSession $Session -DisableNameChecking
   ```

   If you want to connect to Security & Compliance PowerShell in the same window as an active Exchange Online PowerShell connection, you need to add the Prefix parameter and value (for example, `-Prefix "CC"`) to the end of this command to prevent cmdlet name collisions (both environments share some cmdlets with the same names).

> [!NOTE]
> Be sure to disconnect the remote PowerShell session when you're finished. If you close the Windows PowerShell window without disconnecting the session, you could use up all the remote PowerShell sessions available to you, and you'll need to wait for the sessions to expire. To disconnect the remote PowerShell session, run the following command:

```powershell
Remove-PSSession $Session
```

## How do you know this worked?

After Step 3, the Security & Compliance PowerShell cmdlets are imported into your local Windows PowerShell session as tracked by a progress bar. If you don't receive any errors, you connected successfully. A quick test is to run a Security & Compliance PowerShell cmdlet, for example, **Get-RetentionCompliancePolicy**, and see the results.

If you receive errors, check the following requirements:

- A common problem is an incorrect password. Run the three steps again and pay close attention to the user name and password you enter in Step 1.

- To help prevent denial-of-service (DoS) attacks, you're limited to five open remote PowerShell connections to Security & Compliance PowerShell.

- TCP port 80 traffic needs to be open between your local computer and Microsoft 365. It's probably open, but it's something to consider if your organization has a restrictive Internet access policy.

- The **New-PSSession** command (Step 2) might fail to connect if your client IP address changes during the connection request. This can happen if your organization uses a source network address translation (SNAT) pool that contains multiple IP addresses. The connection error looks like this:

  > The request for the Windows Remote Shell with ShellId \<ID\> failed because the shell was not found on the server. Possible causes are: the specified ShellId is incorrect or the shell no longer exists on the server. Provide the correct ShellId or create a new shell and retry the operation.

  To fix the issue, use an SNAT pool that contains a single IP address, or force the use of a specific IP address for connections to the Security & Compliance PowerShell endpoint.

## See also

The cmdlets that you use in this article are Windows PowerShell cmdlets. For more information about these cmdlets, see the following articles.

- [Get-Credential](/powershell/module/microsoft.powershell.security/get-credential)
- [New-PSSession](/powershell/module/microsoft.powershell.core/new-pssession)
- [Import-PSSession](/powershell/module/microsoft.powershell.utility/import-pssession)
- [Remove-PSSession](/powershell/module/microsoft.powershell.core/remove-pssession)
- [Set-ExecutionPolicy](/powershell/module/microsoft.powershell.security/set-executionpolicy)
