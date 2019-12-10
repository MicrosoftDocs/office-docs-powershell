---
external help file: Microsoft.Exchange.Management.RestApiClient.dll-Help.xml
Module Name: ExchangeOnlineManagement
applicable: Exchange Online
title: Get-EXOMailbox
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer: navgupta
monikerRange: "exchonline-ps"
---

# Get-EXOMailbox

## SYNOPSIS
This cmdlet is available only in the Exchange Online PowerShell V2 module. For more information, see [Use the Exchange Online PowerShell V2 module](https://docs.microsoft.com/powershell/exchange/exchange-online/exchange-online-powershell-v2/exchange-online-powershell-v2).

Use the Get-EXOMailbox cmdlet to view mailbox objects and attributes, populate property pages, or supply mailbox information to other tasks.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-server/exchange-cmdlet-syntax).

## SYNTAX

### Identity (Default)
```
Get-EXOMailbox [[-Identity] <String>]
 [-Archive]
 [-ExternalDirectoryObjectId <Guid>]
 [-Filter <String>]
 [-InactiveMailboxOnly]
 [-IncludeInactiveMailbox]
 [-MailboxPlan <String>]
 [-OrganizationalUnit <String>]
 [-Properties <String[]>]
 [-PropertySets <PropertySet[]>]
 [-RecipientTypeDetails <String[]>]
 [-ResultSize <Unlimited>]
 [-SoftDeletedMailbox]
 [-UserPrincipalName <String>]
 [<CommonParameters>]
```

### Anr
```
Get-EXOMailbox [-Anr <String>]
 [-Archive]
 [-Filter <String>]
 [-InactiveMailboxOnly]
 [-IncludeInactiveMailbox]
 [-MailboxPlan <String>]
 [-OrganizationalUnit <String>]
 [-Properties <String[]>]
 [-PropertySets <PropertySet[]>]
 [-RecipientTypeDetails <String[]>]
 [-ResultSize <Unlimited>]
 [-SoftDeletedMailbox]
 [<CommonParameters>]
```

## DESCRIPTION
By default, this cmdlet returns a summary list (a minimum set of properties) of all mailboxes in your organization.

## EXAMPLES

### Example 1
```powershell
Get-EXOMailbox -ResultSize unlimited
```

This example returns a summary list of all mailboxes in the organization, and includes the default set of minimum output properties. To return additional properties, use the Properties and/or PropertySets parameters.

### Example 2
```powershell
Get-EXOMailbox -PropertySets Archive
```

