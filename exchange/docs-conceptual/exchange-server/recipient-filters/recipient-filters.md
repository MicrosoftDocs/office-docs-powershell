---
title: "Recipient filters in Exchange Management Shell commands"
ms.author: chrisda
author: chrisda
manager: serdars
ms.date: 3/17/2017
ms.audience: ITPro
ms.topic: reference
ms.prod: exchange-server-itpro
localization_priority: Normal
ms.assetid: fb4b1396-9aae-4037-be1a-b09e336b890e
description: "Learn about creating different kinds of recipient filters in the Exchange Management Shell."
---

# Recipient filters in Exchange Management Shell commands
You can use several Exchange Management Shell commands to filter a set of recipients. You can create the following types of filters in an Exchange command:

- Precanned filters

- Custom filters using the _RecipientFilter_ parameter

- Custom filters using the _Filter_ parameter

- Custom filters using the _ContentFilter_ parameter

Older versions of Exchange used LDAP filtering syntax to create custom address lists, global address lists (GALs), email address policies, and distribution groups. In Exchange Server 2007 and later versions, OPATH filtering syntax replaced LDAP filtering syntax. 

## Precanned filters
A precanned filter is a commonly used Exchange filter that you can use to meet a variety of recipient-filtering criteria for creating dynamic distribution groups, email address policies, address lists, or GALs. With precanned filters, you can use either the Exchange Management Shell or the Exchange admin center (EAC). Using precanned filters, you can do the following:

- Determine the scope of recipients.

- Add conditional filtering based on properties such as company, department, and state or region.

