---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Locale: en-US
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/get-csgrouppolicyassignment
schema: 2.0.0
title: Get-CsGroupPolicyAssignment
---

# Get-CsGroupPolicyAssignment

## SYNOPSIS

This cmdlet is used to return group policy assignments.

## SYNTAX

```powershell
Get-CsGroupPolicyAssignment [-GroupId <String>] [-PolicyType <String>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlets returns group policy assignments.  Optional parameters allow the results to be restricted to policies assigned to a specific group or policies of a specific type.

## EXAMPLES

### Example 1
In this example, all group policy assignments are returned.

```powershell
Get-CsGroupPolicyAssignment

GroupId                              PolicyType                  PolicyName         Rank CreatedTime            CreatedBy
-------                              ----------                  ----------         ---- -----------            ---------
566b8d39-5c5c-4aaa-bc07-4f36278a1b38 TeamsMeetingBroadcastPolicy Vendor Live Events 1    10/25/2019 12:40:09 AM aeb7c0e7-2f6d-43ef-bf33-bfbcb93fdc64
d8ebfa45-0f28-4d2d-9bcc-b158a49e2d17 TeamsMeetingPolicy          AllOn              1    10/29/2019 3:57:27 AM  aeb7c0e7-2f6d-43ef-bf33-bfbcb93fdc64
e2a3ed24-97be-494d-8d3c-dbc04cbb878a TeamsCallingPolicy          AllowCalling       1    11/4/2019 12:54:27 AM  aeb7c0e7-2f6d-43ef-bf33-bfbcb93fdc64
19b881b4-c54c-4075-b1e8-a6ce55b12818 TeamsMeetingPolicy          Kiosk              2    11/1/2019 8:22:06 PM   aeb7c0e7-2f6d-43ef-bf33-bfbcb93fdc64
0c0c1b45-bfc9-4718-b8ae-291439ac6fa4 TeamsCallingPolicy          AllowCalling       2    11/1/2019 10:51:43 PM  aeb7c0e7-2f6d-43ef-bf33-bfbcb93fdc64
19c4909c-7d34-4e1f-b736-47caa2205768 TeamsMeetingBroadcastPolicy Employees Events   2    11/4/2019 12:56:57 AM  aeb7c0e7-2f6d-43ef-bf33-bfbcb93fdc64
566b8d39-5c5c-4aaa-bc07-4f36278a1b38 TeamsCallingPolicy          DisallowCalling    3    11/1/2019 10:53:16 PM  aeb7c0e7-2f6d-43ef-bf33-bfbcb93fdc64
```

### Example 2
In this example, only the policies assigned to a specific group are returned.

```powershell
Get-CsGroupPolicyAssignment -GroupId e050ce51-54bc-45b7-b3e6-c00343d31274

GroupId                              PolicyType                  PolicyName         Rank CreatedTime            CreatedBy
-------                              ----------                  ----------         ---- -----------            ---------
566b8d39-5c5c-4aaa-bc07-4f36278a1b38 TeamsMeetingBroadcastPolicy Vendor Live Events 1    10/25/2019 12:40:09 AM aeb7c0e7-2f6d-43ef-bf33-bfbcb93fdc64
566b8d39-5c5c-4aaa-bc07-4f36278a1b38 TeamsCallingPolicy          AllowCalling       3    11/1/2019 10:53:16 PM  aeb7c0e7-2f6d-43ef-bf33-bfbcb93fdc64
566b8d39-5c5c-4aaa-bc07-4f36278a1b38 TeamsMeetingPolicy          kiosk              7    11/2/2019 12:14:41 AM  aeb7c0e7-2f6d-43ef-bf33-bfbcb93fdc64
```

### Example 3
In this example, only the policies of a specific type are returned.

Get-CsGroupPolicyAssignment -PolicyType TeamsCallingPolicy

```powershell
GroupId                              PolicyType         PolicyName   Rank CreatedTime           CreatedBy
-------                              ----------         ----------   ---- -----------           ---------
e2a3ed24-97be-494d-8d3c-dbc04cbb878a TeamsCallingPolicy AllowCalling 1    11/4/2019 12:54:27 AM aeb7c0e7-2f6d-43ef-bf33-bfbcb93fdc64
0c0c1b45-bfc9-4718-b8ae-291439ac6fa4 TeamsCallingPolicy AllowCalling 2    11/1/2019 10:51:43 PM aeb7c0e7-2f6d-43ef-bf33-bfbcb93fdc64
566b8d39-5c5c-4aaa-bc07-4f36278a1b38 TeamsCallingPolicy AllowCalling 3    11/1/2019 10:53:16 PM aeb7c0e7-2f6d-43ef-bf33-bfbcb93fdc64
```

## PARAMETERS

### -GroupId
The ID of a group whose policy assignments will be returned.

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

### -PolicyType
The policy type for which group policy assignments will be returned.
Possible values:

ApplicationAccessPolicy
CallingLineIdentity
ExternalAccessPolicy
OnlineAudioConferencingRoutingPolicy
OnlineVoicemailPolicy
OnlineVoiceRoutingPolicy
TeamsAppSetupPolicy
TeamsAudioConferencingPolicy
TeamsCallHoldPolicy
TeamsCallingPolicy
TeamsCallParkPolicy
TeamsChannelsPolicy
TeamsComplianceRecordingPolicy
TeamsCortanaPolicy
TeamsEmergencyCallingPolicy
TeamsEmergencyCallRoutingPolicy
TeamsEnhancedEncryptionPolicy
TeamsEventsPolicy
TeamsFeedbackPolicy
TeamsFilesPolicy
TeamsIPPhonePolicy
TeamsMediaLoggingPolicy
TeamsMeetingBrandingPolicy
TeamsMeetingBroadcastPolicy
TeamsMeetingPolicy
TeamsMeetingTemplatePermissionPolicy
TeamsMessagingPolicy
TeamsMobilityPolicy
TeamsRoomVideoTeleConferencingPolicy
TeamsSharedCallingRoutingPolicy
TeamsShiftsPolicy
TeamsUpdateManagementPolicy
TeamsVdiPolicy
TeamsVideoInteropServicePolicy
TeamsVirtualAppointmentsPolicy
TenantDialPlan

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [About CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[New-CsGroupPolicyAssignment](https://learn.microsoft.com/powershell/module/teams/new-csgrouppolicyassignment)

[Set-CsGroupPolicyAssignment](https://learn.microsoft.com/powershell/module/teams/set-csgrouppolicyassignment)

[Remove-CsGroupPolicyAssignment](https://learn.microsoft.com/powershell/module/teams/remove-csgrouppolicyassignment)
