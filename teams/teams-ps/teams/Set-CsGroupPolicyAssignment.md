---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
online version: https://docs.microsoft.com/powershell/module/teams/set-csgrouppolicyassignment
schema: 2.0.0
author: tomkau
ms.author: tomkau
ms.reviewer:
---

# Set-CsGroupPolicyAssignment

## SYNOPSIS
NOTE: This cmdlet is currently only available in limited preview in the pre-release Teams PowerShell module.

This cmdlet is update a group policy assignment.

## SYNTAX

```
Set-CsGroupPolicyAssignment -GroupId <String> -PolicyType <String> [-PolicyName <String>] [-Priority <Int>]
```

## DESCRIPTION
This cmdlet will update the policy assignment for a group for a given policy type. The policy instance and/or policy priority can be updated.  Refer to [New-CsGroupPolicyAssignment]() for more details about priority.

## EXAMPLES

### Example 1
In this example, a new policy of the same type is set without changing the priority.

```
Get-CsGroupPolicyAssignment -PolicyType TeamsMeetingPolicy

GroupId                              PolicyName PolicyType         Priority
-------                              ---------- ----------         --------
d8ebfa45-0f28-4d2d-9bcc-b158a49e2d17 Host:AllOn TeamsMeetingPolicy 1
566b8d39-5c5c-4aaa-bc07-4f36278a1b38 Host:Kiosk TeamsMeetingPolicy 2

Set-CsGroupPolicyAssignment -GroupId d8ebfa45-0f28-4d2d-9bcc-b158a49e2d17 -PolicyType TeamsMeetingPolicy -PolicyName AllOff

Get-CsGroupPolicyAssignment -PolicyType TeamsMeetingPolicy

GroupId                              PolicyName  PolicyType         Priority
-------                              ----------  ----------         --------
d8ebfa45-0f28-4d2d-9bcc-b158a49e2d17 Host:AllOff TeamsMeetingPolicy 1
566b8d39-5c5c-4aaa-bc07-4f36278a1b38 Host:Kiosk  TeamsMeetingPolicy 2
```

### Example 2
In this example, the priority of the policy assignment is updated.

```
Set-CsGroupPolicyAssignment -GroupId d8ebfa45-0f28-4d2d-9bcc-b158a49e2d17 -PolicyType TeamsMeetingPolicy -Priority 2

Get-CsGroupPolicyAssignment -PolicyType TeamsMeetingPolicy

GroupId                              PolicyName  PolicyType         Priority
-------                              ----------  ----------         --------
566b8d39-5c5c-4aaa-bc07-4f36278a1b38 Host:Kiosk  TeamsMeetingPolicy 1
d8ebfa45-0f28-4d2d-9bcc-b158a49e2d17 Host:AllOff TeamsMeetingPolicy 2
```

## PARAMETERS

### -GroupId
The ID of a batch policy assignment operation.

```yaml
Type: String
Parameter Sets:
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PolicyType
The type of the policy assigned.

```yaml
Type: String
Parameter Sets:
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PolicyName
The of the new policy to be assigned.

```yaml
Type: String
Parameter Sets:
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Priority
The new priority of the policy assignment, relative to other group policy assignments for the same policy type.

```yaml
Type: String
Parameter Sets:
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable.
For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Get-CsGroupPolicyAssignment]()

[Set-CsGroupPolicyAssignment]()

[Remove-CsGroupPolicyAssignment]()

