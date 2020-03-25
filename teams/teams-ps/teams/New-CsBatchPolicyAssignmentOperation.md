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

> [!NOTE]
> This cmdlet is currently in public preview. 

## SYNOPSIS
This cmdlet is used to assign a policy to a batch of users.

## SYNTAX

```
New-CsBatchPolicyAssignmentOperation -PolicyType <String> -PolicyName <String> -Identity <Array> [-OperationName <String>]
```

## DESCRIPTION
When a policy is assigned to a batch of users, the assignments are performed as an asynchronous operation.  The cmdlet returns the operation ID which can be used to track the progress and status of the assignments.

Users can be specified by their object ID (guid) or by their UPN/SIP/email (user@contoso.com).

A batch may contain up to 20,000 users.

Batch policy assignment is currently limited to the following policy types:
CallingLineIdentity, OnlineVoiceRoutingPolicy, TeamsAppSetupPolicy, TeamsAppPermissionPolicy, TeamsCallingPolicy, TeamsCallParkPolicy, TeamsChannelsPolicy, TeamsEducationAssignmentsAppPolicy, TeamsEmergencyCallingPolicy, TeamsMeetingBroadcastPolicy, TeamsEmergencyCallRoutingPolicy, TeamsMeetingPolicy, TeamsMessagingPolicy, TeamsUpdateManagementPolicy, TeamsUpgradePolicy,  TeamsVerticalPackagePolicy, TeamsVideoInteropServicePolicy, TenantDialPlan

## EXAMPLES

### Example 1
In this example, the batch of users is specified as an array of user email addresses.

```
$users_ids = @("psmith@contoso.com","tsanchez@contoso.com","bharvest@contoso.com")
New-CsBatchPolicyAssignmentOperation -PolicyType TeamsMeetingPolicy -PolicyName Kiosk -Identity $users_ids -OperationName "Batch assign Kiosk"
```

### Example 2
In this example, the batch of users is read from a text file containing user object IDs (guids).

```
$user_ids = Get-Content .\users_ids.txt
New-CsBatchPolicyAssignmentOperation -PolicyType TeamsMeetingPolicy -PolicyName Kiosk -Identity $users_ids -OperationName "Batch assign Kiosk"
```

### Example 3
In this example, the batch of users is obtained by connecting to Azure AD and retrieving a collection of users and then referencing their user principal names.

```
Connect-AzureAD
$users = Get-AzureADUser
New-CsBatchPolicyAssignmentOperation -PolicyType TeamsMeetingPolicy -PolicyName Kiosk -Identity $users.UserPrincipalName -OperationName "batch assign kiosk"
```

## PARAMETERS

### -Identity
An array of users, specified either as object IDs (guid) or as UPN/SIP/email.  There is a maximum of 20,000 users per batch.

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

[Get-CsBatchPolicyAssignmentOperation]()
