---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
online version:
schema: 2.0.0
author: tomkau
ms.author: tomkau
ms.reviewer:
---

# Get-CsGroupPolicyAssignment

## SYNOPSIS
NOTE: This cmdlet is currently only available in limited preview in the pre-release Teams PowerShell module.

This cmdlet is used to return group policy assignments.

## SYNTAX

```
Get-CsGroupPolicyAssignment [-GroupId <String>] [-PolicyType <String>]
```

## DESCRIPTION
This cmdlets returns group policy assignments.  Optional parameters allow the results to be restricted to policies assigned to a specific group or policies of a specific type.

## EXAMPLES

### Example 1
In this example, all group policy assignments are returned.

```
Get-CsGroupPolicyAssignment 

GroupId                              PolicyName            PolicyType           Priority
-------                              ----------            ----------           --------
d8ebfa45-0f28-4d2d-9bcc-b158a49e2d17 Host:AllOn            TeamsMeetingPolicy   1
e050ce51-54bc-45b7-b3e6-c00343d31274 Tenant:SalesMessaging TeamsMessagingPolicy 2
e050ce51-54bc-45b7-b3e6-c00343d31274 Host:AllOff           TeamsMeetingPolicy   2
566b8d39-5c5c-4aaa-bc07-4f36278a1b38 Host:Kiosk            TeamsMeetingPolicy   3
```

### Example 2
In this example, only the policies assigned to a specific group are returned.

```
Get-CsGroupPolicyAssignment -GroupId e050ce51-54bc-45b7-b3e6-c00343d31274

GroupId                              PolicyName            PolicyType           Priority
-------                              ----------            ----------           --------
e050ce51-54bc-45b7-b3e6-c00343d31274 Tenant:SalesMessaging TeamsMessagingPolicy 2
e050ce51-54bc-45b7-b3e6-c00343d31274 Host:AllOff           TeamsMeetingPolicy   2
```

### Example 3
In this example, only the policies of a specific type are returned.

Get-CsGroupPolicyAssignment -PolicyType TeamsMeetingPolicy

```
GroupId                              PolicyName  PolicyType         Priority
-------                              ----------  ----------         --------
d8ebfa45-0f28-4d2d-9bcc-b158a49e2d17 Host:AllOn  TeamsMeetingPolicy 1
e050ce51-54bc-45b7-b3e6-c00343d31274 Host:AllOff TeamsMeetingPolicy 2
566b8d39-5c5c-4aaa-bc07-4f36278a1b38 Host:Kiosk  TeamsMeetingPolicy 3
```

## PARAMETERS

### -GroupId
The ID of a group whose policy assignments will be returned.

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

### -PolicyType
The policy type for which group policy assignments will be returned.

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
