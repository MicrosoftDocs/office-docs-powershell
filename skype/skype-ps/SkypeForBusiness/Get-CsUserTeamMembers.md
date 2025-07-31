---
applicable: Skype for Business Server 2019
author: hirenshah1
external help file: Microsoft.Rtc.Management.dll-help.xml
Locale: en-US
manager: rogupta
Module Name: SkypeForBusiness
ms.author: hirshah
online version: https://learn.microsoft.com/powershell/module/skype/get-csuserteammembers
schema: 2.0.0
title: Get-CsUserTeamMembers
---

# Get-CsUserTeamMembers

## SYNOPSIS
This cmdlet returns an object containing list of team members and displays the object on screen, in case of success. In case of failure, the appropriate error message is shown.

## SYNTAX

```
Get-CsUserTeamMembers [-User] <String> [-Force] [<CommonParameters>]
```

## DESCRIPTION
The feature enables the use of SEFAUtil functionality in PowerShell. SEFAUtil (Secondary Extension Feature Activation) enables Skype server administrators and helpdesk agents to configure delegate-ringing, call-forwarding and Group Call Pickup settings on behalf of a Skype server user. This tool also allows administrators to query the call-routing settings that are published for a particular user.

The cmdlets introduced in this feature can only be run by members of the following groups for On-prem deployments, per the access level specified below:

- CsAdministrator - Get and Set for all cmdlets
- CsVoiceAdministrator - Get and Set for all cmdlets
- CsServerAdministrator - Get and Set for all cmdlets
- CsHelpDesk - Get for all cmdlets

Server auto-discovery needs to be enabled. There are no additional licensing requirements for use of the cmdlets.

## EXAMPLES

###-------------------------- Example --------------------------
```
Get-CsUserTeamMembers -User jphillips@contoso.com
```

This example returns the list of team members for the specified user and displays on the screen.

## PARAMETERS

### -User

> Applicable: Skype for Business Server 2019CU1

Specifies the identity of the target user.
Acceptable values include:
Example: jphillips@contoso.com
Example: sip:jphillips@contoso.com

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### an object of team members list

## RELATED LINKS
