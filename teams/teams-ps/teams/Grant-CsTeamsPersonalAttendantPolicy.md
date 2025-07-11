---
external help file: Microsoft.Rtc.Management.dll-Help.xml
online version: https://learn.microsoft.com/powershell/module/teams/grant-csteamspersonalattendantpolicy
applicable: Microsoft Teams
title: Grant-CsTeamsPersonalAttendantPolicy
schema: 2.0.0
author: juliiva
ms.author: juliiva
ms.reviewer:
manager: jomarque
---

# Grant-CsTeamsPersonalAttendantPolicy

## SYNOPSIS

**Limited Preview:** Functionality described in this document is currently in limited preview and only authorized organizations have access.

Assigns a specific Teams Personal Attendant Policy to a user, a group of users, or sets the Global policy instance.

## SYNTAX

### Identity (Default)
```powershell
Grant-CsTeamsPersonalAttendantPolicy [[-Identity] <string>] 
 [[-PolicyName] <string>] 
 [-PassThru] 
 [<CommonParameters>]
```

### GrantToTenant
```powershell
Grant-CsTeamsPersonalAttendantPolicy [[-PolicyName] <string>] 
 [-PassThru] 
 [-Global] 
 [<CommonParameters>]
```

### GrantToGroup
```powershell
Grant-CsTeamsPersonalAttendantPolicy [-Group] <string> 
 [[-PolicyName] <string>] 
 [-PassThru] 
 [-Rank <int>] 
 [<CommonParameters>]
```

## DESCRIPTION
The Teams Personal Attendant Policies designate how users are able to use personal attendant and its functionalities within Microsoft Teams. This cmdlet allows admins to grant user level policies to individual users, to members of a group, or to set the Global policy instance.

## EXAMPLES

### Example 1
```powershell
Grant-CsTeamsPersonalAttendantPolicy -identity user1@contoso.com -PolicyName SalesPersonalAttendantPolicy
```

Assigns the TeamsPersonalAttendantPolicy called "SalesPersonalAttendantPolicy" to user1@contoso.com

### Example 2
```powershell
Grant-CsTeamsPersonalAttendantPolicy -Global -PolicyName SalesPersonalAttendantPolicy
```

Assigns the TeamsPersonalAttendantPolicy called "SalesPersonalAttendantPolicy" to the Global policy instance. This sets the parameters in the Global policy instance to the values found
in the SalesPersonalAttendantPolicy instance.

### Example 3
```powershell
Grant-CsTeamsPersonalAttendantPolicy -Group sales@contoso.com -Rank 10 -PolicyName SalesPersonalAttendantPolicy
```

Assigns the TeamsPersonalAttendantPolicy called "SalesPersonalAttendantPolicy" to the members of the group sales@contoso.com.

## PARAMETERS

### -Identity
The user object to whom the policy is being assigned.

```yaml
Type: String
Parameter Sets: (Identity)
Aliases:

Required: False
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PolicyName
The name of the policy being assigned. To remove an existing user level policy assignment, specify PolicyName as $null.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PassThru
Enables you to pass a user object through the pipeline that represents the user being assigned the policy. By default, the Grant-CsTeamsPersonalAttendantPolicy cmdlet does not pass objects through the pipeline.

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

### -Global
Sets the parameters of the Global policy instance to the values in the specified policy instance.

```yaml
Type: SwitchParameter
Parameter Sets: (GrantToTenant)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Group
Specifies the group used for the group policy assignment.

```yaml
Type: String
Parameter Sets: (GrantToGroup)
Aliases:

Required: True
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Rank
The rank of the policy assignment, relative to other group policy assignments for the same policy type.

```yaml
Type: Int32
Parameter Sets: (GrantToGroup)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.Object

## NOTES

The cmdlet is available in Teams PowerShell module ?.?.? or later.

## RELATED LINKS

[New-CsTeamsPersonalAttendantPolicy](./new-csteamspersonalattendantpolicy.md)

[Set-CsTeamsPersonalAttendantPolicy](./set-csteamspersonalattendantpolicy.md)

[Get-CsTeamsPersonalAttendantPolicy](./get-csteamspersonalattendantpolicy.md)

[Remove-CsTeamsPersonalAttendantPolicy](./remove-csteamspersonalattendantpolicy.md)


