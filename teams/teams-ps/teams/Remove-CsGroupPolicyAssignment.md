---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/remove-csgrouppolicyassignment
schema: 2.0.0
author: tomkau
ms.author: tomkau
ms.reviewer: williamlooney
---

# Remove-CsGroupPolicyAssignment

## SYNOPSIS

This cmdlet is used to remove a group policy assignment.

## SYNTAX

```
Remove-CsGroupPolicyAssignment -GroupId <String> -PolicyType <String> [-Break]
 [-HttpPipelineAppend <SendAsyncStep[]>] [-HttpPipelinePrepend <SendAsyncStep[]>] [-PassThru] [-Proxy <Uri>]
 [-ProxyCredential <PSCredential>] [-ProxyUseDefaultCredentials] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet removes the policy of a specific type from a group.  A group can only be assigned one policy of a given type, so the name of the policy to be removed does not need to be specified.

When a policy assignment is removed from a group, any other group policy assignments of the same type that have lower rank will be updated.  For example, if the policy assignment with rank 2 is removed, then the rank 3 and 4 policy assignments will be updated to rank  2 and 3 respectively.

## EXAMPLES

### EXAMPLE 1
```
Get-CsGroupPolicyAssignment -PolicyType TeamsMeetingPolicy

GroupId                              PolicyType         PolicyName Rank CreatedTime           CreatedBy
-------                              ----------         ---------- ---- -----------           ---------
d8ebfa45-0f28-4d2d-9bcc-b158a49e2d17 TeamsMeetingPolicy AllOn      1    10/29/2019 3:57:27 AM aeb7c0e7-2f6d-43ef-bf33-bfbcb93fdc64
e050ce51-54bc-45b7-b3e6-c00343d31274 TeamsMeetingPolicy AllOff     2    11/2/2019 12:20:41 AM aeb7c0e7-2f6d-43ef-bf33-bfbcb93fdc64
566b8d39-5c5c-4aaa-bc07-4f36278a1b38 TeamsMeetingPolicy Kiosk      3    11/2/2019 12:14:41 AM aeb7c0e7-2f6d-43ef-bf33-bfbcb93fdc64

Remove-CsGroupPolicyAssignment -GroupId e050ce51-54bc-45b7-b3e6-c00343d31274 -PolicyType TeamsMeetingPolicy

Get-CsGroupPolicyAssignment -PolicyType TeamsMeetingPolicy

GroupId                              PolicyType         PolicyName Rank CreatedTime           CreatedBy
-------                              ----------         ---------- ---- -----------           ---------
d8ebfa45-0f28-4d2d-9bcc-b158a49e2d17 TeamsMeetingPolicy AllOn      1    10/29/2019 3:57:27 AM aeb7c0e7-2f6d-43ef-bf33-bfbcb93fdc64
566b8d39-5c5c-4aaa-bc07-4f36278a1b38 TeamsMeetingPolicy Kiosk      2    11/2/2019 12:14:41 AM aeb7c0e7-2f6d-43ef-bf33-bfbcb93fdc64
```

In this example, the policy assignment with rank 2 is removed.  As a result, the policy assignment with rank 3 is updated to rank 2.

## PARAMETERS

### -GroupId
The ID of the group from which the assignment will be removed.

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
The policy type of the assignment to be removed from the group.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [About CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[New-CsGroupPolicyAssignment](https://learn.microsoft.com/powershell/module/teams/new-csgrouppolicyassignment)

[Get-CsGroupPolicyAssignment](https://learn.microsoft.com/powershell/module/teams/get-csgrouppolicyassignment)

[Set-CsGroupPolicyAssignment](https://learn.microsoft.com/powershell/module/teams/set-csgrouppolicyassignment)
