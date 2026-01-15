---
applicable: Exchange Online, Built-in security add-on for on-premises mailboxes
author: chrisda
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/get-unifiedgroup
schema: 2.0.0
title: Get-UnifiedGroup
---

# Get-UnifiedGroup

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-UnifiedGroup cmdlet to view Microsoft 365 Groups in your cloud-based organization. To view members, owners and subscribers for Microsoft 365 Groups, use the Get-UnifiedGroupLinks cmdlet.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

### Identity (Default)
```
Get-UnifiedGroup [[-Identity] <UnifiedGroupIdParameter>]
 [-Filter <String>]
 [-IncludeAcceptMessagesOnlyFromSendersOrMembersWithDisplayNames]
 [-IncludeAllProperties]
 [-IncludeBypassModerationFromSendersOrMembersWithDisplayNames]
 [-IncludeGrantSendOnBehalfToWithDisplayNames]
 [-IncludeModeratedByWithDisplayNames]
 [-IncludeRejectMessagesFromSendersOrMembersWithDisplayNames]
 [-IncludeSoftDeletedGroups]
 [-ResultSize <Unlimited>]
 [-SortBy <String>]
 [<CommonParameters>]
```

### AnrSet
```
Get-UnifiedGroup [-Anr <String>]
 [-Filter <String>]
 [-IncludeAcceptMessagesOnlyFromSendersOrMembersWithDisplayNames]
 [-IncludeAllProperties]
 [-IncludeBypassModerationFromSendersOrMembersWithDisplayNames]
 [-IncludeGrantSendOnBehalfToWithDisplayNames]
 [-IncludeModeratedByWithDisplayNames]
 [-IncludeRejectMessagesFromSendersOrMembersWithDisplayNames]
 [-IncludeSoftDeletedGroups]
 [-ResultSize <Unlimited>]
 [-SortBy <String>]
 [<CommonParameters>]
```

## DESCRIPTION
Microsoft 365 Groups are group objects that are available across Microsoft 365 services.

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-UnifiedGroup
```

This example returns a summary list of all Microsoft 365 Groups.

### Example 2
```powershell
Get-UnifiedGroup | Format-List DisplayName,EmailAddresses,Notes,ManagedBy,AccessType
```

This example returns the following information about all Microsoft 365 Groups:

- Display name
- Email address
- Description
- Owners
- Privacy

### Example 3
```powershell
Get-UnifiedGroup -Identity "Marketing Department" | Format-List
```

This example returns detailed information about the Microsoft 365 Group named Marketing Department.

### Example 4
```powershell
Get-UnifiedGroup | Where-Object {-Not $_.ManagedBy}
```

This example returns Microsoft 365 Groups that do not have an owner.

### Example 5
```powershell
Get-UnifiedGroup -Filter {ResourceProvisioningOptions -eq "Team"}
```

This example returns Microsoft 365 Groups that are created when a Microsoft Team is created.

## PARAMETERS

### -Identity

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The Identity parameter specifies the Microsoft 365 Group that you want to view. You can use any value that uniquely identifies the Microsoft 365 Group. For example:

- Name
- Alias
- Distinguished name (DN)
- Canonical DN
- Email address
- GUID

**Note**: You can use the DisplayName value to identify the Microsoft 365 Group, but the results aren't guaranteed to be unique. If you must return a singular and unique result, use a unique identifier for the Microsoft 365 Group.

**Caution**: The value $null or a non-existent value for the Identity parameter returns *all* objects as if you ran the Get- command without the Identity parameter. Verify any lists of values for the Identity parameter are accurate and don't contain non-existent $null values.

```yaml
Type: UnifiedGroupIdParameter
Parameter Sets: Identity
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Anr

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: AnrSet
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The Filter parameter uses OPATH syntax to filter the results by the specified properties and values. The search criteria uses the syntax `"Property -ComparisonOperator 'Value'"`.

