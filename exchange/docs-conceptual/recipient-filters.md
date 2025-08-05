---
title: "Recipient filters in Exchange PowerShell commands"
ms.author: chrisda
author: chrisda
manager: deniseb
ms.date: 09/07/2023
ms.audience: ITPro
audience: ITPro
ms.topic: reference
ms.service: exchange-powershell
ms.localizationpriority: medium
ms.assetid: fb4b1396-9aae-4037-be1a-b09e336b890e
description: "Learn about creating different kinds of recipient filters in the Exchange Management Shell and Exchange Online PowerShell."
---

# Recipient filters in Exchange PowerShell commands

The cmdlets in the [Exchange Management Shell](exchange-management-shell.md) and [Exchange Online PowerShell](exchange-online-powershell.md)l support different types of filters in recipient related cmdlets:

- Precanned filters.
- Custom filters using the _RecipientFilter_ parameter.
- Custom filters using the _Filter_ parameter.
- Custom filters using the _ContentFilter_ parameter.

Older versions of Exchange used LDAP filtering syntax to create custom address lists, global address lists (GALs), email address policies, and distribution groups. OPATH filtering syntax replaced LDAP filtering syntax starting in Exchange Server 2007.

## Precanned filters

A _precanned filter_ uses popular properties in Exchange to filter recipients for dynamic distribution groups, email address policies, address lists, or GALs. With precanned filters, you can use either the Exchange PowerShell or the Exchange admin center (EAC). Using precanned filters, you can do the following tasks:

- Determine the scope of recipients.
- Add conditional filtering based on common properties such as company, department, and state or region.
- Add custom attributes for recipients. For more information, see [Custom Attributes](/Exchange/recipients/mailbox-custom-attributes).

The following parameters are considered precanned filters:

- _IncludedRecipients_
- _ConditionalCompany_
- _ConditionalDepartment_
- _ConditionalStateOrProvince_
- _ConditionalCustomAttribute1_ to _ConditionalCustomAttribute15_.

Precanned filters are available on the following cmdlets:

- [New-DynamicDistributionGroup](/powershell/module/exchangepowershell/new-dynamicdistributiongroup)
- [Set-DynamicDistributionGroup](/powershell/module/exchangepowershell/set-dynamicdistributiongroup)

- [New-EmailAddressPolicy](/powershell/module/exchangepowershell/new-emailaddresspolicy)
- [Set-EmailAddressPolicy](/powershell/module/exchangepowershell/set-emailaddresspolicy)

- [New-AddressList](/powershell/module/exchangepowershell/new-addresslist)
- [Set-AddressList](/powershell/module/exchangepowershell/set-addresslist)

- [New-GlobalAddressList](/powershell/module/exchangepowershell/new-globaladdresslist)
- [Set-GlobalAddressList](/powershell/module/exchangepowershell/set-globaladdresslist)

### Precanned filter example

This example describes using precanned filters in the Exchange Management Shell to create a dynamic distribution group. The syntax in this example is similar but not identical to the syntax you would use to create an email address policy, address list, or GAL. When creating a precanned filter, you should ask the following questions:

- From which organizational unit (OU) do you want to include recipients (the _RecipientContainer_ parameter)?

  > [!NOTE]
  > Selecting the OU for this purpose applies only to creating dynamic distribution groups, and not to creating email address policies, address lists, or GALs.

- What types of recipients do you want to include (the _IncludedRecipients_ parameter)?

- What additional conditions do you want to include in the filter (the _ConditionalCompany_, _ConditionalDepartment_, _ConditionalStateOrProvince_, and _ConditionalCustomAttribute_ parameters)?

This example creates a dynamic distribution group with the following properties:

- **Name**: Contoso Finance.
- **Recipient types**: User mailboxes.
- **Recipient location**: The OU named Contoso.com/Users.
- **Filters** Include only recipients who have the **Department** attribute defined as Finance and the **Company** attribute defined as Contoso.

```powershell
New-DynamicDistributionGroup -Name "Contoso Finance" -OrganizationalUnit Contoso.com/Users -RecipientContainer Contoso.com/Users -IncludedRecipients MailboxUsers -ConditionalDepartment "Finance" -ConditionalCompany "Contoso"
```

This example displays the properties of this new dynamic distribution group.

```powershell
Get-DynamicDistributionGroup -Identity "Contoso Finance" | Format-List Recipient*,Included*
```

## Custom filters using the RecipientFilter parameter

If precanned filters don't meet your needs, you can create custom filters by using the _RecipientFilter_ parameter. This parameter is available on the following cmdlets:

- [New-DynamicDistributionGroup](/powershell/module/exchangepowershell/new-dynamicdistributiongroup)
- [Set-DynamicDistributionGroup](/powershell/module/exchangepowershell/set-dynamicdistributiongroup)

- [New-EmailAddressPolicy](/powershell/module/exchangepowershell/new-emailaddresspolicy)
- [Set-EmailAddressPolicy](/powershell/module/exchangepowershell/set-emailaddresspolicy)

