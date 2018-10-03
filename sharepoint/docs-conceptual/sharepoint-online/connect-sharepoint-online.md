# Getting started with SharePoint Online Management Shell #

Before you get started using PowerShell to manage SharePoint Online, make sure that the SharePoint Online Management Shell is installed and you have connected to SharePoint Online.

Install the SharePoint Online Management Shell by downloading and running the [SharePoint Online Management Shell](https://go.microsoft.com/fwlink/p/?LinkId=255251) or installing module from the [PowerShell Gallery](https://www.powershellgallery.com/packages/Microsoft.Online.SharePoint.PowerShell/16.0.8029.0). You only need to do this once for each computer from which you are running SharePoint Online PowerShell commands.

First you can check if you have already installed SharePoint Online Management Shell by running the following command in administrative mode in PowerShell.

```ps
Get-Module -Name Microsoft.Online.SharePoint.PowerShell -ListAvailable | Select Name,Version
```

If your operating system is using PowerShell 5 or newer, you can install Sharepoint Online Management Shell also by running following command in administrative mode.

```ps
Install-Module -Name Microsoft.Online.SharePoint.PowerShell
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

2. When prompted with the Windows PowerShell credential request dialog box, type the password for the SharePoint Online SharePoint administrator account.

To make a user account a SharePoint administrator, see [Assign admin roles in Office 365 for business](https://support.office.com/en-us/article/Assign-admin-roles-in-Office-365-for-business-eac4d046-1afd-4f1a-85fc-8219c79e1504?ui=en-US&rs=en-US&ad=US) or [Assign roles to user accounts with Office 365 PowerShell](https://technet.microsoft.com/library/mt736914.aspx).

## To connect with multifactor authentication (MFA) ##

1. Fill in the value for the **$orgName** variable (replacing all the text between the quotes, including the < and > characters), and then run the following commands at the SharePoint Online Management Shell command prompt:

```
$orgName="<name of your Office 365 organization, example: contosotoycompany>"
Connect-SPOService -Url https://$orgName-admin.sharepoint.com
```
2. When prompted with the **Microsoft SharePoint Online Management Shell** dialog box, type the account name and password for a SharePoint administrator account, and then click **Sign in**.

3. Follow the instructions in the **Microsoft SharePoint Online Management Shell** dialog box to provide the additional authentication information, such as a verification code, and then click **Sign in**.

You are now ready to use SharePoint Online commands.
