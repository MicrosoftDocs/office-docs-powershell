---
title: "Enable or disable access to Exchange Online PowerShell"
ms.author: chrisda
author: chrisda
manager: deniseb
ms.date: 5/16/2024
ms.audience: Admin
audience: Admin
ms.topic: article
ms.service: exchange-powershell
ms.localizationpriority: medium
ms.assetid: f969816a-2607-4655-9d47-9e8767fb5633
search.appverid: MET150
description: "Admins can learn how to disable or enable access to Exchange Online PowerShell for users in their organization"
---

# Enable or disable access to Exchange Online PowerShell

Exchange Online PowerShell is the administrative interface that enables admins to manage the Exchange Online part of a Microsoft 365 organization from the command line (including many security features in Exchange Online Protection and Microsoft Defender for Office 365).

By default, all accounts in Microsoft 365 are allowed to use Exchange Online PowerShell. This access doesn't give users administrative capabilities in an organization. They're still limited by [role based access control (RBAC)](/exchange/permissions-exo/permissions-exo) (for example, they can configure settings on their own mailbox or manage distribution groups that they own, but not much else).

Admins can use the procedures in this article to disable or enable a user's ability to connect to Exchange Online PowerShell.

## What do you need to know before you begin?

- Estimated time to complete each procedure: less than 5 minutes

- The procedures in this article are available only in Exchange Online PowerShell. To connect to Exchange Online PowerShell, see [Connect to Exchange Online PowerShell](connect-to-exchange-online-powershell.md).

- You need to be assigned permissions before you can do the procedures in this article. You have the following options:
  - [Exchange Online RBAC](/exchange/permissions-exo/permissions-exo): Membership in the **Organization Management** or **Recipient Management** role groups.
  - [Microsoft Entra RBAC](/microsoft-365/admin/add-users/about-admin-roles): Membership in the **Global Administrator** role gives users the required permissions *and* permissions for other features in Microsoft 365.

  > [!IMPORTANT]
  > In your haste to quickly and globally disable PowerShell access in your cloud-based organization, beware of commands like `Get-User | Set-User -EXOModuleEnabled $false` without considering admin accounts. Use the procedures in this article to selectively remove PowerShell access, or preserve access for those who need it by using the following syntax in your global removal command: `Get-User | Where-Object {$_.UserPrincipalName -ne 'admin1@contoso.onmicrosoft.com' -and $_.UserPrincipalName -ne 'admin2@contoso.onmicrosoft.com'...} | Set-User -EXOModuleEnabled $false`.
  >
  > If you accidentally lock yourself out of PowerShell access, create a new admin account in the Microsoft 365 admin center, and then use that account to give yourself PowerShell access using the procedures in this article.

- For detailed information about OPATH filter syntax in Exchange Online, see [Additional OPATH syntax information](recipient-filters.md#additional-opath-syntax-information).

> [!TIP]
> Having problems? Ask for help in the Exchange forums. Visit the forums at: [Exchange Online](https://go.microsoft.com/fwlink/p/?linkId=267542), or [Exchange Online Protection](https://go.microsoft.com/fwlink/p/?linkId=285351).

## Enable or disable access to Exchange Online PowerShell for a user

This example disables access to Exchange Online PowerShell for the user `david@contoso.onmicrosoft.com`.

```powershell
Set-User -Identity david@contoso.onmicrosoft.com -EXOModuleEnabled $false
```

This example enables access to Exchange Online PowerShell for the user `chris@contoso.onmicrosoft.com`.

```powershell
Set-User -Identity chris@contoso.onmicrosoft.com -EXOModuleEnabled $true
```

## Disable access to Exchange Online PowerShell for many users

To prevent access to Exchange Online PowerShell for a specific group of existing users, you have the following options:

- **Filter users based on an existing attribute**: This method assumes that the target user accounts all share a unique filterable attribute. Some attributes, such as Title, Department, address information, and telephone number, are available only from the **Get-User** cmdlet. Other attributes, such as CustomAttribute1 to CustomAttribute15, are available only from the **Get-Mailbox** cmdlet.
- **Use a list of specific users**: After you generate the list of specific users, you can use that list to disable their access to Exchange Online PowerShell.

### Filter users based on an existing attribute

To disable access to Exchange Online PowerShell for any number of users based on an existing attribute, use the following syntax:

```powershell
$<VariableName> = <Get-Mailbox | Get-User> -ResultSize unlimited -Filter <Filter>

$<VariableName> | foreach {Set-User -Identity $_.WindowsEmailAddress -EXOModuleEnabled $false}
```

This example removes access to Exchange Online PowerShell for all users whose **Title** attribute contains the value "Sales Associate".

```powershell
$DSA = Get-User -ResultSize unlimited -Filter "(RecipientType -eq 'UserMailbox') -and (Title -like 'Sales Associate*')"

$DSA | foreach {Set-User -Identity $_.WindowsEmailAddress -EXOModuleEnabled $false}
```

### Use a list of specific users

To disable access to Exchange Online PowerShell for a list of specific users, use the following syntax:

```powershell
$<VariableName> = Get-Content <text file>

$<VariableName> | foreach {Set-User -Identity $_ -EXOModuleEnabled $false}
```

The following example uses the text file C:\My Documents\NoPowerShell.txt to identify the users by their accounts. The text file must contain one account on each line as follows:

> `akol@contoso.onmicrosoft.com` <br/> `tjohnston@contoso.onmicrosoft.com` <br/> `kakers@contoso.onmicrosoft.com`

After you populate the text file with the user accounts you want to update, run the following commands:

```powershell
$NoPS = Get-Content "C:\My Documents\NoPowerShell.txt"

$NoPS | foreach {Set-User -Identity $_ -EXOModuleEnabled $false}
```

## View the Exchange Online PowerShell access status for users

To view the PowerShell access status for a specific user, replace \<UserIdentity\> with the name or user principal name (UPN) of the user, and run the following command:

```powershell
Get-User -Identity "<UserIdentity>" | Format-List EXOModuleEnabled
```

To display the Exchange Online PowerShell access status for all users, run the following command:

```powershell
Get-User -ResultSize unlimited | Format-Table -Auto DisplayName,EXOModuleEnabled
```

To display all users who don't have access to Exchange Online PowerShell, run the following command:

```powershell
Get-User -ResultSize unlimited -Filter 'EXOModuleEnabled -eq $false'
```

To display all users who have access to Exchange Online PowerShell, run the following command:

```powershell
Get-User -ResultSize unlimited -Filter 'EXOModuleEnabled -eq $true'
```
