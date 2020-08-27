---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
online version: https://docs.microsoft.com/powershell/module/teams/new-csbatchpolicyassignmentoperation
schema: 2.0.0
author: tomkau
ms.author: tomkau
ms.reviewer:
---

# New-CsBatchPolicyAssignmentOperation

## SYNOPSIS

This cmdlet is used to assign or unassign a policy to a batch of users.

## SYNTAX

```
New-CsBatchPolicyAssignmentOperation -PolicyType <String> -PolicyName <String> -Identity <Array> [-OperationName <String>]
```

## DESCRIPTION
When a policy is assigned to a batch of users, the assignments are performed as an asynchronous operation.  The cmdlet returns the operation ID which can be used to track the progress and status of the assignments.

Users can be specified by their object ID (guid) or by their SIP address (user@contoso.com). Note that a user's SIP address often has the same value as the User Principal Name (UPN), but this is not required. If a user is specified using their UPN, but it has a different value than their SIP address, then then policy assignment will fail for the user.

A batch may contain up to 5,000 users. If a batch includes duplicate users, the duplicates will be removed from the batch before processing and status will only be provided for the unique users remaining in the batch. For best results, do not submit more than a few batches at a time.  Allow batches to complete processing before submitting more batches.

You must be a Teams service admin, a Teams communication admin, or Global Administrator to run the cmdlet.

Batch policy assignment is currently limited to the following policy types:
CallingLineIdentity, ExternalAccessPolicy, OnlineVoiceRoutingPolicy, TeamsAppSetupPolicy, TeamsAppPermissionPolicy, TeamsCallingPolicy, TeamsCallParkPolicy, TeamsChannelsPolicy, TeamsEducationAssignmentsAppPolicy, TeamsEmergencyCallingPolicy, TeamsMeetingBroadcastPolicy, TeamsEmergencyCallRoutingPolicy, TeamsMeetingPolicy, TeamsMessagingPolicy, TeamsUpdateManagementPolicy, TeamsUpgradePolicy,  TeamsVerticalPackagePolicy, TeamsVideoInteropServicePolicy, TenantDialPlan

## EXAMPLES

### Example 1
In this example, the batch of users is specified as an array of user SIP addresses.

```
$users_ids = @("psmith@contoso.com","tsanchez@contoso.com","bharvest@contoso.com")
New-CsBatchPolicyAssignmentOperation -PolicyType TeamsMeetingPolicy -PolicyName Kiosk -Identity $users_ids -OperationName "Batch assign Kiosk"
```

### Example 2
In this example, a policy is removed from a batch of users by passing $null as the policy name.

```
$users_ids = @("2bdb15a9-2cf1-4b27-b2d5-fcc1d13eebc9", "d928e0fc-c957-4685-991b-c9e55a3534c7", "967cc9e4-4139-4057-9b84-1af80f4856fc")
New-CsBatchPolicyAssignmentOperation -PolicyType TeamsMeetingPolicy -PolicyName $null -Identity $users_ids -OperationName "Batch unassign meeting policy"
```

### Example 3
In this example, the batch of users is read from a text file containing user object IDs (guids).

```
$users_ids = Get-Content .\users_ids.txt
New-CsBatchPolicyAssignmentOperation -PolicyType TeamsMeetingPolicy -PolicyName Kiosk -Identity $users_ids -OperationName "Batch assign Kiosk"
```

### Example 4
In this example, the batch of users is obtained by connecting to Azure AD and retrieving a collection of users and then referencing the SipProxyAddress property.

```
Connect-AzureAD
$users = Get-AzureADUser
New-CsBatchPolicyAssignmentOperation -PolicyType TeamsMeetingPolicy -PolicyName Kiosk -Identity $users.SipProxyAddress -OperationName "batch assign kiosk"
```

## PARAMETERS

### -Identity
An array of users, specified either using object IDs (guid) or SIP addresses.  There is a maximum of 5,000 users per batch.

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
The name of the policy to be assigned to the users. To remove the currently assigned policy, use $null or an empty string "".

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
The name of the policy to be assigned to the users.

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

### -OperationName
An optional name for the batch assignment operation.

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

### OperationId
The ID of the operation that can be used with the Get-CsBatchPolicyAssignmentOperation cmdlet to get the status of the operation.

## NOTES

## RELATED LINKS

[Get-CsBatchPolicyAssignmentOperation](Get-CsBatchPolicyAssignmentOperation.md)
