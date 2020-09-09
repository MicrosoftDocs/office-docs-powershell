---
title: Get started with the SharePoint Online Management Shell
---

# Get started with SharePoint Online Management Shell #

To get started using PowerShell to manage SharePoint Online, you need to install the latest SharePoint Online Management Shell is installed and connect to SharePoint Online.

Install the SharePoint Online Management Shell by downloading and running the [SharePoint Online Management Shell](https://go.microsoft.com/fwlink/p/?LinkId=255251) or installing the module from the [PowerShell Gallery](https://www.powershellgallery.com/packages/Microsoft.Online.SharePoint.PowerShell/). Once installed, the module is available for use, and you do not need to install it again until you need features introduced in a later version. For example, you may need to install a new version for TLS 1.2 negotiation after October 2018.  

First you can check if you have already installed SharePoint Online Management Shell by running the following command in administrative mode in PowerShell.

```ps
Get-Module -Name Microsoft.Online.SharePoint.PowerShell -ListAvailable | Select Name,Version
```

If your operating system is using PowerShell 5 or newer, you can install the SharePoint Online Management Shell also by running the following command in administrative mode.

```ps
Install-Module -Name Microsoft.Online.SharePoint.PowerShell
```


To ensure you have all the available cmdlets you should always make sure the module is up to date. You can update the SharePoint Online Management Shell by running the following command in administrative mode.

```ps
Update-Module -Name Microsoft.Online.SharePoint.PowerShell
```

To open the SharePoint Online Management Shell command prompt, from the **Start** screen, type **sharepoint**, and then click **SharePoint Online Management Shell**.

<br />

> [!Video https://www.youtube.com/embed/TMzHAWEQjlk]

## To connect with a user name and password ##

1. Fill in the values for the **$adminUPN** and **$orgName** variables (replacing all the text between the quotes, including the < and > characters), and then run the following commands at the SharePoint Online Management Shell command prompt:

```
$adminUPN="<the full email address of a SharePoint administrator account, example: jdoe@contosotoycompany.onmicrosoft.com>"
$orgName="<name of your Office 365 organization, example: contosotoycompany>"
$userCredential = Get-Credential -UserName $adminUPN -Message "Type the password."
Connect-SPOService -Url https://$orgName-admin.sharepoint.com -Credential $userCredential

```

2. When prompted with the Windows PowerShell credential request dialog box, type the password for the SharePoint admin account.

To assign a user the SharePoint admin role, see [Assign admin roles](/microsoft-365/admin/add-users/assign-admin-roles) or [Assign roles to user accounts with Office 365 PowerShell](/office365/enterprise/powershell/assign-roles-to-user-accounts-with-office-365-powershell).

## To connect with multifactor authentication (MFA) ##

1. Fill in the value for the **$orgName** variable (replacing all the text between the quotes, including the < and > characters), and then run the following commands at the SharePoint Online Management Shell command prompt:

```
$orgName="<name of your Office 365 organization, example: contosotoycompany>"
Connect-SPOService -Url https://$orgName-admin.sharepoint.com
```
2. When prompted with the **Microsoft SharePoint Online Management Shell** dialog box, type the account name and password for a SharePoint administrator account, and then click **Sign in**.

3. Follow the instructions in the **Microsoft SharePoint Online Management Shell** dialog box to provide the additional authentication information, such as a verification code, and then click **Sign in**.

You are now ready to use SharePoint Online commands.

> [!NOTE]
> If you encounter issues trying to connect using MFA, please see [Cannot force Modern Authentication when using Connect-SPOService cmdlet in SharePoint Online Management Shell](/sharepoint/troubleshoot/security/cannot-force-modern-authentication)
