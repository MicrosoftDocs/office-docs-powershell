---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/users-and-groups/get-unifiedgroup
applicable: Exchange Online
title: Get-UnifiedGroup
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchonline-ps"
---

# Get-UnifiedGroup

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-UnifiedGroup cmdlet to view Office 365 Groups in your cloud-based organization. To view members, owners and subscribers for Office 365 Groups, use the Get-UnifiedGroupLinks cmdlet.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-server/exchange-cmdlet-syntax).

## SYNTAX

### Identity (Default)
```
Get-UnifiedGroup [[-Identity] <UnifiedGroupIdParameter>]
 [-Filter <String>]
 [-IncludeAllProperties]
 [-IncludeSoftDeletedGroups]
 [-ResultSize <Unlimited>]
 [-SortBy <String>] [<CommonParameters>]
```

### AnrSet
```
Get-UnifiedGroup [-Anr <String>]
 [-Filter <String>]
 [-IncludeAllProperties]
 [-IncludeSoftDeletedGroups]
 [-ResultSize <Unlimited>]
 [-SortBy <String>] [<CommonParameters>]
```

## DESCRIPTION
Office 365 Groups are group objects that are available across Office 365 services.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://docs.microsoft.com/powershell/exchange/exchange-server/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-UnifiedGroup
```

This example returns a summary list of all Office 365 Groups.

### Example 2
```powershell
Get-UnifiedGroup | Format-List DisplayName,EmailAddresses,Notes,ManagedBy,AccessType
```

This example returns the following information about all Office 365 Groups:

- Display name

- Email address

- Description

- Owners

- Privacy

### Example 3
```powershell
Get-UnifiedGroup -Identity "Marketing Department" | Format-List
```

This example returns detailed information about the Office 365 Group named Marketing Department.

### Example 4
```powershell
Get-UnifiedGroup -IncludeSoftDeletedGroups |?{$_.ManagedBy -eq $null}
```

This example returns Office 365 Groups that do not have an owner.

## PARAMETERS

### -Anr
This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: AnrSet
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
The Filter parameter uses OPath syntax to filter the results by the specified properties and values. The search criteria uses the syntax `"Property -ComparisonOperator 'Value'"`.

- Enclose the whole OPath filter in double quotation marks " ". If the filter contains system values (for example, `$true`, `$false`, or `$null`), use single quotation marks ' ' instead. Although this parameter is a string (not a system block), you can also use braces { }, but only if the filter doesn't contain variables.

- Property is a filterable property. For more information about the filterable properties, see [Filterable properties for the Filter parameter](https://docs.microsoft.com/powershell/exchange/exchange-server/recipient-filters/filter-properties).

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
The Identity parameter specifies the Office 365 Group that you want to view. You can use any value that uniquely identifies the Office 365 Group. For example:

- Name

- Alias

- Distinguished name (DN)

- Canonical DN

- Email address

- GUID

```yaml
Type: UnifiedGroupIdParameter
Parameter Sets: Identity
Aliases:
Applicable: Exchange Online

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -IncludeAllProperties
The IncludeAllProperties switch specifies whether to include the values of all properties in the results. You don't need to specify a value with this switch.

If you don't use this switch, the values of some properties (for example, CalendarMemberReadOnly, CalendarUrl, InboxUrl, PeopleUrl, and PhotoUrl) might appear blank.

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

### -IncludeSoftDeletedGroups
The IncludeSoftDeletedGroups switch specifies whether to include soft-deleted Office 365 groups in the results. You don't need to specify a value with this switch.

Soft-deleted Office 365 groups are deleted groups that are still recoverable.

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

### -SortBy
The SortBy parameter specifies the property to sort the results by. You can sort by only one property at a time. The results are sorted in ascending order.

If the default view doesn't include the property you're sorting by, you can append the command with | Format-Table -Auto \<Property1\>,\<Property2\>... to create a new view that contains all of the properties that you want to see. Wildcards (\*) in the property names are supported.

You can sort by the following properties:

- Name

- DisplayName

- Alias

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  

## OUTPUTS

###  

## NOTES

## RELATED LINKS
