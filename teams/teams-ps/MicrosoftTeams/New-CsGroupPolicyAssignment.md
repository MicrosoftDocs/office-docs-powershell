---
author: tomkau
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Locale: en-US
Module Name: MicrosoftTeams
ms.author: tomkau
ms.reviewer: williamlooney
online version: https://learn.microsoft.com/powershell/module/teams/new-csgrouppolicyassignment
schema: 2.0.0
title: New-CsGroupPolicyAssignment
---

# New-CsGroupPolicyAssignment

## SYNOPSIS

This cmdlet is used to assign a policy to a security group or distribution list.

## SYNTAX

```
New-CsGroupPolicyAssignment -GroupId <String> -PolicyType <String> -PolicyName <String> [-Rank <Int32>]
 [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
> [!NOTE]
> As of May 2023, group policy assignment functionality in Teams PowerShell Module has been extended to support all policy types used in Teams except for the following:
> - Teams App Permission Policy
> - Teams Network Roaming Policy
> - Teams Emergency Call Routing Policy
> - Teams Voice Applications Policy
> - Teams Upgrade Policy
>
> This cmdlet will be deprecated in the future. Going forward, group policy assignment can be performed by using the corresponding Grant-Cs[PolicyType] cmdlet with the '-Group' parameter.

This cmdlet is used to assign a policy to a Microsoft 365 group, a security group, or a distribution list. When creating a group policy assignment, you must specify a rank, which indicates the precedence of that assignment relative to any other group assignments for the same policy type that may exist. The assignment will be applied to users in the group for any user that does not have a direct policy assignment, provided the user does not have any higher-ranking assignments from other groups for the same policy type.

The group policy assignment rank is set at the time a policy is assigned to a group and it is relative to other group policy assignments of the same policy type. For example, if there are two groups, each assigned a Teams Meeting policy, then one of the group assignments will be rank 1 while the other will be rank 2. It's helpful to think of rank as determining the position of each policy assignment in an ordered list, from highest rank to lowest rank. In fact, rank can be specified as any number, but these are converted into sequential values 1, 2, 3, etc. with 1 being the highest rank. When assigning a policy to a group, set the rank to be the position in the list where you want the new group policy assignment to be. If a rank is not specified, the policy assignment will be given the lowest rank, corresponding to the end of the list. Assignments applied directly to a user will be treated like rank 0, having precedence over all assignments applied via groups.

Once a group policy assignment is created, the policy assignment will be propagated to the members of the group, including users that are added to the group after the assignment was created. Propagation time of the policy assignments to members of the group varies based on the number of users in the group. Propagation time for subsequent group membership changes also varies based on the number of users being added or removed from the group. For large groups, propagation to all members may take 24 hours or more. When using group policy assignment, the recommended maximum group membership size is 50,000 users per group.

> [!NOTE]
> - A given policy type can be assigned to at most 64 groups, across policy instances for that type.
> - Policy assignments are only propagated to users that are direct members of the group; the assignments are not propagated to members of nested groups.
> - Direct user assignments of policy take precedence over any group policy assignments for a given policy type. Group PolicyPolicy assignments only take effect to a user if that user does not have a direct policy assignment.
> - Get-CsOnlineUser only shows *direct* assignments of policy. It does not show the effect of group policy assignments. To view a specific user's effective policy, use `Get-CsUserPolicyAssignment`. This cmdlet shows whether the effective policy is from a direct assignment or from a group, as well as the ranked order of each group policy assignment in the case where a user is a member of more than 1 group with a group policy assignment of the same policy type. For example, to view all TeamsMeetingPolicy assignments for a given user, $user, run the following powershell cmdlet:  `Get-CsUserPolicyAssignment -Identity $user -PolicyType TeamsMeetingPolicy|select -ExpandProperty PolicySource`.  For details, see [Get-CsUserPolicyAssignment](https://learn.microsoft.com/powershell/module/teams/get-csuserpolicyassignment).
> - Group policy assignment is currently not available in the Microsoft 365 DoD deployment.

## EXAMPLES

### Example 1
In this example, a policy is assigned to a group specified by its object id.

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
In this example, the policy assignment rank is set to 2. The current rank 2 policy assignment of the same type will be updated to rank 3.

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

### -Confirm
Prompts you for confirmation before running the cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GroupId
The ID of a batch policy assignment operation.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PassThru
Returns true when the command succeeds

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -PolicyName
The name of the policy to be assigned.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PolicyType
The type of policy to be assigned.

```yaml
Type: String
Parameter Sets: (All)
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
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Shows what would happen if the cmdlet runs.
The cmdlet is not run.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [About CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Get-CsUserPolicyAssignment](https://learn.microsoft.com/powershell/module/teams/get-csuserpolicyassignment)

[Get-CsGroupPolicyAssignment](https://learn.microsoft.com/powershell/module/teams/get-csgrouppolicyassignment)

[Remove-CsGroupPolicyAssignment](https://learn.microsoft.com/powershell/module/teams/remove-csgrouppolicyassignment)
