---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
applicable: Exchange Online
title: Get-UnifiedGroup
schema: 2.0.0
---

# Get-UnifiedGroup

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-UnifiedGroup cmdlet to view Office 365 groups in your cloud-based organization. To view members, owners and subscribers for Office 365 groups, use the Get-UnifiedGroupLinks cmdlet.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set2
```
Get-UnifiedGroup [-Anr <String>] [-Filter <String>] [-IncludeSoftDeletedGroups] [-ResultSize <Unlimited>]
 [-SortBy <String>] [<CommonParameters>]
```

### Set1
```
Get-UnifiedGroup [[-Identity] <UnifiedGroupIdParameter>] [-Filter <String>] [-IncludeSoftDeletedGroups]
 [-ResultSize <Unlimited>] [-SortBy <String>] [<CommonParameters>]
```

## DESCRIPTION
Office 365 groups are group objects that are available across Office 365 services.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1
```
Get-UnifiedGroup
```

This example returns a summary list of all Office 365 groups.

### Example 2
```
Get-UnifiedGroup | Format-List DisplayName,EmailAddresses,Notes,ManagedBy,AccessType
```

This example returns the following information about all Office 365 groups:


Display name

Email address

Description

Owners

Privacy

### Example 3
```
Get-UnifiedGroup -Identity "Marketing Department" | Format-List
```

This example returns detailed information about the Office 365 Group named Marketing Department.

## PARAMETERS

### -Anr
This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: Set2
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
The Filter parameter uses OPATH filter syntax to filter the results by the specified properties and values. The search criteria uses the syntax {\<Property\> -\<Comparison operator\> '\<Value\>'}.

- \<Property\> is a filterable property.

- -\<Comparison Operator\> is an OPATH comparison operator. For example -eq for equals and -like for string comparison. For more information about comparison operators, see about\_Comparison\_Operators (https://go.microsoft.com/fwlink/p/?LinkId=620712).

- \<Value\> is the property value. Text values with or without spaces need to be enclosed in quotation marks ('\<Value\>'). Don't use quotation marks with integers or the system values $true, $false, or $null.

You can chain multiple search criteria together using the logical operators -and and -or. For example, {\<Criteria1\>) -and \<Criteria2\>} or {(\<Criteria1\> -and \<Criteria2\>) -or \<Criteria3\>}.

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
The Identity parameter specifies the Office 365 Group that you want to view. You can use any value that uniquely identifies the Office 365 Group.

For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- Email address

- GUID

```yaml
Type: UnifiedGroupIdParameter
Parameter Sets: Set1
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

If you don't use this switch, the values of some properties (for example, CalendarMemeberReadOnly, CalendarUrl, InboxUrl, PeopleUrl, and PhotoUrl) might appear blank.

### -IncludeSoftDeletedGroups
The IncludeSoftDeletedGroups switch specifies whether to include soft-deleted Office 365 groups in the results. You don't need to specify a value with this switch.

This switch is required to return soft-deleted Office 365 groups.

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/9ff9204a-cc18-4e39-9159-1d16314217cd.aspx)

