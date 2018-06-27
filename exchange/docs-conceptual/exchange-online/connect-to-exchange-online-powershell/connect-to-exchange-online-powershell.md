---
title: "Connect to Exchange Online PowerShell"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 7/10/2017
ms.audience: Admin
ms.topic: article
ms.service: exchange-online
localization_priority: Priority
ms.collection: Strat_EX_Admin
ms.custom: 
ms.assetid: c8bea338-6c1a-4bdf-8de0-7895d427ee5b
description: "Learn how to use remote PowerShell to connect to Exchange Online."
---

# Connect to Exchange Online PowerShell
Exchange Online PowerShell allows you to manage your Exchange Online settings from the command line. You use Windows PowerShell on your local computer to create a remote PowerShell session to Exchange Online. It's a simple three-step process where you enter your Office 365 credentials, provide the required connection settings, and then import the Exchange Online cmdlets into your local Windows PowerShell session so that you can use them.

> [!IMPORTANT]
> If you want to use multi-factor authentication (MFA) to connect to Exchange Online PowerShell, you need to download and use the Exchange Online Remote PowerShell Module. For more information, see [Connect to Exchange Online PowerShell using multi-factor authentication](mfa-connect-to-exchange-online-powershell.md). If you're an Exchange Online Protection (EOP) standalone customer, and you're using the service to protect on-premises mailboxes, use the connection instructions in the topic [Connect to Exchange Online Protection PowerShell](../../exchange-eop/connect-to-exchange-online-protection-powershell.md). If your EOP subscription is Exchange Enterprise CAL with Services (includes data loss prevention (DLP) and reporting using web services), the connection instructions in this topic will work for you. 

## What do you need to know before you begin?

- Estimated time to complete: 5 minutes

- You can use the following versions of Windows:

  - Windows 10

  - Windows 8.1

  - Windows Server 2016

  - Windows Server 2012 or Windows Server 2012 R2

  - Windows 7 Service Pack 1 (SP1)<sup>*</sup>

  - Windows Server 2008 R2 SP1<sup>*</sup>

    <sup>*</sup> For older versions of Windows, you need to install the Microsoft.NET Framework 4.5 or later and then an updated version of the Windows Management Framework: 3.0, 4.0, or 5.1 (only one). For more information, see [Installing the .NET Framework](https://go.microsoft.com/fwlink/p/?LinkId=257868), [Windows Management Framework 3.0](https://go.microsoft.com/fwlink/p/?LinkId=272757), [Windows Management Framework 4.0](https://go.microsoft.com/fwlink/p/?LinkId=391344), and [Windows Management Framework 5.1](https://aka.ms/wmf5download).

- Windows PowerShell needs to be configured to run scripts, and by default, it isn't. You'll get the following error when you try to connect:

  `Files cannot be loaded because running scripts is disabled on this system. Provide a valid certificate with which to sign the files.`

  To enable Windows PowerShell to run signed scripts, run the following command in an elevated Windows PowerShell window (a Windows PowerShell window you open by selecting **Run as administrator**):

  ```
  Set-ExecutionPolicy RemoteSigned
  ```

  You need to configure this setting only once on your computer, not every time you connect.

> [!TIP]
> Having problems? Ask for help in the Exchange forums. Visit the forums at: [Exchange Online](https://go.microsoft.com/fwlink/p/?linkId=267542), or [Exchange Online Protection](https://go.microsoft.com/fwlink/p/?linkId=285351). 

## Connect to Exchange Online PowerShell

1. On your local computer, open Windows PowerShell and run the following command.

    ```
    $UserCredential = Get-Credential
    ```
   In the **Windows PowerShell Credential Request** dialog box, type your work or school account and password, and then click **OK**.

2. Run the following command.

   ```
   $Session = New-PSSession -ConfigurationName Microsoft.Exchange -ConnectionUri https://outlook.office365.com/powershell-liveid/ -Credential $UserCredential -Authentication Basic -AllowRedirection
   ```

    **Notes**:

    - For Office 365 operated by 21Vianet, use the _ConnectionUri_ value: `https://partner.outlook.cn/PowerShell`

    - For Office 365 Germany, use the _ConnectionUri_ value: `https://outlook.office.de/powershell-liveid/`

3. Run the following command.

    ```
    Import-PSSession $Session
    ```

> [!NOTE]
> Be sure to disconnect the remote PowerShell session when you're finished. If you close the Windows PowerShell window without disconnecting the session, you could use up all the remote PowerShell sessions available to you, and you'll need to wait for the sessions to expire. To disconnect the remote PowerShell session, run the following command. 

```
Remove-PSSession $Session
```

## How do you know this worked?

After Step 3, the Exchange Online cmdlets are imported into your local Windows PowerShell session and tracked by a progress bar. If you don't receive any errors, you connected successfully. A quick test is to run an Exchange Online cmdlet, for example, **Get-Mailbox**, and see the results.

If you receive errors, check the following requirements:

- A common problem is an incorrect password. Run the three steps again and pay close attention to the user name and password you enter in Step 1.

- To help prevent denial-of-service (DoS) attacks, you're limited to three open remote PowerShell connections to your Exchange Online organization.

- The account you use to connect to Exchange Online must be enabled for remote PowerShell. For more information, see [Enable or disable access to Exchange Online PowerShell](../disable-access-to-exchange-online-powershell.md).

- TCP port 80 traffic needs to be open between your local computer and Office 365. It's probably open, but it's something to consider if your organization has a restrictive Internet access policy.

## See also

The cmdlets that you use in this topic are Windows PowerShell cmdlets. For more information about these cmdlets, see the following topics.

- [Get-Credential](https://go.microsoft.com/fwlink/p/?LinkId=389618)

- [New-PSSession](https://go.microsoft.com/fwlink/p/?LinkId=389621)

- [Import-PSSession](https://go.microsoft.com/fwlink/p/?LinkId=389619)

- [Remove-PSSession](https://go.microsoft.com/fwlink/p/?LinkId=389620)

- [Set-ExecutionPolicy](https://go.microsoft.com/fwlink/p/?LinkId=389623)


