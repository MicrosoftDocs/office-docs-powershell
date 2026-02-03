---
title: "Connect to Exchange servers using remote PowerShell"
ms.author: chrisda
author: chrisda
manager: orspodek
ms.date: 01/23/2026
ms.audience: ITPro
audience: ITPro
ms.topic: article
ms.service: exchange-powershell
ms.localizationpriority: high
ms.collection: Strat_EX_Admin
ms.custom:
ms.assetid: 0b5987c3-8836-456d-99f7-abc2ffb57300
description: "Use Windows PowerShell on a local computer to connect to an Exchange Server."
---

# Connect to Exchange servers using remote PowerShell

If you don't have the Exchange management tools installed on your local computer, you can use Windows PowerShell to create a remote PowerShell session to an Exchange server. It's a simple three-step process, where you enter your credentials, provide the required connection settings, and then import the Exchange cmdlets into your local Windows PowerShell session.

> [!NOTE]
>
> - We recommend that you use the Exchange Management Shell on any computer that you use to extensively administer Exchange servers. You get the Exchange Management Shell by installing the Exchange management tools. For more information, see [Install the Exchange Server Management Tools](/Exchange/plan-and-deploy/post-installation-tasks/install-management-tools) and [Open the Exchange Management Shell](open-the-exchange-management-shell.md). For more information about the Exchange Management Shell, see [Exchange Server PowerShell (Exchange Management Shell)](exchange-management-shell.md).
>
> - The **Get-ExchangeCertificate** cmdlet does not fully support remote PowerShell. We recommend that you use the Exchange Management Shell instead to see all properties of certificate objects.

## What do you need to know before you begin?

- Estimated time to complete: less than 5 minutes

- After you connect, the cmdlets and parameters that you have or don't have access to is controlled by role-based access control (RBAC). For more information, see [Exchange Server permissions](/exchange/permissions/permissions).

- You can use the following versions of Windows:
  - Windows 11
  - Windows 10
  - Windows 8.1
  - Windows Server 2019
  - Windows Server 2016
  - Windows Server 2012 or Windows Server 2012 R2
  - Windows 7 Service Pack 1 (SP1)<sup>*</sup>
  - Windows Server 2008 R2 SP1<sup>*</sup>

  <sup>\*</sup> This version of Windows has reached end of support, and is now supported only in Azure virtual machines. To use this version of Windows, you need to install the Microsoft .NET Framework 4.5 or later and then an updated version of the Windows Management Framework: 3.0, 4.0, or 5.1 (only one). For more information, see [Install the .NET Framework](/dotnet/framework/install/on-windows-7), [Windows Management Framework 3.0](https://aka.ms/wmf3download), [Windows Management Framework 4.0](https://aka.ms/wmf4download), and [Windows Management Framework 5.1](https://aka.ms/wmf5download).

- Windows PowerShell needs to be configured to run scripts, and by default, it isn't. You get the following error when you try to connect:

  > Files cannot be loaded because running scripts is disabled on this system. Provide a valid certificate with which to sign the files.

  To require all PowerShell scripts that you download from the internet are signed by a trusted publisher, run the following command in an elevated Windows PowerShell window (a Windows PowerShell window you open by selecting **Run as administrator**):

  ```powershell
  Set-ExecutionPolicy RemoteSigned
  ```

  For more information about execution policies, see [About Execution Policies](/powershell/module/microsoft.powershell.core/about/about_execution_policies).

> [!TIP]
> Having problems? Ask for help in the [Exchange Server](https://go.microsoft.com/fwlink/p/?linkId=60612) forum.

## Connect to a remote Exchange server

1. On your local computer, open Windows PowerShell, and run the following command:

   ```powershell
   $UserCredential = Get-Credential
   ```

   In the **Windows PowerShell Credential Request** dialog box that opens, enter your user principal name (UPN) (for example, `chris@contoso.com`) and password, and then select **OK**.

2. Replace `<ServerFQDN>` with the fully qualified domain name of your Exchange server (for example, `mailbox01.contoso.com`) and run the following command:

   ```powershell
   $Session = New-PSSession -ConfigurationName Microsoft.Exchange -ConnectionUri http://<ServerFQDN>/PowerShell/ -Authentication Kerberos -Credential $UserCredential
   ```

   > [!TIP]
   > The _ConnectionUri_ value uses `http`, not `https` because the session is encrypted by the Kerberos token in the payload. Kerberos encryption removes the need to encrypt the session again using `https`.

3. Run the following command:

   ```powershell
   Import-PSSession $Session -DisableNameChecking
   ```

> [!NOTE]
> Be sure to disconnect the remote PowerShell session when you're finished. If you close the Windows PowerShell window without disconnecting the session, you could use up all the remote PowerShell sessions available to you, and you'll need to wait for the sessions to expire. To disconnect the remote PowerShell session, run the following command:

```powershell
Remove-PSSession $Session
```

## How do you know that you've successfully connected?

After Step 3, the Exchange cmdlets are imported into your local Windows PowerShell session and tracked by a progress bar. If you don't receive any errors, you connected successfully. A quick test is to run an Exchange cmdlet (for example, **Get-Mailbox**) and review the results.

If you receive errors, check the following requirements:

- A common problem is an incorrect password. Run the three steps again, and pay close attention to the user name and password you enter in Step 1.

- The account you use to connect to the Exchange server needs to be enabled for remote PowerShell access. For more information, see [Control remote PowerShell access to Exchange servers](control-remote-powershell-access-to-exchange-servers.md).

- TCP port 80 traffic needs to be open between your local computer and the Exchange server. It's probably open, but it's something to consider if your organization has a restrictive network access policy.

## See also

The cmdlets that you use in this article are Windows PowerShell cmdlets. For more information about these cmdlets, see the following articles.

- [Get-Credential](/powershell/module/microsoft.powershell.security/get-credential)
- [New-PSSession](/powershell/module/microsoft.powershell.core/new-pssession)
- [Import-PSSession](/powershell/module/microsoft.powershell.utility/import-pssession)
- [Remove-PSSession](/powershell/module/microsoft.powershell.core/remove-pssession)
- [Set-ExecutionPolicy](/powershell/module/microsoft.powershell.security/set-executionpolicy)
