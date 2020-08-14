---
title: "Recipient filters in Exchange PowerShell commands"
ms.author: chrisda
author: chrisda
manager: dansimp
ms.date:
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: fb4b1396-9aae-4037-be1a-b09e336b890e
description: "Learn about creating different kinds of recipient filters in the Exchange Management Shell and Exchange Online PowerShell."
---

# Recipient filters in Exchange PowerShell commands

You can use several Exchange Management Shell and Exchange Online PowerShell commands to filter a set of recipients. You can create the following types of filters in an Exchange command:

- Precanned filters

- Custom filters using the _RecipientFilter_ parameter

- Custom filters using the _Filter_ parameter

- Custom filters using the _ContentFilter_ parameter

Older versions of Exchange used LDAP filtering syntax to create custom address lists, global address lists (GALs), email address policies, and distribution groups. In Exchange Server 2007 and later versions, OPATH filtering syntax replaced LDAP filtering syntax.

## Precanned filters

A precanned filter is a commonly used Exchange filter that you can use to meet a variety of recipient-filtering criteria for creating dynamic distribution groups, email address policies, address lists, or GALs. With precanned filters, you can use either the Exchange PowerShell or the Exchange admin center (EAC). Using precanned filters, you can do the following:

- Determine the scope of recipients.

- Add conditional filtering based on properties such as company, department, and state or region.

