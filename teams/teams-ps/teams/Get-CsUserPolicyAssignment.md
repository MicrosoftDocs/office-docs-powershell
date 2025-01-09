---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/get-csuserpolicyassignment
schema: 2.0.0
author: tomkau
ms.author: tomkau
ms.reviewer: williamlooney
---

# Get-CsUserPolicyAssignment

## SYNOPSIS

This cmdlet is used to return the policy assignments for a user, both directly assigned and inherited from a group.

## SYNTAX

### Get (Default)
```
Get-CsUserPolicyAssignment -Identity <String> [-PolicyType <String>] [-Break]
 [-HttpPipelineAppend <SendAsyncStep[]>] [-HttpPipelinePrepend <SendAsyncStep[]>] [-Proxy <Uri>]
 [-ProxyCredential <PSCredential>] [-ProxyUseDefaultCredentials] [<CommonParameters>]
```

### GetViaIdentity
```
Get-CsUserPolicyAssignment -InputObject <IIc3AdminConfigRpPolicyIdentity> [-PolicyType <String>] [-Break]
 [-HttpPipelineAppend <SendAsyncStep[]>] [-HttpPipelinePrepend <SendAsyncStep[]>] [-Proxy <Uri>]
 [-ProxyCredential <PSCredential>] [-ProxyUseDefaultCredentials] [<CommonParameters>]
```

## DESCRIPTION
This cmdlets returns the effective policies for a user, based on either direct policy assignment or inheritance from a group policy assignment.  For a given policy type, if an effective policy is not returned, this indicates that the effective policy for the user is either the tenant global default policy (if set) or the system global default policy.

This cmdlet does not currently support returning policies for multiple users.

## EXAMPLES

### Example 1
This examples returns the policies that are either directly assigned to a user or that the user inherited from a group.

```
Get-CsUserPolicyAssignment -Identity f0d9c148-27c1-46f5-9685-544d20170ea1

PolicyType                  PolicyName                 PolicySource
----------                  ----------                 ------------
TeamsMeetingPolicy          Kiosk                      {Kiosk, Kiosk}
MeetingPolicy               BposSAllModality           {BposSAllModality}
ExternalAccessPolicy        FederationAndPICDefault    {FederationAndPICDefault}
TeamsMeetingBroadcastPolicy Vendor Live Events         {Vendor Live Events, Employees Events}
TeamsCallingPolicy          AllowCalling               {AllowCalling}
```

### Example 2
The PolicySource property can be expanded to show  more details for a particular policy type.  The PolicySource property indicates whether a particular policy was directly assigned to the user or inherited from a group.

In this example, the details for the TeamsBroadcastMeetingPolicy are shown. The user was directly assigned the "Employees Events" policy, which took precedence over the "Vendor Live Events" policy which is assigned to a group (566b8d39-5c5c-4aaa-bc07-4f36278a1b38) that the user belongs to.

```
Get-CsUserPolicyAssignment -Identity 3b90faad-9056-49ff-8357-0b53b1d45d39 -PolicyType TeamsMeetingBroadcastPolicy | select -ExpandProperty PolicySource

AssignmentType PolicyName         Reference
-------------- ----------         ---------
Direct         Employees Events
Group          Vendor Live Events 566b8d39-5c5c-4aaa-bc07-4f36278a1b38
```

### Example 3
In this example, the details for the TeamsMeetingPolicy are shown. The user is a member of two groups, each of which is assigned a TeamsMeetingPolicy.  The user has inherited the "AllOn" policy because the priority of the assignment is higher than that of the "Kiosk" policy assignment to the other group.

```
Get-CsUserPolicyAssignment -Identity 3b90faad-9056-49ff-8357-0b53b1d45d39 -PolicyType TeamsMeetingPolicy | select -ExpandProperty PolicySource

AssignmentType PolicyName Reference
-------------- ---------- ---------
Group          AllOn      d8ebfa45-0f28-4d2d-9bcc-b158a49e2d17
Group          Kiosk      566b8d39-5c5c-4aaa-bc07-4f36278a1b38

Get-CsGroupPolicyAssignment -PolicyType TeamsMeetingPolicy

GroupId                              PolicyType         PolicyName Rank CreatedTime           CreatedBy
-------                              ----------         ---------- ---- -----------           ---------
d8ebfa45-0f28-4d2d-9bcc-b158a49e2d17 TeamsMeetingPolicy AllOn      1    10/29/2019 3:57:27 AM aeb7c0e7-2f6d-43ef-bf33-bfbcb93fdc64
566b8d39-5c5c-4aaa-bc07-4f36278a1b38 TeamsMeetingPolicy kiosk      2    11/2/2019 12:14:41 AM aeb7c0e7-2f6d-43ef-bf33-bfbcb93fdc64
```

## PARAMETERS

### -Identity
The identify of the user whose policy assignments will be returned.

The -Identity parameter can be in the form of the users ObjectID (taken from Microsoft Entra ID) or in the form of the UPN (a.smith@example.com)

```yaml
Type: String
Parameter Sets: Get
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InputObject
Identity Parameter
To construct, see NOTES section for INPUTOBJECT properties and create a hash table.

```yaml
Type: IIc3AdminConfigRpPolicyIdentity
Parameter Sets: GetViaIdentity
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -PolicyType
Use to filter to a specific policy type.

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

### -Break
Wait for .NET debugger to attach

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

### -HttpPipelineAppend
SendAsync Pipeline Steps to be appended to the front of the pipeline

```yaml
Type: SendAsyncStep[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HttpPipelinePrepend
SendAsync Pipeline Steps to be prepended to the front of the pipeline

```yaml
Type: SendAsyncStep[]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Proxy
The URI for the proxy server to use

```yaml
Type: Uri
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ProxyCredential
Credentials for a proxy server to use for the remote call

```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ProxyUseDefaultCredentials
Use the default credentials for the proxy

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Microsoft.Teams.Config.Cmdlets.Models.IIc3AdminConfigRpPolicyIdentity
## OUTPUTS

### Microsoft.Teams.Config.Cmdlets.Models.IEffectivePolicy
## NOTES
COMPLEX PARAMETER PROPERTIES

To create the parameters described below, construct a hash table containing the appropriate properties.
For information on hash tables, run Get-Help about_Hash_Tables.

INPUTOBJECT \<IIc3AdminConfigRpPolicyIdentity\>: Identity Parameter
  \[GroupId \<String\>\]: The ID of a group whose policy assignments will be returned.
  \[Identity \<String\>\]:
  \[OperationId \<String\>\]: The ID of a batch policy assignment operation.
  \[PolicyType \<String\>\]: The policy type for which group policy assignments will be returned.

## RELATED LINKS

[New-CsGroupPolicyAssignment](https://learn.microsoft.com/powershell/module/teams/new-csgrouppolicyassignment)

[Set-CsGroupPolicyAssignment](https://learn.microsoft.com/powershell/module/teams/set-csgrouppolicyassignment)

[Remove-CsGroupPolicyAssignment](https://learn.microsoft.com/powershell/module/teams/remove-csgrouppolicyassignment)
