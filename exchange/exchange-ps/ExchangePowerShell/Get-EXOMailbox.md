---
applicable: Exchange Online
author: chrisda
external help file: Microsoft.Exchange.Management.RestApiClient.dll-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchange/get-exomailbox
schema: 2.0.0
title: Get-EXOMailbox
---

# Get-EXOMailbox

## SYNOPSIS
This cmdlet is available only in the Exchange Online PowerShell module. For more information, see [About the Exchange Online PowerShell module](https://aka.ms/exov3-module).

Use the Get-EXOMailbox cmdlet to view mailbox objects and attributes, populate property pages, or supply mailbox information to other tasks.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Identity (Default)
```
Get-EXOMailbox [[-Identity] <String>]
 [-Archive]
 [-Async]
 [-ExternalDirectoryObjectId <Guid>]
 [-Filter <String>]
 [-GroupMailbox]
 [-InactiveMailboxOnly]
 [-IncludeInactiveMailbox]
 [-MailboxPlan <String>]
 [-Migration]
 [-OrganizationalUnit <String>]
 [-PrimarySmtpAddress <String>]
 [-Properties <String[]>]
 [-PropertySets <PropertySet[]>]
 [-PublicFolder]
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
 [-Async]
 [-Filter <String>]
 [-GroupMailbox]
 [-InactiveMailboxOnly]
 [-IncludeInactiveMailbox]
 [-MailboxPlan <String>]
 [-Migration]
 [-OrganizationalUnit <String>]
 [-Properties <String[]>]
 [-PropertySets <PropertySet[]>]
 [-PublicFolder]
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

This example returns the Properties that are defined in Archive property set. For a complete list of these properties, see [Get-EXOMailbox property sets](https://learn.microsoft.com/powershell/exchange/cmdlet-property-sets#get-exomailbox-property-sets).

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

### -Identity

> Applicable: Exchange Online

The Identity parameter specifies the mailbox you want to view. For the best performance, we recommend using the following values:

- User ID or user principal name (UPN)
- GUID

Otherwise, you can use any value that uniquely identifies the mailbox. For example:

- Name
- Alias
- Distinguished name (DN)
- Domain\\Username
- Email address
- LegacyExchangeDN
- SamAccountName

You can't use this parameter with the Anr, ExternalDirectoryObjectId, PrimarySmtpAddress, or UserPrincipalName parameters.

```yaml
Type: String
Parameter Sets: Identity
Aliases:

Required: False
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Anr

> Applicable: Exchange Online

The Anr parameter specifies a string on which to perform an ambiguous name resolution (ANR) search. You can specify a partial string and search for objects with an attribute that matches that string. The default attributes searched are:

- CommonName (CN)
- DisplayName
- FirstName
- LastName
- Alias

You can't use this parameter with the ExternalDirectoryObjectId, Identity, PrimarySmtpAddress, or UserPrincipalName parameters.

```yaml
Type: String
Parameter Sets: Anr
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Archive

> Applicable: Exchange Online

The Archive switch filters the results by mailboxes that have an archive enabled (only mailboxes that have an archive mailbox are returned). You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Async

> Applicable: Exchange Online

This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExternalDirectoryObjectId

> Applicable: Exchange Online

The ExternalDirectoryObjectId parameter identifies the mailbox that you want to view by the ObjectId in Microsoft Entra ID.

You can't use this parameter with the Anr, Identity, PrimarySmtpAddress, or UserPrincipalName parameters.

```yaml
Type: Guid
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Filter

> Applicable: Exchange Online

The Filter parameter uses OPATH syntax to filter the results by the specified properties and values. The search criteria uses the syntax `"Property -ComparisonOperator 'Value'"`.

- Enclose the whole OPATH filter in double quotation marks " ". If the filter contains system values (for example, `$true`, `$false`, or `$null`), use single quotation marks ' ' instead. Although this parameter is a string (not a system block), you can also use braces { }, but only if the filter doesn't contain variables.
- Property is a filterable property. For more information about the filterable properties, see [Get-EXOMailbox property sets](https://learn.microsoft.com/powershell/exchange/cmdlet-property-sets#get-exomailbox-property-sets) and [Filterable properties for the Filter parameter](https://learn.microsoft.com/powershell/exchange/filter-properties).
- ComparisonOperator is an OPATH comparison operator (for example `-eq` for equals and `-like` for string comparison). For more information about comparison operators, see [about_Comparison_Operators](https://learn.microsoft.com/powershell/module/microsoft.powershell.core/about/about_comparison_operators).
- Value is the property value to search for. Enclose text values and variables in single quotation marks (`'Value'` or `'$Variable'`). If a variable value contains single quotation marks, you need to identify (escape) the single quotation marks to expand the variable correctly. For example, instead of `'$User'`, use `'$($User -Replace "'","''")'`. Don't enclose integers or system values in quotation marks (for example, use `500`, `$true`, `$false`, or `$null` instead).

You can chain multiple search criteria together using the logical operators `-and` and `-or`. For example, `"Criteria1 -and Criteria2"` or `"(Criteria1 -and Criteria2) -or Criteria3"`.

For detailed information about OPATH filters in Exchange, see [Additional OPATH syntax information](https://learn.microsoft.com/powershell/exchange/recipient-filters#additional-opath-syntax-information).

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GroupMailbox

> Applicable: Exchange Online

This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InactiveMailboxOnly

> Applicable: Exchange Online

The InactiveMailboxOnly switch specifies whether to return only inactive mailboxes in the results. You don't need to specify a value with this switch.

An inactive mailbox is a mailbox that's placed on Litigation Hold or In-Place Hold before it's soft-deleted. The contents of an inactive mailbox are preserved until the hold is removed.

To return both active mailboxes and inactive mailboxes in the results, don't use this switch. Instead, use the IncludeInactiveMailbox switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IncludeInactiveMailbox

> Applicable: Exchange Online

The IncludeInactiveMailbox switch specifies whether to include inactive mailboxes in the results. You don't need to specify a value with this switch.

An inactive mailbox is a mailbox that's placed on Litigation Hold or In-Place Hold before it's soft-deleted. The contents of an inactive mailbox are preserved until the hold is removed.

To return only inactive mailboxes in the results, don't use this switch. Instead, use the InactiveMailboxOnly switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MailboxPlan

> Applicable: Exchange Online

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

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Migration

> Applicable: Exchange Online

This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OrganizationalUnit

> Applicable: Exchange Online

The OrganizationalUnit parameter filters the results based on the object's location in Active Directory. Only objects that exist in the specified location are returned. Valid input for this parameter is an organizational unit (OU) or domain that's visible using the Get-OrganizationalUnit cmdlet. You can use any value that uniquely identifies the OU or domain. For example:

- Name
- Canonical name
- Distinguished name (DN)
- GUID

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PrimarySmtpAddress

> Applicable: Exchange Online

The PrimarySmtpAddress identifies the mailbox that you want to view by primary SMTP email address (for example, navin@contoso.com).

You can't use this parameter with the Anr, ExternalDirectoryObjectId, Identity, or UserPrincipalName parameters.

```yaml
Type: String
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Properties

> Applicable: Exchange Online

The Properties parameter specifies the properties that are returned in the output of this cmdlet. You can specify multiple values separated by commas.

For more information about the available properties, see [Get-EXOMailbox property sets](https://learn.microsoft.com/powershell/exchange/cmdlet-property-sets#get-exomailbox-property-sets).

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PropertySets

> Applicable: Exchange Online

The PropertySets parameter specifies a logical grouping of properties that are returned in the output of this cmdlet. Valid values are:

- All
- Minimum (this is the default value)
- AddressList
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

You can specify multiple values separated by commas.

For more information about the properties that are included in each property set, see [Get-EXOMailbox property sets](https://learn.microsoft.com/powershell/exchange/cmdlet-property-sets#get-exomailbox-property-sets).

```yaml
Type: PropertySet[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PublicFolder

> Applicable: Exchange Online

This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecipientTypeDetails

> Applicable: Exchange Online

The RecipientTypeDetails parameter filters the results by the specified mailbox subtype. Valid values are:

- DiscoveryMailbox
- EquipmentMailbox
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

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResultSize

> Applicable: Exchange Online

The ResultSize parameter specifies the maximum number of results to return. If you want to return all requests that match the query, use unlimited for the value of this parameter. The default value is 1000.

```yaml
Type: Unlimited
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SoftDeletedMailbox

> Applicable: Exchange Online

The SoftDeletedMailbox switch is required to return soft-deleted mailboxes in the results. You don't need to specify a value with this switch.

Soft-deleted mailboxes are deleted mailboxes that are still recoverable.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserPrincipalName

> Applicable: Exchange Online

The UserPrincipalName parameter identifies the mailbox that you want to view by UPN (for example, navin@contoso.onmicrosoft.com).

You can't use this parameter with the Anr, ExternalDirectoryObjectId, Identity or PrimarySmtpAddress parameters.

```yaml
Type: String
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

### Input types

The following Get-Mailbox parameters aren't available or functional in Get-EXOMailbox:

- Async
- GroupMailbox
- Migration
- PublicFolder
- SortBy

## OUTPUTS

### Output types
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