- Add custom attributes for recipients. For more information, see [Custom Attributes](https://docs.microsoft.com/Exchange/recipients/mailbox-custom-attributes).

The following parameters are considered precanned filters:

- _IncludedRecipients_

- _ConditionalCompany_

- _ConditionalDepartment_

- _ConditionalStateOrProvince_

- _ConditionalCustomAttribute1_ to _ConditionalCustomAttribute15_.

Precanned filters are available for the following cmdlets:

- [New-DynamicDistributionGroup](https://docs.microsoft.com/powershell/module/exchange/new-dynamicdistributiongroup)

- [Set-DynamicDistributionGroup](https://docs.microsoft.com/powershell/module/exchange/set-dynamicdistributiongroup)

- [New-EmailAddressPolicy](https://docs.microsoft.com/powershell/module/exchange/new-emailaddresspolicy)

- [Set-EmailAddressPolicy](https://docs.microsoft.com/powershell/module/exchange/set-emailaddresspolicy)

- [New-AddressList](https://docs.microsoft.com/powershell/module/exchange/new-addresslist)

- [Set-AddressList](https://docs.microsoft.com/powershell/module/exchange/set-addresslist)

- [New-GlobalAddressList](https://docs.microsoft.com/powershell/module/exchange/new-globaladdresslist)

- [Set-GlobalAddressList](https://docs.microsoft.com/powershell/module/exchange/set-globaladdresslist)

### Precanned filter example

This example describes using precanned filters in the Exchange Management Shell to create a dynamic distribution group. The syntax in this example is similar but not identical to the syntax you would use to create an email address policy, address list, or GAL. When creating a precanned filter, you should ask the following questions:

- From which organizational unit (OU) do you want to include recipients? (This question corresponds to the _RecipientContainer_ parameter.)

> [!NOTE]
> Selecting the OU for this purpose applies only when creating dynamic distribution groups, and not when creating email address policies, address lists, or GALs.

- What type of recipients do you want to include? (This question corresponds to the _IncludedRecipients_ parameter.)

- What additional conditions do you want to include in the filter? (This question corresponds to the _ConditionalCompany_, _ConditionalDepartment_, _ConditionalStateOrProvince_, and _ConditionalCustomAttribute_ parameters.)

This example creates the dynamic distribution group Contoso Finance for user mailboxes in the OU Contoso.com/Users and specifies the condition to include only recipients who have the **Department** attribute defined as Finance and the **Company** attribute defined as Contoso.

```PowerShell
New-DynamicDistributionGroup -Name "Contoso Finance" -OrganizationalUnit Contoso.com/Users -RecipientContainer Contoso.com/Users -IncludedRecipients MailboxUsers -ConditionalDepartment "Finance" -ConditionalCompany "Contoso"
```

This example displays the properties of this new dynamic distribution group.

```PowerShell
Get-DynamicDistributionGroup -Identity "Contoso Finance" | Format-List Recipient*,Included*
```

## Custom filters using the RecipientFilter parameter

If precanned filters don't meet your needs for creating or modifying dynamic distribution groups, email address policies, and address lists, you can create a custom filter by using the _RecipientFilter_ parameter.

The recipient filter parameter is available for the following cmdlets:

- [New-DynamicDistributionGroup](https://docs.microsoft.com/powershell/module/exchange/new-dynamicdistributiongroup)

- [Set-DynamicDistributionGroup](https://docs.microsoft.com/powershell/module/exchange/set-dynamicdistributiongroup)

- [New-EmailAddressPolicy](https://docs.microsoft.com/powershell/module/exchange/new-emailaddresspolicy)

- [Set-EmailAddressPolicy](https://docs.microsoft.com/powershell/module/exchange/set-emailaddresspolicy)

- [New-AddressList](https://docs.microsoft.com/powershell/module/exchange/new-addresslist)

- [Set-AddressList](https://docs.microsoft.com/powershell/module/exchange/set-addresslist)

- [New-GlobalAddressList](https://docs.microsoft.com/powershell/module/exchange/new-globaladdresslist)

- [Set-GlobalAddressList](https://docs.microsoft.com/powershell/module/exchange/set-globaladdresslist)

For more information about the filterable properties you can use with the _RecipientFilter_ parameter, see [Filterable properties for the RecipientFilter parameter](recipientfilter-properties.md).

### Custom filter example

The following example uses the _RecipientFilter_ parameter to create a dynamic distribution group. The syntax in this example is similar but not identical to the syntax you use to create an email address policy, address list, or GAL.

This example uses custom filters to create a dynamic distribution group for user mailboxes that have the **Company** attribute defined as Contoso and the **Office** attribute defined as North Building.

```PowerShell
New-DynamicDistributionGroup -Name AllContosoNorth -OrganizationalUnit contoso.com/Users -RecipientFilter "((RecipientType -eq 'UserMailbox') -and (Company -eq 'Contoso') -and (Office -eq 'North Building'))"
```

## Custom filters using the Filter parameter

You can use the _Filter_ parameter to filter the results of a command to specify which objects to retrieve. For example, instead of retrieving all users or groups, you can specify a set of users or groups by using a filter string. This type of filter doesn't modify any configuration or attributes of objects. It only modifies the set of objects that the command returns.

Using the _Filter_ parameter to modify command results is known as server-side filtering. Server-side filtering submits the command and the filter to the server for processing. We also support client-side filtering, in which the command retrieves all objects from the server and then applies the filter in the local console window. To perform client-side filtering, use the **Where-Object** cmdlet. For more information about server-side and client-side filtering, see "How to Filter Data" in [Working with Command Output](https://docs.microsoft.com/exchange/working-with-command-output-exchange-2013-help).

To find the filterable properties for cmdlets that have the _Filter_ parameter, you can run the **Get** command against an object and format the output by pipelining the **Format-List** parameter. Most of the returned values will be available for use in the _Filter_ parameter. The following example returns a detailed list for the mailbox Ayla.

```PowerShell
Get-Mailbox -Identity Ayla | Format-List
```

The _Filter_ parameter is available for the following recipient cmdlets:

- [Get-CASMailbox](https://docs.microsoft.com/powershell/module/exchange/get-casmailbox)

- [Get-Contact](https://docs.microsoft.com/powershell/module/exchange/get-contact)

- [Get-DistributionGroup](https://docs.microsoft.com/powershell/module/exchange/get-distributiongroup)

- [Get-DynamicDistributionGroup](https://docs.microsoft.com/powershell/module/exchange/get-dynamicdistributiongroup)

- [Get-Group](https://docs.microsoft.com/powershell/module/exchange/get-group)

- [Get-Mailbox](https://docs.microsoft.com/powershell/module/exchange/get-mailbox)

- [Get-MailContact](https://docs.microsoft.com/powershell/module/exchange/get-mailcontact)

- [Get-MailPublicFolder](https://docs.microsoft.com/powershell/module/exchange/get-mailpublicfolder)

- [Get-MailUser](https://docs.microsoft.com/powershell/module/exchange/get-mailuser)

- [Get-Recipient](https://docs.microsoft.com/powershell/module/exchange/get-recipient)

- [Get-RemoteMailbox](https://docs.microsoft.com/powershell/module/exchange/get-remotemailbox)

- [Get-SecurityPrincipal](https://docs.microsoft.com/powershell/module/exchange/get-securityprincipal)

- [Get-UMMailbox](https://docs.microsoft.com/powershell/module/exchange/get-ummailbox)

- [Get-User](https://docs.microsoft.com/powershell/module/exchange/get-user)

- [Get-UnifiedGroup](https://docs.microsoft.com/powershell/module/exchange/get-unifiedgroup)

For more information about the filterable properties you can use with the _Filter_ parameter, see [Filterable properties for the Filter parameter](filter-properties.md).

### Example

This example uses the _Filter_ parameter to return information about users whose title contains the word "manager".

```PowerShell
Get-User -Filter "Title -like 'Manager*'"
```

## Custom filters using the ContentFilter parameter

You can use the _ContentFilter_ parameter to select specific message content to export when using the [New-MailboxExportRequest](https://docs.microsoft.com/powershell/module/exchange/new-mailboxexportrequest) cmdlet. If the command finds a message that contains the match to the content filter, it exports the message to a .pst file.

### ContentFilter parameter example

This example creates an export request that searches Ayla's mailbox for messages where the body contains the phrase "company prospectus". If that phrase is found, the command exports all messages with that phrase to a .pst file.

```PowerShell
New-MailboxExportRequest -Mailbox Ayla -ContentFilter "Body -like 'company prospectus*'"
```

For more information about the filterable properties that you can use with the _ContentFilter_ parameter, see [Filterable properties for the ContentFilter parameter](https://docs.microsoft.com/exchange/filterable-properties-for-the-contentfilter-parameter).

## Additional OPATH syntax information

When creating your own custom OPath filters, consider the following items:

- Use the following syntax to identify the types of values that you're searching for:

  - **Text values**: Enclose the text in single quotation marks (for example, `'Value'` or `'Value with spaces'`). Or, you can enclose a text value in double quotation marks, but that limits the characters you can use to enclose the whole OPath filter.

  - **Variables**: Enclose variables that need to be expanded in single quotation marks (for example, `'$User'`). If the variable value itself contains single quotation marks, you need to identify (escape) the single quotation marks to expand the variable correctly. For example, instead of `'$User'`, use `'$($User -Replace "'","''")'`.

  - **Integer values**: You don't need to enclose integers (for example, `500`). You can often enclose integers in single quotation marks or double quotation marks, but that limits the characters you can use to enclose the whole OPath filter.

  - **System values**: Don't enclose system values (for example, `$true`, `$false`, or `$null`). To enclose the whole OPath filter in double quotation marks, you need to escape the dollar sign in system value (for example, `` `$true``).

- You need to enclose the whole OPath filter in double quotation marks " or " single quotation marks ' '. Although any OPath filter object is technically a string and not a script block, you can still use braces { }, but only if the filter doesn't contain variables that require expansion. The characters that you can use to enclose the whole OPath filter depend on types of values that you're searching for and the characters you used (or didn't use) to enclose those values:

  - **Text values**: Depends on how you enclosed the text to search for:
  
    - **Text enclosed in single quotation marks**: Enclose the whole OPath filter in double quotation marks or braces.

    - **Text enclosed in double quotation marks**: Enclose the whole OPath filter in braces.

  - **Variables**: Enclose the whole OPath filter in double quotation marks (for example, `"Name -eq '$User'"`).

  - **Integer values**: Depends on how you enclosed (or didn't enclose) the integer to search for:

    - **Integer not enclosed**: Enclose the whole OPath filter in double quotation marks, single quotation marks, or braces (for example `"CountryCode -eq 840"`).

    - **Integer enclosed in single quotation marks**: Enclose the whole OPath filter in double quotation marks or braces `"CountryCode -eq '840'"`.

    - **Integer enclosed in double quotation marks**: Enclose the whole OPath filter in braces (for example `{CountryCode -eq "840"}`).

  - **System values**: Enclose the whole OPath filter in single quotation marks or braces (for example `'HiddenFromAddressListsEnabled -eq $true'`). If you escape the dollar sign system value, you can also enclose the whole OPath filter in double quotation marks (for example, ``"HiddenFromAddressListsEnabled -eq `$true"``).

  The compatibility of search criteria and the valid characters that you can use to enclose the whole OPath filter are summarized in the following table:

  |**Search value**|**OPath filter enclosed <br/> in double quotation marks**|**OPath filter enclosed <br/> in single quotation marks**|**OPath filter enclosed <br/> in braces**|
  |:-----|:-----:|:-----:|:-----:|
  |`'Text'`|![Check mark](media/f3b4c351-17d9-42d9-8540-e48e01779b31.png)||![Check mark](media/f3b4c351-17d9-42d9-8540-e48e01779b31.png)|
  |`"Text"`|||![Check mark](media/f3b4c351-17d9-42d9-8540-e48e01779b31.png)|
  |`'$Variable'`|![Check mark](media/f3b4c351-17d9-42d9-8540-e48e01779b31.png)|||
  |`500`|![Check mark](media/f3b4c351-17d9-42d9-8540-e48e01779b31.png)|![Check mark](media/f3b4c351-17d9-42d9-8540-e48e01779b31.png)|![Check mark](media/f3b4c351-17d9-42d9-8540-e48e01779b31.png)|
  |`'500'`|![Check mark](media/f3b4c351-17d9-42d9-8540-e48e01779b31.png)||![Check mark](media/f3b4c351-17d9-42d9-8540-e48e01779b31.png)|
  |`"500"`|||![Check mark](media/f3b4c351-17d9-42d9-8540-e48e01779b31.png)|
  |`$true`||![Check mark](media/f3b4c351-17d9-42d9-8540-e48e01779b31.png)|![Check mark](media/f3b4c351-17d9-42d9-8540-e48e01779b31.png)|
  |`` `$true``|![Check mark](media/f3b4c351-17d9-42d9-8540-e48e01779b31.png)|![Check mark](media/f3b4c351-17d9-42d9-8540-e48e01779b31.png)|![Check mark](media/f3b4c351-17d9-42d9-8540-e48e01779b31.png)|

- Include the hyphen before all operators. The most common operators include:

  - **-and**

  - **-or**

  - **-not**

  - **-eq** (equals)

  - **-ne** (not equal)

  - **-lt** (less than)

  - **-gt** (greater than)

  - **-like** (string comparison)

  - **-notlike** (string comparison)

- Many filterable properties accept wildcard characters. If you use a wildcard character, use the **-like** operator instead of the **-eq** operator. The **-like** operator is used to find pattern matches in rich types (for example, strings) whereas the **-eq** operator is used to find an exact match.

- For more information about operators you can use, see:

  - [about_Logical_Operators](https://docs.microsoft.com/powershell/module/microsoft.powershell.core/about/about_logical_operators)

  - [about_Comparison_Operators](https://docs.microsoft.com/powershell/module/microsoft.powershell.core/about/about_comparison_operators)

## Recipient filter documentation

The following table contains links to topics that will help you learn more about the filterable properties that you can use with Exchange recipient commands.

|**Topic**|**Description**|
|:-----|:-----|
|[Filterable properties for the RecipientFilter parameter](recipientfilter-properties.md)|Learn more about the filterable properties that are available for the _RecipientFilter_ parameter.|
|[Filterable properties for the Filter parameter](filter-properties.md) |Learn more about the filterable properties that are available for the _Filter_ parameter.|
