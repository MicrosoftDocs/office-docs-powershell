---
applicable: Microsoft Teams
author: pavellatif
external help file: Microsoft.Teams.ConfigAPI.Cmdlets-help.xml
Locale: en-US
manager: roykuntz
Module Name: MicrosoftTeams
ms.author: pavellatif
ms.reviewer: pavellatif
online version: https://learn.microsoft.com/powershell/module/microsoftteams/get-csphonenumberpolicyassignment
schema: 2.0.0
title: Get-CsPhoneNumberPolicyAssignment
---

# Get-CsPhoneNumberPolicyAssignment

## SYNOPSIS
This cmdlet retrieves policy assignments associated with a specific telephone number or a list of telephone numbers in Microsoft Teams.

## SYNTAX
Policy assignment for individual telephone number:
```
Get-CsPhoneNumberPolicyAssignment [-TelephoneNumber <String>]
 [<CommonParameters>]
```

Policy assignment info for a list of numbers with specific policy.
```
Get-CsPhoneNumberPolicyAssignment [-PolicyType <String>] [-PolicyName <String>] [-ResultSize <Int32>]
 [<CommonParameters>]
```

## DESCRIPTION
This cmdlet retrieves policy assignments associated with one or more telephone numbers. It supports querying a single telephone number or a list of numbers, with optional filtering by policy type or policy name. This functionality is particularly useful for administrators managing Teams voice configurations, including scenarios with multiline support.

When querying a single telephone number, the cmdlet returns the most recent effective policy assignment. Note that it may take several minutes for newly applied assignments to propagate and appear in the results.

## EXAMPLES

### Example 1
Policy assignment for individual telephone number

```powershell
PS C:\> Get-CsPhoneNumberPolicyAssignment -TelephoneNumber 17789493766
```
```output
TelephoneNumber PolicyType          PolicyName Authority AssignmentType Reference
--------------- ----------          ---------- --------- -------------- ---------
17789493766     TenantDialPlan      PolicyFoo  Tenant    Direct         Direct
17789493766     CallingLineIdentity PolicyBar  Tenant    Direct         Direct
```
This example returns all policy assigned for the specified telephone number.


### Example 2
List of telephone numbers with any policy assigned

```powershell
PS C:\> Get-CsPhoneNumberPolicyAssignment
```
```output
TelephoneNumber PolicyType          PolicyName    Authority AssignmentType Reference
--------------- ----------          ----------    --------- -------------- ---------
1234567         TenantDialPlan      BenTestPolicy Tenant    Direct         Direct
17789493766     TenantDialPlan      PolicyFoo     Tenant    Direct         Direct
17789493766     CallingLineIdentity PolicyBar     Tenant    Direct         Direct
```
This example returns a list of all the telephone numbers in the tenant that have at least one policy assigned.

### Example 3
Policy assignment info for a list of numbers with specific policy type

```powershell
PS C:\> Get-CsPhoneNumberPolicyAssignment -PolicyType TenantDialPlan
```
```output
TelephoneNumber PolicyType     PolicyName    Reference
--------------- ----------     ----------    ---------
1234567         TenantDialPlan BenTestPolicy Direct
17789493766     TenantDialPlan PolicyFoo     Direct
```
This example returns a list of all the telephone numbers in tenant that have TenantDialPlan assigned.

### Example 4
Policy assignment info for a list of numbers filtered by policy type, policy name, and count

```powershell
PS C:\> Get-CsPhoneNumberPolicyAssignment -PolicyType TenantDialPlan -PolicyName PolicyFoo -ResultSize 1
```
```output
TelephoneNumber PolicyType     PolicyName Reference
--------------- ----------     ---------- ---------
17789493766     TenantDialPlan PolicyFoo  Direct
```
This example returns the top 1 telephone number with policy assignment matching the specified type and name.


## PARAMETERS

### -TelephoneNumber
Specifies the telephone number to query.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases: Identity

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PolicyType
Filters results by the type of policy assigned (e.g., TenantDialPlan, CallingLineIdentity etc.).

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PolicyName
Filters results by the name of the policy.
To use this parameter, `-PolicyType` must also be specified.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResultSize
Limits the number of telephone numbers returned in the results.

```yaml
Type: System.Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### TelephoneNumber
The telephone number.

### PolicyType
The type of the policy assigned to the telephone number.

### PolicyName
The name of the policy assigned to the telephone number.

### Reference
Metadata that describes the origin or mechanism of the policy assignment. It helps administrators understand whether a policy was explicitly set or inherited through broader configuration scopes. This cmdlet returns only Direct assignments, which are policies that are explicitly assigned to telephone numbers by a tenant admin.

## NOTES
The cmdlet is available in Teams PowerShell module 7.3.1 or later.
The cmdlet is only available in commercial cloud instances.

## RELATED LINKS

[Set-CsPhoneNumberPolicyAssignment](./set-csphonenumberpolicyassignment.md)