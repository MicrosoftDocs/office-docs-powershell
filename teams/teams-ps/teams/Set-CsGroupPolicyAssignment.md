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

**Note:** This cmdlet will be available soon. In the meantime, to change a group policy assignment you can first remove the current policy assignment from the group and then add a new policy assignment.

This cmdlet is used to update a group policy assignment.

## SYNTAX

```
Set-CsGroupPolicyAssignment -GroupId <String> -PolicyType <String> [-PolicyName <String>] [-Rank <Int>]
```

## DESCRIPTION
This cmdlet will update the policy assignment for a group for a given policy type. The policy instance and/or policy rank can be updated.  Refer to [New-CsGroupPolicyAssignment]() for more details about rank.

## EXAMPLES

### Example 1
In this example, a new policy of the same type is set without changing the rank.

```
Get-CsGroupPolicyAssignment -PolicyType TeamsMeetingPolicy

GroupId                              PolicyType         PolicyName Rank CreatedTime           CreatedBy
-------                              ----------         ---------- ---- -----------           ---------
d8ebfa45-0f28-4d2d-9bcc-b158a49e2d17 TeamsMeetingPolicy AllOn      1    10/29/2019 3:57:27 AM aeb7c0e7-2f6d-43ef-bf33-bfbcb93fdc64
566b8d39-5c5c-4aaa-bc07-4f36278a1b38 TeamsMeetingPolicy Kiosk      2    11/2/2019 12:14:41 AM aeb7c0e7-2f6d-43ef-bf33-bfbcb93fdc64

Set-CsGroupPolicyAssignment -GroupId 566b8d39-5c5c-4aaa-bc07-4f36278a1b38 -PolicyType TeamsMeetingPolicy -PolicyName AllOff

Get-CsGroupPolicyAssignment -PolicyType TeamsMeetingPolicy

GroupId                              PolicyType         PolicyName Rank CreatedTime           CreatedBy
-------                              ----------         ---------- ---- -----------           ---------
d8ebfa45-0f28-4d2d-9bcc-b158a49e2d17 TeamsMeetingPolicy AllOn      1    10/29/2019 3:57:27 AM aeb7c0e7-2f6d-43ef-bf33-bfbcb93fdc64
566b8d39-5c5c-4aaa-bc07-4f36278a1b38 TeamsMeetingPolicy AllOff     2    11/4/2019 9:30:23 AM  aeb7c0e7-2f6d-43ef-bf33-bfbcb93fdc64
```

### Example 2
In this example, the rank of the policy assignment is updated.

```
Set-CsGroupPolicyAssignment -GroupId 566b8d39-5c5c-4aaa-bc07-4f36278a1b38 -PolicyType TeamsMeetingPolicy -Rank 1

Get-CsGroupPolicyAssignment -PolicyType TeamsMeetingPolicy

GroupId                              PolicyType         PolicyName Rank CreatedTime           CreatedBy
-------                              ----------         ---------- ---- -----------           ---------
566b8d39-5c5c-4aaa-bc07-4f36278a1b38 TeamsMeetingPolicy AllOff     1    11/4/2019 9:36:42 AM  aeb7c0e7-2f6d-43ef-bf33-bfbcb93fdc64
d8ebfa45-0f28-4d2d-9bcc-b158a49e2d17 TeamsMeetingPolicy AllOn      2    10/29/2019 3:57:27 AM aeb7c0e7-2f6d-43ef-bf33-bfbcb93fdc64
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

### -Rank
The new rank of the policy assignment, relative to other group policy assignments for the same policy type.

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

[New-CsGroupPolicyAssignment](New-CsGroupPolicyAssignment.md)

[Get-CsGroupPolicyAssignment](Get-CsGroupPolicyAssignment.md)

[Remove-CsGroupPolicyAssignment](Remove-CsGroupPolicyAssignment.md)
