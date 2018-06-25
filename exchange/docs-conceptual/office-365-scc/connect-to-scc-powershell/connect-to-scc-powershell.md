---
title: "Connect to Office 365 Security &amp; Compliance Center PowerShell"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 5/9/2018
ms.audience: Admin
ms.topic: article
ms.service: o365-security-and-compliance
localization_priority: Normal
ms.assetid: 45a5242d-95b7-4a6a-9794-095bb6d8d9d0
description: "Learn how to connect to Security &amp; Compliance Center PowerShell."
---

# Connect to Office 365 Security &amp; Compliance Center PowerShell
Office 365 Security &amp; Compliance Center PowerShell allows you to manage your Office 365 Security &amp; Compliance Center settings from the command line. You use Windows PowerShell on your local computer to create a remote PowerShell session to the Security &amp; Compliance Center. It's a simple three-step process where you enter your Office 365 credentials, provide the required connection settings, and then import the Security &amp; Compliance Center cmdlets into your local Windows PowerShell session so that you can use them.
  
> [!NOTE]
> If you want to use multi-factor authentication (MFA) to connect to Security &amp; Compliance Center PowerShell, or if your organization uses federated authentication, you need to download and use the Exchange Online Remote PowerShell Module. For more information, see [Connect to Office 365 Security &amp; Compliance Center PowerShell using multi-factor authentication](mfa-connect-to-scc-powershell.md). For some features (for example, mailbox archiving), the Security &amp; Compliance Center links to existing functionality in the Exchange admin center (EAC). To use PowerShell with these features, you need to connect to Exchange Online instead of the Security &amp; Compliance Center. For more information, see [Connect to Exchange Online PowerShell](../../exchange-online/connect-to-exchange-online-powershell/connect-to-exchange-online-powershell.md). 
  
For more information about the Security &amp; Compliance Center, see [Office 365 Security &amp; Compliance Center](https://go.microsoft.com/fwlink/p/?LinkId=627054).
  
## What do you need to know before you begin?

- Estimated time to complete: 5 minutes
    
- Office 365 global admins have access to the Security &amp; Compliance Center, but everyone else needs to have their access configured for them. For details, see [Give users access to the Office 365 Security &amp; Compliance Center](https://go.microsoft.com/fwlink/p/?LinkId=627057).
    
- You can use the following versions of Windows:
    
  - Windows 10
    
  - Windows 8.1
    
  - Windows Server 2016
    
  - Windows Server 2012 or Windows Server 2012 R2
    
  - Windows 7 Service Pack 1 (SP1)\*
    
  - Windows Server 2008 R2 SP1\*
    
    \* You need to install the Microsoft.NET Framework 4.5 or later and then either the Windows Management Framework 3.0 or the Windows Management Framework 4.0. For more information, see [Installing the .NET Framework](https://go.microsoft.com/fwlink/p/?LinkId=257868) and [Windows Management Framework 3.0](https://go.microsoft.com/fwlink/p/?LinkId=272757) or [Windows Management Framework 4.0](https://go.microsoft.com/fwlink/p/?LinkId=391344).
    
- Windows PowerShell needs to be configured to run scripts, and by default, it isn't. You get the following error when you try to connect:
    
     `Files cannot be loaded because running scripts is disabled on this system. Provide a valid certificate with which to sign the files.`
    
    To enable Windows PowerShell to run signed scripts, run the following command in an elevated Windows PowerShell window (a Windows PowerShell window you open by selecting **Run as administrator**):
    
  ```
  Set-ExecutionPolicy RemoteSigned
  ```

    You need to configure this setting only once on your computer, not every time you connect.
    
## Connect to the Security &amp; Compliance Center

1. On your local computer, open Windows PowerShell and run the following command:
    
    ```
    $UserCredential = Get-Credential
    ```

    In the **Windows PowerShell Credential Request** dialog box that appears, type your work or school account and password, and then click **OK**.
    
2. Run the following command:
    
    ```
    $Session = New-PSSession -ConfigurationName Microsoft.Exchange -ConnectionUri https://ps.compliance.protection.outlook.com/powershell-liveid/ -Credential $UserCredential -Authentication Basic -AllowRedirection
    ```

    **Notes**:
    - For Office 365 Germany, use the _ConnectionUri_ value: `https://ps.compliance.protection.outlook.de/powershell-liveid/`
    
    - If you want to connect to Security & Compliance Center PowerShell in the same window as an active Exchange Online PowerShell connection, you need to add `-Prefix "CC"` to the end of this command to prevent cmdlet name collisions (both environments share some cmdlets with the same names).
    
3. Run the following command:
    
    ```
    Import-PSSession $Session
    ```

> [!NOTE]
> Be sure to disconnect the remote PowerShell session when you're finished. If you close the Windows PowerShell window without disconnecting the session, you could use up all the remote PowerShell sessions available to you, and you'll need to wait for the sessions to expire. To disconnect the remote PowerShell session, run the following command. 
  
  ```
  Remove-PSSession $Session
  ```

## How do you know this worked?

After Step 3, the Security &amp; Compliance Center cmdlets are imported into your local Windows PowerShell session as tracked by a progress bar. If you don't receive any errors, you connected successfully. A quick test is to run a Security &amp; Compliance Center cmdlet, for example, **Get-RetentionCompliancePolicy**, and see the results.
  
If you receive errors, check the following requirements:
  
- A common problem is an incorrect password. Run the three steps again and pay close attention to the user name and password you enter in Step 1.
    
- Verify that your account has permission to access the Security &amp; Compliance Center. For details, see [Give users access to the Office 365 Security &amp; Compliance Center](https://go.microsoft.com/fwlink/p/?LinkId=627057).
    
- To help prevent denial-of-service (DoS) attacks, you're limited to three open remote PowerShell connections to the Security &amp; Compliance Center.
    
- TCP port 80 traffic needs to be open between your local computer and Office 365. It's probably open, but it's something to consider if your organization has a restrictive Internet access policy.

- The **New-PSSession** command (Step 2) might fail to connect if your client IP address changes during the connection request. This can happen if your organization uses a source network address translation (SNAT) pool that contains multiple IP addresses. The connection error looks like this:

   `The request for the Windows Remote Shell with ShellId <ID> failed because the shell was not found on the server. Possible causes are: the specified ShellId is incorrect or the shell no longer exists on the server. Provide the correct ShellId or create a new shell and retry the operation.`

   To fix the issue, use an SNAT pool that contains a single IP address, or force the use of a specific IP address for connections to the Security & Compliance PowerShell endpoint.
 
## See also

The cmdlets that you use in this topic are Windows PowerShell cmdlets. For more information about these cmdlets, see the following topics.
  
- [Get-Credential](https://go.microsoft.com/fwlink/p/?LinkId=389618)
    
- [New-PSSession](https://go.microsoft.com/fwlink/p/?LinkId=389621)
    
- [Import-PSSession](https://go.microsoft.com/fwlink/p/?LinkId=389619)
    
- [Remove-PSSession](https://go.microsoft.com/fwlink/p/?LinkId=389620)
    
- [Set-ExecutionPolicy](https://go.microsoft.com/fwlink/p/?LinkId=389623)
    