- Add custom attributes for recipients. For more information, see [Custom Attributes](https://technet.microsoft.com/library/2b043878-0b34-4563-a9c2-28a9efa7447e.aspx).

The following parameters are considered precanned filters:

- _IncludedRecipients_

- _ConditionalCompany_

- _ConditionalDepartment_

- _ConditionalStateOrProvince_

- _ConditionalCustomAttribute1_ to _ConditionalCustomAttribute15_.

Precanned filters are available for the following cmdlets:

- [New-DynamicDistributionGroup](../../../exchange-ps/exchange/users-and-groups/new-dynamicdistributiongroup.md)

- [Set-DynamicDistributionGroup](../../../exchange-ps/exchange/users-and-groups/set-dynamicdistributiongroup.md)

- [New-EmailAddressPolicy](../../../exchange-ps/exchange/email-addresses-and-address-books/new-emailaddresspolicy.md)

- [Set-EmailAddressPolicy](../../../exchange-ps/exchange/email-addresses-and-address-books/set-emailaddresspolicy.md)

- [New-AddressList](../../../exchange-ps/exchange/email-addresses-and-address-books/new-addresslist.md)

- [Set-AddressList](../../../exchange-ps/exchange/email-addresses-and-address-books/set-addresslist.md)

- [New-GlobalAddressList](../../../exchange-ps/exchange/email-addresses-and-address-books/new-globaladdresslist.md)

- [Set-GlobalAddressList](../../../exchange-ps/exchange/email-addresses-and-address-books/set-globaladdresslist.md)

### Example

This example describes using precanned filters in the Exchange Management Shell to create a dynamic distribution group. The syntax in this example is similar but not identical to the syntax you would use to create an email address policy, address list, or GAL. When creating a precanned filter, you should ask the following questions: 

- From which organizational unit (OU) do you want to include recipients? (This question corresponds to the _RecipientContainer_ parameter.)

> [!NOTE]
> Selecting the OU for this purpose applies only when creating dynamic distribution groups, and not when creating email address policies, address lists, or GALs. 

- What type of recipients do you want to include? (This question corresponds to the _IncludedRecipients_ parameter.)

- What additional conditions do you want to include in the filter? (This question corresponds to the _ConditionalCompany_, _ConditionalDepartment_, _ConditionalStateOrProvince_, and _ConditionalCustomAttribute_ parameters.)

This example creates the dynamic distribution group Contoso Finance for user mailboxes in the OU Contoso.com/Users and specifies the condition to include only recipients who have the **Department** attribute defined as Finance and the **Company** attribute defined as Contoso.

```
New-DynamicDistributionGroup -Name "Contoso Finance" -OrganizationalUnit Contoso.com/Users -RecipientContainer Contoso.com/Users -IncludedRecipients MailboxUsers -ConditionalDepartment "Finance" -ConditionalCompany "Contoso"
```

This example displays the properties of this new dynamic distribution group.

```
Get-DynamicDistributionGroup -Identity "Contoso Finance" | Format-List Recipient*,Included*
```

## Custom filters using the RecipientFilter parameter
If precanned filters don't meet your needs for creating or modifying dynamic distribution groups, email address policies, and address lists, you can create a custom filter by using the _RecipientFilter_ parameter.

The recipient filter parameter is available for the following cmdlets:

- [New-DynamicDistributionGroup](../../../exchange-ps/exchange/users-and-groups/new-dynamicdistributiongroup.md)

- [Set-DynamicDistributionGroup](../../../exchange-ps/exchange/users-and-groups/set-dynamicdistributiongroup.md)

- [New-EmailAddressPolicy](../../../exchange-ps/exchange/email-addresses-and-address-books/new-emailaddresspolicy.md)

- [Set-EmailAddressPolicy](../../../exchange-ps/exchange/email-addresses-and-address-books/set-emailaddresspolicy.md)

- [New-AddressList](../../../exchange-ps/exchange/email-addresses-and-address-books/new-addresslist.md)

- [Set-AddressList](../../../exchange-ps/exchange/email-addresses-and-address-books/set-addresslist.md)

- [New-GlobalAddressList](../../../exchange-ps/exchange/email-addresses-and-address-books/new-globaladdresslist.md)

- [Set-GlobalAddressList](../../../exchange-ps/exchange/email-addresses-and-address-books/set-globaladdresslist.md)

For more information about the filterable properties you can use with the _RecipientFilter_ parameter, see [Filterable properties for the RecipientFilter parameter](recipientfilter-properties.md).

### Example

The following example uses the _RecipientFilter_ parameter to create a dynamic distribution group. The syntax in this example is similar but not identical to the syntax you use to create an email address policy, address list, or GAL.

This example uses custom filters to create a dynamic distribution group for user mailboxes that have the **Company** attribute defined as Contoso and the **Office** attribute defined as North Building.

```
New-DynamicDistributionGroup -Name AllContosoNorth -OrganizationalUnit contoso.com/Users -RecipientFilter { ((RecipientType -eq 'UserMailbox') -and (Company -eq 'Contoso') -and (Office -eq 'North Building')) }
```

## Custom filters using the Filter parameter
You can use the _Filter_ parameter to filter the results of a command to specify which objects to retrieve. For example, instead of retrieving all users or groups, you can specify a set of users or groups by using a filter string. This type of filter doesn't modify any configuration or attributes of objects. It only modifies the set of objects that the command returns.

Using the _Filter_ parameter to modify command results is known as server-side filtering. Server-side filtering submits the command and the filter to the server for processing. The Exchange Management Shell also supports client-side filtering, in which the command retrieves all objects from the server and then applies the filter in the local console window. To perform client-side filtering, use the **Where-Object** cmdlet. For more information about server-side and client-side filtering, see "How to Filter Data" in [Working with Command Output](https://technet.microsoft.com/library/8320e1a5-d3f5-4615-878d-b23e2aaa6b1e.aspx).

To find the filterable properties for cmdlets that have the _Filter_ parameter, you can run the **Get** command against an object and format the output by pipelining the **Format-List** parameter. Most of the returned values will be available for use in the _Filter_ parameter. The following example returns a detailed list for the mailbox Ayla.

```
Get-Mailbox -Identity Ayla | Format-List
```

The _Filter_ parameter is available for the following recipient cmdlets:

- [Get-CASMailbox](../../../exchange-ps/exchange/client-access/get-casmailbox.md)

- [Get-Contact](../../../exchange-ps/exchange/users-and-groups/get-contact.md)

- [Get-DistributionGroup](../../../exchange-ps/exchange/users-and-groups/get-distributiongroup.md)

- [Get-DynamicDistributionGroup](../../../exchange-ps/exchange/users-and-groups/get-dynamicdistributiongroup.md)

- [Get-Group](../../../exchange-ps/exchange/users-and-groups/get-group.md)

- [Get-Mailbox](../../../exchange-ps/exchange/mailboxes/get-mailbox.md)

- [Get-MailContact](../../../exchange-ps/exchange/users-and-groups/get-mailcontact.md)

- [Get-MailPublicFolder](../../../exchange-ps/exchange/sharing-and-collaboration/get-mailpublicfolder.md)

- [Get-MailUser](../../../exchange-ps/exchange/users-and-groups/get-mailuser.md)

- [Get-Recipient](../../../exchange-ps/exchange/users-and-groups/get-recipient.md)

- [Get-RemoteMailbox](../../../exchange-ps/exchange/federation-and-hybrid/get-remotemailbox.md)

- [Get-SecurityPrincipal](../../../exchange-ps/exchange/users-and-groups/get-securityprincipal.md)

- [Get-UMMailbox](../../../exchange-ps/exchange/unified-messaging/get-ummailbox.md)

- [Get-User](../../../exchange-ps/exchange/users-and-groups/get-user.md)

For more information about the filterable properties you can use with the _Filter_ parameter, see [Filterable properties for the Filter parameter](filter-properties.md).

### Example

This example uses the _Filter_ parameter to return information about users whose title contains the word "manager".

```
Get-User -Filter {Title -like 'Manager*'}
```

## Custom filters using the ContentFilter parameter
You can use the _ContentFilter_ parameter to select specific message content to export when using the [New-MailboxExportRequest](../../../exchange-ps/exchange/mailboxes/new-mailboxexportrequest.md) cmdlet. If the command finds a message that contains the match to the content filter, it exports the message to a .pst file.

### Example
This example creates an export request that searches Ayla's mailbox for messages where the body contains the phrase "company prospectus". If that phrase is found, the command exports all messages with that phrase to a .pst file.

```
New-MailboxExportRequest -Mailbox Ayla -ContentFilter {Body -like "company prospectus*"}
```

For more information about the filterable properties you can use with the _ContentFilter_ parameter, see [Filterable Properties for the ContentFilter Parameter](https://technet.microsoft.com/library/cf504a59-1938-489c-bb48-b27b2ac3234e.aspx).

## Additional OPATH syntax information
When creating your own custom filters, be aware of the following:

- Use braces { } around the entire OPATH filter string with the _Filter_ or _RecipientFilter_ parameters.

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

- Many of the properties for the _RecipientFilter_ and _Filter_ parameters accept wildcard characters. If you use a wildcard character, use the **like** operator instead of the **eq** operator. The **like** operator is used to find pattern matches in rich types, such as strings, whereas the **eq** operator is used to find an exact match.

- For more information about operators you can use, see:

  - [About Logical Operators](https://technet.microsoft.com/library/hh847789.aspx)

  - [About Comparison Operators](https://technet.microsoft.com/library/hh847759.aspx)

## Recipient filter documentation
The following table contains links to topics that will help you learn more about the filterable properties that you can use with Exchange recipient commands.

|**Topic**|**Description**|
|:-----|:-----|
|[Filterable properties for the RecipientFilter parameter](recipientfilter-properties.md) |Learn more about the filterable properties for the _RecipientFilter_ parameter. |
|[Filterable properties for the Filter parameter](filter-properties.md) |Learn more about the filterable properties for the _Filter_ parameter. |