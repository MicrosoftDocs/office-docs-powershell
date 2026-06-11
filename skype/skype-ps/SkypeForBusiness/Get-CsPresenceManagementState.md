---
applicable: Skype for Business Server 2015, Skype for Business Server 2019
author: hirenshah1
external help file: Microsoft.Rtc.Management.dll-help.xml
Locale: en-US
manager: rogupta
Module Name: SkypeForBusiness
ms.author: hirshah
online version: https://learn.microsoft.com/powershell/module/skypeforbusiness/get-cspresencemanagementstate
schema: 2.0.0
title: Get-CsPresenceManagementState
---

# Get-CsPresenceManagementState

## SYNOPSIS
Use the Get-CsPresenceManagementState to return the notification settings of a computer or pool.
The management state settings determine the batching and timing of Skype for Business Server notifications.

## SYNTAX

```
Get-CsPresenceManagementState [[-Fqdn] <Fqdn>] [-Force] [<CommonParameters>]
```

## DESCRIPTION
To return a list of all the Role-Based Access Control (RBAC) roles a cmdlet has been assigned to (including any custom RBAC roles you have created), run the following command from the Windows PowerShell prompt.

`Get-CsAdminRole | Where-Object {$_.Cmdlets -Match "\<DesiredCmdletName\>"}`

## EXAMPLES

### Example 1
```
Get-CsPresenceManagementState -Fqdn "atl-mcs-001.litwareinc.com"
```

This example returns the management state of a pool specified by its fully qualified domain name (FQDN).


## PARAMETERS

### -Force

> Applicable: Skype for Business Server 2015, Skype for Business Server 2019

The Force parameter is not implemented for this cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Fqdn

> Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Specifies the computer or pool to report.
The computer or pool should be referenced by using its fully qualified domain name (FQDN).
For example, -ComputerName "atl-mcs-001.litwareinc.com".
If a pool is specified, the output contains the management state of all the computers in the pool.
If FQDN is not specified, the settings for the local machine will be modified.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).


## INPUTS

### None


## OUTPUTS

### Microsoft.Rtc.Management.PresenceMaintain.Cmdlet.PresenceManagementState


## NOTES


## RELATED LINKS

[Set-CsPresenceManagementState](Set-CsPresenceManagementState.md)
