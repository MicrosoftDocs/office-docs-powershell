---
title: "Basic auth - Connect to Exchange Online Protection PowerShell"
ms.author: chrisda
author: chrisda
manager: dansimp
ms.date:
ms.audience: Admin
ms.topic: article
ms.service: eop
localization_priority: Normal
ms.assetid:
ROBOTS: NOINDEX
description: "Use remote PowerShell to connect to a standalone Exchange Online Protection (EOP) organization without mailboxes in Exchange Online."
---

# Bssic auth - Connect to Exchange Online Protection PowerShell

> [!NOTE]
> The connection instructions in this topic [will eventually be deprecated](https://techcommunity.microsoft.com/t5/exchange-team-blog/basic-authentication-and-exchange-online-july-update/ba-p/1530163) due to the security concerns around Basic authentication. Instead, you should use the Exchange Online PowerShell V2 module (the EXO V2 module) to connect to Exchange Online Protection PowerShell. For instructions, see [Connect to Exchange Online Protection PowerShell](connect-to-exchange-online-protection-powershell.md).

In standalone Exchange Online Protection (EOP) organizations without Exchange Online mailboxes, standalone EOP PowerShell allows you to manage your EOP organization from the command line. You use Windows PowerShell on your local computer to create a remote PowerShell session to EOP. It's a simple three-step process where you enter your Microsoft 365 credentials, provide the required connection settings, and then import the EOP cmdlets into your local Windows PowerShell session so that you can use them.

The following introductory video shows you how to connect to and use Exchange Online Protection PowerShell:

[Use Exchange Online Protection PowerShell](https://videoplayercdn.osi.office.net/hub/?csid=ux-cms-en-us-msoffice&uuid=9cb28006-c2cb-45b6-b72e-eeed8767dee7&AutoPlayVideo=false)

**Note:** This video applies to Exchange Online PowerShell and EOP PowerShell. When you connect to your organization, be sure to specify the correct URL (*ConnectionUri* value). The required URL is different for Exchange Online and standalone EOP organizations.

## What do you need to know before you begin?

- Estimated time to complete: 5 minutes

- **The procedures in this topic are only for EOP organizations that don't have Exchange Online mailboxes** (for example, you have a standalone EOP subscription that protects your on-premises email environment). If you have a Microsoft 365 subscription includes Exchange Online mailboxes, you can't connect to Exchange Online Protection PowerShell. The same features are available in [Exchange Online PowerShell](exchange-online-powershell.md).

- You can use the following versions of Windows:

  - Windows 10
  - Windows 8.1
  - Windows Server 2019
  - Windows Server 2016
  - Windows Server 2012 or Windows Server 2012 R2
  - Windows 7 Service Pack 1 (SP1)<sup>*</sup>
  - Windows Server 2008 R2 SP1<sup>*</sup>

  <sup>\*</sup> This version of Windows has reached end of support, and is now only supported when running in Azure virtual machines. To use this version of Windows, you need to install the Microsoft .NET Framework 4.5 or later and then an updated version of the Windows Management Framework: 3.0, 4.0, or 5.1 (only one). For more information, see [Install the .NET Framework](https://docs.microsoft.com/dotnet/framework/install/on-windows-7), [Windows Management Framework 3.0](https://www.microsoft.com/download/details.aspx?id=34595), [Windows Management Framework 4.0](https://www.microsoft.com/download/details.aspx?id=40855), and [Windows Management Framework 5.1](https://aka.ms/wmf5download).

- Windows PowerShell needs to be configured to run scripts, and by default, it isn't. You'll get the following error when you try to connect:

  > Files cannot be loaded because running scripts is disabled on this system. Provide a valid certificate with which to sign the files.

  To require all PowerShell scripts that you download from the internet are signed by a trusted publisher, run the following command in an elevated Windows PowerShell window (a Windows PowerShell window you open by selecting **Run as administrator**):

  ```powershell
  Set-ExecutionPolicy RemoteSigned
  ```

  For more information about execution policies, see [About Execution Policies](https://docs.microsoft.com/powershell/module/microsoft.powershell.core/about/about_execution_policies).

- WinRM needs to allow Basic authentication (it's enabled by default). We don't send the username and password combination, but the Basic authentication header is required to send the session's OAuth token, since the client-side WinRM implementation has no support for OAuth.

  **Note**: You must temporarily enable WinRM to run the following commands. You can enable it by running the command: `winrm quickconfig`.

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

> [!TIP]
> Having problems? Ask for help in the [Exchange Online Protection](https://go.microsoft.com/fwlink/p/?linkId=285351) forum.

## Connect to Exchange Online Protection

1. On your local computer, open Windows PowerShell and run the following command:

    ```powershell
    $UserCredential = Get-Credential
    ```

    In the **Windows PowerShell Credential Request** dialog box, type your work or school account and password, and then click **OK**.

2. Run the following command:

    ```powershell
    $Session = New-PSSession -ConfigurationName Microsoft.Exchange -ConnectionUri https://ps.protection.outlook.com/powershell-liveid/ -Credential $UserCredential -Authentication Basic -AllowRedirection
    ```

    **Notes**:

   - For Office 365 Germany, use the _ConnectionUri_ value: `https://ps.protection.outlook.de/powershell-liveid/`

   - For on-premises Exchange organization with Exchange Enterprise CAL with Services licenses, use the _ConnectionUri_ value: `https://outlook.office365.com/powershell-liveid/`

3. Run the following command:

   ```powershell
   Import-PSSession $Session -DisableNameChecking
   ```

   > [!NOTE]
   > Be sure to disconnect the remote PowerShell session when you're finished. If you close the Windows PowerShell window without disconnecting the session, you could use up all the remote PowerShell sessions available to you, and you'll need to wait for the sessions to expire. To disconnect the remote PowerShell session, run the following command:

   ```powershell
   Remove-PSSession $Session
   ```

## How do you know this worked?

After Step 3, the Exchange Online Protection cmdlets are imported into your local Windows PowerShell session and tracked by a progress bar. If you don't receive any errors, you connected successfully. A quick test is to run an Exchange Online Protection cmdlet, for example, **Get-TransportRule**, and see the results.

If you receive errors, check the following requirements:

- A common problem is an incorrect password. Run the three steps again and pay close attention to the user name and password you enter in Step 1.

- To help prevent denial-of-service (DoS) attacks, you're limited to three open remote PowerShell connections to your Exchange Online Protection organization.

- TCP port 80 traffic needs to be open between your local computer and Microsoft 365. It's probably open, but it's something to consider if your organization has a restrictive Internet access policy.

- The account you use to connect to Exchange Online Protection PowerShell must be represented as a [mail user in EOP](https://docs.microsoft.com/microsoft-365/security/office-365-security/manage-mail-users-in-eop) (created manually or by directory synchronization). If the account is not visible in the Exchange admin center (EAC) as a mail user at **Recipients** \> **Contacts**, you'll receive the following error when you try to connect:

  > Import-PSSession : Running the Get-Command command in a remote session reported the following error: Processing data for a remote command failed with the following error message: The request for the Windows Remote Shell with ShellId <GUID> failed because the shell was not found on the server. Possible causes are: the specified ShellId is incorrect or the shell no longer exists on the server. Provide the correct ShellId or create a new shell and retry the operation.

- The **New-PSSession** command (Step 2) might fail to connect if your client IP address changes during the connection request. This can happen if your organization uses a source network address translation (SNAT) pool that contains multiple IP addresses. The connection error looks like this:

  > The request for the Windows Remote Shell with ShellId <ID> failed because the shell was not found on the server. Possible causes are: the specified ShellId is incorrect or the shell no longer exists on the server. Provide the correct ShellId or create a new shell and retry the operation.

  To fix the issue, use an SNAT pool that contains a single IP address, or force the use of a specific IP address for connections to the Exchange Online Protection PowerShell endpoint.

## See also

The cmdlets that you use in this topic are Windows PowerShell cmdlets. For more information about these cmdlets, see the following topics.

- [Get-Credential](https://docs.microsoft.com/powershell/module/microsoft.powershell.security/get-credential)
- [New-PSSession](https://docs.microsoft.com/powershell/module/microsoft.powershell.core/new-pssession)
- [Import-PSSession](https://docs.microsoft.com/powershell/module/microsoft.powershell.utility/import-pssession)
- [Remove-PSSession](https://docs.microsoft.com/powershell/module/microsoft.powershell.core/remove-pssession)
- [Set-ExecutionPolicy](https://docs.microsoft.com/powershell/module/microsoft.powershell.security/set-executionpolicy)