- [New-AddressList](/powershell/module/exchangepowershell/new-addresslist)
- [Set-AddressList](/powershell/module/exchangepowershell/set-addresslist)

- [New-GlobalAddressList](/powershell/module/exchangepowershell/new-globaladdresslist)
- [Set-GlobalAddressList](/powershell/module/exchangepowershell/set-globaladdresslist)

For more information about the filterable properties you can use with the _RecipientFilter_ parameter, see [Filterable properties for the RecipientFilter parameter](recipientfilter-properties.md).

### Custom filter example

The following example uses the _RecipientFilter_ parameter to create a dynamic distribution group. The syntax in this example is similar but not identical to the syntax you use to create an email address policy, address list, or GAL.

This example uses custom filters to create a dynamic distribution group with the following properties:

- **Name**: AllContosoNorth.
- **Recipient types**: User mailboxes.
- **Recipient location**: The OU named Contoso.com/Users.
- **Filters** Include only recipients who have the **Company** attribute defined as Contoso and the **Office** attribute defined as North Building.

```powershell
New-DynamicDistributionGroup -Name AllContosoNorth -OrganizationalUnit contoso.com/Users -RecipientFilter "((RecipientTypeDetails -eq 'UserMailbox') -and (Company -eq 'Contoso') -and (Office -eq 'North Building'))"
```

## Custom filters using the Filter parameter

You can use the _Filter_ parameter to filter the results of a command to specify which objects to retrieve. For example, instead of retrieving all users or groups, you can specify a set of users or groups using a filter string. This type of filter doesn't modify any configuration or attributes of objects. It only modifies the set of objects that the command returns.

Using the _Filter_ parameter to modify command results is known as _server-side filtering_. Server-side filtering submits the command and the filter to the server for processing. We also support client-side filtering, in which the command retrieves all objects from the server and then applies the filter in the local console window. To perform client-side filtering, use the **Where-Object** cmdlet. For more information about server-side and client-side filtering, see "How to Filter Data" in [Working with Command Output](/exchange/working-with-command-output-exchange-2013-help).

To find the filterable properties for cmdlets that have the _Filter_ parameter, you can run the **Get** command against an object and format the output by pipelining the **Format-List** parameter. Most of the returned values are available for use in the _Filter_ parameter.

The following example returns a detailed list for the mailbox Ayla.

```powershell
Get-Mailbox -Identity Ayla | Format-List
```

The _Filter_ parameter is available for the following recipient cmdlets:

- [Get-CASMailbox](/powershell/module/exchangepowershell/get-casmailbox)
- [Get-Contact](/powershell/module/exchangepowershell/get-contact)
- [Get-DistributionGroup](/powershell/module/exchangepowershell/get-distributiongroup)
- [Get-DynamicDistributionGroup](/powershell/module/exchangepowershell/get-dynamicdistributiongroup)
- [Get-Group](/powershell/module/exchangepowershell/get-group)
- [Get-Mailbox](/powershell/module/exchangepowershell/get-mailbox)
- [Get-MailContact](/powershell/module/exchangepowershell/get-mailcontact)
- [Get-MailPublicFolder](/powershell/module/exchangepowershell/get-mailpublicfolder)
- [Get-MailUser](/powershell/module/exchangepowershell/get-mailuser)
- [Get-Recipient](/powershell/module/exchangepowershell/get-recipient)
- [Get-RemoteMailbox](/powershell/module/exchangepowershell/get-remotemailbox)
- [Get-SecurityPrincipal](/powershell/module/exchangepowershell/get-securityprincipal)
- [Get-UMMailbox](/powershell/module/exchangepowershell/get-ummailbox)
- [Get-User](/powershell/module/exchangepowershell/get-user)
- [Get-UnifiedGroup](/powershell/module/exchangepowershell/get-unifiedgroup)

For more information about the filterable properties you can use with the _Filter_ parameter, see [Filterable properties for the Filter parameter](filter-properties.md).

### Filter parameter example

This example uses the _Filter_ parameter to return information about users whose title contains the word "manager."

```powershell
Get-User -Filter "Title -like 'Manager*'"
```

## Custom filters using the ContentFilter parameter

You can use the _ContentFilter_ parameter to select specific message content to export when using the [New-MailboxExportRequest](/powershell/module/exchangepowershell/new-mailboxexportrequest) cmdlet. If the command finds a message that contains the match to the content filter, it exports the message to a .pst file.

### ContentFilter parameter example

This example creates an export request that searches Ayla's mailbox for messages where the body contains the phrase "company prospectus." If that phrase is found, the command exports all messages with that phrase to a .pst file.

```powershell
New-MailboxExportRequest -Mailbox Ayla -ContentFilter "Body -like 'company prospectus*'"
```

For more information about the filterable properties that you can use with the _ContentFilter_ parameter, see [Filterable properties for the ContentFilter parameter](/exchange/filterable-properties-for-the-contentfilter-parameter).

## Additional OPATH syntax information

