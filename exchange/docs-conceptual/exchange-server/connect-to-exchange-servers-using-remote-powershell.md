---
title: "Connect to Exchange servers using remote PowerShell"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 12/20/2016
ms.audience: ITPro
ms.topic: article
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.custom: Strat_EX_Admin
ms.assetid: 0b5987c3-8836-456d-99f7-abc2ffb57300
description: "Use Windows PowerShell on a local computer to connect to an Exchange Server."
---

# Connect to Exchange servers using remote PowerShell
If you don't have the Exchange management tools installed on your local computer, you can use Windows PowerShell to create a remote PowerShell session to an Exchange server. It's a simple three-step process, where you enter your credentials, provide the required connection settings, and then import the Exchange cmdlets into your local Windows PowerShell session so that you can use them.
  
> [!NOTE]
> We recommend that you use the Exchange Management Shell on any computer that you use to extensively administer Exchange servers. You get the Exchange Management Shell by installing the Exchange management tools. For more information, see [Install the Exchange Server Management Tools](https://technet.microsoft.com/library/71fcbe4c-783b-4f77-aabb-a21aa7a4ef23.aspx) and [Open the Exchange Management Shell](open-the-exchange-management-shell.md). For more information about the Exchange Management Shell, see [Exchange Server PowerShell (Exchange Management Shell)](exchange-management-shell.md). 
  
## What do you need to know before you begin?

- Estimated time to complete: less than 5 minutes
    
- You can use the following versions of Windows:
    
  - Windows 10
    
  - Windows 8.1\*

  - Windows Server 2016
    
  - Windows Server 2012 R2\*
    
  - Windows Server 2012\*\*
    
  \* You need to install the Microsoft .NET Framework 4.5.2 or later. For more information, see [Installing the .NET Framework](https://go.microsoft.com/fwlink/p/?LinkId=257868).
    
   \*\* After you install the .NET Framework 4.5.2 or later, you also need to install the Windows Management Framework 4.0. For more information, see [Windows Management Framework 4.0](https://go.microsoft.com/fwlink/p/?LinkId=391344).
    
- Windows PowerShell needs to be configured to run scripts, and by default, it isn't. You get the following error when you try to connect:
    
     `Files cannot be loaded because running scripts is disabled on this system. Provide a valid certificate with which to sign the files.`
    
    To enable Windows PowerShell to run signed scripts, run the following command in an elevated Windows PowerShell window (a Windows PowerShell window you open by selecting **Run as administrator**):
    
  ```
  Set-ExecutionPolicy RemoteSigned
  ```

    You need to configure this setting only once on your computer, not every time you connect.
    
> [!TIP]
> Having problems? Ask for help in the Exchange forums. Visit the forums at [Exchange Server](https://go.microsoft.com/fwlink/p/?linkId=60612). 
  
## Connect to a remote Exchange server

1. On your local computer, open Windows PowerShell, and run the following command:
    
    ```
    $UserCredential = Get-Credential
    ```

   In the **Windows PowerShell Credential Request** dialog box that opens, enter your user principal name (UPN) (for example, `chris@contoso.com`) and password, and then click **OK**.
    
2. Replace `<ServerFQDN>` with the fully qualified domain name of your Exchange server (for example, `mailbox01.contoso.com`) and run the following command:
    
    ```
    $Session = New-PSSession -ConfigurationName Microsoft.Exchange -ConnectionUri http://<ServerFQDN>/PowerShell/ -Authentication Kerberos -Credential $UserCredential
    ```

      **Note**: The _ConnectionUri_ value is `http`, not `https`.

3. Run the following command:
    
    ```
    Import-PSSession $Session
    ```

> [!NOTE]
> Be sure to disconnect the remote PowerShell session when you're finished. If you close the Windows PowerShell window without disconnecting the session, you could use up all the remote PowerShell sessions available to you, and you'll need to wait for the sessions to expire. To disconnect the remote PowerShell session, run the following command: 
  
   ```
   Remove-PSSession $Session
   ```

## How do you know this worked?

After Step 3, the Exchange cmdlets are imported into your local Windows PowerShell session and tracked by a progress bar. If you don't receive any errors, you connected successfully. A quick test is to run an Exchange cmdlet (for example, **Get-Mailbox**) and review the results.
  
If you receive errors, check the following requirements:
  
- A common problem is an incorrect password. Run the three steps again, and pay close attention to the user name and password you enter in Step 1.
    
- The account you use to connect to the Exchange server needs to be enabled for remote PowerShell access. For more information, see [Control remote PowerShell access to Exchange servers](control-remote-powershell-access-to-exchange-servers.md).
    
- TCP port 80 traffic needs to be open between your local computer and the Exchange server. It's probably open, but it's something to consider if your organization has a restrictive network access policy.
    
## See also

The cmdlets that you use in this topic are Windows PowerShell cmdlets. For more information about these cmdlets, see the following topics.
  
- [Get-Credential](https://go.microsoft.com/fwlink/p/?LinkId=389618)
    
- [New-PSSession](https://go.microsoft.com/fwlink/p/?LinkId=389621)
    
- [Import-PSSession](https://go.microsoft.com/fwlink/p/?LinkId=389619)
    
- [Remove-PSSession](https://go.microsoft.com/fwlink/p/?LinkId=389620)
    
- [Set-ExecutionPolicy](https://go.microsoft.com/fwlink/p/?LinkId=389623)
    

