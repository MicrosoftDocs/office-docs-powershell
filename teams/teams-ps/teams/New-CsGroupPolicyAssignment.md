---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
online version: https://docs.microsoft.com/powershell/module/teams/new-csgrouppolicyassignment
schema: 2.0.0
author: tomkau
ms.author: tomkau
ms.reviewer:
---

# New-CsGroupPolicyAssignment

## SYNOPSIS

This cmdlet is used to assign a policy to a security group or distribution list.

## SYNTAX

```
New-CsGroupPolicyAssignment -GroupId <String> -PolicyType <String> -PolicyName <String> [-Rank <Int>]
```

## DESCRIPTION
This is used to assign a policy to a security group or distribution list.  The policy assignment will then be propagated to the members of the group in accordance with the rules for group policy inheritance.  If a user is directly assigned a policy of a specific type, then they will not inherit a policy of the same type from a group.  If a user is a member of two or more groups that each have a policy of the same type assigned, then the user will inherit the policy based on the group policy assignment with the highest rank.

The group policy assignment rank is set at the time a policy is being assigned to a group and is relative to other group policy assignments of the same policy type.  For example, if there are two groups, each assigned a Teams Meeting policy, then one of the group assignments will be rank 1 while the other will be rank 2.

It’s helpful to think of rank as determining the position of each policy assignment in an ordered list, from highest rank to lowest rank.  In fact, rank can be specified as any number, but these are converted into sequential values 1, 2, 3, etc. with 1 being the highest rank.  When assigning a policy to a group, set the rank to be the position in the list where you want the new group policy assignment to be.  If a rank is not specified, the policy assignment will be given the lowest rank, corresponding to the end of the list.

Group policy assignment allows you to easily manage policies across different subsets of users within your organization. Group policy assignment is recommended for groups of up to 50000 users, but it will also work with larger groups. Group policy assignments are only propagated to users that are direct members of the group; the assignments are not propagated to members of nested groups.

Group policy assignment is currently limited to the following policy types:
TeamsAppSetupPolicy, TeamsCallingPolicy, TeamsCallParkPolicy, TeamsChannelPolicy, TeamsComplianceRecordingPolicy, TeamsEducationAssignmentsAppPolicy, TeamsMeetingBroadcastPolicy, TeamsMeetingPolicy, TeamsMessagingPolicy.

## EXAMPLES

### Example 1
In this example, a policy is assigned to a group specified by object id.

```
New-CsGroupPolicyAssignment -GroupId d8ebfa45-0f28-4d2d-9bcc-b158a49e2d17 -PolicyType TeamsMeetingPolicy -PolicyName AllOn -Rank 1

Get-CsGroupPolicyAssignment -PolicyType TeamsMeetingPolicy

GroupId                              PolicyType         PolicyName Rank CreatedTime           CreatedBy
-------                              ----------         ---------- ---- -----------           ---------
d8ebfa45-0f28-4d2d-9bcc-b158a49e2d17 TeamsMeetingPolicy AllOn      1    10/29/2019 3:57:27 AM aeb7c0e7-2f6d-43ef-bf33-bfbcb93fdc64
```

### Example 2
In this example, a policy is assigned to a group specified by email/SIP address.  The rank is not specified so it will be set to the lowest rank for the given policy type.

```
New-CsGroupPolicyAssignment -GroupId salesdepartment@contoso.com -PolicyType TeamsMeetingPolicy -PolicyName Kiosk

Get-CsGroupPolicyAssignment -PolicyType TeamsMeetingPolicy

GroupId                              PolicyType         PolicyName Rank CreatedTime           CreatedBy
-------                              ----------         ---------- ---- -----------           ---------
d8ebfa45-0f28-4d2d-9bcc-b158a49e2d17 TeamsMeetingPolicy AllOn      1    10/29/2019 3:57:27 AM aeb7c0e7-2f6d-43ef-bf33-bfbcb93fdc64
566b8d39-5c5c-4aaa-bc07-4f36278a1b38 TeamsMeetingPolicy Kiosk      2    11/2/2019 12:14:41 AM aeb7c0e7-2f6d-43ef-bf33-bfbcb93fdc64
```

### Example 3
In this example, the policy assignment rank is set to 2.  The current rank 2 policy assignment of the same type will be updated to rank 3.

```
Get-CsGroupPolicyAssignment -PolicyType TeamsMeetingPolicy

GroupId                              PolicyType         PolicyName Rank CreatedTime           CreatedBy
-------                              ----------         ---------- ---- -----------           ---------
d8ebfa45-0f28-4d2d-9bcc-b158a49e2d17 TeamsMeetingPolicy AllOn      1    10/29/2019 3:57:27 AM aeb7c0e7-2f6d-43ef-bf33-bfbcb93fdc64
566b8d39-5c5c-4aaa-bc07-4f36278a1b38 TeamsMeetingPolicy Kiosk      2    11/2/2019 12:14:41 AM aeb7c0e7-2f6d-43ef-bf33-bfbcb93fdc64

New-CsGroupPolicyAssignment -GroupId e050ce51-54bc-45b7-b3e6-c00343d31274 -PolicyType TeamsMeetingpolicy -PolicyName AllOff -Rank 2

Get-CsGroupPolicyAssignment

GroupId                              PolicyType         PolicyName Rank CreatedTime           CreatedBy
-------                              ----------         ---------- ---- -----------           ---------
d8ebfa45-0f28-4d2d-9bcc-b158a49e2d17 TeamsMeetingPolicy AllOn      1    10/29/2019 3:57:27 AM aeb7c0e7-2f6d-43ef-bf33-bfbcb93fdc64
e050ce51-54bc-45b7-b3e6-c00343d31274 TeamsMeetingPolicy AllOff     2    11/2/2019 12:20:41 AM aeb7c0e7-2f6d-43ef-bf33-bfbcb93fdc64
566b8d39-5c5c-4aaa-bc07-4f36278a1b38 TeamsMeetingPolicy Kiosk      3    11/2/2019 12:14:41 AM aeb7c0e7-2f6d-43ef-bf33-bfbcb93fdc64
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
The type of the policy to be assigned.

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
The name of the policy to be assigned.

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

### -Rank
The rank of the policy assignment, relative to other group policy assignments for the same policy type.

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
For more information, see [About CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Get-CsGroupPolicyAssignment](Get-CsGroupPolicyAssignment.md)

[Set-CsGroupPolicyAssignment](Set-CsGroupPolicyAssignment.md)

[Remove-CsGroupPolicyAssignment](Remove-CsGroupPolicyAssignment.md)