When creating your own custom OPATH filters, consider the following items:

- Use the following syntax to identify the types of values that you're searching for:

  - **Text values**: Enclose the text in single quotation marks (for example, `'Value'` or `'Value with spaces'`). Or, you can enclose a text value in double quotation marks, but that limits the characters you can use to enclose the whole OPATH filter.

  - **Variables**: Enclose variables that need to be expanded in single quotation marks (for example, `'$User'`). If the variable value itself contains single quotation marks, you need to identify (escape) the single quotation marks to expand the variable correctly. For example, instead of `'$User'`, use `'$($User -Replace "'","''")'`.

  - **Integer values**: You don't need to enclose integers (for example, `500`). You can often enclose integers in single quotation marks or double quotation marks, but that limits the characters you can use to enclose the whole OPATH filter.

  - **System values**: Don't enclose system values (for example, `$true`, `$false`, or `$null`). To enclose the whole OPATH filter in double quotation marks, you need to escape the dollar sign in system value (for example, `` `$true``).

- You need to enclose the whole OPATH filter in double quotation marks " " or single quotation marks ' '. Although any OPATH filter object is technically a string and not a script block, you can still use braces { }, but only if the filter doesn't contain variables that require expansion. The characters that you can use to enclose the whole OPATH filter depend on types of values that you're searching for and the characters you used (or didn't use) to enclose those values:

  - **Text values**: Depends on how you enclosed the text to search for:
    - **Text enclosed in single quotation marks**: Enclose the whole OPATH filter in double quotation marks or braces.
    - **Text enclosed in double quotation marks**: Enclose the whole OPATH filter in braces.

  - **Variables**: Enclose the whole OPATH filter in double quotation marks (for example, `"Name -eq '$User'"`).

  - **Integer values**: To ensure they work in all cases, enclose them in one of the following ways:
    - **Integer enclosed in single quotation marks**: Enclose the whole OPATH filter in double quotation marks or braces `"CountryCode -eq '840'"`.
    - **Integer enclosed in double quotation marks**: Enclose the whole OPATH filter in braces (for example `{CountryCode -eq "840"}`).

  - **System values**: Enclose the whole OPATH filter in single quotation marks or braces (for example `'HiddenFromAddressListsEnabled -eq $true'`). If you escape the dollar sign system value, you can also enclose the whole OPATH filter in double quotation marks (for example, ``"HiddenFromAddressListsEnabled -eq `$true"``).

  The compatibility of search criteria and the valid characters that you can use to enclose the whole OPATH filter are summarized in the following table:

  |Search value|OPATH filter <br/> enclosed in <br/> double quotation marks|OPATH filter <br/> enclosed in <br/> single quotation marks|OPATH filter enclosed in <br/> braces|
  |---|:---:|:---:|:---:|
  |`'Text'`|✔||✔|
  |`"Text"`|||✔|
  |`'$Variable'`|✔|||
  |`500`|✔|✔|✔|
  |`'500'`|✔||✔|
  |`"500"`|||✔|
  |`$true`||✔|✔|
  |`` `$true``|✔|✔|✔|

- Include the hyphen before all logical or comparison operators. The most common operators include:

  - `-and`
  - `-or`
  - `-not`
  - `-eq` (equals)
  - `-ne` (not equal)
  - `-lt` (less than)
  - `-gt` (greater than)
  - `-like` (string comparison)
  - `-notlike` (string comparison)

- Many filterable properties accept wildcard characters. If you use a wildcard character, use the **-like** operator instead of the **-eq** operator. Use the **-like** operator to find pattern matches in rich types (for example, strings). Use the **-eq** operator to find an exact match.

  When you use the **-like** operator in Exchange Online PowerShell, the wildcard character is supported only as a suffix in **most** parameters. For example, `"Department -like 'sales*'"` is allowed, but `"Department -like '*sales'"` isn't allowed.

  > [!TIP]
  > Even if a wildcard prefix works in a filter parameter in Exchange Online PowerShell, we don't recommend using it due to low performance issues.

- For more information about operators that you can use, see:

  - [about_Logical_Operators](/powershell/module/microsoft.powershell.core/about/about_logical_operators)
  - [about_Comparison_Operators](/powershell/module/microsoft.powershell.core/about/about_comparison_operators)

## Recipient filter documentation

The following table contains links to articles to help you learn more about the filterable properties that you can use with Exchange recipient commands.

|Article|Description|
|---|---|
|[Filterable properties for the RecipientFilter parameter on Exchange cmdlets](recipientfilter-properties.md)|Learn more about the filterable properties that are available for the _RecipientFilter_ parameter.|
|[Filterable properties for the Filter parameter on Exchange cmdlets](filter-properties.md) |Learn more about the filterable properties that are available for the _Filter_ parameter.|
|[Filters in the Exchange Online PowerShell module](filters-v2.md)|Learn about the considerations for filters in the nine exclusive **Get-EXO\*** cmdlets in the Exchange Online PowerShell module.|