- Enclose the whole OPATH filter in double quotation marks " ". If the filter contains system values (for example, `$true`, `$false`, or `$null`), use single quotation marks ' ' instead. Although this parameter is a string (not a system block), you can also use braces { }, but only if the filter doesn't contain variables.
- Property is a filterable property. For more information about the filterable properties in Exchange server and Exchange Online, see [Filterable properties for the Filter parameter](https://learn.microsoft.com/powershell/exchange/filter-properties).
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

### -IncludeAcceptMessagesOnlyFromSendersOrMembersWithDisplayNames

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The IncludeAcceptMessagesOnlyFromSendersOrMembersWithDisplayNames switch specifies whether to return the SMTP addresses and display names of AcceptMessagesOnlyFromSendersOrMembers recipients in the AcceptMessagesOnlyFromSendersOrMembersWithDisplayNames property. You don't need to specify a value with this switch.

This switch was introduced to restore human-readable identifiers in the results of the cmdlet. If you don't use this switch, AcceptMessagesOnlyFromSendersOrMembers recipients are shown as GUIDs and the AcceptMessagesOnlyFromSendersOrMembersWithDisplayNames property is empty.

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

### -IncludeAllProperties

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The IncludeAllProperties switch specifies whether to include the values of all properties in the results. You don't need to specify a value with this switch.

If you don't use this switch, the values of some properties (for example, CalendarMemberReadOnly, CalendarUrl, InboxUrl, PeopleUrl, and PhotoUrl) might appear blank.

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

### -IncludeBypassModerationFromSendersOrMembersWithDisplayNames

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The IncludeBypassModerationFromSendersOrMembersWithDisplayNames switch specifies whether to return the SMTP addresses and display names of BypassModerationFromSendersOrMembers recipients in the BypassModerationFromSendersOrMembersWithDisplayNames property. You don't need to specify a value with this switch.

This switch was introduced to restore human-readable identifiers in the results of the cmdlet. If you don't use this switch, BypassModerationFromSendersOrMembers recipients are shown as GUIDs and the BypassModerationFromSendersOrMembersWithDisplayNames property is empty.

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

### -IncludeGrantSendOnBehalfToWithDisplayNames

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The IncludeGrantSendOnBehalfToWithDisplayNames switch specifies whether to return the SMTP addresses and display names of GrantSendOnBehalfTo recipients in the GrantSendOnBehalfToWithDisplayNames property. You don't need to specify a value with this switch.

This switch was introduced to restore human-readable identifiers in the results of the cmdlet. If you don't use this switch, GrantSendOnBehalfTo recipients are shown as GUIDs and the GrantSendOnBehalfToWithDisplayNames property is empty.

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

### -IncludeModeratedByWithDisplayNames

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The IncludeModeratedByWithDisplayNames switch specifies whether to return the SMTP addresses and display names of ModeratedBy recipients in the ModeratedByWithDisplayNames property. You don't need to specify a value with this switch.

This switch was introduced to restore human-readable identifiers in the results of the cmdlet. If you don't use this switch, ModeratedBy recipients are shown as GUIDs and the ModeratedByWithDisplayNames property is empty.

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

### -IncludeRejectMessagesFromSendersOrMembersWithDisplayNames

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The IncludeRejectMessagesFromSendersOrMembersWithDisplayNames switch specifies whether to return the SMTP addresses and display names of RejectMessagesFromSendersOrMembers recipients in the RejectMessagesFromSendersOrMembersWithDisplayNames property. You don't need to specify a value with this switch.

This switch was introduced to restore human-readable identifiers in the results of the cmdlet. If you don't use this switch, ModeratedBy recipients are shown as GUIDs and the RejectMessagesFromSendersOrMembersWithDisplayNames property is empty.

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

### -IncludeSoftDeletedGroups

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The IncludeSoftDeletedGroups switch specifies whether to include soft-deleted Microsoft 365 Groups in the results. You don't need to specify a value with this switch.

Soft-deleted Microsoft 365 Groups are deleted groups that are still recoverable.

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

### -ResultSize

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

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

### -SortBy

> Applicable: Exchange Online, Built-in security add-on for on-premises mailboxes

The SortBy parameter specifies the property to sort the results by. You can sort by only one property at a time. The results are sorted in ascending order.

If the default view doesn't include the property you're sorting by, you can append the command with ` | Format-Table -Auto Property1,Property2,...PropertyX`. to create a new view that contains all of the properties that you want to see. Wildcards (\*) in the property names are supported.

You can sort by the following properties:

- Name
- DisplayName
- Alias

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