This example returns the Properties that are defined in Archive property set. For a complete list of these properties, see [Get-EXOMailbox property sets](https://docs.microsoft.com/powershell/exchange/exchange-online/exchange-online-powershell-v2/cmdlet-property-sets#get-exomailbox-property-sets).


### Example 3
```powershell
Get-EXOMailbox -Properties Name,DistinguishedName,Guid -PropertySets Archive,Audit
```

This example returns a summary list of all mailboxes in the organization, and includes the following properties:

- The properties in Archive and Audit property sets.

- The Name and DistinguishedName properties.

### Example 4
```powershell
Get-EXOMailbox -Identity John@contoso.com -Properties DisplayName,EmailAddresses,Alias
```

This example returns the specified properties for the mailbox John@contoso.com.

## PARAMETERS

### -Anr
The Anr parameter specifies a string on which to perform an ambiguous name resolution (ANR) search. You can specify a partial string and search for objects with an attribute that matches that string. The default attributes searched are:

- CommonName (CN)

- DisplayName

- FirstName

- LastName

- Alias

```yaml
Type: String
Parameter Sets: Anr
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Archive
The Archive switch is required to return archive mailboxes in the results. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExternalDirectoryObjectId
The ExternalDirectoryObjectId parameter identifies the mailbox you want to view by using the ObjectId of the mailbox in Azure Active Directory. You can use this value instead of the Identity parameter.

```yaml
Type: Guid
Parameter Sets: Identity
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Filter
The Filter parameter uses OPath syntax to filter the results by the specified properties and values. The search criteria uses the syntax `"Property -ComparisonOperator 'Value'"`.

- Enclose the whole OPath filter in double quotation marks " ". If the filter contains system values (for example, `$true`, `$false`, or `$null`), use single quotation marks ' ' instead. Although this parameter is a string (not a system block), you can also use braces { }, but only if the filter doesn't contain variables.

- Property is a filterable property. For more information about the filterable properties, see [Get-EXOMailbox property sets](https://docs.microsoft.com/powershell/exchange/exchange-online/exchange-online-powershell-v2/cmdlet-property-sets#get-exomailbox-property-sets) and [Filterable properties for the Filter parameter](https://docs.microsoft.com/powershell/exchange/exchange-server/recipient-filters/filter-properties).

- ComparisonOperator is an OPath comparison operator (for example `-eq` for equals and `-like` for string comparison). For more information about comparison operators, see [about_Comparison_Operators](https://go.microsoft.com/fwlink/p/?LinkId=620712).

- Value is the property value to search for. Enclose text values and variables in single quotation marks (`'Value'` or `'$Variable'`). If a variable value contains single quotation marks, you need to identify (escape) the single quotation marks to expand the variable correctly. For example, instead of `'$User'`, use `'$($User -Replace "'","''")'`. Don't enclose integers or system values (for example, `500`, `$true`, `$false`, or `$null`).

You can chain multiple search criteria together using the logical operators `-and` and `-or`. For example, `"Criteria1 -and Criteria2"` or `"(Criteria1 -and Criteria2) -or Criteria3"`.

For detailed information about OPath filters in Exchange, see [Additional OPATH syntax information](https://docs.microsoft.com/powershell/exchange/exchange-server/recipient-filters/recipient-filters#additional-opath-syntax-information).

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The Identity parameter specifies the mailbox you want to view. You can use any value that uniquely identifies the mailbox. For example:

- Email address

- GUID

- External Directory Object ID

- User Principal Name (UPN)

**Note**: This parameter doesn't support Name or Alias values.

You can't use this parameter with the Anr parameter.

```yaml
Type: String
Parameter Sets: Identity
Aliases:
Applicable: Exchange Online

Required: False
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -InactiveMailboxOnly
The InactiveMailboxOnly switch specifies whether to return only inactive mailboxes in the results. You don't need to specify a value with this switch.

An inactive mailbox is a mailbox that's placed on Litigation Hold or In-Place Hold before it's soft-deleted. The contents of an inactive mailbox are preserved until the hold is removed.

To return both active mailboxes and inactive mailboxes in the results, don't use this switch. Instead, use the IncludeInactiveMailbox switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludeInactiveMailbox
The IncludeInactiveMailbox switch specifies whether to include inactive mailboxes in the results. You don't need to specify a value with this switch.

An inactive mailbox is a mailbox that's placed on Litigation Hold or In-Place Hold before it's soft-deleted. The contents of an inactive mailbox are preserved until the hold is removed.

To return only inactive mailboxes in the results, don't use this switch. Instead, use the InactiveMailboxOnly switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MailboxPlan
The MailboxPlan parameter filters the results by mailbox plan. When you use this parameter, only mailboxes that are assigned the specified mailbox plan are returned in the results. You can use any value that uniquely identifies the mailbox plan. For example:

- Name

- Alias

- Display name

- Distinguished name (DN)

- GUID

A mailbox plan specifies the permissions and features available to a mailbox user in cloud-based organizations. You can see the available mailbox plans by using the Get-MailboxPlan cmdlet.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OrganizationalUnit
The OrganizationalUnit parameter filters the results based on the object's location in Active Directory. Only objects that exist in the specified location are returned. Valid input for this parameter is an organizational unit (OU) or domain that's visible using the Get-OrganizationalUnit cmdlet. You can use any value that uniquely identifies the OU or domain. For example:

- Name

- Canonical name

- Distinguished name (DN)

- GUID

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Properties
The Properties parameter specifies the properties that are returned in the output of this cmdlet. You can specify multiple values separated by commas.

For more information about the available properties, see [Get-EXOMailbox property sets](https://docs.microsoft.com/powershell/exchange/exchange-online/exchange-online-powershell-v2/cmdlet-property-sets#get-exomailbox-property-sets).

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PropertySets
The PropertySets parameter specifies a logical grouping of properties that are returned in the output of this cmdlet. Valid values are:

- Minimum (this is the default value)

- AddressList

- Audit

- Archive

- Audit

- Custom

- Delivery

- Hold

- Moderation

- Move

- Policy

- PublicFolder

- Quota

- Resource

- Retention

- SCL

- SoftDelete

- StatisticsSeed

You can specify multiple values separated by commas. Wildcards ( * ) are supported.

For more information about the properties that are included in each property set, see [Get-EXOMailbox property sets](https://docs.microsoft.com/powershell/exchange/exchange-online/exchange-online-powershell-v2/cmdlet-property-sets#get-exomailbox-property-sets).

```yaml
Type: PropertySet[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecipientTypeDetails
The RecipientTypeDetails parameter filters the results by the specified mailbox subtype. Valid values are:

- DiscoveryMailbox

- EquipmentMailbox

- GroupMailbox

- LegacyMailbox

- LinkedMailbox

- LinkedRoomMailbox

- RoomMailbox

- SchedulingMailbox

- SharedMailbox

- TeamMailbox

- UserMailbox

You can specify multiple values separated by commas.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResultSize
The ResultSize parameter specifies the maximum number of results to return. If you want to return all requests that match the query, use unlimited for the value of this parameter. The default value is 1000.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SoftDeletedMailbox
The SoftDeletedMailbox switch is required to return soft-deleted mailboxes in the results. You don't need to specify a value with this switch.

Soft-deleted mailboxes are deleted mailboxes that are still recoverable.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserPrincipalName
The UserPrincipalName parameter specifies the UPN for the mailbox you want to view (for example, navin.contoso.com).

```yaml
Type: String
Parameter Sets: Identity
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  

The following Get-Mailbox parameters aren't available in Get-EXOMailbox:

- PublicFolder

- GroupMailbox

- Migration

- SortBy

- Async


## OUTPUTS

###  
The following properties aren't included in the output of Get-EXOMailbox:

- RunspaceId

- Servername

- AdminDisplayVersion

- DelayReleaseHoldApplied

- EnforcedTimestamps

- Description

- OriginatingServer

- IsValid

- ObjectState

## NOTES

## RELATED LINKS

[Online Version](https://docs.microsoft.com/powershell/module/exchange/powershell-v2-module/get-exomailbox)
