---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
online version:
schema: 2.0.0
author: tomkau
ms.author: tomkau
ms.reviewer:
---

# Get-CsUserPolicyAssignment

## SYNOPSIS
NOTE: This cmdlet is currently only available in limited preview in the pre-release Teams PowerShell module.

This cmdlet is used to return the policy assignments for a user, both directly assigned and inherited from a group.

## SYNTAX

```
Get-CsUserPolicyAssignment -Identity <String> [-PolicyType <String>]
```

## DESCRIPTION
This cmdlets returns the effective policies for a user, based on either direct policy assignment or inheritance from a group policy assignment.  For a given policy type, if an effective policy is not returned, this indicates that the effective policy for the user is either the tenant global default policy (if set) or the system global default policy.

This cmdlet does not currently support returning policies for multiple users.

## EXAMPLES

### Example 1
This examples returns the policies that are either directly assigned to a user or that the user inherited from a group.

```
Get-CsUserPolicyAssignment -Identity 3b90faad-9056-49ff-8357-0b53b1d45d39

PolicyName            PolicyType
----------            ----------
AllowCalling          TeamsCallingPolicy
Employees Events      TeamsMeetingBroadcastPolicy
Kiosk                 TeamsMeetingPolicy
```

### Example 2
The PolicySource property can be expanded to show  more details for a particular policy type.  The PolicySource property indicates whether a particular policy was directly assigned to the user or inherited from a group.

In this example, the details for the TeamsBroadcastMeetingPolicy are shown. The user was directly assigned the "Employees Events" policy, which took precedence over the "Vendor Live Events" policy which is assigned to a group that the user belongs to.

```
Get-CsUserPolicyAssignment -Identity 3b90faad-9056-49ff-8357-0b53b1d45d39 -PolicyType TeamsMeetingBroadcastPolicy | select -ExpandProperty PolicySource

AssignmentType PolicyName         Reference
-------------- ----------         ---------
Direct         Employees Events
Group          Vendor Live Events 566b8d39-5c5c-4aaa-bc07-4f36278a1b38
```


### Example 3
In this example, the details for the TeamsMeetingPolicy are shown. The user is a member of two groups, each of which is assigned a TeamsMeetingPolicy.  

```
Get-CsUserPolicyAssignment -Identity 3b90faad-9056-49ff-8357-0b53b1d45d39 -PolicyType TeamsMeetingPolicy | select -ExpandProperty PolicySource

AssignmentType PolicyName Reference
-------------- ---------- ---------
Group          AllOn      d8ebfa45-0f28-4d2d-9bcc-b158a49e2d17
Group          Kiosk      566b8d39-5c5c-4aaa-bc07-4f36278a1b38
```

The user has inherited the "AllOn" policy because the priority of the assignment is higher than that of the "Kiosk" policy assignment to the other group.

```
Get-CsGroupPolicyAssignment -PolicyType TeamsMeetingPolicy

GroupId                              PolicyName PolicyType         Priority
-------                              ---------- ----------         --------
d8ebfa45-0f28-4d2d-9bcc-b158a49e2d17 AllOn      TeamsMeetingPolicy 1
566b8d39-5c5c-4aaa-bc07-4f36278a1b38 Kiosk      TeamsMeetingPolicy 2
```

## PARAMETERS

### -Identity
The identify of the user whose policy assignments will be returned.

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
Use to filter to a specific policy type.

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

[New-CsGroupPolicyAssignment]()

[Set-CsGroupPolicyAssignment]()

[Remove-CsGroupPolicyAssignment]()
