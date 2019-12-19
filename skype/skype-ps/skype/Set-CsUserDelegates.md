---
external help file: Microsoft.Rtc.Management.dll-help.xml
applicable: Skype for Business Server 2019
title: Set-CsUserDelegates
schema: 2.0.0
manager: rogupta
author: hirenshah1
ms.author: hirshah
ms.reviewer:
---

# Set-CsUserDelegates

## SYNOPSIS
This cmdlet modifies the specified user’s delegation settings, returns an object of delegates list and displays the list of delegates, in case of success. In case of failure, an appropriate error message will be shown.

## SYNTAX

```
Set-CsUserDelegates -Delegates <System.Management.Automation.PSListModifier`1[System.String]> [-User] <String>
 [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
The feature enables the use of SEFAUtil functionality in PowerShell. SEFAUtil (Secondary Extension Feature Activation) enables Skype server administrators and helpdesk agents to configure delegate-ringing, call-forwarding and Group Call Pickup settings on behalf of a Skype server user. This tool also allows administrators to query the call-routing settings that are published for a particular user. The cmdlets introduced in this feature can only be run by members of the following groups for On-prem deployments, per the access level specified below: • CsAdministrator - Get and Set for all cmdlets • CsVoiceAdministrator - Get and Set for all cmdlets • CsServerAdministrator - Get and Set for all cmdlets • CsHelpDesk - Get for all cmdlets Server auto-discovery needs to be enabled. There are no additional licensing requirements for use of the cmdlets.

## EXAMPLES

### Example 1
###-------------------------- Example --------------------------
```
Set-CsUserDelegates -Identity <UserIdParameter> [-Delegates @{add=[list]}] [-Delegates @{remove=[list]}]
```
This cmdlet adds or removes a delegate.


### Example 2
###-------------------------- Example --------------------------
```
Set-CsUserDelegates -Identity <UserIdParameter> [-Delegates @{replace=[list]}]
```
This cmdlet sets a delegate list to specific delegates.


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

### -Delegates
{{ Fill Delegates Description }}

```yaml
Type: System.Management.Automation.PSListModifier`1[System.String]
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
{{ Fill Force Description }}

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

### -User
{{ Fill User Description }}

```yaml
Type: String
Parameter Sets: (All)
Aliases: DisplayName, SipAddress, Identity

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.String

## OUTPUTS

### System.Object
## NOTES

## RELATED LINKS
